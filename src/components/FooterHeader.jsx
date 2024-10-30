import React from 'react'

function FooterHeader({ title, className='' }) {
  return (
    <h2 className={`font-semibold text-xl mb-4 ${className}`}>{title}</h2>
  )
}

export default FooterHeader