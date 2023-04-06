import React from "react";
import WebDesignLink from "../components/WebDesignLink";
import AppDesignLink from "../components/AppDesignLink";
import GraphicDesignLink from "../components/GraphicDesignLink";
import Passionate from "../components/Passionate";
import Resourceful from "../components/Resourceful";
import Friendly from "../components/Friendly";

const Index = () => {
  return (
    <main className="container">
      <section className="hero br bg-peach display-f ai-c position-r">
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
        <div className="oval position-a"></div>
      </section>
      <section className="image-links display-f">
        <WebDesignLink />
        <div>
          <AppDesignLink />
          <GraphicDesignLink />
        </div>
      </section>
      <section className="qualities row">
        <div className="qualities__col col">
          <div className="index-svg">
            <Passionate />
          </div>
          <h1 className="qualities__title font-h3">Passionate</h1>
          <p className="qualities__body font-body">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="qualities__col col">
          <div className="index-svg">
            <Resourceful />
          </div>
          <h1 className="qualities__title font-h3">Resourceful</h1>
          <p className="qualities__body font-body">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div className="qualities__col col">
          <div className="index-svg">
            <Friendly />
          </div>
          <h1 className="qualities__title font-h3">Friendly</h1>
          <p className="qualities__body font-body">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
