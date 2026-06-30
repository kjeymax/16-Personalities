let currentLang = 'en';
let currentQ = 0;
let scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0,A:0,Tr:0};
let cameFromTypes = false;
let lastResultsCode = null;
let isForcedProfile = false;
let testMode = 'deep';
const quickTestIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19, 20, 21, 22, 26, 28, 29, 30, 31, 32, 33, 38, 40, 44];

const romanticMatches = {
  INTJ: {
    male: 'ENFP',
    female: 'ENTP',
    desc: {
      en: 'ENFP\'s open imagination and ENTP\'s logic complement the INTJ\'s strategic depth.',
      si: 'ENFP ගේ නිර්මාණශීලී නිදහස සහ ENTP ගේ බුද්ධිමය තර්කනය INTJ ගේ උපායශීලී ගැඹුර මනාව සම්පූර්ණ කරයි.'
    }
  },
  INTP: {
    male: 'ENTJ',
    female: 'ENFJ',
    desc: {
      en: 'ENTJ\'s drive and ENFJ\'s empathy bring inspiration to the INTP\'s quiet analytical world.',
      si: 'ENTJ ගේ නායකත්ව හැකියාව සහ ENFJ ගේ චිත්තවේගීය සංවේදීතාවය INTP ගේ විශ්ලේෂණ ලෝකයට නව ආලෝකයක් ගෙන දෙයි.'
    }
  },
  ENTJ: {
    male: 'INFP',
    female: 'INTP',
    desc: {
      en: 'INFP\'s deep values and INTP\'s precise logic ground the ENTJ\'s ambitious path.',
      si: 'INFP ගේ උසස් පරමාදර්ශයන් සහ INTP ගේ පිරිසිදු තර්කනය ENTJ ගේ දැඩි අභිලාෂයන් සමබර කිරීමට උපකාරී වේ.'
    }
  },
  ENTP: {
    male: 'INFJ',
    female: 'INTJ',
    desc: {
      en: 'INFJ\'s insight and INTJ\'s structure channel the ENTP\'s creative chaos.',
      si: 'INFJ ගේ ගැඹුරු අවබෝධය සහ INTJ ගේ ක්‍රමානුකූල බුද්ධිය ENTP ගේ නොසන්සුන් නිර්මාණශීලීත්වය නිවැරදි මඟට යොමු කරයි.'
    }
  },
  INFJ: {
    male: 'ENFP',
    female: 'ENFJ',
    desc: {
      en: 'ENFP\'s playfulness and ENFJ\'s shared empathy bring warmth to the INFJ\'s deep inner life.',
      si: 'ENFP ගේ සජීවී බව සහ ENFJ ගේ පොදු සහකම්පනය INFJ ගේ හුදකලා අභ්‍යන්තර ලෝකයට උණුසුම සහ සහනය ගෙන දෙයි.'
    }
  },
  INFP: {
    male: 'ENFJ',
    female: 'ENTJ',
    desc: {
      en: 'ENFJ\'s care and ENTJ\'s decisiveness support the INFP\'s gentle ideals.',
      si: 'ENFJ ගේ ආදරණීය රැකවරණය සහ ENTJ ගේ ස්ථාවර තීරණ ගැනීමේ ශක්තිය INFP ගේ මෘදු පරමාදර්ශී සිහින ආරක්ෂා කරයි.'
    }
  },
  ENFJ: {
    male: 'INFP',
    female: 'ISFP',
    desc: {
      en: 'INFP\'s deep loyalty and ISFP\'s artistic soul balance the ENFJ\'s giving nature.',
      si: 'INFP ගේ පිරිසිදු විශ්වාසවන්තභාවය සහ ISFP ගේ නිහඬ කලාත්මක ස්වභාවය ENFJ ගේ පරිත්‍යාගශීලී ගුණය මනාව අගය කරයි.'
    }
  },
  ENFP: {
    male: 'INTJ',
    female: 'INFJ',
    desc: {
      en: 'INTJ\'s focus and INFJ\'s quiet depth captivate and ground the ENFP\'s free spirit.',
      si: 'INTJ ගේ තියුණු අවධානය සහ INFJ ගේ නිහඬ ගැඹුරු බව ENFP ගේ නිදහස් චින්තනය ආකර්ෂණය කර ස්ථාවර කරයි.'
    }
  },
  ISTJ: {
    male: 'ESFP',
    female: 'ESTP',
    desc: {
      en: 'ESFP\'s joy and ESTP\'s active energy bring light to the ISTJ\'s structured duties.',
      si: 'ESFP ගේ විනෝදකාමී බව සහ ESTP ගේ ක්‍රියාශීලී ශක්තිය ISTJ ගේ රාජකාරිමය ජීවිතයට නව සතුටක් සහ සැහැල්ලුවක් එක් කරයි.'
    }
  },
  ISFJ: {
    male: 'ESFJ',
    female: 'ESTP',
    desc: {
      en: 'ESFJ\'s social dedication and ESTP\'s bold spirit protect the ISFJ\'s quiet devotion.',
      si: 'ESFJ ගේ සමාජයීය සේවය සහ ESTP ගේ නිර්භීත ස්වභාවය ISFJ ගේ නිහඬ කැපවීම තවදුරටත් ශක්තිමත් කරයි.'
    }
  },
  ESTJ: {
    male: 'ISFP',
    female: 'ISTP',
    desc: {
      en: 'ISFP\'s sensitivity and ISTP\'s mechanical skill balance the ESTJ\'s order.',
      si: 'ISFP ගේ කලාත්මක සංවේදීතාවය සහ ISTP ගේ ප්‍රායෝගික තාක්ෂණික කුසලතාවය ESTJ ගේ දැඩි නීතිමය ජීවිතය සමබර කරයි.'
    }
  },
  ESFJ: {
    male: 'ISFJ',
    female: 'ISFP',
    desc: {
      en: 'ISFJ\'s care and ISFP\'s creative charm soften the ESFJ\'s busy social life.',
      si: 'ISFJ ගේ විශ්වාසවන්ත රැකවරණය සහ ISFP ගේ කලාත්මක චමත්කාරය ESFJ ගේ කාර්යබහුල සමාජ ජීවිතය වඩාත් අර්ථවත් කරයි.'
    }
  },
  ISTP: {
    male: 'ESTJ',
    female: 'ESFJ',
    desc: {
      en: 'ESTJ\'s efficiency and ESFJ\'s warm support ground the ISTP\'s silent independence.',
      si: 'ESTJ ගේ සංවිධානාත්මක ශක්තිය සහ ESFJ ගේ උණුසුම් සහයෝගය ISTP ගේ නිහඬ ස්වාධීනත්වයට මනා පදනමක් සපයයි.'
    }
  },
  ISFP: {
    male: 'ENFJ',
    female: 'ESFJ',
    desc: {
      en: 'ENFJ\'s warmth and ESFJ\'s community focus nurture the ISFP\'s artistic soul.',
      si: 'ENFJ ගේ ආදරණීය උනන්දුව සහ ESFJ ගේ සමාජ සහයෝගීතාවය ISFP ගේ සන්සුන් කලාත්මක ආත්මය පෝෂණය කරයි.'
    }
  },
  ESTP: {
    male: 'ISFJ',
    female: 'ISTJ',
    desc: {
      en: 'ISFJ\'s gentle care and ISTJ\'s structure ground the ESTP\'s action-packed life.',
      si: 'ISFJ ගේ මෘදු ආදරය සහ ISTJ ගේ ස්ථාවර පාලනය ESTP ගේ ක්‍රියාදාමවලින් පිරුණු ජීවිතයට ආරක්ෂිත පදනමක් සපයයි.'
    }
  },
  ESFP: {
    male: 'ISTJ',
    female: 'ISFJ',
    desc: {
      en: 'ISTJ\'s stability and ISFJ\'s loyalty provide a safe harbor for the ESFP\'s energy.',
      si: 'ISTJ ගේ විශ්වාසවන්ත ස්ථාවරත්වය සහ ISFJ ගේ පිරිසිදු ආදරය ESFP ගේ දීප්තිමත් සමාජ ශක්තියට සුරක්ෂිත තෝතැන්නක් සපයයි.'
    }
  }
};

let activeMatrixTab = 'workplace';
let activeMatrixMode = 'dashboard';
let teamMembers = [];

function setLang(l){
  currentLang = l;
  universeCharacters = []; // invalidate cache so descriptions reload in the new language
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector(`.lang-btn:${l==='en'?'first-child':'last-child'}`).classList.add('active');
  if(l==='en'){document.body.classList.add('lang-en')}else{document.body.classList.remove('lang-en')}
  applyTranslations();
}

function esc(s){return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function t(key){return lang[currentLang][key]||key}
function tf(key,val){const el=document.querySelector(`[data-tf="${key}"]`);if(el){el.textContent=t(key)+' '+val}}

function applyTranslations(){
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key=el.getAttribute('data-t');
    el.textContent=t(key);
  });
  
  // Custom placeholder translation
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Custom HTML content translation
  document.querySelectorAll('[data-t-html]').forEach(el => {
    const key = el.getAttribute('data-t-html');
    el.innerHTML = t(key);
  });

  if(document.getElementById('questions').classList.contains('active') && currentQ < questions().length){
    renderQuestion();
  }
  if(document.getElementById('types-screen').classList.contains('active')){
    renderTypesScreen();
  }
  if(document.getElementById('matrix-screen').classList.contains('active')){
    populateMatrixDropdowns();
    if(activeMatrixMode === 'dashboard') {
      updateMatrixDashboard();
    } else {
      renderTeamRoster();
      calculateTeamChemistry();
    }
  }
  if(document.getElementById('results').classList.contains('active')){
    showResults(lastResultsCode);
  }
  if(document.getElementById('universe-screen') && document.getElementById('universe-screen').classList.contains('active')){
    filterUniverse();
    if(activeBattleCharacter) {
      openCharacterBattle(activeBattleCharacter.name);
    }
  }
  if(document.getElementById('growth-screen') && document.getElementById('growth-screen').classList.contains('active')){
    renderGrowthScreen();
  }
  if(document.getElementById('cognition-screen') && document.getElementById('cognition-screen').classList.contains('active')){
    updateCognitionMatch();
  }
}

function questions(){
  const allQs = lang[currentLang].questions;
  if (testMode === 'quick') {
    return quickTestIndices.map(idx => allQs[idx]);
  }
  return allQs;
}
function types(){return lang[currentLang].types}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

// ===== COGNITION CANVAS GLOBALS =====
let cognitionAnimFrameId = null;
let cognitionTime = 0;
let cognitionCurrentRGB = [155, 109, 255]; // Analyst Purple
let cognitionTargetRGB = [155, 109, 255];
const categoryColors = {
  analyst: [155, 109, 255],
  diplomat: [45, 212, 168],
  sentinel: [59, 130, 246],
  explorer: [245, 158, 11]
};

function renderCognitionScreen() {
  showScreen('cognition-screen');
  
  // Set slider values based on last results if available, otherwise default to 50
  if (lastResultsCode && !isForcedProfile) {
    const eP = pct(scores.E, scores.I);
    const sP = pct(scores.S, scores.N);
    const tP = pct(scores.T, scores.F);
    const jP = pct(scores.J, scores.P);
    const aP = pct(scores.A, scores.Tr);
    
    document.getElementById('mbti-slider-0').value = 100 - eP;
    document.getElementById('mbti-slider-1').value = 100 - sP;
    document.getElementById('mbti-slider-2').value = 100 - tP;
    document.getElementById('mbti-slider-3').value = 100 - jP;
    document.getElementById('mbti-slider-4').value = 100 - aP;
  } else {
    // Default to neutral (50)
    for (let i = 0; i < 5; i++) {
      document.getElementById(`mbti-slider-${i}`).value = 50;
    }
  }
  
  // Update UI and match calculations
  updateCognitionMatch();
  
  // Start Canvas animation
  initCognitionCanvas();
}

function onCognitionSliderInput(index) {
  updateCognitionMatch();
}

function updateCognitionMatch() {
  const sliders = [];
  for (let i = 0; i < 5; i++) {
    const val = parseInt(document.getElementById(`mbti-slider-${i}`).value);
    sliders.push(val);
    
    // Update percentages indicator text
    document.getElementById(`slider-pct-${i}`).textContent = `${100 - val}% - ${val}%`;
    
    // Toggle active classes on labels
    const row = document.getElementById(`slider-row-${i}`);
    const leftEl = document.getElementById(`slider-left-label-${i}`);
    const rightEl = document.getElementById(`slider-right-label-${i}`);
    
    if (val === 50) {
      row.classList.add('neutral');
      leftEl.style.opacity = '0.5';
      rightEl.style.opacity = '0.5';
    } else {
      row.classList.remove('neutral');
      if (val < 50) {
        leftEl.style.opacity = '1';
        rightEl.style.opacity = '0.3';
      } else {
        leftEl.style.opacity = '0.3';
        rightEl.style.opacity = '1';
      }
    }
  }
  
  // Determine MBTI code based on slider positions
  const code = [
    sliders[0] < 50 ? 'E' : 'I',
    sliders[1] < 50 ? 'S' : 'N',
    sliders[2] < 50 ? 'T' : 'F',
    sliders[3] < 50 ? 'J' : 'P'
  ].join('');
  
  const suffix = sliders[4] < 50 ? 'A' : 'T';
  const fullCode = `${code}-${suffix}`;
  
  // Get details
  const details = lang[currentLang].types[code];
  const category = getTypeCategory(code);
  
  // Set target color for LERP
  cognitionTargetRGB = categoryColors[category];
  
  // Update DOM matched values
  document.getElementById('canvas-match-code').textContent = fullCode;
  
  if (details) {
    document.getElementById('canvas-match-title').textContent = details.name;
    document.getElementById('canvas-match-desc').textContent = details.desc;
  }
  
  // Category Badge update
  const badge = document.getElementById('canvas-match-badge');
  if (badge) {
    badge.textContent = lang[currentLang].categories[category].name;
    badge.className = `cat-badge ${category}`;
  }
  
  // Set slider track accent colors for sliders
  const colorStr = `rgb(${cognitionTargetRGB[0]}, ${cognitionTargetRGB[1]}, ${cognitionTargetRGB[2]})`;
  for (let i = 0; i < 5; i++) {
    const sliderEl = document.getElementById(`mbti-slider-${i}`);
    if (sliderEl) {
      sliderEl.style.setProperty('--accent-color', colorStr);
    }
  }
}

function getTypeCategory(code) {
  const nOrS = code[1];
  const tOrF = code[2];
  const jOrP = code[3];
  
  if (nOrS === 'N') {
    if (tOrF === 'T') return 'analyst';
    if (tOrF === 'F') return 'diplomat';
  } else if (nOrS === 'S') {
    if (jOrP === 'J') return 'sentinel';
    if (jOrP === 'P') return 'explorer';
  }
  return 'analyst';
}

