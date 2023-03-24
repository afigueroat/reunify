import datetime
from flask import Flask, jsonify, request, Blueprint, current_app
from flask_mysqldb import MySQL

events_bp = Blueprint('events', __name__)

# CREATE operation
@events_bp.route('/events', methods=['POST'])
def create_event():
    event_name = request.json['event_name']
    event_type_id = request.json['event_type_id']
    event_date = request.json['event_date']
    event_time = request.json['event_time']
    event_location = request.json['event_location']
    event_description = request.json.get('event_description', None)
    user_id = request.json['user_id']
    cur = current_app.mysql.connection.cursor()
    cur.execute("INSERT INTO events (event_name, event_type_id, event_date, event_time, event_location, event_description, user_id) VALUES (%s, %s, %s, %s, %s, %s, %s)", (event_name, event_type_id, event_date, event_time, event_location, event_description, user_id))
    current_app.mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Event created successfully'}), 201

# READ operation
@events_bp.route('/events', methods=['GET'])
def get_all_events():
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM events")
    data = cur.fetchall()
    cur.close()
    events = []
    for row in data:
        event = {
            'event_id': row[0],
            'event_name': row[1],
            'event_type_id': row[2],
            'event_date': row[3].strftime('%Y-%m-%d'),
            'event_time': (datetime.datetime(1, 1, 1) + row[4]).time().strftime('%H:%M:%S'),
            'event_location': row[5],
            'event_description': row[6],
            'user_id': row[7]
        }
        events.append(event)
    print(events)
    return jsonify(events), 200


@events_bp.route('/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("SELECT * FROM events WHERE event_id = %s", (event_id,))
    data = cur.fetchone()
    cur.close()
    if data:
        return jsonify(data), 200
    else:
        return jsonify({'message': 'Event not found'}), 404

# UPDATE operation
@events_bp.route('/events/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    event_name = request.json.get('event_name', None)
    event_type_id = request.json.get('event_type_id', None)
    event_date = request.json.get('event_date', None)
    event_time = request.json.get('event_time', None)
    event_location = request.json.get('event_location', None)
    event_description = request.json.get('event_description', None)
    user_id = request.json.get('user_id', None)
    cur = current_app.mysql.connection.cursor()
    cur.execute("UPDATE events SET event_name = %s, event_type_id = %s, event_date = %s, event_time = %s, event_location = %s, event_description = %s, user_id = %s WHERE event_id = %s", (event_name, event_type_id, event_date, event_time, event_location, event_description, user_id, event_id))
    current_app.mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Event updated successfully'}), 200

# DELETE operation
@events_bp.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    cur = current_app.mysql.connection.cursor()
    cur.execute("DELETE FROM events WHERE event_id = %s", (event_id,))
    current_app.mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Event deleted successfully'}), 200

