import CardGrid from "./CardGrid"

const Features = () => {
  return (
    <div className="w-full bg-light">
        <div className="max-w-[1250px] mx-auto">
            <p className="uppercase text-base font-bold text-xl mt-2">features</p>
            <h1 className="text-3xl text-black font-bold my-4">All the APIs for building incredible products</h1>
            <CardGrid />
        </div>
    </div>
  )
}

export default Features