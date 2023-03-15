import { useState } from "react";
import { Hero } from "../sections";
import { Manage } from "../sections";

const heroProps = {
    image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
    title: "Agency procurement, outsourced.",
    description: "Start the process here",
    ctaText: "Start",
};

const manageProps = {
    image: { src: "/img/video.png", alt: "", width: 800, height: 1200 },
    title: "Managed agency selection",
    description: "Strengthen your onboarding process",
    cardData: [
        {
            id: "0001",
            title: "Brief",
            body: "Complete brief writing or simple guidance on what to include, we've got you covered.",
            picto: "https://i.ibb.co/n82jqn2/design.png",
        },
        {
            id: "0002",
            title: "Search",
            body: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
            picto: "https://i.ibb.co/WWWR9Fj/research.png",
        },
        {
            id: "0003",
            title: "Pitch",
            body: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
            picto: "https://i.ibb.co/YNKvLx9/conversation.png",
        },
    ],
};

export default function Home() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <div>
                <Hero {...heroProps} />
                <Manage {...manageProps} />
                {/** Other sections */}
            </div>
        </>
    );
}