function initCognitionCanvas() {
  const canvas = document.getElementById('cognition-canvas');
  if (!canvas) return;
  
  if (cognitionAnimFrameId) {
    cancelAnimationFrame(cognitionAnimFrameId);
  }
  
  const ctx = canvas.getContext('2d');
  
  function animate() {
    // Stop loop if screen is no longer active
    if (!document.getElementById('cognition-screen').classList.contains('active')) {
      cancelAnimationFrame(cognitionAnimFrameId);
      return;
    }
    
    // Set size dynamically for High-DPI screens
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }
    
    // Clear and scale
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = w * 0.36;
    const minR = w * 0.12;
    
    cognitionTime += 0.015;
    
    // LERP colors
    for (let i = 0; i < 3; i++) {
      cognitionCurrentRGB[i] += (cognitionTargetRGB[i] - cognitionCurrentRGB[i]) * 0.08;
    }
    const r = Math.round(cognitionCurrentRGB[0]);
    const g = Math.round(cognitionCurrentRGB[1]);
    const b = Math.round(cognitionCurrentRGB[2]);
    const rgbStr = `rgb(${r}, ${g}, ${b})`;
    
    // Set parent backing glow custom CSS variable
    const wrapper = document.querySelector('.canvas-wrapper');
    if (wrapper) {
      wrapper.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.08)`);
    }
    
    // Draw background reference axes and concentric pentagons
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    
    // Draw 3 reference pentagons
    const steps = [0.4, 0.7, 1.0];
    steps.forEach(s => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
        const rad = minR + (maxR - minR) * s;
        const px = cx + rad * Math.cos(angle);
        const py = cy + rad * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    });
    
    // Draw 5 radial axis lines
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
    }
    ctx.stroke();
    
    // Draw outer axis text labels
    const axisLabels = {
      en: ['MIND (E/I)', 'ENERGY (S/N)', 'NATURE (T/F)', 'TACTICS (J/P)', 'IDENTITY (A/T)'],
      si: ['මනස (E/I)', 'ශක්තිය (S/N)', 'ස්වභාවය (T/F)', 'උපාය (J/P)', 'අනන්‍යතාව (A/T)']
    };
    ctx.font = currentLang === 'en' ? 'bold 10px Oswald' : 'bold 10px Noto Serif Sinhala';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
      const labelDist = maxR + 25;
      const lx = cx + labelDist * Math.cos(angle);
      const ly = cy + labelDist * Math.sin(angle);
      ctx.fillText(axisLabels[currentLang][i], lx, ly);
    }
    
    // Calculate and render morphing neon polygon
    const points = [];
    const letterCodes = [
      ['E', 'I'],
      ['S', 'N'],
      ['T', 'F'],
      ['J', 'P'],
      ['A', 'T']
    ];
    
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
      const val = parseInt(document.getElementById(`mbti-slider-${i}`).value);
      
      const score = val < 50 ? (100 - val) : val;
      const dominantLetter = val < 50 ? letterCodes[i][0] : letterCodes[i][1];
      
      // Determine radius based on score
      const baseR = minR + (maxR - minR) * (score - 50) / 50;
      // Float ripple animation
      const osc = 4.5 * Math.sin(cognitionTime * 2 + i * Math.PI / 2.5);
      const r_val = baseR + osc;
      
      points.push({
        x: cx + r_val * Math.cos(angle),
        y: cy + r_val * Math.sin(angle),
        angle: angle,
        r: r_val,
        letter: dominantLetter,
        pct: score
      });
    }
    
    // Draw polygon fill
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    
    const fillGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxR);
    fillGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.25)`);
    fillGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.02)`);
    ctx.fillStyle = fillGrad;
    ctx.fill();
    
    // Draw polygon glowing stroke
    ctx.shadowBlur = 18;
    ctx.shadowColor = rgbStr;
    ctx.strokeStyle = rgbStr;
    ctx.lineWidth = 3.5;
    ctx.stroke();
    
    // Draw vertices and text percentages
    ctx.shadowBlur = 0; // reset shadow
    points.forEach(p => {
      // Glow circle handle
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = rgbStr;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.strokeStyle = rgbStr;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Letter + Percentage label text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px Oswald';
      ctx.textAlign = 'center';
      
      // Offset label outwards
      const dist = p.r + 14;
      const tx = cx + dist * Math.cos(p.angle);
      const ty = cy + dist * Math.sin(p.angle);
      
      ctx.fillText(`${p.letter} (${p.pct}%)`, tx, ty);
    });
    
    ctx.restore();
    cognitionAnimFrameId = requestAnimationFrame(animate);
  }
  
  cognitionAnimFrameId = requestAnimationFrame(animate);
}

function exportPersonalityCard() {
  const nameInput = document.getElementById('card-name-input').value.trim();
  const defaultName = currentLang === 'en' ? 'Personality Profile' : 'පෞරුෂත්ව පැතිකඩ';
  const displayName = nameInput || defaultName;
  
  const mbtiCode = document.getElementById('canvas-match-code').textContent;
  const rawCode = mbtiCode.split('-')[0];
  const title = document.getElementById('canvas-match-title').textContent;
  
  const category = getTypeCategory(rawCode);
  const r = Math.round(cognitionCurrentRGB[0]);
  const g = Math.round(cognitionCurrentRGB[1]);
  const b = Math.round(cognitionCurrentRGB[2]);
  const rgbStr = `rgb(${r}, ${g}, ${b})`;
  
  // Create High-Res Canvas
  const card = document.createElement('canvas');
  card.width = 800;
  card.height = 500;
  const ctx = card.getContext('2d');
  
  // Draw Background Dark Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 800, 500);
  bgGrad.addColorStop(0, '#0a0f1d');
  bgGrad.addColorStop(1, '#05070c');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 800, 500);
  
  // Draw Backing Accent Radial Glow
  const glowGrad = ctx.createRadialGradient(580, 250, 20, 580, 250, 220);
  glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.15)`);
  glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, 800, 500);
  
  // Draw Grid Lines in Background
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 800; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 500);
    ctx.stroke();
  }
  for (let j = 0; j < 500; j += 40) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(800, j);
    ctx.stroke();
  }
  
  // Draw elegant outer border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, 760, 460);
  
  // Draw corner accents
  ctx.strokeStyle = rgbStr;
  ctx.lineWidth = 3;
  const len = 20;
  // Top-left
  ctx.beginPath(); ctx.moveTo(20, 20+len); ctx.lineTo(20, 20); ctx.lineTo(20+len, 20); ctx.stroke();
  // Top-right
  ctx.beginPath(); ctx.moveTo(780-len, 20); ctx.lineTo(780, 20); ctx.lineTo(780, 20+len); ctx.stroke();
  // Bottom-left
  ctx.beginPath(); ctx.moveTo(20, 480-len); ctx.lineTo(20, 480); ctx.lineTo(20+len, 480); ctx.stroke();
  // Bottom-right
  ctx.beginPath(); ctx.moveTo(780-len, 480); ctx.lineTo(780, 480); ctx.lineTo(780, 480-len); ctx.stroke();
  
  // Header Text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = 'bold 11px Oswald';
  ctx.textAlign = 'left';
  ctx.fillText('COGNITIVE PROFILE IDENTIFICATION CARD', 40, 42);
  
  ctx.textAlign = 'right';
  ctx.fillStyle = rgbStr;
  ctx.fillText('brainstorm.lk / edutechminds.com', 760, 42);
  
  // User Name
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = currentLang === 'en' ? 'bold 28px Oswald' : 'bold 26px Noto Serif Sinhala';
  ctx.fillText(displayName, 50, 105);
  
  // matched code INFJ-A
  const textGrad = ctx.createLinearGradient(50, 0, 300, 0);
  textGrad.addColorStop(0, rgbStr);
  textGrad.addColorStop(1, '#ffffff');
  ctx.fillStyle = textGrad;
  ctx.font = '900 58px Oswald';
  ctx.fillText(mbtiCode, 50, 175);
  
  // Matched title
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = currentLang === 'en' ? 'italic 20px Oswald' : 'italic 18px Noto Serif Sinhala';
  ctx.fillText(title, 50, 212);
  
  // Category Badge Capsule
  const catName = lang[currentLang].categories[category].name;
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.12)`;
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.3)`;
  ctx.lineWidth = 1;
  
  // Round rect capsule
  const rx = 50, ry = 230, rw = 120, rh = 28, rad_val = 6;
  ctx.beginPath();
  ctx.moveTo(rx+rad_val, ry);
  ctx.lineTo(rx+rw-rad_val, ry);
  ctx.quadraticCurveTo(rx+rw, ry, rx+rw, ry+rad_val);
  ctx.lineTo(rx+rw, ry+rh-rad_val);
  ctx.quadraticCurveTo(rx+rw, ry+rh, rx+rw-rad_val, ry+rh);
  ctx.lineTo(rx+rad_val, ry+rh);
  ctx.quadraticCurveTo(rx, ry+rh, rx, ry+rh-rad_val);
  ctx.lineTo(rx, ry+rad_val);
  ctx.quadraticCurveTo(rx, ry, rx+rad_val, ry);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = rgbStr;
  ctx.font = currentLang === 'en' ? 'bold 11px Oswald' : 'bold 11px Noto Serif Sinhala';
  ctx.textAlign = 'center';
  ctx.fillText(catName, rx + rw/2, ry + 18);
  
  // Draw 5 Dimension bars on the left
  ctx.textAlign = 'left';
  const mbtiLabels = {
    en: ['Mind', 'Energy', 'Nature', 'Tactics', 'Identity'],
    si: ['මනස', 'ශක්තිය', 'ස්වභාවය', 'උපාය', 'අනන්‍යතාව']
  };
  const letterCodes = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['J', 'P'],
    ['A', 'T']
  ];
  
  const startY = 285;
  const spacing = 36;
  const barW = 280;
  
  for (let i = 0; i < 5; i++) {
    const yPos = startY + i * spacing;
    const val = parseInt(document.getElementById(`mbti-slider-${i}`).value);
    
    // Dimension text
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = currentLang === 'en' ? 'bold 10px Oswald' : 'bold 10px Noto Serif Sinhala';
    ctx.fillText(`${mbtiLabels[currentLang][i].toUpperCase()}:`, 50, yPos);
    
    // Progress Bar Track
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillRect(50, yPos + 6, barW, 6);
    
    const leftScore = 100 - val;
    const rightScore = val;
    const fillX = 50 + (leftScore / 100) * barW;
    
    // Draw left-fill
    ctx.fillStyle = 'rgba(45, 212, 168, 0.7)';
    ctx.fillRect(50, yPos + 6, (leftScore / 100) * barW, 6);
    
    // Draw right-fill
    ctx.fillStyle = 'rgba(232, 93, 58, 0.7)';
    ctx.fillRect(fillX, yPos + 6, (rightScore / 100) * barW, 6);
    
    // Labels inside track
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px Oswald';
    ctx.fillText(`${letterCodes[i][0]} ${leftScore}%`, 54, yPos + 22);
    ctx.textAlign = 'right';
    ctx.fillText(`${rightScore}% ${letterCodes[i][1]}`, 50 + barW - 4, yPos + 22);
    ctx.textAlign = 'left';
  }
  
  // Draw Pentagon shape on the right
  const cx = 580;
  const cy = 260;
  const maxR = 120;
  const minR = 40;
  
  // Concentric pentagons
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
  ctx.lineWidth = 1;
  [0.4, 0.7, 1.0].forEach(s => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
      const rad = minR + (maxR - minR) * s;
      ctx.lineTo(cx + rad * Math.cos(angle), cy + rad * Math.sin(angle));
    }
    ctx.closePath();
    ctx.stroke();
  });
  
  // Radial grid lines
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
  }
  ctx.stroke();
  
  // Calculate vertex points
  const points = [];
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
    const val = parseInt(document.getElementById(`mbti-slider-${i}`).value);
    const score = val < 50 ? (100 - val) : val;
    const dominantLetter = val < 50 ? letterCodes[i][0] : letterCodes[i][1];
    
    const r_val = minR + (maxR - minR) * (score - 50) / 50;
    
    points.push({
      x: cx + r_val * Math.cos(angle),
      y: cy + r_val * Math.sin(angle),
      angle: angle,
      r: r_val,
      letter: dominantLetter,
      pct: score
    });
  }
  
  // Polygon fill
  ctx.beginPath();
  points.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();
  const fillGradCard = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxR);
  fillGradCard.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.28)`);
  fillGradCard.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.02)`);
  ctx.fillStyle = fillGradCard;
  ctx.fill();
  
  // Polygon glow stroke
  ctx.shadowBlur = 24;
  ctx.shadowColor = rgbStr;
  ctx.strokeStyle = rgbStr;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.shadowBlur = 0; // reset
  
  // Draw vertices & letters
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 8;
    ctx.shadowColor = rgbStr;
    ctx.fill();
    ctx.shadowBlur = 0;
    
    ctx.strokeStyle = rgbStr;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px Oswald';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const dist = p.r + 14;
    const tx = cx + dist * Math.cos(p.angle);
    const ty = cy + dist * Math.sin(p.angle);
    ctx.fillText(`${p.letter}`, tx, ty);
  });
  
  // Trigger file download
  const link = document.createElement('a');
  link.download = `${displayName.replace(/\s+/g, '_')}_ID_Card.png`;
  link.href = card.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function startTest(){
  cameFromTypes = false;
  isForcedProfile = false;
  currentQ=0;
  scores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0,A:0,Tr:0};
  
  const modal = document.getElementById('mode-modal');
  if (modal) {
    modal.classList.add('active');
  } else {
    selectTestMode('deep');
  }
}

function selectTestMode(mode) {
  testMode = mode;
  closeModeModal();
  showScreen('questions');
  renderQuestion();
}

