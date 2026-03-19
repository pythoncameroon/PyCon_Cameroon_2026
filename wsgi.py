import os
import mimetypes

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')


def application(environ, start_response):
    path = environ.get('PATH_INFO', '/')

    file_path = os.path.join(STATIC_DIR, path.lstrip('/'))

    if os.path.isfile(file_path):
        content_type, _ = mimetypes.guess_type(file_path)
        content_type = content_type or 'application/octet-stream'
        with open(file_path, 'rb') as f:
            content = f.read()
        start_response('200 OK', [
            ('Content-Type', content_type),
            ('Content-Length', str(len(content))),
        ])
        return [content]

    index_path = os.path.join(STATIC_DIR, 'index.html')
    with open(index_path, 'rb') as f:
        content = f.read()
    start_response('200 OK', [
        ('Content-Type', 'text/html; charset=utf-8'),
        ('Content-Length', str(len(content))),
    ])
    return [content]
