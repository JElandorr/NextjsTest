// The Card to be exported goes here
import Image from "next/image";
import { StyledPicto } from "./elements";

export const CardPicto = (props) => {
    console.log(props);
    return <StyledPicto>{props}</StyledPicto>;
};
