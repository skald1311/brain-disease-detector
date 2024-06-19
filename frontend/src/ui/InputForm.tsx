import { useState } from "react";
import convertToBase64 from "../utils/helper";
import { sendImage } from "../services/apiSendImage";

function InputForm() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!image) {
      return;
    }
    const imageBase64: string = await convertToBase64(image);
    const data = await sendImage(imageBase64);
    setResult(data["body"]);
  }

  return (
    <>
      {result ? (
        <img src={`data:image/jpg;base64,${result}`} alt="output img" />
      ) : null}

      <form
        className="py-[4rem] px-[4rem] bg-gray-850 border border-solid border-gray-800 rounded-lg overflow-hidden text-base"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-[2.4rem] pt-[1.2rem] px-0 text-2xl items-center">
          <input
            className="cursor-pointer border border-gray-700 rounded-md py-[1.2rem] px-[1.2rem] shadow-sm file:font-space-grotesk file:font-medium file:py-[1.2rem] file:px-[1.6rem] file:text-sky-100 file:bg-sky-600 file:hover:bg-sky-700 file:border-none file:rounded-md file:transition-all file:duration-200"
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => {
              if (!e.target || !e.target.files) return;
              setImage(e.target.files[0]);
            }}
          />
          <button className="bg-sky-600 font-medium text-sky-100 hover:bg-sky-700 py-[1.2rem] px-[1.6rem] border-none rounded-lg shadow-sm">
            SCAN
          </button>
        </div>
      </form>
    </>
  );
}

export default InputForm;
