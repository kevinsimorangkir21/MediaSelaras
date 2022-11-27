import Navbar from "components/NavbarFooter/Navbar";
import Footer from "components/NavbarFooter/Footer";
import Image from "next/image";
import penghargaan from "../public/img/about/penghargaan.png";
import bgKotak from "../public/img/about/bg-kotak.png";
import ornamen1 from "../public/img/about/ornamen1.png";
import ornamen2 from "../public/img/about/ornamen2.png";
import photoMedsel from "../public/img/about/photo-medsel.png";
import photoBerbagiCerita from "../public/img/about/photo-berbagi-cerita.png";
import photoBergerakSelaras from "../public/img/about/photo-bergerak-selaras.png";
import photoImpiSelaras from "../public/img/about/photo-impi-selaras.png";
import photoAwarding from "../public/img/about/photo-awarding.png";

export default function TentangMedsel(){
    return (
        <>
            <Navbar />
            <div className="bg-[#FAE1C7] relative overflow-hidden">
                <div className="absolute -top-8 -left-14 z-20 w-64">
                    <Image src={ornamen1} />
                </div>
                <div className="absolute -bottom-32 -right-36 z-20 w-64">
                    <Image src={ornamen2} />
                </div>
                <div className="absolute lg:flex">
                    <Image src={bgKotak} />   
                    <Image src={bgKotak} />   
                </div>
                <div className="relative z-40 lg:flex lg:py-12">
                    <div className="w-72 mx-auto pt-12 lg:w-[800px] lg:p-0 lg:mx-14">
                        <Image src={penghargaan} layout="responsive" />
                    </div>
                    <div className="text-center lg:my-auto lg:text-left lg:pr-10">
                        <p className="hidden text-sm lg:block xl:text-lg">Penghargaan</p>
                        <p className="px-20 text-2xl font-bold lg:px-0 lg:text-3xl xl:text-4xl">Media Selaras Berhasil dinobatkan sebagai komunitas terfavorit di Tingkat Nasional</p>
                        <p className="text-sm py-8 xl:text-lg">Pada acara indonesia youth potensial fest 2021</p>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-10">
                <p className="text-center px-20 text-3xl font-bold">Media Selaras</p>
                <p className="text-center px-16 text-xl font py-8">Media Selaras sebagai suatu Wadah pengedukasian konten kreatif terkait
                isu isu sosial (Pendidikan, Ekonomi, Environment, dan Kesehatan) serta pemberdayaan masyarakat yang
                lebih membutuhkan melalui
                penggalangan dana berupa uang
                dan barang.</p>
            </div>
            <div className="bg-white lg:flex lg:flex-row-reverse lg:pt-10">
                <div className="px-8 mx-auto text-center lg:w-1/2 pb-10 lg:mx-0 lg:p-0 lg:my-auto relative">
                    <Image src={photoMedsel} title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
                <div className="lg:w-1/2 px-8 md:px-16">
                    <div className="px-8 md:px-20 lg:px-0 pt-10">
                        <p className="text-center text-3xl font-bold lg:text-left">Visi Media Selaras</p>
                        <p className=" text-xl font py-8 lg:p-0">Menjadi wadah yang efektif, efisien,
                        dan sepadan dengan nilai-nilai
                        pancasila untuk meningkatkan rasa simpati generasi muda terhadap masyarakat Indonesia.</p>
                    </div>
                    <div className="px-8 md:px-20 pt-10 lg:p-0">
                        <p className="text-center px-20 text-3xl font-bold mb-8 lg:text-left lg:p-0 lg:mb-0 lg:pt-8">Misi Media Selaras</p>
                        <div className="flex py-1">
                            <p className="text-xl">1.</p>
                            <p className="text-xl  ml-2">Mewujudkan komunitas yang serasi dan
                            kolaboratif terhadap suatu pemecahan
                            permasalahan dalam kehidupan masyarakat.
                            </p>
                        </div>
                        <div className="flex py-1">
                            <p className="text-xl">2.</p>
                            <p className="text-xl ml-2">Memberikan edukasi kepada masyarakat
                            luas berupa konten kreatif terkait pendidikan,
                            ekonomi, dan kesehatan.
                            </p>
                        </div>
                        <div className="flex py-1">
                            <p className="text-xl">3.</p>
                            <p className="text-xl ml-2">Meningkatkan kesejahteraan masyarakat
                            dan UMKM.
                            </p>
                        </div>
                        <div className="flex py-1">
                            <p className="text-xl">4.</p>
                            <p className="text-xl ml-2">Mengembangkan minat, bakat dan prestasi
                            dengan memfasilitasi ruang diskusi untuk
                            menampung segala aspirasi dan memberikan
                            apresiasi yang sepadan kepada Generasi Z
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-10 px-6 md:px-20 lg:pt-16">
                <p className="text-center text-3xl font-bold">Intip Keseruan Media Selaras</p>
                <div className="mt-14 lg:flex">
                    <p className="text-center text-3xl font-bold mt-14 mb-8 lg:hidden">Awarding Night</p>
                    <div className="text-center relative w-96 mx-auto lg:w-1/2 lg:pr-12">
                        <Image src={photoAwarding} title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                    <div className="lg:w-1/2 lg:my-auto">
                        <p className="text-3xl font-bold mb-8 hidden lg:block">Awarding Night</p>
                        <p className="text-xl font py-8">Awarding night merupakan acara  bulanan yang diselenggarakan oleh media selaras dan digunakan sebagai apresiasi bagi para pengurus yang melakukan pekerjaannya dengan sangat baik</p>
                    </div>
                </div>
                <div className="mt-14 lg:flex lg:flex-row-reverse">
                    <p className="text-center text-3xl font-bold  mb-8 lg:hidden">Berbagi Cerita</p>
                    <div className="text-center relative w-96 mx-auto lg:w-1/2 lg:pl-12">
                        <Image src={photoBerbagiCerita} title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                    <div className="lg:w-1/2 lg:my-auto">
                        <p className="text-3xl font-bold mb-8 hidden lg:block">Berbagi Cerita</p>
                        <p className="text-xl font py-8 lg:p-0">Berbagi cerita merupakan program media selaras berkolaborasi dengan komunitas lain untuk berbagi cerita dan pengalaman yang dialami komunitas masing-masing yang digunakan sebagai refrensi agar sama-sama semakin berkembang</p>
                    </div>
                </div>
                <div className="mt-14 lg:flex">
                    <p className="text-center text-3xl font-bold mt-14 mb-8 lg:hidden">Bergerak Selaras</p>
                    <div className="text-center relative w-96 mx-auto lg:w-1/2 lg:pr-12">
                        <Image src={photoBergerakSelaras} title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                    <div className="lg:w-1/2 lg:my-auto">
                        <p className="text-3xl font-bold mb-8 hidden lg:block">Bergerak Selaras</p>
                        <p className="text-xl font py-8">Bergerak selaras merupakan acara bulanan media selaras yang digunakan untuk berbagi kepada sesama yang membutuhkan seperti panti asuhan, pedagang, tukang becak, dan kucing berupa sembako, makanan kucing maupun uang tunai</p>
                    </div>
                </div>
                <div className="mt-14 lg:flex lg:flex-row-reverse"> 
                    <p className="text-center text-3xl font-bold mt-14 mb-8 lg:hidden">Impi Selaras</p>
                    <div className="text-center relative w-96 mx-auto lg:w-1/2 lg:pl-12">
                        <Image src={photoImpiSelaras} title="" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                    <div className="lg:w-1/2 lg:my-auto">
                    <p className="text-3xl font-bold mb-8 hidden lg:block">Impi Selaras</p>
                        <p className="text-xl font py-8">Impi selaras merupakan program media selaras untuk berbagi ilmu pengetahuan yang sangat bermanfaat dan membangun  kepada sesama yang ingin belajar dan berkembang bersama-sama</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}