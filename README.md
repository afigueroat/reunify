# Reunify

Reunify is an app for scheduling events and managing your calendar. This repository contains the source code for the backend and frontend of the application.

## Prerequisites

- Python 3.6 or higher
- Node.js and npm
- Git

## Getting Started

### Setting up the project on Windows

1. Clone the repository:

git clone https://github.com/yourusername/reunify.git
cd reunify

Replace `yourusername` with your GitHub username.

### Backend Setup

2. Create a virtual environment using Python venv:

cd reunify\backend

python -m venv venv

3. Activate the virtual environment:

venv\Scripts\activate

4. Install the required Python packages:

pip install -r backend\requirements.txt

5. Start the Flask backend server:

cd backend
set FLASK_APP=app.py
flask run

### Frontend Setup

6. In a new terminal window, navigate to the frontend directory:

cd reunify\frontend

7. Install the required frontend packages:

npm install

8. Start the frontend development server:

npm start

The frontend should now be accessible at http://localhost:3000 (or another specified port).

## Contributing

We welcome contributions to Reunify! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your changes.
3. Commit your changes and push the branch to your forked repository.
4. Submit a pull request against the main branch of the original repository.

Please make sure your changes adhere to the existing code style and that all tests pass before submitting a pull request. Also, include a description of your changes and any issues they address.

Thank you for your interest in contributing to Reunify!
