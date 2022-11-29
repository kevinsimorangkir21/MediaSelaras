import React from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/NavbarFooter/Navbar";
import NextImage from "../components/NextImage";
function strukturKomunitas() {
  return (
    <Layout>
      <main>
        <Navbar />
        <section>
          <div className="min-h-screen flex justify-center relative">
            <div className="text-center self-center z-50">
              <h1 className="font-semibold text-white text-4xl max-w-sm px-6 leading-[48px]">
                Struktur Komunitas Batch 3
              </h1>
              <p className="font-semibold text-white text-3xl pt-10">
                Media Selaras 2022
              </p>
            </div>
            <NextImage
              src="/img/komunitas/komunitas.png"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt="komunitas"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-3xl text-center pt-10 pb-4">Founder</h1>
            {/* <Carousel num={10}> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default strukturKomunitas;
