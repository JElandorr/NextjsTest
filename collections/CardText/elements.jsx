import styled from "styled-components";
import { Button } from "~/components";

export const StyledTitle = styled((props) => <h3 {...props} />)`
    margin-top: 4.375rem;
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;

    &:hover {
        color: #006efd;
        text-decoration: underline;
    }
`;

export const StyledBody = styled((props) => <p {...props} />)`
    margin-top: 4.375rem;
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
`;
