import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/NavbarFooter/Footer";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Animation } from "@/components/Animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";
import { komunitas } from "@/lib/data/homepage";
import axios from "axios";

type Inputs = {
  nama: string;
  email: string;
  pesan: string;
  subjek: string;
};

type Blog = {
  image: string;
  link: string;
  title: string;
  date: string;
  description: string;
  day: string;
};

type Instagram = {
  image: string;
  link: string;
};

export default function LandingPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [instagrams, setInstagrams] = useState<Instagram[]>([]);
  useForm<Inputs>();

  const getBlog = async () => {
    try {
      const response = await axios.get("https://api.medselaras.com/api/blog");
      const data = response.data.data.data;
      const covers = data.map((artikel: any) => ({
        image: artikel.cover,
        link: "/blog/" + artikel.slug,
        title: artikel.title,
        date: new Date(artikel.date).toLocaleDateString(),
        description: artikel.description,
        day: artikel.day,
      }));
      setBlogs(covers);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getInstagram = async () => {
    try {
      const response = await axios.get("https://api.medselaras.com/api/instagram");
      const data = response.data.data.data;
      const covers = data.map((ig: any) => ({
        image: ig.imageUrl,
        link: ig.url,
      }));
      setInstagrams(covers);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
    }
  };

  const [spotifies, setSpotifies] = useState<any[]>([]);

  const getSpotify = async () => {
    try {
      const response = await axios.get("https://api.medselaras.com/api/spotify");
      setSpotifies(response.data.data.data);
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  };

  useEffect(() => {
    getBlog();
    getInstagram();
    getSpotify();
  }, []);

  return (
    <Layout>
      <main>
        <Navbar />
        <div className="w-full min-h-screen bg-white overflow-hidden">
          <section className="Landing Page">
            <Animation className="flex sm:flex-row flex-col m-auto lg:max-w-7xl lg:gap-14 p-7 lg:p-7">
              <div className="self-center">
                <h1 className="font-bold lg:text-5xl text-3xl lg:leading-snug">
                  Wadah pengedukasian konten kreatif terkait isu-isu sosial
                </h1>
                <p className="py-4 lg:text-2xl text-base">
                  Komunitas yang memberikan edukasi mengenai pendidikan, ekonomi,
                  environment, kesehatan serta pemberdayaan masyarakat
                </p>
                <Link href="/struktur-komunitas">
                  <div className="cursor-pointer inline-flex py-3 px-8 text-sm md:text-base mt-4 rounded-2xl text-white bg-[#E77E49]">
                    Kunjungi
                  </div>
                </Link>
              </div>
              <div className="flex lg:w-1/2 w-full mx-auto justify-center">
                <div className="w-[400px] self-center sm:w-[300px] md:w-[400px] lg:w-[620px]">
                  <NextImage
                    src="/img/landingpage/landingpage.png"
                    height={500}
                    width={800}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </Animation>
            <Animation className="lg:py-16 flex max-w-7xl flex-col m-auto lg:px-14 p-7">
              <h1 className="sm:text-center md:text-3xl text-xl w-3/4 sm:w-full pb-10 font-bold lg:pb-6">
                Komunitas yang telah berkolaborasi dengan Media Selaras
              </h1>
              <div className="grid sm:grid-cols-7 grid-cols-2 gap-6 text-center">
                {komunitas.map(({ src }, index) => (
                  <NextImage
                    key={index}
                    height={50}
                    width={100}
                    src={src}
                    alt={`Komunitas ${index + 1}`}
                  />
                ))}
              </div>
              <h3 className="text-center sm:text-base text-lg py-8 text-gray-400">
                dan 50+ lainnya
              </h3>
            </Animation>
          </section>
          <section className="Arsip Instagram">
            <Animation className="max-w-7xl m-auto p-7 relative">
              <div className="sm:mb-4 mb-2">
                <h1 className="font-bold lg:text-4xl text-xl">
                  Arsip Terakhir
                  <br /> Instagram
                </h1>
              </div>
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicMainBullets: 4,
                }}
                slidesPerView="auto"
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 1500 }}
                spaceBetween={10}
                breakpoints={{
                  280: { slidesPerView: 1 },
                  400: { slidesPerView: 2 },
                  600: { slidesPerView: 3 },
                  900: { slidesPerView: 4 },
                }}
              >
                {instagrams.map((instagram, index) => (
                  <SwiperSlide key={index}>
                    <Link href={instagram.link}>
                      <NextImage
                        src={instagram.image}
                        width={100}
                        height={100}
                        alt={`Instagram post ${index + 1}`}
                        layout="responsive"
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Animation>
          </section>
        </div>
        <Footer />
      </main>
    </Layout>
  );
}
