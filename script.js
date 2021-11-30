'use strict';

let carsNew = {};
let dubleArr = [];
let countId = 108;
let elementOfDelete = null;

let arrCars = [
    {
        name: 'Mercedes',
        article: 'G30',
        count: 8,
        price: 43000,
        date: '01.05.2020',
        priceSegment: 'optimal',
        picture: 'https://sales.mercedes-autoforum.ru/images/gallery/gallery_model_cars/1_1_3.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 100
    },
    {
        name: 'BMW 3',
        article: 'G30',
        count: 4,
        price: 45000,
        date: '01.05.2020',
        priceSegment: 'optimal',
        picture: 'https://ii.drivenn.ru/itumyv8uhqqqi_2epstu_h-1000/bmw-3-series-foto-1.jpeg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 101
    },
    {
        name: 'Seat ibiza',
        article: 'G30',
        count: 7,
        price: 21000,
        date: '01.05.2018',
        priceSegment: 'cheap',
        picture: 'https://cdn.motor1.com/images/mgl/Y8vey/s1/2021-seat-ibiza-facelift.webp',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 102
    },
    {
        name: 'VW Polo',
        article: 'G30',
        count: 3,
        price: 18000,
        date: '01.05.2021',
        priceSegment: 'cheap',
        picture: 'http://www.pnzdrive.ru/uploads/news/2021/04/Polo-00244.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 103
    },
    {
        name: 'Opel Astra',
        article: 'A33',
        count: 2,
        price: 22000,
        date: '06.03.2019',
        priceSegment: 'cheap',
        picture: 'https://static3.car.ru/uploaded/2021/04/30/2bd25d3ea210affbd51a896ebb35bf28_w650.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 104
    },
    {
        name: 'Maserati',
        article: 'A33',
        count: 1,
        price: 101000,
        date: '02.03.2021',
        priceSegment: 'premium',
        picture: 'https://motor.ru/imgs/2020/07/16/12/4004456/370df1bbe5ff5e8a55cc9a9c614eefede218bd06.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 105
    },
    {
        name: 'Porsche Panamera',
        article: 'A33',
        count: 6,
        price: 99000,
        date: '07.03.2021',
        priceSegment: 'premium',
        picture: 'https://s0.rbk.ru/v6_top_pics/media/img/7/44/755984570050447.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 106
    },
    {
        name: 'Aston Martin',
        article: 'A33',
        count: 4,
        price: 80000,
        date: '02.03.2021',
        priceSegment: 'premium',
        picture: 'https://avatars.mds.yandex.net/get-verba/937147/2a000001656c2795d6fa4e992d3095e65db1/cattouchret',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ',
        carID: 107
    },
    {
        name: 'AUDI A4',
        article: 'A33',
        count: 9,
        price: 43000,
        date: '02.03.2021',
        priceSegment: 'optimal',
        picture: 'https://avatars.mds.yandex.net/get-verba/787013/2a0000016b7e65c13c5acad18b2101595da2/cattouchret',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        carID: 108
    },

]

const catalogCont = document.createElement('div');
catalogCont.classList.add('main-catalog')
document.body.append(catalogCont);

// создание Main Information

const formMain = document.createElement('form');
creationSearchOfProduct.append(formMain);

const fieldsetMainInformation = document.createElement('fieldset');
fieldsetMainInformation.className = 'main-info'
formMain.append(fieldsetMainInformation);

const mainInformation = document.createElement('legend');
mainInformation.innerText = 'Main Informattion';
fieldsetMainInformation.append(mainInformation);

const labelName = document.createElement('label');
labelName.innerText = 'Name ';
fieldsetMainInformation.append(labelName);

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'nameCar';
inputName.value = '';
inputName.className = 'main-input_margin';
labelName.prepend(inputName);

const nameInvalid = document.createElement('div');
nameInvalid.className = 'invalid-value';
nameInvalid.innerText = 'This input should contain at least 5 character';
fieldsetMainInformation.append(nameInvalid);
nameInvalid.style.visibility = 'hidden';

