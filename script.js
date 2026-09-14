const GAMES = [
  "1","10-minutes-till-dawn","100ng","1v1lol","1v1space","2020-game","2048-multitask","2048",
  "8ball-billards-classic","9007199254740992","DogeMiner","FullScreenMario","HexGL",
  "OfflineParadise","Squid Gun Fest","Stickman-Survival","achievementunlocked","adarkroom",
  "adrenalinechallenge","age-of-war","alien-invaders-io","alienhominid","align-4","among-us",
  "angry-birds","anti-terrorist-rush","arcade-wizard","asciispace","aspiring-artist","asteroids",
  "astray","avalanche","awesome-tanks-2","backcountry","backflip-dive-3d","backrooms",
  "bad-ice-cream-2","bad-ice-cream-3","bad-ice-cream","baldis-basics","basket-bros-io",
  "basketball-io","basketball-legends-2020","basketball-stars","battleforgondor","bigredbutton",
  "binding-of-isaac","bitlife","blacholesquare","blackholesquare","blackknight","blocky-snakes",
  "bloonstd","bloonstd2","bloxors","bounceback","boxel-rebound","boxhead2play","brave-explorers",
  "breakingthebank","breaklock","breakout","btd4","btts","burning-man-2","cannon-basketball-4",
  "canyondefense","captaincallisto","cars-simulator","cell-machine","championarcher","chess",
  "chill-radio","chromaincident","chrome-dino","chromedino","circlo","city-blocks-2","clean-up-io",
  "cluster-rush","color-switch-2-challenges","connect3","cookie-clicker","cookieclicker","core-ball",
  "craftmine","creativekillchamber","crossyroad","crowd city 2","csgo-clicker","ctr-holiday",
  "ctr-tr","ctr","cubefield","cupcake2048","cuttherope","cuttherope2","dadish","dadish3","dadishtwo",
  "dante","deal-or-no-deal","death-run-3d","death-soul","deathrun","defend-the-tank","dino",
  "doctor-acorn2","dodge","doge-miner-2","doge-mining-simulator","doge2048",
  "dont-drop-the-white-ball-2","doodle-jump","doublewires","douchebag-workout-2","dragon-vs-bricks",
  "draw-the-hill","drive-mad","duck-life-treasurehunt","ducklife","ducklife1","ducklife2",
  "ducklife3","ducklife4","duke-dashington-remastered","dungeon-craft","edge-surf","edgenotfound",
  "elastic-face","elasticman","emulator-js","endlesswar3","escapingtheprison","evil-glitch",
  "evilglitch","evolution","exo","factory-balls-forever","factoryballs","factoryballsforever",
  "fake-virus","fancypantsadventures","fbwg","finns-fantastic-food-machine",
  "fireboywatergirlforesttemple","fireice","firewater","flappy-2048","flappy-bird","flappy-defense",
  "flappybird","flashtetris","flippy-fish","flood-runner-2","fridaynightfunkin","friendlyfire",
  "froggys-battle","fruitninja","frying-nemo","game-inside","generic-fishing-game","geodash-2",
  "geodash","geometry_jump_sketchy","geometrydash","georgeandtheprinter","getaway-shootout",
  "getting-over-it","gimme-the-airpod","glass-city","go-ball","golf","goodnight","google-snake",
  "google-solitaire","gopher","gravity-soccer","green","greybox","grindcraft","grow-in-the-hole",
  "gun-mayhem-2","gun-mayhem-redux","gun-mayhem","gunspin","hackertype","happy-hop",
  "happy-wheels","hba","helicopter","helios","hexempire","hextris","house-of-hazards",
  "icys-purple-head","idle-breakout","idle-shark","impossiblequiz","interactivebuddy",
  "iscribble-io","jelly-truck","jetpack","jimothy-piggerton","just-one-boss","justfall",
  "kart-fight-io","kitchen-gun-game","kittencannon","klocki","konnekt","krunker","learntofly",
  "learntofly2","line-rider","linquest","madalin-stunt-cars-2","madalin-stunt-cars-3",
  "makeitmeme","mario","marvinspectrum","matrixrampage","mc1.5.2","mcbeta0.30","mcbeta1.3",
  "meat-boy","meme2048","minecraft-classic","minecraft","minecraftbeta","minesweeper",
  "mini-stilts","miniputt","missiles","moto-x3m-2","moto-x3m-pool-party","motox3m-pool",
  "motox3m-spooky","motox3m-winter","motox3m","motox3m2","motox3mwinter","my-friend-pedro",
  "n-gon","ninja","ninjavsevilcorp","ns-shaft","om-bounce","one-screen-run-2","one-screen-run",
  "osu","ovo","packabunchas","pacman-fps","pacman","pandemic2","papa-louie","papas-burgeria",
  "papas-freezeria","papas-hot-doggeria","papas-pancakeria","papas-pizzeria","papas-sushiria",
  "papas-wingeria","papasburgeria","papaspizzaria","paperio2","papery-planes","particle-clicker",
  "particleclicker","path-finder","pe-noire","pikwip","pixel-cave","pizzeria-simulator",
  "polybranch","popcat-classic","portalflash","precision-client","protektor","push-the-square",
  "push-your-luck","pushback","puzzle-ball","pvz-2","q1k3","racer","radiusraid","retro-bowl",
  "retrobowl","retrohaunt","rise-of-neon-square","roadblocks","rocking-sky-trip","rolling-forests",
  "rolly-vortex","rooftop-snipers","run-3","run3","sand-game","sandboxels","scrambled-eggs",
  "scrapmetal","senya-and-oscar-2","sg","shadow-world-adventure","shards","shift-flash-2",
  "shift-flash","short-life-2","short-ride","shuttledeck","skyblock","sleepingbeauty",
  "slice-of-sasha","slither snake","slither","slope-ball","slope","slope2","sm63","sm64",
  "smashkarts","smokingbarrels","snake","snowbattle","soldier-legend","solitaire",
  "sonic-the-hedgehog","sort-the-court","soundboard","space-company","spacecompany","spacegarden",
  "spacehuggers","spelunky","ssf","stack-bump-3d","stack","station-141","stealingthediamond",
  "stick-archers-battle","stickclimb","stickman-boost","stickman-dismount","stickman-epic-battle",
  "stickman-golf","stickman","stickwar","stormthehouse2","subway-surfers-bali","subway-surfers",
  "super-mario-maker-online","super-puffer-fish-3d","superhero-io","superhot",
  "supermarioconstruct","swerve","synesthesia","tactical-weapon-pack-2","tacticalassasin2",
  "tail-of-the-dragon","tam-indian-truck-simulator-3d","tank-trouble-2","tanuki-sunset",
  "temple-run-2","tetris","the-final-earth-2","the-final-earth","the-impossible-quiz-2",
  "the-impossible-quiz","the-little-giant","thebattle","theheist","themazeofspacegoblins",
  "there-is-no-game","thisistheonlylevel","time-shooter-3","tiny-fishing","tiny-fragments",
  "tiny-islands","topple-adventure","tosstheturtle","tough-growth","towermaster","townscaper",
  "trimps","tube-jumpers","tunnel-rush","tunnelz","tv-static","twitch-tetris","underrun",
  "unfold-2","up-left-out","veloce","vex3","vex4","vex5","vex6","vex7","waterworks","webretro",
  "winter-falling-price","wipo","wolf3d","wordle","worlds-hardest-game-2","worlds-hardest-game",
  "x-trial-racing","xx142-b2exe","yoshifabrication","you-are-bezos","zig-zag","zombocalypse",
  "zombs-royale"
];

