// ==UserScript==
// @name         HopperXT
// @namespace    http://tampermonkey.net/
// @version      
// @description  XT skin for hopper
// @author       Shiz0v@l-Team
// @match        https://*.test-eu.tankionline.com/browser-public/index.html?*
// @match        https://*.tankionline.com/play*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolf.ua
// @require      https://cdn.jsdelivr.net/npm/@trim21/gm-fetch
// @grant        GM.xmlHttpRequest
// ==/UserScript==

function findGetParameter(parameterName)
{
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item)
        {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

const RESOURCE_URL = `${findGetParameter('resources') || 'https://s.eu.tankionline.com'}/`;

const RESOURCE_OVERRIDE = [
    // hoppper xt
    {
        from: `https://s.eu.tankionline.com/564/5207/367/304/30545000710771/lightmap-astc.ktx`,
        to: `https://s.eu.tankionline.com/564/41402/173/47/30545000710666/lightmap-astc.ktx`,
        external: true
    },
    {
        from: `https://s.eu.tankionline.com/564/5207/367/304/30545000710771/object.3ds`,
        to: `https://s.eu.tankionline.com/564/41402/173/47/30545000710666/object.3ds`,
        external: true
    },
    {
        from: `https://s.eu.tankionline.com/564/5207/367/304/30545000710771/meta.info`,
        to: `https://s.eu.tankionline.com/564/41402/173/47/30545000710666/meta.info`,
        external: true
    }
];

const originalFetch = unsafeWindow.fetch;

// Вставляем код для создания меню
const menuButton = document.createElement('button');
menuButton.textContent = 'Открыть меню';
menuButton.style.position = 'fixed';
menuButton.style.bottom = '20px';
menuButton.style.right = '20px';
menuButton.style.zIndex = '9999'; // Помещаем поверх других элементов на странице
document.body.appendChild(menuButton);

let isMenuOpen = false;

function toggleMenu() {
    if (isMenuOpen) {
        console.log('Меню закрыто');
    } else {
        console.log('Меню открыто');
    }
    isMenuOpen = !isMenuOpen;
}

menuButton.addEventListener('click', toggleMenu);

// Функция для включения и выключения RESOURCE_OVERRIDE
let isResourceOverrideEnabled = true;

function toggleResourceOverride() {
    isResourceOverrideEnabled = !isResourceOverrideEnabled;
    console.log('RESOURCE_OVERRIDE', isResourceOverrideEnabled ? 'включено' : 'выключено');
}

const overrideButton = document.createElement('button');
overrideButton.textContent = 'Включить/Выключить RESOURCE_OVERRIDE';
overrideButton.style.position = 'fixed';
overrideButton.style.bottom = '70px';
overrideButton.style.right = '20px';
overrideButton.style.zIndex = '9999'; // Помещаем поверх других элементов на странице
document.body.appendChild(overrideButton);

overrideButton.addEventListener('click', toggleResourceOverride);

unsafeWindow.fetch = async(input, init) =>
{
    let isOverriden = false,
        originalUrl = input;

    for (let index = RESOURCE_OVERRIDE.length - 1; index >= 0; index--)
    {
        if (input.search(RESOURCE_OVERRIDE[index].from) !== -1)
        {
            input = RESOURCE_OVERRIDE[index].to;
            isOverriden = true;
            console.log(`[Resource Override] Resource overriden from ${originalUrl} to ${input}`);
            if (RESOURCE_OVERRIDE[index].external === true)
                return GM_fetch(input, init)
            break;
        }
    }

    isOverriden === false && console.debug(`[Resource Override] Resource ${input} not matched`);

    return originalFetch(input, init);
}
