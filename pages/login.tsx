import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios'
import ErrorInput from './sandbox/ErrorInput';
import {useCookies, Cookies} from 'react-cookie'
import loginImage from '../public/img/login/login-img.png'

type Data = {
  email:string;
  password:string;
}

export default function Login() {
  const methods = useForm<Data>({
    defaultValues:{
      email: '',
      password:''
    }
  })

  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const {register, handleSubmit, formState:{errors}} = useForm<Data>()
  
  const onSubmit: SubmitHandler<Data> = async (data: Object) =>{
    const post = await axios.post('https://api.medselaras.com/api/login', data, {
      headers:{
        "Content-type":"application/json",
        "accept" : "application/json",
      },
      
    })
    .then(function (response){
      if(response.status == 200 || response.status == 201){
        const temp = response.data.data.data.access_token.split("|")
        setCookie('token', temp[1], { path: '/' })
        Router.push("/dashboard")
      }
    })
    .catch((e) => {
      console.log(e)
      })
  }

  return (
    <section className='Login Page'>
      <div className='bg-white'>
        <div className='w-full h-screen flex max-w-7xl lg:mx-auto '>
          <div className='flex lg:basis-3/5 justify-center'>
            <div className='self-center w-full px-32'>
              <div className='flex flex-col text-start'>
                <h1 className='text-5xl font-bold'>Halaman Login</h1>
                <h2 className='text-2xl pt-4'>Selamat datang di Halaman Login Media Selaras</h2>
              </div>
              {/* Form Section */}
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col pt-9'>
                  <label className='pb-2' htmlFor="username">Username</label>
                  <input {...register("email", {required: true})} className='py-3 px-4 rounded-md outline-gray-400 outline outline-1' id="username" type="text" placeholder='Masukkan Username'/>
                  {errors.email && <ErrorInput/>}
                  <label className='pt-5 pb-2' htmlFor="password">Password</label>
                  <input {...register("password", {required: true})} className='py-3 px-4 rounded-md outline-gray-400 outline outline-1' id="password" type="password" placeholder='Masukkan Password'/>
                  {errors.password && <ErrorInput/>}
                  <button type="submit" className='p-4 bg-[#E77E49] mt-10 rounded-3xl text-white'>Masuk</button>
              </div>
              </form>
            </div>
          </div>
          <div className='hidden lg:flex basis-2/5 bg-[#FFECB7] '>
            <div className='self-center '>
              <Image src={loginImage} alt="/" layout="responsive" objectFit="contain" width='100%' height="80%"/>
              <p className='text-black font-semibold px-9 text-justify'>
                “Media Selaras sebagai suatu Wadah pengedukasian konten kreatif terkait
                isu isu sosial (Pendidikan, Ekonomi, Environment, dan Kesehatan) serta pemberdayaan masyarakat yang lebih membutuhkan melalui penggalangan dana berupa uang dan barang.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}