const labelArticle = document.createElement('label');
labelArticle.innerText = 'Article ';
fieldsetMainInformation.append(labelArticle);

const inputArticle = document.createElement('input');
inputArticle.type = 'text';
inputArticle.className = 'main-input_margin';
labelArticle.prepend(inputArticle);

const articleInvalid = document.createElement('div');
articleInvalid.className = 'invalid-value';
articleInvalid.innerText = 'The article must begin with a capital Latin letter and then contain at least two digits';
fieldsetMainInformation.append(articleInvalid);
articleInvalid.style.visibility = 'hidden';

const labelCount = document.createElement('label');
labelCount.innerText = 'Count ';
fieldsetMainInformation.append(labelCount);

const inputCount = document.createElement('input');
inputCount.type = 'number';
inputCount.className = 'main-input_margin';
inputCount.min = 1;
labelCount.prepend(inputCount);

const countInvalid = document.createElement('div');
countInvalid.className = 'invalid-value';
countInvalid.innerText = 'Enter quantity...';
fieldsetMainInformation.append(countInvalid);
countInvalid.style.visibility = 'hidden';

const labelPrice = document.createElement('label');
labelPrice.innerText = 'Price ';
fieldsetMainInformation.append(labelPrice);

const inputPrice = document.createElement('input');
inputPrice.type = 'text';
inputPrice.className = 'main-input_margin';
labelPrice.prepend(inputPrice);

const priceInvalid = document.createElement('div');
priceInvalid.className = 'invalid-value';
priceInvalid.innerText = 'The field must contain only numbers';
fieldsetMainInformation.append(priceInvalid);
priceInvalid.style.visibility = 'hidden'; //visible

const labelCreationDate = document.createElement('label');
labelCreationDate.innerText = 'Creation Date ';
fieldsetMainInformation.append(labelCreationDate);

const inputCreationDate = document.createElement('input');
inputCreationDate.type = 'date';
inputCreationDate.required = false
inputCreationDate.className = 'main-input_margin';
labelCreationDate.prepend(inputCreationDate);

const dateInvalid = document.createElement('div');
dateInvalid.className = 'invalid-value';
dateInvalid.innerText = 'Enter the date...';
fieldsetMainInformation.append(dateInvalid);
dateInvalid.style.visibility = 'hidden'; //visible

//создание Price segment

const fieldsetPriceSegment = document.createElement('fieldset');
fieldsetPriceSegment.className = 'price-segment';
formMain.append(fieldsetPriceSegment);

const priceSegment = document.createElement('legend');
priceSegment.innerText = 'Price segment';
fieldsetPriceSegment.append(priceSegment);

const labelCheap = document.createElement('label');
labelCheap.innerText = 'Cheap ';
fieldsetPriceSegment.append(labelCheap);

const inputCheap = document.createElement('input');
inputCheap.type = 'radio';
inputCheap.name = 'radioSegment';
inputCheap.value = 'cheap';
labelCheap.prepend(inputCheap);

const labelOptimal = document.createElement('label');
labelOptimal.innerText = 'Optimal ';
fieldsetPriceSegment.append(labelOptimal);

const inputOptimal = document.createElement('input');
inputOptimal.type = 'radio';
inputOptimal.name = 'radioSegment';
inputOptimal.value = 'optimal';
labelOptimal.prepend(inputOptimal);

const labelPremium = document.createElement('label');
labelPremium.innerText = 'Premium ';
fieldsetPriceSegment.append(labelPremium);

const inputPremium = document.createElement('input');
inputPremium.type = 'radio';
inputPremium.name = 'radioSegment';
inputPremium.value = 'premium';
labelPremium.prepend(inputPremium);

const priceSegmentnvalid = document.createElement('div');
priceSegmentnvalid.className = 'invalid-value';
priceSegmentnvalid.innerText = 'Specify the price category...';
fieldsetPriceSegment.append(priceSegmentnvalid);
priceSegmentnvalid.style.visibility = 'hidden';

