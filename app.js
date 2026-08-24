
const MASTER=[{"name": "Disneyland Paris — Parc Disneyland", "region": "France", "attractions": ["Big Thunder Mountain", "Star Wars Hyperspace Mountain", "Phantom Manor", "Pirates of the Caribbean", "Star Tours : L’Aventure Continue", "Indiana Jones et le Temple du Péril", "Buzz Lightyear Laser Blast", "Peter Pan’s Flight", "It’s a Small World"]}, {"name": "Disney Adventure World", "region": "France", "attractions": ["Frozen Ever After", "Crush’s Coaster", "The Twilight Zone Tower of Terror", "Ratatouille : L’Aventure Totalement Toquée de Rémy", "Avengers Assemble: Flight Force", "Spider-Man W.E.B. Adventure", "RC Racer", "Raiponce Tangled Spin", "Disney Cascade of Lights"]}, {"name": "Parc Astérix", "region": "France", "attractions": ["Toutatis", "OzIris", "Tonnerre 2 Zeus", "Pégase Express", "Goudurix", "Cétautomatix", "Discobélix", "Menhir Express", "Romus et Rapidus", "La Revanche des Pirates – Grand Splatch"]}, {"name": "Futuroscope", "region": "France", "attractions": ["Mission Bermudes", "Chasseurs de Tornades", "Objectif Mars", "L’Extraordinaire Voyage", "Danse avec les Robots", "Arthur, l’Aventure 4D", "Étincelle : la Malédiction de l’Opale Noire", "Aquascope"]}, {"name": "Puy du Fou", "region": "France", "attractions": ["Le Mime et l’Étoile", "Le Signe du Triomphe", "Les Vikings", "Le Dernier Panache", "Le Bal des Oiseaux Fantômes", "Mousquetaire de Richelieu", "Les Noces de Feu", "La Cinéscénie"]}, {"name": "Nigloland", "region": "France", "attractions": ["Alpina Blitz", "Krampus Expédition", "Le Donjon de l’Extrême", "Grizzli", "Noisette Express"]}, {"name": "Walibi Rhône-Alpes", "region": "France", "attractions": ["Mahuka", "Mystic", "Timber", "Generator", "Hurricane"]}, {"name": "Le PAL", "region": "France", "attractions": ["Yukon Quad", "Le Twist", "Azteka", "Fjord Explorer", "Alligator Baie", "Parc animalier"]}, {"name": "Parc Spirou Provence", "region": "France", "attractions": ["Spirou Racing", "Zombillénium Tower", "Gaffe de Gaston", "Lucky River", "Zone Naruto"]}, {"name": "OK Corral", "region": "France", "attractions": []}, {"name": "Fraispertuis City", "region": "France", "attractions": []}, {"name": "Walygator Grand Est", "region": "France", "attractions": []}, {"name": "Walygator Sud-Ouest", "region": "France", "attractions": []}, {"name": "La Mer de Sable", "region": "France", "attractions": []}, {"name": "Parc Saint-Paul", "region": "France", "attractions": []}, {"name": "Parc Bagatelle", "region": "France", "attractions": []}, {"name": "Jardin d’Acclimatation", "region": "France", "attractions": []}, {"name": "Terra Botanica", "region": "France", "attractions": []}, {"name": "Vulcania", "region": "France", "attractions": []}, {"name": "Parc du Petit Prince", "region": "France", "attractions": []}, {"name": "La Récré des 3 Curés", "region": "France", "attractions": []}, {"name": "Festyland", "region": "France", "attractions": []}, {"name": "Europa-Park", "region": "Europe", "attractions": ["Voltron Nevera", "Silver Star", "Blue Fire Megacoaster", "WODAN Timburcoaster", "Arthur", "Eurosat – CanCan Coaster", "Pirates de Batavia", "Voletarium", "Poseidon"]}, {"name": "Rulantica", "region": "Europe", "attractions": ["Vinter Rytt", "Svalgur Rytt", "Vildstrøm", "Vikingløp", "Tønnevirvel"]}, {"name": "Phantasialand", "region": "Europe", "attractions": ["Taron", "F.L.Y.", "Black Mamba", "Chiapas", "Mystery Castle", "Talocan", "Colorado Adventure"]}, {"name": "Efteling", "region": "Europe", "attractions": ["Baron 1898", "Danse Macabre", "Symbolica", "Droomvlucht", "De Vliegende Hollander", "Joris en de Draak", "Python", "Fata Morgana", "Villa Volta"]}, {"name": "PortAventura Park", "region": "Europe", "attractions": ["Shambhala", "Dragon Khan", "Furius Baco", "Uncharted", "Hurakan Condor", "Stampida", "Tutuki Splash", "El Diablo"]}, {"name": "Ferrari Land", "region": "Europe", "attractions": ["Red Force", "Flying Dreams", "Thrill Towers", "Racing Legends", "Maranello Grand Race"]}, {"name": "Parque Warner Madrid", "region": "Europe", "attractions": ["Batman Gotham City Escape", "Superman", "Stunt Fall", "Coaster Express", "La Venganza del Enigma"]}, {"name": "Energylandia", "region": "Europe", "attractions": ["Zadra", "Hyperion", "Abyssus", "Formula", "Speed", "Mayan"]}, {"name": "Alton Towers", "region": "Europe", "attractions": ["Nemesis Reborn", "The Smiler", "Wicker Man", "Oblivion", "Galactica", "Th13teen"]}, {"name": "Thorpe Park", "region": "Europe", "attractions": ["Hyperia", "Stealth", "The Swarm", "Colossus", "SAW – The Ride"]}, {"name": "Gardaland", "region": "Europe", "attractions": ["Raptor", "Oblivion", "Blue Tornado", "Jumanji – The Adventure", "Mammut"]}, {"name": "Liseberg", "region": "Europe", "attractions": ["Helix", "Valkyria", "Balder", "Loke"]}, {"name": "Tivoli Gardens", "region": "Europe", "attractions": ["Dæmonen", "Rutschebanen", "The Star Flyer", "The Golden Tower"]}, {"name": "Plopsaland Belgium", "region": "Europe", "attractions": ["Ride to Happiness", "Anubis The Ride", "Heidi The Ride"]}, {"name": "Magic Kingdom", "region": "USA", "attractions": ["TRON Lightcycle / Run", "Seven Dwarfs Mine Train", "Tiana’s Bayou Adventure", "Space Mountain", "Haunted Mansion", "Pirates of the Caribbean", "Peter Pan’s Flight"]}, {"name": "EPCOT", "region": "USA", "attractions": ["Guardians of the Galaxy: Cosmic Rewind", "Remy’s Ratatouille Adventure", "Frozen Ever After", "Test Track", "Soarin’ Around the World", "Spaceship Earth"]}, {"name": "Disney’s Hollywood Studios", "region": "USA", "attractions": ["Star Wars: Rise of the Resistance", "Millennium Falcon: Smugglers Run", "The Twilight Zone Tower of Terror", "Slinky Dog Dash", "Mickey & Minnie’s Runaway Railway"]}, {"name": "Disney’s Animal Kingdom", "region": "USA", "attractions": ["Avatar Flight of Passage", "Expedition Everest", "Kilimanjaro Safaris", "Na’vi River Journey"]}, {"name": "Universal Studios Florida", "region": "USA", "attractions": ["Harry Potter and the Escape from Gringotts", "Revenge of the Mummy", "Men in Black: Alien Attack", "E.T. Adventure", "The Bourne Stuntacular"]}, {"name": "Islands of Adventure", "region": "USA", "attractions": ["Jurassic World VelociCoaster", "Hagrid’s Magical Creatures Motorbike Adventure", "Harry Potter and the Forbidden Journey", "The Incredible Hulk Coaster", "The Amazing Adventures of Spider-Man", "Jurassic Park River Adventure"]}, {"name": "Epic Universe", "region": "USA", "attractions": ["Stardust Racers", "Harry Potter and the Battle at the Ministry", "Monsters Unchained: The Frankenstein Experiment", "Mario Kart: Bowser’s Challenge", "Mine-Cart Madness", "Hiccup’s Wing Gliders", "Curse of the Werewolf", "Yoshi’s Adventure"]}, {"name": "Disneyland Park — Californie", "region": "USA", "attractions": ["Star Wars: Rise of the Resistance", "Indiana Jones Adventure", "Space Mountain", "Matterhorn Bobsleds", "Tiana’s Bayou Adventure", "Haunted Mansion", "Pirates of the Caribbean", "Millennium Falcon: Smugglers Run"]}, {"name": "Disney California Adventure", "region": "USA", "attractions": ["Radiator Springs Racers", "Guardians of the Galaxy – Mission: BREAKOUT!", "Incredicoaster", "Soarin’ Around the World", "WEB SLINGERS: A Spider-Man Adventure", "Grizzly River Run"]}, {"name": "Universal Studios Hollywood", "region": "USA", "attractions": ["Mario Kart: Bowser’s Challenge", "Jurassic World – The Ride", "Harry Potter and the Forbidden Journey", "Revenge of the Mummy", "Studio Tour", "Transformers: The Ride 3D"]}, {"name": "Tokyo Disneyland", "region": "Asia", "attractions": ["Enchanted Tale of Beauty and the Beast", "Pooh’s Hunny Hunt", "Splash Mountain", "Monsters, Inc. Ride & Go Seek!", "Big Thunder Mountain", "Haunted Mansion"]}, {"name": "Tokyo DisneySea", "region": "Asia", "attractions": ["Journey to the Center of the Earth", "Soaring: Fantastic Flight", "Tower of Terror", "Anna and Elsa’s Frozen Journey", "Peter Pan’s Never Land Adventure", "Rapunzel’s Lantern Festival", "Indiana Jones Adventure"]}, {"name": "Universal Studios Japan", "region": "Asia", "attractions": ["Mario Kart: Koopa’s Challenge", "Mine Cart Madness", "Yoshi’s Adventure", "Harry Potter and the Forbidden Journey", "The Flying Dinosaur", "Hollywood Dream – The Ride"]}, {"name": "Shanghai Disneyland", "region": "Asia", "attractions": ["Zootopia: Hot Pursuit", "TRON Lightcycle Power Run", "Pirates of the Caribbean: Battle for the Sunken Treasure", "Seven Dwarfs Mine Train", "Roaring Rapids", "Peter Pan’s Flight"]}, {"name": "Hong Kong Disneyland", "region": "Asia", "attractions": ["Frozen Ever After", "Wandering Oaken’s Sliding Sleighs", "Mystic Manor", "Big Grizzly Mountain Runaway Mine Cars", "Iron Man Experience", "Hyperspace Mountain"]}, {"name": "Universal Studios Singapore", "region": "Asia", "attractions": ["Battlestar Galactica: HUMAN", "Battlestar Galactica: CYLON", "Transformers: The Ride", "Revenge of the Mummy", "Jurassic Park Rapids Adventure", "Despicable Me Minion Mayhem"]}, {"name": "Everland", "region": "Asia", "attractions": ["T Express", "Rolling X-Train", "Lost Valley", "Safari World"]}, {"name": "Lotte World", "region": "Asia", "attractions": ["Atlantis", "French Revolution", "Gyro Drop", "Gyro Swing"]}, {"name": "Ferrari World Abu Dhabi", "region": "Middle East", "attractions": ["Formula Rossa", "Flying Aces", "Mission Ferrari", "Turbo Track"]}, {"name": "Warner Bros. World Abu Dhabi", "region": "Middle East", "attractions": ["Batman: Knight Flight", "The Riddler Revolution", "Green Lantern: Galactic Odyssey", "Scooby-Doo: The Museum of Mysteries", "Fast and Furry-ous"]}];

