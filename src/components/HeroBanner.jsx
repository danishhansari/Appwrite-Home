const HeroBanner = ({theme}) => {
  const lightImagePath = "./screen.png";
  const darkImagePath = "./screen-dark.png";

  
  return (
    <div className="my-6 px-4">
      {theme === "light" ? (
        <img src={lightImagePath} alt="Light Screen" />
      ) : (
        <img src={darkImagePath} alt="Dark Screen" />
      )
    }
    </div>
  ) 
}
export default HeroBanner
