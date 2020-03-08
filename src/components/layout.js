import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";

import Header from "./header";

function Layout({ children }) {
  const { title } = children[0].props;

  const [gradient, setGradient] = useState({});
  useEffect(() => {
    if (title !== "Home") {
      setGradient({
        ...gradient,
        background: "linear-gradient(to right , #18adfd7d, #1fec93d1)"
      });
    }
  }, []);
  console.log(title);
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header gradient={gradient} />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer style={gradient} >
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://andriawan.com"
            >
              Muhammad Irwan Andriawan
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/andriawan"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
