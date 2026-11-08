#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把数学知识地图打包成单个 HTML 文件（无需服务器、无外部本地依赖）。"""
import pathlib
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent
DATA_FILES = [
    'overview.js',
    'analysis.js', 'analysis-b.js', 'analysis-c.js',
    'foundations-a.js', 'foundations-b.js',
    'algebra-a.js', 'algebra-b.js',
    'numbertheory-a.js', 'numbertheory-b.js',
    'geometry-a.js', 'geometry-b.js',
    'applied-a.js', 'applied-b.js',
    'discrete-a.js', 'discrete-b.js',
    'probability-a.js', 'probability-b.js',
    'extras-analysis-a.js', 'extras-analysis-b.js', 'extras-analysis-c.js',
    'extras-foundations.js',
    'extras-algebra.js',
    'extras-numbertheory.js',
    'extras-geometry.js',
    'extras-applied.js',
    'extras-discrete.js',
    'extras-probability.js',
    'learning.js',
]


def read(path):
    return path.read_text(encoding='utf-8')


def safe_js(code):
    # 避免内联脚本被内容中的 </script> 提前截断
    return code.replace('</script', '<\\/script').replace('</style', '<\\/style')


def fetch(url):
    with urllib.request.urlopen(url, timeout=25) as resp:
        return resp.read().decode('utf-8')


def main():
    index_path = ROOT / 'index.html'
    if not index_path.exists():
        sys.exit('错误：找不到 index.html')

    html = read(index_path)
    css = read(ROOT / 'css' / 'style.css')

    missing = [f for f in DATA_FILES if not (ROOT / 'js' / 'data' / f).exists()]
    if missing:
        sys.exit('错误：缺少数据文件：' + ', '.join(missing))

    data = '\n'.join(read(ROOT / 'js' / 'data' / f) for f in DATA_FILES)
    app = read(ROOT / 'js' / 'app.js')

    css_tag = '<link rel="stylesheet" href="css/style.css">'
    if css_tag not in html:
        sys.exit('错误：index.html 中找不到样式引用')

    # 只内联 KaTeX 样式（约 23KB），脚本仍从 CDN 回退加载，避免单文件过大
    katex_version = '0.16.11'
    katex_css_url = 'https://cdn.jsdelivr.net/npm/katex@' + katex_version + '/dist/katex.min.css'
    try:
        if '--offline' in sys.argv:
            raise RuntimeError('离线构建，跳过外部样式下载')
        katex_css = fetch(katex_css_url)
        katex_css = katex_css.replace(
            'url(fonts/',
            'url(https://cdn.jsdelivr.net/npm/katex@' + katex_version + '/dist/fonts/'
        )
        html = html.replace(css_tag, '<style>\n' + katex_css + '\n</style>\n' + css_tag)
        print('已内联 KaTeX 样式（公式脚本从 CDN 加载）')
    except Exception as exc:
        print('提示：KaTeX 样式内联失败，将使用 CDN 回退：' + str(exc))

    html = html.replace(css_tag, '<style>\n' + css + '\n</style>')

    # 单文件没有 vendor 目录，KaTeX 脚本直接指向 CDN，避免 404
    html = html.replace(
        '<script src="vendor/katex/katex.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>'
    )

    start_tag = '<script src="js/data/overview.js"></script>'
    end_tag = '<script src="js/app.js"></script>'
    i = html.find(start_tag)
    j = html.find(end_tag)
    if i < 0 or j < 0:
        sys.exit('错误：index.html 中找不到脚本引用锚点')
    j += len(end_tag)

    inline = (
        '<script>\n' + safe_js(data) + '\n</script>\n'
        '<script>\n' + safe_js(app) + '\n</script>'
    )
    html = html[:i] + inline + html[j:]

    out = ROOT / 'math-atlas.html'
    out.write_text(html, encoding='utf-8')

    print('打包成功：' + str(out))
    print('文件大小：%.0f KB' % (out.stat().st_size / 1024))
    print('直接双击 math-atlas.html 即可在浏览器中打开。')


if __name__ == '__main__':
    main()