import React, { useState, useEffect, useCallback } from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import SimpleLineIcon from "react-simple-line-icons";
import { ReactComponent as Sun } from "../svg/sun.svg";
import { ReactComponent as Moon } from "../svg/moon.svg";
import { ReactComponent as Calendar } from "../svg/calendar.svg";
import { ReactComponent as Time } from "../svg/time.svg";
import { ReactComponent as LeftArrow } from "../svg/left-arrow.svg";
import { ReactComponent as Home } from "../svg/home.svg";
import { ReactComponent as UpArrow } from "../svg/arrow-up.svg";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import isInViewport from "../util/viewport";

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, timeToRead, excerpt, body } = mdx;
  const [isDark, toggleDark] = useState(null);
  const currentTime = new Date().getHours();

  const handleButtonBackToTop = useCallback(() => {
      if(isInViewport(document.querySelector('.date-creation'))){
        document.querySelector('.up-arrow').classList.add('scale-down-animation');
        document.querySelector('.up-arrow').classList.remove('scale-up-animation');
      }else{
        document.querySelector('.up-arrow').classList.add('h-auto', 'w-auto');
        document.querySelector('.up-arrow').classList.add('scale-up-animation');
        document.querySelector('.up-arrow').classList.remove('scale-down-animation');
      }
  },[isDark]);

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

    document.querySelector('.loader').classList.add('opacity-0');

    setTimeout(() => {
      document.querySelector('.loader').classList.add('h-0', 'w-0');  
    }, 500);

    document.addEventListener('scroll', handleButtonBackToTop)

    return () => {
      document.removeEventListener('scroll', handleButtonBackToTop);
    }

  }, [isDark]);

  return (
    <div className="dark:bg-black">
      <SEO
        keywords={[`andriawan`, `blog`, `posts`, `tutorial`]}
        title={frontmatter.title}
        description={excerpt}
        image={frontmatter.banner == null ? `https://res.cloudinary.com/andriawan/image/upload/v1585108772/images/home.png` : frontmatter.banner.publicURL}
        options={{internal_image : frontmatter.banner !== null}}
      />
      <header>
        <div className="flex flex-wrap items-center md:flex hidden justify-between max-w-screen-sm mx-auto py-8">
          <Link
            className="flex items-center no-underline text-teal-400"
            to="/blog"
          >
            <LeftArrow className="text-teal-400 text-4xl" />
          </Link>
          <Link className="flex items-center no-underline text-teal-400" to="/">
            <Home className="text-teal-400 text-xl" />
          </Link>
          <button
            onClick={() => {
              toggleDark(!isDark);
              localStorage.dark = !isDark;
            }}
          >
            {isDark == true ? (
              <Sun className="text-center text-teal-400 text-4xl" />
            ) : (
              <Moon className="text-center text-teal-400 text-4xl" />
            )}
          </button>
        </div>
      </header>
      <div className="blog-post-container font-serif max-w-screen-sm m-auto">
        <div className="blog-post">
          <h1 className="text-4xl px-4 py-4 md:px-0 md:py-0 dark:text-teal-400">
            {frontmatter.title}
          </h1>
          <h2 className="text-xl px-4 py-4 md:px-0 md:py-0 text-gray-500 dark:text-gray-400 md:pb-4">
            <Calendar className="date-creation inline-block dark:text-teal-400 pr-2" />
            {frontmatter.date}
            <Time className="inline-block dark:text-teal-400 ml-4 pr-2" />
            <span className="text-gray-500 dark:text-gray-400 text-xl">
              {timeToRead} min reading
            </span>
          </h2>
          {frontmatter.banner === null ? (
            ""
          ) : (
            <Img className="mb-6" fluid={frontmatter.banner.childImageSharp.fluid} />
          )}
          <div className="blog-post-content pt-4 px-4 py-4 md:px-0 md:py-0 text-xl md:text-xl dark:text-gray-500">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
      <button onClick={() => {
        window.scroll({
          top: 0, 
          behavior: 'smooth'
        });
      }} className="opacity-0 fixed invisible sm:visible up-arrow h-0 w-0 right-0 bottom-0 mr-4 mb-4 bg-gray-800 rounded-full visible">
        <UpArrow className="text-center text-teal-400 text-5xl"/>
        </button>
      <footer>
        <nav className="flex flex-col sm:flex-row sm:justify-between sm:max-w-screen-sm mx-auto md:py-8 text-sm">
          <p className="text-gray-700 text-center p-2">
            Created by{` `}
            <a
              className="font-bold no-underline text-teal-400"
              href="https://andriawan.com"
            >
              Muhammad Irwan Andriawan
            </a>
          </p>
          <div className="flex pb-20 justify-center sm:justify-between">
            <div className="flex justify-around">
              <div className="p-3">
                <a
                  className="font-bold no-underline text-teal-400"
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
                  href="tel:089637755100"
                >
                  <SimpleLineIcon color="teal" name="phone"></SimpleLineIcon>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <div className="fixed inset-x-0 bottom-0 h-16 bg-gray-700 md:hidden">
        <div className="flex flex-wrap items-center h-full justify-around mx-auto px-2 py-2">
          <Link
            className="flex items-center no-underline text-teal-400"
            to="/blog"
          >
            <LeftArrow className="text-center h-full text-teal-400 text-4xl" />
          </Link>
          <Link className="flex items-center no-underline text-teal-400" to="/">
            <Home className="text-teal-400 text-xl" />
          </Link>
          <button
            onClick={() => {
              toggleDark(!isDark);
              localStorage.dark = !isDark;
            }}
          >
            {isDark == true ? (
              <Sun className="text-center text-teal-400 text-4xl" />
            ) : (
              <Moon className="text-center text-teal-400 text-4xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        banner {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }
      }
    }
  }
`;
Template.propTypes = {
  data: PropTypes.object,
  mdx: PropTypes.object,
};

export default Template;
