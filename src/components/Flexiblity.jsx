const Flexiblity = ({ theme }) => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto my-24 px-1">
        <p className="text-center text-base uppercase text-lg font-bold mt-24 mb-4">
          Flexiblity
        </p>
        <h1 className="text-4xl font-bold text-black text-center w-full md:w-1/2 mx-auto my-8">
          Integrate with the tools and technologies you already love
        </h1>
        <div className="md:w-[80%] mx-auto flex flex-wrap-reverse items-center justify-center gap-x-[3rem] gap-y-[1rem] my-2">
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./python.svg" alt="Python" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./ruby.svg" alt="Ruby" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./dart.svg" alt="Dart" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./kotlin.svg" alt="Kotlin" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./swift.svg" alt="Swift" />
          </div>


          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            {theme === "light" ? (
              <img src="./deno-dark.svg" alt="" />
            ) : (
              <img src="./deno-light.svg" alt="Deno" />
            )             
            }

          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./net.svg" alt="Dotnet" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./javascript.svg" alt="javascript" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./flutter.svg" alt="flutter" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            {theme === "light" ? (
              <img src="./apple-dark.svg" alt="Apple" />
            ) : (
              <img src="./apple-light.svg" alt="Apple" />
            )
          }

          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./android.svg" alt="Android" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./nodejs.svg" alt="nodejs" />
          </div>
          <div className="p-6 shadow-lg w-[80px] rounded-[100px]">
            <img src="./php.svg" alt="Php" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flexiblity;
