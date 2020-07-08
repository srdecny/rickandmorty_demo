import { getPageTemplate, getCharacterTemplate, getLocationTemplate } from './template.js'
import { getRandomCharacter, getLocationByUrl } from './axios.js'

export async function displayCharacter() {
    const character = await getRandomCharacter()
    const location = await getLocationByUrl(character.location.url)
    return getPageTemplate(
        getCharacterTemplate(character.image, character.name),
        getLocationTemplate(location.name, location.type, location.dimension)
    )
}