const CATEGORIES = {
  action: ["among-us","angry-birds","anti-terrorist-rush","awesome-tanks-2","backrooms",
    "battleforgondor","blackknight","boxhead2play","breakingthebank","creativekillchamber",
    "deathrun","defend-the-tank","endlesswar3","evil-glitch","evilglitch","gun-mayhem",
    "gun-mayhem-2","gun-mayhem-redux","house-of-hazards","just-one-boss","madalin-stunt-cars-2",
    "madalin-stunt-cars-3","matrixrampage","ninja","ninjavsevilcorp","protektor",
    "station-141","tactical-weapon-pack-2","tacticalassasin2","tank-trouble-2","time-shooter-3",
    "zombocalypse","zombs-royale","smashkarts","krunker","piston","stickman-epic-battle",
    "stickman-dismount","stickwar","stormthehouse2","short-life-2","short-ride"],
  puzzle: ["2048","2048-multitask","bad-ice-cream","bad-ice-cream-2","bad-ice-cream-3",
    "breaklock","cell-machine","chess","circlo","connect3","core-ball","cuttherope",
    "cuttherope2","klocki","path-finder","puzzle-ball","push-the-square","pushback",
    "sort-the-court","tetris","the-impossible-quiz","the-impossible-quiz-2","worlds-hardest-game",
    "worlds-hardest-game-2","color-switch-2-challenges","flappy-2048","cupcake2048","doge2048",
    "meme2048","blackholesquare","blacholesquare"],
  io: ["1v1lol","1v1space","alien-invaders-io","basket-bros-io","basketball-io","blocky-snakes",
    "clean-up-io","crowd city 2","iscribble-io","kart-fight-io","paperio2","slither",
    "slither snake","superhero-io","zombs-royale","smashkarts","krunker"],
  platformer: ["geometrydash","geometry_jump_sketchy","geodash","geodash-2","slope","slope2",
    "slope-ball","run-3","run3","vex3","vex4","vex5","vex6","vex7","boxel-rebound",
    "doodle-jump","happy-hop","dadish","dadishtwo","dadish3","just-one-boss","ovo",
    "one-screen-run","one-screen-run-2","n-gon","roll-about","flippy-fish"," stickman-boost"],
  sports: ["8ball-billards-classic","basketball-legends-2020","basketball-stars",
    "cannon-basketball-4","golf","miniputt","stickman-golf","motox3m","motox3m2",
    "motox3mwinter","moto-x3m-2","moto-x3m-pool-party","motox3m-pool","motox3m-spooky",
    "motox3m-winter","gravity-soccer","retro-bowl","retrobowl"],
  idle: ["cookie-clicker","cookieclicker","idle-breakout","idle-shark","particle-clicker",
    "particleclicker","DogeMiner","doge-miner-2","doge-mining-simulator","bitlife",
    "space-company","spacecompany","grindcraft"],
  classic: ["asteroids","breakout","pacman","pacman-fps","flappy-bird","flappybird",
    "flashtetris","snake","chrome-dino","chromedino","doodle-jump","mario","FullScreenMario",
    "supermarioconstruct","sonic-the-hedgehog","pacman","flappy-bird","cuttherope",
    "fruitninja","angry-birds","line-rider","cubefield","helicopter"]
};

