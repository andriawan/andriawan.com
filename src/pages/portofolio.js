import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import data from "../data/portofolio_list";
import ProjectList from "../components/portofolioList";

function PortofolioPage() {
  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `irwan`, `portofolio`, `about`]}
        title="Portofolio"
        description="All about andriawan works"
      />
      <section>
        <div className="flex flex-wrap" style={{ boxSizing: "border-box" }}>
          {data.map((value, index) => (
            <ProjectList key={index} data={value}></ProjectList>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default PortofolioPage;
