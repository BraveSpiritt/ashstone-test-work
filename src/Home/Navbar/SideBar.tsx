import { Drawer } from "@mui/material";
import { FC } from "react";
import BottomPartNavbar from "./BottomPartNavbar";
type Props = {
  open: boolean;
  handleDrawerClose: () => void;
};

const SideBar: FC<Props> = ({ open, handleDrawerClose }) => {
  return (
    <div>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: '75%', height: '100%' },
        }}
      >
        <BottomPartNavbar navBarDirection='flex-col' handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </div>
  );
};

export default SideBar;
