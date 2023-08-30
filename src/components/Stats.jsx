import { AiFillGithub } from 'react-icons/ai'
import Button from './utils/Button'
const Stats = () => {
  return (
    <>
    <div className="max-w-[1240px] mx-auto mt-24 mb-8 w-full">
    <p className="uppercase text-base font-bold text-xl">open source forever</p>
    <div className="flex items-center justify-between w-full">
        <div className="title w-full">
        <h1 className="text-4xl font-bold text-black w-[55%] tracking-normal leading-2">Appwrite is built by the open-source community of 500+ contributors</h1>
        </div>
        <div className="grid grid-cols-2 w-1/2 gap-6">
            <div className="text-right">
                <h1 className="font-bold text-4xl text-black">8,010</h1>
                <p className="text-gray-400 text-xl mt-4">Pull Request</p>
            </div>
            <div className="text-right">
                <h1  className="font-bold text-4xl text-black">4,962</h1>
                <p className="text-gray-400 text-xl mt-4">Forks</p>
            </div>
            <div className="text-right">
                <h1  className="font-bold text-4xl text-black">32,027</h1>
                <p className="text-gray-400 text-xl mt-2">Stars</p>
            </div>
            <div className="text-right">
                <h1 className="font-bold text-4xl text-black">15,091</h1>
                <p className="text-gray-400 text-xl mt-2 text-right">Commits</p>
            </div>
        </div>
    </div>
    <div className="github-username mb-8">
        <AiFillGithub  className='inline mr-2 text-xl'/><span className="text-gray-400 text-xl">github.com/</span> <span className="text-black text-xl">appwrite</span>
        </div>
        <Button text={"Get Started"}/>
    </div>
    </>
  )
}

export default Stats