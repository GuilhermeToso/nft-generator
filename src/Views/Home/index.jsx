import React from 'react'
import { Body } from '../../Components/Body'
import { NonEditorStyle } from '../../Styles'

const Home = () => {
  return (
    <Body
      Background={NonEditorStyle.Background}
      HeaderHeight={NonEditorStyle.HeaderHeight}
    >
        <h1>Hello</h1>
    </Body>
  )
}

export default Home