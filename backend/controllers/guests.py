from flask import Blueprint, request, jsonify, current_app
from flask_mysqldb import MySQL

guests_bp = Blueprint('guests', __name__)

# CREATE operation
@guests_bp.route('/guests', methods=['POST'])
def create_guest():
    guest_name = request.json['guest_name']
    email = request.json['email']
    phone = request.json.get('phone', None)
    other_info = request.json.get('other_info', None)

    cur = current_app.mysql.connection.cursor()
    cur.execute("INSERT INTO guests (guest_name, email, phone, other_info) VALUES (%s, %s, %s, %s)",
                (guest_name, email, phone, other_info))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Guest created successfully'}), 201

# READ operation
@guests_bp.route('/guests', methods=['GET'])
def get_all_guests():
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM guests")
    data = cur.fetchall()
    cur.close()

    return jsonify(data), 200

@guests_bp.route('/guests/<int:guest_id>', methods=['GET'])
def get_guest(guest_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM guests WHERE guest_id = %s", (guest_id,))
    data = cur.fetchone()
    cur.close()

    if data:
        return jsonify(data), 200
    else:
        return jsonify({'message': 'Guest not found'}), 404

# UPDATE operation
@guests_bp.route('/guests/<int:guest_id>', methods=['PUT'])
def update_guest(guest_id):
    guest_name = request.json.get('guest_name', None)
    email = request.json.get('email', None)
    phone = request.json.get('phone', None)
    other_info = request.json.get('other_info', None)

    cur = current_app.mysql.connection.cursor()
    cur.execute("UPDATE guests SET guest_name = %s, email = %s, phone = %s, other_info = %s WHERE guest_id = %s",
                (guest_name, email, phone, other_info, guest_id))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Guest updated successfully'}), 200

# DELETE operation
@guests_bp.route('/guests/<int:guest_id>', methods=['DELETE'])
def delete_guest(guest_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("DELETE FROM guests WHERE guest_id = %s", (guest_id,))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Guest deleted successfully'}), 200
