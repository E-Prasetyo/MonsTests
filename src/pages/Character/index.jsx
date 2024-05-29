import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Content from './content';
import useCharacters from '../../hooks/useCharacters';
import useFlag from '../../hooks/useFlag';

const Character = () => {
    const { characterId } = useParams()
    const dataCTX = useCharacters();
    const [data, setData] = useState();
    const [dataOption, setDataOption] = useState([]);
    const { flag, toggleFlag  } = useFlag();

    useEffect(() => {
        const dataChar = JSON.parse(localStorage.getItem("character"))
        setData(dataChar.find(value => value.id == characterId));
        setDataOption(dataCTX.locationList)
    }, [dataCTX.locationList, dataCTX.characterList, characterId, flag]);

  return (
      <div className='h-full min-h-screen bg-slate-600'>
          {!data && <p>Data tidak di temukan</p>}          
      {data && (
        <Content
          data={data}
          onFlag={toggleFlag}
        />
      )}
    </div>
  )
}

export default Character