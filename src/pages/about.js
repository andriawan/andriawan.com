import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="dark:text-gray-500 mb-6 md:w-2/3 md:mr-8">
          <p className="pl-4 font-serif">
            Nama saya adalah Muhammad Irwan Andriawan. Seorang Pengembang
            software sejak 2015.
          </p>
          <br></br>
          <p className="pl-4 font-serif">
            Lahir di Jember, Jawa Timur. Saat ini sedang berkarir di Jakarta
            sebagai seorang Web Developer Sebuah Perusahaan Software House.
            Fokus pengembangan saya mencakup Mobile Programming dan Web
            Programming.
          </p>
          <br></br>
          <p className="pl-4 font-serif">
            Sangat suka memperbarui skill dengan memepelajari hal-hal baru dan
            kekinian. Aktif Ngeblog dan share kegiatan programming. Sangat
            terbuka untuk sharing dan kerja sama. Silahkan liat-liat portfolio
            saya.
          </p>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img
            className="text-center m-auto w-48"
            alt="A dog relaxing"
            src="https://res.cloudinary.com/andriawan/image/upload/w_300/v1583851598/images/my-face.png"
          />
          <a href="https://docs.google.com/document/d/1IaxUSnNcj_s8NGruEGgCi7N1OQdNMGfmu3sGso2nZF8/edit" style={{background: "linear-gradient(to right , #18adfd7d, #1fec93d1)"}} className="mt-6 dark:bg-black block text-center text-white font-bold py-2 px-4 rounded">
            Download My Complete CV
          </a>
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
