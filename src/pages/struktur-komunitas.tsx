import React from "react";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Footer from "@/components/NavbarFooter/Footer";
import "swiper/css/pagination";
import {
  founder,
  executive,
  staff_media_selaras,
} from "@/lib/data/stuktur-komunitas";
import { Animation } from "@/components/Animation";

function strukturKomunitas() {
  return (
    <Layout>
      <main>
        <Navbar />
        <section>
          <Animation className="min-h-screen flex justify-center relative">
            <div className="text-center self-center z-50">
              <h1 className="font-semibold text-white text-4xl max-w-sm md:max-w-5xl lg:text-6xl px-6 leading-[48px]">
                Struktur Komunitas Batch 3
              </h1>
              <p className="font-semibold text-white lg:text-5xl lg:pt-12 text-3xl pt-10">
                Media Selaras 2022
              </p>
            </div>
            <NextImage
              src="/img/komunitas/komunitas.png"
              width={100}
              height={100}
              layout="fill"
              style={{ objectFit: "cover" }}
              alt="komunitas"
              priority
              className="md:hidden"
            />
            <NextImage
              src="/img/komunitas/komunitas1.png"
              width={100}
              height={100}
              layout="fill"
              style={{ objectFit: "cover" }}
              alt="komunitas"
              priority
            />
          </Animation>
          <Animation className="m-auto px-7 overflow-hidden">
            <div className="font-bold w-fit mx-auto text-3xl md:text-4xl text-center pt-16 pb-4 lg:py-20 relative">
              Founder
              <div className="absolute w-10 h-10 md:w-16 md:h-16 md:top-5 md:-right-10 top-9 -right-6 -z-10">
                <NextImage
                  src="/img/komunitas/asset1.png"
                  width={80}
                  height={100}
                  alt=""
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="flex max-w-7xl"
                autoplay={{ delay: 1500 }}
                centeredSlides={true}
                initialSlide={1}
                spaceBetween={15}
                loop={true}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 40,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {founder.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index} className="flex flex-col ">
                    <div className="max-w-sm">
                      <NextImage
                        src={src}
                        height={90}
                        width={80}
                        alt={alt}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                      <p className="text-base">{jabatan}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Animation>
          <Animation className="overflow-hidden p-7">
            <div className="w-fit mx-auto font-bold text-3xl md:text-4xl lg:pb-8 text-center pt-8 pb-4 relative">
              Board of Executive
              <div className="absolute w-14 -left-7 bottom-3 -z-10 ">
                <NextImage
                  src="/img/komunitas/asset2.png"
                  width={75}
                  height={100}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="executive flex mx-w-7xl md:hidden"
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {executive.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-full max-w-[300px]">
                        <NextImage
                          layout="responsive"
                          src={src}
                          height={100}
                          width={90}
                          alt={alt}
                        />
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="justify-center gap-x-4 hidden md:flex">
                {executive.map(({ src, nama, jabatan, alt }, index) => (
                  <div className="w-full h-full max-w-[300px]" key={index}>
                    <NextImage
                      layout="responsive"
                      src={src}
                      height={100}
                      width={90}
                      alt={alt}
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
          <Animation className="overflow-hidden px-6 md:hidden">
            <div className="font-bold text-3xl md:text-4xl text-center pt-10  relative max-w-xs mx-auto">
              Staff Media Selaras 2022
              <div className="w-14 absolute -right-2 bottom-12 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            {staff_media_selaras.map(
              ({ title, ketua, staff }: any, i: number) => (
                <div key={i}>
                  <p className="font-bold text-lg pt-6">{title}</p>
                  <div
                    className={
                      "pt-6 pb-4 " +
                      (i <= 2
                        ? "grid grid-cols-4 sm:grid-cols-6"
                        : i >= 3
                        ? "grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7 sm:grid-cols-6 sm:gap-x-10"
                        : "")
                    }
                  >
                    {ketua.map(
                      ({ src, nama, jabatan, alt }: any, j: number) => (
                        <div
                          key={j}
                          className={
                            i <= 2
                              ? "w-full h-full sm:col-start-3 sm:col-end-5 col-start-2 col-end-4 px-1 "
                              : i > 3 && j == 2
                              ? "col-start-2 col-end-4 w-full sm:col-start-3 sm:col-end-5"
                              : i > 2 && !(j % 2)
                              ? "col-span-2 sm:col-start-2 sm:col-end-4"
                              : "col-span-2 w-full "
                          }
                        >
                          <div className="sm:min-w-[200px]">
                            <NextImage
                              layout="responsive"
                              src={src}
                              height={100}
                              width={100}
                              alt={alt}
                            />
                          </div>
                          <div className="w-full mx-auto">
                            <h1 className="font-bold text-base pt-3 pb-2">
                              {nama}
                            </h1>
                            <p className="text-sm">{jabatan}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <Swiper
                    modules={[Autoplay]}
                    className="flex mx-w-7xl"
                    autoplay={{ delay: 1500 }}
                    spaceBetween={20}
                    initialSlide={0}
                    slidesPerView="auto"
                    loop={true}
                    breakpoints={{
                      280: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 3,
                      },
                      // 600: {
                      //   slidesPerView: 3,
                      // },
                      // 900: {
                      //   slidesPerView: 4,
                      // },
                    }}
                  >
                    {staff.map(
                      ({ src, nama, jabatan, alt }: any, index: number) => (
                        <SwiperSlide key={index} className="">
                          <div className="w-full flex flex-col items-center mx-auto ">
                            <div className="w-full h-full ">
                              <NextImage
                                layout="responsive"
                                src={src}
                                height={100}
                                width={100}
                                alt={alt}
                              />
                            </div>
                            <div className="w-full">
                              <h1 className="font-bold text-base pt-6 pb-2">
                                {nama}
                              </h1>
                              <p className="text-sm">{jabatan}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
              )
            )}
          </Animation>
          <Animation className="hidden md:flex md:flex-col md:gap-y-6 overflow-hidden lg:max-w-7xl px-6 md:px-6  mx-auto relative">
            <div className="font-bold text-3xl text-center pt-10 lg:pt-13 lg:pb-10 relative w-fit mx-auto">
              Staff Media Selaras 2022
              <div className="w-16 absolute -right-10 top-0 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            {staff_media_selaras.map(
              ({ title, ketua, staff }: any, i: number) => (
                <Animation className="pb-16" key={i}>
                  <p className="font-bold text-2xl pb-6">{title}</p>
                  <div
                    className={
                      "pt-6 pb-4 flex gap-8 flex-wrap justify-center mx-auto " +
                      (i >= 3 && i <= 5 ? "flex-col max-w-5xl" : "lg:max-w-3xl")
                    }
                  >
                    <div className="flex max-w-6xl gap-x-8 justify-center">
                      {ketua.map(
                        ({ src, nama, jabatan, alt }: any, j: number) => (
                          <div key={j} className={i == 5 ? "max-w-xl" : ""}>
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                              <NextImage
                                layout="fill"
                                src={src}
                                height={100}
                                width={100}
                                alt={alt}
                              />
                            </div>
                            <div className="w-full mx-auto">
                              <h1 className="font-bold text-base pt-3 pb-2">
                                {nama}
                              </h1>
                              <p className="text-sm">{jabatan}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    {staff.map(
                      ({ src, nama, jabatan, alt }: any, j: number) => (
                        <div
                          key={j}
                          className={i >= 3 && i <= 5 ? "hidden" : ""}
                        >
                          <div className="relative w-48 h-48 lg:w-56 lg:h-56 ">
                            <NextImage
                              layout="fill"
                              src={src}
                              height={100}
                              width={100}
                              alt={alt}
                            />
                          </div>
                          <div className="w-full">
                            <h1 className="font-bold text-base pt-3 pb-2">
                              {nama}
                            </h1>
                            <p className="text-sm">{jabatan}</p>
                          </div>
                        </div>
                      )
                    )}
                    <div
                      className={
                        i >= 3 && i <= 5
                          ? "flex flex-row flex-wrap gap-8 justify-center"
                          : "hidden"
                      }
                    >
                      {staff.map(
                        ({ src, nama, jabatan, alt }: any, j: number) => (
                          <div
                            className={
                              i == 0 && j == 2
                                ? "col-start-4 col-end-6"
                                : "col-span-2"
                            }
                            key={j}
                          >
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56 ">
                              <NextImage
                                layout="fill"
                                src={src}
                                height={100}
                                width={100}
                                alt={alt}
                              />
                            </div>
                            <div className="w-full">
                              <h1 className="font-bold text-base pt-3 pb-2">
                                {nama}
                              </h1>
                              <p className="text-sm">{jabatan}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Animation>
              )
            )}
            {/* asset HCF */}
            <div className="w-16 h-16 absolute top-96 right-10 hidden lg:block">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="w-16 h-16 absolute top-[500px] left-10 hidden lg:block">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset WebDev*/}
            <div className="hidden lg:block w-16 h-16 absolute top-[1100px] left-28">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[1575px] left-16">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[890px] right-20">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset FA*/}
            <div className="hidden lg:block w-16 h-16 absolute top-[2300px] left-0">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>

            <div className="hidden lg:block w-16 h-16 absolute top-[1800px] right-10">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[2375px] right-96">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* {asset CM} */}
            <div className="hidden lg:block w-16 h-16 absolute top-[3450px] left-44">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[3350px] right-28">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset SA */}
            <div className="hidden lg:block w-16 h-16 absolute top-[4400px] right-0">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset DM&MC */}
            <div className="hidden lg:block w-16 h-16 absolute top-[5300px] right-0">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[4900px] left-16">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset R&A */}
            <div className="hidden lg:block w-16 h-16 absolute top-[5950px] right-16">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[6400px] left-16">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[6800px] right-0">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            {/* asset C&IM */}
            <div className="hidden lg:block w-16 h-16 absolute bottom-28 left-16">
              <NextImage
                src="/img/komunitas/star2.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute top-[7000px] left-16">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="hidden lg:block w-16 h-16 absolute bottom-10 right-0">
              <NextImage
                src="/img/komunitas/star1.svg"
                width={100}
                height={100}
                layout="responsive"
                alt=""
              />
            </div>
          </Animation>
        </section>
        <Footer />
      </main>
    </Layout>
  );
}

export default strukturKomunitas;
