// Write your Character component here
import React from "react";
import styled from "styled-components";


function Character(props){

    const StyledContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: #443e3e;
        padding: 5px;
        background: rgba(194, 178, 128, 0.6);
        text-align: center;
    `;

    const StyledCharacter = styled.h2`
        border-bottom: 5px solid #443e3e;
    `;

    return(
        <StyledContainer className="character-container">
            <StyledCharacter>{props.name}</StyledCharacter>
        </StyledContainer>
    )
}

  export default Character;