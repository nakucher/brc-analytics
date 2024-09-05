import { Button } from "@mui/material";
import { ROUTES } from "../../../../../../../routes/constants";
import {
  Head,
  Headline,
  SectionLayout,
  StyledSection as Section,
  Subhead,
  SubHeadline,
  SubHeadlinePositioner,
} from "./sectionHero.styles";

export const SectionHero = (): JSX.Element => {
  return (
    <Section>
      <SectionLayout>
        <Headline>
          <Head>
            <span>Unlock the power of </span>
            <span>pathogen data analysis</span>
          </Head>
        </Headline>
        <SubHeadline>
          <SubHeadlinePositioner>
            <Subhead>
              Comprehensive tools for exploring and interpreting genomic
              annotations and functional insights into disease-causing organisms
              and their carriers
            </Subhead>
            <Button color="hero" href={ROUTES.GENOMES} variant="contained">
              Get Started
            </Button>
          </SubHeadlinePositioner>
        </SubHeadline>
      </SectionLayout>
    </Section>
  );
};
