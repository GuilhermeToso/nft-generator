import React from 'react'
import { Body } from '../../Components/Body'
import { NonEditorStyle } from '../../Styles'
import { Header } from '../../Components/Header'
import { MainContainer} from '../../Components/Main'
import { HomeMainStyle } from '../../Styles'
import { CTAText, TitleText } from '../../Components/Texts'
import { ButtonHomeContainer, TitleHomeContainer } from './Home.styles'
import { Button } from '../../Components/Buttons'

const Home = () => {
  return (
    <Body
      Background={NonEditorStyle.Background}
      HeaderHeight={NonEditorStyle.HeaderHeight}
    >    
      <Header displayNav={true}></Header>
      <MainContainer
        GridTemplateRows={HomeMainStyle.GridTemplateRows}
        GridTemplateColumns={HomeMainStyle.GridTemplateColumns}
        GridTemplateAreas={HomeMainStyle.GridTemplateAreas}
      >
        <TitleHomeContainer
          GridArea={"title"}
        >
          <TitleText
            AlignText={"end"}
          >Welcome to NFT Gen</TitleText>
          <TitleText
            Width={HomeMainStyle.TitleWidth}
            PadTop = {HomeMainStyle.TitlePadTop}          
            AlignText={"start"}
          >Build your NFTs with our Neural Networks services </TitleText>
        </TitleHomeContainer>
      <ButtonHomeContainer
        GridArea={"button"}
      >
        <Button
          Width={HomeMainStyle.ButtonWidth}
          Height={HomeMainStyle.ButtonHeight}
          Color={HomeMainStyle.ButtonColor}
          MinWidth={HomeMainStyle.ButtonMinWidth}
        >
          <CTAText>Get Started</CTAText>
        </Button>
      </ButtonHomeContainer>
      </MainContainer>
    </Body>
  )
}

export default Home