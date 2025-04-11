import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SimpleLineIcon from "react-simple-line-icons";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `irwan`, `portofolio`, `about`]}
        title="About Muhammad Irwan Andriawan"
        description="All description about andriawan in profession IT industry"
        image="https://res.cloudinary.com/andriawan/image/upload/v1585108772/images/about_me.png"
      />

      <section className="pt-6 md:pt-0 flex flex-col items-center md:flex-row">
        <figure className="w-2/3 md:w-1/3 md:hidden">
          <img
            className="text-center m-auto w-48"
            alt="A dog relaxing"
            src="https://res.cloudinary.com/andriawan/image/upload/w_300/v1583851598/images/my-face.png"
          />

          <div className="pt-6 flex justify-center sm:justify-between">
            <div className="flex justify-around">
              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="https://github.com/andriawan"
                >
                  <SimpleLineIcon
                    color="teal"
                    name="social-github"
                  ></SimpleLineIcon>
                </a>
              </div>

              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="https://www.linkedin.com/in/andriawan/"
                >
                  <SimpleLineIcon
                    color="teal"
                    name="social-linkedin"
                  ></SimpleLineIcon>
                </a>
              </div>

              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="https://www.facebook.com/muhammad.irwan.andriawan"
                >
                  <SimpleLineIcon
                    color="teal"
                    name="social-facebook"
                  ></SimpleLineIcon>
                </a>
              </div>

              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="https://t.me/irwan_andriawan"
                >
                  <SimpleLineIcon
                    color="teal"
                    name="paper-plane"
                  ></SimpleLineIcon>
                </a>
              </div>

              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="tel:089637755100"
                >
                  <SimpleLineIcon color="teal" name="phone"></SimpleLineIcon>
                </a>
              </div>
            </div>
          </div>
        </figure>
        <div className="pt-6 px-4 md:px-0 font-serif dark:text-gray-500 mb-6 md:w-2/3 md:mr-8">
          <p>
            My name is Muhammad Irwan Andriawan, a software developer since 2015.
          </p>
          <br></br>
          <p>
            I was born in Jember, East Java, and am currently based in Bandung, working as a Frontend Developer at a startup. I frequently work with JavaScript in my daily tasks.
          </p>
          <br></br>
          <p>
            I have a strong passion for continuously improving my skills by learning new and up-to-date technologies. I actively blog and share my programming activities. I am always open to collaboration and knowledge sharing. Feel free to take a look at my portfolio.
          </p>
        </div>

        <figure className="w-2/3 md:w-1/3 hidden md:block">
          <img
            className="text-center m-auto w-48"
            alt="A dog relaxing"
            src="https://res.cloudinary.com/andriawan/image/upload/w_300/v1583851598/images/my-face.png"
          />
          <a
            href="https://docs.google.com/document/d/1IaxUSnNcj_s8NGruEGgCi7N1OQdNMGfmu3sGso2nZF8/edit"
            style={{
              background: "linear-gradient(to right , #18adfd7d, #1fec93d1)",
            }}
            className="text-xs mt-6 dark:bg-black block text-center text-white font-bold py-2 px-4 rounded"
          >
            Download My Complete CV
          </a>
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
