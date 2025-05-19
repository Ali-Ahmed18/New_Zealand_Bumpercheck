import React from 'react';
import Landing from '../../Components/landing';
import Pera from '../../Components/pera';
import TestimonialSlider from '../../Components/reviewslider.jsx';
import FloatButton from '../../Components/floatButton.jsx';
import Card from '../../Components/card.jsx';
import Services from '../../Components/sevices.jsx';
import Footer from '../../Components/footer.jsx';
import Accordion from '../../Components/accordion.jsx';
import HeadManager from '../../Components/headerManager.jsx';





const Home = () => {

  return (
    <>

      <HeadManager
        title="New Zealand BumperCheck - Vehicle History Reports"
        description="Get comprehensive VIN reports for cars. Ensure transparency and make informed decisions with our detailed car history reports."
        keywords="car VIN report, vehicle history, VIN check, car history, vehicle report"
      />
      <div className='h-[100vh] w-[100%] max-w-[1300px] mx-auto'>
        <div className="bg-slate-100 pt-16">
          <main className="w-[85%] mx-auto">
            <Landing />
          </main>
        </div>
        <div className="mt-[120px]">
          <Pera />
          <Card />
        
          <Services />

          <div className="w-[85%] mx-auto mt-[120px]">
            <TestimonialSlider />
            <Accordion />
          </div>
        </div>
        <div className='mt-[120px]'>
          <Footer />
        </div>
        <FloatButton />
      </div>
    </>
  );
};

export default Home;
