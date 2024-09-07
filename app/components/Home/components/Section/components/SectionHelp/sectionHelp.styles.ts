import { mediaTabletUp } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import {
  smokeMain,
  white,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import styled from "@emotion/styled";
import {
  Section,
  sectionGrid,
  SectionHeadline,
  SectionLayout as DefaultLayout,
  SectionSubtitle,
  SectionTitle,
} from "../../section.styles";

export const StyledSection = styled(Section)`
  background-color: ${white};
  border-top: 1px solid ${smokeMain};
`;

export const SectionLayout = styled(DefaultLayout)`
  ${sectionGrid};
  padding: 85px 16px 150px;
`;

export const Headline = styled(SectionHeadline)`
  align-content: flex-start;
  grid-column: 1 / -1;
  max-width: 504px;

  ${mediaTabletUp} {
    grid-column: 1 / 5;
    max-width: unset;
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
  max-width: 276px;
`;

export const StyledSectionSubTitle = styled(SectionSubtitle)`
  line-height: 28px;

  .MuiLink-root {
    color: #28285b;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
