import { Questions } from "./components/Questions/questions";
import { Section, SectionLayout } from "./sectionHelp.styles";

export const SectionHelp = (): JSX.Element => {
  return (
    <Section>
      <SectionLayout>
        <Questions />
      </SectionLayout>
    </Section>
  );
};
