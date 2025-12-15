// Основная инициализация
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM загружен');

    // Исправление кодировки для русского текста
    document.documentElement.setAttribute('lang', 'ru');
    document.documentElement.setAttribute('xml:lang', 'ru');

    // Установка мета-тега кодировки
    let metaCharset = document.querySelector('meta[charset]');
    if (!metaCharset) {
        metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');
        document.head.prepend(metaCharset);
    }

    // Инициализация всех функций
    setTimeout(initPage, 100);
});

function initPage() {
    console.log('Инициализация страницы...');

    // 1. Анимации текста навигации
    initTextAnimations();

    // 2. Анимации фоновых изображений
    initBackgroundAnimations();

    // 3. Анимации проекта
    initProjectAnimations();

    // 4. Анимация появления страницы
    initPageAppearance();

    // 5. Инициализация курсора для логотипа
    initLogoCursorInteraction();

    // 6. Инициализация блока ARI
    initAriBlock();

    console.log('Все анимации инициализированы');
}

// 1. Анимации текста навигации
function initTextAnimations() {
    const navLinks = document.querySelectorAll('.nav-link.hover-group');
    console.log('Найдено навигационных ссылок:', navLinks.length);

    navLinks.forEach(link => {
        const letters = link.querySelectorAll('.letter');

        link.addEventListener('mouseenter', function () {
            letters.forEach((letter, index) => {
                letter.style.transform = 'translateY(-100%)';
                letter.style.transitionDelay = `${index * 0.03}s`;
                letter.style.transition = 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)';
            });
        });

        link.addEventListener('mouseleave', function () {
            letters.forEach((letter, index) => {
                letter.style.transform = 'translateY(0)';
                letter.style.transitionDelay = `${index * 0.03}s`;
            });
        });
    });
}

// 2. Анимации фоновых изображений
function initBackgroundAnimations() {
    // Эти изображения будут появляться при наведении на навигацию
    const backgroundImages = {
        'store': 'images/R2_2.jpg',
        'projects': 'images/02_-_02_1_1.jpg',
        'manifest': 'images/photo.png',
        'contacts': 'images/_1.png'
    };

    // Создаем контейнер для фоновых изображений
    const bgContainer = document.createElement('div');
    bgContainer.id = 'background-images-container';
    document.body.appendChild(bgContainer);

    // Добавляем фоновые изображения (скрытые)
    Object.keys(backgroundImages).forEach(key => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'bg-image';
        imgDiv.dataset.nav = key;
        imgDiv.style.backgroundImage = `url('${backgroundImages[key]}')`;
        bgContainer.appendChild(imgDiv);
    });

    // Назначаем обработчики наведения
    const navElements = {
        'store': document.getElementById('nav-store'),
        'projects': document.getElementById('nav-projects'),
        'manifest': document.getElementById('nav-manifest'),
        'contacts': document.getElementById('nav-contacts')
    };

    Object.keys(navElements).forEach(key => {
        const navElement = navElements[key];
        const bgImage = document.querySelector(`.bg-image[data-nav="${key}"]`);

        if (navElement && bgImage) {
            navElement.addEventListener('mouseenter', () => {
                document.querySelectorAll('.bg-image').forEach(img => {
                    img.style.opacity = '0';
                });
                bgImage.style.opacity = '1';
            });

            navElement.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    bgImage.style.opacity = '0';
                }, 300);
            });
        }
    });
}

// 3. Анимации проекта
function initProjectAnimations() {
    const projectElement = document.getElementById('project-stand-bif');

    if (projectElement) {
        const arrow = projectElement.querySelector('.project-arrow img');

        projectElement.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-50%) scale(1.02)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';

            if (arrow) {
                arrow.style.transform = 'rotate(90deg)';
            }
        });

        projectElement.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-50%) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';

            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// 4. Взаимодействие курсора с логотипом
