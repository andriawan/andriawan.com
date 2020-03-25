import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SimpleLineIcon from "react-simple-line-icons";
import { ReactComponent as Indonesia } from "../svg/indonesia.svg";
import Banner from "../images/home.png";

function Covid19() {
  const height = "h-32 sm:h-40";
  const BASE_URL = "https://api.kawalcorona.com";
  const [data, refreshData] = useState(null);
  useEffect(() => {
    async function init() {
      let positive = await (await fetch(`${BASE_URL}/positif/`)).json();
      let death = await (await fetch(`${BASE_URL}/meninggal/`)).json();
      let recovered = await (await fetch(`${BASE_URL}/sembuh/`)).json();
      let indonesia = await (await fetch(`${BASE_URL}/`)).json();

      indonesia = await indonesia.filter(obj => {
        return obj.attributes.Country_Region === "Indonesia";
      });

      await refreshData({
        ...data,
        death: death,
        positive: positive,
        recovered: recovered,
        indonesia: indonesia
      });
    }

    init();
  }, []);

  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `covid19`, `covid`, `wuhan`]}
        title="COVID 19 INFO"
        description="Global Data Info for COVID19"
        image={Banner}
      />
      <section>
        <p className="dark:text-gray-500 text-center font-sans text-2xl sm:text-4xl pb-2 text-gray-800">
          GLOBAL DATA COVID19
        </p>

        <div className="flex flex-wrap" style={{ boxSizing: "border-box" }}>
          <div className="w-full sm:w-1/2">
            <div
              className={`${height} rounded-md shadow-lg text-white p-4 m-2 bg-blue-500`}
            >
              <SimpleLineIcon color="white" name="people">
                <p className="inline font-sans pl-2"> GLOBAL POSITIVE</p>
              </SimpleLineIcon>
              <div className="pt-4">
                <SimpleLineIcon
                  color="white"
                  name="graph"
                  style={{ "font-size": "30px" }}
                >
                  <p className="inline font-sans pl-2 text-4xl">
                    {data === null ? `Loading...` : data.positive.value}
                  </p>
                </SimpleLineIcon>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div
              className={`${height} rounded-md shadow-lg text-white p-4 m-2 bg-green-500`}
            >
              <SimpleLineIcon color="white" name="emotsmile">
                <p className="inline font-sans pl-2"> GLOBAL HEALING</p>
              </SimpleLineIcon>
              <div className="pt-4">
                <SimpleLineIcon
                  color="white"
                  name="graph"
                  style={{ "font-size": "30px" }}
                >
                  <p className="inline font-sans pl-2 text-4xl">
                    {data === null ? `Loading...` : data.recovered.value}
                  </p>
                </SimpleLineIcon>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div
              className={`${height} rounded-md shadow-lg text-white p-4 m-2 bg-red-700`}
            >
              <SimpleLineIcon color="white" name="people">
                <p className="inline font-sans pl-2"> GLOBAL DEATH</p>
              </SimpleLineIcon>
              <div className="pt-4">
                <SimpleLineIcon
                  color="white"
                  name="graph"
                  style={{ "font-size": "30px" }}
                >
                  <p className="inline font-sans pl-2 text-4xl">
                    {data === null ? `Loading...` : data.death.value}
                  </p>
                </SimpleLineIcon>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div
              className={`h-40 rounded-md shadow-lg text-white p-4 m-2 bg-red-500`}
            >
              <div className="flex h-16">
                <Indonesia className="inline mr-2" />
                <p className="text-3xl p-2">INDONESIA</p>
              </div>
              <p className="text-sm">
                {data === null
                  ? `Loading...`
                  : `Confirmed : ${data.indonesia[0].attributes.Confirmed}, Deaths : ${data.indonesia[0].attributes.Deaths}, Recovered : ${data.indonesia[0].attributes.Recovered}, Active Status : ${data.indonesia[0].attributes.Active}`}
              </p>
            </div>
          </div>
        </div>
        <p className="dark:text-gray-500 text-center font-sans text-sm pt-2 text-gray-800">
          API taken form{" "}
          <span className="text-blue-400">
            <a href={BASE_URL}>{BASE_URL}</a>
          </span>
        </p>

        <p className="dark:text-gray-500 text-center font-sans text-sm pt-2 text-gray-800">
          last update data : { data == null ? 'Loading...' : new Date(data.indonesia[0].attributes.Last_Update).toDateString()}
        </p>
      </section>
    </Layout>
  );
}

export default Covid19;
