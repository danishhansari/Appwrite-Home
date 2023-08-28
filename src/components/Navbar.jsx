const Navbar = () => {
  return (
    <>
        <div className="shadow-sm">
        <div className="flex justify-between items-center max-w-[1250px] mx-auto">
            <ul className="flex items-center gap-4 py-8 font-medium">
            <img src="appwrite-light.svg" className="w-[180px]" alt="appWrite" />
            <li>Docs </li>
            <li>Community</li>
            <li>Pricing</li>
            <li>Github</li>
            </ul>
            <ul className="flex items-center gap-4">
                <li>Sign in</li>
                <button>Sign Up</button>
            </ul>
        </div>
        </div>
    </>
  )
}
export default Navbar