// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('mobileMenu')?.classList.remove('active');
            document.getElementById('menuOverlay')?.classList.remove('active');
            document.getElementById('burgerBtn')?.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Мобильное меню
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
}

if (burgerBtn) burgerBtn.addEventListener('click', toggleMenu);
if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);

// Анимация появления
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

animatedElements.forEach(el => observer.observe(el));

// Swiper для отзывов
new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.reviews-swiper-button-next', prevEl: '.reviews-swiper-button-prev' },
    breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 }
    }
});

// ========== МОДАЛЬНЫЕ ОКНА ==========
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');

const modalData = {
    // Пакеты
    standart: {
        title: 'Пакет "СТАНДАРТ"',
        price: '15 900 ₽',
        desc: '<ul><li>3 часа в банкетной комнате и в игровой для всех гостей (до 12 детей)</li><li>Анимационная программа (1 час) или шоу мыльных пузырей, или МК на выбор</li><li>Сладкая вата для всех маленьких гостей</li><li>По жетону каждому ребенку для игры в автоматы</li><li>Бумажная дискотека</li></ul><p><strong>П.С.</strong> Вместо анимационной программы можно добавить нёрф-вечеринку (+1500 руб)</p>',
        img: 'https://placehold.co/600x400/00A6B6/white?text=Пакет+Стандарт'
    },
    popular: {
        title: 'Пакет "ПОПУЛЯРНЫЙ"',
        price: '18 900 ₽',
        desc: '<ul><li>3 часа в банкетной комнате и в игровой для всех гостей (до 12 детей)</li><li>Анимационная программа (1 час) или шоу мыльных пузырей, или МК на выбор</li><li>Сладкая вата для всех маленьких гостей</li><li>30 жетонов для игры в автоматы</li><li>Интерактивные игры (интерактивная стена)</li><li>Фигурки из шариков для всех гостей</li><li>Бумажная дискотека (неоновая)</li></ul><p><strong>П.С.</strong> Вместо анимационной программы можно добавить нёрф-вечеринку (+1500 руб)</p>',
        img: 'https://placehold.co/600x400/FF5B33/white?text=Пакет+Популярный'
    },
    bezkhlopot: {
        title: 'Пакет "БЕЗ ХЛОПОТ"',
        price: '22 500 ₽',
        desc: '<ul><li>3 часа в банкетной комнате и в игровой для всех гостей</li><li>Анимационная программа (1 час) или шоу мыльных пузырей, или МК на выбор</li><li>Интерактивные игры на проекторе</li><li>Фотограф (1 час)</li><li>Сладкая вата для всех маленьких гостей</li><li>40 жетонов для игры в автоматы</li><li>Цветная бумажная дискотека (неоновая)</li><li>Фигурки из шариков</li></ul><p><strong>*</strong> Вместо анимационной программы можно добавить нёрф-вечеринку (+1500 руб)</p>',
        img: 'https://placehold.co/600x400/2C4E94/white?text=Пакет+Без+Хлопот'
    },
    samiy: {
        title: 'Пакет "САМЫЙ-САМЫЙ"',
        price: '41 000 ₽',
        desc: '<ul><li>Игровая закрывается для посетителей (только вы и ваши гости)</li><li>3 часа в банкетной комнате и в игровой для всех гостей</li><li>Анимационная программа (1 час, 1 аниматор до 15 детей)</li><li>Интерактивные игры на проекторе</li><li>Оформление из шаров (Цифра, фигура и два фонтана по 10 шаров)</li><li>Сладкая вата для всех маленьких гостей</li><li>40 жетонов для игры в автоматы</li><li>Цветная бумажная дискотека (неоновая)</li><li>Фигурки из шариков</li><li>До 25 детей!*</li></ul><p><strong>*</strong> Если детей больше 15 человек, доплата за второго аниматора +2500р. Доплата за каждого ребёнка свыше 25 - 1000р.</p>',
        img: 'https://placehold.co/600x400/FF9E18/white?text=Пакет+Самый-Самый'
    },
    arend2: {
        title: 'Аренда банкетной комнаты 2 часа',
        price: '8 000 ₽',
        desc: '<p>2 часа аренды банкетной комнаты. В вашем распоряжении будет банкетная комната, а также вся игровая. До 12 детей.</p><p><strong>Доступно только с понедельника по четверг!</strong></p>',
        img: 'https://placehold.co/600x400/55947F/white?text=Аренда+2ч'
    },
    arend3: {
        title: 'Аренда банкетной комнаты 3 часа',
        price: '11 900 ₽',
        desc: '<p>3 часа аренды банкетной комнаты. В вашем распоряжении будет банкетная комната, а также вся игровая. До 12 детей.</p>',
        img: 'https://placehold.co/600x400/F2727E/white?text=Аренда+3ч'
    },
    // Услуги
    nerf: {
        title: 'Нёрф вечеринка',
        price: '4 000 ₽',
        desc: '<p>Программа для самых смелых, быстрых и активных детей! Ведущий проверит боевую подготовку участников, научит правильно обращаться с оружием (игрушечным), поднимет боевой дух команды!</p><ul><li>Начальные этапы боевой подготовки</li><li>Задания от военного генерала</li><li>Строительство баз из поролоновых кубиков</li><li>Стреляние по разным мишеням</li><li>Итоговая перестрелка</li></ul><p>Программа для детей от 6 до 14 лет. Количество участников до 20 человек. Продолжительность 45 минут.</p>',
        img: 'img/service/nerf.jpg'
    },
    interaktiv: {
        title: 'Интерактивные игры',
        price: '3 500 ₽',
        desc: '<p>НОВИНКА!!! Интерактивные игры с проектором. Увлекательные игры для детей всех возрастов.</p>',
        img: 'img/service/interactive.jpg'
    },
    disco: {
        title: 'Неоновая дискотека',
        price: '3 400 ₽',
        desc: '<p>Блестящий финал для любого праздника. В водоворот ныряют не только дети, но и взрослые. Под хитовую цветомузыку можно танцевать, баловаться, забрасывать друг друга лентами, закапываться в сугробы, фотографироваться...</p><ul><li>Полоски не режут пальцы</li><li>Они не пачкают одежду и руки</li><li>Совсем не пылят</li></ul><p>Подходит для детей от 2 лет и до 100. Длительность - 30 минут.</p>',
        img: 'img/service/disco.jpg'
    },
    beauty: {
        title: 'Бьюти-бар',
        price: '5 500 ₽',
        desc: '<p>Развлечение для современных девочек! Много розового, красок, блёсток. До 10 человек.</p>',
        img: 'img/service/beauty.jpg'
    },
    crio: {
        title: 'Крио-шоу',
        price: '5 000 ₽',
        desc: '<p>Если ребёнку наскучила анимационная программа, можно пригласить ведущего для проведения "Крио-шоу". Позвольте себе расслабиться и забыть про айфон на праздник.</p><p>Продолжительность поздравления: 15-20 минут.</p><p>Сюда входит: торжественное вручение подарка, музыкальное сопровождение, зажигательные танцы с гостями, фото с куклой на память, обнимашки.</p>',
        img: 'img/service/crioshow.jpg'
    },
    foto: {
        title: 'Фотограф Наталья Лаутар',
        price: '5 000 ₽',
        desc: '<p>Фотограф запечатлит самые яркие моменты и эмоции вашего ребёнка. Цена за 1 час съёмки.</p>',
        img: 'img/service/photograph.jpg'
    },
    rost: {
        title: 'Ростовые куклы',
        price: '3 000 ₽',
        desc: '<p>Яркие ростовые куклы создадут праздничное настроение и порадуют детей.</p>',
        img: 'img/service/doll.jpg'
    },
    chocolate: {
        title: 'Шоколадный фонтан',
        price: '6 000 ₽',
        desc: '<p>Эксклюзивное украшение для любого праздника! В комплекте: очень вкусный молочный шоколад (1кг), печенье, маршмеллоу, сервировка (шпажки, салфетки, посуда).</p>',
        img: 'img/service/fontain.jpg'
    },
    slime: {
        title: 'Мастер-класс по изготовлению слайма',
        price: '3 000 ₽',
        desc: '<p>Каждый ребёнок сможет сделать уникальный слайм и забрать с собой домой. Стоимость 3000 руб (до 10 участников). Можем в программу включить квест по поиску уникального рецепта + баттл — стоимость 3900 руб (до 10 участников).</p>',
        img: 'img/service/slime.jpg'
    },
    vata: {
        title: 'Мастер-класс по приготовлению сладкой ваты',
        price: '2 000 ₽',
        desc: '<p>Прелесть такого мастер–класса в том, что под руководством ведущего, дети смогут приготовить себе порцию волшебной сладости. В конце именинника ждёт сюрприз в виде "ВАТЫ-ГИГАНТА". Продолжительность – 30-45 минут. До 10 участников.</p>',
        img: 'img/service/candy.jpg'
    },
    blesk: {
        title: 'Блеск-тату',
        price: '150 ₽',
        desc: '<p>Яркое украшение для девочек и мальчиков. Мега мерцающие блестки.</p>',
        img: 'img/service/tattoo.jpg'
    },
    aqua: {
        title: 'Аквагрим',
        price: '300 ₽',
        desc: '<p>Детский аквагрим — яркие рисунки на лице для создания праздничного образа.</p>',
        img: 'img/service/auquagrim.jpg'
    }
};

