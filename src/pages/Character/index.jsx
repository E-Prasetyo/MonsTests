import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Content from './content';
import useCharacters from '../../hooks/useCharacters';

const Character = () => {
    const { characterId } = useParams()
    const dataCTX = useCharacters();
    const [data, setData] = useState();
    const [dataOption, setDataOption] = useState([]);

    useEffect(() => {
        const dataChar = dataCTX.characterList;
        setData(dataChar.find(value => value.id == characterId));
        setDataOption(dataCTX.locationList)
    }, [dataCTX.locationList, dataCTX.characterList, characterId]);

  return (
      <div className='h-full min-h-screen bg-slate-600'>
          {!data && <p>Data tidak di temukan</p>}          
          {data && <Content data={data} dataOption={dataOption} />}
    </div>
  )
}

export default Character