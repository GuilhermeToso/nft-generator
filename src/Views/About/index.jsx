import React from "react";
import { Body } from "../../Components/Body";
import { NonEditorStyle } from "../../Styles";
import { Header } from "../../Components/Header";
const About = () => {
    return (
        <Body
            Background={NonEditorStyle.Background}
            HeaderHeight={NonEditorStyle.HeaderHeight}
        >
            <Header displayNav={true}></Header>
            <h1>About Page</h1>
        </Body>
    )
}

export default About