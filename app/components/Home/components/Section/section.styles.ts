import { inkLight } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodyLarge400 } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const sectionGrid = css`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
`;

export const Section = styled.section`
  width: 100%;
  z-index: 1;
`;

export const SectionLayout = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 1136px;
`;

export const SectionHeadline = styled.div`
  display: grid;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: "Inter Tight", sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin: 0;
`;

export const SectionSubtitle = styled.h3`
  ${textBodyLarge400};
  color: ${inkLight};
  margin: 0;
`;
