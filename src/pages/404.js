import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2 h-full pt-4 md:h-64"
          src={abductionIllustration}
        />
        <h2 className="dark:text-gray-500loc text-center text-gray-700 text-xl sm:text-2xl font-bold my-8 p-3">
          Sorry, we have nothing for you here :(
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
