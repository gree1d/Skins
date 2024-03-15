// ==UserScript==
// @name             shizoval
// @author           Alastor, tdsrs
// @version          2.1.1

// @match            https://*.test-eu.tankionline.com/browser-public/index.html?*
// @match            https://tankionline.com/play*

// @description      shizoval: Reborn
// @icon             https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @grant            GM_addStyle
// @grant            unsafeWindow

// @run-at           document-start
// ==/UserScript==

GM_addStyle(`
  .shizoval_content {
    position: absolute;
	font-size: 17px;
	text-shadow: 0px 0px 3px 2px black;
    z-index: 9999;
    top: 10%;
    left: 10%;
    min-height: 580px;
    min-width: 800px;
    border-radius: 16px;
    background: linear-gradient(29deg, rgba(0,0,0,0.349544783733806) 0%, rgba(42,42,42,0.7198529069831057) 70%);
		backdrop-filter: blur(6px);
		filter: brightness(0.8);
	border: 1px solid rgb(255 255 255 / 3%);
	box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.8);
  }

  .shizoval_content .fly {
    position: absolute;
	top: 13%;
	left: 5%;
	height: 180px;
	width: 90%;
	box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
	background: rgb(255, 255, 255, 0.02);
	border-radius: 16px;
  }

  .shizoval_content .weapon {
    position: absolute;
	top: 50%;
	left: 5%;
	height: 200px;
	width: 45%;
	box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
	background: rgb(255, 255, 255, 0.02);
	border-radius: 16px;
  }

  .shizoval_content .other {
    position: absolute;
	top: 50%;
	right: 5%;
	height: 200px;
	width: 40%;
	box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
	background: rgb(255, 255, 255, 0.02);
	border-radius: 16px;
  }

  .shizoval_content .fly p, .shizoval_content .weapon p, .shizoval_content .other p {
    position: absolute;
    font-size: 20px;
  }

  .shizoval_content h1 {
    font-size: 30px;
	color: white;
  }

  .shizoval_content .mines {
    position: absolute;
	bottom: 3%;
	left: 8%;
	font-size: 20px;
  }

  .shizoval_content .version {
    position: absolute;
	bottom: 3%;
	right: 8%;
	font-size: 20px;
  }

  .shizoval_content .mines span, .shizoval_content .version span {
    color: #bada55;
  }

  .notify-message {
	position: absolute;
	left: 50%;
	transform: translate(-50%; -50%);
	top: 10%;
	transition: top 3s ease;
	border-radius: 15px;
	color: white;
	z-index: 99999;
	margin-top: 20px;
	height: 50px;
	min-width: 70px;
	width: auto;
  }

  .shizoval_content  input[type="checkbox"] {
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
}

.shizoval_content  label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  box-shadow: inset 0px 0px 13px 2px rgb(0, 0, 0, 0.2);
  background: rgb(177 177 177 / 11%);
  border: 2px solid rgb(255, 255, 255, 0.14);
  display: block;
  border-radius: 100px;
  position: absolute;
}

.shizoval_content  label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 18px;
  height: 18px;
  background: transparent;
  border: 2px solid rgb(255, 255, 255, 0.14);
  border-radius: 90px;
  transition: 0.3s;
}

.bindState {
  color: rgb(255, 255, 255, 0.5);
  font-size: 20px;
  position: absolute;
}

.shizoval_content  input:checked + label {
  background: #bada559a;
}

.shizoval_content  input:checked + label:after {
  left: calc(100% - 5px);
  border: 2px solid rgb(255, 255, 255, 0.4);
  transform: translateX(-100%);
}

.shizoval_content label:active:after {
  width: 30px;
}

.shizoval_content input[type="range"] {
	font-size: 1.5rem;
	width: 12.5em;
}

.shizoval_content input[type="range"] {
	color: #bada55;
	--thumb-height: 1.125em;
	--track-height: 0.125em;
	--track-color: rgba(255, 255, 255, 0.2);
	--brightness-hover: 180%;
	--brightness-down: 80%;
	--clip-edges: 0.125em;
}
@media (prefers-color-scheme: dark) {
.shizoval_content input[type="range"] {
		color: #bada55;
		--track-color: rgba(255, 255, 255, 0.1);
	}
}

.shizoval_content input[type="range"] {
	position: relative;
	background: #fff0;
	overflow: hidden;
}

.shizoval_content input[type="range"]:active {
	cursor: grabbing;
}

.shizoval_content input[type="range"],
.shizoval_content input[type="range"]::-webkit-slider-runnable-track,
.shizoval_content input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	transition: all ease 100ms;
	height: var(--thumb-height);
}

.shizoval_content input[type="range"]::-webkit-slider-runnable-track,
.shizoval_content input[type="range"]::-webkit-slider-thumb {
	position: relative;
}

.shizoval_content input[type="range"]::-webkit-slider-thumb {
	--thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
	--clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
	--clip-bottom: calc(var(--thumb-height) - var(--clip-top));
	--clip-further: calc(100% + 1px);
	--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
		100vmax currentColor;

	width: var(--thumb-width, var(--thumb-height));
	background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
		50% calc(var(--track-height) + 1px);
	background-color: currentColor;
	box-shadow: var(--box-fill);
	border-radius: var(--thumb-width, var(--thumb-height));

	filter: brightness(100%);
	clip-path: polygon(
		100% -1px,
		var(--clip-edges) -1px,
		0 var(--clip-top),
		-100vmax var(--clip-top),
		-100vmax var(--clip-bottom),
		0 var(--clip-bottom),
		var(--clip-edges) 100%,
		var(--clip-further) var(--clip-further)
	);
}

.shizoval_content input[type="range"]:hover::-webkit-slider-thumb {
	filter: brightness(var(--brightness-hover));
	cursor: grab;
}

.shizoval_content input[type="range"]:active::-webkit-slider-thumb {
	filter: brightness(var(--brightness-down));
	cursor: grabbing;
}

.shizoval_content input[type="range"]::-webkit-slider-runnable-track {
	background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
		100% calc(var(--track-height) + 1px);
}

.shizoval_content input[type="range"]:disabled::-webkit-slider-thumb {
	cursor: not-allowed;
}

/* === Firefox specific styles === */
.shizoval_content input[type="range"],
.shizoval_content input[type="range"]::-moz-range-track,
.shizoval_content input[type="range"]::-moz-range-thumb {
	appearance: none;
	transition: all ease 100ms;
	height: var(--thumb-height);
}

.shizoval_content input[type="range"]::-moz-range-track,
.shizoval_content input[type="range"]::-moz-range-thumb,
.shizoval_content input[type="range"]::-moz-range-progress {
	background: #fff0;
}

.shizoval_content input[type="range"]::-moz-range-thumb {
	background: currentColor;
	border: 0;
	width: var(--thumb-width, var(--thumb-height));
	border-radius: var(--thumb-width, var(--thumb-height));
	cursor: grab;
}

.shizoval_content input[type="range"]:active::-moz-range-thumb {
	cursor: grabbing;
}

.shizoval_content input[type="range"]::-moz-range-track {
	width: 100%;
	background: var(--track-color);
}

.shizoval_content input[type="range"]::-moz-range-progress {
	appearance: none;
	background: currentColor;
	transition-delay: 30ms;
}

.shizoval_content input[type="range"]::-moz-range-track,
.shizoval_content input[type="range"]::-moz-range-progress {
	height: calc(var(--track-height) + 1px);
	border-radius: var(--track-height);
}

.shizoval_content input[type="range"]::-moz-range-thumb,
.shizoval_content input[type="range"]::-moz-range-progress {
	filter: brightness(100%);
}

.shizoval_content input[type="range"]:hover::-moz-range-thumb,
.shizoval_content input[type="range"]:hover::-moz-range-progress {
	filter: brightness(var(--brightness-hover));
}

.shizoval_content input[type="range"]:active::-moz-range-thumb,
.shizoval_content input[type="range"]:active::-moz-range-progress {
	filter: brightness(var(--brightness-down));
}
`);

