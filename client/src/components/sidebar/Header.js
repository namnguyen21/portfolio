import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20rem;
  position: fixed;
  left: 5rem;
  top: 30rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Row = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  display: block;
  color: ${(props) => props.theme.colors.white};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    cursor: pointer;
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const Item = styled.a`
  text-align: right;
  margin-left: 1rem;
  font-size: 3rem;
  color: inherit;
  font-weight: 600;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Icon = styled.i`
  text-align: right;
  font-size: 3rem;
  color: inherit;
`;

export default function Contact({className}) {
  return (
    <Wrapper className={className}>
      <Row>
        <Icon className="far fa-file"></Icon>
        <Item>Resume</Item>
      </Row>
      <Row>
        <Icon className="fab fa-linkedin"></Icon>
        <Item>LinkedIn</Item>
      </Row>
    </Wrapper>
  );
}
