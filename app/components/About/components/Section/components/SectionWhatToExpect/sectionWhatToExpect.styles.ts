import {
  inkLight,
  smokeMain,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodyLarge4002Lines } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import { Section, SectionContent, SectionLayout } from "../../section.styles";

export const StyledSection = styled(Section)`
  border-top: 1px solid ${smokeMain};
`;

export const StyledSectionLayout = styled(SectionLayout)`
  padding: 106px 16px 204px;
`;

export const StyledContent = styled(SectionContent)`
  ul {
    ${textBodyLarge4002Lines};
    color: ${inkLight};
    margin: 0;
    padding-left: 24px;

    li {
      margin: 8px 0;

      .MuiLink-root {
        color: inherit;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
