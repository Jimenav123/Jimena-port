/* ─── FĒMME App Logic ──────────────────────────────── */

const PHASES = {
  menstrual: {
    name: 'Menstrual Phase',
    color: '#B85C6E',
    colorLight: '#F5D6DC',
    bannerClass: 'phase-banner--menstrual',
    days: [1, 5],
    tag: '● Menstrual Phase',
    desc: 'Your body is releasing and renewing. Rest is medicine right now — not laziness. Honor the season your body is in.',
    nutrition: {
      title: 'Nourish & Replenish',
      sub: 'Iron loss is real. Today is about rebuilding stores and reducing inflammation.',
      items: [
        { icon: '🥩', bg: '#FDE8EC', title: 'Iron-rich foods', text: 'Red meat, lentils, spinach, pumpkin seeds. Pair with vitamin C to boost absorption.', why: 'You lose iron through menstrual blood — replenishing prevents fatigue.' },
        { icon: '🐟', bg: '#FDE8EC', title: 'Omega-3 fats', text: 'Salmon, sardines, walnuts, flaxseed. These are natural prostaglandin inhibitors.', why: 'Omega-3s reduce the prostaglandins that cause cramping.' },
        { icon: '🫚', bg: '#FDE8EC', title: 'Anti-inflammatory focus', text: 'Turmeric, ginger, dark leafy greens. Avoid processed foods and excess sugar today.', why: 'Inflammation peaks during menstruation — this directly reduces it.' },
        { icon: '🍵', bg: '#FDE8EC', title: 'Warm foods & fluids', text: 'Warm broths, herbal teas (raspberry leaf, ginger, chamomile). Limit cold foods and ice.', why: 'Warmth improves circulation and eases uterine cramping.' },
      ],
    },
    training: {
      title: 'Rest is Training',
      sub: 'Your body is doing enormous work. Gentle movement supports — high intensity depletes.',
      items: [
        { icon: '🧘', bg: '#FDE8EC', title: 'Yin or restorative yoga', text: '20–40 min. Focus on hip openers: pigeon, child\'s pose, supine butterfly. These relieve pelvic tension.', why: 'Gentle hip openers release the psoas and reduce cramp intensity.' },
        { icon: '🚶', bg: '#FDE8EC', title: 'Slow walks only', text: '20–30 min at a conversational pace. Keep your heart rate under 120 bpm.', why: 'Light movement improves blood flow and reduces bloating without stressing your system.' },
        { icon: '❌', bg: '#FDE8EC', title: 'Skip HIIT & heavy lifts', text: 'Your HRV and recovery are naturally lower. Pushing through high-intensity work raises cortisol, which worsens symptoms.', why: 'This isn\'t weakness. It\'s smart periodization.' },
      ],
    },
    sleep: {
      title: 'Prioritize Deep Rest',
      sub: 'Progesterone is falling and body temp drops slightly. Sleep quality matters most this week.',
      items: [
        { icon: '🌡️', bg: '#FDE8EC', title: 'Cool your room to 66–68°F', text: 'Your basal body temperature is lower during menstruation. A cooler environment helps you reach deep sleep.', why: 'Core body cooling is the primary trigger for sleep onset.' },
        { icon: '🛁', bg: '#FDE8EC', title: 'Warm bath or shower before bed', text: '10 min, about 90 minutes before sleep. The drop in body temp afterward signals your brain to sleep.', why: 'The post-bath temperature drop accelerates sleep onset by up to 36 minutes.' },
        { icon: '🌿', bg: '#FDE8EC', title: 'Magnesium glycinate (300–400mg)', text: 'Take 45 minutes before bed. This form crosses the blood-brain barrier and promotes GABA — your natural sleep chemical.', why: 'Magnesium deficiency (common during menstruation) directly disrupts sleep quality.' },
        { icon: '📵', bg: '#FDE8EC', title: 'Screens off by 9:30 PM', text: 'Blue light suppresses melatonin. Already low estrogen further reduces your ability to produce it.', why: 'Melatonin production is estrogen-dependent and most vulnerable right now.' },
      ],
    },
    supplements: [
      { name: 'Iron bisglycinate', time: 'Morning, with vitamin C', why: 'Replenish iron lost in menstrual blood', color: '#B85C6E' },
      { name: 'Magnesium glycinate', time: 'Evening (300–400mg)', why: 'Reduces cramping and improves sleep', color: '#B85C6E' },
      { name: 'Omega-3 (EPA/DHA)', time: 'With largest meal', why: 'Natural prostaglandin inhibitor — reduces pain', color: '#B85C6E' },
      { name: 'Vitamin D3 + K2', time: 'Morning with fat', why: 'Supports immune function and mood stability', color: '#B85C6E' },
    ],
    mind: {
      title: 'Turn Inward',
      sub: 'Your brain is in a reflective, introspective mode right now. Work with it.',
      items: [
        { icon: '📓', bg: '#FDE8EC', title: 'Journaling over socializing', text: 'Your intuition is heightened this week. Use it. Reflect on what the last month revealed.', why: 'The veil between conscious and unconscious thought is thinner during menstruation.' },
        { icon: '🧩', bg: '#FDE8EC', title: 'Deep, focused solo work', text: 'You may feel introverted and distracted. Lean into single-task, creative, or analytical solo work.', why: 'Beta brain activity is lower; theta (creative, intuitive) activity increases.' },
        { icon: '🚫', bg: '#FDE8EC', title: 'Postpone big decisions if you can', text: 'Your emotional processing is heightened. Decisions made now can feel more fraught than they are.', why: 'Hormonal drops affect prefrontal cortex function and emotional regulation.' },
      ],
    },
  },

  follicular: {
    name: 'Follicular Phase',
    color: '#C48A2A',
    colorLight: '#F5E6C0',
    bannerClass: 'phase-banner--follicular',
    days: [6, 13],
    tag: '● Follicular Phase',
    desc: 'Estrogen is building and you are too. Energy, creativity, and motivation are rising — this is the best time to start something new or push harder.',
    nutrition: {
      title: 'Build & Energize',
      sub: 'Rising estrogen increases insulin sensitivity. Your body uses carbs efficiently now.',
      items: [
        { icon: '🥚', bg: '#FFF3D6', title: 'High-quality protein at every meal', text: 'Eggs, chicken, fish, Greek yogurt, legumes. Aim for 25–35g protein per meal.', why: 'Estrogen enhances muscle protein synthesis — capitalize on this window.' },
        { icon: '🌾', bg: '#FFF3D6', title: 'Complex carbohydrates', text: 'Oats, quinoa, sweet potato, brown rice. Your insulin sensitivity peaks here — carbs work for you.', why: 'Follicular phase insulin sensitivity is highest, meaning carbs are used as fuel, not stored.' },
        { icon: '🌱', bg: '#FFF3D6', title: 'Fermented & fiber-rich foods', text: 'Sauerkraut, kimchi, kefir, flaxseed, cruciferous vegetables. These support estrogen metabolism.', why: 'A healthy gut microbiome is critical for proper estrogen processing and elimination.' },
        { icon: '🫐', bg: '#FFF3D6', title: 'Zinc-rich foods', text: 'Pumpkin seeds, beef, oysters, chickpeas. Zinc peaks pre-ovulation and supports LH production.', why: 'Zinc is the key mineral for ovulatory function — build stores now.' },
      ],
    },
    training: {
      title: 'Push Hard — You\'re Ready',
      sub: 'This is your highest-performance window. Estrogen increases strength, coordination, and pain tolerance.',
      items: [
        { icon: '🏋️', bg: '#FFF3D6', title: 'Strength training with progressive overload', text: 'This is the time to add weight. Compound movements: squats, deadlifts, bench, rows. 3–5 sets of 6–10 reps.', why: 'Estrogen and testosterone are rising — muscle fiber recruitment is optimal.' },
        { icon: '⚡', bg: '#FFF3D6', title: 'HIIT or sprint intervals', text: 'Your cardiovascular system adapts faster now. 2–3 sessions of 20–30 min high-intensity work per week.', why: 'Higher pain tolerance and faster recovery make HIIT more productive in this phase.' },
        { icon: '📈', bg: '#FFF3D6', title: 'Try something new', text: 'New exercise skills are learned faster when estrogen is high. Great time to start a new sport, class, or movement pattern.', why: 'Estrogen enhances neuroplasticity and motor learning.' },
      ],
    },
    sleep: {
      title: 'Quality Over Quantity',
      sub: 'Sleep is most stable in follicular. Use this window to bank recovery.',
      items: [
        { icon: '⏰', bg: '#FFF3D6', title: 'Consistent wake time matters most', text: 'Keep the same wake time every day (±30 min) even on weekends. Anchors your circadian rhythm.', why: 'Wake time, not bedtime, is the primary anchor for circadian biology.' },
        { icon: '☀️', bg: '#FFF3D6', title: 'Morning light within 30 minutes of waking', text: '10+ minutes of outdoor light exposure. No sunglasses. Sets your cortisol awakening response.', why: 'Morning light is the strongest zeitgeber (time-giver) for the circadian clock.' },
        { icon: '🍵', bg: '#FFF3D6', title: 'Cut caffeine by 1 PM', text: 'Caffeine has a half-life of ~6 hours. Coffee at 2 PM still affects you at 8 PM when your body should be winding down.', why: 'Caffeine blocks adenosine receptors — the sleepiness signal your body needs to accumulate.' },
      ],
    },
    supplements: [
      { name: 'Zinc picolinate', time: 'Evening (15–30mg)', why: 'Supports follicle development and LH surge', color: '#C48A2A' },
      { name: 'B-complex (active forms)', time: 'Morning with food', why: 'Energy metabolism, dopamine, and serotonin production', color: '#C48A2A' },
      { name: 'Vitamin D3 + K2', time: 'Morning with fat', why: 'Hormone precursor; most women are deficient', color: '#C48A2A' },
      { name: 'Collagen peptides', time: 'Post-workout or morning', why: 'Estrogen boosts collagen synthesis — amplify it', color: '#C48A2A' },
    ],
    mind: {
      title: 'Start. Build. Create.',
      sub: 'Your brain is firing on all cylinders. Use this phase for your biggest projects.',
      items: [
        { icon: '🚀', bg: '#FFF3D6', title: 'Launch new projects and habits', text: 'This is biologically the best time to start something new. The habit is easiest to form right now.', why: 'Dopamine is rising with estrogen — novelty-seeking and motivation peak.' },
        { icon: '🧠', bg: '#FFF3D6', title: 'Peak cognitive performance', text: 'Verbal fluency, working memory, and processing speed are highest in follicular and ovulatory phases.', why: 'Estrogen upregulates dopamine receptors in the prefrontal cortex.' },
        { icon: '🤝', bg: '#FFF3D6', title: 'Collaborate and connect', text: 'Social energy is rising. Schedule important meetings, pitches, or difficult conversations for this window.', why: 'Estrogen increases oxytocin sensitivity — empathy, communication, and charisma are stronger.' },
      ],
    },
  },

  ovulatory: {
    name: 'Ovulatory Phase',
    color: '#3D9E72',
    colorLight: '#C8EDD9',
    bannerClass: 'phase-banner--ovulatory',
    days: [14, 16],
    tag: '● Ovulatory Phase',
    desc: 'Peak power. LH is surging, estrogen is at its highest, and testosterone is rising. You are at your physical and social peak. Use it.',
    nutrition: {
      title: 'Peak Fuel',
      sub: 'Your metabolism is highest. Feed the fire with antioxidant-rich, anti-inflammatory foods.',
      items: [
        { icon: '🫐', bg: '#D4F5E6', title: 'Antioxidant-rich produce', text: 'Berries, pomegranate, beets, dark leafy greens. Counteract the oxidative stress that peaks around ovulation.', why: 'LH surge creates a brief inflammatory response — antioxidants buffer this.' },
        { icon: '🥑', bg: '#D4F5E6', title: 'Healthy fats for hormone synthesis', text: 'Avocado, extra-virgin olive oil, nuts, seeds. These are building blocks for your peak estrogen production.', why: 'Cholesterol-derived fats are the raw material for all steroid hormones, including estrogen.' },
        { icon: '🥦', bg: '#D4F5E6', title: 'Cruciferous vegetables', text: 'Broccoli, cauliflower, Brussels sprouts, kale. Support liver processing of peak estrogen levels.', why: 'DIM (from cruciferous veg) helps the liver clear excess estrogen safely.' },
        { icon: '🧊', bg: '#D4F5E6', title: 'Lighter meals, more raw foods', text: 'Metabolic rate is slightly elevated. Raw salads, smoothies, and lighter options feel better and work better.', why: 'Core body temperature rises slightly around ovulation — lighter foods reduce internal heat load.' },
      ],
    },
    training: {
      title: 'Hit Your PRs',
      sub: 'Peak strength, coordination, and pain tolerance. This is your window for personal records.',
      items: [
        { icon: '🏆', bg: '#D4F5E6', title: 'Attempt personal records', text: 'Max lifts, fastest times, hardest climbs. Your pain threshold is highest and muscle recruitment is optimal.', why: 'LH surge + testosterone spike = strongest you\'ll be all cycle.' },
        { icon: '⚠️', bg: '#D4F5E6', title: 'Watch ligament laxity', text: 'Estrogen relaxes ligaments — higher ACL injury risk. Prioritize warm-up, form, and controlled movements especially in lateral cutting sports.', why: 'Estrogen-mediated ligament laxity is real and clinically documented. Not a reason to skip — just to be precise.' },
        { icon: '🏃', bg: '#D4F5E6', title: 'Endurance and power sports', text: 'Running, cycling, swimming, team sports. Your VO2 max utilization is highest this week.', why: 'Estrogen increases fat oxidation, sparing glycogen for longer, harder efforts.' },
      ],
    },
    sleep: {
      title: 'Sleep is Easiest Now — Don\'t Waste It',
      sub: 'The best sleep quality of your cycle. Make the most of it.',
      items: [
        { icon: '😴', bg: '#D4F5E6', title: 'Aim for 8–9 hours', text: 'Sleep architecture is most restorative around ovulation. You\'ll consolidate memory and rebuild muscle faster.', why: 'Peak GH release during slow-wave sleep + high anabolic hormones = maximum repair.' },
        { icon: '🌙', bg: '#D4F5E6', title: 'Keep your room dark', text: 'Blackout curtains or a quality sleep mask. Even small amounts of light suppress melatonin.', why: 'Melatonin is your master antioxidant — its nightly surge protects your cells and DNA.' },
        { icon: '🏋️', bg: '#D4F5E6', title: 'Time hard workouts for morning', text: 'Reserve late afternoon / evening for lighter activity. Post-workout cortisol in the evening can delay sleep onset.', why: 'Exercise cortisol takes 4–6 hours to fully clear. Morning training aligns with your natural cortisol peak.' },
      ],
    },
    supplements: [
      { name: 'Vitamin C (500–1000mg)', time: 'Morning', why: 'Supports corpus luteum formation post-ovulation', color: '#3D9E72' },
      { name: 'Omega-3 (EPA/DHA)', time: 'With largest meal', why: 'Anti-inflammatory buffer for LH surge', color: '#3D9E72' },
      { name: 'Selenium (100–200mcg)', time: 'Morning', why: 'Thyroid and ovarian function support', color: '#3D9E72' },
      { name: 'Zinc picolinate', time: 'Evening', why: 'Peaks pre-ovulation — critical timing', color: '#3D9E72' },
    ],
    mind: {
      title: 'Lead, Connect, Create',
      sub: 'You are most socially magnetic, articulate, and energized right now.',
      items: [
        { icon: '🎤', bg: '#D4F5E6', title: 'Schedule your most important conversations', text: 'Pitches, difficult talks, job interviews, first dates. You are at your most articulate and magnetic.', why: 'Estrogen + testosterone together optimize verbal fluency, confidence, and charisma.' },
        { icon: '🌍', bg: '#D4F5E6', title: 'Connect and collaborate', text: 'Social energy peaks at ovulation. Plan events, networking, or quality time with people who matter.', why: 'Oxytocin sensitivity peaks — your capacity for deep connection is highest.' },
        { icon: '💡', bg: '#D4F5E6', title: 'Creative output and brainstorming', text: 'Ideas flow most freely now. Fill a whiteboard, write a pitch deck, make bold plans.', why: 'Dopamine and serotonin are both elevated — creative risk-taking is psychologically easier.' },
      ],
    },
  },

  luteal: {
    name: 'Luteal Phase',
    color: '#8B6FB5',
    colorLight: '#E4D8F5',
    bannerClass: 'phase-banner--luteal',
    days: [17, 28],
    tag: '● Luteal Phase',
    desc: 'Progesterone rises then falls. Your body prepares for either pregnancy or a new cycle. Brain fog and mood shifts are real — they\'re biology, not weakness.',
    nutrition: {
      title: 'Stabilize & Soothe',
      sub: 'Metabolism rises by 100–300 calories. Cravings are real and have a biological cause.',
      items: [
        { icon: '🍠', bg: '#EDE0FF', title: 'Complex carbohydrates (don\'t restrict)', text: 'Sweet potato, oats, brown rice, quinoa. Your brain runs on serotonin, which requires carb-driven insulin to produce.', why: 'Carbs trigger insulin, which clears competing amino acids from blood, letting tryptophan enter the brain to make serotonin.' },
        { icon: '🍫', bg: '#EDE0FF', title: 'Dark chocolate (70%+)', text: 'Real craving signal. 1–2 squares of quality dark chocolate provides magnesium and mood-lifting compounds.', why: 'Magnesium drops sharply in luteal phase — dark chocolate is one of the best natural sources.' },
        { icon: '🧂', bg: '#EDE0FF', title: 'Reduce sodium, increase potassium', text: 'Avocado, banana, sweet potato, leafy greens. Counters water retention without restricting food.', why: 'Progesterone causes sodium retention → bloating. Potassium is the antidote.' },
        { icon: '🚫', bg: '#EDE0FF', title: 'Limit alcohol and caffeine', text: 'Both are depleting in late luteal. Alcohol disrupts sleep architecture; caffeine worsens anxiety and breast tenderness.', why: 'Estrogen processes alcohol more slowly in late luteal — impact is amplified.' },
      ],
    },
    training: {
      title: 'Train Smarter, Not Harder',
      sub: 'Progesterone increases body temperature and perceived exertion. What feels hard IS harder.',
      items: [
        { icon: '🏊', bg: '#EDE0FF', title: 'Moderate intensity, longer duration', text: 'Swimming, cycling, brisk walking, Pilates. Keep heart rate in zone 2 (60–70% max HR).', why: 'Progesterone raises your resting body temp — endurance over intensity protects your system.' },
        { icon: '💪', bg: '#EDE0FF', title: 'Strength maintenance, not maxing', text: 'Stick to moderate weights and controlled form. 3 sets of 10–12 reps. This isn\'t a PR week.', why: 'Glycogen storage is reduced in luteal phase — short, intense efforts don\'t fuel as efficiently.' },
        { icon: '🧘', bg: '#EDE0FF', title: 'Add extra recovery days', text: 'Your body needs more time to recover. Schedule at least 2 full rest days per week and listen to your body\'s signals.', why: 'HRV typically trends lower in late luteal — it\'s a real signal of higher physiological stress.' },
      ],
    },
    sleep: {
      title: 'Sleep Becomes Harder — Plan Ahead',
      sub: 'Rising then falling progesterone disrupts sleep quality in late luteal.',
      items: [
        { icon: '🌿', bg: '#EDE0FF', title: 'Magnesium glycinate every night (400mg)', text: 'Non-negotiable in late luteal. Take 45–60 minutes before bed. This is the most evidence-backed supplement for luteal sleep.', why: 'Magnesium activates GABA receptors, countering the anxiety and wakefulness that comes as progesterone drops.' },
        { icon: '🌡️', bg: '#EDE0FF', title: 'Extra attention to room temperature', text: 'Body temp runs higher in luteal. Drop your thermostat to 65°F. Moisture-wicking sheets help.', why: 'Higher core temp in luteal phase = more night waking. Cooling your environment compensates.' },
        { icon: '📋', bg: '#EDE0FF', title: 'Brain dump before bed', text: 'Write down everything on your mind — tasks, worries, tomorrow\'s plan. Gets it out of your head and onto paper.', why: 'Rumination and anxiety peak in late luteal. Externalizing thoughts reduces the cortisol that keeps you awake.' },
        { icon: '🚿', bg: '#EDE0FF', title: 'Avoid late meals', text: 'Finish eating 3 hours before bed. Digestion raises core temp, which fights sleep onset.', why: 'Insulin post-meal + progesterone\'s already elevated temp = significant sleep disruption.' },
      ],
    },
    supplements: [
      { name: 'Magnesium glycinate', time: 'Evening (400mg)', why: 'PMS, sleep, cramps, and mood — the luteal miracle mineral', color: '#8B6FB5' },
      { name: 'Vitamin B6 (P5P form)', time: 'Morning (50mg)', why: 'Reduces PMS symptoms and supports progesterone', color: '#8B6FB5' },
      { name: 'Chasteberry (vitex)', time: 'Morning, fasted', why: 'Regulates LH and supports progesterone production', color: '#8B6FB5' },
      { name: 'Calcium D-glucarate', time: 'With meals', why: 'Supports liver estrogen clearance and reduces estrogen dominance', color: '#8B6FB5' },
    ],
    mind: {
      title: 'Protect Your Energy',
      sub: 'Brain fog and emotional sensitivity are real. Structure, simplicity, and compassion are your tools.',
      items: [
        { icon: '📋', bg: '#EDE0FF', title: 'Make lists, not plans', text: 'Keep tasks in writing. Working memory is genuinely reduced — it\'s not anxiety, it\'s biology. External systems compensate.', why: 'Progesterone affects the hippocampus and prefrontal cortex, reducing working memory capacity.' },
        { icon: '🛑', bg: '#EDE0FF', title: 'Say no to unnecessary commitments', text: 'Your energy is finite and lower. Protect it fiercely. Cancel what doesn\'t matter so you can show up for what does.', why: 'Social battery drains faster in luteal due to lower dopamine and serotonin.' },
        { icon: '🌸', bg: '#EDE0FF', title: 'Self-compassion is not optional', text: 'The inner critic is loudest in late luteal. Notice it, name it as hormonal, and choose a softer internal voice.', why: 'Amygdala reactivity increases as progesterone drops — emotional responses feel more intense than they are.' },
      ],
    },
  },
};

