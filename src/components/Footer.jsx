import { BsDiscord, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = ({theme}) => {
  return (
    <>
      <div>
        <div className="max-w-[1100px] mx-auto border-y border-gray-300 py-8 px-4">
          <div className="flex pb-5 flex-col sm:flex-row justify-center sm:items-start ">
            <div className="logo w-full">
            {theme === "light" ? (
              <img className="w-[180px] mx-auto sm:mx-0" src="./appwrite-light.svg" alt="" />
            ) : (
              <img className="w-[180px] mx-auto sm:mx-0" src="./appwrite-dark.svg" alt="" />
            )}
              <div className="flex justify-center sm:justify-start text-2xl text-white items-center gap-4 mt-12">
                <div className="bg-black text-white p-2 rounded-[2rem]">
                  <AiFillGithub />
                </div>
                <div className="bg-black text-white p-2 rounded-[2rem]">
                  <BsDiscord />
                </div>
                <div className="bg-black text-white p-2 rounded-[2rem]">
                  <BsTwitter />
                </div>
                <div className="bg-black text-white p-2 rounded-[2rem]">
                  <BiLogoLinkedin />
                </div>
                <div className="bg-black text-white p-2 rounded-[2rem]">
                  <BsYoutube />
                </div>
              </div>
            </div>
            <div className="list w-full flex justify-evenly text-black mt-8">
              <ul className="flex flex-col gap-4 text-gray-400 w-[50%]">
                <li className="font-bold">Product</li>
                <li>Docs</li>
                <li>Self Hosting</li>
                <li>Web</li>
                <li>Flutter</li>
                <li>Apple</li>
                <li>Android</li>
                <li>Server</li>
              </ul>
              <ul className="flex flex-col gap-4 text-gray-400 w-[50%]">
                <li className="font-bold">Features</li>
                <li>Databases</li>
                <li>Authentication</li>
                <li>Storage</li>
                <li>Functions</li>
                <li>Realtime</li>
              </ul>
              <ul className="flex flex-col gap-4 text-gray-400 w-[50%] text-left">
                <li className="font-bold ">About</li>
                <li>Company</li>
                <li>Blog</li>
                <li>Community</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Logos and assets</li>
                <li>OSS Fund</li>
                <li>Heroes</li>
                <li>Store</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row border-t border-gray-300 text-gray-600 justify-between items-center pt-4 text-md">
            <p>Copyright &copy; 2023 Appwrite + Version 0.33.4.560</p>
            <ul className="flex gap-8 items-center flex-wrap">
              <li>Status</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
