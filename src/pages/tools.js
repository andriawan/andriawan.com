import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Tools() {
  const KEBAB_CASE = "Kebab Case";
  const CAMEL_CASE = "Camel Case";
  const UPPER_CASE = "Upper Case";
  const LOWER_CASE = "Lower Case";

  const [output, setOutput] = useState("");

  function manipulateData(domEl) {
    let mode;
    document.querySelectorAll('input[name="mode"]').forEach((el) => {
      if (el.checked) {
        mode = el.value;
      }
    });

    let str = domEl.value;

    switch (mode) {
      case UPPER_CASE:
        setOutput(str.toUpperCase());
        break;
      case LOWER_CASE:
        setOutput(str.toLowerCase());
        break;
      case KEBAB_CASE:
        str =
          str &&
          str
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map((x) => x.toLowerCase())
            .join("-");
        setOutput(str);
        break;
      case CAMEL_CASE:
        str = str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (camelCaseMatch, i) => {
          if (+camelCaseMatch === 0) return "";
          return i === 0
            ? camelCaseMatch.toLowerCase()
            : camelCaseMatch.toUpperCase();
        });
        setOutput(str);
        break;
      default:
        setOutput("");
        break;
    }
  }

  return (
    <Layout>
      <SEO
        keywords={[`andriawan`, `irwan`, `tools`, `useful`]}
        title="Tools"
        description="Common useful tools such manipulation strings, words and sentences"
        image="https://res.cloudinary.com/andriawan/image/upload/v1585108772/images/home.png"
      />
      <section>
        <div className="flex text-white mb-6 rounded-lg border p-4 border-white">
          <div className="flex-1">
            <input
              type="radio"
              onChange={() =>
                manipulateData(
                  document.querySelector('textarea[name="inputData"]')
                )
              }
              name="mode"
              value={KEBAB_CASE}
            />
            <span className="ml-2">Kebab Case</span>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              onChange={() =>
                manipulateData(
                  document.querySelector('textarea[name="inputData"]')
                )
              }
              name="mode"
              value={CAMEL_CASE}
            />
            <span className="ml-2">Camel Case</span>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              onChange={() =>
                manipulateData(
                  document.querySelector('textarea[name="inputData"]')
                )
              }
              name="mode"
              value={UPPER_CASE}
            />
            <span className="ml-2">Upper Case</span>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              onChange={() =>
                manipulateData(
                  document.querySelector('textarea[name="inputData"]')
                )
              }
              name="mode"
              value={LOWER_CASE}
            />
            <span className="ml-2">Lower Case</span>
          </div>
        </div>
        <div className="flex flex-wrap" style={{ boxSizing: "border-box" }}>
          <div className="w-1/2">
            <label className="text-white block mb-2" htmlFor="input">
              Input
            </label>
            <textarea
              className="mr-2 w-full p-2"
              name="inputData"
              onChange={(e) => manipulateData(e.target)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="w-1/2">
            <label className="text-white block mb-2" htmlFor="input">
              Output
            </label>
            <textarea
              name="output"
              className="ml-2 w-full p-2"
              value={output}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Tools;
