import { Section } from "../../section.styles";
import { About } from "./components/MDX";
import { StyledSectionLayout } from "./sectionAbout.styles";

export const SectionAbout = (): JSX.Element => {
  return (
    <Section>
      <StyledSectionLayout>
        <About />
      </StyledSectionLayout>
    </Section>
  );
};
