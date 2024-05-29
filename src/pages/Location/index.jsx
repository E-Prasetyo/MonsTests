import React from 'react'
import useCharacters from '../../hooks/useCharacters'
import { useParams } from 'react-router-dom';
import Menu from '../../components/characters';
const LocationDetail = () => {
    const { locationId } = useParams();
    const dataCTX = useCharacters();
    const name = dataCTX?.locationList?.find((v, i) => v.id == locationId)
    const data = dataCTX.characterList.filter(
        (value, _i) => value.location.name == name?.name
    )

  return (
    <div>
          <h1 className='py-8 text-4xl text-center text-white font-bold'>
              LocationDetail
          </h1>
          <div className='flex flex-col items-center gap-5'>
            {data && data?.length > 0 && data.map((v, _i) => {
                return (
                    <Menu key={_i} value={v} />
                )
            })}
          </div>
          {data && data?.length <= 0 && (
              <p>Empty</p>
          )}
          
    </div>
  )
}

export default LocationDetail