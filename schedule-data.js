/* =========================================================
   SLAM — közös műsorrend-adat.
   Ezt tölti be mind az index.html, mind a musorrend.html
   a saját logikai <script>-jük ELŐTT, így a DAYS_FULL,
   DAYS_SHORT, HU_MONTHS_ABBR, DJ_PHOTOS és SHOWS globális
   változók mindkét helyen elérhetők — a műsorrendet mostantól
   csak ITT kell szerkeszteni.

   EGYEDI MŰSOROLDAL-LINK: ha egy adott műsorhoz saját oldal
   tartozik (nem a generikus musor-reszlet.html sablon), add
   hozzá az "url" mezőt az adott bejegyzéshez, pl.:
     {time:'20:00',end:'21:00',name:'Global Dance Radio', dj:'Rudy Cassago',
      desc:'...', genre:'Music', initial:'GDC TOP20',
      url:'/musor/global-dance-radio.html'}
   Ha nincs megadva "url", a link automatikusan a
   musor-reszlet.html?nev=<szlög>-re mutat.
   ========================================================= */

var DAYS_FULL  = ['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap'];
var DAYS_SHORT = ['Hét','Ke','Sze','Csüt','Pén','Szo','Vas'];
var HU_MONTHS_ABBR = ['JAN','FEBR','MÁRC','ÁPR','MÁJ','JÚN','JÚL','AUG','SZEPT','OKT','NOV','DEC'];

var DJ_PHOTOS = {
  // 'Kalla Dzsínó': 'img/01/dzsino2.png',
  'Club Vibes Radio': 'img/01',
  // 'Rázga Zsombor': 'img/01/zsombi.png',
  'Rudy Cassago': 'img/01/gdc.svg',
  'Armin Van Buuren': 'img/01/armin.png',
  'Nicky Romero': 'img/01/nicky.png',
  'Afrojack': 'img/01/afrojack.png',
  // 'Hardwell': 'img/01/hardwell.png',
  // 'Martin Garrix': 'img/01/martin.png',
  // 'David Guetta': 'img/01/david.png',
  'Tiësto': 'img/01/tiesto.png',
  'Oliver Heldens': 'img/01/oliver.png',
  'Spinnin Records': 'img/01/Spinnin.png',
  'DJ Dark': 'img/01/djdark.png',
  // 'Sam Feldt': 'img/01/samfeldt.png',
};

