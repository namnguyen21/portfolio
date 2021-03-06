import React from "react";
import styled from "styled-components";
import PFP from "../../images/profile.jpeg";

const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  &:hover {
    background-color: rgba(251, 251, 251, 0.05);
    cursor: pointer;
  }
`;

const AvatarCol = styled.div`
  width: 5rem;
`;

const ContentCol = styled.div`
  width: calc(100% - 5rem - 2rem);
  margin-left: 2rem;
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Avatar = styled.img`
  height: 5rem;
  border-radius: 50%;
`;

const Name = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 1rem;
`;

const GreyText = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.grey};
  font-weight: 400;
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
`;

const SVG = styled.svg`
  height: 2rem;
  fill: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    fill: ${(props) =>
      props.fill ? props.fill : props.theme.colors.lightBlue};
  }
`;

const Image = styled.img`
  margin-top: 1rem;
  width: 100%;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const ProjectLink = styled.span`
  padding: 0 2rem;
  &:not(:last-child){
    border-right: solid 1px ${props => props.theme.colors.lightBlue}
  }
`

const Link = styled.a`
  text-decoration: none;
  display: inline;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightBlue};
  &:hover {
    text-decoration: underline;
  }
`;

export default function Tweet({ date, message, image, projectLink, gitLink, previewLink }) {
  return (
    <Card>
      <AvatarCol>
        <Avatar src={PFP} />
      </AvatarCol>
      <ContentCol>
        <Name>Nam Nguyen</Name>
        <GreyText>{date}</GreyText>
        <Message>
          {message}{" "}
        </Message>
        <LinkBox>
          {projectLink ? (
            <ProjectLink>
              <Link target="_blank" href={projectLink}>
                Visit
              </Link>
            </ProjectLink>
          ) : null}
          {gitLink ? (
            <ProjectLink>
              <Link target="_blank" href={gitLink}>
                Code
              </Link>
            </ProjectLink>
          ) : null}
          {previewLink ? (
            <ProjectLink>
              <Link target="_blank" href={previewLink}>
                View Demo
              </Link>
            </ProjectLink>
          ) : null}
        </LinkBox>

        {image ? <Image src={image} /> : null}
        <ButtonGroup>
          <SVG xmlns="http://www.w3.org/2000/SVG" viewBox="0 0 65 72">
            <path d="M41 31h-9V19c0-1.14-.647-2.183-1.668-2.688-1.022-.507-2.243-.39-3.15.302l-21 16C5.438 33.18 5 34.064 5 35s.437 1.82 1.182 2.387l21 16c.533.405 1.174.613 1.82.613.453 0 .908-.103 1.33-.312C31.354 53.183 32 52.14 32 51V39h9c5.514 0 10 4.486 10 10 0 2.21 1.79 4 4 4s4-1.79 4-4c0-9.925-8.075-18-18-18z" />
          </SVG>
          <SVG
            fill="#19CF86"
            xmlns="http://www.w3.org/2000/SVG"
            viewBox="0 0 75 72"
          >
            <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z" />
          </SVG>
          <SVG
            fill="#E81C4F"
            xmlns="http://www.w3.org/2000/SVG"
            viewBox="0 0 54 72"
          >
            <path d="M38.723,12c-7.187,0-11.16,7.306-11.723,8.131C26.437,19.306,22.504,12,15.277,12C8.791,12,3.533,18.163,3.533,24.647 C3.533,39.964,21.891,55.907,27,56c5.109-0.093,23.467-16.036,23.467-31.353C50.467,18.163,45.209,12,38.723,12z" />
          </SVG>
        </ButtonGroup>
      </ContentCol>
    </Card>
  );
}
