import {ListGroup} from 'react-bootstrap'

type ListProps = {
    elements?: {id: number, name:string}[],
    onSelect: (id: number) => void,
    lastSelected: number
}

const List = (props: ListProps) => {
    return (
        <ListGroup as="ul">
          {props.elements?.map((elem) => 
          <ListGroup.Item 
            key={elem.id} 
            action onClick={() => props.onSelect(elem.id)}
            as="li" active={props.lastSelected == elem.id}> 
            {elem.name} 
        </ListGroup.Item>)}  
        </ListGroup>
    )}
    
export default List;