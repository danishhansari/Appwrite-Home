import { BsDiscord} from 'react-icons/bs'
import { BiMessageRoundedDetail } from 'react-icons/bi'

const DiscordAd = () => {
  return (
    <>
        <div className="text-center bg-[#5865f2] text-white p-2 tracking-wide">
            <p>We're having lots of fun on  <BsDiscord className='inline text-xl' /> Discord! Come and join us! <BiMessageRoundedDetail className='inline text-xl' /> </p>
        </div>
    </>
  )
}

export default DiscordAd;