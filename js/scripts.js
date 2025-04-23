const PRODUCTS = [
    {
      id: '362eb9c8-7d07-476a-891c-7ff627e77070',
      name: 'Waffle',
      title: 'Waffle with Berries',
      price: 6.5,
      imgMobile: './assets/images/image-waffle-mobile.jpg',
      imgTablet: './assets/images/image-waffle-tablet.jpg',
      imgDesktop: './assets/images/image-waffle-desktop.jpg',
      imgThumbnail: './assets/images/image-waffle-thumbnail.jpg',
      alt: 'A waffle tower with sliced strawberries and icing sugar.'
    },
    {
      id: 'af2b4eb6-e180-4e7e-a2c7-221662c7e47b',
      name: 'Crème Brûlée',
      title: 'Vanilla Bean Crème Brûlée',
      price: 7.0,
      imgMobile: './assets/images/image-creme-brulee-mobile.jpg',
      imgTablet: './assets/images/image-creme-brulee-tablet.jpg',
      imgDesktop: './assets/images/image-creme-brulee-desktop.jpg',
      imgThumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
      alt: 'Two dishes of crème brûlée topped with berries, figs and mint.'
    },
    {
      id: 'a8255a6b-87de-4947-a6ec-64169afecd49',
      name: 'Macaron',
      title: 'Macaron Mix of Five',
      price: 8.0,
      imgMobile: './assets/images/image-macaron-mobile.jpg',
      imgTablet: './assets/images/image-macaron-tablet.jpg',
      imgDesktop: './assets/images/image-macaron-desktop.jpg',
      imgThumbnail: './assets/images/image-macaron-thumbnail.jpg',
      alt: 'Five different flavour macarons.'
    },
    {
      id: '14701468-4f6d-49ed-9480-61be223028ac',
      name: 'Tiramisu',
      title: 'Classic Tiramisu',
      price: 5.5,
      imgMobile: './assets/images/image-tiramisu-mobile.jpg',
      imgTablet: './assets/images/image-tiramisu-tablet.jpg',
      imgDesktop: './assets/images/image-tiramisu-desktop.jpg',
      imgThumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      alt: 'A tiramisu topped with berries, mint and cocoa powder.'
    },
    {
      id: '67897043-ff0e-4273-81e9-fec5059dd42b',
      name: 'Baklava',
      title: 'Pistachio Baklava',
      price: 4.0,
      imgMobile: './assets/images/image-baklava-mobile.jpg',
      imgTablet: './assets/images/image-baklava-tablet.jpg',
      imgDesktop: './assets/images/image-baklava-desktop.jpg',
      imgThumbnail: './assets/images/image-baklava-thumbnail.jpg',
      alt: 'Three triangle-shaped baklavas topped with crushed pistachios.'
    },
    {
      id: 'e44fa461-4bbc-4cd6-974f-682e31eb692c',
      name: 'Pie',
      title: 'Lemon Meringue Pie',
      price: 5.0,
      imgMobile: './assets/images/image-meringue-mobile.jpg',
      imgTablet: './assets/images/image-meringue-tablet.jpg',
      imgDesktop: './assets/images/image-meringue-desktop.jpg',
      imgThumbnail: './assets/images/image-meringue-thumbnail.jpg',
      alt: 'A slice of lemon pie coronated with meringue.'
    },
    {
      id: '8ce98d56-f960-4804-ae34-6218fa3bf312',
      name: 'Cake',
      title: 'Red Velvet Cake',
      price: 4.5,
      imgMobile: './assets/images/image-cake-mobile.jpg',
      imgTablet: './assets/images/image-cake-tablet.jpg',
      imgDesktop: './assets/images/image-cake-desktop.jpg',
      imgThumbnail: './assets/images/image-cake-thumbnail.jpg',
      alt: 'Red velvet cake portion with sliced strawberries on the inside and a berry on top.'
    },
    {
      id: '824f63cd-633e-42b6-b43a-3558966d6376',
      name: 'Brownie',
      title: 'Salted Caramel Brownie',
      price: 5.5,
      imgMobile: './assets/images/image-brownie-mobile.jpg',
      imgTablet: './assets/images/image-brownie-tablet.jpg',
      imgDesktop: './assets/images/image-brownie-desktop.jpg',
      imgThumbnail: './assets/images/image-brownie-thumbnail.jpg',
      alt: 'A portion of brownie with vanilla ice cream and caramel syrup.'
    },
    {
      id: '17cbeca7-4958-4b48-81d5-1820c2d42c6d',
      name: 'Cotta',
      title: 'Vanilla Panna Cotta',
      price: 6.5,
      imgMobile: './assets/images/image-panna-cotta-mobile.jpg',
      imgTablet: './assets/images/image-panna-cotta-tablet.jpg',
      imgDesktop: './assets/images/image-panna-cotta-desktop.jpg',
      imgThumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
      alt: 'Two crystal jars of panna cotta with cream.'
    }
  ];

  //ELEMENTOS HTML
  const dessertContainerElement = document.getElementById('desserts-container');
  const buttonsContainer = document.getElementById('filter-buttons');

  