const menu = document.createElement('div');
menu.innerHTML = `
  <center><h1>shizoval</h1></center>
  <div class="fly">
    <p class="hack-name" style="top: 5%; left: 5%;">Fly Hack:</p><span class="bindState" style="top: 5%; left: 24%;">F</span><input type="range" value="120" min="10" max="400" step="1" style="position: absolute; top: 20%; left: 25%; width: 50%"></input><span class="bindState" style="top: 5%; right: 24%;">V</span><input type="checkbox" id="flyHackState"/><label for="flyHackState" style="position: absolute; top: 15%; right: 5%;" ></label>
	<p class="hack-name" style="top: 30%; left: 5%;">Anti-Aim:</p><input type="checkbox" id="antiAimState"/><label for="antiAimState" style="position: absolute; top: 40%; right: 5%;" ></label>
	<p class="hack-name" style="top: 55%; left: 5%;">Freeze Tanks:</p><input type="checkbox" id="freezeState"/><label for="freezeState" style="position: absolute; top: 65%; right: 5%;" ></label>
  </div>
  <div class="weapon">
    <p class="hack-name" style="top: 2%; left: 10%;">OneShot:</p><input type="checkbox" id="clumsyState"/><label for="clumsyState" style="position: absolute; top: 10%; right: 10%;"></label>
	<p class="hack-name" style="top: 20%; left: 10%;">AimBot:</p><input type="checkbox" id="aimBotState"/><label for="aimBotState" style="position: absolute; top: 28%; right: 10%;"></label>
	<p class="hack-name" style="top: 38%; left: 10%;">Target:</p><p id="targetState" style="position: absolute; top: 38%; right: 12%; color: #bada55;"></p>
	<p class="hack-name" style="top: 56%; left: 10%;">Shells:</p><p id="shellsCount" style="position: absolute; top: 56%; right: 12%; color: #bada55;">0</p>
  </div>
  <div class="other">
    <p class="hack-name" style="top: 2%; left: 5%;">FPS Hack:</p><input type="checkbox" id="fpsHackState"/><label for="fpsHackState" style="position: absolute; top: 10%; right: 10%;"></label>
	<p class="hack-name" style="top: 20%; left: 5%;">NoEffects:</p><input type="checkbox" id="effectsState"/><label for="effectsState" style="position: absolute; top: 28%; right: 10%;"></label>
	<p class="hack-name" style="top: 38%; left: 5%;">FOV:</p><input type="range" step="0.001" value="1.0471976" min="0.8" max="2" style="position: absolute; top: 48%; left: 25%; width: 35%" id="fovValueState"></input><input type="checkbox" id="fovState"/><label for="fovState" style="position: absolute; top: 46%; right: 10%;"></label>
    <p class="hack-name" style="top: 56%; left: 5%;">Auto Shooting:</p><input type="checkbox" id="autoShotState"/><label for="autoShotState" style="position: absolute; top: 64%; right: 10%;"></label>
  </div>

  <p class="mines">Mines on map: <span>0</span></p>
  <p class="version">Version: <span>2.1.1</span></p>
`;
menu.className = 'shizoval_content';
menu.style.display = 'block';
document.body.appendChild(menu);

