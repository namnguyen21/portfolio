import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: ${(props) => (props.open ? "100%" : "0px")};
  z-index: 100000000000000000;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
  overflow-x: hidden;
  transition: 0.5s;
`;

const Exit = styled.button`
  position: absolute;
  background: none;
  top: 2rem;
  right: 2rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.white};
  font-size: 3rem;
  padding: 1rem 2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.lightBlue};
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export default function Menu({ open, onClick }) {
  return (
    <Wrapper open={open}>
      <Exit onClick={() => onClick(!open)}>
        <i style={{ fontSize: "3rem" }} className="fas fa-times"></i>
      </Exit>
      <Content>
        <Link>Resume</Link>
        <Link>LinkedIn</Link>
      </Content>
    </Wrapper>
  );
}
