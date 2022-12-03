import "../styles/view.css";
import "../styles/Nav.css";
import "../styles/Home.css";
import "../styles/Details.css";
import Navbar from "../component/Nav/Navbar";
import BotNav from "../component/Nav/BotNav";
import Footer from "../component/Nav/Footer";
// Right content
// import RightCard from "../component/Home/RightCard";
import DateVise from "../component/Home/DateVise";
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
              {/* <RightCard /> */}
              <DateVise />
            </div>
          </div>
        </div>
        <Footer />
        <BotNav />
      </div>
    </>
  );
}

export default MyApp;
