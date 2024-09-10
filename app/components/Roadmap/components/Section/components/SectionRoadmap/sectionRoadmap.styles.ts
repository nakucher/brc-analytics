import {
  inkLight,
  smokeMain,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import {
  textBody500,
  textBodyLarge4002Lines,
  textBodyLarge500,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import {
  Section,
  SectionLayout,
} from "../../../../../About/components/Section/section.styles";

export const StyledSection = styled(Section)`
  border-top: 1px solid ${smokeMain};
`;

export const StyledSectionLayout = styled(SectionLayout)`
  padding: 96px 16px 98px;
`;

export const Category = styled.div`
  margin: 40px 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CategoryTitle = styled.h4`
  ${textBodyLarge500};
  margin: 4px 0 16px;
`;

export const CategorySubTitle = styled.h3`
  ${textBody500};
`;

export const CategoryText = styled.div`
  ${textBodyLarge4002Lines};
  color: ${inkLight};
  margin: 0;

  .MuiLink-root {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
