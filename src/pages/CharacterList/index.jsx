import { useEffect, useState } from 'react'
import Menu from '../../components/characters';
import useCharacters from '../../hooks/useCharacters';
import ServiceCharacter from '../../services/ServiceCharacter';

const Home = () => {
    const [data, setData] = useState();
    const dataCTX = useCharacters();

    useEffect(() => {
        setData(dataCTX.characterList)
    }, [dataCTX.characterList]);

    return (
      <div className="flex flex-col justify-center space-y-5">
            <h1 className="p-4 text-3xl text-center text-white font-bold">
                Character
            </h1>
            <div className='px-4 min-h-screen flex flex-col items-center gap-5'>
                {data && data?.map((value, _i) => {
                    return <Menu key={_i} value={value} />
                })}
            </div>
      </div>
  )
}

export default Home