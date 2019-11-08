import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response);
        })
    }, []);

    return (
        <div>
            test
        </div>
    );

}

export default CharacterList;