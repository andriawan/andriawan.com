import PropTypes from "prop-types";
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../svg/sun.svg";
import { ReactComponent as Moon } from "../svg/moon.svg";

function Header({ gradient }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isDark, toggleDark] = useState(null);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    if (isDark == null) {
      toggleDark(JSON.parse(localStorage.dark));
    }

    if (isDark) {
      document.documentElement.classList.add("mode-dark");
    } else {
      document.documentElement.classList.remove("mode-dark");
    }
  }, [isDark]);

  return (
    <header className="text-gray-100" style={gradient}>
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <span className="text-gray-100 font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/portofolio`,
              title: `Portofolio`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
              activeClassName="border-2 border-white rounded-full pb-2 pt-2 pr-4 pl-4"
            >
              {link.title}
            </Link>
          ))}
          <button
            className="mt-4 md:mt-0 md:ml-6 invisible md:visible no-underline"
            onClick={() => {
              toggleDark(!isDark);
              localStorage.dark = !isDark;
            }}
          >
            {isDark == true ? <Sun /> : <Moon />}
          </button>
        </nav>
        <button
          onClick={() => {
            toggleDark(!isDark);
            localStorage.dark = !isDark;
          }}
          className="fixed right-0 bottom-0 mr-4 mb-4 visible md:invisible"
        >
          {isDark == true ? (
            <Sun className="rounded-full px-3 py-3 bg-white w-12 h-12 text-center text-3xl text-black" />
          ) : (
            <Moon className="rounded-full px-3 py-3 bg-black w-12 h-12 text-center text-3xl text-white" />
          )}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  gradient: PropTypes.object
};

export default Header;
