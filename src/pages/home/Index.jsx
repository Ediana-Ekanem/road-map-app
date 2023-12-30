import Header from "../../components/homeSections/Header";
import { TrendingBrands } from "../../components/homeSections/TrendingBrands";
import { Categories } from "../../components/homeSections/Categories";
import { JustIn } from "../../components/homeSections/JustIn";
function Index() {
  return (
    <div>
      <Header />
      <TrendingBrands />
      <JustIn />
      <Categories />
    </div>
  );
}

export default Index;
