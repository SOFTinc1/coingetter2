import { HomePageConatiner } from "./Homepage.styles";
import Banner from "../../components/Landing/banner/banner.component";
import LandingHeader from "../../components/Landing/landing-header/getter-header.component";

const HomePage = () => (
  <HomePageConatiner>
    <LandingHeader />
    <Banner />
  </HomePageConatiner>
);

export default HomePage;
