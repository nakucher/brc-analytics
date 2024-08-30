import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const sectionGrid = css`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
`;

export const Section = styled.section`
  width: 100%;
`;

export const SectionLayout = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 1136px;
`;
