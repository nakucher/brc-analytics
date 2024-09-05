import { Link as DXLink } from "@databiosphere/findable-ui/lib/components/Links/components/Link/link";
import { Questions } from "./components/Questions/questions";
import {
  Headline,
  SectionLayout,
  StyledSection as Section,
  StyledSectionSubTitle,
  StyledSectionTitle,
} from "./sectionHelp.styles";

export const SectionHelp = (): JSX.Element => {
  return (
    <Section>
      <SectionLayout>
        <Headline>
          <StyledSectionTitle>Your questions, answered</StyledSectionTitle>
          <StyledSectionSubTitle>
            If you need further assistance, feel free to reach out to us at{" "}
            <DXLink
              label="your-email@example.com"
              url="mailto:your-email@example.com"
            />
            . We&#39;re here to help!
          </StyledSectionSubTitle>
        </Headline>
        <Questions />
      </SectionLayout>
    </Section>
  );
};
