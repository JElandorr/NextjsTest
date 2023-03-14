import React from "react";
import Image from "next/image";
import { Card } from "../../collections/Card/Card";

import {
    StyledCardsContainer,
    StyledMainContainer,
    StyledContainer,
    StyledTitleContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
} from "./elements";

export const Manage = ({ image, title, description, cardData, ...props }) => {
    const cards = Object.values(cardData).map((card) => (
        <React.Fragment key={card.id}>
            <Card {...card} />
        </React.Fragment>
    ));

    console.log(cards);

    let style = (
        <style jsx>{`
            @media (max-width: 1000px) {
                .column-layout {
                    display: flex;
                    flex-direction: column;
                }
            }
        `}</style>
    );

    return (
        <>
            <StyledMainContainer {...props}>
                <StyledTitleContainer {...props}>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>{description}</StyledDescription>
                </StyledTitleContainer>
                <StyledContainer>
                    <StyledImageContainer>
                        <Image
                            layout="responsive"
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                        />
                    </StyledImageContainer>
                    <StyledCardsContainer>{cards}</StyledCardsContainer>
                </StyledContainer>
            </StyledMainContainer>
            {style}
        </>
    );
};
