export async function sendImage(imageBase64: string) {
  const response = await fetch(
    `https://*****.execute-api.us-west-2.amazonaws.com/brain-disease-detector-function`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: imageBase64 }),
      credentials: "same-origin",
    }
  );
  const data = await response.json();
  return data;
}
