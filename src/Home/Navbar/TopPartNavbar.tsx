import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import { useSearch } from "../../SearchContext";

function TopPartNavbar() {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const handleOpenDrawer = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    const { value } = event.target;
    setSearchQuery(value);
  };
  const handleSearchBarOpen = () => setSearchBarOpen(!searchBarOpen);

  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <div className="w-[100%] h-[100%] flex  flex-row items-center xl:justify-center justify-between px-5 mb-[38px] xl:px-0 xl:mb-0 ">
      <div className="xl:hidden">
        <button>
          <MenuIcon onClick={handleOpenDrawer} />
        </button>
        <SideBar open={drawerOpen} handleDrawerClose={handleDrawerClose} />
      </div>
      <div className="xl:translate-x-2/4 sm:text-center">
        <p className="text-2xl">Ashstone Studios</p>
      </div>
      <div
        className={`xl:translate-x-2/4 ${
          searchBarOpen ? "block" : "hidden"
        } xl:block`}
      >
        <FormControl>
          <TextField
            size="small"
            variant="outlined"
            value={searchQuery}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ display: showClearIcon }}
                  onClick={handleClick}
                >
                  <ClearOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </div>
      <div className="xl:hidden">
        <button onClick={handleSearchBarOpen}>
          {searchBarOpen ? <ClearOutlinedIcon /> : <SearchOutlinedIcon />}
        </button>
      </div>
    </div>
  );
}

export default TopPartNavbar;
