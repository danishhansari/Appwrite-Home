import { AiFillGithub } from "react-icons/ai";
import Button from "./utils/Button";
const Stats = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-24 mb-8 w-full px-4">
        <p className="uppercase text-base font-bold text-xl  text-center md:text-left">
          open source forever
        </p>
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between w-full gap-4">
          <div className="title w-full">
            <h1 className="text-4xl font-bold text-black md:w-[65%] tracking-normal leading-2">
              Appwrite is built by the open-source community of 500+
              contributors
            </h1>
          </div>
          <div className="grid grid-cols-2 w-full sm:w-1/2 gap-6">
            <div className="sm:text-right">
              <h1 className="font-bold text-4xl text-black">8,010</h1>
              <p className="text-gray-400 text-xl mt-4 sm:text-left">Pull Request</p>
            </div>
            <div className="sm:text-right">
              <h1 className="font-bold text-4xl text-black">4,962</h1>
              <p className="text-gray-400 text-xl mt-4 sm:text-right">Forks</p>
            </div>
            <div className="sm:text-right">
              <h1 className="font-bold text-4xl text-black">32,027</h1>
              <p className="text-gray-400 text-xl mt-2 sm:text-right">Stars</p>
            </div>
            <div className="sm:text-right">
              <h1 className="font-bold text-4xl text-black">15,091</h1>
              <p className="text-gray-400 text-xl mt-2 sm:text-right">Commits</p>
            </div>
          </div>
        </div>
        <div className="github-username mb-8 text-center sm:text-left">
          <AiFillGithub className="inline mr-2 text-xl" />
          <span className="text-gray-400 text-xl text-center">github.com/</span>
          <span className="text-black text-xl">appwrite</span>
        </div>
        <div className="btn text-center sm:text-left">
        <Button text={"Get Started"} />
        </div>
      </div>
    </>
  );
};

export default Stats;
