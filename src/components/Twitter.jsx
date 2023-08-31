import { BsDiscord,BsTwitter } from "react-icons/bs"
const Twitter = () => {
  return (
    <>
    <div>
    <div className="max-w-[1240px] mx-auto">

    <h2 className="text-center text-base uppercase font-bold">join the community</h2>
    <h1 className="text-black text-5xl font-bold w-[70%] mx-auto text-center">
        Join the thriving community of Appwrite developers today
    </h1>
    <BsDiscord className="inline text-2xl text-black"/> <span>Discord</span>
    <BsTwitter className="inline text-2xl text-black"/> <span>Twitter</span>
    </div>
    </div>
    </>
  )
}

export default Twitter