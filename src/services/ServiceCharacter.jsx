import axios from 'axios';
 
const ServiceCharacter = {
async getCharacterAll(){
    // const sessionData = sessionStorage.getItem('user')
    const graphqlQuery = {
        query: `{ 
            characters(page: 1) {
                results {
                    id
                    gender
                    image
                    name
                    species
                    status
                    type
                    location {
                        id
                        name
                    }
                }
            }
        }`
    }
        
    const data = await axios({
        url:'https://rickandmortyapi.com/graphql',
        method: 'POST',
        data: graphqlQuery
      })
      .then((response) => response)
      .catch((err) => err.response)
   
      return data
  },

  async getCharacter(characterId){
    // const sessionData = sessionStorage.getItem('user')
    const graphqlQuery = {
        query: `{ 
            character(id:${characterId}){
                id
                name
                status
                image
                species
                gender
                episode{
                    id
                    name
                    episode
                    air_date
                }
            }
        }`
    }
    const data = await axios({
        url:'https://rickandmortyapi.com/graphql',
        method: 'POST',
        data: graphqlQuery
      })
      .then((response) => response)
      .catch((err) => err.response)
   
      return data
  },

}

export default ServiceCharacter