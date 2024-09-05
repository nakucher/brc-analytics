import {
  SectionLayout,
  StyledChip,
  StyledSection as Section,
  Subhead,
} from "./sectionSubHero.styles";

export const SectionSubHero = (): JSX.Element => {
  return (
    <Section>
      <SectionLayout>
        <StyledChip
          color="default"
          label="The NIAID Bioinformatics Resource Analytics Center"
          variant="filled"
        />
        <Subhead>
          BRC-Analytics is your new destination for comprehensive analysis of
          biological data related to pathogens. Building on the legacy of
          VeuPathDb, our platform currently supports analyses for 785 eukaryotic
          pathogens and vectors, providing researchers with the tools they need
          to advance their work.
        </Subhead>
      </SectionLayout>
    </Section>
  );
};
