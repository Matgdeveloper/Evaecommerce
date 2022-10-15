//função chamada do Slide

var swiper = new Swiper(".slide-principal", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
});


var swiper = new Swiper(".slide-destaques", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        319:{
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1050: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    },
});

// função dropdown categorias

const btnDropDown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropDown(event){
    event.preventDefault();
    
    dropdown.classList.toggle('active');
}

btnDropDown.addEventListener('click', openDropDown);

dropdown.addEventListener('mouseleave', openDropDown);

// função menu lateral direito

const btnOpenMenu = document.querySelector('.js-btn-menu');
const openMenu = document.querySelector('.js-menu-lateral');

function openMenuLateral(event){
    event.preventDefault();
    
    openMenu.classList.toggle('active')
}

btnOpenMenu.addEventListener('click', openMenuLateral);

openMenu.addEventListener('mouseleave', openMenuLateral);

// Requisição Api 


function creatCardProdutos(nome, imagem, preco, precoPromocional){
    console.log(nome);
}


function listingProducts(urlApi) {
    axios({
        method: 'GET',
        url: urlApi
    })
    .then((response)=>{
        const result = response.data
        const item = []
        
    
        for (let i of result){
            item.push({
                "nome" : i.name,
                "imagem" : i.images_products,
                "preco" : i.price,
                "precoPromocional" : i.promotional_price,
            })
        }
    })
}

listingProducts('https://www.eva-test-api.plataformaeva.com/products');

