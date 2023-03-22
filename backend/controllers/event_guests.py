from flask import Blueprint, request, jsonify, current_app
from flask_mysqldb import MySQL

event_guests_bp = Blueprint('event_guests', __name__)

# CREATE operation
@event_guests_bp.route('/event_guests', methods=['POST'])
def add_guest_to_event():
    event_id = request.json['event_id']
    guest_id = request.json['guest_id']

    cur = current_app.mysql.connection.cursor()
    cur.execute("INSERT INTO event_guests (event_id, guest_id) VALUES (%s, %s)", (event_id, guest_id))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Guest added to event successfully'}), 201

# READ operation
@event_guests_bp.route('/event_guests', methods=['GET'])
def get_all_event_guests():
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM event_guests")
    data = cur.fetchall()
    cur.close()

    return jsonify(data), 200

# DELETE operation
@event_guests_bp.route('/event_guests', methods=['DELETE'])
def remove_guest_from_event():
    event_id = request.json['event_id']
    guest_id = request.json['guest_id']

    cur = current_app.mysql.connection.cursor()
    cur.execute("DELETE FROM event_guests WHERE event_id = %s AND guest_id = %s", (event_id, guest_id))
    current_app.mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Guest removed from event successfully'}), 200
