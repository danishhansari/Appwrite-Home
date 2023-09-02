import Button from "./utils/Button";

const Navbar = ({ theme }) => {
  return (
    <>
      <div className="shadow-sm">
        <div className="flex justify-between items-center max-w-[1100px] mx-auto px-2">
          <ul className="flex items-center gap-4 py-8 font-medium">
            {theme === "light" ? (
              <img src="./appwrite-light.svg" className="w-[180px]" alt="appWrite" />
            ) : (
              <img src="./appwrite-dark.svg" className="w-[180px]" alt="appWrite" />
            )}

            <li className="hover:border-b-2 hidden sm:block hover:border-dotted border-black cursor-pointer">
              Docs
            </li>
            <li className="hover:border-b-2 hidden sm:block hover:border-dotted border-black cursor-pointer">
              Community
            </li>
            <li className="hover:border-b-2 hidden sm:block hover:border-dotted border-black cursor-pointer">
              Pricing
            </li>
            <li className="hover:border-b-2 hidden sm:block hover:border-dotted border-black cursor-pointer">
              Github
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer">Sign in</li>
            <Button text="Sign Up" />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
