import { StyledPagesMain } from "../../app/components/Layout/components/Main/main.styles";
import { AboutView } from "../../app/views/AboutView/aboutView";

export const About = (): JSX.Element => {
  return <AboutView />;
};

export default About;

About.Main = StyledPagesMain;
