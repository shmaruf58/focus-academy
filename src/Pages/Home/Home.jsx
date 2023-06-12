import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Classes from "./Classes/Classes";
import Insta from "./Insta/Insta";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Focus Academy | Home</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>
      <Category></Category>
      <Insta></Insta>
    </div>
  );
};

export default Home;
