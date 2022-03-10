
import React,{ useEffect, useState } from 'react';
//import Header from './components/header'; <Header />
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
//import Resume from './components/resume';

function App() {
 
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  
    const getData = () => {
      setLoading(true);
      fetch("data.json")
        .then((res) => res.json())
        .then((dataRes) => {
         console.log("data res ", dataRes);
          setData({ ...dataRes });
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
  
          console.warn("no se pudo obtener la data ", error.message);
        });
    };
    return (
      <>
        
        {loading ? (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : (
        
        <span>  
         
        <Hero />
        <About />
        <section id="portfolio" className="s-portfolio target-section">
        <Portfolio  projects={data.danyCorea.portfolio}/>
        </section>
        <Footer />
        </span>
      )}</>

    );
 
}
export default App;