/* ─── Cycle Phase Logic ──────────────────────────── */

function getCycleDay(startDate, cycleLength) {
  const now = new Date();
  const start = new Date(startDate);
  const diffMs = now - start;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  return ((diffDays - 1) % cycleLength) + 1;
}

function getPhase(dayOfCycle, cycleLength) {
  const lutealStart = cycleLength - 11;
  if (dayOfCycle <= 5) return { key: 'menstrual', day: dayOfCycle };
  if (dayOfCycle <= 13) return { key: 'follicular', day: dayOfCycle };
  if (dayOfCycle <= 16) return { key: 'ovulatory', day: dayOfCycle };
  return { key: 'luteal', day: dayOfCycle };
}

/* ─── Onboarding ─────────────────────────────────── */

function nextStep(current) {
  if (current === 1) {
    const name = document.getElementById('ob-name').value.trim();
    if (!name) { document.getElementById('ob-name').focus(); return; }
    localStorage.setItem('femme_name', name);
  }
  if (current === 2) {
    const date = document.getElementById('ob-date').value;
    if (!date) { document.getElementById('ob-date').focus(); return; }
    localStorage.setItem('femme_start', date);
  }
  document.getElementById(`step-${current}`).classList.remove('active');
  document.getElementById(`step-${current + 1}`).classList.add('active');
  document.getElementById(`prog-${current + 1}`).classList.add('done');
}