//FUNCIONES

const createDessertCard = (dessert) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('card');

    //imagenes

    const pictureElement = document.createElement('picture'); //aqui metere los source y el img

    const sourceElementMobile= document.createElement('source');
    sourceElementMobile.setAttribute('media', '(max-width: 360px)');
    sourceElementMobile.setAttribute('srcset', dessert.imgMobile);

    const sourceElementTablet = document.createElement('source');
    sourceElementTablet.setAttribute('media', '(max-width: 760px)');
    sourceElementTablet.setAttribute('srcset', dessert.imgTablet);
    
    const sourceElementDesktop = document.createElement('source');
    sourceElementDesktop.setAttribute('media', '(min-width: 1440px)');
    sourceElementDesktop.setAttribute('srcset', dessert.imgDesktop);

    const imgElement = document.createElement('img');
    imgElement.classList.add('product-image');
    imgElement.setAttribute('src', dessert.imgMobile);
    imgElement.setAttribute('alt', dessert.alt);

    //meto todo
    pictureElement.appendChild(sourceElementMobile);
    pictureElement.appendChild(sourceElementTablet);
    pictureElement.appendChild(sourceElementDesktop);
    pictureElement.appendChild(imgElement);

    //botones
    const button = document.createElement('button');
    button.classList.add('button-add-to-cart');

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.setAttribute('src', './assets/images/icon-add-to-cart.svg');
    icon.setAttribute('alt', 'cart icon');

    const buttonText = document.createElement('span');
    buttonText.textContent = 'Add to cart';

    button.appendChild(icon);
    button.appendChild(buttonText);

    //textos
    const textContainer = document.createElement('div');
    textContainer.classList.add('card-text-container');
  
    const subtitle = document.createElement('span');
    subtitle.classList.add('product-subtitle');
    subtitle.textContent = dessert.name;
  
    const title = document.createElement('span');
    title.classList.add('product-title');
    title.textContent = dessert.title;
  
    const price = document.createElement('span');
    price.classList.add('product-price');
    price.textContent = `$${dessert.price}`;

    textContainer.appendChild(subtitle);
    textContainer.appendChild(title);
    textContainer.appendChild(price);


    //meter al article
    articleElement.appendChild(pictureElement);
    articleElement.appendChild(button);
    articleElement.appendChild(textContainer);


    return articleElement; //esto lo va a recibir mi contenedro en el foreach
}

  //copias del array
  const filterDesserts = [...PRODUCTS];

// filterDesserts.forEach(dessert => {
//     const card = createDessertCard(dessert); //llamo a la funcion
//     fragment.appendChild(card);//meto la card al contenedor
//   }
//   );

const fragment = document.createDocumentFragment(); //creo un fragmento para no estar metiendo al contenedor cada vez que cree una card

  // Recorro el array de productos y creo una card por cada uno
PRODUCTS.forEach(dessert => {
    const card = createDessertCard(dessert); //llamo a la funcion
    fragment.appendChild(card);//meto la card al contenedor
  });

  dessertContainerElement.appendChild(fragment); //meto el fragmento al contenedor

handleClick = (event) => {
    const clickedButton = event.target;
    buttonsContainer.children.forEach((button) => {
        button.classList.remove('active');
    }); //que empiecen todos en false

    clickedButton.classList.add('active'); //agrego la clase active al boton que se clickeo

    if(clickedButton.dataset.filter==='default'){
    } //imprimo el primer array
    else if(clickedButton.dataset.filter==='cakes'){
        filterDesserts.filter((dessert) => dessert.name === 'Cake');
    } 
    else if(clickedButton.dataset.filter==='pastries'){
        filterDesserts.filter((dessert) => dessert.name === 'Pastry');
    } 


    console.log(clickedButton);
}

//eventos
buttonsContainer.addEventListener('click', handleClick);