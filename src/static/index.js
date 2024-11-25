import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

import airpods from "../assets/airpods.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import emojiGirl from "../assets/emojiGirl.png";
import simCards from "../assets/simCards.jpg";
import phoneNew from "../assets/phoneNew.jpg";

export const NAVBAR_LIST = [
  { id: 0, name: "", link: "#", icon: FaApple },
  { id: 1, name: "Store", link: "#" },
  { id: 2, name: "Mac", link: "#" },
  { id: 3, name: "iPad", link: "#" },
  { id: 4, name: "iPhone", link: "#" },
  { id: 5, name: "Watch", link: "#" },
  { id: 6, name: "Vision", link: "#" },
  { id: 7, name: "AirPods", link: "#" },
  { id: 8, name: "TV & Home", link: "#" },
  { id: 9, name: "Entertaiment", link: "#" },
  { id: 10, name: "Accessories", link: "#" },
  { id: 11, name: "Support", link: "#" },
  { id: 12, name: "", link: "#", icon: CiSearch },
  { id: 13, name: "", link: "#", icon: IoBagOutline },
];

export const PRODUCT_ITEMS = [
  {
    url: airpods,
    title: "AirPods4",
    desc1: "Iconic. Now supersonic.",
    desc2: "Available with Active Noise Cancellation.",
    buttons: ["Learn more", "Buy"],
    top: false,
    cl: "#fff",
  },
  {
    url: watch,
    title: "WATCH",
    desc1: "SERIES 10",
    desc2: "Thinstant classic",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },
  {
    url: laptop,
    title: "MacBook Air",
    desc1: "Lean. Mean. M3 machine",
    desc2: "",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },
  {
    url: emojiGirl,
    title: "Apple for Small Business",
    desc1: "Hardware, software, and expert",
    desc2: "help - all in one place",
    buttons: ["Learn more", "Buy"],
    top: true,
    cl: "#000",
  },
  {
    url: simCards,
    title: "Carrier deals at Apple",
    desc1: "Get up to $1000 in credit on a new iPhone",
    desc2: "ATrade-in may be required.",
    buttons: ["Find your deal"],
    top: false,
    cl: "#000",
  },
  {
    url: phoneNew,
    title: "Trade In",
    desc1: "Get $180 - $650 in credit when you",
    desc2: "trade in iPhone 12 or higher.",
    buttons: ["Get your estemate"],
    top: true,
    cl: "#000",
  },
];
