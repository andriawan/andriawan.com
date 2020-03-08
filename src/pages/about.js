import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import andriawan from "../images/my-face.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
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
            src={andriawan}
          />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
