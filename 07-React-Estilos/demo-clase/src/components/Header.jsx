import React, { Children } from 'react'

export default function Header({children}) {
  return (
    // para poner dentro de header
    <header>{children}</header>
  )
}
