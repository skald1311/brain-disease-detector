import ImageInput from "./ImageInput";

function InputForm() {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="py-[4rem] px-[4rem] bg-gray-850 border border-solid border-gray-800 rounded-lg overflow-hidden text-base"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-[2.4rem] pt-[1.2rem] px-0 text-2xl items-center">
        <ImageInput />
        <button className="bg-sky-600 font-medium text-sky-100 hover:bg-sky-700 py-[1.2rem] px-[1.6rem] border-none rounded-lg shadow-sm">
          SCAN
        </button>
      </div>
    </form>
  );
}

export default InputForm;
