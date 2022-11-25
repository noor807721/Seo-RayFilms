import "../styles/view.css";
import "../styles/Nav.css";
import "../styles/Home.css";
import "../styles/More.css";
import "../styles/Search.css";
import Navbar from "../components/Nav/Navbar";
import BotNav from "../components/Nav/BotNav";
// Right content
import RightCard from "../components/RightCont/RightCard";
import DateVise from "../components/RightCont/DateVise";
// import TopMovies from "../components/RightCont/TopMovies";
// import Footer from '../components/Nav/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="RayFilms">
        <Navbar />
        <div className="All_Content">
          <div className="Left">
            <Component {...pageProps} />
          </div>
          <div className="Right">
            <div className="RigCon">
              <RightCard />
              <DateVise />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
        <BotNav />
      </div>
    </>
  );
}

export default MyApp;
