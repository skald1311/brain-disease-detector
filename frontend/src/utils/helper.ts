function convertToBase64(imageFile: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (!e.target || !e.target.result) return;
      const base64 = (e.target.result as string).split(",")[1];
      resolve(base64);
    };
    reader.onerror = function (error) {
      console.error("Error reading file:", error);
    };
    reader.readAsDataURL(imageFile);
  });
}

export default convertToBase64;
