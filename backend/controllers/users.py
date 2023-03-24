from flask import Blueprint, request, jsonify, current_app
from flask_mysqldb import MySQL

users_bp = Blueprint('users', __name__)

# CREATE operation
@users_bp.route('/users', methods=['POST'])
def create_user():
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']
    phone = request.json.get('phone', None)
    other_info = request.json.get('otherInfo', None)

    cur = current_app.mysql.connection.cursor()
    cur.execute("INSERT INTO users (username, password, email, phone, other_info) VALUES (%s, %s, %s, %s, %s)",
                (username, password, email, phone, other_info))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'User created successfully'}), 201

# READ operation
@users_bp.route('/users', methods=['GET'])
def get_all_users():
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    cur.close()

    return jsonify(data), 200

@users_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))
    data = cur.fetchone()
    cur.close()

    if data:
        return jsonify(data), 200
    else:
        return jsonify({'message': 'User not found'}), 404

# UPDATE operation
@users_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    email = request.json.get('email', None)
    phone = request.json.get('phone', None)
    other_info = request.json.get('other_info', None)

    cur = current_app.mysql.connection.cursor()
    cur.execute("UPDATE users SET username = %s, password = %s, email = %s, phone = %s, other_info = %s WHERE user_id = %s",
                (username, password, email, phone, other_info, user_id))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'User updated successfully'}), 200

# DELETE operation
@users_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("DELETE FROM users WHERE user_id = %s", (user_id,))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'User deleted successfully'}), 200

@users_bp.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    print(request.json)
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT email, password, user_id FROM users where email = %s", (email,))
    user = cur.fetchone()
    print(user)
    cur.close()

    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    if user[1] != password:
        return jsonify({"error": "Invalid email or password"}), 401

    # Generate and return the access token
    # You can use any authentication library of your choice to generate the token
    access_token = '123456789'

    return jsonify({"access_token": access_token}), 200