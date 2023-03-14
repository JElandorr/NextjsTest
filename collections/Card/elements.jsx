import styled from "styled-components";

export const StyledCard = styled((props) => <div {...props} />)`
    width: 500px;
    display: flex;
    margin: 2rem;
    border-radius: 10px;
    background-color: #f9f9f9;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: 3px solid #f9f9f9;

    &:hover {
        background-color: #f1f1f1;
        border: 3px solid #006efd;
        cursor: pointer;
    }
`;
