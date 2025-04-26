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
const shoppingCartElement = document.getElementById('shopping-cart');

//VARIABLES
let cart = [];
let quantity = 0;

//FUNCIONES

// const productSummary = () => {
//   const productTag = document.createElement('div');

const incrementQuantity = dessert => {
  const existingDessert = defineIfDessertExists(dessert);

  if (existingDessert) {
    existingDessert.quantity += 1; // Incrementa la cantidad
    const articleCard = document.getElementById(dessert.id);
    const quantityTextActive = articleCard.children[2].children[1]; // Accede al span de cantidad dentro del botón activo
    if (quantityTextActive) {
      quantityTextActive.textContent = existingDessert.quantity; // Actualiza el texto del botón activo
    }
  }

  console.log(cart);
};

const decrementQuantity = dessert => {
  const existingDessert = defineIfDessertExists(dessert);

  if (existingDessert) {
    existingDessert.quantity -= 1; // resta la cantidad

    const articleCard = document.getElementById(dessert.id);
    const quantityTextActive = articleCard.children[2].children[1]; // Accede al span de cantidad dentro del botón activo
    if (quantityTextActive) {
      quantityTextActive.textContent = existingDessert.quantity; // Actualiza el texto del botón activo
    }
  }
  if (existingDessert.quantity <= 0) {
    removeFromCart(dessert);
  }
  console.log(cart);
};

const removeFromCart = dessert => {
  //le tengo que indicar cual es cada boton porque hasta ahora en esta funcion no existian
  const articleCard = document.getElementById(dessert.id);
  const buttonAddToCart = articleCard.children[1];
  const buttonActive = articleCard.children[2];

  //Elimina del carrito
  cart = cart.filter(item => item.id !== dessert.id);

  buttonAddToCart.classList.remove('hide');
  buttonActive.classList.add('hide');

  const pictureElement = articleCard.children[0].children[3];
  pictureElement.style.border = 'none'; // borde de color
};

const addToCart = (dessert, buttonAddToCart, buttonActive) => {
  const exist = cart.some(item => item.id === dessert.id); //si el id del dessert es el mismo que el item, existe en el carrito

  if (!exist) {
    //si no existe, continua
    cart.push({ ...dessert, quantity: 1 });

    // voy a reiniciar el contador cada que agregue un producto
    const articleCard = document.getElementById(dessert.id);
    const quantityTextActive = articleCard.children[2].children[1];
    if (quantityTextActive) {
      quantityTextActive.textContent = 1;
    }

    buttonAddToCart.classList.add('hide');
    buttonActive.classList.remove('hide');

    const pictureElement = articleCard.children[0].children[3];
    pictureElement.style.border = '3px solid var(--color-primary)'; // borde de color
  }

  //ocultar el mensaje de carrito vacío
  const emptyCartElement = document.getElementById('empty-cart');
  if (cart.length > 0) {
    emptyCartElement.classList.add('hide');
  } else {
    emptyCartElement.classList.remove('hide');
  }

  // console.log(cart);
  // console.log(buttonAddToCart);
};

const defineIfDessertExists = dessert => {
  const existingDessert = cart.find(item => item.id === dessert.id); // Busca el producto en el carrito
  return existingDessert;
};