var SHOWS = {
  0:[
    {time:'00:00',end:'07:00',name:'WE. LOVE. NIGHT', dj:'', desc:'Megállás nélkül a legjobb SLAM-zenék, a legtöbb DANCE és ELEKTRONIKUS zenével fűszerezve.',genre:'Music',initial:'NON-STOP', url:'.'},
    {time:'07:00',end:'10:00',name:'EARLY BIRDS', dj:'', desc:'',genre:'Music',initial:'EARLY B.'},
    {time:'10:00',end:'12:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WORK', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'16:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'16:00',end:'19:00',name:'SLAM AFTERNOON', dj:'', desc:'',genre:'Music',initial:'AFTERNOON'},
    {time:'19:00',end:'21:00',name:'SLAM THROWBACK', dj:'', desc:'',genre:'Music',initial:'SLAM THROWBACK'},
    {time:'21:00',end:'00:00',name:'EVENING BITES', dj:'', desc:'',genre:'Music',initial:'NIGHT'},
  ],
  1:[
    {time:'00:00',end:'07:00',name:'WE. LOVE. NIGHT', dj:'', desc:'Megállás nélkül a legjobb SLAM-zenék, a legtöbb DANCE és ELEKTRONIKUS zenével fűszerezve.',genre:'Music',initial:'NON-STOP'},
    {time:'07:00',end:'10:00',name:'EARLY BIRDS', dj:'', desc:'',genre:'Music',initial:'EARLY B.'},
    {time:'10:00',end:'12:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WORK', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'16:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'16:00',end:'19:00',name:'SLAM AFTERNOON', dj:'', desc:'',genre:'Music',initial:'AFTERNOON'},
    {time:'19:00',end:'21:00',name:'SLAM THROWBACK', dj:'', desc:'',genre:'Music',initial:'SLAM THROWBACK'},
    {time:'21:00',end:'00:00',name:'EVENING BITES', dj:'', desc:'',genre:'Music',initial:'NIGHT'},
    
  ],
  2:[
    {time:'00:00',end:'07:00',name:'WE. LOVE. NIGHT', dj:'', desc:'Megállás nélkül a legjobb SLAM-zenék, a legtöbb DANCE és ELEKTRONIKUS zenével fűszerezve.',genre:'Music',initial:'NON-STOP'},
    {time:'07:00',end:'10:00',name:'EARLY BIRDS', dj:'', desc:'',genre:'Music',initial:'EARLY B.'},
    {time:'10:00',end:'12:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WORK', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'16:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'16:00',end:'19:00',name:'SLAM AFTERNOON', dj:'', desc:'',genre:'Music',initial:'AFTERNOON'},
    {time:'19:00',end:'21:00',name:'SLAM THROWBACK', dj:'', desc:'',genre:'Music',initial:'SLAM THROWBACK'},
    {time:'21:00',end:'00:00',name:'EVENING BITES', dj:'', desc:'',genre:'Music',initial:'NIGHT'},
  ],
  3:[
    {time:'00:00',end:'07:00',name:'WE. LOVE. NIGHT', dj:'', desc:'Megállás nélkül a legjobb SLAM-zenék, a legtöbb DANCE és ELEKTRONIKUS zenével fűszerezve.',genre:'Music',initial:'NON-STOP'},
    {time:'07:00',end:'10:00',name:'EARLY BIRDS', dj:'', desc:'',genre:'Music',initial:'EARLY B.'},
    {time:'10:00',end:'12:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WORK', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'16:00',name:'SLAM WORKDAY', dj:'', desc:'',genre:'Music',initial:'WORKDAY'},
    {time:'16:00',end:'19:00',name:'SLAM AFTERNOON', dj:'', desc:'',genre:'Music',initial:'AFTERNOON'},
    {time:'19:00',end:'21:00',name:'SLAM THROWBACK', dj:'', desc:'',genre:'Music',initial:'SLAM THROWBACK'},
    {time:'21:00',end:'00:00',name:'EVENING BITES', dj:'', desc:'',genre:'Music',initial:'NIGHT'},
  ],
  4:[
    {time:'00:00',end:'06:00',name:'WE. LOVE. NIGHT', dj:'', desc:'Megállás nélkül a legjobb SLAM-zenék, a legtöbb DANCE és ELEKTRONIKUS zenével fűszerezve.',genre:'Music',initial:'NON-STOP'},
    {time:'06:00',end:'07:00',name:'BEST OF WEEKENDER', dj:'', desc:'Az előző hét legjobb WEEKENDER mixe a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'07:00',end:'08:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'08:00',end:'09:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'09:00',end:'10:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'10:00',end:'12:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixmsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'11:00',end:'12:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'12:00',end:'13:00',name:'DJ DARK BY WEEKENDER', dj:'DJ Dark', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'13:00',end:'14:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'14:00',end:'15:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'15:00',end:'16:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},  
    {time:'16:00',end:'17:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'17:00',end:'18:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'18:00',end:'19:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'19:00',end:'20:00',name:'HELDEEP BY WEEKENDER', dj:'Oliver Heldens', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'20:00',end:'21:00',name:'PROTOCOL BY WEEKENDER', dj:'Nicky Romero', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'21:00',end:'22:00',name:'PRISMATIC BY WEEKENDER', dj:'Tiësto', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'22:00',end:'00:00',name:'ASOT BY WEEKENDER', dj:'Armin Van Buuren', desc:'A SLAM leghosszabb elektronikus mixműsora Armin Van Buuren vezetésével a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
  ],
  5:[
    {time:'00:00',end:'01:00',name:'SPINNIN BY WEEKENDER', dj:'Spinnin', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'01:00',end:'02:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'02:00',end:'03:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'03:00',end:'04:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'04:00',end:'05:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixmsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'05:00',end:'06:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'06:00',end:'07:00',name:'WEEKENDER', dj:'', desc:'A SLAM leghosszabb elektronikus mixműsora a hétvége elkezdéséhez.',genre:'Music',initial:'WEEKENDER'},
    {time:'07:00',end:'10:00',name:'GOOD MORNING!', dj:'', desc:'',genre:'Music',initial:'EARLY B.'},
    {time:'10:00',end:'12:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WEEKEND', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'17:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'17:00',end:'20:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'20:00',end:'21:00',name:'Global Dance Radio', dj:'Rudy Cassago', desc:'',genre:'Music',initial:'GDC TOP20'},          
    {time:'21:00',end:'00:00',name:'Club Vibes Radio', dj:'Club Vibes Radio', desc:'',genre:'Music',initial:'CVR'},          
  ],
  6:[
    {time:'00:00',end:'01:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'01:00',end:'02:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'02:00',end:'03:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'03:00',end:'04:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'04:00',end:'05:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'05:00',end:'06:00',name:'SLAM MIXES', dj:'', desc:'',genre:'Music',initial:'MIXES'},
    {time:'06:00',end:'10:00',name:'GOOD MORNING!', dj:'', desc:'',genre:'Music',initial:'GOOD MORNING!'},
    {time:'10:00',end:'12:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'12:00',end:'14:00',name:'HOUSE AT WEEKEND', dj:'', desc:'',genre:'Music',initial:'HOUSE'},
    {time:'14:00',end:'17:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'17:00',end:'21:00',name:'WEEKEND', dj:'', desc:'',genre:'Music',initial:'WEEKEND'},
    {time:'21:00',end:'00:00',name:'ChillOUT WEEKEND', dj:'', desc:'Megállás nélkül a legjobb lazító mixek a vasárnapi esti pihenéshez.',genre:'Music',initial:'CHILL'},
  ]
};
