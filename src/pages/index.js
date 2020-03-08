import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typed from "react-typed";
import Imgx from "../images/bg-masthead.jpg";

function IndexPage() {
  const displayText = [
    "Hello World :D ^1000",
    "My Name is Andriawan ^1000",
    "Welcome to my digital home ^1000"
  ];

  const gradient = {
    background: "linear-gradient(to right , #18adfd7d, #1fec93d1)",
    zIndex: -1
  };

  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `irwan`, `portofolio`, `homepage`]}
        title="Home"
      />

      <section className="text-center">
        <img
          className="object-cover fixed inset-0 w-full h-full"
          style={{ zIndex: -2 }}
          src={Imgx}
        ></img>
        <div
          className="bg-dark-gray fixed inset-0 w-full h-full"
          style={gradient}
        ></div>

        <h1 className="text-4xl font-bold text-white inline-block my-8 p-3">
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
