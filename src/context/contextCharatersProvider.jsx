import React, { useReducer } from 'react';
import PreviewContext from './contextCharacters';

const defaultPreviewState = {
    characterList: [],
    locationList:[]
}

const previewReducers = (state=defaultPreviewState, action) => {
     switch (action.type) {
        case 'setValueChar':
            return {
                ...state,
                characterList: action.payload
            };
        case 'setValueLoc':
            return {
                ...state,
                locationList: action.payload
             };
        case 'addLoc':
            return {
                ...state,
                locationList: [...state.locationList, action.payload]
             };
         case 'addLocChar':
            return {
                ...state,
                locationList: action.payload
            };
        default:
            return state;
    }
}

const PreviewProvider = ({children}) => {
    const [previewState, dispatchPreviewAction] = useReducer(previewReducers, defaultPreviewState);

    const handlerSetChar = (value) => {
        dispatchPreviewAction({type: 'setValueChar', payload: value})
    }
    const handlerSetLoc = (value) => {
        dispatchPreviewAction({type: 'setValueLoc', payload: value})
    }
    const handlerAddLoc = (value) => {
        dispatchPreviewAction({type: 'addLoc', payload: value})
    }
    const handlerAddLocChar = (value) => {
        dispatchPreviewAction({type: 'addLocChar', payload: value})
    }

    const previewValue = {  
        characterList: previewState.characterList,
        locationList:previewState.locationList,
        setCharacterList: handlerSetChar,
        setLocationList: handlerSetLoc,
        setAddLocation: handlerAddLoc,
        setEditLocationChar:handlerAddLocChar
    }
  return (
    <PreviewContext.Provider value={previewValue}>
        {children}
    </PreviewContext.Provider>
  )
}

export default PreviewProvider