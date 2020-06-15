import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: 50%;
  width: 50rem;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  margin-left: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Row = styled.div`
  width: 100%;
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: solid 1px ${(props) => props.theme.colors.grey};
  }
`;

const Header = styled.h2`
  color: ${(props) => props.theme.colors.lightBlue};
  font-weight: 600;
  font-size: 2.5rem;
`;

const Subheader = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.grey};
  font-weight: 400;
`;

export default function SkillsTable({ className }) {
  return (
    <Wrapper className={className}>
      <Row>
        <Header>Skills</Header>
      </Row>
      <Row>
        <Subheader>Front End</Subheader>
        <P>JavaScript, React, Bootstrap, Material-UI</P>
      </Row>
      <Row>
        <Subheader>Back End</Subheader>
        <P>NodeJS, Express, Python</P>
      </Row>
      <Row>
        <Subheader>Database</Subheader>
        <P>SQL, NoSQL</P>
      </Row>
      <Row>
        <Subheader>Version Control</Subheader>
        <P>Git</P>
      </Row>
    </Wrapper>
  );
}