const radioSegmentCollection = document.getElementsByName('radioSegment');
radioSegmentCollection.forEach(elem => {
    elem.addEventListener('change', (event) => {
        if (!inputCheap.checked && !inputOptimal.checked && !inputPremium.checked) {
            priceSegmentnvalid.style.visibility = 'visible';
        } else {
            priceSegmentnvalid.style.visibility = 'hidden';
            carsNew.priceSegment = event.target.value;
        }
    })
})

// создание Secondary information

const fieldsetSecondaryInformation = document.createElement('fieldset');
fieldsetSecondaryInformation.className = 'second-info';
formMain.append(fieldsetSecondaryInformation);

const secondaryInformation = document.createElement('legend');
secondaryInformation.innerText = 'Secondary information';
fieldsetSecondaryInformation.append(secondaryInformation);

const labelPicture = document.createElement('label');
labelPicture.innerText = 'Picture';
fieldsetSecondaryInformation.append(labelPicture);

const inputPicture = document.createElement('input');
inputPicture.type = 'text';
inputPicture.className = 'main-input_margin';
labelPicture.prepend(inputPicture);

const labelDescription = document.createElement('label');
labelDescription.innerText = 'Description';
labelDescription.classList.add('main-input_margin')
fieldsetSecondaryInformation.append(labelDescription);

const inputDescription = document.createElement('textarea');
inputDescription.classList.add('desc');
labelDescription.appendChild(inputDescription);

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Save'
submitButton.className = 'submitButton_margin-top';
formMain.append(submitButton);

//создание формы поиск/фильтр

const formSearchFilter = document.createElement('form');
creationSearchOfProduct.append(formSearchFilter);

const fieldsetSearch = document.createElement('fieldset');
fieldsetSearch.className = 'search-inp'
formSearchFilter.append(fieldsetSearch);

const legendSearch = document.createElement('legend');
legendSearch.innerText = 'Search';
fieldsetSearch.append(legendSearch);

const labelSearch = document.createElement('label');
labelSearch.innerText = 'OK, Google';
fieldsetSearch.append(labelSearch)

const search = document.createElement('input');
search.type = 'text';
search.id = 'searchInput';
search.className = 'main-input_margin';
labelSearch.prepend(search);

//фильтр по цене

const fieldsetFilterByPrice = document.createElement('fieldset');
fieldsetFilterByPrice.className = 'price-segment'
formSearchFilter.append(fieldsetFilterByPrice);

const legendFilterByPrice = document.createElement('legend');
legendFilterByPrice.innerText = 'Filter by price segment';
fieldsetFilterByPrice.append(legendFilterByPrice);

const labelCheapFilter = document.createElement('label');
labelCheapFilter.innerText = 'Cheap ';
fieldsetFilterByPrice.append(labelCheapFilter);

const checkboxCheap = document.createElement('input');
checkboxCheap.type = 'checkbox';
checkboxCheap.name = 'checkboxSegment';
checkboxCheap.value = 'cheap';
checkboxCheap.id = 'cheapId';
labelCheapFilter.prepend(checkboxCheap);

const labelOptimalFilter = document.createElement('label');
labelOptimalFilter.innerText = 'Optimal ';
fieldsetFilterByPrice.append(labelOptimalFilter);

const checkboxOptimal = document.createElement('input');
checkboxOptimal.type = 'checkbox';
checkboxOptimal.name = 'checkboxSegment';
checkboxOptimal.value = 'optimal';
checkboxOptimal.id = 'optimalId';
labelOptimalFilter.prepend(checkboxOptimal);

const labelPremiumFilter = document.createElement('label');
labelPremiumFilter.innerText = 'Premium ';
fieldsetFilterByPrice.append(labelPremiumFilter);

const checkboxPremium = document.createElement('input');
checkboxPremium.type = 'checkbox';
checkboxPremium.name = 'checkboxSegment';
checkboxPremium.value = 'premium';
checkboxPremium.id = 'premiumId';
labelPremiumFilter.prepend(checkboxPremium);

//сортировка по алфавту

const fieldsetSort = document.createElement('fieldset');
fieldsetSort.className = 'sort-by';
formSearchFilter.append(fieldsetSort);

