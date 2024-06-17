import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <div className="mt-auto text-center">
      <button
        className="bg-transparent border-none p-[0.5rem] rounded-md transition-all duration-200 hover:text-grey-800 hover:bg-sky-950 hover:rounded-md [&>svg]:h-[3rem] [&>svg]:w-[3rem]"
        onClick={() =>
          window.open(
            "https://github.com/skald1311/brain-disease-detector",
            "_blank"
          )
        }
      >
        <IoLogoGithub color="#0284c7" />
      </button>
      <button
        className="bg-transparent border-none p-[0.5rem] rounded-md transition-all duration-200 hover:text-grey-800 hover:bg-sky-950 hover:rounded-md [&>svg]:h-[3rem] [&>svg]:w-[3rem]"
        onClick={() =>
          window.open("https://www.linkedin.com/in/duongmhoang/", "_blank")
        }
      >
        <IoLogoLinkedin color="#0284c7" />
      </button>
    </div>
  );
}

export default Footer;
