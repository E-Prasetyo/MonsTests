import axios from 'axios';
 
const ServiceCharacter = {
async getLocationAll(){
    // const sessionData = sessionStorage.getItem('user')
    const graphqlQuery = {
        query: `{ 
            locations {
                results {
                    id
                    name
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

  async getLocation(characterId){
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