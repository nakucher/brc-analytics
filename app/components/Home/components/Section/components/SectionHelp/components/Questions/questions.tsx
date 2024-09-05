import { AddIcon as DXAddIcon } from "@databiosphere/findable-ui/lib/components/common/CustomIcon/components/AddIcon/addIcon";
import { RoundedPaper as DXRoundedPaper } from "@databiosphere/findable-ui/lib/components/common/Paper/paper.styles";
import { Link as DXLink } from "@databiosphere/findable-ui/lib/components/Links/components/Link/link";
import {
  AccordionDetails as MAccordionDetails,
  AccordionSummary as MAccordionSummary,
} from "@mui/material";
import { URLS } from "../../../../../../common/constants";
import { Grid, StyledAccordion } from "./questions.styles";

export const Questions = (): JSX.Element => {
  const expandIcon = <DXAddIcon color="inkLight" fontSize="small" />;
  return (
    <Grid>
      <StyledAccordion component={DXRoundedPaper}>
        <MAccordionSummary expandIcon={expandIcon}>
          Where is the data?
        </MAccordionSummary>
        <MAccordionDetails>
          I used to be able to access many types of data including genomes and
          associated annotations. Where do I find it now? The data is accessible
          via <DXLink label="NCBI Datasets" url={URLS.NCBI_DATASETS} /> and{" "}
          <DXLink label="UCSC Genome Browser" url={URLS.UCSC_GENOME_BROWSER} />.
        </MAccordionDetails>
      </StyledAccordion>
      <StyledAccordion component={DXRoundedPaper}>
        <MAccordionSummary expandIcon={expandIcon}>
          How do I do analyses?
        </MAccordionSummary>
        <MAccordionDetails>
          I used rely on VeuPathDb to perform my analyses. Now that it is no
          longer available, what can I do? Many types of analyses are possible
          via integration with{" "}
          <DXLink label="Galaxy system" url={URLS.GALAXY_SYSTEM} /> while we
          continue to build this new BRC resource.
        </MAccordionDetails>
      </StyledAccordion>
      <StyledAccordion component={DXRoundedPaper}>
        <MAccordionSummary expandIcon={expandIcon}>
          How does brc-analytics work?
        </MAccordionSummary>
        <MAccordionDetails>
          The new BRC will be built on a proven data analytics platform called
          Galaxy. It will be supported by powerful computational infrastructure
          provided by the Texas Advanced Computing Center (
          <DXLink label="TACC" url={URLS.TACC} />) and
          <DXLink label="ACCESS-CI" url={URLS.ACCESS_CONSORTIUM} /> consortium.
          It will rely on data from NCBI Datasets and the UCSC Genome Browser.
          Similarly to the original system it will support custom annotations.
        </MAccordionDetails>
      </StyledAccordion>
    </Grid>
  );
};
