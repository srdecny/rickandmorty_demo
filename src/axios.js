import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api'

export async function getRandomCharacter() {
    const character_count = (await axios.get(`${BASE_URL}/character/`)).data.info.count
    // Math.random can't return 1, so increment the upper bound so it's inclusive
    const random_character_id = Math.floor(Math.random() * (character_count + 1))
    return (await axios.get(`${BASE_URL}/character/${random_character_id}`)).data 
}

export async function getLocationByUrl(locationUrl) {
    return (await axios.get(locationUrl)).data
}