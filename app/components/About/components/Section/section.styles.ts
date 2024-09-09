import { mediaTabletUp } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import {
  inkLight,
  white,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodyLarge400 } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import {
  sectionGrid,
  SectionLayout as DefaultLayout,
} from "../../../Layout/components/AppLayout/components/Section/section.styles";

export const Section = styled.section`
  background-color: ${white};
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const SectionLayout = styled(DefaultLayout)`
  ${sectionGrid};
`;

export const SubHeadline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: 1 / -1;

  ${mediaTabletUp} {
    grid-column: 1 / 6;
  }
`;

export const Subhead = styled.h2`
  font-size: 40px;
  font-weight: 500;
  grid-column: 1 / -1;
  letter-spacing: -0.4px;
  line-height: 48px;
  margin: 0;
`;

export const SubheadText = styled.div`
  ${textBodyLarge400};
  color: ${inkLight};
  grid-column: 1 / -1;
`;

export const SectionContent = styled.div`
  grid-column: 1 / -1;

  ${mediaTabletUp} {
    grid-column: 7 / -1;
  }
`;
