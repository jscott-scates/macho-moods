import { database } from './database.js'

export const moodList = () => {
    let moodListHTML = ''
    for (const mood of database) {
        if (mood.id <=3){
            moodListHTML += `
            <section class="columnOne" id="mood${mood.name}">
                <h2 class="moodName">${mood.name}</h2>
                <img class="moodImage" src="${mood.imageUrl}" alt="${mood.text}"/>
                <div class="advice">
                    <h3>Macho Advice</h3>
                    <div class="machoQuotes">
                        <p>${mood.quotes[0]}</p>
                        <p>${mood.quotes[1]}</p>
                    </div>
                </div>
            </section>
            `
        }
        if (mood.id >3 && mood.id <=6){
            moodListHTML += `
            <section class="columnTwo" id="mood${mood.name}">
                <h2 class="moodName">${mood.name}</h2>
                <img class="moodImage" src="${mood.imageUrl}" alt="${mood.text}"/>
                <div class="advice">
                    <h3>Macho Advice</h3>
                    <div class="machoQuotes">
                        <p>${mood.quotes[0]}</p>
                        <p>${mood.quotes[1]}</p>
                    </div>
                </div>
            </section>
            `
        }
        if (mood.id >6 && mood.id <= 9){
            moodListHTML += `
            <section class="columnThree" id="mood${mood.name}">
                <h2 class="moodName">${mood.name}</h2>
                <img class="moodImage" src="${mood.imageUrl}" alt="${mood.text}"/>
                <div class="advice">
                    <h3>Macho Advice</h3>
                    <div class="machoQuotes">
                        <p>${mood.quotes[0]}</p>
                        <p>${mood.quotes[1]}</p>
                    </div>
                </div>
            </section>
            `
        }
     
    } return moodListHTML
}