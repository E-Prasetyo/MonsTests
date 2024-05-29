import React from 'react'
import useCharacters from '../../hooks/useCharacters'
import { useNavigate } from 'react-router-dom';

const Location = () => {
    const navigate = useNavigate();
    const dataCTX = useCharacters();
    const handleClick = (id) => {
        navigate(`/location/${id}`);
    }

  return (
      <div>
          <p className='p-2 text-white text-center text-2xl font-bold'>
              Location List
          </p>
          {dataCTX.locationList.length > 0 && dataCTX.locationList.map((value,_i) => {
              return (
                  <div
                      key={_i}
                      className='m-4 p-2 bg-white text-center font-bold'
                      onClick={()=>handleClick(value.id)}
                  >
                      {value.name}
                  </div>
              )
          })}
        {dataCTX.locationList.length <= 0 && (
            <p className='py-10 text-center text-white bg-slate-500 capitalize'>
                data tidak ditemukan
            </p>
        )}
    </div>
  )
}

export default Location