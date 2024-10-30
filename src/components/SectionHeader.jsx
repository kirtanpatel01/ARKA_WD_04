import React from 'react'

function SectionHeader({ title, my="16",  className='' }) {
  return (
    <h1 className={`font-bold text-6xl tracking-widest text-center my-16 ${className} max-[425px]:text-4xl max-[425px]:my-8`}>
        {title}
      </h1>
  )
}

export default SectionHeader