function prevStep(current) {
  document.getElementById(`step-${current}`).classList.remove('active');
  document.getElementById(`step-${current - 1}`).classList.add('active');
}

function finishOnboarding() {
  const length = parseInt(document.getElementById('ob-length').value) || 28;
  localStorage.setItem('femme_length', length);
  localStorage.setItem('femme_onboarded', '1');
  document.getElementById('onboard').classList.add('hidden');
  initDashboard();
}

function resetOnboarding() {
  localStorage.removeItem('femme_onboarded');
  localStorage.removeItem('femme_name');
  localStorage.removeItem('femme_start');
  localStorage.removeItem('femme_length');
  location.reload();
}

/* ─── Dashboard Init ─────────────────────────────── */

function initDashboard() {
  const name = localStorage.getItem('femme_name') || 'there';
  const startDate = localStorage.getItem('femme_start') || '2026-05-10';
  const cycleLength = parseInt(localStorage.getItem('femme_length')) || 28;

  const cycleDay = getCycleDay(startDate, cycleLength);
  const { key } = getPhase(cycleDay, cycleLength);
  const phase = PHASES[key];

  // Nav greeting
  const today = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  document.getElementById('nav-greeting').textContent = `Hi ${name} · ${today}`;

  // Phase banner
  const banner = document.getElementById('phase-banner');
  banner.className = `phase-banner ${phase.bannerClass}`;
  document.getElementById('phase-tag').textContent = phase.tag;
  document.getElementById('phase-name').textContent = phase.name;
  document.getElementById('phase-desc').textContent = phase.desc;
  document.getElementById('phase-day-num').textContent = cycleDay;

  // Today's plan panels
  renderPanel('nutrition', phase.nutrition.title, phase.nutrition.sub, phase.nutrition.items);
  renderPanel('training', phase.training.title, phase.training.sub, phase.training.items);
  renderPanel('sleep', phase.sleep.title, phase.sleep.sub, phase.sleep.items);
  renderPanel('mood', phase.mind.title, phase.mind.sub, phase.mind.items);
  renderSuppsPanel(phase.supplements, phase.name);

  // Supplement sidebar
  renderSuppTimeline(phase.supplements);
  document.getElementById('supp-phase-label').textContent = `Optimized for your ${phase.name}`;

  // Cycle wheel
  drawCycleWheel(cycleDay, cycleLength);
  document.getElementById('wheel-sub').textContent = `Day ${cycleDay} of ${cycleLength}`;

  // AI Coach greeting
  initAICoach(name, cycleDay, phase, key);
}

