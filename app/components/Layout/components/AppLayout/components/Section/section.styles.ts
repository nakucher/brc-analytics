import { mediaTabletUp } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Divider as MDivider } from "@mui/material";

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

export const Head = styled.h1`
  font-family: "Inter Tight", sans-serif;
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -0.4px;
  line-height: 72px;
  margin: 0;

  ${mediaTabletUp} {
    span {
      display: block;
    }
  }
`;

export const StyledDivider = styled(MDivider)`
  margin: 0 auto;
  max-width: 1136px;
  width: 100%;
`;
