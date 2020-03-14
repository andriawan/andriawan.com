import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import data from "../data/portofolio_list";
import ProjectList from "../components/portofolioList";

function PortofolioPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Portofolio"
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
