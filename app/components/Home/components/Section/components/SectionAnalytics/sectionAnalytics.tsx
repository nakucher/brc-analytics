import { SectionSubtitle, SectionTitle } from "../../section.styles";
import { AnalyticsTools } from "./components/AnalyticsTools/analyticsTools";
import { Headline, Section, SectionLayout } from "./sectionAnalytics.styles";

export const SectionAnalytics = (): JSX.Element => {
  return (
    <Section>
      <SectionLayout>
        <Headline>
          <SectionTitle>How does brc-analytics work?</SectionTitle>
          <SectionSubtitle>
            The new BRC will be built on a proven data analytics platform called
            Galaxy.
          </SectionSubtitle>
        </Headline>
        <AnalyticsTools />
      </SectionLayout>
    </Section>
  );
};
