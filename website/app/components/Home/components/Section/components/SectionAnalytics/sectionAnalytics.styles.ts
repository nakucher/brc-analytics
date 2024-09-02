import { smokeLightest } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import styled from "@emotion/styled";
import {
  Section,
  sectionGrid,
  SectionHeadline,
  SectionLayout as DefaultLayout,
} from "../../section.styles";

export const StyledSection = styled(Section)`
  background-color: ${smokeLightest};
`;

export const SectionLayout = styled(DefaultLayout)`
  ${sectionGrid};
  gap: 48px 16px;
  justify-items: center;
  padding: 64px 16px;
`;

export const Headline = styled(SectionHeadline)`
  grid-column: 1 / -1;
  max-width: 560px;
  text-align: center;
`;