function initLogoCursorInteraction() {
    const logo = document.getElementById('central-logo');

    if (!logo) return;

    // Создаем интерактивную область
    logo.style.cursor = 'pointer';
    logo.style.transition = 'transform 0.3s ease';

    // Эффект при наведении
    logo.addEventListener('mouseenter', function () {
        this.style.transform = 'translate(-50%, -50%) scale(1.05)';
    });

    logo.addEventListener('mouseleave', function () {
        this.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Клик по логотипу
    logo.addEventListener('click', function () {
        window.location.href = 'https://art-mnfst.com';
    });

    // Слежение за курсором (опционально)
    document.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Легкий параллакс эффект
        logo.style.transform = `translate(-50%, -50%) translate(${x * 10}px, ${y * 10}px)`;
    });
}

// 5. Функциональность для блока ARI
function initAriBlock() {
    const ariBlock = document.getElementById('ari-info');
    const projectLink = document.querySelector('.ari-project');

    if (!ariBlock) return;

    // Делаем блок интерактивным
    ariBlock.style.cursor = 'default';
    ariBlock.style.transition = 'all 0.3s ease';

    // Эффект при наведении на весь блок
    ariBlock.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.opacity = '0.95';
    });

    ariBlock.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.opacity = '1';
    });

    // Клик по проекту в блоке ARI
    if (projectLink) {
        projectLink.style.cursor = 'pointer';
        projectLink.style.transition = 'all 0.3s ease';

        projectLink.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(-5px)';
            this.style.opacity = '0.8';
        });

        projectLink.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
            this.style.opacity = '1';
        });

        projectLink.addEventListener('click', function () {
            window.location.href = 'https://art-mnfst.com/stand-bif';
        });
    }

    // Добавляем возможность скрытия на мобильных
    if (window.innerWidth < 768) {
        ariBlock.addEventListener('click', function () {
            this.classList.toggle('collapsed');
        });
    }
}

// 6. Анимация появления страницы
function initPageAppearance() {
    const allRecords = document.getElementById('allrecords');

    if (allRecords) {
        allRecords.style.opacity = '0';

        setTimeout(() => {
            allRecords.style.opacity = '1';
        }, 100);

        if (!sessionStorage.getItem('visited')) {
            sessionStorage.setItem('visited', 'true');
        }
    }
}

// Адаптация под разные экраны
function handleResize() {
    const screenWidth = window.innerWidth;
    const centralLogo = document.getElementById('central-logo');
    const navigationContainer = document.getElementById('navigation-container');
    const ariBlock = document.getElementById('ari-info');

    if (centralLogo) {
        if (screenWidth < 768) {
            centralLogo.style.width = '60%';
        } else if (screenWidth < 1200) {
            centralLogo.style.width = '40%';
        } else {
            centralLogo.style.width = '512px';
        }
    }

    // Адаптация навигации
    if (screenWidth < 768 && navigationContainer) {
        navigationContainer.style.padding = '0 2%';
    } else if (navigationContainer) {
        navigationContainer.style.padding = '0 5%';
    }

    // Адаптация блока ARI
    if (ariBlock) {
        if (screenWidth < 768) {
            // На мобильных меняем позиционирование
            ariBlock.style.position = 'relative';
            ariBlock.style.top = 'auto';
            ariBlock.style.right = 'auto';
            ariBlock.style.maxWidth = '100%';
            ariBlock.style.textAlign = 'center';
        } else {
            // На десктопе возвращаем в правый верхний угол
            ariBlock.style.position = 'absolute';
            ariBlock.style.top = '30px';
            ariBlock.style.right = '30px';
            ariBlock.style.maxWidth = '400px';
            ariBlock.style.textAlign = 'right';
        }
    }
}

// Обработка ошибок Spline
function handleSplineErrors() {
    const splineContainer = document.getElementById('spline-container');
    if (splineContainer) {
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('error')) {
                        console.warn('Spline загрузка не удалась, показываем запасной фон');
                        splineContainer.style.background = '#f2f2f2';
                    }
                }
            });
        });

        observer.observe(splineContainer, { attributes: true });
    }
}

// Инициализация при полной загрузке
window.addEventListener('load', function () {
    console.log('Страница полностью загружена');

    // Запускаем адаптацию
    handleResize();

    // Обработка ошибок Spline
    handleSplineErrors();

    // Ресайз
    window.addEventListener('resize', handleResize);

    // Проверка кодировки
    console.log('Кодировка документа:', document.characterSet);
});

// Убираем Яндекс.Метрику для локального тестирования
if (window.location.protocol === 'file:') {
    window['yaCounter'] = null;
}