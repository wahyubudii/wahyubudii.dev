import React from 'react'

type ButtonProps = {
    children: any,
    className?: string,
    onClick?: any
}

export default function Button({children, className, onClick}: ButtonProps) {
  return (
    <button className={`p-2 rounded-md ring-gray-300 ${className}`} onClick={onClick}>{children}</button>
  )
}
