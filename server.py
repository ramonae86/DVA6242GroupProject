from http.server import BaseHTTPRequestHandler
from requesthandlers import *
from pathlib import Path
import pymysql


class Server(BaseHTTPRequestHandler):

    def do_HEAD(self):
        return

    def do_POST(self):
        self.handle_post_request()

    def do_GET(self):
        self.respond()

    def handle_http(self):
        content_type = "text/plain"
        response_content = ""
        filepath = None

        if self.path == "/" or self.path.endswith(".html"):
            route_content = "index.html" if self.path == "/" else self.path.strip("/")
            filepath = Path(route_content)
            content_type = "text/html"
        elif self.path.endswith(".png"):
            context_type = "image/png"
            filepath = Path(self.path.strip("/"))
        elif self.path.endswith(".jpg"):
            context_type = "image/jpg"
            filepath = Path(self.path.strip("/"))
        elif self.path.endswith(".css"):
            context_type = "text/css"
            filepath = Path(self.path.strip("/"))
        else:
            filepath = Path(self.path.strip("/"))

        if filepath is not None:
            print('path : ' + str(filepath))
            if filepath.is_file() or str(filepath).endswith(".css"):
                if not self.path.endswith(".jpg") and not self.path.endswith(".png"):
                    response_content = filepath.open().read()
                    response_content = bytes(response_content, "UTF-8")
                else:
                    response_content = filepath.open('rb').read()
            else:
                content_type = "text/plain"
                response_content = "404 Not Found"

        self.send_response(200)
        self.send_header('Content-type', content_type)
        self.end_headers()
        return response_content

    def respond(self):
        conn = pymysql.connect(host='localhost', user='root', password='1459', database='cs6242')
        print("REST path : " + self.path)
        if self.path == '/favicon.ico':
            return
        else:
            content = self.handle_http()
            self.wfile.write(content)

        conn.close()

    def handle_post_request(self):
        content_length = int(self.headers['Content-Length'])
        request = self.rfile.read(content_length).decode()
        conn = pymysql.connect(host='localhost', user='root', password='1459', database='cs6242')
        if self.path == "/search":
            searchrequesthandler.handle_search_request(self, request, conn)

        conn.close()