const legendSort = document.createElement('legend');
legendSort.innerText = 'Sort by';
fieldsetSort.append(legendSort);

const labelAlphabet = document.createElement('label');
labelAlphabet.innerText = 'Alphabet';
fieldsetSort.append(labelAlphabet);

const inputAlphabet = document.createElement('input');
inputAlphabet.type = 'radio';
inputAlphabet.name = 'radioSort';
inputAlphabet.value = 'alphabet';
inputAlphabet.checked = false;
labelAlphabet.prepend(inputAlphabet);

const labelPriceSort = document.createElement('label');
labelPriceSort.innerText = 'Price';
fieldsetSort.append(labelPriceSort);

const inputPriceSort = document.createElement('input');
inputPriceSort.type = 'radio';
inputPriceSort.name = 'radioSort';
inputPriceSort.value = 'price';
labelPriceSort.prepend(inputPriceSort);

const labelCountSort = document.createElement('label');
labelCountSort.innerText = 'Count';
fieldsetSort.append(labelCountSort);

const inputCountSort = document.createElement('input');
inputCountSort.type = 'radio';
inputCountSort.name = 'radioSort';
inputCountSort.value = 'count';
labelCountSort.prepend(inputCountSort);

const labelDateSort = document.createElement('label');
labelDateSort.innerText = 'Date';
fieldsetSort.append(labelDateSort);

const inputDateSort = document.createElement('input');
inputDateSort.type = 'radio';
inputDateSort.name = 'radioSort';
inputDateSort.value = 'date';
labelDateSort.prepend(inputDateSort);

//

inputName.addEventListener('change', (event) => {

    if (event.target.value.length < 5) {
        nameInvalid.style.visibility = 'visible';
    } else {
        nameInvalid.style.visibility = 'hidden';
        carsNew.name = event.target.value;
    };
});

inputArticle.addEventListener('change', (event) => {
    let aricleValue = inputArticle.value;
    let validAricleValue = /([A-Z\.]{1})+[0-9\.]{2,}/;
    if (!validAricleValue.test(aricleValue)) {
        articleInvalid.style.visibility = 'visible';
    } else {
        articleInvalid.style.visibility = 'hidden';
        carsNew.article = event.target.value;
    };
});

inputCount.addEventListener('change', (event) => {
    if (inputCount.value === 'undefined' || inputCount.value === null || !(inputCount.value)) {
        countInvalid.style.visibility = 'visible'; //visible
    } else {
        countInvalid.style.visibility = 'hidden'; //visible
        carsNew.count = event.target.value;
        console.log(event.target.value)
    }

});

inputPrice.addEventListener('change', (event) => {
    let priceValue = inputPrice.value;
    let validPriceValue = /^[0-9]*[.]?[0-9]+$/
    if (!validPriceValue.test(priceValue)) {
        priceInvalid.style.visibility = 'visible';
    } else {
        priceInvalid.style.visibility = 'hidden';
        carsNew.price = event.target.value;
    };
});

inputCreationDate.addEventListener('change', (event) => {
    if (!inputCreationDate) {
        inputCreationDate.required = true
    } else {
        carsNew.date = event.target.value;
        console.log(event.target.value)
    }

});

inputPicture.addEventListener('change', (event) => {
    carsNew.picture = event.target.value;
});

inputCreationDate.addEventListener('change', (event) => {
    if (!inputCreationDate.value) {
        inputCreationDate.required = true
    } else {
        carsNew.date = event.target.value;
    }

});

inputDescription.addEventListener('change', (event) => {
    carsNew.description = event.target.value;
});

