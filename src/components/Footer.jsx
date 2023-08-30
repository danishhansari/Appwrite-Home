import { BsDiscord, BsTwitter, BsYoutube} from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
// import { BsTwitter } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <div>
        <div className="max-w-[1240px] mx-auto border-y border-gray-300 py-8">
          <div className="flex justify-between pb-5">
            <div className="logo w-full">
              <img className="w-[180px]" src="./appwrite-light.svg" alt="" />
                <div className="flex text-2xl text-white items-center gap-4 mt-12">
                    <div className='bg-black text-white p-2 rounded-[2rem]'>
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
            <div className="list w-full flex justify-evenly text-black">
                <ul className='flex flex-col gap-4 text-gray-400'>
                    <li className='font-bold text-black'>Product</li>
                    <li>Docs</li>
                    <li>Self Hosting</li>
                    <li>Web</li>
                    <li>Flutter</li>
                    <li>Apple</li>
                    <li>Android</li>
                    <li>Server</li>
                </ul>
                <ul className='flex flex-col gap-4 text-gray-400'>
                    <li className='font-bold text-black'>Features</li>
                    <li>Databases</li>
                    <li>Authentication</li>
                    <li>Storage</li>
                    <li>Functions</li>
                    <li>Realtime</li>
                </ul>
                <ul className='flex flex-col gap-4 text-gray-400'>
                    <li className='font-bold text-black'>About</li>
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
          <div className="flex border-t border-gray-300 text-gray-600 justify-between items-center pt-4 text-md">
            <p>Copyright &copy; 2023 Appwrite + Version 0.33.4.560</p>
            <ul className='flex gap-8 items-center'>
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
