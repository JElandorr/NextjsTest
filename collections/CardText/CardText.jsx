// The Card to be exported goes here
import { StyledBody, StyledTitle } from "./elements";

export const CardText = (props) => {
    console.log(props);
    return (
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledBody>{props.body}</StyledBody>
        </>
    );
};
