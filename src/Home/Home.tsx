import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

function Home() {
 
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <Navbar />
        <div className="pt-[190px]">
          <Main />
        </div>
      </div>
    </>
  );
}

export default Home;
