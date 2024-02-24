import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Details from './components/Details';
import List from './components/List';
import { PersonProps } from './types/PersonProps';

function App() {
  const [elements, setElements] = useState<{id: number, name: string}[]>();
  const [selectedElement, setSelectedElement] = useState<number>(0);
  const [person, setPerson] = useState<PersonProps>();

  const fetchData = () => {
    axios.get("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then(res => res.data)
    .then(data => setElements(data));
  }

  const fetchPersonDetails = (id: number) => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    .then(res => res.data)
    .then(data => setPerson(data));
}

  useEffect(() => {fetchData()},[]);
  useEffect(() => {fetchPersonDetails(selectedElement)},[selectedElement]);

  const handleSelect = (id: number) => {
    setSelectedElement(id);
  }

  return (
    <>
      <List elements={elements} onSelect={handleSelect} lastSelected={selectedElement}/>
      <Details person={person}/>
    </>
  )
}

export default App
