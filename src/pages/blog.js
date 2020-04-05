import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { ReactComponent as Calendar } from "../svg/calendar.svg";

function Blog({ data }) {
  const { edges } = data.allMdx;
  useEffect(() => {
    console.log(edges);
  }, []);

  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `blog`, `blogger`, `programming`]}
        title="Blog | Andriawan"
        description="Andriawan's Blog posts"
        image="https://res.cloudinary.com/andriawan/image/upload/v1585108772/images/home.png"
      />
      <section>
        <h1 className="dark:text-gray-500 text-4xl sm:text-5xl pb-2 text-gray-800">
          Blog Posts
        </h1>
        {edges.map(edge => {
          return (
            <div className="pb-4" key={edge.node.id}>
              <h2 className="text-2xl dark:text-gray-400">
                <a href={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </a>
              </h2>
              <p className="text-base dark:text-teal-400 text-teal-700"><Calendar className="inline-block dark:text-teal-400 mr-2" />{edge.node.frontmatter.date}</p>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.object
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
