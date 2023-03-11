import Image from "next/image";

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
} from "./elements";

export const Manage = ({ image, title, description, ctaText, ...props }) => {
    return (
        <>
            <StyledContainer {...props}>
                <StyledImageContainer>
                    <Image
                        layout="responsive"
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />
                </StyledImageContainer>
                <StyledTextContainer>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>{description}</StyledDescription>
                    <StyledCTAContainer>
                        <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
                    </StyledCTAContainer>
                </StyledTextContainer>
            </StyledContainer>
        </>
    );
};
