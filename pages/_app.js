import { useEffect } from "react";
import "../styles/view.css";
import "../styles/Nav.css";
import "../styles/Home.css";
import "../styles/Details.css";
import Navbar,{BotNav} from "../component/Nav/Navbar";
import Footer from "../component/Nav/Footer";
import DateVise from "../component/Home/DateVise";
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  useEffect(() => {

  }, []);

  return (
    <>
      <div className="RayFilms">
        <Navbar />
        <NextNProgress />
        <div className="All_Content">
          <div className="Left">
            <Component {...pageProps} />
          </div>
          <div className="Right">
            <div className="RigCon">
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
