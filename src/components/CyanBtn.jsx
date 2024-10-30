import React from 'react'

function CyanBtn({ href, text, spanText, shadowColor = "", className = "", ...props }) {
  return (
    <a
      href={href}
      {...props}
      className={`border border-zinc-800 text-gray-400 hover:text-white  hover:shadow hover:shadow-cyan-500 rounded-full py-2 px-6 ${className}`}
    >
      {text} <span className={`text-${shadowColor}`}>{spanText}</span>
    </a>
  )
}

export default CyanBtn