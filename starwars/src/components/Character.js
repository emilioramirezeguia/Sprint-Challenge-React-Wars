// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
    background: white;
    border: 1px solid;
    margin: auto;
    padding: 2.5% 0;
    width: 33%;
    font-family: "Distant Galaxy";
`

function Character(props) {
    const { character } = props;

    return (
        <CharacterCard>{character.name}</CharacterCard>
    )
}

export default Character