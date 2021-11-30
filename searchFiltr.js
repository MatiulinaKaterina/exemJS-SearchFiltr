'use strict';

let filtersState = {
    cheap: false,
    optimal: false,
    premium: false,
};

let radioValue = '';

searchInput.addEventListener('input', (event) => {
    const filteredName = arrCars.filter(item => {
        if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) return true;
        return false
    });
    const filteredCheckbox = checkboxFiltered(filteredName, filtersState);
    const filteredRadio = radioSort(filteredCheckbox, radioValue)
    createCard(filteredRadio)
})

function searchCatalog(array) {
    const filteredName = array.filter(item => {
        if (item.name.toLowerCase().includes(searchInput.value.toLowerCase())) return true;
        return false
    });
    if (!filteredName.length) return array;
    return filteredName
};

const checkboxSegmentCollection = document.getElementsByName('checkboxSegment');

checkboxSegmentCollection.forEach(elem => {
    elem.addEventListener('change', (event) => {
        if (event.target.checked) {
            filtersState[event.target.value] = true;
            const searchCards = searchCatalog(arrCars);
            const filteredCheckbox = checkboxFiltered(searchCards, filtersState);
            const filteredRadio = radioSort(filteredCheckbox, radioValue)
            createCard(filteredRadio)
        } else {
            filtersState[event.target.value] = false;
            const searchCards = searchCatalog(arrCars);
            const filteredCheckbox = checkboxFiltered(searchCards, filtersState);
            const filteredRadio = radioSort(filteredCheckbox, radioValue)
            createCard(filteredRadio)
        }
    })
});

function checkboxFiltered(array, obj) {
    let newArray = [];
    for (let key in obj) {
        if (obj[key]) {
            let arrayFilter = array.filter(item => {
                if (item.priceSegment === key) {
                    return true;
                }
                return false;
            })
            newArray.push(...arrayFilter);
        };
    };
    if (!newArray.length)
        return array;
    return newArray;
};

const radioSortCollection = document.getElementsByName('radioSort');

radioSortCollection.forEach(elem => {
    inputAlphabet.checked = true;
    const sortAlphabet = arrCars.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    createCard(sortAlphabet);
    elem.addEventListener('change', (event) => {
        radioValue = event.target.value;
        if (event.target.value) {
            const searchCards = searchCatalog(arrCars);
            const filteredCards = checkboxFiltered(searchCards, filtersState);
            if (radioValue === 'price') {
                const sortResult = filteredCards.sort((a, b) => a.price - b.price);
                createCard(sortResult);
            }
            if (radioValue === 'alphabet') {
                const sortResult = filteredCards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                createCard(sortResult);
            }
            if (radioValue === 'count') {
                const sortResult = filteredCards.sort((a, b) => a.count - b.count);
                createCard(sortResult);
            }
            if (radioValue === 'date') {
                const sortResult = filteredCards.sort((a, b) => new Date(b.date) - new Date(a.date));
                createCard(sortResult);
            }
        } else {
            createCard()
        }
    });
});

const radioSort = function (array, value) {
    let resultSortArray = [];
    if (value) {
        let sortArray = [];
        if (value === 'alphabet') {
            sortArray = array.sort((a, b) => {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            });
        } else {
            if (value === 'price') {
                sortArray = array.sort((a, b) => a.price - b.price);
            } else {
                if (value === 'count') {
                    sortArray = array.sort((a, b) => a.count - b.count);

                } else {
                    if (value === 'date') {
                        sortArray = array.sort((a, b) => new Date(b.date) - new Date(a.date));
                    }
                }
                resultSortArray = sortArray;
            }
        }
    }
    if (resultSortArray.length) {
        return resultSortArray;
    } else {
        return array;
    };
};