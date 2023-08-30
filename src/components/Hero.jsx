import Button from './utils/Button'
import HeroBanner from './HeroBanner'
const Hero = () => {
  return (  
  <>
    <div className="bg-white">
      <div className="max-w-[1250px] mx-auto bg-white flex flex-col items-center">
          <span className="bg-green-500 text-sm mt-12 text-white rounded-[2rem] py-1 px-2">
            Pricing Plans Announced
          </span>
          <h1 className="text-black text-[2.5em] font-bold my-2">Build Fast. Scale Big. All in one Place</h1>
          <p className="text-center w-[65%] mt-2 mb-6 font-normal">Appwrite is a backend platform for developing Web, Mobile, and Flutter applications. Built with the open source community and optimized for developer experience in the coding languages you love.</p>
          <Button text='Get Started'/>
          <HeroBanner />
      </div>
    </div>
  </>
  )
}

export default Hero;
