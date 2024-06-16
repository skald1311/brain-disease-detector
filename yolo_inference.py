from ultralytics import YOLO

model = YOLO('model/best.pt')

results = model.predict('input_images/test.png', save=True)

print(results)