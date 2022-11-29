// Write your Character component here
import React, {useEffect, useState} from "react";
import axios from "axios";

function Character(props){
    const [character, setCharacter] = useState(props);

    useEffect(()=> {
        axios.get("https://swapi.dev/api/people/")
            .then(res => {
                setCharacter(res);
            }).catch(err => console.error(err))
    }, [])
}

  export default Character;