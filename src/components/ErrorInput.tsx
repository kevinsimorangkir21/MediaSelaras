import React from 'react'
import warningIcon from "public/img/login/warning_icon.svg"
import Image from 'next/image'
function ErrorInput() {
  return (
    <div className="flex w-full rounded-lg pt-4">
        <div className="my-auto w-4 h-4  xs:w-4 xs:h-4 md:h-5 md:w-5 lg:w-7 lg:h-7 relative flex ">
            <Image  alt="warning_icon" layout="fill" src={warningIcon}/>
        </div>
        <div className="md:ml-3 mx-2 sm:text-xs text-sm md:text-base my-auto lg:text-lg">Pertanyaan ini wajib diisi</div> 
    </div>
  )
}

export default ErrorInput
