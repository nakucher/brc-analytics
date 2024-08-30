import { ButtonPrimary } from "@databiosphere/findable-ui/lib/components/common/Button/components/ButtonPrimary/buttonPrimary";
import { ROUTES } from "../../../../../../routes/constants";
import { Section } from "../../section.styles";
import {
  Head,
  Headline,
  SectionLayout,
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
            <ButtonPrimary href={ROUTES.GET_STARTED}>Get Started</ButtonPrimary>
          </SubHeadlinePositioner>
        </SubHeadline>
      </SectionLayout>
    </Section>
  );
};
