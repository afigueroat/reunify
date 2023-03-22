from flask import Flask
from controllers.events import events_bp
from controllers.users import users_bp
from controllers.guests import guests_bp
from controllers.event_guests import event_guests_bp
from db_connection import init_db

app = Flask(__name__)
app.mysql = init_db(app)

app.register_blueprint(events_bp, url_prefix='/api')
app.register_blueprint(users_bp, url_prefix='/api') 
app.register_blueprint(guests_bp, url_prefix='/api') 
app.register_blueprint(event_guests_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)