import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm bg-[#F2F0EF] px-5 py-2 text-black ${containerClass}`}>
      {leftIcon}
      <span className=' relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button