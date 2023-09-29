import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className=" py-5 ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Foodipe</p>

          <div className="flex flex-col">
            <p>SOCIAL MEDIA</p>
            <div className="flex mt-4 gap-3">
              <a
                href="#"
                className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <p>QUICK LINKS</p>

          <div className="flex flex-col text-start mb-4 md:mb-0">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Home
            </a>
            <a
              href="/#recipes"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Explore
            </a>
            <a
              href="contact"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              License Agreement
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Copyright Information
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-2">
        <span className="leading-10">&copy; Foodipe, 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
