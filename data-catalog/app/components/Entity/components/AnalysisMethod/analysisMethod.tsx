import { CardProps } from "@databiosphere/findable-ui/lib/components/common/Card/card";
import { CardSection } from "@databiosphere/findable-ui/lib/components/common/Card/card.styles";
import { CardText } from "@databiosphere/findable-ui/lib/components/common/Card/components/CardText/cardText";
import { CardTitle } from "@databiosphere/findable-ui/lib/components/common/Card/components/CardTitle/cardTitle";
import { FluidPaper } from "@databiosphere/findable-ui/lib/components/common/Paper/paper.styles";
import {
  ANCHOR_TARGET,
  REL_ATTRIBUTE,
} from "@databiosphere/findable-ui/lib/components/Links/common/entities";
import { Card } from "@mui/material";
import {
  StyledButtonPrimary,
  StyledCardContent,
} from "./analysisMethod.styles";

export interface AnalysisMethodProps extends CardProps {
  url: string;
}

export const AnalysisMethod = ({
  Paper = FluidPaper,
  text,
  title,
  url,
}: AnalysisMethodProps): JSX.Element => {
  return (
    <Card component={Paper}>
      <CardSection>
        <StyledCardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </StyledCardContent>
        <StyledButtonPrimary
          disabled={!url}
          onClick={(): void => {
            window.open(
              url,
              ANCHOR_TARGET.BLANK,
              REL_ATTRIBUTE.NO_OPENER_NO_REFERRER
            );
          }}
        >
          Analyze
        </StyledButtonPrimary>
      </CardSection>
    </Card>
  );
};
