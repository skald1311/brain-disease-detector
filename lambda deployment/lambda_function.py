import ultralytics
import base64
from PIL import Image
from io import BytesIO
import os
import uuid

# Load the model
model = ultralytics.YOLO("best.pt")

def lambda_handler(event, context):
    if event['httpMethod'] == 'OPTIONS':
        # Handle preflight request
        return {
            "statusCode": 200,
            "headers": {
                'Access-Control-Allow-Origin': 'http://localhost:5173',  # Replace with your allowed origins if needed
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            "body": "this is a preflight request"

        }

    save_dir = "/tmp/images"  # Use /tmp directory in Lambda environment
    os.makedirs(save_dir, exist_ok=True)

    # Get the image data from the event
    image_data = event["body"]
    # Convert to back to image
    image_bytes = base64.b64decode(image_data)
    image = Image.open(BytesIO(image_bytes))

    # Generate a unique UUID and save image
    unique_id = str(uuid.uuid4())
    image_path = os.path.join(save_dir, f"image_{unique_id}.jpg")
    image.save(image_path)

    # Make a prediction
    results = model.predict(image_path, save=True)

    # Get the generated image(s)
    generated_images = results.files

    # Convert the image(s) to base64-encoded string(s)
    base64_images = []
    for file in generated_images:
        with open(file, "rb") as f:
            base64_images.append(base64.b64encode(f.read()).decode("utf-8"))

    # Return the results
    return {
        "statusCode": 200,
        "headers": {
            'Access-Control-Allow-Origin': 'http://localhost:5173',  # Replace with your allowed origins if needed
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        "body": base64_images[0]
    }