const validationForm = function () {
    let invalid = true;
    //проверка имени
    if (inputName.value.length < 5) {
        nameInvalid.style.visibility = 'visible';
        invalid = false;
    } else {
        nameInvalid.style.visibility = 'hidden';
    };
    //проверка артикля
    let aricleValue = inputArticle.value;
    let validAricleValue = /([A-Z\.]{1})+[0-9\.]{2,}/;
    if (!validAricleValue.test(aricleValue)) {
        articleInvalid.style.visibility = 'visible';
        invalid = false;
    } else {
        articleInvalid.style.visibility = 'hidden';
    };

    //проверка count

    if (inputCount.value === 'undefined' || inputCount.value === null || !inputCount.value) {
        countInvalid.style.visibility = 'visible'; //visible
        console.log(inputCount.value)
        invalid = false;
    } else {
        countInvalid.style.visibility = 'hidden'; //visible
    }

    //проверка price
    let priceValue = inputPrice.value;
    let validPriceValue = /^[0-9]*[.]?[0-9]+$/
    if (!validPriceValue.test(priceValue)) {
        priceInvalid.style.visibility = 'visible';
        invalid = false;
    } else {
        priceInvalid.style.visibility = 'hidden';
    };

    //проверка даты

    if (!inputCreationDate.value) {
        inputCreationDate.required = true
        dateInvalid.style.visibility = 'visible';
        invalid = false;
    } else {
        inputCreationDate.required = false
        dateInvalid.style.visibility = 'hidden';
    }

    if (!inputCheap.checked && !inputOptimal.checked && !inputPremium.checked) {
        priceSegmentnvalid.style.visibility = 'visible';
        invalid = false;
    } else {
        priceSegmentnvalid.style.visibility = 'hidden';
        //carsNew.priceSegment = event.target.value;
    }

    if (!invalid) return false;
    else return true;
}

//отправка формы

formMain.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validationForm()) {
        arrCars.push({ ...carsNew })
        carsNew = {};
        formMain.reset();
        createCard();
    }
})

//отрисовка карточки

