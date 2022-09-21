import React from 'react'

//Creado con React Snipets extension poniendo rfc

export default function Temp({label, value}) {
  return (
    <div>
        <span>{label}</span>
        <span>{value}</span>
    </div>
  )
}
