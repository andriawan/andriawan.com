import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SimpleLineIcon from "react-simple-line-icons";

import Header from "./header";
function Layout({ children }) {
  const { title } = children[0].props;
  const [gradient, setGradient] = useState({});

  useEffect(() => {
    if (title !== "Home") {
      setGradient({
        ...gradient,
        background: `linear-gradient(to right , #18adfd7d, #1fec93d1)`
      });
    }

    if(localStorage.dark === undefined) localStorage.dark = false;

    if (JSON.parse(localStorage.dark)) {
      document.documentElement.classList.add("mode-dark");
    } else {
      document.documentElement.classList.remove("mode-dark");
    }
  }, []);
  return (
    <div
      id="container"
      className={
        `flex flex-col font-sans min-h-screen text-gray-900
        ${
          title === "Home" ? "dark:bg-transparent" : "dark:bg-gray-900"
        }`
      }
    >
      <Header gradient={gradient} />

      <main
        className={`flex ${
          title === "Home" ? "justify-center" : ""
        } flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full`}
      >
        {children}
      </main>

      <footer style={gradient}>
        <nav className="flex flex-col sm:flex-row sm:justify-between sm:max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white text-center p-2">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://andriawan.com"
            >
              Muhammad Irwan Andriawan
            </a>
          </p>
          <div className="flex justify-center sm:justify-between">
            <div className="border-2 flex justify-around rounded-full border-white">
              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="https://github.com/andriawan"
                >
                  <SimpleLineIcon
                    color="white"
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
                    color="white"
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
                    color="white"
                    name="social-facebook"
                  ></SimpleLineIcon>
                </a>
              </div>

              <div className="p-3">
                <a
                  className="font-bold no-underline text-white"
                  href="tel:089637755100"
                >
                  <SimpleLineIcon color="white" name="phone"></SimpleLineIcon>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
