// Write your Character component here
import React from "react";
import styled from "styled-components";

function Character(props) {
    const { character } = props;

    return (
        <div>
            <ul>
                <li>{character.name}</li>
            </ul>
        </div>
    )
}

export default Character