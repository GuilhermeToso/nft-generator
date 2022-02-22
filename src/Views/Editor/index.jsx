import React from "react";
import { Body } from "../../Components/Body";
import { EditorStyle } from "../../Styles";
import { Header } from "../../Components/Header";
const Editor = () => {
    return (
        <Body
            Background={EditorStyle.Background}
            HeaderHeight={EditorStyle.HeaderHeight}
        >
            <Header displayNav={true}></Header>
            <h1>This is the Editor</h1>
        </Body>
    )
}

export default Editor