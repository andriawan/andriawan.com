import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import data from '../data/portofolio_list';
import ProjectList from '../components/portofolioList';

function PortofolioPage() {
  console.log(data);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        {data.map((value, index) => <ProjectList key={index} data={value}></ProjectList>)}
      </section>
    </Layout>
  );
}

export default PortofolioPage;
