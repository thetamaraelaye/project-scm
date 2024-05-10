
type ButtonType = {
    title: String,
    url: string,
    disabled: Boolean,
    button_icon: string,
    src: string
}


export function LightButton({title, url}: ButtonType) {
  return (
    <>
          <a href={url} className='disabled:px-36 disabled:py-3.5 disabled:bg-gray-400 disabled:border-sky-100 sm:w-full xs:w-full lg:w-80 lg:h-15 xl:w-96 xl:h-20 w-full px-4 py-4 bg-sky-500 rounded-3xl border border-sky-300 justify-center items-center gap-2 inline-flex text-white'>
          <button className="text-white text-sm font-medium leading-none">{title}</button>
         </a>
    </>
  )
}

export function PrimaryButton ({title, url}: ButtonType) {
  return (
    <>
       <a href={url} className='disabled:px-36 disabled:py-3.5 disabled:bg-gray-400 disabled:border-sky-100 sm:w-full xs:w-full lg:w-80 lg:h-15 xl:w-96 xl:h-20 px-4 py-4 bg-sky-900 rounded-3xl border border-sky-700 justify-center items-center gap-2 inline-flex'>
         <button className="text-sm font-medium leading-none">{title}</button>
       </a>
    </>
  )
}

export function OutlineLightButton ({title, url}: ButtonType) {
  return (
    <>
       <a href={url} className='diabled:bg-slate-500 w-full disabled:border-gray-400 disabled:border m:w-full xs:w-full lg:w-80 lg:h-15 xl:w-96 xl:h-20 px-4 py-3.5 bg-sky-50 rounded-3xl border border-sky-700 justify-center items-center gap-2 inline-flex'>
         <button className="w-full disbaled:text-gray-500  disabled:text-white text-sky-700 text-sm font-medium leading-none ">{title}</button>
       </a>
    </>
  )
}

export function LightButtonWithIcon ({title, url, src, button_icon}: ButtonType) {

  return (
      <>
        <a href={url} className='relative content-center' >
          <button className="w-[46%] px-4 py-3.5 bg-sky-500 rounded-3xl border border-sky-300 justify-center items-center gap-2 inline-flex text-sm text-white font-medium leading-none">{title}</button>
          <img className="absolute top-1/2 mr-4 transform -translate-y-1/2 left-4 cursor-pointer " src={src} alt={button_icon}/>
        </a>

    </>
  )
}

