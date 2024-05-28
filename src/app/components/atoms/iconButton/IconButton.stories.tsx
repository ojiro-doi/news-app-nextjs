import { Meta } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "IconButton",
};

export default meta; 

export const MenuButton = {
  args: {
    icon: "menu",
    themeColor: "light",
  },
};
export const SearchButton = {
  args:{
    icon: "search",
    themeColor: "light",
  }
};
export const SunButton = {
  args:{
    icon: "sun",
    themeColor: "light",
  }
};