import { useState, useEffect } from "react";
import Router from "next/router";

function Loader() {
  const [loading, setLoading] = useState([false,"30%"]);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading([true,"50%"]));
    Router.events.on('routeChangeComplete', () => setLoading([false,"100%"]));
  }, []);
  if (loading[0]) {
    return <div className="Loader" style={{width:loading[1]}}></div>;
  } else {
    return null;
  }
}

export default Loader;