class KeyPressing {
	static k = [];
	static i() {
		document.addEventListener("keydown", e => {
			const c = e.keyCode;
			if (KeyPressing.k.includes(c) == false) {
				KeyPressing.k.push(c);
			};
		});

		document.addEventListener("keyup", e => {
			const c = e.keyCode;
			if (KeyPressing.k.includes(c) == true) {
				const a = KeyPressing.k.indexOf(c);
				if (a !== -1) {
					KeyPressing.k.splice(a, 1);
				};
			};
		});
	};

	static isKeyPressed(c) {
		return KeyPressing.k.includes(c);
	};
};

KeyPressing.i();

class Utils {
	constructor() {};

	get rootElement() {
		return document.getElementById('root');
	};

	get isChatOpen() {
		return document.querySelectorAll("input[type=text]").length > 0;
	};


	filterArray = function(value) {
		return value != null;
	};

	getObjectName = function(object) {
		return object?.constructor?.$metadata$?.simpleName;
	};
	equal = (a, b) => a?.toUpperCase() === b?.toUpperCase();

	fuzzySearch = function(needle, haystack) {
		var hlen = haystack.length;
		var nlen = needle.length;
		if (nlen > hlen) {
			return false;
		};

		if (nlen === hlen) {
			return needle === haystack;
		};

		outer: for (var i = 0, j = 0; i < nlen; i++) {
			var nch = needle.charCodeAt(i);
			while (j < hlen) {
				if (haystack.charCodeAt(j++) === nch) {
					continue outer;
				};
			};
			return false;
		};
		return true;
	};

	findObjectByName = function(object, name, index = -1, last = false, fuzzy = false) {
		let i = 0;
		for (const key in object) {
			if (typeof object[key] === 'object' && (fuzzy ? this.fuzzySearch(name, this.getObjectName(object[key])) : this.equal(this.getObjectName(object[key]), name))) {
				if (index === -1 || index === i) return last ? [key, object[key]] : object[key];
				i++;
			};
		};
	};

	findByPath = function(object, path) {
		if (typeof path !== 'string' && !Array.isArray(path)) throw new Error(`Путь должен быть строкой 'obj.obj2.obj3...' или массивом [ 'obj', 'obj2', 'obj3' ... ]`);

		const arrayPath = Array.isArray(path) ? path : path.split('.');

		let result = object;
		arrayPath.forEach((name, index) => {
			if (!result) return;

			const last = index === arrayPath.length - 1;
			if (result[name]) result = result[name];
			else if (name.slice(0, 2) === 'i:') result = this.findByIndex(result, name.slice(2, name.length), last);
			else if (name.slice(0, 6) === 'fuzzy:') result = this.findObjectByName(result, name.slice(6, name.length), -1, last, true);
			else {
				const split = name.split(':');
				if (split.length === 2) result = this.findObjectByName(result, split[0], +split[1], last);
				else result = this.findObjectByName(result, name, -1, last);
			}

			if (typeof result !== 'object') return result;
		});

		return result;
	};


	getComponentNames = function(element) {
		if (typeof element !== 'object' && typeof element !== 'function') return;
		const result = {};

		for (const [key, value] of Object.entries(element)) {
			if (Array.isArray(value)) {
				result[key] = value;
				continue;
			}

			if (typeof value === 'function' && value.callableName) {
				result[value.callableName] = element[key];
				continue;
			}

			const name = value?.constructor?.$metadata$?.simpleName;

			if (!name) continue;

			if (result[name]) {
				for (let i = 0; ; i++) {
					const tempName = `${name}_${i}`;

					if (!result[tempName]) {
						result[tempName] = value;
						break;
					}
				}
			} else {
				result[name] = value;
			}
		}

		result['original'] = element;

		return result;
	}

	getByProto = function(arr, name, index) {
		if ((!arr) || (!name) || (!index)) return;
		const components = arr;
		for (const component of components) {
			const prototype = component?.__proto__;
			const init = Object.values(prototype)[index];
			if (init?.toString()?.includes(name)) {
				return component;
			};
		};
	};

