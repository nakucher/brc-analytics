import { Subhead, SubHeadline, SubheadText } from "../../section.styles";
import { Expectations } from "./components/MDX";
import {
  StyledContent,
  StyledSection,
  StyledSectionLayout,
} from "./sectionWhatToExpect.styles";

export const SectionWhatToExpect = (): JSX.Element => {
  return (
    <StyledSection>
      <StyledSectionLayout>
        <SubHeadline>
          <Subhead>What to expect</Subhead>
          <SubheadText>
            In Fall 24 we will deploy the following resources:
          </SubheadText>
        </SubHeadline>
        <StyledContent>
          <Expectations />
        </StyledContent>
      </StyledSectionLayout>
    </StyledSection>
  );
};
