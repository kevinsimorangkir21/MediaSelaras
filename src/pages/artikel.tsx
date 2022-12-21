import React from "react";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { FiSearch } from "react-icons/fi";
import ArtikelDropdown from "@/components/Dashboard/ArtikelDropdown";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/NavbarFooter/Footer";
import {Animation} from "@/components/Animation"
export default function artikel() {
  return (
    <main>
      <Navbar />
      <div className="w-full min-h-screen bg-white">
        <section className="Artikel Hero ">
          <Animation className="flex flex-col bg-white px-5 sm:px-8 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl lg:m-auto"
          >
            <div className="relative mt-7 mb-3">
              <FiSearch className="sm:hidden visible absolute top-2 left-3 text-slate-300" />
              <input
                className="sm:hidden visible w-full pl-10 text-xs rounded-md p-2 outline font-light outline-1 outline-slate-300"
                type="text"
                placeholder="Search"
              />
              <h1 className="hidden sm:block font-semibold pt-5 text-xl lg:text-4xl">
                Selamat Datang di Halaman Artikel Media Selaras!
              </h1>
            </div>
            <Link href="/blog/ini-slug-artikel">
              <div className="sm:flex pt-10 pb-5 gap-10 cursor-pointer">
                <div className="sm:w-5/12 w-full h-[200px] sm:h-full m-auto  rounded-2xl overflow-hidden relative">
                  <NextImage
                    className="block sm:hidden"
                    objectFit="cover"
                    src="/img/artikel/hero.png"
                    width="100%"
                    height="100%"
                    layout="fill"
                    alt="medselaras artikel hero"
                  />
                  <NextImage
                    className="hidden sm:block"
                    objectFit="contain"
                    src="/img/artikel/hero.png"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt="medselaras artikel hero"
                  />
                </div>
                <div className="sm:w-7/12 hidden sm:flex sm:justify-between sm:flex-col lg:py-4">
                  <h2 className="text-base sm:text-xs md:text-base lg:text-xl font-extralight text-slate-500 pb-1">
                    Minggu, 14 September 2022
                  </h2>
                  <p className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-10">
                    What do you know about Skizofrenia ?
                  </p>
                  <p className="text-base sm:text-xs md:text-base lg:text-lg text-justify">
                    Siapa di sini yang sering denger tentang Skizofrenia? Eitss,
                    walaupun sering denger Medianers udah tau secara detail
                    belum nih tentang skizofrenia kalo belum mari merapat biar
                    jadi makin tau! Skizofrenia adalah gangguan psikis dengan
                    adanya pemisahan antara pikiran, emosi, dan perilaku dari
                    orang yang mengalaminya. Ditandai dengan penyimpangan
                    realitas, penarikan diri dari interaksi sosial, serta
                    disorganisasi persepsi, pikiran, dan kognitif....
                  </p>
                </div>
              </div>
            </Link>
            <hr className="sm:block hidden mt-6" />
          </Animation>
        </section>
        <section className="Artikel Feed">
          <Animation
            className="flex flex-col justify-between pb-4 px-5 sm:px-8 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl lg:m-auto pt-6"
          >
            <div className="flex justify-end sm:justify-between pb-4">
              <div className="hidden sm:block self-center text-xl lg:text-4xl font-semibold">
                Artikel Feed
              </div>
              <div className="flex justify-end text-xs">
                <ArtikelDropdown />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 md:gap-11 bg-white mt-3 sm:pt-4 lg:pt-6  sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:m-auto">
              <div className="flex sm:flex-col sm:justify-center mt-3 sm:mt-0 sm:p-4 sm:outline sm:outline-1 outline-slate-300 rounded-md">
                <div className="w-[85px] sm:w-full sm:h-[200px] relative rounded-2xl overflow-hidden">
                  <NextImage
                    className="sm:hidden"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt="artikel-medselaras"
                  />
                  <NextImage
                    className="hidden sm:block"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt="artikel-medselaras"
                  />
                </div>
                <div className="flex flex-col justify-between pl-3 sm:pl-0 sm:my-3 sm:gap-2">
                  <h1 className="text-xs font-semibold md:text-xl lg:text-2xl">
                    Hal yang Wajib Kamu Ketahui tentang Bipolar Disorder!
                  </h1>
                  <p className="text-[10px] font-extralight sm:order-first md:text-base lg:text-xl">
                    Minggu, 9 Oktober 2022
                  </p>
                  <p className="hidden sm:block text-gray-500 lg:text-lg">
                    Perkembangan teknologi sangat membantu kita dalam segala
                    aspek kehidupan. Termasuk mencari pekerjaan atau magang...
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col sm:justify-center mt-3 sm:mt-0 sm:p-4 sm:outline sm:outline-1 outline-slate-300 rounded-md">
                <div className="w-[85px] sm:w-full sm:h-[200px] relative rounded-2xl overflow-hidden">
                  <NextImage
                    className="sm:hidden"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt="artikel-medselaras"
                  />
                  <NextImage
                    className="hidden sm:block"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt="artikel-medselaras"
                  />
                </div>
                <div className="flex flex-col justify-between pl-3 sm:pl-0 sm:my-3 sm:gap-2">
                  <h1 className="text-xs font-semibold md:text-xl lg:text-2xl">
                    Hal yang Wajib Kamu Ketahui tentang Bipolar Disorder!
                  </h1>
                  <p className="text-[10px] font-extralight sm:order-first md:text-base lg:text-xl">
                    Minggu, 9 Oktober 2022
                  </p>
                  <p className="hidden sm:block text-gray-500 lg:text-lg">
                    Perkembangan teknologi sangat membantu kita dalam segala
                    aspek kehidupan. Termasuk mencari pekerjaan atau magang...
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col sm:justify-center mt-3 sm:mt-0 sm:p-4 sm:outline sm:outline-1 outline-slate-300 rounded-md">
                <div className="w-[85px] sm:w-full sm:h-[200px] relative rounded-2xl overflow-hidden">
                  <NextImage
                    className="sm:hidden"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt="artikel-medselaras"
                  />
                  <NextImage
                    className="hidden sm:block"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt="artikel-medselaras"
                  />
                </div>
                <div className="flex flex-col justify-between pl-3 sm:pl-0 sm:my-3 sm:gap-2">
                  <h1 className="text-xs font-semibold md:text-xl lg:text-2xl ">
                    Hal yang Wajib Kamu Ketahui tentang Bipolar Disorder!
                  </h1>
                  <p className="text-[10px] font-extralight sm:order-first md:text-base lg:text-xl">
                    Minggu, 9 Oktober 2022
                  </p>
                  <p className="hidden sm:block text-gray-500 lg:text-lg">
                    Perkembangan teknologi sangat membantu kita dalam segala
                    aspek kehidupan. Termasuk mencari pekerjaan atau magang...
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col sm:justify-center mt-3 sm:mt-0 sm:p-4 sm:outline sm:outline-1 outline-slate-300 rounded-md">
                <div className="w-[85px] sm:w-full sm:h-[200px] relative rounded-2xl overflow-hidden">
                  <NextImage
                    className="sm:hidden"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt="artikel-medselaras"
                  />
                  <NextImage
                    className="hidden sm:block"
                    src="/img/artikel/artikel1.svg"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt="artikel-medselaras"
                  />
                </div>
                <div className="flex flex-col justify-between pl-3 sm:pl-0 sm:my-3 sm:gap-2">
                  <h1 className="text-xs font-semibold md:text-xl lg:text-2xl">
                    Hal yang Wajib Kamu Ketahui tentang Bipolar Disorder!
                  </h1>
                  <p className="text-[10px] font-extralight sm:order-first md:text-base lg:text-xl">
                    Minggu, 9 Oktober 2022
                  </p>
                  <p className="hidden sm:block text-gray-500 lg:text-lg">
                    Perkembangan teknologi sangat membantu kita dalam segala
                    aspek kehidupan. Termasuk mencari pekerjaan atau magang...
                  </p>
                </div>
              </div>
            </div>
          </Animation>
        </section>
      </div>
      <Footer />
    </main>
  );
}