	findByIndex = (object, index, last = false) => {
		const entries = Object.entries(object)?.[index];

		if (last)
			return entries;

		if (typeof entries?.[1] === 'object')
			return entries[1];

		return entries?.[0];
	};


	getByLength = function(obj, length) {
		let validObjects = [];
		for (let i = 0; i < obj.length; i++) {
			let objectsArray = [];
			for (let key in obj[i]) {
				if (typeof obj[i][key] == 'object') {
					objectsArray.push(obj[i][key]);
				};
			};

			if (objectsArray.length == length) validObjects.push(objectsArray);
		};
		return validObjects;
	};


	componentStarter = function(obj, visited = new Set ()) {
		if (visited.has(obj)) {
			return null;
		};

		visited.add(obj);

		if (obj?.constructor?.$metadata$?.simpleName === "ModalComponent") {
			return obj;
		};

		for (let key in obj) {
			if (typeof obj[key] === "object") {
				const result = this.componentStarter(obj[key], visited);
				if (result) {
					return result;
				};
			};
		};

		return null;
	};

	get rootObject() {
		if (this.rootElement) {
			return this.componentStarter(this.rootElement);
		} else {
			return;
		};
	};

	get isGameReady() {
		const component = this.rootObject;
		if (!component) return;

		const TOState = this.getBySimpleName(component, ""),
					Store = this.getBySimpleName(TOState, "");

		const ThreadSafeList = Object.entries(Store)?.[1]?.[1];

		if (ThreadSafeList == void 0) return;

		const ThreadSafeListValue = Object.entries(ThreadSafeList)?.[1]?.[1];
		const BattleEntity = this.getByLength(ThreadSafeListValue, 3)?.[1]?.[0];

		return BattleEntity ? true : false
	};

	getByName = function(obj, name) {
		for (const key in obj) {
			if (obj[key]?.constructor?.name === name && typeof obj[key] === "object") {
				return obj[key];
			};
		};
	};

	getBySimpleName = function(obj, simpleName) {
		for (const key in obj) {
			if (obj[key]?.constructor?.$metadata$?.simpleName === simpleName && typeof obj[key] === "object") {
				return obj[key];
			};
		};
	};

	errorLog = function(text) {
		throw new Error('[Shizoval] ' + text);
	};

	notify = function(text, color) {
		const label = document.createElement('div');
		label.innerHTML = text;
		label.style.backgroundColor = color;
		label.className = 'notify-message';
		document.body.appendChild(label);
		setTimeout(() => {
			label.style.top = "-100%";
		}, 2000);
	};

	getRandom = function(min, max) {
		return Math.random() * (max - min) + min;
	};
};

const utils = new Utils();
setInterval(utils.getPlayerNick, 0);
unsafeWindow.Utils = utils;

let targetNick = '';
function getPlayerName () {
	if (objects.features?.weapon?.clumsyEnabled == true) {
		const dk = document.querySelector(
			'#modal-root > div > div > div.ContextMenuStyle-menuItem.ContextMenuStyle-menuItemRank > div > div > div > span'
		)?.innerText.replace(/^\s*\[(.*?)\]\s*/, '').trim();
		if (dk) targetNick = dk; objects?.features?.weapon?.getTarget(); document.querySelector('#targetState').innerText = targetNick;
	};
};

setInterval(getPlayerName, 25)

class GameObjects {
	constructor() {};
	get TOState() {
		return utils.getBySimpleName(utils.rootObject, "");
	};

	get userName() {
		return utils.findByPath(objects.gameObjects.user, "i:0.i:15")[1];
	};

	get store() {
		return utils.getBySimpleName(this.TOState, "");
	};

	get user() {
		return utils.findByPath(objects.gameObjects.TOState, "i:3.i:4")[1];
	};


	world = {
		get world() {
			if (!utils.isGameReady) return;
			const component = utils.rootObject,
						TOState = utils.getBySimpleName(component, ""),
						Store = utils.getBySimpleName(TOState, ""),
						ThreadSafeList = Object.entries(Store)[1][1];

			if (ThreadSafeList == void 0) return;

			const ThreadSafeListValue = Object.entries(ThreadSafeList)[1][1];
			const BattleEntity = utils.getByLength(ThreadSafeListValue, 3)[1][0];
			const world = utils.getComponentNames(Object.entries(BattleEntity)[1][1]);

			return world;
		}
	};

	get gameMode() {
		if (!utils.isGameReady) return;
		const world = this.world.world,
					t0 = utils.getComponentNames(world).ArrayList_0,
					t1 = Object.entries(t0)[1][1],
					t2 = utils.getComponentNames(t1[0]),
					t3 = Object.entries(t2.original)[5][1],
					gameMode = Object.entries(t3)[0][1];

		return gameMode;
	};

	get game() {
		return utils.findByPath(objects.gameObjects.world.world, "ArrayList_0.i:1.0")
	};

