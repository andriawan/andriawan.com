import PropTypes from "prop-types";
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../svg/sun.svg";
import { ReactComponent as Moon } from "../svg/moon.svg";
import BottomNavigation from "./bottomNavigation";

function Header({ className, gradient, currentTime }) {
  const [isDark, toggleDark] = useState(null);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author_name
        }
      }
    }
  `);

  useEffect(() => {
    if (currentTime > 17 || currentTime < 6) localStorage.dark = true;
    if (localStorage.dark === undefined) localStorage.dark = false;

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
    <header className={`text-gray-100 ${className}`} style={gradient}>
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <span className="text-gray-100 md:text-xl tracking-tight">
            {site.siteMetadata.author_name}
          </span>
        </Link>

        <button
          className="focus:outline-none block md:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => {
            toggleDark(!isDark);
            localStorage.dark = !isDark;
          }}
        >
          {isDark == true ? (
            <Sun className="text-white" />
          ) : (
            <Moon className="text-white" />
          )}
        </button>

        <nav
          className={`hidden md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/portofolio`,
              title: `Portofolio`,
            },
            {
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/tools/string-manipulation`,
              title: `Tools`,
            },
          ].map((link) => (
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
            className="focus:outline-none mt-4 md:mt-0 md:ml-6 invisible md:visible no-underline"
            onClick={() => {
              toggleDark(!isDark);
              localStorage.dark = !isDark;
            }}
          >
            {isDark == true ? <Sun /> : <Moon />}
          </button>
        </nav>
        <BottomNavigation gradient={gradient} />
      </div>
    </header>
  );
}

Header.propTypes = {
  gradient: PropTypes.object,
  currentTime: PropTypes.number,
  className: PropTypes.string,
};

export default Header;
