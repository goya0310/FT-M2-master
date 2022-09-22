import React from 'react'
import styled from 'styled-components'

// styled components

const AvatarStyled = styled.img`
    border-radius: 9999px;
    width: 48px;
    height: 48px;
`

export default function Avatar( {src} ) {
  return <AvatarStyled src={src} alt='avatar'/>
}
