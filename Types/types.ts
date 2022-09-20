import { MouseEventHandler, ReactNode } from "react";

export type Links = { name: string; hostelInfo?: typeHostelInfoProps }[];

export type typeHostelInfoProps = {
  image: string;
  nameURL: string;
  description: string;
  features: string[];
  price: number;
}[];

export type HotelData = {
  image: string;
  location: string;
  bgcolor: string;
  description: string;
  services: string[];
  avatar: string;
}[];

export type HotelTypes = {
  image: string;
  location: string;
  bgcolor: string;
  description: string;
  services: string[];
  avatar: string;
};

//  COMPONENTS TYPES

export interface LayoutProps {
  list: Links;
  children: React.ReactNode;
}

export interface HeaderProps {
  list: Links;
}

export interface NavBarProps {
  list: Links;
  isOpenDropDown: boolean;
  onCloseDropDown: MouseEventHandler | undefined;
  onOpenDropDown: MouseEventHandler | undefined;
  options: { name: string }[];
}

export interface DropdownLinkTypes {
  isOpen: boolean;
  onClose: MouseEventHandler | undefined;
  onOpen: MouseEventHandler | undefined;
  options: { name: string }[];
  buttonName: string;
}

export interface UserInformationTypes {
  position: number;
  title: string;
  subtitle: string;
}

export interface Hotels {
  hotels: HotelData;
}

export interface DrawerCardsTypes {
  image: string;
  nameURL: string;
  description: string;
  features: string[];
  price: number;
}

export interface HomeType {
  hotels: HotelData;
}

export interface MenuHamburgerType {
  options: { name: string }[];
}
