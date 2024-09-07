import {
  smokeLightest,
  smokeMain,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import styled from "@emotion/styled";
import {
  Section,
  SectionHeadline,
  SectionLayout as DefaultLayout,
} from "../../section.styles";

export const StyledSection = styled(Section)`
  background-color: ${smokeLightest};
  border-top: 1px solid ${smokeMain};
  overflow: hidden;
`;

export const SectionLayout = styled(DefaultLayout)`
  display: flex;
  flex-direction: column;
  gap: 48px 16px;
  padding: 64px 16px;
`;

export const Headline = styled(SectionHeadline)`
  align-self: center;
  grid-column: 1 / -1;
  max-width: 560px;
  text-align: center;
`;
