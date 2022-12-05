import Seo from "../component/SeeMore/Seo";
import Carousel from "../component/Home/Carousel";
import SliderHed from "../component/Home/SliderHed";
import Slider from "../component/Home/Slider";
import TopMovies from "../component/Home/TopMovies";
import { latestMovie, SliderMovie, getRating } from "../action/home";
import { description } from "../static/content";

const Home = (props) => {
  const { carousal, Animation, Hollywood, Rating } = props;
  return (
    <>
      <Seo Title="Home | RayFilms" Desc={description}/>
        <div className="Home_Page">
          <Carousel data={carousal} />
          <Slider hedding="Animation" data={Animation} />
          <Slider hedding="Hollywood" data={Hollywood} />
          <SliderHed type="success" hedding="Top-Movies" />
          <TopMovies data={Rating} />
        </div>
    </>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  const carousal = await latestMovie();
  const Animation = await SliderMovie("Animation");
  const Hollywood = await SliderMovie("Hollywood");
  const Rating = await getRating();
  return {
    props: {
      carousal,
      Animation,
      Hollywood,
      Rating,
    },
  };
}
export default Home;