// СПИСОК ID ПАКЕТНЫХ ПРЕДЛОЖЕНИЙ (У НИХ НЕ БУДЕТ КАРТИНКИ)
const packageIds = ['standart', 'popular', 'bezkhlopot', 'samiy', 'arend2', 'arend3'];

function openModal(id) {
    const data = modalData[id];
    if (data) {
        modalTitle.textContent = data.title;
        modalPrice.textContent = data.price;
        modalDesc.innerHTML = data.desc;
        
        // Проверяем, является ли текущая модалка пакетом
        if (packageIds.includes(id)) {
            // Для пакетов — скрываем картинку и убираем её src
            modalImg.style.display = 'none';
            modalImg.src = '';
        } else {
            // Для доп. услуг — показываем картинку и ставим src
            modalImg.style.display = 'block';
            modalImg.src = data.img;
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('package-btn')) return;
        const modalId = card.getAttribute('data-modal');
        openModal(modalId);
    });
});

document.querySelectorAll('.package-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('[data-modal]');
        if (card) {
            const modalId = card.getAttribute('data-modal');
            openModal(modalId);
        }
    });
});

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ========== ФОТОГАЛЛЕРЕЯ С ЛАЙТРУМОМ (поддержка разных папок на разных страницах) ==========
const galleryGrid = document.getElementById('galleryGrid');

