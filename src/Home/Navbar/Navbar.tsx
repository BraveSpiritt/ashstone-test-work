import { useState } from "react";
import BottomPartNavbar from "./BottomPartNavbar";
import TopPartNavbar from "./TopPartNavbar";

function Navbar() {
  const [navbarPosition, setNavbarPosition] = useState(0);

  let prevScrollpos = window.scrollY;
  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setNavbarPosition(0);
    } else if(prevScrollpos > 150) {
      setNavbarPosition(-500);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className={`w-full pt-10 fixed bg-white mt-[${navbarPosition}px] transition-all duration-[1500ms] ease-in-out`}>
      <TopPartNavbar />
      <div className="hidden xl:block">
        <BottomPartNavbar
          navBarDirection="flex-row"
          handleDrawerClose={() => null}
        />
      </div>
    </div>
  );
}

export default Navbar;
