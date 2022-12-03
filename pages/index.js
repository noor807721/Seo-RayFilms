import Carousel from "../component/Home/Carousel";
import SliderHed from "../component/Home/SliderHed";
import Slider from "../component/Home/Slider";
import TopMovies from "../component/Home/TopMovies";
import { latestMovie,SliderMovie } from "../action/home";

const Home = (props) => {
  const { carousal,Animation, Hollywood, Bollywood } = props;
  return (
    <>
      <div className="Home_Page">
        <Carousel data={carousal} />
        <Slider hedding="Animation" data={Animation} />
        <Slider hedding="Hollywood" data={Hollywood} />
        <Slider hedding="Bollywood" data={Bollywood} />
        <SliderHed type="success" hedding="Top-Movies" />
        <TopMovies />
      </div>
    </>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  const carousal = await latestMovie();
  const Animation = await SliderMovie("Animation");
  const Bollywood = await SliderMovie("Bollywood");
  const Hollywood = await SliderMovie("Hollywood");
  return {
    props: {
      carousal,
      Animation,
      Bollywood,
      Hollywood
    },
  };
}
export default Home;
