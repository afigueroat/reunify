from flask_mysqldb import MySQL

def init_db(app):
    # Set MySQL connection details
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'p@ssw0rd1'
    app.config['MYSQL_DB'] = 'celebration_db'

    mysql = MySQL(app)
    return mysql
