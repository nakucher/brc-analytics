import { StyledAppLayout } from "../app/components/Layout/components/AppLayout/appLayout.styles";
import { HomeView } from "../app/views/HomeView/homeView";

export const Home = (): JSX.Element => {
  return <HomeView />;
};

export default Home;

Home.AppLayout = StyledAppLayout;
