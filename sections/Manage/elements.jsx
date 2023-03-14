import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledMainContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: block;
    align-items: center;
`;
export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(https://i.ibb.co/mB4mXgq/background.png);
    background-position: center;
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
`;

export const StyledTitleContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: block;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
}
    
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    font-size: 2.5rem;
    margin: 0;
    color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    font-size: 1.5rem;
    margin: 0px;
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    width: 45%;
    margin-left: 3rem;
    font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
    max-width: 21.93rem;
    max-height: 35.27rem;
    width: 100%;
    height: 100%;
    margin-right: 50px;
    margin-left: auto;

    &:hover {
        cursor: pointer;
    }
`;
