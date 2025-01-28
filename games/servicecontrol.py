from flask import Flask, request, jsonify
import subprocess
import logging
from flask_cors import CORS  # Importez CORS

# Configuration du journal
logging.basicConfig(level=logging.DEBUG)

# Création de l'application Flask
app = Flask(__name__)

# Appliquez CORS à toute l'application (autorise toutes les origines)
CORS(app)

@app.route('/services', methods=['OPTIONS', 'POST'])
def control_service():
    try:
        # Récupération des données JSON de la requête
        data = request.json
        service_name = data.get('service_name')
        action = data.get('action')

        if not service_name or not action:
            return jsonify({"error": "Both 'service_name' and 'action' are required."}), 400

        # Gestion des actions
        if action == "start":
            result = subprocess.run(["sc", "start", service_name], capture_output=True, text=True)
            logging.debug(f"Start command output: {result.stdout}")
            if "START_PENDING" in result.stdout or "RUNNING" in result.stdout:
                return jsonify({"message": f"Service '{service_name}' is starting."})
            else:
                return jsonify({"error": f"Failed to start service '{service_name}'.", "details": result.stderr}), 500

        elif action == "stop":
            result = subprocess.run(["sc", "stop", service_name], capture_output=True, text=True)
            logging.debug(f"Stop command output: {result.stdout}")
            if "STOP_PENDING" in result.stdout or "STOPPED" in result.stdout:
                return jsonify({"message": f"Service '{service_name}' is stopping."})
            else:
                return jsonify({"error": f"Failed to stop service '{service_name}'.", "details": result.stderr}), 500

        elif action == "restart":
            # Arrêter le service
            subprocess.run(["sc", "stop", service_name], capture_output=True, text=True)
            # Redémarrer le service
            result = subprocess.run(["sc", "start", service_name], capture_output=True, text=True)
            logging.debug(f"Restart command output: {result.stdout}")
            if "RUNNING" in result.stdout:
                return jsonify({"message": f"Service '{service_name}' has restarted."})
            else:
                return jsonify({"error": f"Failed to restart service '{service_name}'.", "details": result.stderr}), 500

        else:
            return jsonify({"error": "Invalid action. Use 'start', 'stop', or 'restart'."}), 400

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({"error": "An internal error occurred.", "details": str(e)}), 500


if __name__ == '__main__':
    # Lancer le serveur Flask
    app.run(host='0.0.0.0', port=5001)