function renderPanel(id, title, sub, items) {
  if (id === 'supplements') return; // handled separately
  document.getElementById(`${id === 'nutrition' ? 'nut' : id === 'training' ? 'train' : id === 'mood' ? 'mood' : id}-title`).textContent = title;
  document.getElementById(`${id === 'nutrition' ? 'nut' : id === 'training' ? 'train' : id === 'mood' ? 'mood' : id}-sub`).textContent = sub;
  const list = document.getElementById(`${id === 'nutrition' ? 'nut' : id === 'training' ? 'train' : id === 'mood' ? 'mood' : id}-list`);
  if (!list) return;
  list.innerHTML = items.map(item => `
    <div class="rec-item">
      <div class="rec-item__icon" style="background:${item.bg}">${item.icon}</div>
      <div class="rec-item__body">
        <div class="rec-item__title">${item.title}</div>
        <div class="rec-item__text">${item.text}</div>
        <div class="rec-item__why">${item.why}</div>
      </div>
    </div>
  `).join('');
}

function renderSuppsPanel(supps, phaseName) {
  document.getElementById('supp-title').textContent = `${phaseName} Stack`;
  document.getElementById('supp-sub').textContent = 'Timed to your hormonal needs — not a generic stack.';
  const list = document.getElementById('supp-list');
  list.innerHTML = supps.map(s => `
    <div class="rec-item">
      <div class="rec-item__icon" style="background:${s.color}22">💊</div>
      <div class="rec-item__body">
        <div class="rec-item__title">${s.name}</div>
        <div class="rec-item__text">${s.time}</div>
        <div class="rec-item__why">${s.why}</div>
      </div>
    </div>
  `).join('');
}