const STORAGE_KEY='park-checklist-v2';
const OLD_KEYS=['park-checklist-v1'];

function makeFresh(){
  return MASTER.map((p,pi)=>({
    ...p,
    id:'p'+pi,
    done:false,
    attractions:p.attractions.map((name,ai)=>({id:'p'+pi+'a'+ai,name,done:false}))
  }));
}

function normalize(s){return String(s??'').trim().toLowerCase();}

function readSaved(){
  let raw=null;
  try{ raw=localStorage.getItem(STORAGE_KEY); }catch(e){}
  if(!raw){
    for(const k of OLD_KEYS){
      try{ const v=localStorage.getItem(k); if(v){raw=v;break;} }catch(e){}
    }
  }
  if(!raw)return null;
  try{ const parsed=JSON.parse(raw); return Array.isArray(parsed)?parsed:(Array.isArray(parsed.parks)?parsed.parks:null); }catch(e){ return null; }
}

function mergeWithSaved(saved){
  const fresh=makeFresh();
  if(!Array.isArray(saved))return fresh;

  const savedByPark=new Map(saved.map(p=>[normalize(p.name),p]));
  for(const p of fresh){
    const old=savedByPark.get(normalize(p.name));
    if(!old)continue;
    p.done=!!old.done;
    const oldRides=new Map((Array.isArray(old.attractions)?old.attractions:[]).map(a=>[normalize(a.name),a]));
    for(const a of p.attractions){
      const oa=oldRides.get(normalize(a.name));
      if(oa)a.done=!!oa.done;
    }
  }

  // Keep user's custom parks and attractions that are not part of the master list.
  const masterNames=new Set(fresh.map(p=>normalize(p.name)));
  for(const old of saved){
    if(masterNames.has(normalize(old.name)))continue;
    if(!old || !String(old.name||'').trim())continue;
    fresh.push({
      id:'custom'+Date.now()+Math.random().toString(36).slice(2,7),
      name:String(old.name).trim(),
      region:['France','Europe','USA','Asia','Middle East'].includes(old.region)?old.region:'Europe',
      done:!!old.done,
      attractions:Array.isArray(old.attractions)?old.attractions.map((a,i)=>({
        id:'customa'+Date.now()+i,
        name:String(a.name||'Attraction').trim(),
        done:!!a.done
      })):[]
    });
  }
  return fresh;
}

