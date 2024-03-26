import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Popover, Typography } from "@mui/material";
import { FC, useState } from "react";
type Props = {
  navBarDirection: string;
  handleDrawerClose: () => void;
};

const BottomPartNavbar: FC<Props> = ({
  navBarDirection,
  handleDrawerClose,
}) => {
  const navbarTexts = [
    "Demos",
    "Post",
    "Features",
    "Categories",
    "Shop",
    "Buy Now",
  ];
  const dropDownText = [
    "Post Header",
    "Post Layout",
    "Share Buttons",
    "Gallery Post",
    "Video Post",
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="xl:hidden flex flex-row justify-between w-full text-start px-5 pt-8 ">
        <p className="text-2xl">Ashstone Studios</p>
        <button onClick={handleDrawerClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="w-full h-[1px] border-t-[1px] border-[#E9E9E9] mt-[25.5px]"></div>
      <div className="xl:h-[57px] h-[268px] pt-[30px] px-5 xl:p-0 w-[100%] flex justify-center items-center">
        <div
          className={`h-full w-[750px] flex ${navBarDirection} xl:items-center justify-between`}
        >
          {navbarTexts.map((item) => {
            return (
              <div key={item}>
                {item === "Demos" ? null : (
                  <hr className="bg-[#E9E9E9] w-[100% my-4 xl:hidden" />
                )}
                <div key={item} className="flex flex-row">
                  <p className="font-medium text-[16px]">{item}</p>
                  {item === "Buy Now" ? null : (
                    <>
                      <button
                        className="cursor-pointer"
                        onClick={handleClick}
                        aria-describedby={id}
                      >
                        <KeyboardArrowDownIcon />
                      </button>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{
                          ".MuiPopover-paper": {
                            boxShadow: "none",
                            border: "1px solid #E9E9E9",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            padding: "20px",
                            width: "200px",
                            height: "230px",
                          }}
                        >
                          {dropDownText.map((item) => {
                            return (
                              <Box
                                key={item}
                                className="flex flex-row items-center justify-between"
                              >
                                <Box className="h-10 flex-col items-between items-between">
                                  {item === "Post Header" ? null : (
                                    <hr className="bg-[#E9E9E9] w-[140px] " />
                                  )}
                                  <Typography className="hover:text-[#969696] hover:ml-2 cursor-pointer pt-2 text-[13px] font-normal">
                                    {item}
                                  </Typography>
                                </Box>
                                <ArrowForwardIosIcon
                                  style={{ fontSize: "15px" }}
                                />
                              </Box>
                            );
                          })}
                        </Box>
                      </Popover>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] border-t-[1px] border-[#E9E9E9] mb-[48.5px] hidden xl:block"></div>
    </>
  );
};

export default BottomPartNavbar;
