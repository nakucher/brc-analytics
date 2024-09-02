import { CardAction as DXCardAction } from "@databiosphere/findable-ui/lib/components/common/Card/components/CardAction/cardAction";
import { CardSecondaryText as DXCardSecondaryText } from "@databiosphere/findable-ui/lib/components/common/Card/components/CardSecondaryText/cardSecondaryText";
import { RoundedPaper } from "@databiosphere/findable-ui/lib/components/common/Paper/paper.styles";
import { Fragment } from "react";
import { CardMedia } from "../../../../../../../common/Card/components/CardMedia/cardMedia";
import {
  CardContent,
  CardSection,
  CardTitle,
  StyledCard,
  StyledCardActions,
} from "./analyticsTools.styles";
import { ANALYTICS_TOOLS } from "./common/constants";

export const AnalyticsTools = (): JSX.Element => {
  return (
    <Fragment>
      {ANALYTICS_TOOLS.map(({ cardActions, media, text, title }, i) => (
        <StyledCard key={i} component={RoundedPaper}>
          <CardSection>
            {media && <CardMedia media={media} />}
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <DXCardSecondaryText>{text}</DXCardSecondaryText>
            </CardContent>
            {cardActions && (
              <StyledCardActions>
                {cardActions?.map(({ label, target, url }) => (
                  <DXCardAction
                    key={url}
                    label={label}
                    target={target}
                    url={url}
                  />
                ))}
              </StyledCardActions>
            )}
          </CardSection>
        </StyledCard>
      ))}
    </Fragment>
  );
};
