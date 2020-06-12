// Write your Character component here
import React, { useEffect } from "react";
import styled from "styled-components";
import jediIcon from "../images/jedi-solid.svg";

const CharacterCard = styled.div`
    background: white;
    border: 1px solid;
    height: ${props => props.cardHeight};
    margin: 2% auto;
    padding: 2.5% 0;
    width: 33%;
    font-family: "Distant Galaxy";
    @media (max-width: 800px) {
        padding: 2.5% 5%;
    }
    @media (max-width: 500px) {
        padding: 2.5% 15%;
    }

    img {
        width: 25%;
    }
`

const CharacterName = styled.h2`
    color: #990000;
    letter-spacing: 1.5px;
`

function Character(props) {
    const { character } = props;
    

    return (
        <CharacterCard>
            <CharacterName>{character.name}</CharacterName>
            <img src={jediIcon}></img>
        </CharacterCard>
    )
}

export default Character