import React from 'react';
import { Card, CardImg, CardText, CardBody, Button, CardHeader, Col } from 'reactstrap';

const CharacterCard = (props) => {
    return (
        <Col lg={4}>
        <div className="card" key={props.id}>
            <Card>
                <CardImg top width="100%" src="http://www.facetheforce.today/random/400" alt="Starwars image" />
                <CardHeader><span className="wanted">Wanted:</span> {props.name}</CardHeader>
                <CardBody>
                    <CardText><span className="bold">Height:</span>{props.height} </CardText>
                    <CardText><span className="bold">Weight: </span>{props.weight}</CardText>
                    <CardText><span className="bold">Eye color: </span>{props.eye_color}</CardText>
                    <CardText><span className="bold">Hair color:</span> {props.hair_color}</CardText>

                    <Button href={props.homeworld}>View Home World</Button>
                </CardBody> 
            </Card>
            
        </div>
        </Col>
    )
};

export default CharacterCard;