function renderSuppTimeline(supps) {
  const container = document.getElementById('supp-timeline');
  container.innerHTML = supps.map(s => `
    <div class="supp-item">
      <div class="supp-dot" style="background:${s.color}"></div>
      <div>
        <div class="supp-item__name">${s.name}</div>
        <div class="supp-item__time">${s.time}</div>
        <div class="supp-item__why">${s.why}</div>
      </div>
    </div>
  `).join('');
}

/* ─── Cycle Wheel SVG ────────────────────────────── */

function drawCycleWheel(currentDay, cycleLength) {
  const svg = document.getElementById('cycle-svg');
  const cx = 100, cy = 100, outerR = 90, innerR = 58;
  const total = cycleLength;

  const segments = [
    { key: 'menstrual', days: 5, color: '#B85C6E' },
    { key: 'follicular', days: 8, color: '#D4943A' },
    { key: 'ovulatory', days: 3, color: '#3D9E72' },
    { key: 'luteal', days: total - 16, color: '#8B6FB5' },
  ];

  let html = '';
  let startAngle = -90;

  segments.forEach(seg => {
    const sweep = (seg.days / total) * 360;
    const endAngle = startAngle + sweep;
    const s = polarToXY(cx, cy, outerR, startAngle);
    const e = polarToXY(cx, cy, outerR, endAngle);
    const si = polarToXY(cx, cy, innerR, startAngle);
    const ei = polarToXY(cx, cy, innerR, endAngle);
    const large = sweep > 180 ? 1 : 0;

    html += `<path d="M ${s.x} ${s.y} A ${outerR} ${outerR} 0 ${large} 1 ${e.x} ${e.y} L ${ei.x} ${ei.y} A ${innerR} ${innerR} 0 ${large} 0 ${si.x} ${si.y} Z" fill="${seg.color}" opacity="0.85"/>`;

    startAngle = endAngle;
  });

  // Current day dot
  const dayAngle = -90 + (currentDay / total) * 360;
  const dot = polarToXY(cx, cy, (outerR + innerR) / 2, dayAngle);
  html += `<circle cx="${dot.x}" cy="${dot.y}" r="7" fill="white" stroke="#2D2320" stroke-width="2"/>`;

  // Center text
  html += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="22" fill="#2D2320">${currentDay}</text>`;
  html += `<text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="10" fill="#9A8880" letter-spacing="0.5">day</text>`;

  svg.innerHTML = html;
}

function polarToXY(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ─── Tab switching ──────────────────────────────── */

function switchTab(panel, tabEl) {
  document.querySelectorAll('.today-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.today-panel').forEach(p => p.classList.remove('active'));
  tabEl.classList.add('active');
  document.getElementById(`panel-${panel}`).classList.add('active');
}

/* ─── Quick Log ──────────────────────────────────── */

function selectLog(el, group) {
  el.closest('.log-emojis').querySelectorAll('.log-emoji').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

function submitLog() {
  const btn = document.getElementById('log-btn');
  btn.textContent = '✓ Check-in saved for today';
  btn.classList.add('logged');
  setTimeout(() => {
    btn.textContent = 'Save Today\'s Check-In';
    btn.classList.remove('logged');
  }, 3000);
}

/* ─── AI Coach ───────────────────────────────────── */

let coachPhase = null;
let coachDay = null;
let coachName = null;

const coachKB = {
  tired: (p, d) => `Feeling tired on day ${d} (${p.name}) is ${d <= 5 || d >= 22 ? 'completely expected' : 'worth noting'}. ${d <= 5 ? 'Your body is losing blood and energy — iron, magnesium, and rest are your tools today.' : d >= 22 ? 'Progesterone is dropping, which disrupts sleep and drains energy. Magnesium glycinate tonight, and don\'t push through a hard workout.' : 'Check your sleep quality and hydration first. If HRV is low, take a lighter day.'}`,
  bloat: (p, d) => `Bloating on day ${d} is ${d >= 22 ? 'a classic late luteal symptom' : 'common but manageable'}. The cause: progesterone causes your body to retain sodium and water. Fix: reduce sodium intake, increase potassium (banana, avocado, sweet potato), drink more water, and add gentle movement. Avoid carbonated drinks today.`,
  workout: (p, d) => `On day ${d} (${p.name}), I'd suggest: ${d <= 5 ? 'yin yoga or a slow walk. Your body needs recovery, not a PR attempt.' : d <= 13 ? 'strength training with progressive overload — this is your highest-performance window. Push hard.' : d <= 16 ? 'go for a personal record. LH surge makes this your peak strength day.' : 'moderate intensity — swimming, Pilates, or zone 2 cardio. Skip HIIT and heavy maxes.'}`,
  cramps: () => `Cramping is caused by prostaglandins — hormone-like compounds that trigger uterine contractions. To reduce them: omega-3 fats (salmon, sardines, walnuts) inhibit prostaglandin production. Magnesium relaxes smooth muscle. Heat applied directly to your lower abdomen reduces pain perception by up to 40%.`,
  anxiety: (p, d) => `Anxiety on day ${d} is ${d >= 22 ? 'hormonally driven — not a mindset failure' : 'worth tuning into'}. ${d >= 22 ? 'As progesterone drops in late luteal, GABA (your calming neurotransmitter) gets depleted. Magnesium glycinate directly supports GABA. Limit caffeine, alcohol, and blood sugar spikes today.' : 'Check: have you slept enough? Eaten regularly? Blood sugar dips trigger cortisol, which feels like anxiety.'}`,
  eat: (p) => `Right now in your ${p.name}, your body thrives on: ${p.key === 'menstrual' ? 'iron-rich foods (red meat, lentils, spinach), omega-3 fats, and warming meals like broths and soups.' : p.key === 'follicular' ? 'high-quality protein, complex carbs, and fermented foods. Your insulin sensitivity is high — use it.' : p.key === 'ovulatory' ? 'antioxidant-rich produce (berries, beets), healthy fats, and cruciferous vegetables.' : 'complex carbs (don\'t restrict!), magnesium-rich dark chocolate, and potassium-forward foods.'}`,
  period: (p, d) => `Based on your cycle data, your next period is estimated around day ${parseInt(localStorage.getItem('femme_length') || 28) - d + 1 > 0 ? parseInt(localStorage.getItem('femme_length') || 28) - d + 1 : 1} days from now. The week before (late luteal) is when PMS symptoms are most likely. I'll flag it in advance so you can prepare.`,
  supplement: (p) => `For your ${p.name}, the most important supplements are: ${p.supplements.slice(0, 2).map(s => `${s.name} (${s.time})`).join(' and ')}. These are timed specifically to your hormonal needs — not a generic stack. Check the Supplements tab for the full protocol.`,
  sleep: (p, d) => `Sleep in the ${p.name} is ${d <= 5 || d >= 22 ? 'most disrupted' : d >= 14 && d <= 16 ? 'most restorative — use it' : 'relatively stable'}. ${d >= 22 ? 'Progesterone drop → GABA drop → lighter sleep. Magnesium glycinate before bed, cool room, and a brain dump to clear your mind are your best tools.' : 'Consistent wake time, morning light within 30 minutes of waking, and cutting caffeine by 1 PM will protect your sleep quality.'}`,
  pcos: () => `PCOS affects roughly 1 in 10 women and remains one of the most underdiagnosed conditions. Key things to know: cycle tracking helps identify irregular patterns; a lower-glycemic diet reduces insulin resistance (a root driver for most); strength training is particularly beneficial; and inositol (myo + D-chiro combination) has the most evidence for insulin-related PCOS. Have you been diagnosed, or are you tracking patterns?`,
  default: (p, d) => `You're on day ${d} of your cycle (${p.name}). ${p.desc} What can I help you understand about what your body is doing right now?`,
};

