import { mediaTabletUp } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import { inkLight } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodyLarge400 } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import {
  sectionGrid,
  SectionLayout as DefaultLayout,
} from "../../section.styles";

export const Section = styled.section`
  position: relative; /* Position relative to allow for z-index stacking */
  width: 100%;
  z-index: 1; /* Above the background */
`;

export const SectionLayout = styled(DefaultLayout)`
  ${sectionGrid};
  min-height: 184px;
  padding: 56px 16px;
`;

export const Headline = styled.div`
  align-content: flex-start;
  display: grid;
  gap: 8px;
  grid-column: 1 / -1;
`;

export const SubHeadline = styled.div`
  grid-column: 1 / -1;

  ${mediaTabletUp} {
    grid-column: 1 / 8;
  }
`;

export const Subhead = styled.div`
  ${textBodyLarge400};
  color: ${inkLight};
  margin: 0;
`;
