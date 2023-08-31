import { BsDiscord, BsTwitter } from "react-icons/bs";
import TweetGrid from "./TweetGrid";
import Button from './utils/Button'
const Twitter = () => {
  return (
    <>
      <div>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-base uppercase font-bold">
            join the community
          </h2>
          <h1 className="text-black text-4xl font-bold w-[60%] mx-auto text-center mt-4">
            Join the thriving community of Appwrite developers today
          </h1>
          <div className="text-center my-10">
          <BsDiscord className="inline text-2xl text-black mr-2" />
          <span className="mr-4">Discord</span>
          <BsTwitter className="inline text-2xl text-black mr-2" />
          <span className="mr-4">Twitter</span>
          </div>
          <TweetGrid />
        </div>
        <div className="text-center my-12">
        <Button text={"Try it out yourself"}/>
        </div>
      </div>
    </>
  );
};

export default Twitter;