function getCoachResponse(query, phase, day) {
  const q = query.toLowerCase();
  if (q.match(/tired|fatigue|exhausted|energy|low energy/)) return coachKB.tired(phase, day);
  if (q.match(/bloat|bloating|puffy|water retention/)) return coachKB.bloat(phase, day);
  if (q.match(/workout|train|exercise|gym|lift|run|hiit/)) return coachKB.workout(phase, day);
  if (q.match(/cramp|pain|period pain|dysmenorrhea/)) return coachKB.cramps();
  if (q.match(/anxious|anxiety|stress|worried|overwhelm/)) return coachKB.anxiety(phase, day);
  if (q.match(/eat|food|nutrition|diet|meal|snack/)) return coachKB.eat(phase);
  if (q.match(/period|next period|when|flow|bleed/)) return coachKB.period(phase, day);
  if (q.match(/supplement|vitamin|mineral|magnesium|zinc|iron/)) return coachKB.supplement(phase);
  if (q.match(/sleep|insomnia|awake|rest|tired at night/)) return coachKB.sleep(phase, day);
  if (q.match(/pcos|polycystic|insulin|hormones/)) return coachKB.pcos();
  return coachKB.default(phase, day);
}

function initAICoach(name, day, phase, phaseKey) {
  coachPhase = { ...phase, key: phaseKey };
  coachDay = day;
  coachName = name;

  const chat = document.getElementById('app-chat');
  const greeting = `Hi ${name} 🌿 You're on day ${day} — ${phase.name}. ${phase.desc.split('.')[0]}. What would you like to know about today?`;

  appendCoachMsg(chat, greeting, false);

  document.getElementById('app-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') appChat();
  });
}

