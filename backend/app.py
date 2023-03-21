from flask import Flask
from events import events_bp
from db_connection import init_db

app = Flask(__name__)
app.mysql = init_db(app)

app.register_blueprint(events_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)