const Card = ({ img, title, paragraph }) => {
  return (
    <>
        <div className="shadow-lg w-[70px] p-2 rounded-xl">
        <img src={img} alt="img" className="w-[100%]"/>
        </div>
        <h1 className="text-black text-2xl font-bold mt-6 mb-2">{title}</h1>
        <p className="w-[80%] font-light text-black">{paragraph}</p>
    </>
  )
}

export default Card;