	get mines() {
		if (!utils.isGameReady) return;
		const minesPath = Object.entries(this.gameMode[17])[11][1];
		const minesArraya = utils.findByPath(minesPath, 'i:1')[1];
		const minesArray = Object.entries(minesArraya)[1][1];

		return minesArray;
	};

	get shellFactory() {
		if (!utils.isGameReady) return;
		return utils.getByProto(objects.gameObjects.localTank.components, "createShell", 2);
	};

	get validShells() {
		const Shells = utils.getByProto(objects.gameObjects.localTank.components, 'createShell', 2);
		if (!Shells) return;
		const CacheImpl = Object.entries(Shells)[3][1];

		return Object.entries(utils.getByName(CacheImpl, "In"))[1][1];
	};

	localTank = {
		get components() {
			if (!utils.isGameReady) return;
			const component = utils.rootObject,
						TOState = utils.getBySimpleName(component, ""),
						Store = utils.getBySimpleName(TOState, ""),
						ThreadSafeList = Object.entries(Store)[1][1];

			if (ThreadSafeList == void 0) return;

			const ThreadSafeListValue = Object.entries(ThreadSafeList)[1][1];

			const BattleEntity = utils.getByLength(ThreadSafeListValue, 3)[1][0],
						TankArray = Object.entries(BattleEntity)[5][1],
						ComponentList = Object.entries(TankArray)[0][1];

			return ComponentList;
		},

		get tankPhysics() {
			if (!utils.isGameReady) return;
			return utils.getByProto(objects.gameObjects.localTank.components, "setPhysicsTransform", 7);
		},

		get targetingSystem() {
			if (!utils.isGameReady) return;
			return utils.getByProto(objects.gameObjects.localTank.components, "tankInputComponent", 4);
		}
	};

	get players() {
		if (!utils.isGameReady) return;
		const TankComponent = utils.getByProto(objects.gameObjects.localTank.components, 'tankPhysicsComponent', 6);
		const gameModes = Object.entries(TankComponent)[7][1],
					gameMode = utils.findByPath(gameModes, "i:7")[1];

		const tanks = utils.findByPath(gameMode, "i:8")[1],
					tanksArray = utils.findByPath(tanks, "i:1")[1],
					tanksOnField = utils.findByPath(tanksArray, "i:0")[1];

		return tanksOnField
	};
};

class Features {
	constructor() {};

	weapon = {
		aimBotEnabled: false,
		clumsyEnabled: false,
		target: void 0,

		get params() {
			if (!objects.features) return;
			if (!utils.isGameReady) return;

			const targetingSystem = objects.gameObjects?.localTank.targetingSystem;
			const horizontalAiming = utils.findByPath(objects.gameObjects?.localTank.targetingSystem, "i:10.i:1")[1],
						RootAiming = utils.findByPath(objects.gameObjects?.localTank.targetingSystem, "i:10")[1];

			return {
				horizontalAiming: horizontalAiming,
				RootAiming: RootAiming,
			};
		},

		setSpeed: function() {
			if (!objects.features) return;
			if (!utils.isGameReady) return;

			const ShellsFactory = objects.gameObjects?.shellFactory;
			const CCShells = Object.entries(ShellsFactory)[7][1];

			if (objects.features?.weapon?.clumsyEnabled) {
				CCShells[Object.keys(CCShells)[6]] = 0.0001;
				CCShells[Object.keys(CCShells)[4]] = 0.0001;
			}
		},

		getTarget: function() {
			if (!objects.features) return;
			if (!utils.isGameReady) return;

			objects.features.weapon.setSpeed();

			const ShellsFactory = objects.gameObjects?.shellFactory;
			const CCShells = Object.entries(ShellsFactory)[7][1],
						players = objects.gameObjects.players;

			if (!objects?.features?.weapon?.clumsyEnabled) return;

			for (const player of players) {
				const ForEnemyNativeList = Object.entries(player)[5][1],
							EnemyNativeList = Object.entries(ForEnemyNativeList)[0][1],
							ForTankPhysics = utils.getByProto(EnemyNativeList,'setPhysicsTransform', 7);

				const EnemyBody = Object.entries(ForTankPhysics)[17][1],
							ForEnemyBodyState = Object.entries(EnemyBody)[24][1],
							EnemyBodyState = Object.entries(ForEnemyBodyState)[3][1];

				const ForNick = utils.getByProto(EnemyNativeList, "setClan", 4);
				if (ForNick == void 0) continue;

				const Nick = Object.entries(ForNick)?.[4]?.[1];
				if (Nick == targetNick) this.target = EnemyBodyState;
			};
		},

		aimBot: function() {
			if (!objects.features) return;
			if (!Utils.isGameReady) return;

			const horizontalAiming = objects.features?.weapon.params.horizontalAiming;
			const rootAiming = objects.features?.weapon.params.RootAiming;

			if (objects.features?.weapon.aimBotEnabled) {
				horizontalAiming[Object.keys(horizontalAiming)[0]] = 200;
				horizontalAiming[Object.keys(horizontalAiming)[1]] = 0.01;
				rootAiming[Object.keys(rootAiming)[3]] = true;
			} else {
				horizontalAiming[Object.keys(horizontalAiming)[0]] = 4;
				horizontalAiming[Object.keys(horizontalAiming)[1]] = 0.08;
				rootAiming[Object.keys(rootAiming)[3]] = false;
			};

			requestAnimationFrame(objects.features.weapon.aimBot);
		},

		teleportShells: function() {
			if (!objects?.features?.weapon?.clumsyEnabled) return;

			const params = objects.features.fly.options.params;
			let target_position = {
				x: Object.entries(objects.features.weapon.target)[0][1],
				y: Object.entries(objects.features.weapon.target)[1][1],
				z: Object.entries(objects.features.weapon.target)[2][1],
			};

			let vectors = [];
			for (let shell of objects.gameObjects.validShells) {
				const ForNativeList = Object.entries(shell)[5][1],
							NativeList = Object.entries(ForNativeList)[0][1],
							Uniform = Object.entries(NativeList)[1][1],
							ShellVector = utils.getByName(Uniform, "Ot");

				vectors.push(ShellVector);
			};

			for (let vector of vectors) {
				vector[Object.keys(vector)[0]] = target_position.x;
				vector[Object.keys(vector)[1]] = target_position.y;
				vector[Object.keys(vector)[2]] = target_position.z;
			};
		},
	};

