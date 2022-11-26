import Image from 'next/image'
import sampleImage from '../../public/img/login/login-img.png'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import { useQuill } from 'react-quilljs'
import 'react-quill/dist/quill.snow.css'

export default function BlogDetail() {
    const { quill, quillRef } = useQuill();
    const html = "<p>Siapa di sini yang sering denger tentang Skizofrenia? Eitss, walaupun sering denger Medianers udah tau secara detail belum nih tentang skizofrenia kalo belum mari merapat biar jadi makin tau!</p><p><br></p><p>Skizofrenia adalah gangguan psikis dengan adanya pemisahan antara pikiran, emosi, dan perilaku dari orang yang mengalaminya. Ditandai dengan penyimpangan realitas, penarikan diri dari interaksi sosial, serta disorganisasi  persepsi, pikiran, dan kognitif.</p><p><br></p><p>Apa sih penyebabnya?</p><p><br></p><p>1. Keturunan</p><p><br></p><p>Ini dibuktikan dengan penelitian tentang keluarga-keluarga penderita Skizofrenia kemungkinan besar salah satu dari anaknya akan mengalami juga.</p><p><br></p><p>2. Endokrin</p><p><br></p><p>Skizofrenia mungkin disebabkan oleh suatu gangguan hormon. Hal ini didukung karena tingginya angka kejadian Skizofrenia pada remaja dalam masa pubertas atau wanita hamil.</p><p><br></p><p>3. Susunan syaraf pusat</p><p><br></p><p>Skizofrenia juga dapat disebabkan karena kelainan susuanan kontak otak.</p><p><br></p><p>Gejala penderita Skizofrenia:</p><ol><li>Delusi</li><li>Halusinasi</li><li>Gelisah</li><li>Tidak responsif</li></ol>"

    function createMarkup(){
        return {
            __html: html
        }
    }

    
    return (
        <div className="bg-white w-screen max-w-full">
            <div className='flex justify-center px-8 pt-8 md:px-0'>
                <div className='relative h-[240px] w-[400px] md:w-full md:h-[500px]'>
                    <Image className='rounded-xl md:rounded-none md:brightness-50' src={sampleImage} layout="fill" objectFit="cover" />
                </div>
                {/* <Image className='rounded-lg' src={sampleImage} height="256px" objectFit="cover" /> */}
            </div>
            <div className='px-8 py-12 md:px-20'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold'> What do you know about Skizofrenia?</h1>
                    <p className='mt-6 text-slate-400'>Minggu,14 September 2022</p>
                    <p className='text-slate-400'>Creator: annonymous</p>
                </div>
                <div className='pt-10'>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                </div>
                <div className='pt-12'>
                    <div className='flex justify-between border-b-2 pb-4 border-slate-300'>
                        <p className='text-xl font-semibold lg:text-3xl'>Komentar</p>
                        <div className='flex gap-2'>
                            <p className='text-xl text-slate-400'>Bagikan</p>
                            <AiOutlineWhatsApp className='self-center mt-1 text-xl' />
                            <BsFacebook className='self-center mt-1 text-xl' />
                            <AiOutlineInstagram className='self-center mt-1 text-xl' />
                            <AiFillTwitterCircle className='self-center mt-1 text-xl' />
                        </div>
                    </div>
                    <div>
                        <div className='flex mt-4'>
                            <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                            <div>
                                <p className='text-xl font-bold'>Annonymous</p>
                                <p className='text-slate-400'>two hours ago</p>
                                <p>Wahh menarik bgt nihh infonya</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                            <div>
                                <p className='text-xl font-bold'>Annonymous</p>
                                <p className='text-slate-400'>two hours ago</p>
                                <p>Wahh menarik bgt nihh infonya</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                            <div>
                                <p className='text-xl font-bold'>Annonymous</p>
                                <p className='text-slate-400'>two hours ago</p>
                                <p>Wahh menarik bgt nihh infonya</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                            <div>
                                <p className='text-xl font-bold'>Annonymous</p>
                                <p className='text-slate-400'>two hours ago</p>
                                <p>Wahh menarik bgt nihh infonya</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='pt-12 hidden lg:block'>
                    <p className='text-xl font-semibold pb-8 lg:text-3xl'>Artikel terbaru</p>
                    <div className='px-16 grid grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-8	'>
                        <div className='w-80'>
                            <div className='w-80 h-48 relative'>
                                <Image src={sampleImage} layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <p className='text-slate-400 pt-2'>Minggu, 9 Oktober 2022</p>
                                <p className='pt-2 font-semibold text-2xl'>UTBK? Ada yang Baru Nih</p>
                                <p>Ujian seleksi masuk perguruan tinggi negeri telah mengalami banyak perubahan sejak pertama kali dilaksanakan terutama pada jalur SBMPT melalui UTBK...</p>
                            </div>
                        </div>
                        <div className='w-80'>
                            <div className='w-80 h-48 relative'>
                                <Image src={sampleImage} layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <p className='text-slate-400 pt-2'>Minggu, 9 Oktober 2022</p>
                                <p className='pt-2 font-semibold text-2xl'>UTBK? Ada yang Baru Nih</p>
                                <p>Ujian seleksi masuk perguruan tinggi negeri telah mengalami banyak perubahan sejak pertama kali dilaksanakan terutama pada jalur SBMPT melalui UTBK...</p>
                            </div>
                        </div>
                        <div className='w-80'>
                            <div className='w-80 h-48 relative'>
                                <Image src={sampleImage} layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <p className='text-slate-400 pt-2'>Minggu, 9 Oktober 2022</p>
                                <p className='pt-2 font-semibold text-2xl'>UTBK? Ada yang Baru Nih</p>
                                <p>Ujian seleksi masuk perguruan tinggi negeri telah mengalami banyak perubahan sejak pertama kali dilaksanakan terutama pada jalur SBMPT melalui UTBK...</p>
                            </div>
                        </div>
                        <div className='w-80'>
                            <div className='w-80 h-48 relative'>
                                <Image src={sampleImage} layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <p className='text-slate-400 pt-2'>Minggu, 9 Oktober 2022</p>
                                <p className='pt-2 font-semibold text-2xl'>UTBK? Ada yang Baru Nih</p>
                                <p>Ujian seleksi masuk perguruan tinggi negeri telah mengalami banyak perubahan sejak pertama kali dilaksanakan terutama pada jalur SBMPT melalui UTBK...</p>
                            </div>
                        </div>
                        <div className='w-80'>
                            <div className='w-80 h-48 relative'>
                                <Image src={sampleImage} layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <p className='text-slate-400 pt-2'>Minggu, 9 Oktober 2022</p>
                                <p className='pt-2 font-semibold text-2xl'>UTBK? Ada yang Baru Nih</p>
                                <p>Ujian seleksi masuk perguruan tinggi negeri telah mengalami banyak perubahan sejak pertama kali dilaksanakan terutama pada jalur SBMPT melalui UTBK...</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}