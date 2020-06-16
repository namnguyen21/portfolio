import React, { useState } from "react";
import styled from "styled-components";
import Cover from "../images/cover.jpeg";
import PFP from "../images/profile.jpeg";
import TweetContainer from "./tweets/TweetContainer";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid 1px ${(props) => props.theme.colors.grey};
  border-left: solid 1px ${(props) => props.theme.colors.grey};
  overflow: auto;
  @media (max-width: 1000px) {
    border: none;
  }
`;

const CoverPhoto = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${Cover});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const InfoSection = styled.div`
  margin-top: -75px;
  width: 100%;
  padding: 0 1rem;
  z-index: 99999999;
`;
const Avatar = styled.img`
  height: 15rem;
  border-radius: 50%;
`;
const Name = styled.h3`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const GreyText = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1rem 0;
`;

const TabsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: stretch;
  justify-items: stretch;
  border-bottom: solid 1px ${(props) => props.theme.colors.grey};
`;

const Tab = styled.div`
  /* display: flex;
    justify-items: center;
    align-items: center; */
  width: 50%;
  font-size: 2rem;
  color: ${(props) =>
    props.active ? props.theme.colors.lightBlue : props.theme.colors.grey};
  text-align: center;
  padding: 2rem 0;
  &:hover {
    cursor: pointer;
    background-color: rgba(29, 161, 242, 0.1);
    color: ${(props) => props.theme.colors.lightBlue};
  }
  border-bottom: ${(props) =>
    props.active ? `solid 5px ${props.theme.colors.lightBlue}` : null};
`;

const HiddenDesc = styled(GreyText)`
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default function Profile({className}) {
  const [active, setActive] = useState(1);
  return (
    <Wrapper className={className}>
      <CoverPhoto />
      <InfoSection>
        <Avatar src={PFP} />
        <Name>Nam Nguyen</Name>
        <GreyText>
          Hi there, and welcome to my portfolio! My name is Nam and I am a
          full-stack software developer
        </GreyText>
        <HiddenDesc>
          Front End: JavaScript, React, Bootstrap, Material-UI
        </HiddenDesc>
        <HiddenDesc>Back End: NodeJS, Python</HiddenDesc>
        <HiddenDesc>Data Base: SQL, NoSQL</HiddenDesc>
        <span
          style={{
            color: "#ffffff",
            fontSize: "1.6rem",
            fontWeight: "600",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          345
        </span>
        <span
          style={{
            color: "#8899a6",
            fontSize: "1.6rem",
            fontWeight: "400",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          Following
        </span>
        <span
          style={{
            color: "#ffffff",
            fontSize: "1.6rem",
            fontWeight: "600",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
        >
          345
        </span>
        <span
          style={{
            color: "#8899a6",
            fontSize: "1.6rem",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          Followers
        </span>
      </InfoSection>
      <TabsContainer>
        <Tab onClick={() => setActive(1)} active={active === 1 ? true : false}>
          Tweets
        </Tab>
        <Tab onClick={() => setActive(2)} active={active === 2 ? true : false}>
          Projects
        </Tab>
      </TabsContainer>
      <TweetContainer mode={active === 1 ? "Tweets" : "Projects"} />
    </Wrapper>
  );
}