	fpsHack = {
		isEnabled: false,
		process: function() {
			if (!objects.features) return;
			if (!utils.isGameReady) return;

			if (!objects.features.fpsHack.isEnabled) return;

			for (const mine of objects.gameObjects.mines) {
				const signal = utils.findByPath(mine, "i:3")?.[1].filter(utils.filterArray)[7];
				const signal1 = utils.findByPath(signal, "i:0.i:0.0");
				const deactivate = utils.findByPath(signal1, "i:1")[1]

				deactivate();
			};

			requestAnimationFrame(objects.features?.fpsHack.process);
		},
	};

	fly = {
		get killZones() {
			const killZones = utils.findByPath(objects.gameObjects.gameMode, "i:0.i:8")[1];
			return {
				minX: Object.entries(killZones)[0][1],
				minY: Object.entries(killZones)[1][1],
				minZ: Object.entries(killZones)[2][1],
				maxX: Object.entries(killZones)[3][1],
				maxY: Object.entries(killZones)[4][1],
				maxZ: Object.entries(killZones)[5][1],
			};
		},

		speed: 120,
		isEnabled: false,
		freezeEnabled: false,
		antiAimEnabled: false,

		antiAim: function() {
			if (objects.features.fly.antiAimEnabled) requestAnimationFrame(objects.features.fly.antiAim);

			if (!objects.features) return;
			if (!utils.isGameReady) return;

			const TankPhysicsComponent = objects.gameObjects.localTank.tankPhysics;
			const InterpolPosition = Object.entries(TankPhysicsComponent)[8][1];

			const Interpolatedz = utils.findByPath(InterpolPosition, 'i:2')[0],
						Interpolatedy = utils.findByPath(InterpolPosition, 'i:1')[0],
						Interpolatedx = utils.findByPath(InterpolPosition, 'i:0')[0];

			InterpolPosition[Interpolatedx] = utils.getRandom(objects.features.fly.killZones.minX, objects.features.fly.killZones.maxX);
			InterpolPosition[Interpolatedy] = utils.getRandom(objects.features.fly.killZones.minY, objects.features.fly.killZones.maxY);
			InterpolPosition[Interpolatedz] = utils.getRandom(objects.features.fly.killZones.maxZ, objects.features.fly.killZones.maxZ);
		},

		options: {
			get params() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;

				const tankPhysics = objects.gameObjects.localTank.tankPhysics;
				const Body = Object.entries(tankPhysics)[17][1];
				const BodyState = Object.entries(Body)[24][1];
				const Quaternion = Object.entries(BodyState)[1][1];

				return {
					TankPhysics: tankPhysics,
					Body: Body,
					BodyState: BodyState,
					Quaternion: Quaternion
				};
			},

			setMovable: function() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;

				const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1],
							Body = objects.features.fly.options.params.Body;

