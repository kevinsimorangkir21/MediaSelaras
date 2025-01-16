import React, { useState, Fragment, useRef } from "react";
import Image from "next/image";
import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import ErrorInput from "@/components/ErrorInput";
import { useCookies, Cookies } from "react-cookie";
import loginImage from "~/img/login/login-img.png";
import ErrorModal from "@/components/Modal/ErrorModal";
import { Dialog, Transition } from "@headlessui/react";
import { CgDanger } from "react-icons/cg";

type Data = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<Data>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const onSubmit: SubmitHandler<Data> = async (data: Object) => {
    const post = await axios
      .post("https://api.medselaras.com/api/login", data, {
        headers: {
          "Content-type": "application/json",
          accept: "application/json",
        },
      })
      .then(function (response) {
        if (response.status == 200 || response.status == 201) {
          const temp = response.data.data.data.access_token.split("|");
          setCookie("token", temp[1], { path: "/" });
          Router.push("/dashboard");
        }
      })
      .catch((e) => {
        setErrMsg("Email atau password salah");
        setOpen(true);
      });
  };

  return (
    <section className="Login Page">
      <div className="flex bg-white min-h-screen justify-center">
        <div className="flex  lg:w-3/5 justify-center">
          <div className="self-center w-full lg:px-32 max-w-xs sm:max-w-lg lg:max-w-7xl">
            <div className="flex flex-col text-start">
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">Halaman Login</h1>
              <h2 className="text-lg sm:text-2xl pt-4">
                Selamat datang di Halaman Login Media Selaras
              </h2>
            </div>
            {/* Form Section */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col pt-9">
                <label className="pb-2" htmlFor="username">
                  Username
                </label>
                <input
                  {...register("email", { required: true })}
                  className="py-3 px-4 rounded-md outline-gray-400 outline outline-1"
                  id="username"
                  type="email"
                  placeholder="Masukkan Username"
                />
                {errors.email && <ErrorInput />}
                <label className="pt-5 pb-2" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="py-3 px-4 rounded-md outline-gray-400 outline outline-1"
                  id="password"
                  type="password"
                  placeholder="Masukkan Password"
                />
                {errors.password && <ErrorInput />}
                <button
                  type="submit"
                  className="sm:p-4 p-3 bg-[#E77E49] mt-10 rounded-3xl text-white"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-2/5 bg-[#FFECB7] ">
          <div className="self-center ">
            <Image
              src={loginImage}
              alt="Login Image"
              layout="intrinsic"
              width={500} // Set a fixed width in pixels
              height={400} // Set a fixed height in pixels
            />
            <p className="text-black font-semibold px-9 text-justify">
              “Media Selaras sebagai suatu Wadah pengedukasian konten kreatif
              terkait isu isu sosial (Pendidikan, Ekonomi, Environment, dan
              Kesehatan) serta pemberdayaan masyarakat yang lebih membutuhkan
              melalui penggalangan dana berupa uang dan barang.”
            </p>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CgDanger
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          <p className="h-full py-auto">{errMsg}</p>
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setOpen(false);
                      }}
                      ref={cancelButtonRef}
                    >
                      Coba lagi
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}
