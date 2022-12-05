// Write your Character component here
import React, {useEffect, useState} from "react";


function Character(props){

    return(
        <div className="character-container">
            <h2>{props.name}</h2>
        </div>
    )
}

  export default Character;