function closeModeModal() {
  const modal = document.getElementById('mode-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function renderQuestion(){
  const qs=questions();
  if(currentQ>=qs.length){showLoading();return}
  const q=qs[currentQ];
  const total=qs.length;
  const pct=Math.round((currentQ/total)*100);
  tf('qCount',(currentQ+1)+' / '+total);
  document.getElementById('q-pct').textContent=pct+'%';
  document.getElementById('pfill').style.width=pct+'%';
  const dimLabels=t('dimLabels');
  const tagColors={EI:'background:rgba(240,165,0,.12);color:var(--accent)',SN:'background:rgba(155,109,255,.12);color:var(--analyst)',TF:'background:rgba(45,212,168,.12);color:var(--diplomat)',JP:'background:rgba(59,130,246,.12);color:var(--sentinel)',AT:'background:rgba(232,93,58,.12);color:var(--accent2)'};
  
  document.getElementById('q-wrap').innerHTML=`
    <div class="q-dim" style="${tagColors[q.dim]}">${dimLabels[q.dim]}</div>
    <div class="q-text">${q.text}</div>
    
    <div class="q-likert-scale">
      <span class="likert-label agree">${t('agree')}</span>
      
      <div class="likert-circles">
        <button class="likert-circle agree-3" onclick="selectAnswer('${q.agree}', 3, this)" title="${t('likertSA')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle agree-2" onclick="selectAnswer('${q.agree}', 2, this)" title="${t('likertA')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle agree-1" onclick="selectAnswer('${q.agree}', 1, this)" title="${t('likertSLA')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle neutral" onclick="selectAnswer('${q.agree}', 0, this)" title="${t('likertN')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle disagree-1" onclick="selectAnswer('${q.disagree}', 1, this)" title="${t('likertSLD')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle disagree-2" onclick="selectAnswer('${q.disagree}', 2, this)" title="${t('likertD')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
        <button class="likert-circle disagree-3" onclick="selectAnswer('${q.disagree}', 3, this)" title="${t('likertSD')}" onmouseover="document.getElementById('likert-choice-indicator').textContent = this.title" onmouseout="document.getElementById('likert-choice-indicator').textContent = ''"></button>
      </div>
      
      <span class="likert-label disagree">${t('disagree')}</span>
    </div>
    
    <div class="likert-choice-indicator" id="likert-choice-indicator"></div>
  `;
}

function selectAnswer(letter, weight, el){
  document.querySelectorAll('.likert-circle').forEach(o=>o.style.pointerEvents='none');
  el.classList.add('sel');
  
  const ind = document.getElementById('likert-choice-indicator');
  if(ind) {
    ind.textContent = el.title;
    el.onmouseout = null;
  }
  
  if (letter && weight > 0) {
    scores[letter] += weight;
  }
  
  setTimeout(()=>{currentQ++;renderQuestion()},450);
}

function showLoading(){
  cameFromTypes = false;
  isForcedProfile = false;
  showScreen('loading');
  setTimeout(() => showResults(),2200);
}

function calcType(){
  const e=scores.E>=scores.I?'E':'I';
  const s=scores.S>=scores.N?'S':'N';
  const t=scores.T>=scores.F?'T':'F';
  const j=scores.J>=scores.P?'J':'P';
  const a=scores.A>=scores.Tr?'A':'T';
  return e+s+t+j+'-'+a;
}

function pct(a,b){const tot=a+b;return tot===0?50:Math.round((a/tot)*100)}

function getFigureImg(f, style = 'avataaars') {
  const fallback = `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(f.name)}`;
  const src = f.img && f.img.startsWith('http') ? f.img : fallback;
  return `<img src="${src}" class="fig-img" alt="${f.name}" onerror="this.onerror=null; this.src='${fallback}';">`;
}

function showResults(forcedCode){
  let fullCode;
  let eP, sP, tP, jP, aP;

  if (isForcedProfile) {
    const codeStr = typeof forcedCode === 'string' ? forcedCode : (lastResultsCode || 'INTJ');
    fullCode = codeStr.includes('-') ? codeStr : codeStr + '-A';
    const parts = fullCode.split('-');
    const code = parts[0];
    const sub = parts[1] || 'A';
    
    eP = code[0] === 'E' ? 70 : 30;
    sP = code[1] === 'S' ? 70 : 30;
    tP = code[2] === 'T' ? 70 : 30;
    jP = code[3] === 'J' ? 70 : 30;
    aP = sub === 'A' ? 70 : 30;
  } else {
    fullCode = calcType();
    eP = pct(scores.E, scores.I);
    sP = pct(scores.S, scores.N);
    tP = pct(scores.T, scores.F);
    jP = pct(scores.J, scores.P);
    aP = pct(scores.A, scores.Tr);
  }

  lastResultsCode = fullCode;
  const code = fullCode.split('-')[0];
  const tp = types()[code];
  if(!tp){showScreen('intro');return}
  const dimEI=t('dimEI'), dimSN=t('dimSN'), dimTF=t('dimTF'), dimJP=t('dimJP'), dimAT=t('dimAT');

  document.getElementById('res-top').innerHTML=`
    <div class="cat-badge ${tp.cat}">${tp.catName}</div>
    <div class="res-code">${fullCode}</div>
    <div class="res-name">${tp.name}</div>
    <div class="res-desc">${tp.desc}</div>
  `;
  document.getElementById('res-dims').innerHTML=`
    <div class="dim-row"><div class="dim-labels"><span class="l ${eP>=50?'on':''}">${dimEI[0]} (${eP}%)</span><span class="r ${eP<50?'on':''}">${dimEI[1]} (${100-eP}%)</span></div><div class="dim-bar-w"><div class="dim-bar c-ei" style="width:${eP}%"></div></div></div>
    <div class="dim-row"><div class="dim-labels"><span class="l ${sP>=50?'on':''}">${dimSN[0]} (${sP}%)</span><span class="r ${sP<50?'on':''}">${dimSN[1]} (${100-sP}%)</span></div><div class="dim-bar-w"><div class="dim-bar c-sn" style="width:${sP}%"></div></div></div>
    <div class="dim-row"><div class="dim-labels"><span class="l ${tP>=50?'on':''}">${dimTF[0]} (${tP}%)</span><span class="r ${tP<50?'on':''}">${dimTF[1]} (${100-tP}%)</span></div><div class="dim-bar-w"><div class="dim-bar c-tf" style="width:${tP}%"></div></div></div>
    <div class="dim-row"><div class="dim-labels"><span class="l ${jP>=50?'on':''}">${dimJP[0]} (${jP}%)</span><span class="r ${jP<50?'on':''}">${dimJP[1]} (${100-jP}%)</span></div><div class="dim-bar-w"><div class="dim-bar c-jp" style="width:${jP}%"></div></div></div>
    <div class="dim-row"><div class="dim-labels"><span class="l ${aP>=50?'on':''}">${dimAT[0]} (${aP}%)</span><span class="r ${aP<50?'on':''}">${dimAT[1]} (${100-aP}%)</span></div><div class="dim-bar-w"><div class="dim-bar c-at" style="width:${aP}%"></div></div></div>
  `;
  document.getElementById('res-str').innerHTML=`<h3>${t('strengths')}</h3><div class="str-grid">${tp.str.map(s=>`<div class="str-item"><span class="str-dot"></span>${s}</div>`).join('')}</div>`;
  document.getElementById('res-car').innerHTML=`<h3>${t('careers')}</h3><div class="career-wrap">${tp.car.map(c=>`<span class="career-tag">${c}</span>`).join('')}</div>`;
  
  const love = romanticMatches[code];
  if(love){
    const maleName = types()[love.male].name;
    const femaleName = types()[love.female].name;
    document.getElementById('res-love').innerHTML = `
      <h3>
        <svg style="width:20px; height:20px; fill:var(--accent2); vertical-align:middle; margin-right:6px;" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        ${t('loveCompatibility')}
      </h3>
      <div class="love-matches-grid">
        <div class="love-match-card male" onclick="showResults('${love.male}-A')" style="cursor:pointer;">
          <div class="love-gender-badge male">♂ ${t('malePartner')}</div>
          <div class="love-match-code">${love.male}</div>
          <div class="love-match-name">${maleName}</div>
        </div>
        <div class="love-match-card female" onclick="showResults('${love.female}-A')" style="cursor:pointer;">
          <div class="love-gender-badge female">♀ ${t('femalePartner')}</div>
          <div class="love-match-code">${love.female}</div>
          <div class="love-match-name">${femaleName}</div>
        </div>
      </div>
      <p style="font-size:0.9rem; color:var(--text2); line-height:1.8; margin-top:1.5rem; text-align:center; font-style:italic; max-width:800px; margin-left:auto; margin-right:auto;">
        "${currentLang === 'en' ? love.desc.en : love.desc.si}"
      </p>
    `;
  } else {
    document.getElementById('res-love').innerHTML = '';
  }
  if(tp.extra){
    const ex = tp.extra;
    document.getElementById('res-extra').innerHTML = `
      <div class="res-sec" style="margin-top:3rem">
        <div class="quote-box"><p class="quote-text">"${ex.quote}"</p><p class="quote-author">— ${ex.author}</p></div>
        <p style="font-size:.9rem; color:var(--text2); line-height:1.8; margin-bottom:2rem">${ex.intro}</p>
        ${ex.sections ? ex.sections.map(sec=>`<h3 style="margin-top:2.5rem">${sec.title}</h3><div style="font-size:.9rem; color:var(--text2); line-height:1.8">${sec.content}</div>`).join('') : ''}
        <div class="quick-facts" style="margin-top:3rem"><h3>${code} ${t('quickFacts')}</h3><div class="fact-table"><div class="fact-row"><span>${t('mainStrength')}</span><span>${ex.facts.strength}</span></div><div class="fact-row"><span>${t('mainWeakness')}</span><span>${ex.facts.weakness}</span></div><div class="fact-row"><span>${t('humor')}</span><span>${ex.facts.humor}</span></div><div class="fact-row"><span>${t('relations')}</span><span>${ex.facts.relations}</span></div></div></div>
        <h3>${t('famousFigures')}</h3>
        <div class="figure-sec"><h4>${t('realFigures')}</h4><div class="fig-list">${ex.figures.real.map(f=>`<div class="fig-item">${getFigureImg(f, 'avataaars')}<div class="fig-info"><strong>${f.name}</strong><span>${f.desc}</span></div></div>`).join('')}</div></div>
        <div class="figure-sec"><h4>${t('fictionalFigures')}</h4><div class="fig-list">${ex.figures.fictional.map(f=>`<div class="fig-item">${getFigureImg(f, 'avataaars')}<div class="fig-info"><strong>${f.name}</strong><span>${f.desc}</span></div></div>`).join('')}</div></div>
        <div class="figure-sec"><h4>${t('animeFigures')}</h4><div class="fig-list">${ex.figures.anime.map(f=>`<div class="fig-item">${getFigureImg(f, 'bottts')}<div class="fig-info"><strong>${f.name}</strong><span>${f.desc}</span></div></div>`).join('')}</div></div>
      </div>
    `;
  } else { document.getElementById('res-extra').innerHTML = ''; }
  showScreen('results');
  setTimeout(()=>{
    document.querySelectorAll('.dim-bar').forEach(bar=>{
      const w=bar.style.width;bar.style.width='0%';
      requestAnimationFrame(()=>requestAnimationFrame(()=>{bar.style.width=w}));
    });
  },350);
}

function retakeTest(){
  if(cameFromTypes){
    showScreen('types-screen');
  } else {
    showScreen('intro');
  }
}

function viewTypeDetail(code) {
  cameFromTypes = true;
  isForcedProfile = true;
  showResults(code);
}

function renderTypesScreen() {
    showScreen('types-screen');
    const wrap = document.getElementById('types-wrap');
    wrap.innerHTML = '';
    const cats = lang[currentLang].categories;
    const typs = types();
    
    for(const catKey in cats) {
        const cat = cats[catKey];
        let html = '<div class="cat-section" style="margin-bottom: 3rem; text-align:left;">';
        html += '<h2 style="color: var(--'+catKey+'); font-size: 1.8rem; margin-bottom: 0.5rem; text-transform: uppercase;">' + cat.name + '</h2>';
        html += '<div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--text);">' + cat.traits + '</div>';
        html += '<p style="color: var(--text2); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">' + cat.desc + '</p>';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">';
        
        for(const tKey in typs) {
            if(typs[tKey].cat === catKey) {
                html += '<div onclick="viewTypeDetail(\''+tKey+'\')" style="background: var(--surface); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align:center; transition: all 0.25s ease; cursor:pointer;" onmouseover="this.style.transform=\'translateY(-5px)\'; this.style.borderColor=\'var(--'+catKey+')\'; this.style.boxShadow=\'0 10px 25px rgba(0,0,0,0.3)\';" onmouseout="this.style.transform=\'translateY(0)\'; this.style.borderColor=\'rgba(255,255,255,0.05)\'; this.style.boxShadow=\'none\';">';
                html += '<div style="font-size: 1.5rem; font-weight: 700; color: var(--'+catKey+'); margin-bottom: 0.5rem;">' + tKey + '</div>';
                html += '<div style="font-weight: 600; margin-bottom: 0.5rem;">' + typs[tKey].name + '</div>';
                html += '<div style="font-size: 0.85rem; color: var(--text2); line-height: 1.5;">' + typs[tKey].desc + '</div>';
                html += '</div>';
            }
        }
        
        html += '</div></div>';
        wrap.innerHTML += html;
    }
}

/* ===== COMPATIBILITY MATRIX & TEAM BUILDER LOGIC ===== */
function renderMatrixScreen() {
  showScreen('matrix-screen');
  populateMatrixDropdowns();
  
  // Apply category theme color border highlights immediately
  onMatrixSelectChange();
}

function populateMatrixDropdowns() {
  const selectA = document.getElementById('select-typeA');
  const selectB = document.getElementById('select-typeB');
  const selectTeam = document.getElementById('team-type-select');

  if (!selectA || !selectB || !selectTeam) return;
  
  const expectedTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
  const typs = types();
  
  let optionsHtml = '';
  expectedTypes.forEach(code => {
    optionsHtml += `<option value="${code}">${code} - ${typs[code].name}</option>`;
  });
  
  const lastValA = selectA.value || 'INTJ';
  const lastValB = selectB.value || 'ENFP';
  const lastValTeam = selectTeam.value || 'INTJ';
  
  selectA.innerHTML = optionsHtml;
  selectB.innerHTML = optionsHtml;
  selectTeam.innerHTML = optionsHtml;
  
  selectA.value = lastValA;
  selectB.value = lastValB;
  selectTeam.value = lastValTeam;
}

function onMatrixSelectChange() {
  const typeA = document.getElementById('select-typeA').value;
  const typeB = document.getElementById('select-typeB').value;
  
  // Highlight active selector card by category theme color!
  const typs = types();
  const catA = typs[typeA].cat;
  const catB = typs[typeB].cat;
  
  document.getElementById('card-typeA').style.borderColor = `var(--${catA})`;
  document.getElementById('card-typeB').style.borderColor = `var(--${catB})`;
  
  updateMatrixDashboard();
}

function toggleMatrixMode(mode) {
  activeMatrixMode = mode;
  document.getElementById('tab-dashboard').classList.toggle('active', mode === 'dashboard');
  document.getElementById('tab-teambuilder').classList.toggle('active', mode === 'teambuilder');
  
  document.getElementById('matrix-dashboard-section').style.display = mode === 'dashboard' ? 'block' : 'none';
  document.getElementById('matrix-teambuilder-section').style.display = mode === 'teambuilder' ? 'block' : 'none';
  
  if (mode === 'teambuilder') {
    renderTeamRoster();
  } else {
    updateMatrixDashboard();
  }
}

function setMatrixTab(tab) {
  activeMatrixTab = tab;
  document.getElementById('tab-workplace').classList.toggle('active', tab === 'workplace');
  document.getElementById('tab-romantic').classList.toggle('active', tab === 'romantic');
  document.getElementById('tab-friendship').classList.toggle('active', tab === 'friendship');
  
  updateMatrixDashboard();
}

function updateMatrixDashboard() {
  const selectA = document.getElementById('select-typeA');
  const selectB = document.getElementById('select-typeB');
  if (!selectA || !selectB) return;
  
  const typeA = selectA.value;
  const typeB = selectB.value;
  
  const data = getCompatibilityData(typeA, typeB, activeMatrixTab);
  
  // 1. Update text score
  document.getElementById('matrix-score-num').textContent = data.score + '%';
  
  // 2. Animate SVG circle stroke
  const circle = document.getElementById('radial-val');
  if (circle) {
    const offset = 502 - (502 * data.score) / 100;
    circle.style.strokeDashoffset = offset;
  }
  
  // 3. Update details
  document.getElementById('matrix-desc').textContent = data.desc;
  document.getElementById('matrix-conflict').innerHTML = `<p>${data.conflicts}</p>`;
  
  // Format list items properly
  const formattedTips = data.tips.split('\n').map(line => {
    if (line.trim().startsWith('- ')) {
      return `<li>${line.trim().substring(2)}</li>`;
    }
    return line;
  }).join('');
  document.getElementById('matrix-tips').innerHTML = `<ul style="list-style:disc; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.5rem;">${formattedTips}</ul>`;
  
  // 4. Update Venn Diagram
  updateVennDiagram(typeA, typeB, data.score);
}

function updateVennDiagram(typeA, typeB, score) {
  const left = document.getElementById('venn-left');
  const right = document.getElementById('venn-right');
  const textA = document.getElementById('venn-text-A');
  const textB = document.getElementById('venn-text-B');
  const intersect = document.getElementById('venn-text-intersect');
  
  if (!left || !right) return;
  
  // Calculate overlap distance:
  // High score -> small d (circles closer)
  // Low score -> large d (circles further apart)
  const d = Math.round(52 * (1 - (score - 40) / 60)); // Distance varies from 0 to 52
  
  const leftCx = 160 - d;
  const rightCx = 160 + d;
  
  left.setAttribute('cx', leftCx);
  right.setAttribute('cx', rightCx);
  
  textA.setAttribute('x', leftCx - 18);
  textB.setAttribute('x', rightCx + 18);
  textA.textContent = typeA;
  textB.textContent = typeB;
  
  intersect.textContent = score + '%';
  
  // Apply visual category colors
  const typs = types();
  const catA = typs[typeA].cat;
  const catB = typs[typeB].cat;
  
  left.style.stroke = `var(--${catA})`;
  left.style.fill = `rgba(${catA === 'analyst' ? '155,109,255' : catA === 'diplomat' ? '45,212,168' : catA === 'sentinel' ? '59,130,246' : '245,158,11'}, 0.16)`;
  
  right.style.stroke = `var(--${catB})`;
  right.style.fill = `rgba(${catB === 'analyst' ? '155,109,255' : catB === 'diplomat' ? '45,212,168' : catB === 'sentinel' ? '59,130,246' : '245,158,11'}, 0.16)`;
}

function getCompatibilityData(typeA, typeB, tab) {
  const sameE = typeA[0] === typeB[0];
  const sameS = typeA[1] === typeB[1];
  const sameT = typeA[2] === typeB[2];
  const sameJ = typeA[3] === typeB[3];
  
  let score = 50;
  
  // Calculate psychometric score
  if (sameS) score += 20; // Shared S/N is huge for communication
  else score += 5;
  
  if (sameT) score += 15; // Shared T/F
  else score += 8;
  
  if (tab === 'romantic') {
    if (!sameE) score += 12; // E/I complement
    else score += 5;
    if (!sameJ) score += 10; // J/P balance
    else score += 5;
  } else if (tab === 'workplace') {
    if (sameE) score += 10; // Active collaboration
    if (!sameJ) score += 12; // Strategist + Executor balance
  } else {
    // Friendship
    if (sameE) score += 12; // Social chemistry
    if (sameS && sameT) score += 10;
  }
  
  score = Math.min(Math.max(score, 45), 98); // Clamp between 45% and 98%
  
  // Generate descriptive texts dynamically based on active language
  const isEn = currentLang === 'en';
  let desc = '';
  let conflicts = '';
  let tips = '';
  
  if (isEn) {
    // English Descriptions
    if (tab === 'romantic') {
      desc = `A romantic connection between ${typeA} and ${typeB} is `;
      if (score >= 85) desc += `highly passionate, naturally harmonious, and intellectually fulfilling. You have an exceptional cognitive spark and easily understand each other's inner worlds.`;
      else if (score >= 70) desc += `balanced, exciting, and full of mutual growth. You challenge each other in positive ways, finding a great middle ground between chemistry and practical stability.`;
      else desc += `intriguing but requires conscious effort. You approach life from very different angles, which can lead to initial fascination but requires deep empathy to sustain in the long run.`;
      
      conflicts = sameT 
        ? `Both of you prioritize logic, which can make emotional connection feel dry or analytical. In arguments, you might over-analyze each other rather than expressing vulnerability.` 
        : `Logic meets emotion. The Thinking partner might perceive the Feeling partner as overly sensitive, while the Feeling partner may view the Thinking partner as cold or dismissive.`;
      if (!sameS) conflicts += ` Additionally, the intuitive ${typeA.includes('N') ? typeA : typeB} focuses on future possibilities, while the sensing ${typeA.includes('S') ? typeA : typeB} focuses on concrete daily facts, causing conceptual friction.`;
      
      tips = `- **Practice Vulnerability:** Focus on sharing raw emotions rather than objective solutions.
- **Respect Differences:** The intuitive partner should appreciate practical daily support, while the sensing partner should allow space for big abstract dreams.
- **Active Listening:** Validate your partner's feelings before attempting to solve the underlying problem logically.`;
    } else if (tab === 'workplace') {
      desc = `Working together, ${typeA} and ${typeB} create `;
      if (score >= 85) desc += `a powerhouse team with high operational efficiency and shared vision. You align seamlessly on strategy and complement each other's execution styles perfectly.`;
      else if (score >= 70) desc += `a highly productive partnership. While you might occasionally disagree on methodology, you share a strong commitment to achievement and respect each other's work ethic.`;
      else desc += `a working relationship that requires clear boundaries. Your differing paces and work styles can cause friction unless responsibilities are strictly separated.`;
      
      conflicts = !sameJ
        ? `Structure vs Flexibility. The Judger (J) wants detailed plans, early deadlines, and structure, while the Prospector (P) prefers open schedules, spontaneous changes, and working under last-minute pressure.`
        : `Competing styles. Both of you may want to drive projects using the same pace, leading to turf wars or lack of creative friction.`;
      
      tips = `- **Define Roles Clearly:** Let the Judger manage project timelines and milestones, and let the Prospector focus on creative adaptions and exploration.
- **Align on Expectations:** Agree on intermediate check-ins to prevent last-minute stress.
- **Maintain Professional Empathy:** Give objective, constructive feedback without personalizing professional critiques.`;
    } else {
      // Friendship
      desc = `As friends, ${typeA} and ${typeB} share `;
      if (score >= 85) desc += `a deeply loyal and fascinating bond. You share unique jokes, understand each other's silence, and can talk for hours about anything from daily gossip to complex theories.`;
      else if (score >= 70) desc += `a highly fun and supportive friendship. You enjoy exploring new activities, sharing hobbies, and can always rely on each other in times of need.`;
      else desc += `a casual connection. You get along well in social groups but might struggle to establish a deep, intimate one-on-one bond due to differing priorities.`;
      
      conflicts = !sameE
        ? `Energy levels mismatch. The Extravert (E) wants social excitement, group hangouts, and active adventure, while the Introvert (I) needs quiet one-on-one catchups and substantial battery recharge time.`
        : `Shared blindspots. Since you both share the same social energy, you might either exhaust each other or drift into isolating comfort zones.`;
      
      tips = `- **Balance Social Paces:** Respect the introvert's need to decline social gatherings without taking it personally.
- **Explore Shared Hobbies:** Find mid-ground activities that blend physical adventure with intellectual discussion.
- **Configure Boundaries:** Discuss boundary expectations early to avoid mutual misunderstandings.`;
    }
  } else {
    // Sinhala Descriptions
    if (tab === 'romantic') {
      desc = `${typeA} සහ ${typeB} අතර ආදර සබඳතාව `;
      if (score >= 85) desc += `අතිශය දැඩි ආකර්ෂණයකින්, ස්වභාවික සමගියකින් සහ බුද්ධිමය තෘප්තියකින් යුක්ත වේ. ඔබ දෙදෙනාට එකිනෙකාගේ අභ්‍යන්තර ලෝකය ඉතා පහසුවෙන් තේරුම් ගත හැකිය.`;
      else if (score >= 70) desc += `සමබර වූත්, උද්යෝගිමත් වූත් සහ අන්‍යෝන්‍ය වර්ධනයෙන් පිරි එකකි. ඔබ දෙදෙනා ජීවිතයේ ගැටලුවලට සාර්ථකව මුහුණ දෙමින් හොඳ මැද මාවතක් සොයා ගනී.`;
      else desc += `කුතුහලයෙන් පිරී පැවතියද දිගුකාලීනව පවත්වා ගැනීමට දැඩි කැපවීමක් අවශ්‍ය වේ. ඔබ දෙදෙනා ජීවිතය දෙස බලන්නේ හාත්පසින්ම වෙනස් කෝණවලින් බැවින් දැඩි අවබෝධයක් අවශ්‍ය වේ.`;
      
      conflicts = sameT
        ? `ඔබ දෙදෙනාම තර්කයට මුල් තැන දෙන බැවින්, හැඟීම් ප්‍රකාශ කිරීම මදක් අඩු විය හැකිය. තීරණ ගැනීමේදී හැඟීම්වලට වඩා ඕනෑවට වඩා ගැටලුව විග්‍රහ කිරීමට යාමෙන් දුරස්ථ බවක් ඇති විය හැකිය.`
        : `තර්කය සහ හැඟීම හමුවේ. Thinking සහකරු හැඟීම්බර සහකරු ඕනෑවට වඩා සංවේදී අයෙකු ලෙස දැකිය හැකි අතර, Feeling සහකරු Thinking සහකරු උදාසීන හෝ රළු අයෙකු ලෙස දැකිය හැකිය.`;
      if (!sameS) conflicts += ` එසේම, අනාගතය දෙස බලන ${typeA.includes('N') ? typeA : typeB} සහ වර්තමාන ප්‍රායෝගික කරුණු දෙස බලන ${typeA.includes('S') ? typeA : typeB} අතර සංකල්පීය ගැටුම් ඇති විය හැක.`;
      
      tips = `- **හැඟීම්වලට ඉඩ දෙන්න:** ගැටලුවලට ප්‍රායෝගික විසඳුම් සෙවීමට පෙර එකිනෙකාගේ සැබෑ හැඟීම්වලට ගරු කර සවන් දෙන්න.
- **වෙනස්කම් අගය කරන්න:** අනාගත සැලසුම් සහ ප්‍රායෝගික දෛනික ජීවිතය අතර මනා සමබරතාවයක් පවත්වා ගන්න.
- **අවංකව සන්නිවේදනය කරන්න:** සැක හෝ නොපැහැදිලි තැන් පවතී නම් සෘජුව කතාබහ කරන්න.`;
    } else if (tab === 'workplace') {
      desc = `රාජකාරි මට්ටමින් ${typeA} සහ ${typeB} එක්ව වැඩ කරන විට `;
      if (score >= 85) desc += `ඉතා ඉහළ කාර්යක්ෂමතාවයක් සහ පොදු දැක්මක් සහිත ප්‍රබල කණ්ඩායමක් නිර්මාණය වේ. ව්‍යාපෘති සැලසුම් කිරීමේදී ඔබ දෙදෙනා ඉතා ඉක්මනින් එකඟතාවකට පැමිණේ.`;
      else if (score >= 70) desc += `ඵලදායී හවුල්කාරිත්වයක් ගොඩනැඟේ. ක්‍රමවේදයන් පිළිබඳව සුළු මතභේද ඇති වුවද, පොදු අරමුණු සාක්ෂාත් කර ගැනීමට ඔබ දෙදෙනා තුළ ඉහළ කැපවීමක් පවතී.`;
      else desc += `පැහැදිලි සීමාවන් සහිතව වැඩ කළ යුතු සබඳතාවකි. ඔබ දෙදෙනාගේ වැඩ කරන වේගය සහ ක්‍රමවේදයන් වෙනස් බැවින් වගකීම් වෙන වෙනම බෙදා ගැනීම සුදුසු වේ.`;
      
      conflicts = !sameJ
        ? `ක්‍රමවත් බව සහ නම්‍යශීලී බව. Judger (J) සහකරුට කලින් සැලසුම් කළ නීති සහ කාලසටහන් අවශ්‍ය වන අතර, Prospector (P) සහකරු නම්‍යශීලී, ක්ෂණික වෙනස්කම් සහ අවසාන මොහොතේ වැඩ කිරීමට ප්‍රිය කරයි.`
        : `තරඟකාරී ස්වභාවය. ඔබ දෙදෙනාම එකම වේගයකින් කණ්ඩායම මෙහෙයවීමට උත්සාහ කළහොත් නායකත්ව ගැටුම් ඇති විය හැකිය.`;
      
      tips = `- **වගකීම් පැහැදිලිව බෙදන්න:** කාලසටහන් පාලනය Judger සහකරුටත්, අලුත් අදහස් හා ගවේෂණ Prospector සහකරුටත් ලබා දෙන්න.
- **පොදු එකඟතාවන් ඇති කරගන්න:** අවසාන මොහොතේ ඇති වන ආතතිය අවම කිරීමට අතරමැදි සාකච්ඡා පවත්වන්න.
- **වෘත්තීය මට්ටම සුරකින්:** පෞද්ගලික මතභේද රාජකාරි ජීවිතයට මිශ්‍ර කර නොගන්න.`;
    } else {
      // Friendship
      desc = `මිතුරන් ලෙස ${typeA} සහ ${typeB} අතර ඇත්තේ `;
      if (score >= 85) desc += `ඉතාමත් විශ්වාසවන්ත, ගැඹුරු සහ විනෝදජනක බැඳීමකි. ඔබට පැය ගණනාවක් වුවද ඕනෑම විෂය කරුණක් පිළිබඳව ඉතා රසවත්ව කතාබහ කළ හැකිය.`;
      else if (score >= 70) desc += `අන්‍යෝන්‍ය සහයෝගීතාවයෙන් පිරි මිත්‍රත්වයකි. ඔබ දෙදෙනා විනෝදාංශ බෙදාගන්නා අතර ඕනෑම කරදරකාරී අවස්ථාවකදී එකිනෙකා පිහිටට පැමිණේ.`;
      else desc += `සාමාන්‍ය සබඳතාවකි. සාදවලදී හෝ මිතුරු කණ්ඩායම් තුළ හොඳින් එකඟ වුවද, තනිව ගැඹුරු මිත්‍රත්වයක් පවත්වා ගැනීමට අමතර උත්සාහයක් අවශ්‍ය වේ.`;
      
      conflicts = !sameE
        ? `සමාජශීලී බවේ වෙනස. Extravert (E) මිතුරා නිතරම කණ්ඩායම් හමුවීම් සහ සක්‍රීය ක්‍රියාකාරකම් අපේක්ෂා කරන අතර, Introvert (I) මිතුරා නිහඬ පරිසරයක් සහ තනිව විවේක ගැනීමට ප්‍රිය කරයි.`
        : `පොදු සීමාවන්. ඔබ දෙදෙනාම එකම සමාජ ශක්තියක් දරන බැවින්, ඇතැම් විට එකිනෙකා ඉක්මනින් විඩාවට පත් කිරීමට හෝ සීමාවන් ඉක්මවා යාමට ඉඩ ඇත.`;
      
      tips = `- **සීමාවන්ට ගරු කරන්න:** ඉන්ට්‍රෝවර්ට් මිතුරා නිවසේ සිටීමට අපේක්ෂා කරන විට එයට පෞද්ගලිකව අමනාප නොවී ගරු කරන්න.
- **පොදු විනෝදාංශ සොයන්න:** දෙදෙනාටම පහසු වන සැහැල්ලු පරිසරයක හමුවීම් සැලසුම් කරන්න.
- **විවෘතව කතා කරන්න:** සිත් රිදවීමක් සිදුවුවහොත් එය සෘජුව සාකච්ඡා කර විසඳා ගන්න.`;
    }
  }
  
  return { score, desc, conflicts, tips };
}

/* ===== TEAM BUILDER SUB-SYSTEM ===== */
function addTeamMember() {
  const nameInput = document.getElementById('team-name-input');
  const typeSelect = document.getElementById('team-type-select');
  
  if (!nameInput || !typeSelect) return;
  
  const name = nameInput.value.trim();
  const type = typeSelect.value;
  
  if (name.length < 2) {
    alert(currentLang === 'en' ? 'Please enter a valid team member name (at least 2 letters).' : 'කරුණාකර වලංගු සාමාජිකයෙකුගේ නමක් ඇතුළත් කරන්න (අවම වශයෙන් අකුරු 2ක්).');
    return;
  }
  
  teamMembers.push({ name, type });
  nameInput.value = '';
  
  renderTeamRoster();
}

function removeTeamMember(idx) {
  teamMembers.splice(idx, 1);
  renderTeamRoster();
}

function renderTeamRoster() {
  const list = document.getElementById('team-roster-list');
  if (!list) return;
  
  if (teamMembers.length === 0) {
    list.innerHTML = `<div style="color: var(--text2); font-size: 0.9rem; font-style: italic; padding: 1rem 0;" data-t="noMembers">${t('noMembers')}</div>`;
    document.getElementById('team-report-card').style.display = 'none';
    return;
  }
  
  const typs = types();
  
  let html = '';
  teamMembers.forEach((m, idx) => {
    const cat = typs[m.type].cat;
    html += `
      <div class="team-roster-item">
        <div class="team-roster-info">
          <span style="font-weight:600; color:var(--text);">${esc(m.name)}</span>
          <span class="team-roster-badge" style="background: rgba(255,255,255,0.06); border: 1px solid var(--${cat}); color: var(--${cat});">${m.type}</span>
        </div>
        <button class="team-remove-btn" onclick="removeTeamMember(${idx})">${currentLang === 'en' ? 'Remove' : 'ඉවත් කරන්න'}</button>
      </div>
    `;
  });
  list.innerHTML = html;
}

function calculateTeamChemistry() {
  if (teamMembers.length < 2) {
    alert(currentLang === 'en' ? 'Please add at least 2 team members first!' : 'කරුණාකර අවම වශයෙන් කණ්ඩායම් සාමාජිකයින් 2 දෙනෙකු මුලින්ම එක් කරන්න!');
    return;
  }
  
  const report = getTeamChemistryData(teamMembers);
  if (!report) return;
  
  // Render report Card
  document.getElementById('team-report-card').style.display = 'block';
  
  // 1. Update synergy score text
  document.getElementById('team-score-num').textContent = report.score + '%';
  
  // 2. Animate SVG stroke circle
  const circle = document.getElementById('team-radial-val');
  if (circle) {
    const offset = 502 - (502 * report.score) / 100;
    circle.style.strokeDashoffset = offset;
  }
  
  // 3. Update details
  document.getElementById('team-strengths-text').innerHTML = `
    <strong style="color: var(--accent); display:block; font-size:1.1rem; margin-bottom:0.5rem;">${report.archetype}</strong>
    <p>${report.strengths}</p>
  `;
  document.getElementById('team-friction-text').innerHTML = report.frictions;
  
  // Smooth scroll to collective report card
  document.getElementById('team-report-card').scrollIntoView({ behavior: 'smooth' });
}

function getTeamChemistryData(members) {
  if (members.length < 2) return null;
  
  // Let's count trait distributions
  let counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  members.forEach(m => {
    const t = m.type;
    counts[t[0]]++;
    counts[t[1]]++;
    counts[t[2]]++;
    counts[t[3]]++;
  });
  
  const total = members.length;
  
  // Calculate average cognitive dimension values
  const pctE = Math.round((counts.E / total) * 100);
  const pctS = Math.round((counts.S / total) * 100);
  const pctT = Math.round((counts.T / total) * 100);
  const pctJ = Math.round((counts.J / total) * 100);
  const pctN = 100 - pctS;
  const pctF = 100 - pctT;
  const pctP = 100 - pctJ;
  
  // Collective synergy calculation based on balance:
  let score = 80;
  
  // Subtract penalty for extreme skews
  [pctE, pctS, pctT, pctJ].forEach(p => {
    const skew = Math.abs(p - 50);
    if (skew > 40) score -= 5; // 90% + skew
    else if (skew < 15) score += 3; // 40-60% balance is rewarded!
  });
  
  score = Math.min(Math.max(score, 60), 96);
  
  const isEn = currentLang === 'en';
  let archetype = '';
  let strengths = '';
  let frictions = '';
  
  if (isEn) {
    // English dynamic report
    if (pctT >= 60 && pctJ >= 60) {
      archetype = 'Strategic Execution Force';
      strengths = 'Your team has exceptionally high logical clarity, structured execution, and objective decision-making. You excel at taking complex goals and dividing them into precise milestones. Inefficiencies are swiftly corrected.';
      frictions = 'The high Thinking and Judging skew can lead to competitive debates, creative rigidity, and lack of emotional feedback. Team morale might be overlooked in favor of productivity.';
    } else if (pctN >= 60 && pctF >= 60) {
      archetype = 'Creative Catalyst Collective';
      strengths = 'Deeply creative, collaborative, and driven by shared human values. Your team is highly empathetic, open to new abstract concepts, and supports each other emotionally. Excellent at brainstorming and community engagement.';
      frictions = 'Struggles with rigid deadlines, routine administrative tasks, and operational structure. Conflicts may be avoided or kept hidden to maintain superficial harmony, delaying critical reviews.';
    } else if (pctS >= 60 && pctP >= 60) {
      archetype = 'Tactical Action Squad';
      strengths = 'Highly pragmatic, flexible, and action-oriented. Your team excels at immediate crisis management, hands-on problem solving, and adapting to real-world changes. You learn by doing and execute fast.';
      frictions = 'Prone to losing sight of the long-term grand strategy. There may be a tendency to jump into tasks impulsively without proper planning or coordinating, leading to wasted operational effort.';
    } else {
      archetype = 'Balanced Hybrid Alliance';
      strengths = 'A highly balanced, multi-dimensional team. You possess a great mix of strategic planners, empathetic communicators, practical coordinators, and creative adaptors. This diverse makeup prevents major cognitive blindspots.';
      frictions = 'Differing styles and paces (e.g., Introverts wanting quiet focus vs Extraverts wanting brainstorming) can cause communication friction. Clear role allocation is necessary to prevent confusion.';
    }
    
    frictions += `<br><br><strong style="color:var(--accent);">Management Advice:</strong><br>
<ul style="list-style:disc; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.4rem; margin-top:0.5rem;">
  <li>Maintain a balance between objective feedback and psychological safety.</li>
  <li>Encourage introverted members to submit ideas in writing before meetings.</li>
  <li>Set regular intervals to step back and review the long-term strategic map.</li>
</ul>`;
  } else {
    // Sinhala dynamic report
    if (pctT >= 60 && pctJ >= 60) {
      archetype = 'උපායමාර්ගික ක්‍රියාකාරී බලකාය (Strategic Force)';
      strengths = 'ඔබේ කණ්ඩායම සතුව ඉහළ තාර්කික පැහැදිලිකමක්, ක්‍රමවත් ක්‍රියාත්මක කිරීමේ හැකියාවක් සහ පක්ෂපාතී තීරණ ගැනීමේ හැකියාවක් ඇත. විශාල ඉලක්ක කුඩා පියවරවලට බෙදා සාර්ථකව අවසන් කිරීමට ඔබ දක්ෂයි.';
      frictions = 'ඕනෑවට වඩා තර්කයට සහ ව්‍යුහයට මුල් තැන දීම නිසා සාමාජිකයින් අතර හැඟීම්බර සන්නිවේදනය සහ නිර්මාණශීලී නිදහස මදක් අඩු විය හැකිය. වැඩ කිරීමට යාම නිසා කණ්ඩායම් සතුට මගහැරිය හැක.';
    } else if (pctN >= 60 && pctF >= 60) {
      archetype = 'නිර්මාණශීලී සහයෝගීතා එකමුතුව (Creative Catalyst)';
      strengths = 'ඉතාමත් නිර්මාණශීලී, මානුෂීය වටිනාකම්වලින් පිරි සහ එකිනෙකාට උදව් කරන එකමුතුවකි. ඔබ නව අදහස්වලට ඉතා විවෘත වන අතර කණ්ඩායමේ සාමූහික සතුට උපරිමයෙන් පවත්වා ගනී.';
      frictions = 'කාලසටහන්වලට අනුව වැඩ කිරීමේදී සහ දෛනික පරිපාලන කටයුතුවලදී පසුබෑමක් ඇති විය හැක. ගැටුම් මඟහැරීමට උත්සාහ කිරීම නිසා ඇතැම් වැදගත් ප්‍රශ්න කල්දැමීමට පෙළඹිය හැකිය.';
    } else if (pctS >= 60 && pctP >= 60) {
      archetype = 'ප්‍රායෝගික ක්‍රියාකාරී බලඇණිය (Tactical Squad)';
      strengths = 'ඉතාමත් ප්‍රායෝගික, නම්‍යශීලී සහ ක්‍රියාවටම මුල් තැන දෙන කණ්ඩායමකි. ඕනෑම හදිසි ගැටලුවකට සාර්ථකව මුහුණ දීමට සහ ක්ෂණික විසඳුම් ක්‍රියාවට නැංවීමට ඔබ දක්ෂයි.';
      frictions = 'දිගුකාලීන සැලසුම් සහ ඉදිරි දැක්ම පිළිබඳ අවධානය මගහැරී යා හැක. සැලසුම් කිරීමකින් තොරව හදිසි තීරණ ගැනීම නිසා අනවශ්‍ය ලෙස කාලය සහ ශ්‍රමය අපතේ යාමට ඉඩ ඇත.';
    } else {
      archetype = 'සමබර මිශ්‍ර සන්ධානය (Balanced Alliance)';
      strengths = 'ඉතාමත් සමබර, බහු-මාන කණ්ඩායමකි. සැලසුම් කරන්නන්, සහකම්පන සන්නිවේදකයන්, ප්‍රායෝගික ක්‍රියාකාරීන් සහ නිර්මාණකරුවන්ගේ කදිම මිශ්‍රණයක් පවතී. මෙමඟින් කණ්ඩායමේ ඇති ප්‍රධාන අඩුපාඩු මඟහැරේ.';
      frictions = 'සාමාජිකයින්ගේ විවිධ ක්‍රමවේදයන් (නිහඬව වැඩ කිරීමට ලැදි අය සහ සාකච්ඡාවලට ලැදි අය) නිසා සන්නිවේදන ගැටලු ඇති විය හැකිය. වගකීම් නිසි පරිදි බෙදා දීම අත්‍යවශ්‍ය වේ.';
    }
    
    frictions += `<br><br><strong style="color:var(--accent);">කළමනාකරණ උපදෙස්:</strong><br>
<ul style="list-style:disc; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.4rem; margin-top:0.5rem;">
  <li>තාර්කික වැඩ පරිසරය මෙන්ම කණ්ඩායම තුළ එකිනෙකා අගය කිරීමේ සංස්කෘතියක් පවත්වා ගන්න.</li>
  <li>රැස්වීම්වලට පෙර ලිඛිතව අදහස් ලබා දීමට නිහඬ (introverted) සාමාජිකයින්ට අවස්ථාව ලබා දෙන්න.</li>
  <li>දෛනික රාජකාරිවලින් මදක් බැහැර වී, දිගුකාලීන ඉලක්ක පිළිබඳව සමාලෝචන සිදු කරන්න.</li>
</ul>`;
  }
  
  return { score, archetype, strengths, frictions };
}

/* ===== FICTIONAL & ANIME PERSONALITY UNIVERSE LOGIC ===== */
let universeCharacters = [];
let activeBattleCharacter = null;

function buildUniverseIndex() {
  if (universeCharacters.length > 0) return; // Only build once
  
  const typs = types();
  const index = [];
  
  for (const code in typs) {
    const tp = typs[code];
    if (tp.extra && tp.extra.figures) {
      const figs = tp.extra.figures;
      ['fictional', 'anime'].forEach(subCat => {
        if (figs[subCat]) {
          figs[subCat].forEach(f => {
            if (!index.some(c => c.name === f.name)) {
              index.push({
                name: f.name,
                img: f.img,
                desc: f.desc,
                code: code,
                category: tp.cat, // 'analyst', 'diplomat', 'sentinel', 'explorer'
                subCategory: subCat // 'fictional', 'anime'
              });
            }
          });
        }
      });
    }
  }
  universeCharacters = index;
}

function getFranchiseTag(name, desc) {
  const text = (name + ' ' + desc).toLowerCase();
  if (text.includes('naruto') || text.includes('sasuke') || text.includes('kakashi') || text.includes('itachi') || text.includes('madara') || text.includes('obito') || text.includes('konoha') || text.includes('gaara') || text.includes('tsunade') || text.includes('jiraiya') || text.includes('sakura')) {
    return 'naruto';
  }
  if (text.includes('marvel') || text.includes('tony stark') || text.includes('avengers') || text.includes('iron man') || text.includes('captain america') || text.includes('thor') || text.includes('hulk') || text.includes('loki') || text.includes('thanos') || text.includes('spider-man') || text.includes('peter parker')) {
    return 'marvel';
  }
  if (text.includes('batman') || text.includes('dc ') || text.includes('joker') || text.includes('gotham') || text.includes('bruce wayne') || text.includes('superman') || text.includes('clark kent') || text.includes('harley quinn') || text.includes('wonder woman')) {
    return 'dc';
  }
  if (text.includes('star wars') || text.includes('yoda') || text.includes('darth vader') || text.includes('luke skywalker') || text.includes('obi-wan') || text.includes('anakin') || text.includes('jedi') || text.includes('sith')) {
    return 'starwars';
  }
  if (text.includes('breaking bad') || text.includes('walter white') || text.includes('heisenberg') || text.includes('jesse pinkman') || text.includes('saul goodman') || text.includes('gus fring') || text.includes('gusev')) {
    return 'breakingbad';
  }
  return 'other';
}

function getCharacterQuote(name, code) {
  const isEn = currentLang === 'en';
  const quotes = {
    'Walter White': {
      en: 'I am the one who knocks! Say my name.',
      si: 'දොරට තට්ටු කරන්නේ මමයි! මගේ නම කියන්න.'
    },
    'Batman / Bruce Wayne': {
      en: 'I am vengeance. I am the night. I am Batman!',
      si: 'මම තමයි පළිගැනීම. මම තමයි රාත්‍රිය. මම බැට්මෑන්!'
    },
    'Lelouch lamperouge': {
      en: 'If the king does not move, his subjects will not follow.',
      si: 'රජු ක්‍රියාත්මක නොවුණහොත්, සේනාව ඔහු පසුපස නොඑනු ඇත.'
    },
    'Sherlock Holmes': {
      en: 'The game is on! Eliminate the impossible.',
      si: 'ක්‍රීඩාව ආරම්භ වී ඇත! කළ නොහැකි දේ බැහැර කරන්න.'
    },
    'Yoda (Star Wars)': {
      en: 'Do or do not. There is no try.',
      si: 'කරන්න, නැතහොත් නොකරන්න. උත්සාහ කිරීමක් කියා දෙයක් නැත.'
    },
    'Tony Stark': {
      en: 'I am Iron Man. Part of the journey is the end.',
      si: 'මම තමයි අයන් මෑන්. ගමනක අවසානයත් එම ගමනේම කොටසකි.'
    },
    'Thanos': {
      en: 'I am inevitable. Perfectly balanced, as all things should be.',
      si: 'මගේ පැමිණීම වැළැක්විය නොහැක. සියලු දේ පරිපූර්ණව සමබර විය යුතුය.'
    },
    'L Lawliet': {
      en: 'No matter how gifted you are, you alone cannot change the world.',
      si: 'ඔබ කෙතරම් දක්ෂ වුවත්, ඔබට තනිවම ලෝකය වෙනස් කළ නොහැක.'
    },
    'Kakashi Hatake': {
      en: 'In the ninja world, those who abandon their friends are worse than trash.',
      si: 'නින්ජා ලෝකයේ තමන්ගේ යහළුවන්ව අතහරින අය කුණු කූඩයට වඩා අන්තයි.'
    },
    'Eren Yeager': {
      en: 'If we don\'t fight, we can\'t win! Tatakae!',
      si: 'අපි සටන් නොකළොත් අපට ජයගත නොහැක! සටන් වදින්න!'
    },
    'Professor': {
      en: 'When there is a plan, there is always hope.',
      si: 'සැලසුමක් ඇති තැන සෑම විටම බලාපොරොත්තුවක් පවතී.'
    },
    'Joker': {
      en: 'Why so serious? Let\'s put a smile on that face!',
      si: 'ඇයි මේ තරම් බැරෑරුම්? මුහුණට හිනාවක් ගනිමු!'
    },
    'Madara Uchiha': {
      en: 'Wake up to reality! Nothing ever goes as planned in this accursed world.',
      si: 'සැබෑ ලෝකයට අවදි වන්න! මේ සාපලත් ලෝකයේ කිසිවක් සැලසුම් කළ පරිදි සිදු නොවේ.'
    },
    'Itachi Uchiha': {
      en: 'It is not because they become Hokage that everyone acknowledges them. It is because everyone acknowledges them that they become Hokage.',
      si: 'හොකාගේ වූ නිසා මිනිසුන් ඔවුන්ව පිළිගන්නේ නැත. මිනිසුන් ඔවුන්ව පිළිගත් නිසා ඔවුන් හොකාගේ වේ.'
    }
  };

  const entry = quotes[name];
  if (entry) {
    return isEn ? entry.en : entry.si;
  }

  // Generic fallbacks based on Thinking vs Feeling
  if (code.includes('T')) {
    return isEn ? 'Logic is the beginning of wisdom, not the end.' : 'තර්කය යනු ප්‍රඥාවේ ආරම්භය මිස එහි අවසානය නොවේ.';
  } else if (code.includes('F')) {
    return isEn ? 'To protect those we love is our greatest strength.' : 'අප ආදරය කරන අය ආරක්ෂා කිරීම අපගේ ශක්තියයි.';
  }
  return isEn ? 'Embrace the journey on your own terms.' : 'ඔබේම කොන්දේසි මත ජීවන ගමන වැළඳ ගන්න.';
}

function renderUniverseScreen() {
  showScreen('universe-screen');
  buildUniverseIndex();
  
  // Set initial filters to defaults
  document.getElementById('universe-search').value = '';
  document.getElementById('universe-cat-select').value = 'all';
  document.getElementById('universe-franchise-select').value = 'all';
  
  filterUniverse();
}

function filterUniverse() {
  buildUniverseIndex(); // rebuild if cache was invalidated (e.g. on language switch)
  const searchVal = document.getElementById('universe-search').value.toLowerCase().trim();
  const catVal = document.getElementById('universe-cat-select').value;
  const franchiseVal = document.getElementById('universe-franchise-select').value;
  
  const grid = document.getElementById('universe-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filtered = universeCharacters.filter(c => {
    // Search matching
    const matchesSearch = c.name.toLowerCase().includes(searchVal) || c.desc.toLowerCase().includes(searchVal) || c.code.toLowerCase().includes(searchVal);
    // Category matching
    const matchesCat = catVal === 'all' || c.category === catVal;
    // Franchise tag matching
    const tag = getFranchiseTag(c.name, c.desc);
    const matchesFranchise = franchiseVal === 'all' || tag === franchiseVal;
    
    return matchesSearch && matchesCat && matchesFranchise;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text2); font-style:italic;">${currentLang === 'en' ? 'No matching characters found.' : 'පූරණය වන චරිත කිසිවක් හමු නොවිණි.'}</div>`;
    return;
  }
  
  filtered.forEach(c => {
    const quote = getCharacterQuote(c.name, c.code);
    const dicebearSeed = encodeURIComponent(c.name);
    const avatarUrl = c.img && c.img.startsWith('http') ? c.img : `https://api.dicebear.com/7.x/${c.subCategory === 'anime' ? 'bottts' : 'avataaars'}/svg?seed=${dicebearSeed}`;
    
    const card = document.createElement('div');
    card.className = `char-card ${c.category}`;
    card.setAttribute('onclick', `openCharacterBattle('${c.name.replace(/'/g, "\\'")}')`);
    
    card.innerHTML = `
      <!-- Quote Bubble -->
      <div class="quote-bubble">
        <p class="quote-bubble-text">"${quote}"</p>
      </div>
      
      <!-- Avatar container -->
      <div style="width: 76px; height: 76px; border-radius: 50%; overflow:hidden; border: 2.5px solid var(--${c.category}); margin: 0 auto 1.1rem auto; background: var(--surface2); display: flex; align-items:center; justify-content:center;">
        <img src="${avatarUrl}" class="fig-img" alt="${c.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${dicebearSeed}';" />
      </div>
      
      <!-- Info headers -->
      <div style="font-size:1.15rem; font-weight:700; color:var(--text); margin-bottom:0.3rem;">${c.name}</div>
      <div style="font-size:0.85rem; font-weight:700; color:var(--${c.category}); letter-spacing:0.04em; margin-bottom:0.75rem;">${c.code}</div>
      <div style="font-size:0.82rem; color:var(--text2); line-height:1.45; max-height: 3.5em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${c.desc}</div>
      
      <!-- Action button row -->
      <button class="team-roster-badge" style="margin-top:1.1rem; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:var(--text); cursor:pointer; font-weight:600; padding:0.4rem 0.9rem; transition:all 0.2s;" onmouseover="this.style.background='var(--accent)'; this.style.color='#000';" onmouseout="this.style.background='rgba(255,255,255,0.06)'; this.style.color='var(--text)';">
        ${t('compareMeBtn')}
      </button>
    `;
    
    grid.appendChild(card);
  });
}

