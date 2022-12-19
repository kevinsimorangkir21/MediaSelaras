import React from "react";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import {
  founder,
  executive,
  staff_media_selaras,
} from "@/lib/data/stuktur-komunitas";

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
              priority
            />
          </div>
          <div className="m-auto px-7 overflow-hidden">
            <div className="font-bold text-3xl text-center pt-16 pb-4 relative">
              Founder
              <div className="absolute w-10 top-9 right-9 -z-10">
                <NextImage
                  src="/img/komunitas/asset1.png"
                  width="80%"
                  height="100%"
                  alt=""
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="flex mx-w-7xl"
                autoplay={{ delay: 1500 }}
                centeredSlides={true}
                spaceBetween={15}
                initialSlide={1}
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
                  600: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                  },
                  // 900: {
                  //   slidesPerView: 4,
                  // },
                }}
              >
                {founder.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index} className="flex flex-col">
                    <NextImage
                      src={src}
                      height="90%"
                      width="80%"
                      alt={alt}
                      layout="responsive"
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="overflow-hidden p-7">
            <div className="font-bold text-3xl text-center pt-8 pb-4 relative">
              Board of Executive
              <div className="absolute w-14 bottom-3 -z-10">
                <NextImage
                  src="/img/komunitas/asset2.png"
                  width="75%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="flex mx-w-7xl"
                autoplay={{ delay: 1500 }}
                centeredSlides={true}
                initialSlide={0}
                loop={true}
                slidesPerView="auto" 
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 2,
         
                  },
                }}
              >
                {executive.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center mx-auto ">
                      <div className="w-56 h-64  overflow-hidden relative ">
                        <NextImage
                          layout="fill"
                          src={src}
                          height="100%"
                          width="100%"
                          alt={alt}
                        />
                      </div>
                      <div className="w-56">
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="overflow-hidden px-6">
            <div className="font-bold text-3xl text-center pt-10 relative max-w-xs mx-auto">
              Staff Media Selaras 2022
              <div className="w-14 absolute -right-2 bottom-12 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            {staff_media_selaras.map(
              ({ title, ketua, staff }: any, i: number) => (
                <div key={i}>
                  <p className="font-bold text-lg pt-6">{title}</p>
                  <div>
                    <div
                      className={
                        "pt-6 pb-4 " +
                        (i <= 2 && i >= 0
                          ? "flex justify-center"
                          : i >= 3
                          ? "grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7"
                          : "")
                      }
                    >
                      {ketua.map(
                        ({ src, nama, jabatan, alt }: any, j: number) => (
                          <div
                            key={j}
                            className={
                              i < 3
                                ? ""
                                : i > 3 && j == 2
                                ? "col-start-2 col-end-3"
                                : "col-span-2"
                            }
                          >
                            <div className="w-40 h-40 overflow-hidden relative ">
                              <NextImage
                                layout="fill"
                                src={src}
                                height="100%"
                                width="100%"
                                alt={alt}
                              />
                            </div>
                            <div className="w-40">
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
                        // 400: {
                        //   slidesPerView: 3,
                        // },
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
                          <SwiperSlide key={index}>
                            <div className="w-full flex flex-col items-center mx-auto ">
                              <div className="w-[156px] h-[156px] overflow-hidden relative ">
                                <NextImage
                                  layout="responsive"
                                  src={src}
                                  height="100%"
                                  width="100%"
                                  alt={alt}
                                />
                              </div>
                              <div className="w-40">
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
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default strukturKomunitas;
