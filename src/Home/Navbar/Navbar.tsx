import { useState } from "react";
import BottomPartNavbar from "./BottomPartNavbar";
import TopPartNavbar from "./TopPartNavbar";

function Navbar() {
  // const [navbarPosition, setNavbarPosition] = useState(0);
  const [hidden, setHidden] = useState(false);

  let prevScrollpos = window.scrollY;
  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setHidden(false);
    } else if (prevScrollpos > 150) {
      setHidden(true);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      className={`w-full pt-10 bg-white fixed ${
        hidden ? "mt-[-500px]" : "mt-0"
      } z-0 transition-all duration-[1500ms] ease-in-out`}
      
    >
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
