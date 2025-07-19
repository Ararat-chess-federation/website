"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LEFT_MENU } from "../../../constants/navigation";
import BurgerIcon from "./icons/MenuIcon.svg";
import { IconButton } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Image alt="menu" src={BurgerIcon} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {LEFT_MENU.map((el) => (
          <MenuItem key={el.link} onClick={handleClose}>
            <Link href={el.link}>{el.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
