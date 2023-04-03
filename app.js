const form = document.querySelector('.search-bar');
const search = document.querySelector('.search-input');
const box = document.querySelector('.box');
let api = 'https://restcountries.com/v3.1/all';

async function render() {
    if (!search.value) {
        api = 'https://restcountries.com/v3.1/all'
    } else {
        api = `https://restcountries.com/v3.1/name/${search.value.charAt(0).toUpperCase() + search.value.slice(1)}`
    }

    try {
        const response = await fetch(api);
        const data = await response.json();
        box.innerHTML = '';

        data.map((countries) => {
            const fragment = document.createDocumentFragment();

            const card = document.createElement('div');
            card.classList.add('card');

            const countriesFlag = document.createElement('img');
            countriesFlag.src = countries.flags.svg
            countriesFlag.alt = countries.flags.alt

            const countriesName = document.createElement('h2');
            countriesName.textContent = countries.name.common;

            const countriesCapital = document.createElement('h5');
            countriesCapital.textContent = `Capital: ${countries.capital}`;

            const countriesPopulation = document.createElement('span');
            if (String(countries.population).length == 4) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 1)}k`;

            } else if (String(countries.population).length == 5) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 2)}k`;

            } else if (String(countries.population).length == 6) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 3)}k`;

            } else if (String(countries.population).length == 7) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 1)}m`;

            } else if (String(countries.population).length == 8) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 2)}m`;

            } else if (String(countries.population).length == 9) {

                countriesPopulation.textContent = `Population: ${String(countries.population).slice(0, 3)}m`;

            } else if (String(countries.population).length == 10) {
                let arr = [];
                arr.push(String(countries.population).slice(0, 2));
                // console.log(arr);
                const newArr = arr.join('').split('').join('.')
                    // console.log(newArr);
                countriesPopulation.textContent = `${newArr}b`;
            } else {
                countriesPopulation.textContent = countries.population;
            }

            card.appendChild(countriesFlag);
            card.appendChild(countriesName);
            card.appendChild(countriesCapital);
            card.appendChild(countriesPopulation);

            fragment.appendChild(card);

            box.appendChild(fragment);
        })


    } catch (error) {
        console.log('error');
    }
}

setTimeout(render, 1000);

// setTimeout(render(), 2000);
// render();

search.addEventListener('input', () => {
    render()
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        render();
    })
})

// fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => {
//     data.map((davlat) => {
//         // console.log(String(davlat.population).length);

//         const fragment = document.createDocumentFragment();

//         const card = document.createElement('div');
//         card.classList.add('card');

//         const davlatFlag = document.createElement('img');
//         davlatFlag.src = davlat.flags.svg
//         davlatFlag.alt = davlat.flags.alt

//         const davlatName = document.createElement('h2');
//         davlatName.textContent = davlat.name.common;

//         const davlatCapital = document.createElement('h5');
//         davlatCapital.textContent = davlat.capital;

//         const davlatPopulation = document.createElement('span');
//         if (String(davlat.population).length == 4) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 1)}k`;

//         } else if (String(davlat.population).length == 5) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 2)}k`;

//         } else if (String(davlat.population).length == 6) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 3)}k`;

//         } else if (String(davlat.population).length == 7) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 1)}m`;

//         } else if (String(davlat.population).length == 8) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 2)}m`;

//         } else if (String(davlat.population).length == 9) {

//             davlatPopulation.textContent = `${String(davlat.population).slice(0, 3)}m`;

//         } else if (String(davlat.population).length == 10) {
//             let arr = [];
//             arr.push(String(davlat.population).slice(0, 2));
//             // console.log(arr);
//             const newArr = arr.join('').split('').join('.')
//                 // console.log(newArr);
//             davlatPopulation.textContent = `${newArr}b`;
//         } else {
//             davlatPopulation.textContent = davlat.population;
//         }

//         card.appendChild(davlatFlag);
//         card.appendChild(davlatName);
//         card.appendChild(davlatCapital);
//         card.appendChild(davlatPopulation);

//         fragment.appendChild(card);

//         box.appendChild(fragment);
//     })
// });