function appChat() {
  const input = document.getElementById('app-input');
  const chat = document.getElementById('app-chat');
  if (!input.value.trim()) return;

  appendCoachMsg(chat, input.value, true);
  const query = input.value;
  input.value = '';

  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'chat-msg';
  typing.innerHTML = `<div class="chat-msg__avatar">✨</div><div class="chat-msg__bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    chat.removeChild(typing);
    const response = getCoachResponse(query, coachPhase, coachDay);
    appendCoachMsg(chat, response, false);
  }, 1200 + Math.random() * 600);
}

function appendCoachMsg(chat, text, isUser) {
  const msg = document.createElement('div');
  msg.className = `chat-msg${isUser ? ' chat-msg--user' : ''}`;
  msg.innerHTML = `
    <div class="chat-msg__avatar">${isUser ? coachName?.[0]?.toUpperCase() || 'J' : '✨'}</div>
    <div class="chat-msg__bubble">${text}</div>
  `;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

/* ─── Boot ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const alreadyOnboarded = localStorage.getItem('femme_onboarded');

  // Pre-fill today's date for the date picker
  const today = new Date();
  const tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(today.getDate() - 10);
  document.getElementById('ob-date').value = tenDaysAgo.toISOString().split('T')[0];

  if (alreadyOnboarded) {
    document.getElementById('onboard').classList.add('hidden');
    initDashboard();
  }
  // else onboarding modal is already visible
});