const ICONS = {
  action: "\u2694\uFE0F",
  puzzle: "\uD83E\uDDE9",
  io: "\uD83C\uDF10",
  platformer: "\uD83D\uDEB2",
  sports: "\u26BD",
  idle: "\uD83D\uDCB0",
  classic: "\uD83C\uDFAE",
  default: "\u25B6"
};

function getCategory(id) {
  const lower = id.toLowerCase();
  for (const [cat, games] of Object.entries(CATEGORIES)) {
    if (games.some(g => g.toLowerCase() === lower)) return cat;
  }
  if (lower.includes("io")) return "io";
  if (lower.includes("2048") || lower.includes("clicker") || lower.includes("idle")) return "idle";
  if (lower.includes("ball") || lower.includes("basket") || lower.includes("soccer") || lower.includes("golf") || lower.includes("moto")) return "sports";
  if (lower.includes("slope") || lower.includes("run") || lower.includes("vex") || lower.includes("jump") || lower.includes("doodle")) return "platformer";
  return "default";
}

function getIcon(cat) {
  return ICONS[cat] || ICONS.default;
}

function formatName(id) {
  return id
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bIo\b/i, '.io');
}

let currentFilter = 'all';
let searchQuery = '';

function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const noResults = document.getElementById('noResults');
  grid.innerHTML = '';

  const filtered = GAMES.filter(id => {
    const matchesSearch = !searchQuery ||
      id.toLowerCase().includes(searchQuery) ||
      formatName(id).toLowerCase().includes(searchQuery);
    const matchesFilter = currentFilter === 'all' || getCategory(id) === currentFilter;
    return matchesSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  const fragment = document.createDocumentFragment();
  filtered.forEach(id => {
    const cat = getCategory(id);
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = 'game.html?id=' + encodeURIComponent(id);
    card.innerHTML = `
      <div class="game-icon">${getIcon(cat)}</div>
      <div class="game-name">${formatName(id)}</div>
    `;
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderGames();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGames();
  });
});

document.getElementById('gameCount').textContent = GAMES.length + ' games';
renderGames();