let parks=mergeWithSaved(readSaved());
const $=s=>document.querySelector(s);
const list=$('#parks'),search=$('#search'),region=$('#region'),parkSelect=$('#parkSelect');

function save(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(parks));}catch(e){}
}
function safe(v){return String(v??'').trim();}
function stats(){
  const all=parks.flatMap(p=>p.attractions), done=all.filter(a=>a.done).length;
  $('#parksDone').textContent=parks.filter(p=>p.done).length;
  $('#ridesDone').textContent=done;
  $('#ridesLeft').textContent=Math.max(0,all.length-done);
  $('#progress').style.width=(all.length?Math.round(done/all.length*100):0)+'%';
}
function updateSelect(){
  const cur=parkSelect.value;parkSelect.innerHTML='';
  parks.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.name;parkSelect.appendChild(o)});
  if(parks.some(p=>p.id===cur))parkSelect.value=cur;
}
function render(){
  list.innerHTML='';
  const q=safe(search.value).toLowerCase(),r=region.value;
  const filtered=parks.filter(p=>(r==='all'||p.region===r)&&(!q||p.name.toLowerCase().includes(q)||p.attractions.some(a=>a.name.toLowerCase().includes(q))));
  $('#count').textContent=filtered.length+' parc'+(filtered.length>1?'s':'');
  filtered.forEach(p=>{
    const card=document.createElement('article');card.className='park';
    const head=document.createElement('div');head.className='park-head';
    const pc=document.createElement('input');pc.type='checkbox';pc.className='check';pc.checked=!!p.done;pc.setAttribute('aria-label','Parc visité : '+p.name);
    pc.addEventListener('change',()=>{p.done=pc.checked;save();stats();});
    const t=document.createElement('div');
    const n=document.createElement('div');n.className='park-name';n.textContent=p.name;
    const d=document.createElement('div');d.className='park-meta';
    const c=p.attractions.filter(a=>a.done).length;
    d.textContent=p.region+' · '+c+'/'+p.attractions.length+' attractions';
    t.append(n,d);
    const b=document.createElement('span');b.className='badge';
    b.textContent=p.attractions.length?Math.round(c/p.attractions.length*100)+' %':(p.done?'Visité':'À faire');
    head.append(pc,t,b);card.appendChild(head);

    if(p.attractions.length){
      const attrs=document.createElement('div');attrs.className='attrs';
      p.attractions.forEach(a=>{
        if(q&&!p.name.toLowerCase().includes(q)&&!a.name.toLowerCase().includes(q))return;
        const row=document.createElement('div');row.className='attr';
        const cb=document.createElement('input');cb.type='checkbox';cb.checked=!!a.done;cb.id=a.id;
        cb.addEventListener('change',()=>{a.done=cb.checked;save();render();});
        const lab=document.createElement('label');lab.htmlFor=a.id;lab.textContent=a.name;
        row.append(cb,lab);attrs.appendChild(row);
      });
      card.appendChild(attrs);
    }
    list.appendChild(card);
  });
  if(!filtered.length){
    const e=document.createElement('div');e.className='card muted';e.textContent='Aucun résultat.';list.appendChild(e);
  }
  stats();
}
search.addEventListener('input',render);
region.addEventListener('change',render);

