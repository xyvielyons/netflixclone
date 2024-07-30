import React from 'react'
interface InputProps {
  id:string;
  onChange:any;
  value:string;
  label:string;
  type:string;
}
function Inputcomponent({id,onChange,value,label,type}:InputProps) {
  return (
    <div className="relative">
        <input 
        value={value}
        id={id}
        type={type}
        onChange={onChange}
          className='
          block
          rounded-md
          px-6
          pt-6
          w-full
          text-md
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          text-white
        '
      placeholder=""
      />
      <label
      className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
      htmlFor={id}
      >{label}
      </label>

    </div>
    


  )
}
export default Inputcomponent