function openCharacterBattle(charName) {
  buildUniverseIndex();
  const char = universeCharacters.find(c => c.name === charName);
  if (!char) return;
  
  activeBattleCharacter = char;
  
  // What type do we compare the character with?
  // If the user took the test, use their code. Otherwise, use INTJ
  const userFullCode = lastResultsCode || 'INTJ-A';
  const userCode = userFullCode.split('-')[0];
  const charCode = char.code;
  
  // Calculate similarity based on matching dimensions
  let matchingDims = 0;
  for (let i = 0; i < 4; i++) {
    if (userCode[i] === charCode[i]) matchingDims++;
  }
  
  // Math: Similarity score between 40% and 98%
  let similarity = 40 + (matchingDims * 12.5) + Math.floor(Math.random() * 8);
  similarity = Math.min(similarity, 98);
  
  const isEn = currentLang === 'en';
  let matchText = '';
  let matchBadgeStyle = '';
  
  if (similarity >= 85) {
    matchText = t('soulmateMatch');
    matchBadgeStyle = 'background: rgba(45,212,168,0.12); color: var(--diplomat); border: 1px solid var(--diplomat);';
  } else if (similarity >= 65) {
    matchText = t('friendMatch');
    matchBadgeStyle = 'background: rgba(59,130,246,0.12); color: var(--sentinel); border: 1px solid var(--sentinel);';
  } else {
    matchText = t('neutralMatch');
    matchBadgeStyle = 'background: rgba(232,93,58,0.12); color: var(--accent2); border: 1px solid var(--accent2);';
  }
  
  document.getElementById('battle-similarity-pct').textContent = similarity + '%';
  document.getElementById('battle-match-badge').textContent = matchText;
  document.getElementById('battle-match-badge').style = matchBadgeStyle;
  
  // Set Left side User Avatar details
  const dicebearSeedUser = encodeURIComponent(userCode);
  const userAvatar = `<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${dicebearSeedUser}" class="fig-img" alt="${userCode}" />`;
  document.getElementById('battle-user-avatar-w').innerHTML = userAvatar;
  document.getElementById('battle-user-name').textContent = isEn ? 'My Profile' : 'මගේ පැතිකඩ';
  document.getElementById('battle-user-type').textContent = userFullCode;
  
  // Set Right side Character Avatar details
  const dicebearSeedChar = encodeURIComponent(char.name);
  const charAvatarUrl = char.img && char.img.startsWith('http') ? char.img : `https://api.dicebear.com/7.x/${char.subCategory === 'anime' ? 'bottts' : 'avataaars'}/svg?seed=${dicebearSeedChar}`;
  const charAvatar = `<img src="${charAvatarUrl}" class="fig-img" alt="${char.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${dicebearSeedChar}';" />`;
  document.getElementById('battle-char-avatar-w').innerHTML = charAvatar;
  document.getElementById('battle-char-avatar-w').style.borderColor = `var(--${char.category})`;
  document.getElementById('battle-char-name').textContent = char.name;
  document.getElementById('battle-char-type').textContent = char.code;
  
  // स्थानीय (localized) analysis insights
  let insights = '';
  if (isEn) {
    insights = `Comparing your cognitive code (${userCode}) with ${char.name}'s code (${charCode}):<br><br>`;
    if (matchingDims === 4) {
      insights += `You share the **exact same cognitive makeup** as ${char.name}! Both of you process information, evaluate options, and structure your lives with identical logical priorities. You possess a unique intellectual and intuitive chemistry.`;
    } else if (matchingDims === 3) {
      insights += `You share a **highly aligned mindset** with ${char.name}, matching on 3 out of 4 dimensions. You easily understand each other's core motives, and any small differences only serve to complement your relationship.`;
    } else if (matchingDims === 2) {
      insights += `You have a **balanced dynamic** with ${char.name}, sharing 2 dimensions. This means you have enough shared ground to communicate well, but your differences create fascinating interest and chemistry.`;
    } else {
      insights += `You and ${char.name} approach the universe from **entirely different angles**. While this can occasionally cause communication gaps, it also represents a powerful opportunity to learn from very different perspectives.`;
    }
  } else {
    insights = `ඔබේ පෞරුෂත්ව කේතය (${userCode}) සහ ${char.name} ගේ පෞරුෂත්ව කේතය (${charCode}) සසඳා බැලීමේදී:<br><br>`;
    if (matchingDims === 4) {
      insights += `ඔබ සහ ${char.name} සතුව **හාත්පසින්ම සමාන පෞරුෂත්ව ව්‍යුහයක්** පවතී! ඔබ දෙදෙනාම ලෝකය තේරුම් ගන්නා ආකාරය, තීරණ ගන්නා ආකාරය සහ සැලසුම් සකස් කරන ආකාරය 100%ක්ම සමාන වේ. ඔබට ඉතා ශක්තිමත් ආත්මීය බැඳීමක් පවතී.`;
    } else if (matchingDims === 3) {
      insights += `ඔබ සහ ${char.name} අතර **ඉතා ඉහළ මානසික ගැළපීමක්** පවතී. දර්ශක 4න් 3ක්ම සමාන බැවින්, එකිනෙකාගේ අරමුණු ඉතා පහසුවෙන් තේරුම් ගත හැක. පවතින සුළු වෙනස්කම් ඔබේ බැඳීම තවදුරටත් ශක්තිමත් කරයි.`;
    } else if (matchingDims === 2) {
      insights += `ඔබ සහ ${char.name} අතර **සමබර වූත් උද්යෝගිමත් වූත් රසායනයක්** පවතී. දර්ශක 2ක් සමාන බැවින් සන්නිවේදනය පහසු වන අතර, පවතින වෙනස්කම් දෙදෙනා අතර දැඩි කුතුහලයක් සහ ආකර්ෂණයක් ඇති කරයි.`;
    } else {
      insights += `ඔබ සහ ${char.name} ජීවිතය දෙස බලන්නේ **සම්පූර්ණයෙන්ම වෙනස් මානයන් දෙකකින්**. මේ නිසා ඇතැම් අවස්ථාවල සන්නිවේදන ගැටලු ඇතිවිය හැකි වුවද, එකිනෙකාගෙන් ඉගෙනීමට ඇති අවස්ථාව ඉතා ඉහළය.`;
    }
  }
  document.getElementById('battle-insights-text').innerHTML = insights;
  
  // Render dimension rows comparison
  renderBattleBars(userCode, charCode);
  
  // Activate battle overlay
  document.getElementById('battle-modal').classList.add('active');
}

