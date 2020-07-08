export function getPageTemplate(character, location) {
    return `
<html lang="en">
    <head>
        <style>
            div {
                display: grid;
                justify-items: center;
            }

            #character_name {
                font-style: italics;
                font-size: 150%;
            }
        </style>
    </head>
    <body>
        <div id="content">
                ${character}
                Current location:
                ${location}
        </div>
    </body>
</html>
    `
}

export function getCharacterTemplate(image, name) {
    return `
        <div id="character">
            <img src="${image}"/>
            <div id="character_name">
                ${name}
            </div>
        </div>
    `
}

export function getLocationTemplate(name, type, dimension) {
    return `
        <div id="location">
            <div id="location_name">
            ${name} - ${type}
            </div>
            <div id="dimension">
                ${dimension}
            </div>
        </div>
    `
}