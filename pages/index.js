import Carousel from "../components/Home/Carousel";
import SliderHed from "../components/Home/SliderHed";
import Slider from "../components/Home/Slider";
import TopMovies from "../components/RightCont/TopMovies";
import { latestMovie,SliderMovie } from "../action/home";

const Home = (props) => {
  const { carousal,Animation, Hollywood, Bollywood } = props;
  console.log(Hollywood)
  return (
    <>
      <div className="Home_Page">
        <Carousel latest={carousal} />
        <Slider hedding="Animation" slidebtn="true" data={Animation} />
        <Slider hedding="Hollywood" slidebtn="true" data={Hollywood} />
        <Slider hedding="Bollywood" slidebtn="true" data={Bollywood} />
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
