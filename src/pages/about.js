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
          <blockquote className="pl-4 font-serif leading-loose text-justify">
            Nama saya adalah Muhammad Irwan Andriawan. Seorang Pengembang
            software sejak 2015. Lahir di Jember, Jawa Timur. Saat ini sedang
            berkarir di Jakarta sebagai seorang Web Developer Sebuah Perusahaan
            Software House. Fokus pengembangan saya mencakup Mobile Programming
            dan Web Programming. Sangat suka memperbarui skill dengan
            memepelajari hal-hal baru dan kekinian. Aktif Ngeblog dan share
            kegiatan programming. Sangat terbuka untuk sharing dan kerja sama.
            Silahkan liat-liat portfolio saya.
          </blockquote>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={andriawan} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
