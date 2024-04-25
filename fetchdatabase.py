import firebase_admin
from firebase_admin import credentials, firestore
import csv

# Initialize Firebase Admin SDK
cred = credentials.Certificate("/home/shivam/Downloads/ecg.json")  # Replace with the path to your service account key JSON file
firebase_admin.initialize_app(cred)

# Initialize Firestore client
db = firestore.client()

# Function to retrieve data from Firestore
def get_firestore_data(collection_name):
    docs = db.collection(collection_name).stream()
    data = []
    for doc in docs:
        data.append(doc.to_dict())
    return data

# Function to export data to CSV
def export_to_csv(data, filename):
    keys = data[0].keys() if data else []
    with open(filename, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=keys)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

# Example usage
if __name__ == "__main__":
    collection_name = "ecg"  # Replace with your Firestore collection name
    filename = "exported_data.csv"
    data = get_firestore_data(collection_name)
    export_to_csv(data, filename)