// Словарь подписей для папок
const folderTitles = {
    'deriglazova1': 'Таинственный Хогвартс',
    'deriglazova2': 'День Рождения',
    'deriglazova3': 'Нерф вечеринка',
    'deriglazova4': 'Мастер класс',
    'deriglazova5': 'Активности',
    'deriglazova6': 'Праздник',
    'europa1': 'Электрошоу',
    'europa2': 'Арт вечеринка',
    'europa3': 'День Рождения',
    'europa4': 'Сладкая вата',
    'europa5': 'Активности',
    'europa6': 'День Рождения'
};

// Читаем папки из data-атрибута или используем стандартные
let galleriesFolders = galleryGrid?.getAttribute('data-gallery-folders');
let galleries = [];

if (galleriesFolders) {
    try {
        const folderNames = JSON.parse(galleriesFolders);
        galleries = folderNames.map(folder => ({
            folder: folder,
            count: 5,
            title: folderTitles[folder] || folder.replace(/[0-9]/g, '').toUpperCase() || 'Фотогалерея'
        }));
    } catch(e) {
        console.warn('Ошибка парсинга data-gallery-folders, используем стандартные папки');
    }
}

// Если не заданы — используем стандартные папки
if (galleries.length === 0) {
    galleries = [
        { folder: '1', count: 5, title: 'Таинственный Хогвартс' },
        { folder: '2', count: 5, title: 'День Рождения' },
        { folder: '3', count: 5, title: 'Нерф вечеринка' },
        { folder: '4', count: 5, title: 'Мастер класс' },
        { folder: '5', count: 5, title: 'Активности' },
        { folder: '6', count: 5, title: 'Праздник' }
    ];
}

function getImagesForFolder(folder, count) {
    const images = [];
    for (let i = 1; i <= count; i++) {
        images.push(`img/photo/${folder}/${i}.jpg`);
    }
    return images;
}

function buildGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    
    galleries.forEach(gallery => {
        const images = getImagesForFolder(gallery.folder, gallery.count);
        if (images.length === 0) return;
        
        const polaroid = document.createElement('div');
        polaroid.className = 'gallery-polaroid animate-on-scroll';
        
        const img = document.createElement('img');
        img.src = images[0];
        img.alt = gallery.title;
        img.loading = 'lazy';
        
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.innerHTML = `<i class="fas fa-images"></i> ${gallery.title}`;
        
        polaroid.appendChild(img);
        polaroid.appendChild(caption);
        
        polaroid.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(images, gallery.title);
        });
        
        galleryGrid.appendChild(polaroid);
    });
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                galleryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.gallery-polaroid').forEach(el => galleryObserver.observe(el));
}

let currentLightbox = null;

function openLightbox(images, title) {
    if (currentLightbox) {
        currentLightbox.destroy();
    }
    
    let lgContainer = document.getElementById('lightbox-container');
    if (!lgContainer) {
        lgContainer = document.createElement('div');
        lgContainer.id = 'lightbox-container';
        document.body.appendChild(lgContainer);
    }
    lgContainer.innerHTML = '';
    
    images.forEach(src => {
        const div = document.createElement('div');
        div.setAttribute('data-src', src);
        div.setAttribute('data-sub-html', `<h4 style="color:#fff;">${title}</h4>`);
        lgContainer.appendChild(div);
    });
    
    currentLightbox = lightGallery(lgContainer, {
        selector: 'div',
        plugins: [lgZoom],
        speed: 400,
        zoom: true,
        download: false,
        counter: true,
        loop: true
    });
    
    currentLightbox.openGallery(0);
}

document.addEventListener('DOMContentLoaded', buildGallery);