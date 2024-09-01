import { white } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import { textBodySmall500 } from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import styled from "@emotion/styled";
import { Chip as MChip } from "@mui/material";
import {
  Section,
  sectionGrid,
  SectionLayout as DefaultLayout,
} from "../../section.styles";

export const StyledSection = styled(Section)`
  background-color: ${white};
`;

export const SectionLayout = styled(DefaultLayout)`
  ${sectionGrid};
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 96px 16px 102px;
`;

export const StyledChip = styled(MChip)`
  min-width: 0;

  .MuiChip-label {
    ${textBodySmall500};
    padding: 0 10px;
  }
`;

export const Subhead = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  margin: 0;
  text-align: center;
`;