const createDessertCard = dessert => {
  const articleElement = document.createElement('article');
  articleElement.classList.add('card');
  articleElement.id = dessert.id; // Agrega el ID del producto al dataset

  //imagenes

  const pictureElement = document.createElement('picture'); //aqui metere los source y el img

  const sourceElementMobile = document.createElement('source');
  sourceElementMobile.media = '(max-width: 360px)';
  sourceElementMobile.srcset = dessert.imgMobile;

  const sourceElementTablet = document.createElement('source');
  sourceElementTablet.media = '(max-width: 760px)';
  sourceElementTablet.srcset = dessert.imgTablet;

  const sourceElementDesktop = document.createElement('source');
  sourceElementDesktop.media = '(min-width: 1440px)';
  sourceElementDesktop.srcset = dessert.imgDesktop;

  const imgElement = document.createElement('img');
  imgElement.classList.add('product-image');
  imgElement.srcset = dessert.imgMobile;
  imgElement.alt = dessert.alt;

  //meto todo
  pictureElement.appendChild(sourceElementMobile);
  pictureElement.appendChild(sourceElementTablet);
  pictureElement.appendChild(sourceElementDesktop);
  pictureElement.appendChild(imgElement);

  //botones
  const buttonAddToCart = document.createElement('button');

  buttonAddToCart.classList.add('button-add-to-cart');

  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.srcset = './assets/images/icon-add-to-cart.svg';
  icon.alt = 'cart icon';

  const buttonText = document.createElement('span');
  buttonText.classList.add('add-to-cart-button');
  buttonText.textContent = 'Add to cart';

  //boton activo

  const buttonActive = document.createElement('div');
  buttonActive.classList.add('button-add-to-cart-active');
  buttonActive.classList.add('hide');

  //condicion de ocultar cuando ya existe en el carrito
  const productExists = defineIfDessertExists(dessert);
  if (productExists) {
    buttonAddToCart.classList.add('hide');
    buttonActive.classList.remove('hide');
  }

  const buttonPlus = document.createElement('button');
  buttonPlus.classList.add('button-add-reduce');

  const iconPlus = document.createElement('img');
  iconPlus.classList.add('icon-add-reduce');
  iconPlus.srcset = 'assets/images/icon-increment-quantity.svg';
  iconPlus.alt = 'plus icon';

  const quantityTextActive = document.createElement('span');
  if (productExists) {
    quantityTextActive.textContent = `${productExists.quantity}`; //aqui le voy a poner el valor de la cantidad
  } else {
    quantityTextActive.textContent = 1; //aqui le voy a poner el valor de la cantidad
  }

  const buttonReduce = document.createElement('button');
  buttonReduce.classList.add('button-add-reduce');

  const iconReduce = document.createElement('img');
  iconReduce.classList.add('icon-add-reduce');
  iconReduce.srcset = 'assets/images/icon-decrement-quantity.svg';
  iconReduce.alt = 'reduce icon';

  buttonAddToCart.append(icon);
  buttonAddToCart.append(buttonText);

  buttonPlus.append(iconPlus);
  buttonReduce.append(iconReduce);

  buttonActive.append(buttonReduce);
  buttonActive.append(quantityTextActive);
  buttonActive.append(buttonPlus);

  buttonAddToCart.addEventListener(
    'click',
    event => addToCart(dessert, event.target, buttonActive) //si agrego event no sirve
  ); //tiene que recibir el evento, y los botones para detectarlos
  buttonPlus.addEventListener('click', event => incrementQuantity(dessert));
  buttonReduce.addEventListener('click', event => decrementQuantity(dessert));

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
  price.textContent = `$${dessert.price.toFixed(2)}`;

  textContainer.append(subtitle);
  textContainer.append(title);
  textContainer.append(price);

  //meter al article
  articleElement.append(pictureElement);
  articleElement.append(buttonAddToCart);
  articleElement.append(buttonActive);
  articleElement.append(textContainer);

  return articleElement; //esto lo va a recibir mi contenedor en el foreach
};
const printDesserts = products => {
  dessertContainerElement.textContent = '';
  const fragment = document.createDocumentFragment(); //creo un fragmento para no estar metiendo al contenedor cada vez que cree una card

  // Recorro el array de productos y creo una card por cada uno
  products.forEach(dessert => {
    const card = createDessertCard(dessert); //llamo a la funcion
    fragment.appendChild(card); //meto la card al contenedor
  });

  dessertContainerElement.appendChild(fragment); //meto el fragmento al contenedor
};

const sortDesserts = () => {
  const filter = buttonsContainer.querySelector('.active').dataset.filter; //obtengo el valor del data-filter del boton activo
  const filteredDesserts = [...PRODUCTS]; //hago una copia del array original

  if (filter === 'name') {
    filteredDesserts.sort((a, b) => a.title.localeCompare(b.title)); //ordeno el array por nombre
    printDesserts(filteredDesserts);
  } else if (filter === 'price') {
    filteredDesserts.sort((a, b) => a.price - b.price); //ordeno el array por precio
    printDesserts(filteredDesserts);
  } else if (filter === 'default') {
    printDesserts(PRODUCTS); //imprimo el array original
  }
};

const changeFilter = event => {
  const clickedButton = event.target;
  [...buttonsContainer.children].forEach(button => {
    button.classList.remove('active');
  }); //que empiecen todos en false

  clickedButton.classList.add('active'); //agrego la clase active al boton que se clickeo

  //sort
  sortDesserts();
};

sortDesserts();

//eventos
buttonsContainer.addEventListener('click', changeFilter);
