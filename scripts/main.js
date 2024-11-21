import { moodList } from "./moods.js"

let moodListHTML = moodList()
let container = document.querySelector('#container')
container.innerHTML = moodListHTML

//testing to make sure querySelector is working as intended
if (container){
    container = moodListHTML
} else {
    console.error(`Could not find element with the class "container`)
}


