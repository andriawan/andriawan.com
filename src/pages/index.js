import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typed from "react-typed";
import Banner from "../images/bg-masthead.jpg";

function IndexPage() {
  const displayText = [
    "Hello World :D ^1000",
    "My Name is Andriawan ^1000",
    "Welcome to my digital home ^1000"
  ];

  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `irwan`, `portofolio`, `homepage`]}
        title="Home"
        description="Andriawan's Landing page"
      />

      <section className="text-center">
        <img
          className="object-cover fixed inset-0 w-full h-full"
          style={{ zIndex: -2 }}
          src={Banner}
        ></img>
        <div className="my-gradient dark:my-gradient bg-dark-gray fixed inset-0 w-full h-full"></div>

        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white inline-block my-8 p-3">
          <Typed
            strings={displayText}
            typeSpeed={100}
            fadeOut
            cursorChar={"_"}
            loop
          />
        </h1>
      </section>
    </Layout>
  );
}

export default IndexPage;
