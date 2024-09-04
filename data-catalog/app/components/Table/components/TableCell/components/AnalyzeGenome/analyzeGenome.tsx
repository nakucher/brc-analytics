import { ANCHOR_TARGET } from "@databiosphere/findable-ui/lib/components/Links/common/entities";
import { Button } from "@mui/material";
import Router from "next/router";
import { ROUTES } from "../../../../../../../routes/contants";
import { BRCDataCatalogGenome } from "../../../../../../apis/catalog/brc-analytics-catalog/common/entities";
import { AnalyzeGenomeIcon } from "../../../../../common/CustomIcon/components/AnalyzeGenomeIcon/analyzeGenomeIcon";
import { ViewGenomeIcon } from "../../../../../common/CustomIcon/components/ViewGenomeIcon/viewGenomeIcon";
import { StyledButtonGroup } from "./analyzeGenome.styles";
import {
  BUTTON_GROUP_PROPS,
  BUTTON_PROPS,
  ICON_PROPS,
} from "./common/constants";

export interface AnalyzeGenomeProps {
  genome: BRCDataCatalogGenome;
}

export const AnalyzeGenome = ({ genome }: AnalyzeGenomeProps): JSX.Element => {
  const { genomeVersionAssemblyId, ucscBrowserUrl } = genome;

  const onAnalyze = (entityId: string): void => {
    Router.push(`${ROUTES.GENOMES}/${entityId}`);
  };

  const onView = (url: string | null): void => {
    if (!url) return;
    window.open(url, ANCHOR_TARGET.BLANK);
  };

  return (
    <StyledButtonGroup
      {...BUTTON_GROUP_PROPS}
      Buttons={[
        <Button
          {...BUTTON_PROPS}
          disabled={!genomeVersionAssemblyId}
          key="analyze"
          onClick={(): void => onAnalyze(genomeVersionAssemblyId)}
        >
          <AnalyzeGenomeIcon {...ICON_PROPS} />
        </Button>,
        <Button
          {...BUTTON_PROPS}
          disabled={!ucscBrowserUrl}
          key="view"
          onClick={(): void => onView(ucscBrowserUrl)}
        >
          <ViewGenomeIcon {...ICON_PROPS} />
        </Button>,
      ]}
    />
  );
};