				if (objects.features.fly.isEnabled == true) {
					Body[Object.keys(Body)[5]] = false;
				} else {
					Body[Object.keys(Body)[5]] = true;
				};
			},

			freezeTanks: function() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;

				const players = objects.gameObjects?.players;

				for (const player of players) {
					const ForEnemyNativeList = Object.entries(player)[5][1],
								EnemyNativeList = Object.entries(ForEnemyNativeList)[0][1],
								ForTankPhysics = utils.getByProto(EnemyNativeList,'setPhysicsTransform', 7);

					const EnemyBody = Object.entries(ForTankPhysics)[17][1];
					const ForNick = utils.getByProto(EnemyNativeList, "setClan", 4);
					if (ForNick == void 0) continue;

					const Nick = Object.entries(ForNick)?.[4]?.[1];
					if (Nick == objects.gameObjects.userName) continue;


					if (objects.features.fly.freezeEnabled == true) {
						EnemyBody[Object.keys(EnemyBody)[5]] = false;
					} else {
						EnemyBody[Object.keys(EnemyBody)[5]] = true;
					};
				};
			},

			quaternion: function() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;

				if (objects.features.fly.isEnabled) requestAnimationFrame(objects.features.fly.options.quaternion);
				else return;

				const Quaternion = objects.features.fly.options.params.Quaternion;
				Quaternion[Object.keys(Quaternion)[0]] =
					Quaternion[Object.keys(Quaternion)[1]] =
					Quaternion[Object.keys(Quaternion)[2]] =
					Quaternion[Object.keys(Quaternion)[3]] = 0;
			},

			orientation: function() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;

				if (objects.features.fly.isEnabled) requestAnimationFrame(objects.features.fly.options.orientation);
				else return;


				const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1],
							Body = objects.features.fly.options.params.Body;

				if (KeyPressing.isKeyPressed(65) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[0]] > objects.features.fly.killZones.minX) { // налево
					TankArray[Object.keys(TankArray)[0]] -= objects.features.fly.speed;
				}

				if (KeyPressing.isKeyPressed(68) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[0]] < objects.features.fly.killZones.maxX) { // направо
					TankArray[Object.keys(TankArray)[0]] += objects.features.fly.speed;
				}

				if (KeyPressing.isKeyPressed(87) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[1]] < objects.features.fly.killZones.maxY) { // вперёд
					TankArray[Object.keys(TankArray)[1]] += objects.features.fly.speed;
				}

				if (KeyPressing.isKeyPressed(83) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[1]] > objects.features.fly.killZones.minY) { // назад
					TankArray[Object.keys(TankArray)[1]] -= objects.features.fly.speed;
				}

				if (KeyPressing.isKeyPressed(81) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[2]] < objects.features.fly.killZones.maxZ) { // верх
					TankArray[Object.keys(TankArray)[2]] += objects.features.fly.speed;
				}


				if (KeyPressing.isKeyPressed(69) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[2]] > objects.features.fly.killZones.minZ) { // вниз
					TankArray[Object.keys(TankArray)[2]] -= objects.features.fly.speed;
				};

				if (KeyPressing.isKeyPressed(70/* А */) && utils.isChatOpen == false && objects.features.fly.speed >= 1) {
					objects.features.fly.speed -= 1;
				}

				if (KeyPressing.isKeyPressed(86/* М */) && utils.isChatOpen == false && objects.features.fly.speed <= 400) {
					objects.features.fly.speed += 1;
				}
			}
		}
	};

	effectsEnabled = false;
	effects = () => {
		if (!objects.features) return;
		if (!utils.isGameReady) return;

		if (objects.features.effectsEnabled) requestAnimationFrame(objects.features.effects);
		else return;

		const getMyPosition = function() {
			const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1];
			return {
				x: TankArray[Object.keys(TankArray)[0]],
				y: TankArray[Object.keys(TankArray)[1]]
			};
		};

		if (objects.gameObjects.validShells.length > 0) {
			let vectors = [];
			for (let shell of objects.gameObjects.validShells) {
				const ForNativeList = Object.entries(shell)[5][1],
							NativeList = Object.entries(ForNativeList)[0][1],
							Uniform = Object.entries(NativeList)[1][1],
							ShellVector = utils.getByName(Uniform, "Ot");

				vectors.push(ShellVector);
			};

			for (let vector of vectors) {
				vector[Object.keys(vector)[0]] = getMyPosition().x;
				vector[Object.keys(vector)[1]] = getMyPosition().y;
				vector[Object.keys(vector)[2]] = 65535;
			};
		};
	};

	autoShootEnabled = false;
	autoShootInterval = null;
	autoShoot = () => {
		if (!utils.isGameReady) return;
		if (!objects.features) return;

		const weapon = utils.getByProto(objects.gameObjects?.localTank.components, 'weaponTrigger', 3),
					trigger = utils.findByPath(weapon, 'i:5')?.[1];

		if (!(weapon || trigger)) return;

		const release = utils.findByPath(trigger, 'i:5')?.[0], //press
					one = utils.findByPath(trigger,'i:6')?.[0]; // onehit;

		if (!(release || one)) return;

		if (objects.features?.autoShootEnabled)
		{
			objects.features.autoShootInterval = setInterval(() => {
				trigger[one] =
					trigger[release] = true;

				const Shells = objects.gameObjects?.validShells;
				if (Shells && Shells?.length >= 20)
				{
					objects.features.weapon.teleportShells();
				};
			});
		}
		else
		{
			trigger[one] =
				trigger[release] = false;

			clearInterval(objects.features.autoShootInterval);
			objects.features.autoShootInterval = null;
		};
	};

	fovEnabled = false;
	fov = function() {
		if (!utils.isGameReady) return;
		requestAnimationFrame(objects.features?.fov);


		let fovValue;

		if (objects.features?.fovEnabled) fovValue = document.querySelector('#fovValueState').value;
		else fovValue = 1.0471976;

		const followCamera = utils.getByProto(objects.gameObjects?.localTank?.components, 'onSpawnCameraTransformQuery', 7),
					camera = utils.findByPath(followCamera, 'i:24')?.[1],
					update = utils.findByPath(camera, '__proto__.i:1')?.[0];

		if (!(camera || update)) return;

		!camera.copy && (camera.copy = camera[update]);

		let fovName = '';
		camera[update] = function (t) {
			if (!fovName) fovName = utils.findByPath(t, 'i:0')?.[0];

			this.copy(t);
			t[fovName] = fovValue;
		}
	}
	// 1.0471976
};

