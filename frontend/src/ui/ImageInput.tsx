function ImageInput() {
  return (
    <input
      className="cursor-pointer border border-gray-700 rounded-md py-[1.2rem] px-[1.2rem] shadow-sm file:font-space-grotesk file:font-medium file:py-[1.2rem] file:px-[1.6rem] file:text-sky-100 file:bg-sky-600 file:hover:bg-sky-700 file:border-none file:rounded-md file:transition-all file:duration-200"
      type="file"
      name="image"
      accept="image/*"
    />
  );
}

export default ImageInput;
