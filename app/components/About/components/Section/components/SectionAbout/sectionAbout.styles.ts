import styled from "@emotion/styled";
import { SectionLayout } from "../../section.styles";

export const StyledSectionLayout = styled(SectionLayout)`
  grid-template-columns: 1fr;
  padding: 98px 16px;

  .MuiLink-root {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
