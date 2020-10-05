import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ReactComponent as Home } from "../svg/home.svg";
import { ReactComponent as AboutMe } from "../svg/about-me.svg";
import { ReactComponent as Portofolio } from "../svg/portofolio.svg";
import { ReactComponent as Blog } from "../svg/blog.svg";
import { ReactComponent as Chart } from "../svg/chart.svg";

function BottomNavigation({ gradient }) {
  if (gradient.background === undefined) gradient = { background: "#ffffff38" };

  return (
    <div
      className="fixed inset-x-0 bottom-0 h-16 bg-gray-700 md:hidden"
      style={gradient}
    >
      <div className="flex flex-no-wrap items-center h-full justify-around mx-auto">
        <div className="h-full w-full flex">
          <Link
            className="w-full flex items-center no-underline text-white"
            to="/"
            activeClassName="active-menu-bottom"
          >
            <Home className="w-full text-white text-xl" />
          </Link>
        </div>
        <div className="h-full w-full flex">
          <Link
            className="w-full flex items-center no-underline text-white"
            to="/about"
            activeClassName="active-menu-bottom"
          >
            <AboutMe className="w-full text-white text-xl" />
          </Link>
        </div>
        <div className="h-full w-full flex">
          <Link
            className="w-full flex items-center no-underline text-white"
            to="/portofolio"
            activeClassName="active-menu-bottom"
          >
            <Portofolio className="w-full text-white text-xl" />
          </Link>
        </div>

        <div className="h-full w-full flex">
          <Link
            className="w-full flex items-center no-underline text-white"
            to="/blog"
            activeClassName="active-menu-bottom"
          >
            <Blog className="w-full text-white text-xl" />
          </Link>
        </div>
        <div className="h-full w-full flex">
          <Link
            className="w-full flex items-center no-underline text-white"
            to="/tools/string-manipulation"
            activeClassName="active-menu-bottom"
          >
            <Chart className="w-full text-white text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

BottomNavigation.propTypes = {
  gradient: PropTypes.string,
};

export default BottomNavigation;