function renderBattleBars(user, char) {
  const wrap = document.getElementById('battle-dimensions-wrap');
  if (!wrap) return;
  
  wrap.innerHTML = '';
  
  const labels = {
    E: { en: 'Extravert', si: 'බාහිරශීලී (E)' },
    I: { en: 'Introvert', si: 'අභ්‍යන්තරශීලී (I)' },
    S: { en: 'Sensing', si: 'ප්‍රායෝගික (S)' },
    N: { en: 'Intuition', si: 'පරිකල්පන (N)' },
    T: { en: 'Thinking', si: 'තාර්කික (T)' },
    F: { en: 'Feeling', si: 'හැඟීම්බර (F)' },
    J: { en: 'Judging', si: 'ක්‍රමවත් (J)' },
    P: { en: 'Prospecting', si: 'නම්‍යශීලී (P)' }
  };
  
  const dims = [
    { key: 'EI', left: 'E', right: 'I', label: currentLang === 'en' ? 'Mind' : 'මනස' },
    { key: 'SN', left: 'S', right: 'N', label: currentLang === 'en' ? 'Energy' : 'ශක්තිය' },
    { key: 'TF', left: 'T', right: 'F', label: currentLang === 'en' ? 'Nature' : 'ස්වභාවය' },
    { key: 'JP', left: 'J', right: 'P', label: currentLang === 'en' ? 'Tactics' : 'ක්‍රමෝපාය' }
  ];
  
  dims.forEach(d => {
    const uVal = user.includes(d.left) ? d.left : d.right;
    const cVal = char.includes(d.left) ? d.left : d.right;
    const matches = uVal === cVal;
    
    const row = document.createElement('div');
    row.style = 'background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); border-radius:10px; padding:0.8rem 1rem;';
    
    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:var(--text2); margin-bottom:0.5rem; text-transform:uppercase;">
        <span>${d.label}</span>
        <span style="color: ${matches ? 'var(--diplomat)' : 'var(--accent2)'};">${matches ? (currentLang === 'en' ? 'Match' : 'ගැළපේ') : (currentLang === 'en' ? 'Diverse' : 'වෙනස්')}</span>
      </div>
      <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
        <div style="font-weight:600; font-size:0.85rem; color:var(--text); width:35%; text-align:left;">${labels[uVal][currentLang]}</div>
        <div style="flex:1; height:6px; background:rgba(255,255,255,0.08); border-radius:3px; position:relative; overflow:hidden;">
          <div style="position:absolute; inset:0; width:${matches ? '100%' : '50%'}; background:${matches ? 'linear-gradient(90deg, var(--accent), var(--accent2))' : 'var(--surface3)'}; border-radius:3px;"></div>
        </div>
        <div style="font-weight:600; font-size:0.85rem; color:var(--accent); width:35%; text-align:right;">${labels[cVal][currentLang]}</div>
      </div>
    `;
    wrap.appendChild(row);
  });
}

function closeCharacterBattle() {
  document.getElementById('battle-modal').classList.remove('active');
  activeBattleCharacter = null;
}

/* ===== CAREER PATHWAY & GROWTH HUB LOGIC ===== */
let activeGrowthType = null;
let activeRoadmapNodeIndex = 0;

const growthHubRoadmaps = {
  INTJ: [
    { title: { en: 'Systems Architect', si: 'ක්‍රමවේද නිර්මාණ ශිල්පියා' }, duties: { en: 'Designing complex, scalable software systems and defining technology infrastructure standards.', si: 'සංකීර්ණ, පරිමාණය කළ හැකි මෘදුකාංග පද්ධති සැලසුම් කිරීම සහ තාක්ෂණික යටිතල පහසුකම් ප්‍රමිතීන් නිර්වචනය කිරීම.' }, skills: { en: ['System Design', 'Cloud Architecture', 'Logical Modeling'], si: ['පද්ධති සැලසුම්කරණය', 'වලාකුළු තාක්ෂණය', 'තාර්කික ආකෘතිකරණය'] } },
    { title: { en: 'Chief Technology Officer (CTO)', si: 'ප්‍රධාන තාක්ෂණික නිලධාරී' }, duties: { en: 'Aligning technology development with business objectives, managing engineering teams, and leading R&D.', si: 'තාක්ෂණික සංවර්ධනය ව්‍යාපාරික අරමුණු සමඟ ගැලපීම, ඉංජිනේරු කණ්ඩායම් කළමනාකරණය සහ පර්යේෂණ මෙහෙයවීම.' }, skills: { en: ['Strategic Planning', 'Team Leadership', 'Tech Governance'], si: ['උපායමාර්ගික සැලසුම්කරණය', 'කණ්ඩායම් නායකත්වය', 'තාක්ෂණික පාලනය'] } },
    { title: { en: 'Director of Technology', si: 'තාක්ෂණ අධ්‍යක්ෂක' }, duties: { en: 'Defining long-term enterprise architecture, budgeting tech initiatives, and advising the executive board.', si: 'දිගුකාලීන ආයතනික තාක්ෂණික ව්‍යුහය තීරණය කිරීම, අයවැයකරණය සහ විධායක මණ්ඩලයට උපදෙස් දීම.' }, skills: { en: ['Executive Strategy', 'Financial Management', 'Risk Assessment'], si: ['විධායක උපායමාර්ගය', 'මුල්‍ය කළමනාකරණය', 'අවදානම් තක්සේරුකරණය'] } }
  ],
  INTP: [
    { title: { en: 'Research Scientist', si: 'පර්යේෂණ විද්‍යාඥයා' }, duties: { en: 'Conducting advanced literature reviews, designing experiments, and formulating new scientific hypotheses.', si: 'උසස් සාහිත්‍ය සමාලෝචන සිදු කිරීම, අත්හදා බැලීම් සැලසුම් කිරීම සහ නව විද්‍යාත්මක උපකල්පන සැකසීම.' }, skills: { en: ['Scientific Method', 'Data Analysis', 'Hypothesis Testing'], si: ['විද්‍යාත්මක ක්‍රමවේදය', 'දත්ත විශ්ලේෂණය', 'උපකල්පන පරීක්ෂාව'] } },
    { title: { en: 'Principal Investigator', si: 'ප්‍රධාන පර්යේෂක' }, duties: { en: 'Securing research grants, supervising research teams, and publishing papers in peer-reviewed journals.', si: 'පර්යේෂණ ප්‍රතිපාදන ලබා ගැනීම, පර්යේෂණ කණ්ඩායම් අධීක්ෂණය සහ අධ්‍යයන පත්‍රිකා ප්‍රකාශයට පත් කිරීම.' }, skills: { en: ['Grant Writing', 'Academic Publishing', 'Team Mentoring'], si: ['ප්‍රතිපාදන අයදුම්පත්', 'විද්‍යාත්මක ප්‍රකාශනය', 'කණ්ඩායම් උපදේශනය'] } },
    { title: { en: 'Chief Scientific Officer', si: 'ප්‍රධාන විද්‍යාත්මක නිලධාරී' }, duties: { en: 'Directing organization-wide scientific strategy, managing lab partnerships, and evaluating technological innovation.', si: 'සංවිධානය පුරා විද්‍යාත්මක උපාය මාර්ග මෙහෙයවීම, හවුල්කාරිත්වයන් කළමනාකරණය සහ නවෝත්පාදනයන් ඇගයීම.' }, skills: { en: ['Scientific Leadership', 'Innovation Management', 'IP Strategy'], si: ['විද්‍යාත්මක නායකත්වය', 'නවෝත්පාදන කළමනාකරණය', 'බුද්ධිමය දේපල උපායමාර්ගය'] } }
  ],
  ENTJ: [
    { title: { en: 'Business Analyst', si: 'ව්‍යාපාර විශ්ලේෂක' }, duties: { en: 'Analyzing operational workflows, documenting systems processes, and finding efficiency opportunities.', si: 'මෙහෙයුම් කාර්ය ප්‍රවාහයන් විශ්ලේෂණය කිරීම, ක්‍රියාවලීන් ලේඛනගත කිරීම සහ කාර්යක්ෂමතා අවස්ථා සෙවීම.' }, skills: { en: ['Process Modeling', 'Financial Analysis', 'Requirements Gathering'], si: ['ක්‍රියාවලි ආකෘතිකරණය', 'මුල්‍ය විශ්ලේෂණය', 'අවශ්‍යතා එක්රැස් කිරීම'] } },
    { title: { en: 'Project Director', si: 'ව්‍යාපෘති අධ්‍යක්ෂක' }, duties: { en: 'Managing large budgets, orchestrating resource allocation, and driving project completion on strict schedules.', si: 'විශාල අයවැය කළමනාකරණය, සම්පත් වෙන් කිරීම සහ ව්‍යාපෘති නියමිත කාලයට අවසන් කිරීම මෙහෙයවීම.' }, skills: { en: ['Program Management', 'Resource Scheduling', 'Stakeholder Communication'], si: ['වැඩසටහන් කළමනාකරණය', 'සම්පත් උපලේඛනගත කිරීම', 'පාර්ශවකරුවන්ගේ සන්නිවේදනය'] } },
    { title: { en: 'Chief Executive Officer (CEO)', si: 'ප්‍රධාන විධායක නිලධාරී' }, duties: { en: 'Formulating strategic organizational vision, leading executive board decisions, and ensuring financial health.', si: 'සංවිධානයේ උපායමාර්ගික දැක්ම සැකසීම, විධායක මණ්ඩල තීරණ මෙහෙයවීම සහ මුල්‍ය ස්ථාවරත්වය සහතික කිරීම.' }, skills: { en: ['Corporate Strategy', 'Executive Leadership', 'Board Relations'], si: ['ආයතනික උපායමාර්ගය', 'විධායක නායකත්වය', 'මණ්ඩල සබඳතා'] } }
  ],
  ENTP: [
    { title: { en: 'Product Innovator', si: 'නිෂ්පාදන නව නිපැයුම්කරු' }, duties: { en: 'Brainstorming creative product concepts, developing initial prototypes, and analyzing user feedback.', si: 'නිර්මාණාත්මක නිෂ්පාදන සංකල්ප සාකච්ඡා කිරීම, ආරම්භක මූලාකෘති නිපදවීම සහ පරිශීලක අදහස් විශ්ලේෂණය කිරීම.' }, skills: { en: ['Prototyping', 'Product Ideation', 'Market Research'], si: ['මූලාකෘතිකරණය', 'නිෂ්පාදන අදහස් උත්පාදනය', 'වෙළඳපල පර්යේෂණ'] } },
    { title: { en: 'Director of Innovation', si: 'නවෝත්පාදන අධ්‍යක්ෂක' }, duties: { en: 'Managing development sprints, leading R&D product pipelines, and testing new technologies.', si: 'සංවර්ධන සැලසුම් කළමනාකරණය, පර්යේෂණ හා සංවර්ධන කටයුතු මෙහෙයවීම සහ නව තාක්ෂණයන් අත්හදා බැලීම.' }, skills: { en: ['Agile Leadership', 'Product Strategy', 'Technology Evaluation'], si: ['Agile නායකත්වය', 'නිෂ්පාදන උපායමාර්ගය', 'තාක්ෂණික ඇගයීම'] } },
    { title: { en: 'Venture Partner', si: 'ව්‍යාපාරික හවුල්කරු' }, duties: { en: 'Evaluating startup investment opportunities, structuring financial deals, and advising growth strategies.', si: 'ආරම්භක ව්‍යාපාර ආයෝජන අවස්ථා ඇගයීම, මුල්‍ය ගනුදෙනු සැකසීම සහ වර්ධන උපාය මාර්ග උපදෙස් දීම.' }, skills: { en: ['Venture Capital', 'Portfolio Strategy', 'Deal Sourcing'], si: ['ව්‍යාපාර ප්‍රාග්ධනය', 'සංචිත උපායමාර්ගය', 'ගනුදෙනු මූලාශ්‍රකරණය'] } }
  ],
  INFJ: [
    { title: { en: 'Counselor / Psychologist', si: 'උපදේශක / මනෝවිද්‍යාඥයා' }, duties: { en: 'Providing empathetic active listening, facilitating counseling sessions, and designing mental growth plans.', si: 'සහකම්පනශීලීව සවන් දීම, උපදේශන සැසි මෙහෙයවීම සහ මානසික සංවර්ධන සැලසුම් සකස් කිරීම.' }, skills: { en: ['Psychotherapy', 'Active Listening', 'Crisis Intervention'], si: ['මනෝචිකිත්සාව', 'සක්‍රීය සවන්දීම', 'අර්බුද මැදිහත්කරණය'] } },
    { title: { en: 'Clinical Director', si: 'සායනික අධ්‍යක්ෂක' }, duties: { en: 'Managing medical counseling centers, supervising clinical staff, and ensuring patient care standards.', si: 'වෛද්‍ය උපදේශන මධ්‍යස්ථාන කළමනාකරණය, සායනික කාර්ය මණ්ඩලය අධීක්ෂණය සහ රෝගී සත්කාර ප්‍රමිතීන් සහතික කිරීම.' }, skills: { en: ['Clinical Supervision', 'Healthcare Operations', 'Program Evaluation'], si: ['සායනික අධීක්ෂණය', 'සෞඛ්‍ය සේවා මෙහෙයුම්', 'වැඩසටහන් ඇගයීම'] } },
    { title: { en: 'Humanitarian Lead', si: 'මානුෂීය මෙහෙයුම් ප්‍රධානී' }, duties: { en: 'Designing non-profit outreach programs, coordinating international aid, and advocating community values.', si: 'ලාභ නොලබන සහන වැඩසටහන් සැලසුම් කිරීම, ජාත්‍යන්තර ආධාර සම්බන්ධීකරණය සහ ප්‍රජා සේවාවන් මෙහෙයවීම.' }, skills: { en: ['NGO Governance', 'Advocacy Strategy', 'Global Relations'], si: ['රාජ්‍ය නොවන සංවිධාන පාලනය', 'නියෝජන උපායමාර්ගය', 'ගෝලීය සබඳතා'] } }
  ],
  INFP: [
    { title: { en: 'Creative Writer / Designer', si: 'නිර්මාණාත්මක ලේඛක / නිර්මාණකරු' }, duties: { en: 'Drafting original articles, scripts or visual artwork, and expressing complex narrative concepts.', si: 'මුල් ලිපි, පිටපත් හෝ දෘශ්‍ය කලා නිර්මාණ සකස් කිරීම සහ සංකීර්ණ කතාන්දර සංකල්ප ප්‍රකාශ කිරීම.' }, skills: { en: ['Creative Writing', 'Graphic Design', 'Visual Storytelling'], si: ['නිර්මාණාත්මක ලේඛනය', 'ග්‍රැෆික් නිර්මාණය', 'දෘශ්‍ය කතාන්දරකරණය'] } },
    { title: { en: 'Managing Editor', si: 'කළමනාකරණ කර්තෘ' }, duties: { en: 'Reviewing and polishing creative submissions, managing content schedules, and mentoring junior writers.', si: 'නිර්මාණාත්මක අදහස් සමාලෝචනය සහ ඔපදැමීම, අන්තර්ගත කාලසටහන් කළමනාකරණය සහ නව ලේඛකයින්ට මඟපෙන්වීම.' }, skills: { en: ['Copyediting', 'Content Strategy', 'Editorial Guidance'], si: ['සංස්කරණය', 'අන්තර්ගත උපායමාර්ගය', 'කර්තෘ උපදේශනය'] } },
    { title: { en: 'Creative Director', si: 'නිර්මාණාත්මක අධ්‍යක්ෂක' }, duties: { en: 'Guiding complete brand visual style, managing production pipelines, and approving creative campaigns.', si: 'සම්පූර්ණ සන්නාම දෘශ්‍ය විලාසය මෙහෙයවීම, නිෂ්පාදන ක්‍රියාවලීන් කළමනාකරණය සහ නිර්මාණාත්මක ප්‍රචාරණ අනුමත කිරීම.' }, skills: { en: ['Artistic Direction', 'Brand Strategy', 'Creative Vision'], si: ['කලාත්මක මෙහෙයවීම', 'සන්නාම උපායමාර්ගය', 'නිර්මාණාත්මක දැක්ම'] } }
  ],
  ENFJ: [
    { title: { en: 'HR Coordinator', si: 'මානව සම්පත් සම්බන්ධීකාරක' }, duties: { en: 'Facilitating employee onboarding, resolving workplace conflicts, and organizing team events.', si: 'සේවක බඳවා ගැනීම් මෙහෙයවීම, සේවා ස්ථාන ගැටලු විසඳීම සහ කණ්ඩායම් ක්‍රියාකාරකම් සංවිධානය කිරීම.' }, skills: { en: ['Conflict Resolution', 'Employee Onboarding', 'Event Management'], si: ['ගැටුම් නිරාකරණය', 'සේවක බඳවා ගැනීම්', 'උත්සව සංවිධානය'] } },
    { title: { en: 'HR Director', si: 'මානව සම්පත් අධ්‍යක්ෂක' }, duties: { en: 'Developing talent acquisition strategies, managing HR budgets, and structuring career growth frameworks.', si: 'දක්ෂතා බඳවා ගැනීමේ උපාය මාර්ග සැකසීම, මානව සම්පත් අයවැය කළමනාකරණය සහ වෘත්තීය සංවර්ධන සැලසුම් සකස් කිරීම.' }, skills: { en: ['Talent Strategy', 'Compensation Benefits', 'Organizational Development'], si: ['දක්ෂතා උපායමාර්ගය', 'වැටුප් හා ප්‍රතිලාභ', 'සංවිධානාත්මක සංවර්ධනය'] } },
    { title: { en: 'Chief People Officer', si: 'ප්‍රධාන මානව නිලධාරී' }, duties: { en: 'Structuring comprehensive corporate culture, driving employee retention programs, and advising board decisions.', si: 'සමස්ත ආයතනික සංස්කෘතිය සැකසීම, සේවක රඳවා ගැනීමේ වැඩසටහන් මෙහෙයවීම සහ පාලක මණ්ඩලයට උපදෙස් දීම.' }, skills: { en: ['Cultural Leadership', 'HR Governance', 'Executive Strategy'], si: ['සංස්කෘතික නායකත්වය', 'මානව සම්පත් පාලනය', 'විධායක උපායමාර්ගය'] } }
  ],
  ENFP: [
    { title: { en: 'Marketing Specialist', si: 'අලෙවිකරණ විශේෂඥයා' }, duties: { en: 'Creating digital marketing content, analyzing consumer engagement, and setting social campaigns.', si: 'ඩිජිටල් අලෙවිකරණ අන්තර්ගතයන් නිර්මාණය කිරීම, පාරිභෝගික සම්බන්ධතා විශ්ලේෂණය සහ සමාජ ප්‍රචාරණයන් සැකසීම.' }, skills: { en: ['Content Creation', 'SEO Optimization', 'Social Media Analytics'], si: ['අන්තර්ගත නිර්මාණය', 'සෙවුම් යන්ත්‍ර ප්‍රශස්තිකරණය (SEO)', 'සමාජ මාධ්‍ය විශ්ලේෂණය'] } },
    { title: { en: 'Brand Strategist', si: 'සන්නාම උපායමාර්ගිකයා' }, duties: { en: 'Defining product market positioning, managing public relations campaigns, and analyzing competitors.', si: 'නිෂ්පාදන වෙළඳපල ස්ථානගත කිරීම නිර්වචනය කිරීම, මහජන සබඳතා ව්‍යාපාර කළමනාකරණය සහ තරඟකරුවන් විශ්ලේෂණය.' }, skills: { en: ['Market Positioning', 'PR Campaigns', 'Competitor Analysis'], si: ['වෙළඳපල ස්ථානගත කිරීම', 'PR ව්‍යාපාර', 'තරඟකරු විශ්ලේෂණය'] } },
    { title: { en: 'Chief Marketing Officer (CMO)', si: 'ප්‍රධාන අලෙවිකරණ නිලධාරී' }, duties: { en: 'Directing enterprise-wide marketing strategy, allocating advertising budgets, and leading sales vision.', si: 'ආයතනය පුරා අලෙවිකරණ උපාය මාර්ග මෙහෙයවීම, වෙළඳ දැන්වීම් අයවැය වෙන් කිරීම සහ විකුණුම් දැක්ම මෙහෙයවීම.' }, skills: { en: ['Global Marketing Strategy', 'Budget Management', 'Executive Growth Leadership'], si: ['ගෝලීය අලෙවිකරණ උපායමාර්ගය', 'අයවැය කළමනාකරණය', 'විධායක වර්ධන නායකත්වය'] } }
  ],
  ISTJ: [
    { title: { en: 'Financial Auditor', si: 'මුල්‍ය විගණක' }, duties: { en: 'Reviewing corporate accounting ledgers, validating transaction compliance, and identifying compliance errors.', si: 'ආයතනික ගිණුම් ලේඛන සමාලෝචනය කිරීම, ගනුදෙනු අනුකූලතාව තහවුරු කිරීම සහ දෝෂ හඳුනා ගැනීම.' }, skills: { en: ['Auditing Standards', 'Financial Validation', 'Regulatory Compliance'], si: ['විගණන ප්‍රමිතීන්', 'මුල්‍ය තහවුරුකරණය', 'නියාමන අනුකූලතාව'] } },
    { title: { en: 'Operations Manager', si: 'මෙහෙයුම් කළමනාකරු' }, duties: { en: 'Structuring efficient supply chain logistics, drafting operational policy manuals, and checking facilities.', si: 'කාර්යක්ෂම සැපයුම් දාම සැපයුම් සැකසීම, මෙහෙයුම් ප්‍රතිපත්ති අත්පොත් සකස් කිරීම සහ පහසුකම් පරීක්ෂා කිරීම.' }, skills: { en: ['Supply Chain Logistics', 'Policy Auditing', 'Facility Management'], si: ['සැපයුම් දාම සැපයුම්', 'ප්‍රතිපත්ති විගණනය', 'පහසුකම් කළමනාකරණය'] } },
    { title: { en: 'Chief Operating Officer (COO)', si: 'ප්‍රධාන මෙහෙයුම් නිලධාරී' }, duties: { en: 'Orchestrating daily corporate execution programs, managing manufacturing resources, and reporting to CEO.', si: 'දෛනික ආයතනික ක්‍රියාත්මක කිරීමේ වැඩසටහන් මෙහෙයවීම, නිෂ්පාදන සම්පත් කළමනාකරණය සහ CEO වෙත වාර්තා කිරීම.' }, skills: { en: ['Corporate Operations', 'Global Scale Up', 'Governance Control'], si: ['ආයතනික මෙහෙයුම්', 'ගෝලීය ව්‍යාප්තිය', 'පාලන පද්ධති'] } }
  ],
  ISFJ: [
    { title: { en: 'Healthcare Specialist', si: 'සෞඛ්‍ය සේවා විශේෂඥයා' }, duties: { en: 'Providing empathetic patient care, documenting medical histories, and assisting clinical procedures.', si: 'සහකම්පනශීලීව රෝගී සත්කාර සැපයීම, වෛද්‍ය ඉතිහාසය ලේඛනගත කිරීම සහ සායනික ප්‍රතිකාර සඳහා සහාය වීම.' }, skills: { en: ['Patient Care', 'Medical Charting', 'Clinical Ethics'], si: ['රෝගී සත්කාරය', 'වෛද්‍ය සටහන්කරණය', 'සායනික ආචාරධර්ම'] } },
    { title: { en: 'Department Supervisor', si: 'අංශ ප්‍රධානී' }, duties: { en: 'Scheduling clinical staff shift rotations, managing medical inventories, and reviewing safety guidelines.', si: 'සායනික සේවක මුර මාරු සැලසුම් කිරීම, වෛද්‍ය බඩු බාහිරාදිය කළමනාකරණය සහ ආරක්ෂක මාර්ගෝපදේශ සමාලෝචනය.' }, skills: { en: ['Staff Scheduling', 'Inventory Control', 'Safety Audits'], si: ['කාර්ය මණ්ඩල උපලේඛනගත කිරීම', 'තොග පාලනය', 'ආරක්ෂක විගණන'] } },
    { title: { en: 'Hospital Administrator', si: 'රෝහල් පරිපාලක' }, duties: { en: 'Managing healthcare facility budgets, ensuring regulatory compliance, and overseeing patient support services.', si: 'සෞඛ්‍ය පහසුකම් අයවැය කළමනාකරණය, නියාමන අනුකූලතාව සහතික කිරීම සහ රෝගී සේවා මෙහෙයවීම.' }, skills: { en: ['Healthcare Management', 'Strategic Budgeting', 'Policy Strategy'], si: ['සෞඛ්‍ය කළමනාකරණය', 'උපායමාර්ගික අයවැයකරණය', 'ප්‍රතිපත්ති උපායමාර්ගය'] } }
  ],
  ESTJ: [
    { title: { en: 'Operations Supervisor', si: 'මෙහෙයුම් අධීක්ෂක' }, duties: { en: 'Supervising worker output, maintaining quality checklists, and ensuring safety standards are met on shift.', si: 'සේවක නිමැවුම් අධීක්ෂණය කිරීම, තත්ත්ව පාලන ලැයිස්තු පවත්වා ගැනීම සහ ආරක්ෂක ප්‍රමිතීන් සහතික කිරීම.' }, skills: { en: ['Quality Assurance', 'Team Supervision', 'Safety Compliance'], si: ['තත්ත්ව සහතිකකරණය', 'කණ්ඩායම් අධීක්ෂණය', 'ආරක්ෂක අනුකූලතාව'] } },
    { title: { en: 'Plant Manager', si: 'කර්මාන්තශාලා කළමනාකරු' }, duties: { en: 'Optimizing production efficiency, managing plant operations budgets, and leading local union negotiations.', si: 'නිෂ්පාදන කාර්යක්ෂමතාව ප්‍රශස්ත කිරීම, කර්මාන්තශාලා මෙහෙයුම් අයවැය කළමනාකරණය සහ සාකච්ඡා මෙහෙයවීම.' }, skills: { en: ['Plant Operations', 'Budget Control', 'Industrial Relations'], si: ['කර්මාන්තශාලා මෙහෙයුම්', 'අයවැය පාලනය', 'කාර්මික සබඳතා'] } },
    { title: { en: 'VP of Operations', si: 'මෙහෙයුම් උප සභාපති' }, duties: { en: 'Defining long-term supply chain strategy, managing multi-site facilities, and driving operational scale.', si: 'දිගුකාලීන සැපයුම් දාම උපාය මාර්ග නිර්වචනය කිරීම, බහුවිධ පහසුකම් කළමනාකරණය සහ මෙහෙයුම් ව්‍යාප්ත කිරීම.' }, skills: { en: ['Global Operations', 'Strategy Mapping', 'Risk Management'], si: ['ගෝලීය මෙහෙයුම්', 'උපායමාර්ග සිතියම්කරණය', 'අවදානම් කළමනාකරණය'] } }
  ],
  ESFJ: [
    { title: { en: 'Customer Relations Rep', si: 'පාරිභෝගික සබඳතා නිලධාරී' }, duties: { en: 'Answering client inquiries, resolving product complaints, and recording customer satisfaction scores.', si: 'සේවාදායක විමසීම්වලට පිළිතුරු දීම, පැමිණිලි විසඳීම සහ පාරිභෝගික තෘප්තිමත් ලකුණු සටහන් කිරීම.' }, skills: { en: ['Conflict De-escalation', 'CRM Software', 'Client Support'], si: ['ගැටුම් සමනය කිරීම', 'CRM මෘදුකාංග', 'පාරිභෝගික සහාය'] } },
    { title: { en: 'Client Success Manager', si: 'සේවාදායක සාර්ථකත්ව කළමනාකරු' }, duties: { en: 'Structuring account growth strategies, managing client renewals, and coordinating development fixes.', si: 'ගිණුම් වර්ධන උපාය මාර්ග සැකසීම, සේවාදායක ගිවිසුම් අලුත් කිරීම සහ සංවර්ධන කටයුතු සම්බන්ධීකරණය.' }, skills: { en: ['Account Strategy', 'Client Retention', 'Cross-functional Alignment'], si: ['ගිණුම් උපායමාර්ගය', 'සේවාදායකයන් රඳවා ගැනීම', 'සම්බන්ධීකරණය'] } },
    { title: { en: 'Public Relations Director', si: 'මහජන සබඳතා අධ්‍යක්ෂක' }, duties: { en: 'Defining corporate communication policies, managing media statements, and leading PR crises response.', si: 'ආයතනික සන්නිවේදන ප්‍රතිපත්ති තීරණය කිරීම, මාධ්‍ය ප්‍රකාශ කළමනාකරණය සහ PR අර්බුද සඳහා ප්‍රතිචාර මෙහෙයවීම.' }, skills: { en: ['Crisis Communication', 'Media Relations', 'Brand PR Strategy'], si: ['අර්බුද සන්නිවේදනය', 'මාධ්‍ය සබඳතා', 'සන්නාම PR උපායමාර්ගය'] } }
  ],
  ISTP: [
    { title: { en: 'Software Craftsman', si: 'මෘදුකාංග ශිල්පියා' }, duties: { en: 'Writing high-quality clean code, debugging application issues, and writing test suites.', si: 'පිරිසිදු මෘදුකාංග කේත ලිවීම, යෙදුම්වල දෝෂ නිරාකරණය කිරීම සහ පරීක්ෂණ ස්වයංක්‍රීයකරණය.' }, skills: { en: ['Clean Code', 'Debugging Tools', 'Unit Testing'], si: ['පිරිසිදු කේතකරණය', 'දෝෂ නිරාකරණ මෙවලම්', 'ඒකක පරීක්ෂාව'] } },
    { title: { en: 'Technical Lead', si: 'තාක්ෂණික ප්‍රධානී' }, duties: { en: 'Leading engineering development pipelines, reviewing code commits, and advising architecture.', si: 'ඉංජිනේරු කණ්ඩායම් මෙහෙයවීම, කේත සමාලෝචනය කිරීම සහ මෘදුකාංග ව්‍යුහය පිළිබඳ උපදෙස් දීම.' }, skills: { en: ['Code Review', 'Agile Delivery', 'Technical Mentorship'], si: ['කේත සමාලෝචනය', 'Agile සැපයුම', 'තාක්ෂණික මඟපෙන්වීම'] } },
    { title: { en: 'Chief Architect', si: 'ප්‍රධාන ගෘහ නිර්මාණ ශිල්පියා' }, duties: { en: 'Structuring enterprise-wide technology frameworks, auditing security systems, and advising executive board.', si: 'ආයතනය පුරා තාක්ෂණික රාමු සැකසීම, ආරක්ෂක පද්ධති විගණනය සහ විධායක මණ්ඩලයට උපදෙස් දීම.' }, skills: { en: ['Enterprise Architecture', 'Cybersecurity Strategy', 'Cloud Infrastructure'], si: ['ආයතනික තාක්ෂණික ව්‍යුහය', 'සයිබර් ආරක්ෂණ උපායමාර්ගය', 'වලාකුළු යටිතල පහසුකම්'] } }
  ],
  ISFP: [
    { title: { en: 'Graphic Designer', si: 'ග්‍රැෆික් නිර්මාණකරු' }, duties: { en: 'Creating vector marketing assets, styling page layouts, and editing product photos.', si: 'අලෙවිකරණ දෘශ්‍ය නිර්මාණ සකස් කිරීම, වෙබ් පිටු සැකසීම සහ නිෂ්පාදන ඡායාරූප සංස්කරණය කිරීම.' }, skills: { en: ['Adobe Suite', 'Vector Illustration', 'Typography'], si: ['Adobe මෘදුකාංග', 'දෘශ්‍ය ආකෘතිකරණය', 'අකුරු සැකසුම (Typography)'] } },
    { title: { en: 'Art Director', si: 'කලා අධ්‍යක්ෂක' }, duties: { en: 'Directing design team pipelines, reviewing visual assets, and approving creative campaigns.', si: 'නිර්මාණ කණ්ඩායම් මෙහෙයවීම, දෘශ්‍ය නිර්මාණ සමාලෝචනය සහ නිර්මාණාත්මක ප්‍රචාරණ අනුමත කිරීම.' }, skills: { en: ['Visual Layout Strategy', 'Art Mentorship', 'Design Systems'], si: ['දෘශ්‍ය සැලසුම් උපායමාර්ගය', 'කලාත්මක උපදේශනය', 'නිර්මාණ පද්ධති'] } },
    { title: { en: 'Chief Creative Officer', si: 'ප්‍රධාන නිර්මාණාත්මක නිලධාරී' }, duties: { en: 'Directing organizational design standards, leading global creative vision, and managing agency relations.', si: 'සංවිධානයේ සැලසුම් ප්‍රමිතීන් මෙහෙයවීම, ගෝලීය නිර්මාණ දැක්ම සැකසීම සහ නියෝජිත සබඳතා කළමනාකරණය.' }, skills: { en: ['Creative Direction', 'Brand Innovation Strategy', 'Global Styling Management'], si: ['නිර්මාණාත්මක මෙහෙයවීම', 'සන්නාම නවෝත්පාදන උපායමාර්ගය', 'ගෝලීය සැලසුම් කළමනාකරණය'] } }
  ],
  ESTP: [
    { title: { en: 'Sales Executive', si: 'අලෙවි විධායක' }, duties: { en: 'Pitching products to business prospects, negotiating financial terms, and closing sales pipelines.', si: 'පාරිභෝගිකයන්ට නිෂ්පාදන හඳුන්වා දීම, මිල ගණන් සාකච්ඡා කිරීම සහ අලෙවි ගනුදෙනු අවසන් කිරීම.' }, skills: { en: ['Cold Pitching', 'Deal Negotiation', 'CRM Operations'], si: ['අලෙවි ඉදිරිපත් කිරීම්', 'ගනුදෙනු සාකච්ඡාකරණය', 'CRM මෙහෙයුම්'] } },
    { title: { en: 'Regional Sales Manager', si: 'ප්‍රාදේශීය විකුණුම් කළමනාකරු' }, duties: { en: 'Managing regional sales budgets, advising sales incentives, and organizing training bootcamps.', si: 'ප්‍රාදේශීය විකුණුම් අයවැය කළමනාකරණය, විකුණුම් දිරිගැන්වීම් උපදෙස් දීම සහ පුහුණු වැඩසටහන් පැවැත්වීම.' }, skills: { en: ['Sales Training', 'Regional Budgeting', 'Sales Strategy'], si: ['අලෙවි පුහුණුව', 'ප්‍රාදේශීය අයවැයකරණය', 'විකුණුම් උපායමාර්ගය'] } },
    { title: { en: 'VP of Global Sales', si: 'ගෝලීය විකුණුම් උප සභාපති' }, duties: { en: 'Defining international market growth strategy, allocating marketing budgets, and advising corporate strategy.', si: 'ජාත්‍යන්තර වෙළඳපල වර්ධන උපාය මාර්ග නිර්වචනය කිරීම, අලෙවිකරණ අයවැය වෙන් කිරීම සහ උපදෙස් දීම.' }, skills: { en: ['Global Expansion', 'Strategic Sales Planning', 'Corporate Leadership'], si: ['ගෝලීය ව්‍යාප්තිය', 'උපායමාර්ගික විකුණුම් සැලසුම්කරණය', 'ආයතනික නායකත්වය'] } }
  ],
  ESFP: [
    { title: { en: 'Event Producer', si: 'උත්සව සංවිධායක' }, duties: { en: 'Orchestrating live event logistics, coordinating event vendors, and managing onsite staff.', si: 'සජීවී උත්සව මෙහෙයුම් සැලසුම් කිරීම, සැපයුම්කරුවන් සම්බන්ධීකරණය සහ සේවක කළමනාකරණය.' }, skills: { en: ['Vendor Coordination', 'Event Logistics', 'Onsite Management'], si: ['සැපයුම්කරුවන් සම්බන්ධීකරණය', 'උත්සව මෙහෙයුම්', 'ක්ෂේත්‍ර කළමනාකරණය'] } },
    { title: { en: 'Public Relations Manager', si: 'මහජන සබඳතා කළමනාකරු' }, duties: { en: 'Managing press release writing, organizing product media launches, and managing influencer partnerships.', si: 'මාධ්‍ය නිවේදන ලිවීම කළමනාකරණය, නිෂ්පාදන මාධ්‍ය ප්‍රකාශ සංවිධානය සහ හවුල්කාරිත්වයන් මෙහෙයවීම.' }, skills: { en: ['Influencer Relations', 'Media Coordination', 'Brand Engagement'], si: ['Influencer සබඳතා', 'මාධ්‍ය සම්බන්ධීකරණය', 'සන්නාම සම්බන්ධතාව'] } },
    { title: { en: 'Entertainment Director', si: 'විනෝදාස්වාද අධ්‍යක්ෂක' }, duties: { en: 'Directing public theme park events, budgeting performance acts, and managing international casts.', si: 'ප්‍රසංග සහ විනෝදාස්වාද වැඩසටහන් මෙහෙයවීම, රංගන කණ්ඩායම් අයවැයකරණය සහ කළමනාකරණය.' }, skills: { en: ['Show Production', 'Budget Management', 'Artistic Casting'], si: ['ප්‍රසංග නිෂ්පාදනය', 'අයවැය කළමනාකරණය', 'කලාත්මක ශිල්පීන් තේරීම'] } }
  ]
};

const growthHubWeaknesses = {
  INTJ: { en: ['Overly analytical and critical', 'Difficulty understanding others\' emotions', 'Struggles with spontaneous changes'], si: ['ඕනෑවට වඩා විවේචනාත්මක වීම', 'අන් අයගේ හැඟීම් තේරුම් ගැනීමේ අපහසුව', 'ක්ෂණික වෙනස්කම්වලට අකමැති වීම'] },
  INTP: { en: ['Social isolation and detachment', 'Overthinking and analysis paralysis', 'Impatience with routine tasks'], si: ['සමාජයෙන් ඈත් වී හුදකලා වීම', 'ඕනෑවට වඩා සිතීම (Analysis paralysis)', 'දෛනික සාමාන්‍ය වැඩවලට අකමැති වීම'] },
  ENTJ: { en: ['Stubbornness and dominance', 'Impatience with slow workflows', 'Difficulty managing vulnerability'], si: ['මුරණ්ඩු බව සහ ආධිපත්‍යය පැතිරවීම', 'මන්දගාමී වැඩ රටාවන්ට අකමැති වීම', 'තමන්ගේ දුර්වලතා පෙන්වීමට අකමැති වීම'] },
  ENTP: { en: ['Argumentative and provoking', 'Insensitive to emotional cues', 'Struggles with consistent focus'], si: ['ඕනෑවට වඩා තර්ක කිරීමට යාම', 'අන් අයගේ හැඟීම් නොසලකා හැරීම', 'එක දිගට එකම කාර්යයක නිරත වීමේ අපහසුව'] },
  INFJ: { en: ['Sensitivity to personal criticism', 'Extremely high perfectionism', 'Prone to emotional burnout'], si: ['පෞද්ගලික විවේචන දරාගැනීමේ අපහසුව', 'පරිපූර්ණත්වයම අපේක්ෂා කිරීම (Perfectionism)', 'මානසික විඩාවට (Burnout) ලක්වීමට ඇති ප්‍රවණතාව'] },
  INFP: { en: ['Unrealistic and overly idealistic', 'Highly self-critical nature', 'Struggles with administrative tasks'], si: ['ඕනෑවට වඩා පරිකල්පනික සහ මනඃකල්පිත වීම', 'තමන් ගැනම ඕනෑවට වඩා ස්වයං-විවේචනය කිරීම', 'පරිපාලන සහ ලේඛන කටයුතුවලට ඇති අකමැත්ත'] },
  ENFJ: { en: ['Mental exhaustion from helping others', 'Overly sensitive to group disharmony', 'Prone to taking blame for failures'], si: ['අන් අය වෙනුවෙන් වෙහෙසීම නිසා මානසිකව විඩාවට පත්වීම', 'කණ්ඩායම තුළ අසමගියක් ඇති වූ විට දැඩිව කණගාටු වීම', 'ව්‍යවසායක අසාර්ථකත්වයන් තමන් පිට පටවා ගැනීම'] },
  ENFP: { en: ['Overthinking details and options', 'Difficulty with strict systems/rules', 'Prone to getting distracted easily'], si: ['අදහස් සහ විකල්ප ගැන ඕනෑවට වඩා සිතීම', 'දැඩි නීති රීති සහ පාලන පද්ධතිවලට අකමැති වීම', 'ඉතා ඉක්මනින් අවධානය වෙනතකට යොමු වීම'] },
  ISTJ: { en: ['Stubbornness and resistance to change', 'Working strictly by the book', 'Appearing emotionally cold/insensitive'], si: ['මුරණ්ඩු බව සහ වෙනස්කම්වලට ඇති අකමැත්ත', 'නීතිරීතිවලට පමණක් සීමා වී වැඩ කිරීමට යාම', 'සංවේදී බවෙන් තොර රළු අයෙකු ලෙස පෙනීම'] },
  ISFJ: { en: ['Difficulty saying "no" to requests', 'Sensitivity to workplace criticism', 'Overworking to support others'], si: ['අන් අයගේ ඉල්ලීම්වලට "බැහැ" කීමට ඇති අපහසුව', 'සේවා ස්ථානයේ විවේචන දරාගැනීමේ අපහසුව', 'අන් අය වෙනුවෙන් ඕනෑවට වඩා වෙහෙස මහන්සි වීම'] },
  ESTJ: { en: ['Stubbornness and rigid opinions', 'Impatience with unconventional ideas', 'Difficulty expressing appreciation'], si: ['දැඩි මතධාරී බව සහ මුරණ්ඩුකම', 'අලුත්/අසාමාන්‍ය අදහස්වලට අකමැති වීම', 'අන් අයව අගය කිරීමට සහ ප්‍රශංසා කිරීමට අමතක වීම'] },
  ESFJ: { en: ['Overly dependent on social approval', 'Avoidance of necessary conflicts', 'Sensitivity to personal feedback'], si: ['අන් අයගේ පිළිගැනීම මත ඕනෑවට වඩා රඳා පැවතීම', 'අවශ්‍ය අවස්ථාවලදී පවා ගැටුම් මඟහැරීමට යාම', 'ප්‍රතිපෝෂණ දරාගැනීමේ අපහසුව'] },
  ISTP: { en: ['Appearing emotionally detached', 'Resistance to long-term commitments', 'Impulsiveness in decision making'], si: ['හැඟීම්වලින් තොර උදාසීන අයෙකු ලෙස පෙනීම', 'දිගුකාලීන බැඳීම්වලට (Commitments) ඇති අකමැත්ත', 'තීරණ ගැනීමේදී ඇති වන ක්ෂණික ඉක්මන් බව'] },
  ISFP: { en: ['Lack of long-term strategic planning', 'Vulnerability to high stress/pressure', 'Struggles with structured routines'], si: ['දිගුකාලීන සැලසුම් සකස් කිරීමට අකමැති වීම', 'අධික ආතතිය සහ පීඩනය දරාගැනීමේ අපහසුව', 'ක්‍රමවත් කාලසටහන්වලට අනුව වැඩ කිරීමේ අපහසුව'] },
  ESTP: { en: ['Impulsiveness and high risk-taking', 'Impatience with theoretical models', 'Appearing insensitive or overly blunt'], si: ['හදිසි තීරණ ගැනීම සහ අනවශ්‍ය අවදානම් ගැනීම', 'න්‍යායාත්මක විග්‍රහයන්ට ඇති අකමැත්ත', 'සෘජුව කතා කිරීම නිසා අන් අයගේ සිත් රිදවීම'] },
  ESFP: { en: ['Avoidance of long-term planning', 'Vulnerability to negative criticism', 'Difficulty maintaining long focus'], si: ['දිගුකාලීන වගකීම් සහ සැලසුම් මඟහැරීම', 'විවේචනවලට ඕනෑවට වඩා සංවේදී වීම', 'එක් වැඩක් සඳහා එක දිගට අවධානය තබාගැනීමේ අපහසුව'] }
};

const growthHubHabits = {
  INTJ: [
    { en: 'Listen to other perspectives without immediately criticising.', si: 'වෙනත් අයගේ අදහස්වලට විවේචනයෙන් තොරව මුලින්ම සවන් දෙන්න.' },
    { en: 'Take a 15-minute break to relax without thinking about strategies.', si: 'උපාය මාර්ග ගැන නොසිතා විනාඩි 15ක විවේකයක් ගන්න.' },
    { en: 'Express appreciation to a colleague or family member.', si: 'සගයෙකු හෝ පවුලේ සාමාජිකයෙකු කළ වැඩක් අගය කරන්න.' }
  ],
  INTP: [
    { en: 'Translate one big idea into a concrete action plan.', si: 'එක් විශාල අදහසක් ප්‍රායෝගික ක්‍රියාකාරී සැලැස්මකට හරවන්න.' },
    { en: 'Respond to pending messages/emails within a reasonable time.', si: 'ලැබී ඇති පණිවිඩ/ඊමේල්වලට නියමිත වේලාවට පිළිතුරු දෙන්න.' },
    { en: 'Step out of your workspace for a brief social check-in.', si: 'කාර්යාලයෙන් බැහැර වී සගයෙකු සමඟ සුළු කතාබහක යෙදෙන්න.' }
  ],
  ENTJ: [
    { en: 'Let someone else lead a discussion or make a minor decision.', si: 'කුඩා තීරණයක් ගැනීමට හෝ සාකච්ඡාවක් මෙහෙයවීමට වෙනත් අයෙකුට ඉඩ දෙන්න.' },
    { en: 'Practice patience by pausing for 5 seconds before responding.', si: 'පිළිතුරු දීමට පෙර තත්පර 5ක් නිශ්ශබ්දව සිට ඉවසීම පුරුදු කරන්න.' },
    { en: 'Ask a team member how they feel, not just what they did.', si: 'කණ්ඩායම් සාමාජිකයෙකුගෙන් ඔවුන් කළ දේ පමණක් නොව සුවදුක්ද විමසන්න.' }
  ],
  ENTP: [
    { en: 'Follow through and finish one task before starting another.', si: 'තවත් වැඩක් ඇරඹීමට පෙර පවතින එක වැඩක් සම්පූර්ණයෙන්ම නිම කරන්න.' },
    { en: 'Avoid entering debates that do not affect the main project goal.', si: 'ප්‍රධාන ඉලක්කයට අදාළ නොවන වාද විවාදවලට පැටලීමෙන් වළකින්න.' },
    { en: 'Write down 3 concrete details for an ongoing creative project.', si: 'නිර්මාණාත්මක ව්‍යාපෘතියක ප්‍රායෝගික විස්තර 3ක් ලියා තබන්න.' }
  ],
  INFJ: [
    { en: 'Set a clear boundary by saying no to an extra commitment.', si: 'අමතර වැඩකට බැහැ කියා පවසමින් ඔබේ සීමාවන් ආරක්ෂා කරගන්න.' },
    { en: 'Share your thoughts or ideas early instead of keeping them hidden.', si: 'අදහස් සඟවා නොගෙන මුල් අවස්ථාවේදීම අන් අය සමඟ බෙදාගන්න.' },
    { en: 'Spend 20 minutes journaling or meditating to prevent burnout.', si: 'ආතතිය අවම කරගැනීමට විනාඩි 20ක් භාවනා කරන්න හෝ දිනපොතක් ලියන්න.' }
  ],
  INFP: [
    { en: 'Complete one mundane administrative task without delaying.', si: 'එදිනෙදා කළ යුතු සාමාන්‍ය ලේඛන කටයුත්තක් ප්‍රමාදයකින් තොරව අවසන් කරන්න.' },
    { en: 'Write down 3 realistic goals for the week.', si: 'සතිය සඳහා ප්‍රායෝගිකව කළ හැකි ඉලක්ක 3ක් ලියා තබන්න.' },
    { en: 'Acknowledge your achievements today without self-criticism.', si: 'අද දවසේ ඔබ ලැබූ ජයග්‍රහණ විවේචනයෙන් තොරව අගය කරන්න.' }
  ],
  ENFJ: [
    { en: 'Dedicate 30 minutes of uninterrupted time solely to your own hobby.', si: 'විනාඩි 30ක් බාධාවකින් තොරව ඔබේම විනෝදාංශයක් සඳහා වෙන් කරන්න.' },
    { en: 'Avoid taking responsibility for someone else\'s mistake.', si: 'වෙනත් අයෙකු කළ වැරැද්දක වගකීම ඔබ මත පටවා ගැනීමෙන් වළකින්න.' },
    { en: 'Ask for help or delegate a task to a trustworthy colleague.', si: 'විශ්වාසවන්ත සගයෙකුගෙන් උදව් ඉල්ලන්න හෝ කාර්යයක් පවරන්න.' }
  ],
  ENFP: [
    { en: 'Focus on a single project for 1 hour without checking social media.', si: 'සමාජ මාධ්‍ය නොබලා පැයක් එකම ව්‍යාපෘතියක් සඳහා අවධානය යොමු කරන්න.' },
    { en: 'Clean and organize your physical or digital workspace.', si: 'ඔබේ මේසය හෝ පරිගණකයේ ඇති ලිපිගොනු පිළිවෙළකට සකසන්න.' },
    { en: 'Review your monthly budget before making a purchase.', si: 'මිලදී ගැනීමක් කිරීමට පෙර ඔබේ මාසික අයවැය පරීක්ෂා කරන්න.' }
  ],
  ISTJ: [
    { en: 'Accept a change in plans or schedules without expressing frustration.', si: 'කාලසටහනේ ඇති වූ ක්ෂණික වෙනසක් නොක්කාඩුවෙන් තොරව පිළිගන්න.' },
    { en: 'Acknowledge a team member\'s creative, out-of-the-box idea.', si: 'සගයෙකු ඉදිරිපත් කළ අලුත්/නිර්මාණශීලී අදහසක් අගය කරන්න.' },
    { en: 'Engage in casual small talk with a coworker for 5 minutes.', si: 'කාර්යාලයේ මිතුරෙකු සමඟ විනාඩි 5ක සැහැල්ලු කතාබහක යෙදෙන්න.' }
  ],
  ISFJ: [
    { en: 'Say "no" to an unreasonable request without feeling guilty.', si: 'අසාධාරණ ඉල්ලීමකට වරදකාරී හැඟීමෙන් තොරව "බැහැ" යැයි පවසන්න.' },
    { en: 'Ask for constructive feedback on your work rather than worrying.', si: 'සිත සිතා ලතවෙන්නේ නැතිව ඔබේ වැඩ ගැන අදහස් විමසන්න.' },
    { en: 'Take credit for a task you successfully accomplished today.', si: 'ඔබ සාර්ථකව නිම කළ කාර්යයක ගෞරවය අන් අය ඉදිරියේ පිළිගන්න.' }
  ],
  ESTJ: [
    { en: 'Listen to a subordinate\'s suggestion without interrupting.', si: 'කණ්ඩායමේ පහළ සාමාජිකයෙකුගේ අදහසකට බාධා නොකර සවන් දෙන්න.' },
    { en: 'Allow a project to proceed with a slightly flexible approach.', si: 'ව්‍යාපෘතියක් මදක් නම්‍යශීලී අයුරින් ඉදිරියට යාමට ඉඩ දෙන්න.' },
    { en: 'Spend time relaxing without tracking metrics or checklists.', si: 'ලකුණු හෝ ලැයිස්තු ගැන නොසිතා විවේකීව කාලය ගත කරන්න.' }
  ],
  ESFJ: [
    { en: 'Make a decision based on objective facts rather than social approval.', si: 'අන් අයගේ කැමැත්තට වඩා ප්‍රායෝගික කරුණු මත තීරණයක් ගන්න.' },
    { en: 'Spend 20 minutes enjoying solitude and quiet reflection.', si: 'විනාඩි 20ක් තනිවම නිහඬව සිතුවිලි සිතමින් ගත කරන්න.' },
    { en: 'Let others resolve their own conflicts without interfering.', si: 'අන් අයගේ ගැටලුවලට මැදිහත් නොවී ඒවා ඔවුන්ටම විසඳා ගැනීමට ඉඩ දෙන්න.' }
  ],
  ISTP: [
    { en: 'Explain your design or action plan before starting the project.', si: 'වැඩේ ආරම්භ කිරීමට පෙර ඔබේ සැලසුම අන් අයට පැහැදිලි කරන්න.' },
    { en: 'Commit to a shared group activity or social event.', si: 'සමූහ ක්‍රියාකාරකමකට හෝ සමාජ උත්සවයකට සහභාගී වන්න.' },
    { en: 'Follow up on a promise or long-term plan you made previously.', si: 'ඔබ මීට පෙර දුන් පොරොන්දුවක් හෝ සැලසුමක් සම්පූර්ණ කරන්න.' }
  ],
  ISFP: [
    { en: 'Set a firm target and finish one administrative task on time.', si: 'නිශ්චිත ඉලක්කයක් තබා කාලසටහනකට අනුව එක වැඩක් අවසන් කරන්න.' },
    { en: 'Share your creative work with someone for critique.', si: 'ඔබේ නිර්මාණයක් විවේචනය සඳහා වෙනත් අයෙකුට පෙන්වන්න.' },
    { en: 'Write down a simple 3-step plan for a future goal.', si: 'අනාගත ඉලක්කයක් සඳහා සරල පියවර 3ක සැලසුමක් ලියන්න.' }
  ],
  ESTP: [
    { en: 'Pause and calculate the long-term risk before acting impulsively.', si: 'හදිසියේ ක්‍රියාත්මක වීමට පෙර එහි දිගුකාලීන අවදානම ගණනය කරන්න.' },
    { en: 'Finish a boring but necessary paperwork task completely.', si: 'අකමැති වුවද අත්‍යවශ්‍ය ලේඛන කටයුත්තක් සම්පූර්ණයෙන්ම නිම කරන්න.' },
    { en: 'Listen to a strategic planning discussion for 15 minutes.', si: 'උපායමාර්ගික සැලසුම් සාකච්ඡාවකට විනාඩි 15ක් සන්සුන්ව සවන් දෙන්න.' }
  ],
  ESFP: [
    { en: 'Review your personal budget and savings status today.', si: 'අද ඔබේ පෞද්ගලික ඉතුරුම් සහ වියදම් තත්ත්වය සමාලෝචනය කරන්න.' },
    { en: 'Spend 30 minutes reading educational or career material.', si: 'වෘත්තීය වර්ධනයට අදාළ පොතක් හෝ ලිපියක් විනාඩි 30ක් කියවන්න.' },
    { en: 'Accept constructive feedback without taking it as a personal attack.', si: 'නිර්මාණාත්මක විවේචන පෞද්ගලික ප්‍රහාරයක් ලෙස නොගෙන පිළිගන්න.' }
  ]
};

function renderGrowthScreen() {
  showScreen('growth-screen');
  
  if (!activeGrowthType) {
    const userFullCode = lastResultsCode || 'INTJ-A';
    activeGrowthType = userFullCode.split('-')[0];
  }
  
  // Populate dropdown lists once
  const typeSelect = document.getElementById('growth-type-select');
  const targetSelect = document.getElementById('survival-target-select');
  
  if (typeSelect && typeSelect.options.length === 0) {
    const expectedTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
    const typs = types();
    
    let optionsHtml = '';
    expectedTypes.forEach(code => {
      optionsHtml += `<option value="${code}">${code} - ${typs[code].name}</option>`;
    });
    
    typeSelect.innerHTML = optionsHtml;
    targetSelect.innerHTML = optionsHtml;
    
    // Set target select default to ESFP (different from INTJ default)
    targetSelect.value = 'ESFP';
  }
  
  if (typeSelect) {
    typeSelect.value = activeGrowthType;
  }
  
  renderStrengthsAndWeaknesses(activeGrowthType);
  renderHabits(activeGrowthType);
  renderCareerRoadmap(activeGrowthType);
  renderSurvivalGuide();
}

function onGrowthTypeChange() {
  const select = document.getElementById('growth-type-select');
  if (!select) return;
  activeGrowthType = select.value;
  activeRoadmapNodeIndex = 0; // Reset selected career node
  
  renderGrowthScreen();
}

function renderStrengthsAndWeaknesses(type) {
  const strengthsList = document.getElementById('growth-strengths-list');
  const weaknessesList = document.getElementById('growth-weaknesses-list');
  
  if (!strengthsList || !weaknessesList) return;
  
  strengthsList.innerHTML = '';
  weaknessesList.innerHTML = '';
  
  // Populate strengths (from types() db)
  const tp = types()[type];
  if (tp && tp.str) {
    tp.str.forEach(str => {
      const item = document.createElement('div');
      item.className = 'growth-list-item';
      item.innerHTML = `<span class="growth-icon" style="color: var(--diplomat);">✓</span><span>${str}</span>`;
      strengthsList.appendChild(item);
    });
  }
  
  // Populate weaknesses (from local weaknessesData)
  const weaknesses = growthHubWeaknesses[type][currentLang];
  if (weaknesses) {
    weaknesses.forEach(wk => {
      const item = document.createElement('div');
      item.className = 'growth-list-item';
      item.innerHTML = `<span class="growth-icon" style="color: var(--accent2);">⚠</span><span>${wk}</span>`;
      weaknessesList.appendChild(item);
    });
  }
}

function renderHabits(type) {
  const list = document.getElementById('habit-checklist');
  if (!list) return;
  
  list.innerHTML = '';
  const habits = growthHubHabits[type];
  let completedCount = 0;
  
  habits.forEach((hb, idx) => {
    const isChecked = localStorage.getItem(`mbti_habit_${type}_${idx}`) === 'true';
    if (isChecked) completedCount++;
    
    const item = document.createElement('div');
    item.className = 'habit-item';
    item.setAttribute('onclick', `toggleHabit('${type}', ${idx})`);
    
    item.innerHTML = `
      <div class="habit-checkbox ${isChecked ? 'checked' : ''}">
        ${isChecked ? '✓' : ''}
      </div>
      <div class="habit-text">${currentLang === 'en' ? hb.en : hb.si}</div>
    `;
    list.appendChild(item);
  });
  
  // Update progress bar
  const pct = Math.round((completedCount / habits.length) * 100);
  document.getElementById('habit-progress-text').textContent = completedCount + ' / ' + habits.length + ' (' + pct + '%)';
  document.getElementById('habit-progress-fill').style.width = pct + '%';
}

function toggleHabit(type, index) {
  const key = `mbti_habit_${type}_${index}`;
  const currentVal = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, !currentVal ? 'true' : 'false');
  
  renderHabits(type);
}

function renderCareerRoadmap(type) {
  const container = document.getElementById('roadmap-nodes-container');
  if (!container) return;
  
  container.innerHTML = '';
  const nodes = growthHubRoadmaps[type];
  
  nodes.forEach((nd, idx) => {
    const isActive = idx === activeRoadmapNodeIndex;
    const nodeDiv = document.createElement('div');
    nodeDiv.className = `roadmap-node ${isActive ? 'active' : ''}`;
    nodeDiv.setAttribute('onclick', `selectRoadmapNode('${type}', ${idx})`);
    
    nodeDiv.innerHTML = `
      <div class="roadmap-node-step">${currentLang === 'en' ? 'Level' : 'මට්ටම'} 0${idx + 1}</div>
      <div class="roadmap-node-title">${nd.title[currentLang]}</div>
    `;
    
    container.appendChild(nodeDiv);
    
    // Add arrow between nodes
    if (idx < nodes.length - 1) {
      const arrowDiv = document.createElement('div');
      arrowDiv.className = 'roadmap-arrow';
      arrowDiv.innerHTML = '➔';
      container.appendChild(arrowDiv);
    }
  });
  
  // Update detail panel
  const activeNode = nodes[activeRoadmapNodeIndex];
  document.getElementById('career-detail-title').textContent = activeNode.title[currentLang];
  document.getElementById('career-detail-duties').textContent = activeNode.duties[currentLang];
  
  const skillsWrap = document.getElementById('career-detail-skills');
  skillsWrap.innerHTML = '';
  const skillsList = activeNode.skills[currentLang];
  skillsList.forEach(sk => {
    const tag = document.createElement('span');
    tag.className = 'career-tag';
    tag.style = 'background: rgba(240, 165, 0, 0.12); color: var(--accent); border: 1px solid rgba(240, 165, 0, 0.2);';
    tag.textContent = sk;
    skillsWrap.appendChild(tag);
  });
}

function selectRoadmapNode(type, index) {
  activeRoadmapNodeIndex = index;
  renderCareerRoadmap(type);
}

function renderSurvivalGuide() {
  const select = document.getElementById('survival-target-select');
  if (!select) return;
  const targetType = select.value || 'ESFP';
  const list = document.getElementById('survival-advice-list');
  if (!list) return;
  
  list.innerHTML = '';
  const tips = getSurvivalGuideTips(targetType);
  
  tips.forEach(item => {
    const card = document.createElement('div');
    card.className = 'survival-advice-item';
    card.innerHTML = `
      <div class="survival-trait-title">${item.title}</div>
      <div class="survival-trait-desc">${item.desc}</div>
    `;
    list.appendChild(card);
  });
}

function getSurvivalGuideTips(targetType) {
  const letters = targetType.split('-')[0];
  const tips = [];
  
  const traitTitles = {
    E: { en: 'Interaction Style (Extraversion)', si: 'සන්නිවේදන ශෛලිය (බාහිරශීලී - E)' },
    I: { en: 'Interaction Style (Introversion)', si: 'සන්නිවේදන ශෛලිය (අභ්‍යන්තරශීලී - I)' },
    S: { en: 'Information Focus (Sensing)', si: 'තොරතුරු ග්‍රහණය (ප්‍රායෝගික - S)' },
    N: { en: 'Information Focus (Intuition)', si: 'තොරතුරු ග්‍රහණය (පරිකල්පන - N)' },
    T: { en: 'Decision Priority (Thinking)', si: 'තීරණ ප්‍රමුඛතාව (තාර්කික - T)' },
    F: { en: 'Decision Priority (Feeling)', si: 'තීරණ ප්‍රමුඛතාව (හැඟීම්බර - F)' },
    J: { en: 'Work Tactics (Judging)', si: 'කාර්ය ක්‍රමෝපාය (ක්‍රමවත් - J)' },
    P: { en: 'Work Tactics (Prospecting)', si: 'කාර්ය ක්‍රමෝපාය (නම්‍යශීලී - P)' }
  };
  
  const traitDescriptions = {
    E: {
      en: 'Engage in active verbal communication, brainstorm out loud, and don\'t hesitate to share updates directly.',
      si: 'සෘජුව කතාබස් කරන්න, අදහස් ශබ්ද නගා සාකච්ඡා කරන්න, සහ නිතර ප්‍රගතිය පිළිබඳව යාවත්කාලීන කරන්න.'
    },
    I: {
      en: 'Send written summaries before meetings, respect their quiet focus time, and avoid putting them on the spot publicly.',
      si: 'රැස්වීම්වලට පෙර ලිඛිත සාරාංශ ලබා දෙන්න, ඔවුන්ගේ නිහඬ වැඩ කාලයට ගරු කරන්න, සහ ප්‍රසිද්ධියේ වහාම පිළිතුරු ඉල්ලා සිටීමෙන් වළකින්න.'
    },
    S: {
      en: 'Focus on concrete facts, detailed figures, and realistic daily deliverables. Avoid abstract theories or vague timelines.',
      si: 'පැහැදිලි දත්ත, සැබෑ සංඛ්‍යා ලේඛන සහ ප්‍රායෝගික වැඩ කොටස් පිළිබඳව අවධානය යොමු කරන්න. වියුක්ත න්‍යායන්ගෙන් වළකින්න.'
    },
    N: {
      en: 'Highlight the big picture, long-term strategic goals, and creative possibilities. Connect your work to the grand vision.',
      si: 'සමස්ත චිත්‍රය, දිගුකාලීන උපායමාර්ගික ඉලක්ක සහ නව නිර්මාණාත්මක අදහස් ඉදිරිපත් කරන්න. ඔබේ කාර්යය පොදු දැක්මට සම්බන්ධ කරන්න.'
    },
    T: {
      en: 'Present logical arguments, objective pros/cons, and keep emotions separate. Be concise and reference results.',
      si: 'තාර්කික කරුණු, වාසි සහ අවාසි වෛෂයිකව ඉදිරිපත් කරන්න. හැඟීම්වලට වඩා ප්‍රතිඵල සහ දත්තවලට මුල් තැන දෙන්න.'
    },
    F: {
      en: 'Show empathy, validate their concerns, emphasize collaborative harmony, and frame feedback constructively with personal appreciation.',
      si: 'සහකම්පනය පෙන්වන්න, එකමුතුකම අගය කරන්න, සහ නිර්මාණාත්මක ප්‍රතිපෝෂණ ලබා දීමේදී ඔවුන්ගේ කැපවීම අගය කිරීමට අමතක නොකරන්න.'
    },
    J: {
      en: 'Respect deadlines strictly, follow the agreed-upon plan, and structure your meetings with clear agendas.',
      si: 'නියමිත වේලාවන් දැඩිව රකින්න, එකඟ වූ සැලැස්මට අනුව වැඩ කරන්න, සහ රැස්වීම් සඳහා පැහැදිලි න්‍යාය පත්‍රයක් සකසන්න.'
    },
    P: {
      en: 'Allow flexibility in tasks, be open to spontaneous pivots, and focus on the final outcome rather than a rigid process.',
      si: 'වැඩ කිරීමේදී නම්‍යශීලී වන්න, ක්ෂණික වෙනස්කම්වලට එකඟ වන්න, සහ දැඩි ක්‍රමවේදයකට වඩා අවසන් ප්‍රතිඵලය දෙස අවධානය යොමු කරන්න.'
    }
  };
  
  for (let i = 0; i < 4; i++) {
    const letter = letters[i];
    tips.push({
      title: traitTitles[letter][currentLang],
      desc: traitDescriptions[letter][currentLang]
    });
  }
  
  return tips;
}
// Run translations on startup to populate dynamic translated elements
applyTranslations();
