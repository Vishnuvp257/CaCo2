import { useState, useEffect } from "react";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { BaseCard } from "./components/basecard";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Box } from "./components/box";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <BaseCard
        noOfCards={4}
        visible={3.5}
        spacing={6}
        ratio={0.6}
        children={<Box color="#000" />}
      />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
