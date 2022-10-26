import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"
export default function Medcast({setLinkMedcast, linkMedcast} : any) {
  return (
    <div className='px-24'>
      <div className="self-center text-start flex flex-col ">
        <label htmlFor="link" className='pb-2'>Masukkan link Medcast</label>
        <div className='flex flex-row relative overflow-hidden'>
        <input type="text" id="link" className='rounded-md outline-1 border border-slate-300 text-lg p-2 grow-[2]' onChange={(event) => setLinkMedcast({link : event.target.value})} value={linkMedcast.link}/>
        <button className='absolute right-0 rounded-full p-3 cursor-pointer'><AiOutlineCloudUpload className='text-xl '/></button>
        </div>
      </div>
      <div className="pt-4">
        <table className='table-auto w-full'>
          <thead>
            <tr className="border">
              <th>Link Medcast</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>

              </td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
