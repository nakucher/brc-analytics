import {
  inkLight,
  smokeMain,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodyLarge4002Lines } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import {
  Section,
  SectionLayout,
} from "../../../../../About/components/Section/section.styles";

export const StyledSection = styled(Section)`
  border-top: 1px solid ${smokeMain};
`;

export const StyledSectionLayout = styled(SectionLayout)`
  grid-template-columns: 1fr;
  padding: 98px 16px;

  img {
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
  }

  figcaption {
    ${textBodyLarge4002Lines};
    color: ${inkLight};
  }
`;
