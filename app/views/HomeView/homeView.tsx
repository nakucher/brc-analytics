import { Fragment } from "react";
import { SectionAnalytics } from "../../components/Home/components/Section/components/SectionAnalytics/sectionAnalytics";
import { SectionBranding } from "../../components/Home/components/Section/components/SectionBranding/sectionBranding";
import { SectionHelp } from "../../components/Home/components/Section/components/SectionHelp/sectionHelp";
import { SectionHero } from "../../components/Home/components/Section/components/SectionHero/sectionHero";

export const HomeView = (): JSX.Element => {
  return (
    <Fragment>
      <SectionHero />
      <SectionHelp />
      <SectionAnalytics />
      <SectionBranding />
    </Fragment>
  );
};
