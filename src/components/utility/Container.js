import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 25rem;
  width: calc(100vw - 30rem);
  @media (max-width: 1000px) {
    margin-left: 4rem;
    width: calc(100vw - 4rem);
  }
  /* @media (max-width: 1200px) and( min-width: 800px) {
    width: 95vw;
  } */
  display: flex;
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
