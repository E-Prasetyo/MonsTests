import { Route, Routes } from 'react-router-dom'
import CharacterList from './pages/CharacterList'
import Layout from './components/layout/Layout'
import Character from './pages/Character'
import ServiceCharacter from './services/ServiceCharacter';
import ServiceLocation from './services/ServiceLocation';
import { useEffect } from 'react';
import useCharacters from './hooks/useCharacters';
import LocationList from './pages/LocationList';
import Location from './pages/Location';
import NotFound from './pages/NotFound';

function App() {
  const dataCTX = useCharacters();


  useEffect(() => {
    const char = localStorage.getItem("character");
    const loc = localStorage.getItem("locationEdit");
    if (!char || !loc) {
      Promise.allSettled([
            ServiceCharacter.getCharacterAll(),
            ServiceLocation.getLocationAll()
        ])
        .then(([character, location]) => {
          localStorage.setItem("character",JSON.stringify(character.value.data.data.characters.results));
          dataCTX.setCharacterList(character.value.data.data.characters.results);
        })
    } else {
      dataCTX.setCharacterList(JSON.parse(localStorage.getItem("character")));
      dataCTX.setLocationList(JSON.parse(localStorage.getItem("locationEdit")));
    }
        
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CharacterList />} />
          <Route path="character/:characterId" element={<Character />} />
          <Route path="location" element={<LocationList />} />
          <Route path="location/:locationId" element={<Location/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
