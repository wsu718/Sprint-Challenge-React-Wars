import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Row, Col, Button } from 'reactstrap';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('https://swapi.co/api/people/');
    const [url, setUrl] = useState('https://swapi.co/api/people/')

    // const getNewChars = () => {
    //     console.log('clikced next!')
    //     console.log(next);
    //     useEffect(() => {
    //         axios.get(next)
    //         .then(response => {
    //             console.log('clikced next!')
    //         })
    //         .catch(error => {
    //             console.log('No data was returned', error);
    //         });
    //     }, []);
        
    
    // }

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setCharacters(response.data.results);
            setNext(response.data.next);
            setPrev(response.data.previous)
        })
        .catch(error => {
            console.log('No data was returned', error);
        });
    }, [url]);

    return (
        <div>
            <Row>
                <Col>
                <Button onClick={() => setUrl([prev]) }>Previous</Button>
                <Button onClick={() => setUrl(next) }>Next</Button>
                </Col>
            </Row>
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