import { PersonProps } from "../types/PersonProps";
import {Card} from 'react-bootstrap'

const Details = ({person}: PersonProps) => {
    return (
        (typeof person === "undefined") ? 
           null :
           <Card>
               <Card.Img variant="top" src={person?.avatar} />
               <Card.Body>
                   <Card.Title>{person?.name}</Card.Title>
                   <Card.Text>City: {person?.details.city}</Card.Text>
                   <Card.Text>Company: {person?.details.company}</Card.Text>
                   <Card.Text>Position: {person?.details.position}</Card.Text>
               </Card.Body>
           </Card>
           /*<div className="details">
               <img src={person?.avatar} alt="Аватар"></img>
               <h3>{person?.name}</h3>
               <p></p>
               <p>Company: {person?.details.company}</p>
               <p>Position: {person?.details.position}</p>
           </div>*/
    )
}

export default Details;