// The Card to be exported goes here
import { useState } from "react";
import { CardPicto } from "../CardPicto";
import { CardText } from "../CardText";
import { StyledCard } from "./elements";

export const Card = (props) => {
    const [onHover, setOnHover] = useState(false);

    function mouseHover(bool) {
        setOnHover(bool);
    }

    console.log(props);

    let cardText = props.body;
    let updatedCardText = "";

    const keywords = ["brief writing or simple guidance", "criteria matching", "pitch management"];

    console.log("props.body", props.body);

    keywords.forEach((keyword) => {
        if (cardText.includes(keyword)) {
            updatedCardText = cardText.replace(keyword, `<b>${keyword}</b>`);
        }
    });

    console.log("updatedCardText", updatedCardText);

    return (
        <StyledCard>
            <div
                onMouseEnter={() => mouseHover(true)}
                onMouseLeave={() => mouseHover(false)}
                style={{ display: "flex" }}
            >
                <img
                    src={props.picto}
                    alt={`${props.picto}`}
                    style={{ margin: "20px", maxWidth: "50px", maxHeight: "50px" }}
                />
                <div>
                    {onHover ? (
                        <h3 style={{ color: "006efd", textDecoration: "underlined" }}>
                            <u>{props.title}</u>
                        </h3>
                    ) : (
                        <h3>{props.title}</h3>
                    )}
                    <p>{updatedCardText}</p>
                </div>
            </div>
        </StyledCard>
    );
};