let objects = {
	gameObjects: void 0,
	features: void 0
};

function initHelpers() {
	if (!objects.gameObjects) return;
	if (!utils.isGameReady) return;

	document.querySelector('.mines > span').innerText = objects?.gameObjects?.mines?.length;
	document.querySelector('#shellsCount').innerText = objects?.gameObjects?.validShells?.length;
};

setInterval(initHelpers, 1000);

function initObjects() {
	if (utils.isGameReady && (objects.gameObjects == void 0 || objects.features == void 0)) {
		objects.gameObjects = new GameObjects();
		objects.features = new Features();

		unsafeWindow.GameObjects = objects.gameObjects;
		unsafeWindow.Features = objects.features;
	};

	requestAnimationFrame(initObjects);
};

requestAnimationFrame(initObjects);

const FOV = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.fovEnabled = document.querySelector('#fovState').checked;
	requestAnimationFrame(objects.features?.fov);
};

const FPSHack = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.fpsHack.isEnabled = document.querySelector('#fpsHackState').checked;
	requestAnimationFrame(objects.features?.fpsHack.process);
};

const flyHack = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.fly.isEnabled = !objects.features.fly.isEnabled;
	document.querySelector('#flyHackState').checked = objects.features.fly.isEnabled;

	requestAnimationFrame(objects.features.fly.options.quaternion);
	requestAnimationFrame(objects.features.fly.options.setMovable);
	requestAnimationFrame(objects.features.fly.options.orientation);
};

const freezeTanks = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.fly.freezeEnabled = document.querySelector('#freezeState').checked;

	requestAnimationFrame(objects.features.fly.options.freezeTanks);
};

const AA = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.fly.antiAimEnabled = !objects.features.fly.antiAimEnabled;
	document.querySelector('#antiAimState').checked = objects.features.fly.antiAimEnabled;

	requestAnimationFrame(objects.features.fly.antiAim);
};

const Clumsy = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.weapon.clumsyEnabled = document.querySelector('#clumsyState').checked;
	requestAnimationFrame(objects.features.weapon.setSpeed);

	document.addEventListener('keydown', event => {
		if (utils.isChatOpen) return;
		if (event.keyCode == 82) objects.features.weapon.teleportShells();
	});
};

const AimBot = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.weapon.aimBotEnabled = document.querySelector('#aimBotState').checked;
	requestAnimationFrame(objects.features.weapon.aimBot);
};

const effects = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.effectsEnabled = !objects.features.effectsEnabled;
	document.querySelector('#effectsState').checked = objects.features.effectsEnabled;

	requestAnimationFrame(objects.features.effects);
};

const autoShoot = () => {
	if (!objects.features) return;
	if (!utils.isGameReady) return;

	objects.features.autoShootEnabled = document.querySelector('#autoShotState').checked;
	requestAnimationFrame(objects.features.autoShoot);
};

document.querySelector('#clumsyState').addEventListener('click', Clumsy);
document.querySelector('#flyHackState').addEventListener('click', flyHack);
document.querySelector('#antiAimState').addEventListener('click', AA);
document.querySelector('#freezeState').addEventListener('click', freezeTanks);
document.querySelector('#aimBotState').addEventListener('click', AimBot);
document.querySelector('#fpsHackState').addEventListener('click', FPSHack);
document.querySelector('#effectsState').addEventListener('click', effects);
document.querySelector('#autoShotState').addEventListener('click', autoShoot);
document.querySelector('#fovState').addEventListener('click', FOV);

setInterval(function() {
	if (!objects.features) return;
	if (!utils.isGameReady) return;
	if (!document.querySelector(".shizoval_content > div.fly > input[type=range]:nth-child(3)")) return;

	document.querySelector(".shizoval_content > div.fly > input[type=range]:nth-child(3)").value = objects.features.fly.speed;
}, 10);


document.addEventListener('keydown', event => {
	if (utils.isChatOpen) return;

	if (event.keyCode == 16 && event.location == 2) flyHack();
	else if (event.keyCode == 45 || event.keyCode == 96) menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
});
function isPhone() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
    const mobilePrefixRegex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/;
    return mobileRegex.test(userAgent) || mobilePrefixRegex.test(userAgent.substr(0, 4)) || !!navigator.userAgentData.mobile;
}

let offsetX, offsetY, offsetXIcon, offsetYIcon, isDragging = false, isIconDragging = false, canDrag = true;
if (isPhone()) {
    const floatingIcon = document.createElement("div");
    floatingIcon.classList.add("floating_icon");
    floatingIcon.addEventListener("click", () => {
    menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
    })};