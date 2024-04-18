import Header from "../../components/homeSections/Header";
import TrendingBrands from "../../components/homeSections/TrendingBrands";
import Categories from "../../components/homeSections/Categories";
import JustIn from "../../components/homeSections/JustIn";
import BestSeller from "../../components/homeSections/BestSeller";
import Footer from "../../components/homeSections/Footer";
import NewsFeed from "../../components/NewsFeed";

function Index() {
  return (
    <>
      <Header />
      <TrendingBrands />
      <JustIn />
      <Categories />
      <BestSeller />
      <NewsFeed />
      <Footer />
    </>
  );
}

export default Index;
