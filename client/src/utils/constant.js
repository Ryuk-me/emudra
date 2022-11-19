import abi from "./Ration.json";

export const contractAddress = "0xE2919d102003B95C73B85bfc9e6E5B7d0821536f";
export const contractABI = abi.abi;
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;