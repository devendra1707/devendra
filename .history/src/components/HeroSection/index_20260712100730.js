import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage1.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "20px",
                                maxWidth: "420px",
                            }}
                        >
                            <Img src={HeroImg} alt="hero-image" />

                            <h2
                                style={{
                                    margin: "18px 0 6px",
                                    color: "#fff",
                                    fontSize: "28px",
                                }}
                            >
                                {Bio.name}
                            </h2>

                            <p
                                style={{
                                    margin: "0 0 10px",
                                    color: "#ccc",
                                    fontSize: "16px",
                                }}
                            >
                                Full Stack Developer
                            </p>

                            <a
                                href={`mailto:${Bio.email}`}
                                style={{
                                    color: "#a855f7",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "10px",
                                }}
                            >
                                <FaEnvelope />
                                {Bio.email}
                            </a>

                            <a
                                href={`tel:${Bio.mobile.replace(/\s+/g, "")}`}
                                style={{
                                    color: "#ccc",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <FaPhoneAlt color="#a855f7" />
                                {Bio.mobile}
                            </a>
                        </div>
                    </HeroRightContainer>

                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection