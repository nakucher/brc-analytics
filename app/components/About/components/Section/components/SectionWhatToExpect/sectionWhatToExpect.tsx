import {
  Section,
  Subhead,
  SubHeadline,
  SubheadText,
} from "../../section.styles";
import { Expectations } from "./components/MDX";
import {
  StyledContent,
  StyledSectionLayout,
} from "./sectionWhatToExpect.styles";

export const SectionWhatToExpect = (): JSX.Element => {
  return (
    <Section>
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
    </Section>
  );
};
