import React from 'react'

type HeaderType={
    text : string
    children ?: React.ReactNode
}

const Header = ({ text, children }: HeaderType) => {
  return (
    <div className="bg-white px-4 py-4 rounded-[8px]">
      <div className=" flex justify-between items-center gap-[8px]">
        <p className="text-[#011E2D] text-lg font-semibold leading-6">{text}</p>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Header;