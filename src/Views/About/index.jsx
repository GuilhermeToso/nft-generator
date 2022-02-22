import React from "react";
import { Body } from "../../Components/Body";
import { NonEditorStyle } from "../../Styles";

const About = () => {
    return (
        <Body
            Background={NonEditorStyle.Background}
            HeaderHeight={NonEditorStyle.HeaderHeight}
        >
            <h1>About Page</h1>
        </Body>
    )
}

export default About