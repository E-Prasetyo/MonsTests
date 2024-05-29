import React from 'react'

const previewContext = React.createContext({
    characterList: [],
    locationList:[],
    setCharacterList:()=>{},
    setLocationList: () => { },
    setAddLocation:() => {},
    setEditLocationChar:() => {},
})

export default previewContext