import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Row } from 'reactstrap';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            setCharacters(response.data.results);
        })
        .catch(error => {
            console.log('No data was returned', error);
        });
    }, []);

    return (
        <div>
            <Row>
            {characters.map(character => {
                return <CharacterCard 
                    key={character.name}
                    name={character.name}
                    eye_color={character.eye_color}
                    gender={character.gender}
                    hair_color={character.hair_color}
                    homeworld={character.homeworld}
                    weight={character.mass}
                    height={character.height}
                />
            })}
            </Row>
        </div>
    );

}

export default CharacterList;