$('#addPark').addEventListener('click',()=>{
  const name=safe($('#newPark').value),reg=$('#newRegion').value;
  if(!name)return $('#editMsg').textContent='Entre un nom de parc.';
  if(parks.some(p=>normalize(p.name)===normalize(name)))return $('#editMsg').textContent='Ce parc existe déjà.';
  const id='c'+Date.now();
  parks.push({id,name,region:reg,done:false,attractions:[]});
  $('#newPark').value='';save();updateSelect();render();parkSelect.value=id;$('#editMsg').textContent='Parc ajouté.';
});
$('#addRide').addEventListener('click',()=>{
  const name=safe($('#newRide').value),p=parks.find(x=>x.id===parkSelect.value);
  if(!p||!name)return $('#editMsg').textContent='Choisis un parc et entre une attraction.';
  if(p.attractions.some(a=>normalize(a.name)===normalize(name)))return $('#editMsg').textContent='Cette attraction existe déjà.';
  p.attractions.push({id:p.id+'a'+Date.now(),name,done:false});
  $('#newRide').value='';save();render();$('#editMsg').textContent='Attraction ajoutée.';
});
$('#export').addEventListener('click',()=>{
  $('#data').value=JSON.stringify({version:2,parks},null,2);
  $('#dataMsg').textContent='Export généré.';
});
$('#import').addEventListener('click',()=>{
  try{
    const obj=JSON.parse($('#data').value);
    const incoming=Array.isArray(obj)?obj:obj.parks;
    if(!Array.isArray(incoming))throw 0;
    parks=mergeWithSaved(incoming);save();updateSelect();render();$('#dataMsg').textContent='Import réussi.';
  }catch(e){$('#dataMsg').textContent='Export invalide.'}
});
$('#reset').addEventListener('click',()=>{
  if(!confirm('Réinitialiser toute la progression ?'))return;
  parks=makeFresh();save();updateSelect();render();$('#dataMsg').textContent='Progression réinitialisée.';
});

save();
updateSelect();
render();
