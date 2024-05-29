import React from 'react';
import contextCharacter from '../context/contextCharacters';

const usePreview = () => {
  return (
    React.useContext(contextCharacter)
  )
}

export default usePreview