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