import React from "react";

const Index = () => {
  return (
    <main>
      <section className="hero position-r container br bg-peach display-f ai-c">
        <div className="hero__text">
          <h1 className="font-h1 text-white pb-2">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="font-body text-white pb-2">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="btn-on-dark">Learn More</button>
        </div>
        <img
          className="hero__img position-a"
          src="https://i.imgur.com/vWXCC3f.png"
          alt="mobile phone"
        />
      </section>
    </main>
  );
};

export default Index;