const createCard = function (model = arrCars) {
    catalogCont.innerHTML = '';

    model.forEach(item => {
        const cardCont = document.createElement('div');
        cardCont.classList.add('card')
        catalogCont.append(cardCont);

        const imgEditLastOne = document.createElement('div');
        imgEditLastOne.className = 'imgEditLastOne_disp-flex';
        cardCont.append(imgEditLastOne);

        const editLastOne = document.createElement('div');
        editLastOne.className = 'editLastOne_margin';
        imgEditLastOne.append(editLastOne);

        const lastOneDiv = document.createElement('div');
        lastOneDiv.className = 'lastOneDiv_img';
        if (+item.count === 1) {
            lastOneDiv.style.visibility = 'visible';
        } else {
            lastOneDiv.style.visibility = 'hidden';
        };

        editLastOne.append(lastOneDiv);

        if (!item.carID) {
            item.carID = ++countId;
        };

        const imgCard = document.createElement('div');
        if (item.picture) {
            imgCard.style.backgroundImage = `url(${item.picture})`;
        } else {
            item.picture = 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592714-stock-photo-no-thumbnail-image-placeholder-for.jpg'
            imgCard.style.backgroundImage = `url(${item.picture})`;
        }
        imgCard.classList.add('img-card_style');
        imgEditLastOne.prepend(imgCard);

        const nameCard = document.createElement('div');
        nameCard.innerText = `Name: ${item.name}`;
        cardCont.append(nameCard);

        const priceCard = document.createElement('div');
        priceCard.innerText = `Price: ${item.price} $`;
        cardCont.append(priceCard);

        const countCard = document.createElement('div');
        countCard.innerText = `Count: ${item.count}`;
        cardCont.append(countCard);

        if (+inputCount.value === 1) {
            lastOneDiv.style.visibility = 'visible';
        };

        const articleCard = document.createElement('div');
        articleCard.innerText = `Article: ${item.article}`;
        cardCont.append(articleCard);

        const creationDateCard = document.createElement('div');
        creationDateCard.innerText = `Date: ${new Date(item.date).toLocaleDateString()}`;
        cardCont.append(creationDateCard);

        if (item.priceSegment === 'cheap') {
            cardCont.style.borderColor = 'grey';
        }
        if (item.priceSegment === 'optimal') {
            cardCont.style.borderColor = 'green';
        }
        if (item.priceSegment === 'premium') {
            cardCont.style.borderColor = 'yellow';
        }

        const showHidedescription = document.createElement('div');
        if (item.description) {
            showHidedescription.innerText = `Show/Hide desc:`;
            showHidedescription.className = 'descCar_inner-text'
            cardCont.append(showHidedescription);

            const descCar = document.createElement('div');
            descCar.innerText = `${item.description}`;
            descCar.classList.add('descCar_style');
            cardCont.append(descCar);

            showHidedescription.addEventListener('click', () => {
                descCar.classList.toggle('desc_display-block');
            });
        };

        const editButton = document.createElement('button');
        editButton.className = 'editLastOne_margin';
        editButton.className = 'edit-button'
        editLastOne.prepend(editButton);

        const iconEdit = document.createElement('i');
        iconEdit.className = 'fa fa-pencil'
        editButton.append(iconEdit)

        editButton.onclick = (event) => {
            event.preventDefault();
            elementOfDelete = item.carID;
            console.log(elementOfDelete)
            document.body.append(editPopUp);
        };

        //редактирование карточки

        const editForm = document.createElement('form');

        const editPopUp = document.createElement('fieldset');
        editPopUp.classList.add('editset')
        editForm.append(editPopUp);

        const legendEditPopUp = document.createElement('legend');
        legendEditPopUp.innerText = 'Edir Card';
        legendEditPopUp.className = 'legendEditPopUp'
        editPopUp.append(legendEditPopUp);

        const labelEditName = document.createElement('label');
        labelEditName.innerText = 'Name';
        editPopUp.append(labelEditName);

        const editName = document.createElement('input');
        editName.type = 'text';
        editName.className = 'main-input_margin';
        editName.value = `${item.name}`;
        labelEditName.prepend(editName);

        const nameInvalidEdit = document.createElement('div');
        nameInvalidEdit.className = 'invalid-value';
        nameInvalidEdit.innerText = 'This input should contain at least 5 character';
        editPopUp.append(nameInvalidEdit);
        nameInvalidEdit.style.visibility = 'hidden';

        const labelEditArticle = document.createElement('label');
        labelEditArticle.innerText = 'Article';
        editPopUp.append(labelEditArticle);

        const editArticle = document.createElement('input');
        editArticle.type = 'text';
        editArticle.value = `${item.article}`;
        editArticle.className = 'main-input_margin';
        labelEditArticle.prepend(editArticle);

        const articleInvalidEdit = document.createElement('div');
        articleInvalidEdit.className = 'invalid-value';
        articleInvalidEdit.innerText = 'The article must begin with a capital Latin letter and then contain at least two digits';
        editPopUp.append(articleInvalidEdit);
        articleInvalidEdit.style.visibility = 'hidden';

        const labelEditPrice = document.createElement('label');
        labelEditPrice.innerText = 'Price';
        editPopUp.append(labelEditPrice);

        const editPrice = document.createElement('input');
        editPrice.type = 'text';
        editPrice.value = `${item.price}`;
        editPrice.className = 'main-input_margin';
        labelEditPrice.prepend(editPrice);

        const priceInvalidEdit = document.createElement('div');
        priceInvalidEdit.className = 'invalid-value';
        priceInvalidEdit.innerText = 'The field must contain only numbers';
        editPopUp.append(priceInvalidEdit);
        priceInvalidEdit.style.visibility = 'hidden';

        const labelEditCount = document.createElement('label');
        labelEditCount.innerText = 'Count';
        editPopUp.append(labelEditCount);

        const editCount = document.createElement('input');
        editCount.type = 'number';
        editCount.value = `${item.count}`;
        editCount.min = 1;
        editCount.className = 'main-input_margin';
        labelEditCount.prepend(editCount);

        const labelEditImg = document.createElement('label');
        labelEditImg.innerText = 'Picture';
        editPopUp.append(labelEditImg);

        const editImg = document.createElement('input');
        editImg.type = 'text';
        editImg.value = `${item.picture}`
        editImg.className = 'main-input_margin';
        labelEditImg.prepend(editImg);

        const goOutButton = document.createElement('button');
        goOutButton.className = 'goOutButton'
        editPopUp.prepend(goOutButton);

        const icon = document.createElement('i');
        icon.className = 'fa fa-times';
        goOutButton.prepend(icon);

        const editSaveButton = document.createElement('button');
        editSaveButton.innerText = 'Save';
        editSaveButton.className = 'save-edit';
        editPopUp.append(editSaveButton);

        goOutButton.addEventListener('click', () => { //скрытие окна
            editPopUp.remove()
        })

        //удаление
        const deleteCard = document.createElement('button');
        deleteCard.innerText = 'Delete';
        deleteCard.className = 'delete-style'
        editPopUp.append(deleteCard);

        deleteCard.addEventListener('click', (event) => {
            event.preventDefault();
            const filteredModel = model.filter((item) => {
                return item.carID != elementOfDelete ? true : false
            })
            model = filteredModel;
            console.log(filteredModel)
            editPopUp.remove();
            createCard(model)
            elementOfDelete = null;
        })

        editName.addEventListener('change', (event) => {
            const name = event.target.value;
            if (name.length < 5) {
                nameInvalidEdit.style.visibility = 'visible';
            } else {
                nameInvalidEdit.style.visibility = 'hidden';
                item.name = name;
            };
        });

        editArticle.addEventListener('change', (event) => {
            const article = event.target.value;
            let aricleValueEdid = editArticle.value;
            let validAricleValueEdit = /([A-Z\.]{1})+[0-9\.]{2,}/;
            if (!validAricleValueEdit.test(aricleValueEdid)) {
                articleInvalidEdit.style.visibility = 'visible';
            } else {
                articleInvalidEdit.style.visibility = 'hidden';
                item.article = article;
            };

        });

        editPrice.addEventListener('change', (event) => {
            const price = event.target.value;
            let priceValueEdit = editPrice.value;
            let validPriceValueEdit = /^[0-9]*[.]?[0-9]+$/
            if (!validPriceValueEdit.test(priceValueEdit)) {
                priceInvalidEdit.style.visibility = 'visible';
            } else {
                priceInvalidEdit.style.visibility = 'hidden';
                item.price = price;
            };

        });

        editCount.addEventListener('change', (event) => {
            const count = event.target.value;
            item.count = count;
            console.log(item.count)
        });

        editImg.addEventListener('change', (event) => {
            const img = event.target.value;
            item.picture = img;
        });

        const validEdit = function () {
            let invalid = true;
            //проверка имени
            if (editName.value.length < 5) {
                nameInvalidEdit.style.visibility = 'visible';
                invalid = false;
            } else {
                nameInvalidEdit.style.visibility = 'hidden';
            };
            //проверка артикля
            let aricleValue = editArticle.value;
            let validAricleValue = /([A-Z\.]{1})+[0-9\.]{2,}/;
            if (!validAricleValue.test(aricleValue)) {
                articleInvalidEdit.style.visibility = 'visible';
                invalid = false;
            } else {
                articleInvalidEdit.style.visibility = 'hidden';
            };
            //проверка price
            let priceValue = editPrice.value;
            let validPriceValue = /^[0-9]*[.]?[0-9]+$/
            if (!validPriceValue.test(priceValue)) {
                priceInvalidEdit.style.visibility = 'visible';
                invalid = false;
            } else {
                priceInvalidEdit.style.visibility = 'hidden';
            };
            if (!invalid) return false;
            else return true;
        }
        // сохранение карточки

        editSaveButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (validEdit()) {
                nameCard.innerText = `Name: ${item.name}`;
                articleCard.innerText = `Article: ${item.article}`;
                priceCard.innerText = `Price: ${item.price} $`;
                countCard.innerText = `Count: ${item.count}`;
                if (+item.count === 1) {
                    lastOneDiv.style.visibility = 'visible';
                } else {
                    lastOneDiv.style.visibility = 'hidden';
                }
                imgCard.style.backgroundImage = `url(${item.picture})`;
                creationDateCard.innerText = `Date: ${new Date().toLocaleDateString()}`;
                editPopUp.remove()
            }
        })
    })
}

if (arrCars.length) {
    createCard();
}

