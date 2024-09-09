import { Chip } from "@mui/material";
import {
  SectionContent,
  Subhead,
  SubHeadline,
  SubheadText,
} from "../../section.styles";
import {
  ComprenhensiveComparitiveGenomics,
  GenomicDataReviewAndValidation,
  HowToAnalyzeYourData,
  LaunchGalaxyInstance,
  LaunchGenomeBrowsers,
} from "./components/MDX";
import {
  Category,
  CategoryText,
  CategoryTitle,
  StyledSection,
  StyledSectionLayout,
} from "./sectionRoadmap.styles";

export const SectionRoadmap = (): JSX.Element => {
  return (
    <StyledSection>
      <StyledSectionLayout>
        <SubHeadline>
          <Subhead>Roadmap</Subhead>
          <SubheadText>The high level roadmap for the Fall 24 is:</SubheadText>
        </SubHeadline>
        <SectionContent>
          <Category>
            <Chip label="Q1, 2024" />
            <CategoryTitle>Genomic Data Review & Validation</CategoryTitle>
            <CategoryText>
              <GenomicDataReviewAndValidation />
            </CategoryText>
          </Category>
          <Category>
            <Chip label="Q2, 2024" />
            <CategoryTitle>
              Launch genome browsers for all VeuPathDb species
            </CategoryTitle>
            <CategoryText>
              <LaunchGenomeBrowsers />
            </CategoryText>
          </Category>
          <Category>
            <Chip label="Q2, 2024" />
            <CategoryTitle>Launch a Galaxy instance</CategoryTitle>
            <CategoryText>
              <LaunchGalaxyInstance />
            </CategoryText>
          </Category>
          <Category>
            <Chip label="Q3, 2024" />
            <CategoryTitle>
              How to analyze your data using these tools
            </CategoryTitle>
            <CategoryText>
              <HowToAnalyzeYourData />
            </CategoryText>
          </Category>
          <Category>
            <Chip label="Q3, 2024" />
            <CategoryTitle>
              Comprehensive comparative genomics resource
            </CategoryTitle>
            <CategoryText>
              <ComprenhensiveComparitiveGenomics />
            </CategoryText>
          </Category>
        </SectionContent>
      </StyledSectionLayout>
    </StyledSection>
  );
};
