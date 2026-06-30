const lang = {
  en: {
    badge: 'FREE PERSONALITY TEST',
    footerText: 'Created by <a href="https://brainstorm.lk" target="_blank">brainstorm.lk</a> / <a href="https://edutechminds.com" target="_blank">edutechminds.com</a>',
    title1: 'DISCOVER YOUR',
    title2: 'PERSONALITY',
    subtitle: 'Answer 60 questions to find your personality type. Gain insight into your career path, relationships, and life patterns.',
    step1: 'Complete the test',
    step2: 'View Detailed Results',
    step3: 'Unlock Your Potential',
    startBtn: 'BEGIN TEST',
    agree: 'Agree',
    disagree: 'Disagree',
    agreeText: 'I agree with this',
    disagreeText: 'I disagree with this',
    likertSA: 'Strongly Agree',
    likertA: 'Agree',
    likertSLA: 'Slightly Agree',
    likertN: 'Neutral',
    likertSLD: 'Slightly Disagree',
    likertD: 'Disagree',
    likertSD: 'Strongly Disagree',
    modeModalTitle: 'Choose Test Mode',
    modeModalSub: 'Select the depth of your personality analysis.',
    modeQuickTitle: 'Quick Test',
    modeQuickDesc: 'Fast 5-minute scan. Perfect for a quick overview.',
    modeDeepTitle: 'Deep Test',
    modeDeepDesc: 'Full 10-minute blueprint. Ideal for career & growth hubs.',
    cancelBtn: 'Cancel',
    loveCompatibility: 'Romantic Compatibility',
    malePartner: 'Ideal Male Partner',
    femalePartner: 'Ideal Female Partner',
    qCount: 'QUESTION',
    loading1: 'Analyzing your personality...',
    loading2: 'Comparing your responses',
    retake: 'RETAKE TEST',
    viewTypesBtn: 'ALL 16 TYPES',
    viewMatrixBtn: 'COMPATIBILITY MATRIX',
    matrixTitle: 'Personality Synergy Matrix',
    matrixSubtitle: 'Compare cognitive alignment and workplace, romantic, or friendship chemistry between personality types.',
    typeA: 'Personality Type A',
    typeB: 'Personality Type B',
    synergyScore: 'Synergy Score',
    workplaceTab: 'Workplace Synergy',
    romanticTab: 'Romantic Bond',
    friendshipTab: 'Friendship Chemistry',
    cognitiveOverlap: 'Cognitive Overlap (Venn)',
    overlapDesc: 'Venn overlap represents shared cognitive functions and conceptual alignment.',
    conflictTitle: 'Friction points & Conflict Resolution',
    tipsTitle: 'Practical Tips for Interaction',
    teamBuilderTab: 'Team Chemistry Builder',
    teamBuilderDesc: 'Add names and personality types of multiple team members to calculate collective group synergy and management tips.',
    memberNamePlaceholder: 'Enter team member name',
    addMemberBtn: 'Add to Team',
    teamRoster: 'Team Roster',
    calcTeamBtn: 'Calculate Team Chemistry',
    teamSynergyReport: 'Collective Team Chemistry Report',
    teamSynergyScore: 'Collective Team Synergy',
    teamStrengths: 'Team Strengths & Archetype',
    teamFriction: 'Team Friction & Management Tips',
    noMembers: 'No team members added yet. Add at least two members above!',
    viewGrowthBtn: 'GROWTH HUB',
    viewCognitionBtn: 'COGNITION CANVAS',
    canvasTitle: 'Dynamic Cognition Canvas',
    canvasSubtitle: 'Adjust personality sliders to watch your cognitive profile shape morph in real-time.',
    canvasNamePlaceholder: 'Enter name for ID card...',
    downloadCardBtn: 'Download ID Card',
    currentMatchLabel: 'Current Match',
    sliderMind: 'Mind: Extraversion vs Introversion',
    sliderEnergy: 'Energy: Sensing vs Intuition',
    sliderNature: 'Nature: Thinking vs Feeling',
    sliderTactics: 'Tactics: Judging vs Prospecting',
    sliderIdentity: 'Identity: Assertive vs Turbulent',
    growthTitle: '16 Types Career Pathway & Growth Hub',
    growthSubtitle: 'Optimize your career trajectories, track daily habits to fix weaknesses, and master workplace communication.',
    growthSelectType: 'Select Personality Profile',
    strengthsLeverage: 'Strengths to Leverage',
    weaknessesFix: 'Weaknesses to Fix',
    habitTrackerTitle: 'Daily Habit Checklist',
    habitTrackerProgress: 'Daily Progress',
    careerRoadmapTitle: 'Interactive Career Roadmap',
    careerDetailTitle: 'Career Map & Skills',
    survivalGuideTitle: 'Workplace Survival Guide',
    survivalGuideSub: "Select a colleague or manager's type to generate communication strategies.",
    dutiesLabel: 'Daily Duties',
    skillsLabel: 'Required Skills',
    viewUniverseBtn: 'PERSONALITY UNIVERSE',
    universeTitle: 'Fictional & Anime Personality Universe',
    universeSubtitle: 'Explore cognitive matches, compare traits, and battle with iconic fictional and anime characters.',
    searchPlaceholder: 'Search character...',
    compareMeBtn: 'COMPARE ME',
    similarityTitle: 'Similarity Alignment',
    charTypeLabel: 'Character Type',
    myTypeLabel: 'My Type',
    franchiseAll: 'All Universes',
    franchiseNaruto: 'Naruto Series',
    franchiseMarvel: 'Marvel Universe',
    franchiseDC: 'DC / Batman Universe',
    franchiseStarWars: 'Star Wars',
    franchiseBreakingBad: 'Breaking Bad',
    franchiseOther: 'Other Franchises',
    catAll: 'All Categories',
    battleTitle: 'Character Battle & Alignment',
    battleSub: 'How much do your cognitive traits align with this character?',
    closeBtn: 'Close Battle',
    soulmateMatch: 'Highly Aligned Soulmates! (Perfect Harmony)',
    friendMatch: 'Good Companions Match (Balanced Chemistry)',
    neutralMatch: 'Opposite Dimensions Match (Intriguing Differences)',
    strengths: 'YOUR STRENGTHS',
    careers: 'RECOMMENDED CAREERS',
    quickFacts: 'Quick Facts',
    mainStrength: 'Main Strength',
    mainWeakness: 'Weakness',
    humor: 'Humor',
    relations: 'Relationships',
    famousFigures: 'Famous Figures',
    realFigures: 'Real-World Figures',
    fictionalFigures: 'Fictional Characters',
    animeFigures: 'Anime / Donghua Characters',
    dimEI: ['EXTRAVERSION','INTROVERSION'],
    dimSN: ['SENSING','INTUITION'],
    dimTF: ['THINKING','FEELING'],
    dimJP: ['JUDGING','PROSPECTING'],
    dimAT: ['ASSERTIVE','TURBULENT'],
    dimLabels: {EI:'Mind: Extraversion vs Introversion',SN:'Energy: Sensing vs Intuition',TF:'Nature: Thinking vs Feeling',JP:'Tactics: Judging vs Prospecting',AT:'Identity: Assertive vs Turbulent'},
    
    typesTitle: 'PERSONALITY TYPES',
    categories: {
      analyst: { name: "Analysts", traits: "Intuitive (N) and Thinking (T)", desc: "Personality types known for their rationality, impartiality, and intellectual excellence." },
      diplomat: { name: "Diplomats", traits: "Intuitive (N) and Feeling (F)", desc: "Personality types known for their empathy, diplomatic skills, and passionate idealism." },
      sentinel: { name: "Sentinels", traits: "Observant (S) and Judging (J)", desc: "Personality types known for their practicality and focus on order, security, and stability." },
      explorer: { name: "Explorers", traits: "Observant (S) and Prospecting (P)", desc: "Personality types known for their spontaneity, ingenuity, and flexibility." }
    },
    types: {
      INTJ:{
        name:'The Architect',
        cat:'analyst', catName:'ANALYST',
        desc:'Strategic thinkers with a plan for everything. Independent, creative, and determined to achieve their vision.',
        str:['Strategic thinking','Independence','Creative problem-solving','Determination','Long-term planning'],
        car:['Strategy Analyst','Scientist','Engineer'],
        extra: {
          quote: 'Man\'s greatness lies in his power of thought. Man is but a reed, the most feeble thing in nature, but he is a thinking reed.',
          author: 'Blaise Pascal',
          intro: 'Architects (INTJs) are rational, logical, and deeply curious individuals. They apply creativity and rationality to every aspect of life and strive for mastery in whatever subjects catch their interest.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Rational:</strong> Views every challenge as an opportunity to sharpen their reasoning skills.</li>
                      <li><strong>Informed:</strong> Builds accurate, evidence-based opinions through research and analysis.</li>
                      <li><strong>Independent:</strong> Acts independently without being confined by traditional frameworks.</li>
                      <li><strong>Determined:</strong> Works relentlessly until their goals are achieved.</li>
                      <li><strong>Curious:</strong> Always open to new, evidence-based ideas.</li>
                      <li><strong>Original:</strong> Capable of seeing things from entirely new and surprising angles.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Arrogant:</strong> Overconfidence may sometimes lead them to dismiss valuable advice.</li>
                      <li><strong>Dismissive of Emotions:</strong> Tends to overlook situations where feelings are more important than logic.</li>
                      <li><strong>Overly Critical:</strong> Judging others by their own strict rules can lead to unfair criticism.</li>
                      <li><strong>Combative:</strong> Frequently engages in debates and challenges existing rules and limitations.</li>
                      <li><strong>Socially Clueless:</strong> Their strictly logical nature makes maintaining social relationships challenging.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p class="res-quote">"Of all forms of caution, caution in love is perhaps the most fatal to true happiness." — Bertrand Russell</p>
                <p>INTJs approach love strategically. Rather than just finding someone to cure loneliness, they seek a partner who matches their intellectual level. They strongly dislike fake relationships and "dating games."</p>
                <p>Expressing emotions in long-term relationships is a challenge for them. When a partner becomes emotional, trying to analyze it logically can sometimes cause issues.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p class="res-quote">"A friend to all is a friend to none." — Aristotle</p>
                <p>They value quality over quantity. They prefer being around intelligent friends who can challenge their ideas. When a friend is in trouble, they offer practical solutions rather than just emotional comfort.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>The primary goal of INTJ parents is to raise independent individuals capable of making their own decisions and thinking logically. They explain things to their children with utmost honesty.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p class="res-quote">"One never notices what has been done; one can only see what remains to be done." — Marie Curie</p>
                <p>They highly value strategy, determination, and efficiency in the workplace. Preferring to work alone or in small teams, they view office politics and gossip as plagues that waste time.</p>
              `
            }
          ],
          facts: {
            strength: 'Strategic thinking, fierce independence, knowledge, and willpower.',
            weakness: 'Difficulty understanding others\' emotions, overly critical.',
            humor: 'Serious on the outside, but has a very sharp and sarcastic sense of humor.',
            relations: 'Only forms close bonds with honest individuals who match their deep thinking.'
          },
          figures: {
            real: [
              {name:'Elon Musk', img:'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg', desc:'A futuristic, strategic leader who acts ruthlessly for his goals regardless of rules.'},
              {name:'Mark Zuckerberg', img:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578117%29_%28cropped%29.jpg', desc:'Founder of Facebook (Meta). A logical, data-driven decision maker.'},
              {name:'Sir Isaac Newton', img:'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg', desc:'One of the greatest scientists. Known for his insatiable thirst for knowledge.'},
              {name:'Michelle Obama', img:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg', desc:'A highly organized, strategic, and practical leader.'}
            ],
            fictional: [
              {name:'Walter White', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Walter', desc:'The "Mastermind" from Breaking Bad who meticulously plans every move.'},
              {name:'Batman / Bruce Wayne', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Batman', desc:'A superhero who prioritizes strategy and planning over emotions.'},
              {name:'Professor', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Professor', desc:'The strategic planner from Money Heist.'},
              {name:'Thanos', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Thanos', desc:'Displays INTJ traits by executing his plans with ruthless determination.'}
            ],
            anime: [
              {name:'Lelouch lamperouge', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Lelouch', desc:'A brilliant strategist commanding an army from the shadows in Code Geass.'},
              {name:'Sasuke Uchiha', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke', desc:'Introverted and devoted entirely to his own personal goals.'},
              {name:'Tang San', img:'https://api.dicebear.com/7.x/bottts/svg?seed=TangSan', desc:'An intelligent leader who analyzes enemies and acts strategically.'}
            ]
          }
        }
      },
      INTP:{
        name:'The Logician',
        cat:'analyst', catName:'ANALYST',
        desc:'Innovative inventors with a passion for ideas. Creative, independent, and always searching for the logical truth.',
        str:['Deep analysis','Creative problem-solving','Independent thinking','Intellectual curiosity','Logical strength'],
        car:['Researcher','Software Developer','Mathematician','Philosopher','Scientist'],
        extra: {
          quote: 'The important thing is not to stop questioning. Curiosity has its own reason for existence.',
          author: 'Albert Einstein',
          intro: 'Logicians (INTPs) pride themselves on their unique perspective and vigorous intellect. They are constantly driven to think about the mysteries of the universe, and it is no surprise that some of the most influential philosophers and scientists in world history have had the INTP personality type.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Analytical Mind:</strong> Capable of analyzing anything minutely and recognizing unusual patterns easily.</li>
                      <li><strong>Creative Identity:</strong> Possesses the ability to create unique, non-traditional ideas.</li>
                      <li><strong>Open-Minded:</strong> Always ready to change their views in the face of new, logical evidence.</li>
                      <li><strong>Constant Curiosity:</strong> A deep-seated desire to study and explore various subjects.</li>
                      <li><strong>Honesty:</strong> Strives to discover the truth rather than just accepting surface appearances.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Socially Isolated:</strong> Tends to get lost in their own thoughts, feeling separated from others.</li>
                      <li><strong>Insensitive:</strong> Struggles to value emotions, sometimes making them appear cold or blunt.</li>
                      <li><strong>Constant Dissatisfaction:</strong> Constantly tries to rebuild and redesign things that are already successful.</li>
                      <li><strong>Overthinking:</strong> Overanalyzes every angle, leading to difficulty in making decisions (Analysis Paralysis).</li>
                      <li><strong>Impatient:</strong> Easily frustrated when others cannot quickly comprehend their ideas.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>Once Logicians let their guard down in a relationship, their playful and incredibly creative side shines through. To them, a perfect partner is someone intellectual who can actively challenge their ideas.</p>
                <p>They strongly dislike indirect "mind games" in love, preferring to be exceptionally direct and honest. However, expressing their affection emotionally can sometimes be a challenge for them.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p class="res-quote">"A friend to all is a friend to none." — Aristotle</p>
                <p>They do not seek friends merely to cure loneliness. Instead, they highly value intellectual depth. They hold deep respect for friends who challenge their theories and keep them mentally active.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>INTP parents give their children maximum freedom to think independently and explore new knowledge. Instead of enforcing arbitrary house rules, they create an environment that encourages exploration. Providing emotional support to their children is their biggest challenge.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>They are highly drawn to abstract fields involving various theories and ideas. They are highly successful as mathematicians, researchers, software engineers, and philosophers. Working to their own high standards, they dislike settling for average or mediocre work.</p>
              `
            }
          ],
          facts: {
            strength: 'Analytical ability, creativity, and an open mind.',
            weakness: 'Social isolation, overthinking, and impatience.',
            humor: 'Has a sharp intellect and a dark, sarcastic sense of humor.',
            relations: 'Close bonds built on intellectual compatibility and absolute honesty.'
          },
          figures: {
            real: [
              {name:'Albert Einstein', img:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg', desc:'A legendary figure who questioned established principles and showed relentless curiosity.'},
              {name:'Bill Gates', img:'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_2013.jpg', desc:'Co-founder of Microsoft. An analytical mind who changed the world through data-driven decisions.'},
              {name:'Charles Darwin', img:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg', desc:'A scientist who minutely analyzed patterns in nature to formulate the theory of evolution.'},
              {name:'Marie Curie', img:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.png', desc:'A physicist and chemist who preferred working in solitude on revolutionary discoveries.'}
            ],
            fictional: [
              {name:'Sherlock Holmes', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Sherlock', desc:'A brilliant detective with a sharp analytical mind who values logic above all emotions.'},
              {name:'Neo (The Matrix)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Neo', desc:'A character who questions reality and is adept at analyzing complex digital systems.'},
              {name:'Bruce Banner (Marvel)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Banner', desc:'A highly intelligent scientist who prefers working in solitude inside a laboratory.'},
              {name:'Yoda (Star Wars)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Yoda', desc:'A wise figure who views the universe and philosophical concepts with profound depth.'}
            ],
            anime: [
              {name:'L Lawliet', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Lawliet', desc:'A legendary detective who logically analyzes every pro and con of highly complex situations.'},
              {name:'Kakashi Hatake', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi', desc:'A brilliant tactician who quickly analyzes enemy strategies on the battlefield.'},
              {name:'Xiao Yan', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Xiao', desc:'An experimentalist who constantly tests new pathways and acts on his own terms.'}
            ]
          }
        }
      },
      ENTJ:{name:'The Commander',cat:'analyst',catName:'ANALYST',desc:'Bold leaders who are always making a plan.',str:['Leadership','Efficiency','Decisiveness'],car:['Executive','Attorney','Consultant'], extra: {
          quote: 'Your time is limited, so don\'t waste it living someone else\'s life.',
          author: 'Steve Jobs',
          intro: 'Commanders (ENTJs) are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Efficient:</strong> Sees inefficiency as a barrier to their goals.</li>
                      <li><strong>Energetic:</strong> Drives tasks and responsibilities forward with intense vigor.</li>
                      <li><strong>Self-Confident:</strong> Expresses opinions directly and trusts their leadership abilities.</li>
                      <li><strong>Strong-Willed:</strong> Never gives up in the face of hardship, always moving toward their goals.</li>
                      <li><strong>Strategic Thinker:</strong> Examines every angle of a problem and successfully executes large plans.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Stubborn and Dominant:</strong> Tends to try and win every argument by dismissing others' opinions.</li>
                      <li><strong>Impatient and Intolerant:</strong> Dislikes ideas that distract from their goal or are emotionally driven.</li>
                      <li><strong>Arrogant:</strong> Looks down on those who fail to match their pace.</li>
                      <li><strong>Poor Handling of Emotions:</strong> Struggles to express their own emotions and understand others'.</li>
                      <li><strong>Cold and Ruthless:</strong> Illogically dismisses personal circumstances while trying to achieve their goals.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p class="res-quote">"Taking personal responsibility to ensure the relationship moves smoothly, they strive to make it equally satisfying for both partners."</p>
                <p>ENTJs approach love strategically. They prefer to take the lead in relationships and constantly encourage their partners to bring out their best self.</p>
                <p>However, understanding emotions isn't their strong suit, and trying to control the partner early in the relationship can lead to issues.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>In friendships, they seek personal growth and mutual encouragement. They deeply enjoy sharp debates to present their thoughts. The best way to earn their respect is by intelligently challenging their ideas.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>ENTJ parents are excellent at recognizing and nurturing their children's innate talents. They work hard to raise children who are independent and logical thinkers.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>The professional field is where they shine the brightest. High executive roles and entrepreneurship fit them perfectly. Once they envision a clear future, they can overcome any obstacle to achieve it.</p>
              `
            }
          ],
          facts: {
            strength: 'Efficiency, strategic thinking, and an unbreakable will.',
            weakness: 'Stubbornness, impatience, and difficulty managing emotions.',
            humor: 'Has a sharp intellect, though sometimes shows a cold or rough sense of humor.',
            relations: 'Strong relationships built on personal growth and mutual goals.'
          },
          figures: {
            real: [
              {name:'Steve Jobs', img:'', desc:'Co-founder of Apple. A leader with unmatched vision and strict self-discipline.'},
              {name:'Gordon Ramsay', img:'', desc:'A famous ENTJ known for ruthlessly criticizing inefficiency.'},
              {name:'Margaret Thatcher', img:'', desc:'Former British Prime Minister. A highly determined leader.'},
              {name:'Franklin D. Roosevelt', img:'', desc:'Guided the nation through crises with unbreakable self-confidence.'}
            ],
            fictional: [
              {name:'Tony Stark', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=TonyStark', desc:'Charismatic and extremely confident in his abilities.'},
              {name:'Tywin Lannister', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Tywin', desc:'A cold and powerful leader who values power, efficiency, and strategic victories.'},
              {name:'Harvey Specter', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Harvey', desc:'A legal genius known for powerful communication and unyielding nature.'}
            ],
            anime: [
              {name:'Erwin Smith', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Erwin', desc:'A highly charismatic commander willing to make hard decisions for a common goal.'},
              {name:'Madara Uchiha', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Madara', desc:'An unparalleled leader determined to change the world according to his vision.'},
              {name:'Bibi Dong', img:'https://api.dicebear.com/7.x/bottts/svg?seed=BibiDong', desc:'A leader who uses strategic thinking to unify an empire.'}
            ]
          }
        }}, 
      ENTP:{name:'The Debater',cat:'analyst',catName:'ANALYST',desc:'Smart and curious thinkers who love intellectual challenges.',str:['Intelligence','Quick thinking','Adaptability'],car:['Entrepreneur','Lawyer','Journalist'], extra: {
          quote: 'Follow the path of the unsafe, independent thinker. Expose your ideas to the dangers of controversy.',
          author: 'Thomas J. Watson',
          intro: 'Debaters (ENTPs) are bold, creative, and capable of deconstructing and rebuilding new ideas with incredibly high mental agility.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Quick Thinkers:</strong> Easily jumps from one idea to another with minimal effort.</li>
                      <li><strong>Original:</strong> Discards traditional methods in favor of bold new concepts.</li>
                      <li><strong>Excellent Brainstormers:</strong> Examines problems from every angle to offer new opportunities.</li>
                      <li><strong>Charismatic:</strong> Possesses a unique way with words that naturally attracts others.</li>
                      <li><strong>Energetic:</strong> Works tirelessly to solve problems that interest them.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Very Argumentative:</strong> Questions others' beliefs purely as a mental exercise.</li>
                      <li><strong>Insensitive:</strong> Often misjudges others' feelings during debates.</li>
                      <li><strong>Intolerant:</strong> Completely dismisses those who present illogical ideas.</li>
                      <li><strong>Difficulty Focusing:</strong> Abandons tasks midway while chasing new thoughts.</li>
                      <li><strong>Dislike for Practical Matters:</strong> Loses interest when it comes to daily execution steps.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>ENTPs can be incredibly exciting yet highly challenging partners. They strongly dislike monotony in relationships.</p>
                <p>They must realize that emotional understanding, sensitivity, and compromise are critical to maintaining a strong relationship.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>They express friendship through debates and discussions. They love having friends who challenge their opinions and aren't afraid to disagree.</p>
                <p>When a friend is feeling down, attempting to offer logical solutions rather than comfort can sometimes cause resentment.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>ENTP parents give their children maximum freedom to explore the world independently. They teach their kids to view things objectively and logically.</p>
                <p>However, when children enter adolescence, ENTP parents may find emotional outbursts very confusing.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>They thrive in any environment that allows them to direct their mental energy and create new approaches using innovative ideas. They are highly successful as lawyers, software engineers, and systems analysts.</p>
              `
            }
          ],
          facts: {
            strength: 'Rapid thinking, creativity, and unmatched energy.',
            weakness: 'Argumentative, insensitive, and struggles with focus.',
            humor: 'Quick wit with a sharp, sarcastic sense of humor.',
            relations: 'Relationships based on intelligent debates and the exchange of novel ideas.'
          },
          figures: {
            real: [
              {name:'Mark Twain', img:'', desc:'A writer who questioned social norms through sharp satirical writing.'},
              {name:'Thomas Edison', img:'', desc:'An inventor eager to test new ideas despite thousands of failures.'},
              {name:'Celine Dion', img:'', desc:'A singer known for her charismatic and lively stage presence.'},
              {name:'Socrates', img:'', desc:'A Greek philosopher who challenged societal norms with intelligent debate.'}
            ],
            fictional: [
              {name:'Jack Sparrow', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JackSparrow', desc:'An unbound character with quick wit and a distinct sense of humor.'},
              {name:'The Joker', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Joker', desc:'A highly intelligent figure who deconstructs and questions normal structures.'},
              {name:'Tyrion Lannister', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Tyrion', desc:'Engages in intellectual wordplay using his sharp linguistic skills.'},
              {name:'Jim Halpert', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JimHalpert', desc:'Dislikes monotony and constantly looks for humor in an easygoing way.'}
            ],
            anime: [
              {name:'Osamu Dazai', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Dazai', desc:'A sharp mind that can instantly grasp the core of any complex issue.'},
              {name:'Edward Elric', img:'https://api.dicebear.com/7.x/bottts/svg?seed=EdwardElric', desc:'Quickly analyzes scientific theories and challenges established laws.'},
              {name:'Ryuk', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Ryuk', desc:'Dislikes boredom and views the world from a different angle purely for entertainment.'}
            ]
          }
        }}, 
      INFJ:{name:'The Advocate',cat:'diplomat',catName:'DIPLOMAT',desc:'Quiet and mystical, yet inspiring idealists.',str:['Empathy','Vision','Creative insight'],car:['Counselor','Writer','Psychologist'], extra: {
          quote: 'Treat people as if they were what they ought to be and you help them to become what they are capable of being.',
          author: 'Johann Wolfgang Von Goethe',
          intro: 'Advocates (INFJs) are individuals who approach life with deep thought and high imagination. Their inner vision, personal values, and quiet, principled dedication to humanity guide everything they do.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Insightful:</strong> Capable of seeing beyond the surface to grasp deeper truths and true intentions.</li>
                      <li><strong>Principled:</strong> Holds strong beliefs and values, especially regarding ethics.</li>
                      <li><strong>Passionate:</strong> Pursues high goals fearlessly and always seeks true purpose.</li>
                      <li><strong>Altruistic:</strong> Dedicated to using their strengths for the greater good of society.</li>
                      <li><strong>Creative:</strong> Loves thinking outside the box and expressing ideas freely.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Sensitive to Criticism:</strong> Finds it hard to tolerate when their core principles are questioned.</li>
                      <li><strong>Reluctant to Open Up:</strong> Prefers to keep their personal life and mental struggles private.</li>
                      <li><strong>Perfectionistic:</strong> Struggles to accept practical flaws and messiness in the real world.</li>
                      <li><strong>Avoiding the Ordinary:</strong> Often fails to break down grand dreams into manageable daily steps.</li>
                      <li><strong>Prone to Burnout:</strong> Neglects their own rest and health while helping others.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p class="res-quote">"Love comes more naturally to the human heart than its opposite." — Nelson Mandela</p>
                <p>INFJs always seek depth and meaning in love. They are rarely satisfied with ordinary connections not based on true love. They desire emotional, soulful, and spiritual bonds with their partners.</p>
                <p>In relationships, they are loving, protective, honest, and highly perceptive. They strive for personal growth and constantly work to strengthen their bond.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p class="res-quote">"The most I can do for my friend is simply be his friend." — Henry David Thoreau</p>
                <p>They find no satisfaction in shallow, superficial friendships. They only need a few close friends who truly understand and accept them. Once formed, they are incredibly loyal and caring friends.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>The primary goal of INFJ parents is to raise independent, noble children filled with good qualities. They focus heavily on building their children's emotional intelligence and kindness.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p class="res-quote">"Go out and do something. It isn’t your room that’s a prison, it’s yourself." — Sylvia Plath</p>
                <p>When making career decisions, they look for the ability to connect meaningfully with others and achieve personal fulfillment. They are deeply dissatisfied if a job lacks a deeper sense of purpose. They thrive as counselors, psychologists, teachers, social workers, and writers.</p>
              `
            }
          ],
          facts: {
            strength: 'Sharp intuition, altruism, and idealistic vision.',
            weakness: 'Sensitivity to criticism and prone to burnout.',
            humor: 'Quiet, but has a very deep and meaningful sense of humor.',
            relations: 'Relationships that demand a soul-level connection and total honesty.'
          },
          figures: {
            real: [
              {name:'Martin Luther King Jr.', img:'https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg', desc:'A leader who advocated for justice through immense empathy.'},
              {name:'Nelson Mandela', img:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nelson_Mandela.jpg', desc:'A leader dedicated to principles and equality.'},
              {name:'Mother Teresa', img:'https://upload.wikimedia.org/wikipedia/commons/b/b3/Mother_Teresa_1985_cropped.jpg', desc:'Dedicated her life to the selfless service of the helpless.'},
              {name:'Lady Gaga', img:'https://upload.wikimedia.org/wikipedia/commons/d/d1/Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg', desc:'An artist who uses her creativity to voice the struggles of the oppressed.'}
            ],
            fictional: [
              {name:'Albus Dumbledore', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Dumbledore', desc:'A leader with deep wisdom and visionary foresight.'},
              {name:'Aragorn', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Aragorn', desc:'A silent hero who lovingly leads his group for a common goal.'},
              {name:'Atticus Finch', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Atticus', desc:'A lawyer who stands for justice based purely on conscience and morals.'},
              {name:'Professor X', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfessorX', desc:'A mentor who fights for peace and equality using empathy.'}
            ],
            anime: [
              {name:'Itachi Uchiha', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Itachi', desc:'Secretly sacrificed his entire life for the peace he believed in.'},
              {name:'Armin Arlert', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Armin', desc:'Finds solutions using profound empathy and intelligence.'},
              {name:'Izuku Midoriya', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Deku', desc:'An idealistic character whose sole life mission is helping others.'}
            ]
          }
        }}, 
      INFP:{name:'The Mediator',cat:'diplomat',catName:'DIPLOMAT',desc:'Poetic, kind, and altruistic people.',str:['Compassion','Creativity','Idealism'],car:['Writer','Artist','Musician'], extra: {
          quote: 'All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost.',
          author: 'J. R. R. Tolkien',
          intro: 'Mediators (INFPs) are quiet, open-minded, and highly imaginative individuals. They apply a deeply caring and creative approach to everything they do.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>High Empathy:</strong> Has a unique ability to feel the emotions of others as their own.</li>
                      <li><strong>Generosity:</strong> Loves sharing their happiness and valuables with others.</li>
                      <li><strong>Open-Minded:</strong> Accepts people without quick judgments.</li>
                      <li><strong>Creativity:</strong> Looks at everything from entirely new, non-traditional perspectives.</li>
                      <li><strong>Idealistic:</strong> Constantly strives to do the right thing according to their conscience.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Unrealistic:</strong> Becomes frustrated when the real world doesn't match their dreams.</li>
                      <li><strong>Self-Isolating:</strong> Hesitant to open up or make new friends.</li>
                      <li><strong>Unfocused:</strong> Gets lost in a sea of ideas, delaying actual work.</li>
                      <li><strong>Emotionally Vulnerable:</strong> Absorbs others' negative emotions.</li>
                      <li><strong>Self-Critical:</strong> Blames themselves when unable to reach their own idealistic standards.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>INFPs enter the world of love with high expectations and ideals. They aren't looking for just a partner, but a true soulmate.</p>
                <p>When truly in love, they are fiercely loyal and caring. They utilize all their creativity to make their partner feel truly special.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>They value quality over quantity in friendships. They seek deep bonds where they can share their greatest hopes and dreams without fear of judgment.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>INFP parents are incredibly loving, protective, and open-minded. They strive to give their children maximum freedom to grow with their own independent identities.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>Rather than a job just to pay bills, they want a career that offers maximum personal fulfillment. Writing, acting, music, and counseling suit them perfectly.</p>
              `
            }
          ],
          facts: {
            strength: 'High empathy, creativity, and an idealistic vision.',
            weakness: 'Unrealistic, socially isolated, and highly self-critical.',
            humor: 'Poetic and subtle, yet very lively among close ones.',
            relations: 'Deep romantic relationships seeking a true soulmate.'
          },
          figures: {
            real: [
              {name:'J. R. R. Tolkien', img:'https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg', desc:'Author of The Lord of the Rings, a true INFP with marvelous imagination.'},
              {name:'William Shakespeare', img:'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg', desc:'The greatest playwright who revealed human emotions through metaphors.'},
              {name:'Princess Diana', img:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Princess_Diana_1997_%28cropped%29.jpg', desc:'Respected worldwide for her deep empathy and kind heart.'},
              {name:'Keanu Reeves', img:'https://upload.wikimedia.org/wikipedia/commons/9/90/Keanu_Reeves_%282019%29.jpg', desc:'A beloved actor who values humility and altruism over fame.'}
            ],
            fictional: [
              {name:'Frodo Baggins', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Frodo', desc:'An idealistic character who quietly sacrificed for a grand mission.'},
              {name:'Luna Lovegood', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna', desc:'A deeply honest, open-minded character living in her own beautiful world.'},
              {name:'Amélie Poulain', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Amelie', desc:'A quiet character striving to bring happiness to others through creative tricks.'},
              {name:'Belle', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Belle', desc:'A sensitive character who sees the true nature within rather than outer appearances.'}
            ],
            anime: [
              {name:'Kaneki Ken', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kaneki', desc:'A highly sensitive character who tries to internalize all pain.'},
              {name:'Gaara', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Gaara', desc:'An idealistic leader who learned true love and empathy to protect his people.'},
              {name:'Alphonse Elric', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Alphonse', desc:'An incredibly kind mediator who always helps others in need.'}
            ]
          }
        }}, 
      ENFJ:{name:'The Protagonist',cat:'diplomat',catName:'DIPLOMAT',desc:'Charismatic and inspiring leaders.',str:['Leadership','Empathy','Communication'],car:['Teacher','Diplomat','HR Manager'], extra: {
          quote: 'When the whole world is silent, even one voice becomes powerful.',
          author: 'Malala Yousafzai',
          intro: 'Protagonists (ENFJs) are incredibly warm, honest, and straightforward individuals who love helping others. With strong ideals, they apply their creative energy to achieve their dreams.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Charismatic:</strong> Highly skilled at inspiring people and guiding them toward a common goal.</li>
                      <li><strong>Reliable:</strong> Successfully fulfills promises and responsibilities to the very end.</li>
                      <li><strong>Receptive:</strong> Accepts differing opinions, giving them space to be expressed.</li>
                      <li><strong>Altruistic:</strong> Constantly driven to stand up for the helpless.</li>
                      <li><strong>Passionate:</strong> Works energetically and shows interest in various fields.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Unrealistic:</strong> Suffers mental exhaustion from trying to solve all the world's problems alone.</li>
                      <li><strong>Overly Idealistic:</strong> Becomes deeply shocked when others violate core principles.</li>
                      <li><strong>Condescending:</strong> Their desire to teach can sometimes be seen as talking down to others.</li>
                      <li><strong>Overly Empathetic:</strong> Takes on others' problems as their own, losing mental peace.</li>
                      <li><strong>Intense:</strong> Tends to heavily pressure others to change.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>In matters of the heart, ENFJs express incredibly intense emotions. Believing in the beauty of true love, they won't stop until they find their soulmate.</p>
                <p>They dislike dating games and aren't afraid to make the first move. They work tirelessly to support their partner in achieving their grand dreams.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>ENFJs put in dedicated effort to stay close to their friends. They enjoy surrounding themselves with a large circle of friends with varying traits and views.</p>
                <p>They are incredibly reliable in any difficult situation. However, they must learn not to be discouraged when friends don't follow their advice.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>The primary mission for ENFJ parents is helping their children grow into the best possible people. They deeply instill strong human values and personal responsibility.</p>
                <p>They have high expectations for their children but must ensure these don't turn into overwhelming pressure.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>ENFJs gain maximum mental satisfaction by helping others. They excel in Human Resources, teaching, counseling, and public relations.</p>
                <p>They constantly seek to witness the real, positive impact their work has on society.</p>
              `
            }
          ],
          facts: {
            strength: 'Charismatic leadership, unbreakable altruism, and sharp empathy.',
            weakness: 'Unrealistic, mental exhaustion from overexerting for others.',
            humor: 'Has a very warm sense of humor that constantly encourages and brings smiles.',
            relations: 'Takes on leadership and responsibility in relationships, seeking a soulmate.'
          },
          figures: {
            real: [
              {name:'Malala Yousafzai', img:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Malala_Yousafzai_2015.jpg', desc:'An idealistic leader who spoke out for education rights despite death threats.'},
              {name:'Barack Obama', img:'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg', desc:'A leader who inspired an entire nation with fluent communication.'},
              {name:'Oprah Winfrey', img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Oprah_Winfrey_2018.jpg', desc:'A media host dedicated to changing lives through empathy.'},
              {name:'Martin Luther King Jr.', img:'https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg', desc:'A leader who united millions for a single goal through noble principles.'}
            ],
            fictional: [
              {name:'Morpheus', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Morpheus', desc:'An idealistic leader who recognized others\' true potential and guided them.'},
              {name:'Judy Hopps', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JudyHopps', desc:'An optimistic character who fights against social injustice.'},
              {name:'Katara', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Katara', desc:'A strong character fighting fearlessly for justice and the rights of the helpless.'},
              {name:'Atticus Finch', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=AtticusFinch', desc:'An exemplary lawyer who showed the value of equality through action.'}
            ],
            anime: [
              {name:'Tang San', img:'https://api.dicebear.com/7.x/bottts/svg?seed=TangSan', desc:'An idealistic leader who protects friends and guides them to success.'},
              {name:'All Might', img:'https://api.dicebear.com/7.x/bottts/svg?seed=AllMight', desc:'A noble hero who inspired a new generation as the symbol of peace.'},
              {name:'Rengoku Kyojuro', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Rengoku', desc:'A hero who dedicated his life to the responsibility of protecting the weak.'}
            ]
          }
        }}, 
      ENFP:{
        name:'The Campaigner',
        cat:'diplomat', catName:'DIPLOMAT',
        desc:'Enthusiastic, creative, and sociable free spirits.',
        str:['Energy','Creativity','Inspiration'],
        car:['Journalist','Writer','Entrepreneur'],
        extra: {
          quote: 'It doesn\'t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart\'s longing.',
          author: 'Oriah Mountain Dreamer',
          intro: 'Campaigners (ENFPs) are true free spirits. They are often the life of the party, but they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Curious:</strong> They can find beauty and fascination in nearly anything.</li>
                      <li><strong>Observant:</strong> They believe that there are no irrelevant actions, shifting their focus to others\' emotions easily.</li>
                      <li><strong>Energetic & Enthusiastic:</strong> They form new connections constantly and share their infectious joy.</li>
                      <li><strong>Excellent Communicators:</strong> They can talk their way out of anything with their natural charm.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Overthinking:</strong> They tend to read too much into things and overanalyze simple behaviors.</li>
                      <li><strong>Easily Stressed:</strong> Their deep sensitivity to others\' emotions can leave them feeling overwhelmed.</li>
                      <li><strong>Highly Emotional:</strong> They can have intense emotional reactions to criticism or tension.</li>
                      <li><strong>Poor Practical Skills:</strong> Routine administration and follow-through are significant struggles.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>Campaigners view relationships as a joyous process of mutual exploration and imagination. They are passionate and dedicate themselves fully to their partners.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>As friends, they are cheerful and supportive. They easily connect with various personality types and love deep, meaningful conversations.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>They are playful and creative parents who encourage their children to explore and learn with a strong sense of wonder.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>They thrive in roles that allow them to explore new ideas and help others, such as writing, journalism, acting, and counseling.</p>
              `
            }
          ],
          facts: {
            strength: 'Boundless imagination, deep empathy, and infectious enthusiasm.',
            weakness: 'Overthinking and difficulty with strict routines.',
            humor: 'Playful, quirky, and deeply imaginative.',
            relations: 'Seeks deep, soulful connections and avoids superficiality.'
          },
          figures: {
            real: [
              {name:'Robin Williams', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=RobinW', desc:'A legendary comedian who brought boundless energy and imagination.'},
              {name:'RM (Kim Nam-joon)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=RM', desc:'An inspiring, thoughtful leader and creative artist.'},
              {name:'Will Smith', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=WillS', desc:'A highly charismatic and enthusiastic actor.'},
              {name:'Kelly Clarkson', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=KellyC', desc:'A deeply expressive singer who connects emotionally with her audience.'}
            ],
            fictional: [
              {name:'Michael Scott', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelS', desc:'A fun-loving, highly imaginative character who values connection.'},
              {name:'Spider-Man', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=SpiderMan', desc:'A quick-witted, empathetic hero who values saving others.'},
              {name:'Willy Wonka', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Wonka', desc:'An eccentric creator full of wonder and endless possibilities.'},
              {name:'Phil Dunphy', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=PhilD', desc:'An enthusiastic, deeply caring individual who loves fun.'}
            ],
            anime: [
              {name:'Kaori Miyazono', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kaori', desc:'A free-spirited musician who inspires others with her passion.'},
              {name:'Camie Utsushimi', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Camie', desc:'A highly talkative and open-minded character.'},
              {name:'Son Goku', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Goku', desc:'An incredibly energetic and deeply optimistic hero.'}
            ]
          }
        }
      },
      ISTJ:{name:'The Logistician',cat:'sentinel',catName:'SENTINEL',desc:'Practical and fact-minded individuals.',str:['Reliability','Organization','Duty'],car:['Accountant','Financial Analyst','Civil Servant'], extra: {
          quote: 'I would be more frightened by not using whatever abilities I\'d been given. I\'d be more frightened by procrastination and laziness.',
          author: 'Denzel Washington',
          intro: 'Logisticians (ISTJs) are quiet, firm, and approach life from a very logical and practical perspective. They meticulously plan their actions and follow them through methodically to successful completion.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Honest and Direct:</strong> Strongly opposes mind games and lies.</li>
                      <li><strong>Highly Disciplined:</strong> Fulfills their responsibilities and promises regardless of the situation.</li>
                      <li><strong>Very Responsible:</strong> Willingly works day and night for the organizations they are tied to.</li>
                      <li><strong>Calm and Practical:</strong> Makes rational and practical decisions in the face of any obstacle.</li>
                      <li><strong>Organized and Efficient:</strong> Works at maximum capacity by following clear rules.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Stubborn:</strong> Dislikes accepting new ideas not supported by hard facts.</li>
                      <li><strong>Insensitive:</strong> Their direct words can hurt the feelings of others.</li>
                      <li><strong>By the Book:</strong> Hesitant to bend rules or try new experiments.</li>
                      <li><strong>Judgmental:</strong> Tends to criticize those who make impulsive decisions.</li>
                      <li><strong>Prone to Burnout:</strong> Gets exhausted from taking all responsibilities upon themselves.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>ISTJs are extremely responsible and 100% reliable partners in romantic relationships. They reject blind dates or dating games.</p>
                <p>Once stable commitments and promises are established in the relationship, they strictly adhere to them for the rest of their lives.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>A true ISTJ friend is an extremely loyal, 100% trustworthy, and honorable companion who will stay by your side in any situation. They express their friendship through practical actions rather than words.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>ISTJ parents work to raise their children as respected members of both the family and society. They create a highly stable and structured environment for their children.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>They focus the most on building a highly stable and strong long-term career. They are highly successful as military officers, lawyers, accountants, and data analysts.</p>
              `
            }
          ],
          facts: {
            strength: 'Honesty, high discipline, efficiency, and being extremely responsible.',
            weakness: 'Stubbornness, working strictly by the book, and insensitivity.',
            humor: 'Though serious, they have a dry humor they enjoy sharing with close ones.',
            relations: 'Seeks traditional, stable, and 100% trustworthy bonds.'
          },
          figures: {
            real: [
              {name:'Denzel Washington', img:'https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg', desc:'A true ISTJ maintaining strict self-discipline and high professional ethics.'},
              {name:'George Washington', img:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', desc:'First US President who valued law, fairness, and high personal discipline.'},
              {name:'Angela Merkel', img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Angela_Merkel_July_2010_-_2.jpg', desc:'Former Chancellor of Germany who made steady decisions under crisis, favoring facts.'},
              {name:'Natalie Portman', img:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg', desc:'An actress known for her meticulousness and dedication to responsibilities.'}
            ],
            fictional: [
              {name:'Hermione Granger', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Hermione', desc:'A perfect ISTJ who follows rules strictly and relies on facts and information.'},
              {name:'Ned Stark', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=NedStark', desc:'An honorable leader who stood for high morality and duty.'},
              {name:'Spock', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Spock', desc:'A character who makes decisions based purely on logic and facts.'},
              {name:'Inspector Javert', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Javert', desc:'A strict officer who sees duty and law as the highest ideals.'}
            ],
            anime: [
              {name:'Mikasa Ackerman', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Mikasa', desc:'A fighter who shows unbreakable loyalty to her loved ones.'},
              {name:'Tenya Iida', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Iida', desc:'An extremely systematic student leader who follows school rules strictly.'},
              {name:'Byakuya Kuchiki', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Byakuya', desc:'A commander whose sole mission is to protect ancient traditions and laws.'}
            ]
          }
        }},
      ISFJ:{name:'The Defender',cat:'sentinel',catName:'SENTINEL',desc:'Warm and caring protectors.',str:['Warmth','Reliability','Sensitivity'],car:['Doctor','Teacher','Social Worker']},
      ESTJ:{name:'The Executive',cat:'sentinel',catName:'SENTINEL',desc:'Excellent administrators and managers.',str:['Management','Organization','Reliability'],car:['Manager','Attorney','Financial Officer']},
      ESFJ:{name:'The Consul',cat:'sentinel',catName:'SENTINEL',desc:'Extremely caring and social individuals.',str:['Sociability','Warmth','Reliability'],car:['Teacher','Healthcare Worker','HR Manager']},
      ISTP:{name:'The Virtuoso',cat:'explorer',catName:'EXPLORER',desc:'Practical and pragmatic problem solvers.',str:['Practicality','Flexibility','Skill'],car:['Engineer','Pilot','Mechanic']},
      ISFP:{name:'The Adventurer',cat:'explorer',catName:'EXPLORER',desc:'Flexible and charming artists.',str:['Artistic talent','Warmth','Flexibility'],car:['Artist','Musician','Photographer'], extra: {
          quote: 'I change during the course of a day. I wake and I\'m one person, and when I go to sleep I know for certain I\'m somebody else.',
          author: 'Bob Dylan',
          intro: 'Adventurers (ISFPs) are true artists. For them, life is a canvas used to express their true selves. Their explorative nature and ability to find joy in everyday moments makes them incredibly fascinating.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Charming:</strong> Their "live and let live" attitude makes them naturally likable and popular.</li>
                      <li><strong>Sensitive to Others:</strong> Easily relate to others' emotions, helping them establish harmony and minimize conflict.</li>
                      <li><strong>Imaginative:</strong> Uses creativity and insight to craft bold ideas that speak to people's hearts.</li>
                      <li><strong>Passionate:</strong> Beneath their quiet exterior lies an intensely feeling heart.</li>
                      <li><strong>Kind and Encouraging:</strong> Creates a safe space for others to express themselves freely.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Difficulty with Structure:</strong> Freedom of expression is their top priority; strict rules feel oppressive.</li>
                      <li><strong>Unpredictable:</strong> Dislikes long-term commitments and planning for the future.</li>
                      <li><strong>Easily Stressed:</strong> When situations get out of control, they can quickly lose their charm and become highly stressed.</li>
                      <li><strong>Difficulty with Technical Problem-Solving:</strong> Prefers to observe rather than fix mechanical or technical issues.</li>
                      <li><strong>Fluctuating Self-Esteem:</strong> Rejection can severely impact them, leading to self-doubt.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>ISFPs carefully protect their sensitive inner core. They prefer to listen rather than express their own feelings with words. They show their love through spontaneous, practical acts of affection.</p>
                <p>They always need to feel that exciting anticipation of "what's next?". Forcing them into long-term commitments too early can push them away.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>In friendships, ISFPs are relaxed and spontaneous. They don't complicate things with arguments or long-term plans; the "here and now" is what matters.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>ISFP parents create a non-judgmental, safe environment where their children can freely express themselves. They love surprising their kids with spontaneous activities and adventures.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>For ISFPs, a job is not enough; they need creative freedom. They shine as artists, musicians, photographers, designers, and in freelance or consulting roles where they can make the world beautiful.</p>
              `
            }
          ],
          facts: {
            strength: 'Creativity, sensitivity, and extreme adaptability.',
            weakness: 'Lack of long-term planning and vulnerability to stress.',
            humor: 'Gentle, lighthearted, and never at the expense of others.',
            relations: 'Warm, spontaneous connections based on mutual freedom.'
          },
          figures: {
            real: [
              {name:'Bob Dylan', img:'https://upload.wikimedia.org/wikipedia/commons/1/18/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg', desc:'A legendary songwriter who valued creative freedom above all else.'},
              {name:'Michael Jackson', img:'https://upload.wikimedia.org/wikipedia/commons/9/90/Michael_Jackson_1984.jpg', desc:'A deeply sensitive artist who poured his inner emotions into his art.'},
              {name:'Frida Kahlo', img:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg', desc:'Expressed her life experiences and pain powerfully through painting.'},
              {name:'Audrey Hepburn', img:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Audrey_Hepburn_1956.jpg', desc:'Maintained a humble, independent persona while dedicating herself to helping others.'}
            ],
            fictional: [
              {name:'Harry Potter', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HarryP', desc:'A selfless and deeply feeling hero who acts according to his own conscience.'},
              {name:'Belle', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Belle', desc:'Favors exploring her own passions and knowledge over conforming to traditions.'},
              {name:'Pocahontas', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Pocahontas', desc:'A free-spirited character with a deep connection to nature and exploration.'},
              {name:'Jon Snow', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JonSnow', desc:'A quiet, sensitive adventurer driven by a profound sense of duty and conscience.'}
            ],
            anime: [
              {name:'Tanjiro Kamado', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Tanjiro', desc:'A kind-hearted boy with an incredible capacity for empathy and caring.'},
              {name:'Yona', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Yona', desc:'A leader who grows by independently exploring the world despite great hardships.'},
              {name:'Wei Wuxian', img:'https://api.dicebear.com/7.x/bottts/svg?seed=WeiWuxian', desc:'A highly creative free spirit who relentlessly challenges rigid traditional rules.'}
            ]
          }
        }},
      ESTP:{name:'The Entrepreneur',cat:'explorer',catName:'EXPLORER',desc:'Smart, energetic, and perceptive individuals.',str:['Energy','Practicality','Risk-taking'],car:['Entrepreneur','Athlete','Paramedic'], extra: {
          quote: 'Life is either a daring adventure or nothing at all.',
          author: 'Helen Keller',
          intro: 'Entrepreneurs (ESTPs) are highly enthusiastic, energetic, and perceptive people who love to live life on the edge. They are action-oriented individuals who excel at navigating whatever situation is in front of them.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Bold:</strong> They enjoy pushing boundaries and discovering new things.</li>
                      <li><strong>Rational and Practical:</strong> They prefer to turn knowledge into actionable solutions rather than engaging in endless philosophical debates.</li>
                      <li><strong>Perceptive:</strong> They easily notice small changes in habits, appearances, or situations.</li>
                      <li><strong>Direct:</strong> They communicate clearly with factual, straightforward questions and answers.</li>
                      <li><strong>Sociable:</strong> Their natural charm and energy make them excellent networkers and leaders.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Insensitive:</strong> Feelings often take a backseat to facts and practicality.</li>
                      <li><strong>Impatient:</strong> They struggle to focus on one thing for long and dislike waiting for others to catch up.</li>
                      <li><strong>Impulsive:</strong> They tend to make snap decisions without fully considering the long-term consequences.</li>
                      <li><strong>May Miss the Bigger Picture:</strong> Because they live in the moment, they can lose sight of the overarching plan.</li>
                      <li><strong>Defiant:</strong> They strongly dislike being boxed in by strict rules, regulations, or repetitive tasks.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>ESTPs aren't the type to spend days pining for future milestones like marriage. They see life as a fun, surprise-filled journey and prefer to live in the present moment.</p>
                <p>Their spontaneity makes them incredibly exciting dating partners, though transitioning into deeper emotional intimacy can sometimes be a challenge for them.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>An ESTP is the life of any party. They are energetic and highly sociable, effortlessly moving from group to group, making new friends through shared activities and sports.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>Fun-loving, flexible, and understanding, ESTP parents genuinely enjoy spending time with their children. They encourage hands-on exploration and give their kids a lot of freedom.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>They are excellent at thinking on their feet. Competitive, high-pressure environments like sales, marketing, and business negotiations suit them perfectly, as do emergency response roles.</p>
              `
            }
          ],
          facts: {
            strength: 'Boldness, sharp perception, and unmatched sociability.',
            weakness: 'Impulsiveness, impatience, and a tendency to ignore rules.',
            humor: 'Direct, down-to-earth, and highly engaging.',
            relations: 'Exciting, action-packed bonds focused on the present moment.'
          },
          figures: {
            real: [
              {name:'Ernest Hemingway', img:'https://upload.wikimedia.org/wikipedia/commons/2/28/ErnestHemingway.jpg', desc:'A renowned author who lived a highly adventurous, action-oriented life.'},
              {name:'Jack Nicholson', img:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jack_Nicholson_2001.jpg', desc:'An actor known for his bold, direct, and charismatic personality.'},
              {name:'Madonna', img:'https://upload.wikimedia.org/wikipedia/commons/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg', desc:'A fearless, unpredictable artist who always commands attention.'},
              {name:'Samuel L. Jackson', img:'https://upload.wikimedia.org/wikipedia/commons/2/29/SamuelLJackson.jpg', desc:'Famous for his direct, energetic, and highly expressive acting roles.'}
            ],
            fictional: [
              {name:'Jaime Lannister', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JaimeL', desc:'A bold warrior who often makes impulsive decisions and takes risks.'},
              {name:'Han Solo', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HanSolo', desc:'An adventurer who solves problems practically and has little regard for rules.'},
              {name:'Arthur Curry (Aquaman)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Aquaman', desc:'An independent hero who prefers direct action over traditional structures.'},
              {name:'Thor', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Thor', desc:'A warrior who favors physical action and battles over careful planning.'}
            ],
            anime: [
              {name:'Inosuke Hashibira', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Inosuke', desc:'A highly competitive character who charges headfirst into any situation.'},
              {name:'Katsuki Bakugo', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Bakugo', desc:'An impulsive, action-oriented hero who relies on his immense physical drive.'},
              {name:'Revy', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Revy', desc:'A pragmatic fighter who lives entirely in the present moment.'}
            ]
          }
        }},
      ESFP:{name:'The Entertainer',cat:'explorer',catName:'EXPLORER',desc:'Spontaneous, energetic, and enthusiastic people.',str:['Energy','Charm','Sociability'],car:['Actor','Musician','Event Planner'], extra: {
          quote: 'Live every second without hesitation.',
          author: 'Elton John',
          intro: 'Entertainers (ESFPs) love vibrant experiences, engaging with people, and discovering new things. They get caught up in the excitement of the moment, and want everyone else to feel that way, too.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>Strengths</h4>
                    <ul>
                      <li><strong>Bold:</strong> They aren't known for holding back. They want to experience everything there is to experience.</li>
                      <li><strong>Original:</strong> Traditions and expectations are secondary to them. They love experimenting with new styles and constantly find new ways to stick out.</li>
                      <li><strong>Positive & Enthusiastic:</strong> They have a naturally upbeat attitude and infectious enthusiasm that draws people to them.</li>
                      <li><strong>Excellent People Skills:</strong> They love paying attention to people, and they are talkative, witty, and almost never run out of things to discuss.</li>
                      <li><strong>Observant:</strong> They focus on the present, picking up on tangible, real-world changes that others might miss.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>Weaknesses</h4>
                    <ul>
                      <li><strong>Sensitive:</strong> They are highly emotional and very vulnerable to criticism.</li>
                      <li><strong>Conflict-Averse:</strong> They sometimes ignore and avoid conflict entirely rather than addressing it head-on.</li>
                      <li><strong>Easily Bored:</strong> Without constant excitement, they can easily turn to risky behavior or self-indulgence.</li>
                      <li><strong>Poor Long-Term Planners:</strong> They rarely make detailed plans for the future.</li>
                      <li><strong>Unfocused:</strong> Anything that requires long-term dedication and focus is a particular challenge for them.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'Romantic Relationships',
              content: `
                <p>ESFPs are social, fun-loving, and free-spirited individuals who live entirely in the moment. They bring this same enthusiasm to dating and romantic relationships.</p>
                <p>They see relationships not as foundations for the future, but as unpredictable experiences that should be enjoyed as long as the excitement lasts.</p>
              `
            },
            {
              title: 'Friendships',
              content: `
                <p>Entertainers are famous for their vibrant and enthusiastic attitudes. They love sharing their pleasure, humor, style, and optimism with their friends.</p>
              `
            },
            {
              title: 'Parenthood',
              content: `
                <p>They are highly relaxed, fun-loving parents who genuinely enjoy playing with their children and exploring the world together without strict rules or schedules.</p>
              `
            },
            {
              title: 'Career Paths',
              content: `
                <p>ESFPs excel in careers where they can work with others and avoid strict, repetitive tasks. They make great event planners, sales representatives, tour guides, and artists.</p>
              `
            }
          ],
          facts: {
            strength: 'Charisma, sociability, and an incredible aesthetic sense.',
            weakness: 'Vulnerability to criticism and avoidance of long-term planning.',
            humor: 'Loud, physical, and deeply engaging.',
            relations: 'Fun-filled, passionate, and focused on the present moment.'
          },
          figures: {
            real: [
              {name:'Elton John', img:'https://upload.wikimedia.org/wikipedia/commons/3/30/Elton_John_2011_Shankbone_2.JPG', desc:'A highly creative musician known for his flamboyant style and stage presence.'},
              {name:'Marilyn Monroe', img:'https://upload.wikimedia.org/wikipedia/commons/4/4e/MarilynMonroe_-_Yank_Army_Weekly.jpg', desc:'An iconic actress whose natural charm and charisma captured the world\'s attention.'},
              {name:'Jamie Oliver', img:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Jamie_Oliver_by_David_Shankbone.jpg', desc:'A chef famous for his hands-on approach and ability to connect with people.'},
              {name:'Adele', img:'https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png', desc:'A deeply expressive artist known for her vibrant, fun-loving personality off-stage.'}
            ],
            fictional: [
              {name:'Han Solo', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HanSolo', desc:'A bold, spontaneous character who relies on his charm and practical skills.'},
              {name:'Pippin Took', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Pippin', desc:'A highly sociable hobbit who always seeks out fun, food, and excitement.'},
              {name:'The Joker', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Joker', desc:'Demonstrates an extreme, theatrical desire to be the center of attention.'},
              {name:'Captain Jack Sparrow', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JackSparrow', desc:'An unpredictable, charming adventurer who lives entirely in the moment.'}
            ],
            anime: [
              {name:'Naruto Uzumaki', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Naruto', desc:'A highly energetic, friendly character who is always moving forward.'},
              {name:'Monkey D. Luffy', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Luffy', desc:'A free spirit who loves experiencing new things and cherishes his friends.'},
              {name:'Usagi Tsukino', img:'https://api.dicebear.com/7.x/bottts/svg?seed=SailorMoon', desc:'An emotional, friendly character who loves fashion and being with others.'}
            ]
          }
        }}
    },
    questions: [
      {dim:'EI', text:'You regularly make new friends.', agree:'E', disagree:'I'},
      {dim:'SN', text:'Complex and novel ideas excite you more than simple and straightforward ones.', agree:'N', disagree:'S'},
      {dim:'TF', text:'You usually feel more persuaded by what resonates emotionally with you than by factual arguments.', agree:'F', disagree:'T'},
      {dim:'JP', text:'Your living and working spaces are clean and organized.', agree:'J', disagree:'P'},
      {dim:'AT', text:'You usually stay calm, even under a lot of pressure.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'You find the idea of networking or promoting yourself to strangers very daunting.', agree:'I', disagree:'E'},
      {dim:'SN', text:'You prioritize practical, straightforward approaches to gathering information.', agree:'S', disagree:'N'},
      {dim:'TF', text:'You focus primarily on solving the problem at hand.', agree:'T', disagree:'F'},
      {dim:'JP', text:'You prefer planning ahead and having things organized.', agree:'J', disagree:'P'},
      {dim:'AT', text:'You rarely worry about whether you make a good impression on people you meet.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'Meeting new people is exciting and stimulating.', agree:'E', disagree:'I'},
      {dim:'SN', text:'You often spend time exploring unrealistic yet intriguing ideas.', agree:'N', disagree:'S'},
      {dim:'TF', text:'You prioritize facts over people’s feelings when determining a course of action.', agree:'T', disagree:'F'},
      {dim:'JP', text:'You often allow the day to unfold without any schedule at all.', agree:'P', disagree:'J'},
      {dim:'AT', text:'You rarely feel insecure.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'You enjoy participating in team-based activities.', agree:'E', disagree:'I'},
      {dim:'SN', text:'You enjoy experimenting with new and untested approaches.', agree:'N', disagree:'S'},
      {dim:'TF', text:'You prioritize being sensitive over being completely honest.', agree:'F', disagree:'T'},
      {dim:'SN', text:'You actively seek out new experiences and knowledge areas to explore.', agree:'N', disagree:'S'},
      {dim:'AT', text:'You are prone to worrying that things will take a turn for the worse.', agree:'Tr', disagree:'A'},
      {dim:'EI', text:'You enjoy solitary hobbies or activities more than group ones.', agree:'I', disagree:'E'},
      {dim:'SN', text:'You cannot imagine yourself writing fictional stories for a living.', agree:'S', disagree:'N'},
      {dim:'TF', text:'You favor efficiency in decisions, even if it means disregarding some emotional aspects.', agree:'T', disagree:'F'},
      {dim:'JP', text:'You prefer to do your chores before allowing yourself to relax.', agree:'J', disagree:'P'},
      {dim:'TF', text:'In disagreements, you prioritize proving your point over preserving the feelings of others.', agree:'T', disagree:'F'},
      {dim:'EI', text:'You usually wait for others to introduce themselves first at social gatherings.', agree:'I', disagree:'E'},
      {dim:'AT', text:'Your mood can change very quickly.', agree:'Tr', disagree:'A'},
      {dim:'TF', text:'You are not easily swayed by emotional arguments.', agree:'T', disagree:'F'},
      {dim:'JP', text:'You often end up doing things at the last possible moment.', agree:'P', disagree:'J'},
      {dim:'SN', text:'You enjoy debating ethical dilemmas.', agree:'N', disagree:'S'},
      {dim:'EI', text:'You usually prefer to be around others rather than on your own.', agree:'E', disagree:'I'},
      {dim:'SN', text:'You become bored or lose interest when the discussion gets highly theoretical.', agree:'S', disagree:'N'},
      {dim:'TF', text:'When facts and feelings conflict, you usually find yourself following your heart.', agree:'F', disagree:'T'},
      {dim:'JP', text:'You find it challenging to maintain a consistent work or study schedule.', agree:'P', disagree:'J'},
      {dim:'AT', text:'You rarely second-guess the choices that you have made.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'Your friends would describe you as lively and outgoing.', agree:'E', disagree:'I'},
      {dim:'SN', text:'You are drawn to various forms of creative expression, such as writing.', agree:'N', disagree:'S'},
      {dim:'TF', text:'You usually base your choices on objective facts rather than emotional impressions.', agree:'T', disagree:'F'},
      {dim:'JP', text:'You like to have a to-do list for each day.', agree:'J', disagree:'P'},
      {dim:'AT', text:'You rarely doubt your own abilities.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'You avoid making phone calls.', agree:'I', disagree:'E'},
      {dim:'SN', text:'You enjoy exploring unfamiliar ideas and viewpoints.', agree:'N', disagree:'S'},
      {dim:'EI', text:'You can easily connect with people you have just met.', agree:'E', disagree:'I'},
      {dim:'JP', text:'If your plans are interrupted, your top priority is to get back on track as soon as possible.', agree:'J', disagree:'P'},
      {dim:'AT', text:'You are still bothered by mistakes that you made a long time ago.', agree:'Tr', disagree:'A'},
      {dim:'SN', text:'You are not too interested in discussing theories on what the world could look like in the future.', agree:'S', disagree:'N'},
      {dim:'AT', text:'Your emotions control you more than you control them.', agree:'Tr', disagree:'A'},
      {dim:'TF', text:'When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.', agree:'F', disagree:'T'},
      {dim:'JP', text:'Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.', agree:'P', disagree:'J'},
      {dim:'AT', text:'When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.', agree:'Tr', disagree:'A'},
      {dim:'EI', text:'You would love a job that requires you to work alone most of the time.', agree:'I', disagree:'E'},
      {dim:'SN', text:'You believe that pondering abstract philosophical questions is a waste of time.', agree:'S', disagree:'N'},
      {dim:'EI', text:'You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.', agree:'E', disagree:'I'},
      {dim:'TF', text:'If a decision feels right to you, you often act on it without needing further proof.', agree:'F', disagree:'T'},
      {dim:'AT', text:'You often feel overwhelmed.', agree:'Tr', disagree:'A'},
      {dim:'JP', text:'You complete things methodically without skipping over any steps.', agree:'J', disagree:'P'},
      {dim:'SN', text:'You prefer tasks that require you to come up with creative solutions rather than follow concrete steps.', agree:'N', disagree:'S'},
      {dim:'TF', text:'You are more likely to rely on emotional intuition than logical reasoning when making a choice.', agree:'F', disagree:'T'},
      {dim:'JP', text:'You struggle with deadlines.', agree:'P', disagree:'J'},
      {dim:'AT', text:'You feel confident that things will work out for you.', agree:'A', disagree:'Tr'}
    ]
  },
  si: {
    badge: 'නොමිලේ පෞරුෂත්ව පරීක්ෂණය',
    footerText: 'නිර්මාණය <a href="https://brainstorm.lk" target="_blank">brainstorm.lk</a> / <a href="https://edutechminds.com" target="_blank">edutechminds.com</a>',
    title1: 'ඔබේ සැබෑ',
    title2: 'පෞරුෂය හඳුනාගන්න',
    subtitle: 'ප්‍රශ්න 60කට පිළිතුරු දී ඔබේ පෞරුෂත්ව වර්ගය සොයාගන්න. ඔබේ වෘත්තීය මාර්ගය, සබඳතා සහ ජීවන රටාව පිළිබඳ ගැඹුරු අවබෝධයක් ලබාගන්න.',
    step1: 'පරීක්ෂණයට පිළිතුරු දෙන්න',
    step2: 'සවිස්තරාත්මක ප්‍රතිඵල බලන්න',
    step3: 'ඔබේ විභවය හඳුනාගන්න',
    startBtn: 'පරීක්ෂණය අරඹන්න',
    agree: 'එකඟයි',
    disagree: 'එකඟ නොවේ',
    agreeText: 'මම මෙම ප්‍රකාශයට එකඟයි',
    disagreeText: 'මම මෙම ප්‍රකාශයට එකඟ නොවේ',
    likertSA: 'ශක්තිමත්ව එකඟයි',
    likertA: 'එකඟයි',
    likertSLA: 'මඳක් එකඟයි',
    likertN: 'මධ්‍යස්ථයි',
    likertSLD: 'මඳක් එකඟ නොවේ',
    likertD: 'එකඟ නොවේ',
    likertSD: 'ශක්තිමත්ව එකඟ නොවේ',
    modeModalTitle: 'පරීක්ෂණ මාදිලිය තෝරන්න',
    modeModalSub: 'ඔබේ පෞරුෂත්ව විශ්ලේෂණයේ ගැඹුර තෝරාගන්න.',
    modeQuickTitle: 'කෙටි පරීක්ෂණය',
    modeQuickDesc: 'විනාඩි 5ක වේගවත් විශ්ලේෂණයක්. ඉක්මන් අවබෝධයක් සඳහා සුදුසුය.',
    modeDeepTitle: 'ගැඹුරු පරීක්ෂණය',
    modeDeepDesc: 'විනාඩි 10ක සවිස්තරාත්මක විශ්ලේෂණයක්. වෘත්තීය සහ පෞද්ගලික සංවර්ධන කටයුතු සඳහා නිර්දේශ කෙරේ.',
    cancelBtn: 'අවලංගු කරන්න',
    loveCompatibility: 'ආදර ගැළපීම් සහ සහයෝගීතාවය',
    malePartner: 'ගැළපෙනම පිරිමි සහකරු',
    femalePartner: 'ගැළපෙනම ගැහැණු සහකාරිය',
    qCount: 'ප්‍රශ්නය',
    loading1: 'ඔබේ පෞරුෂය විශ්ලේෂණය කරමින්...',
    loading2: 'පිළිතුරු සැසඳීම සිදුවේ...',
    retake: 'නැවත පරීක්ෂණය කරන්න',
    viewTypesBtn: 'සියලුම පෞරුෂත්ව වර්ග 16',
    viewMatrixBtn: 'ගැළපුම් පැනලය',
    matrixTitle: 'පෞරුෂත්ව සහයෝගීතා ගැළපුම් පැනලය',
    matrixSubtitle: 'විවිධ පෞරුෂත්වයන් අතර වෘත්තීය සහයෝගීතාව, ආදර සබඳතා සහ මිත්‍රත්වයේ ගැළපීම සජීවීව විශ්ලේෂණය කරන්න.',
    typeA: 'පෞරුෂත්ව වර්ගය A',
    typeB: 'පෞරුෂත්ව වර්ගය B',
    synergyScore: 'සහයෝගීතා ලකුණු',
    workplaceTab: 'වෘත්තීය සහයෝගීතාව',
    romanticTab: 'ආදර සබඳතාව',
    friendshipTab: 'මිත්‍රත්වයේ බැඳීම',
    cognitiveOverlap: 'ප්‍රජානන අතිච්ඡාදනය (Venn රූපය)',
    overlapDesc: 'Venn රූපය මඟින් පෞරුෂත්වයන් අතර ඇති පොදු චින්තන රටා සහ සංකල්පීය ගැළපීම නිරූපණය වේ.',
    conflictTitle: 'ගැටුම් ඇතිවිය හැකි අවස්ථා සහ විසඳුම්',
    tipsTitle: 'සබඳතා සාර්ථක කර ගැනීමට ප්‍රායෝගික උපදෙස්',
    teamBuilderTab: 'කණ්ඩායම් සාදන්නා',
    teamBuilderDesc: 'කණ්ඩායම් සාමාජිකයින්ගේ නම් සහ පෞරුෂත්ව වර්ග එකතු කර සමස්ත කණ්ඩායමේ රසායනික ගැළපීම සහ කළමනාකරණ උපදෙස් ලබාගන්න.',
    memberNamePlaceholder: 'සාමාජිකයාගේ නම ඇතුළත් කරන්න',
    addMemberBtn: 'කණ්ඩායමට එක් කරන්න',
    teamRoster: 'කණ්ඩායම් සාමාජිකයින්',
    calcTeamBtn: 'කණ්ඩායම් රසායනය විශ්ලේෂණය කරන්න',
    teamSynergyReport: 'සාමූහික කණ්ඩායම් රසායන වාර්තාව',
    teamSynergyScore: 'සාමූහික කණ්ඩායම් සහයෝගීතාව',
    teamStrengths: 'කණ්ඩායම් ශක්තීන් සහ අනන්‍යතාව',
    teamFriction: 'කණ්ඩායම් ගැටුම් සහ කළමනාකරණ උපදෙස්',
    noMembers: 'තවමත් සාමාජිකයින් එක් කර නොමැත. අවම වශයෙන් සාමාජිකයින් දෙදෙනෙකු එක් කරන්න!',
    viewGrowthBtn: 'වෘත්තීය සංවර්ධනය',
    viewCognitionBtn: 'පෞරුෂත්ව කැන්වසය',
    canvasTitle: 'සජීවී පෞරුෂත්ව කැන්වසය',
    canvasSubtitle: 'පෞරුෂත්ව දර්ශක වෙනස් කරමින් ඔබේ සජීවී ජ්‍යාමිතික හැඩය වෙනස් වන ආකාරය නරඹන්න.',
    canvasNamePlaceholder: 'කාඩ්පත සඳහා ඔබේ නම ඇතුළත් කරන්න...',
    downloadCardBtn: 'ID කාඩ්පත බාගත කරන්න',
    currentMatchLabel: 'වත්මන් ගැළපීම',
    sliderMind: 'මනස: බහිර්වර්තී සහ අන්තර්වර්තී (E vs I)',
    sliderEnergy: 'ශක්තිය: සංවේදී සහ සහජ බුද්ධිය (S vs N)',
    sliderNature: 'ස්වභාවය: තර්කානුකූල සහ සංවේදනීය (T vs F)',
    sliderTactics: 'උපාය: විනිශ්චයකාරී සහ ගවේෂණාත්මක (J vs P)',
    sliderIdentity: 'අනන්‍යතාව: ස්ථාවර සහ කැළඹිලි සහගත (A vs T)',
    growthTitle: 'වෘත්තීය සහ පෞද්ගලික සංවර්ධන කේන්ද්‍රය',
    growthSubtitle: 'ඔබේ පෞරුෂත්වයට ගැළපෙන වෘත්තීය මාවත් ගවේෂණය කරන්න, දුර්වලතා මඟහැරීමට පුරුදු පුහුණු වන්න, සහ රැකියා ස්ථානයේ සන්නිවේදනය දියුණු කරගන්න.',
    growthSelectType: 'පෞරුෂත්ව පැතිකඩ තෝරන්න',
    strengthsLeverage: 'ප්‍රයෝජනයට ගත හැකි ශක්තීන්',
    weaknessesFix: 'මඟහරවා ගත යුතු දුර්වලතා',
    habitTrackerTitle: 'දෛනික පුරුදු ලුහුබැඳීම',
    habitTrackerProgress: 'දෛනික ප්‍රගතිය',
    careerRoadmapTitle: 'වෘත්තීය සංවර්ධන සිතියම',
    careerDetailTitle: 'රැකියා විස්තර සහ කුසලතා',
    survivalGuideTitle: 'කාර්යාලීය පැවැත්මේ මාර්ගෝපදේශය',
    survivalGuideSub: 'ඔබේ ප්‍රධානියාගේ හෝ සගයාගේ පෞරුෂත්ව වර්ගය තෝරා සන්නිවේදන ක්‍රමෝපායන් ජනනය කරගන්න.',
    dutiesLabel: 'දෛනික රාජකාරි',
    skillsLabel: 'අවශ්‍ය කුසලතා',
    viewUniverseBtn: 'පෞරුෂත්ව විශ්වය',
    universeTitle: 'ප්‍රබන්ධ සහ ඇනිමේ පෞරුෂත්ව විශ්වය',
    universeSubtitle: 'ප්‍රසිද්ධ ප්‍රබන්ධ සහ ඇනිමේ චරිතවල පෞරුෂත්ව දර්ශක ගවේෂණය කරන්න, සසඳන්න, සහ ඔබේ ගැළපීම පරීක්ෂා කරන්න.',
    searchPlaceholder: 'චරිත සොයන්න...',
    compareMeBtn: 'මා සමඟ සසඳන්න',
    similarityTitle: 'සමානතා ගැළපීම',
    charTypeLabel: 'චරිතයේ වර්ගය',
    myTypeLabel: 'මගේ වර්ගය',
    franchiseAll: 'සියලුම විශ්වයන්',
    franchiseNaruto: 'නරුටෝ විශ්වය',
    franchiseMarvel: 'මාවල් විශ්වය',
    franchiseDC: 'ඩීසී / බැට්මෑන් විශ්වය',
    franchiseStarWars: 'ස්ටාර් වෝර්ස්',
    franchiseBreakingBad: 'බ්‍රේකින් බෑඩ්',
    franchiseOther: 'වෙනත් ප්‍රබන්ධ',
    catAll: 'සියලුම කාණ්ඩ',
    battleTitle: 'චරිත සටන සහ ගැළපීම',
    battleSub: 'ඔබේ පෞරුෂත්ව දර්ශක මෙම චරිතය සමඟ කෙතරම් දුරට ගැළපේද?',
    closeBtn: 'සටන අවසන් කරන්න',
    soulmateMatch: 'අතිශය ගැළපෙන ආත්මීය මිතුරන්! (පරිපූර්ණ එකඟතාවය)',
    friendMatch: 'හොඳ සහයෝගී මිත්‍රත්වයක් (සමබර රසායනය)',
    neutralMatch: 'වෙනස් මාන දෙකක පිහිටීමක් (කුතුහලය දනවන වෙනස්කම්)',
    strengths: 'ඔබේ ශක්තීන්',
    careers: 'යෝජිත වෘත්තීන්',
    quickFacts: 'කෙටි තොරතුරු',
    mainStrength: 'ප්‍රධාන ශක්තිය',
    mainWeakness: 'ප්‍රධාන දුර්වලතාව',
    humor: 'හාස්‍යය',
    relations: 'සබඳතා',
    famousFigures: 'ප්‍රසිද්ධ පුද්ගලයන්',
    realFigures: 'සැබෑ ලෝකයේ පුද්ගලයන්',
    fictionalFigures: 'ප්‍රබන්ධ චරිත',
    animeFigures: 'ඇනිමේ චරිත',
    dimEI: ['එක්ස්ට්‍රෝවර්ට්','ඉන්ට්‍රෝවර්ට්'],
    dimSN: ['සෙන්සින්','ඉන්ටියුෂන්'],
    dimTF: ['සිතීම','හැඟීම'],
    dimJP: ['තීරණය','පරීක්ෂණය'],
    dimAT: ['ස්ථාවර','අස්ථාවර'],
    dimLabels: {EI:'මනස: එක්ස්ට්‍රෝවර්ට් සහ ඉන්ට්‍රෝවර්ට්',SN:'ශක්තිය: සෙන්සින් සහ ඉන්ටියුෂන්',TF:'ස්වභාවය: සිතීම සහ හැඟීම',JP:'උපාය: තීරණය සහ පරීක්ෂණය',AT:'අනන්‍යතාව: ස්ථාවර සහ අස්ථාවර'},
    
    typesTitle: 'පෞරුෂත්ව වර්ග',
    categories: {
      analyst: { name: "විශ්ලේෂකයින්", traits: "Intuitive (N) සහ Thinking (T)", desc: "තර්කානුකූල බව, අපක්ෂපාතීත්වය සහ බුද්ධිමය විශිෂ්ටත්වය සඳහා ප්‍රසිද්ධ පෞරුෂත්ව වර්ග." },
      diplomat: { name: "රාජ්‍යතාන්ත්‍රිකයින්", traits: "Intuitive (N) සහ Feeling (F)", desc: "සහකම්පනය, රාජ්‍යතාන්ත්‍රික කුසලතා සහ දැඩි පරමාදර්ශී බව සඳහා ප්‍රසිද්ධ පෞරුෂත්ව වර්ග." },
      sentinel: { name: "ආරක්ෂකයින්", traits: "Observant (S) සහ Judging (J)", desc: "ප්‍රායෝගික බව සහ පිළිවෙළ, ආරක්ෂාව සහ ස්ථාවරත්වය කෙරෙහි දක්වන අවධානය සඳහා ප්‍රසිද්ධ පෞරුෂත්ව වර්ග." },
      explorer: { name: "ගවේෂකයින්", traits: "Observant (S) සහ Prospecting (P)", desc: "ස්වයංසිද්ධ බව, නව නිපැයුම් හැකියාව සහ නම්‍යශීලී බව සඳහා ප්‍රසිද්ධ පෞරුෂත්ව වර්ග." }
    },
    types: {
      INTJ:{
        name:'නිර්මාපකයා (The Architect)',
        cat:'analyst', catName:'විශ්ලේෂක',
        desc:'සෑම දෙයකටම සැලසුමක් ඇති උපායමාර්ගික චින්තකයෝය. ඔබ ස්වාධීන, නිර්මාණශීලී සහ ඔබේ දැක්ම සාක්ෂාත් කර ගැනීමේ නොපසුබට උත්සාහයකින් යුක්තය.',
        str:['උපායමාර්ගික චින්තනය','ස්වාධීනත්වය','නිර්මාණශීලී ගැටලු විසඳීම','දැඩි අධිෂ්ඨානය','දිගුකාලීන සැලසුම්කරණය'],
        car:['උපායමාර්ග විශ්ලේෂක','විද්‍යාඥ','ඉංජිනේරු'],
        extra: {
          quote: 'මිනිසාගේ ශ්‍රේෂ්ඨත්වය රැඳී තිබෙන්නේ ඔහුගේ චින්තනය මතය. මිනිසා යනු ස්වභාවධර්මයේ ඇති දුර්වලම බට ගසක් වැනි ය, නමුත් ඔහු සිතන්නට හැකි බට ගසකි.',
          author: 'බ්ලේස් පැස්කල් (Blaise Pascal)',
          intro: 'INTJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Architects) යනු සබුද්ධික, තර්කානුකූල සහ අතිශය කුතුහලයකින් යුත් පිරිසකි. ඔවුන් ජීවිතයේ සෑම අංශයකටම නිර්මාණශීලිත්වය සහ තාර්කිකත්වය එකසේ ගළපමින් කටයුතු කරන අතර, තමන් උනන්දුවක් දක්වන ඕනෑම විෂයක් පිළිබඳව උපරිම ප්‍රවීණත්වයක් ලබා ගැනීමට නිරන්තරයෙන් වෙහෙසෙති.',
          sections: [
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>තර්කානුකූල වීම:</strong> ඕනෑම අභියෝගයක් තම තර්කන කුසලතා වර්ධනය කර ගැනීමට ලැබෙන අවස්ථාවක් ලෙස දකියි.</li>
                      <li><strong>මනා දැනුවත්භාවය:</strong> පර්යේෂණ සහ විශ්ලේෂණ මත පදනම්ව නිවැරදි, සාක්ෂි සහිත මතයන් ගොඩනඟයි.</li>
                      <li><strong>ස්වාධීනත්වය:</strong> සාම්ප්‍රදායික රාමුවලට කොටු නොවී ස්වයං-ප්‍රේරිතව කටයුතු කරයි.</li>
                      <li><strong>දැඩි අධිෂ්ඨානය:</strong> ඉලක්ක සපුරා ගන්නා තෙක් නොපසුබට උත්සාහයෙන් ක්‍රියා කරයි.</li>
                      <li><strong>කුතුහලය:</strong> සාක්ෂි මත පදනම් වූ ඕනෑම අලුත් අදහසක් පිළිගැනීමට සූදානම්ය.</li>
                      <li><strong>නිර්මාණශීලී අනන්‍යතාව:</strong> දේවල් දෙස අලුත්ම සහ පුදුම සහගත කෝණයකින් බැලීමට සමත් වේ.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>අහංකාර බව:</strong> අධික ආත්ම විශ්වාසය නිසා සමහර විට අන් අයගේ වටිනා උපදෙස් මඟහැරීමට ඉඩ ඇත.</li>
                      <li><strong>හැඟීම් නොසලකා හැරීම:</strong> තර්කයට වඩා හැඟීම් වැදගත් වන අවස්ථා මඟහැරීම.</li>
                      <li><strong>අධික ලෙස විවේචනය කිරීම:</strong> තමන්ගේම නීති මාලාවකට අනුව අන් අය මැනීම නිසා අසාධාරණ විවේචන ඇති විය හැක.</li>
                      <li><strong>වාදයට බර ස්වභාවය:</strong> පවතින නීති රීති සහ සීමාවන් සමඟ නිරන්තරයෙන් වාද විවාදවල පැටලීම.</li>
                      <li><strong>සමාජීය අපහසුතා:</strong> දැඩි තර්කානුකූල ස්වභාවය නිසා සමාජීය සබඳතා පවත්වා ගැනීම අභියෝගයකි.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p class="res-quote">"ප්‍රවේශම් විය යුතු සෑම දෙයක් අතරින්ම, ආදරයේදී දක්වන අධික ප්‍රවේශම් සහගත බව සැබෑ සතුට ලැබීමට ඇති ලොකුම බාධාව විය හැක." — බර්ට්‍රන්ඩ් රසල්</p>
                <p>INTJ පුද්ගලයන් ආදරය දෙස බලන්නේ ඉතාමත් සැලසුම්සහගතවය. හුදෙක් පාලුව මකා ගැනීමට වඩා තමන්ගේ බුද්ධිමය මට්ටමට ගැළපෙන සහකරුවෙකු ඔවුන් අපේක්ෂා කරයි. ව්‍යාජ සබඳතාවලට සහ "ආදර ක්‍රීඩාවලට" ඔවුන් දැඩි ලෙස අකමැතිය.</p>
                <p>දිගුකාලීන සබඳතාවලදී හැඟීම් ප්‍රකාශ කිරීම ඔවුන්ට අභියෝගයකි. සහකරු හැඟීම්බර වන විට එය තාර්කිකව විශ්ලේෂණය කිරීමට යාම නිසා සමහර විට ගැටලු ඇති විය හැක.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p class="res-quote">"සැමටම මිතුරෙකු වන අයෙකු කිසිවෙකුගේවත් සැබෑ මිතුරෙකු නොවේ." — ඇරිස්ටෝටල්</p>
                <p>මොවුන් හුදෙක් පාලුව මකා ගැනීමට මිතුරන් සොයන්නේ නැත. ඔවුන් ඉහළින්ම අගය කරන්නේ බුද්ධිමය ගැඹුරයි. තමන්ගේ මතයන්ට අභියෝග කරන සහ තමන්ව සක්‍රීයව තබන මිතුරන් කෙරෙහි ඔවුන් තුළ දැඩි ගෞරවයක් ඇත.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p class="res-quote">"දරුවන්ට ඉගැන්විය යුත්තේ සිතිය යුත්තේ කුමක්ද කියා නොව, සිතිය යුත්තේ කෙසේද කියාය." — මාග්‍රට් මීඩ්</p>
                <p>INTJ දෙමාපියන්ගේ ප්‍රධානතම අරමුණ වන්නේ තම දරුවන් තනිවම තීරණ ගත හැකි, තර්කානුකූලව සිතිය හැකි ස්වාධීන පුද්ගලයන් ලෙස නිර්මාණය කිරීමයි. ඔවුන් දරුවන්ට උපරිම අවංකභාවයෙන් යුතුව කරුණු පැහැදිලි කර දෙයි.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p class="res-quote">"කෙනෙකු කිසිවිටෙකත් තමන් කර අවසන් කළ දේ දෙස නොබලයි; ඔහු දකින්නේ තවදුරටත් කිරීමට ඉතිරිව ඇති දේ පමණි." — මාරි කියුරි</p>
                <p>මොවුන් රැකියා ස්ථානයේදී උපක්‍රමශීලී බව, අධිෂ්ඨානය සහ කාර්යක්ෂමතාව ඉහළින් අගය කරයි. තනිවම හෝ කුඩා කණ්ඩායමක් සමඟ වැඩ කිරීමට වඩාත් ප්‍රිය කරන මොවුන්, කාර්යාලීය දේශපාලනය සහ ඕපදූප දකින්නේ කාලය නාස්ති කරන වසංගත ලෙසයි.</p>
              `
            }
          ],
          facts: {
            strength: 'උපායමාර්ගික චින්තනය, දැඩි ස්වාධීනත්වය, දැනුම සහ අධිෂ්ඨාන ශක්තිය.',
            weakness: 'අන් අයගේ හැඟීම් තේරුම් ගැනීමට අපහසු වීම, අධික ලෙස විවේචනාත්මක වීම.',
            humor: 'බාහිරින් බැරෑරුම් වුවද, ඉතා තියුණු සහ උපහාසාත්මක (Sarcastic) හාස්‍ය රසයක් ඇත.',
            relations: 'තමන්ගේම ගැඹුරු චින්තනයට ගැළපෙන සහ අවංක පුද්ගලයන් සමඟ පමණක් සමීප සබඳතා පවත්වයි.'
          },
          figures: {
            real: [
              {name:'Elon Musk', img:'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg', desc:'අනාගතවාදී, මූලෝපායික සහ නීති රීති නොතකා තම අරමුණු වෙනුවෙන්ම ක්‍රියා කරන චරිතයකි.'},
              {name:'Mark Zuckerberg', img:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578117%29_%28cropped%29.jpg', desc:'Facebook (Meta) හි නිර්මාතෘ. තාර්කික, සහ දත්ත මත පදනම්ව තීරණ ගන්නා අයෙකි.'},
              {name:'Sir Isaac Newton', img:'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg', desc:'ලොව බිහිවූ ශ්‍රේෂ්ඨතම විද්‍යාඥයෙකි. දැනුම සොයා යාමේ අතිශය දැඩි පිපාසයක් තිබූ චරිතයකි.'},
              {name:'Michelle Obama', img:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg', desc:'ඉතා සංවිධානාත්මක, සැලසුම්සහගත සහ ප්‍රායෝගික නායිකාවකි.'}
            ],
            fictional: [
              {name:'Walter White', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Walter', desc:'Breaking Bad හි සූක්ෂ්ම සැලසුම් සකස් කරන "The Mastermind" පන්නයේ චරිතයකි.'},
              {name:'Batman / Bruce Wayne', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Batman', desc:'හැඟීම්වලට වඩා උපායමාර්ග සහ සැලසුම්වලට මුල් තැන දෙන සුපිරි වීරයෙකි.'},
              {name:'Professor', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Professor', desc:'Money Heist හි සැලසුම් සකසන චරිතයකි.'},
              {name:'Thanos', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Thanos', desc:'දැඩි අධිෂ්ඨානයකින් යුතුව තම සැලසුම් ක්‍රියාත්මක කළ INTJ ස්වභාවයක් පෙන්වයි.'}
            ],
            anime: [
              {name:'Lelouch lamperouge', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Lelouch', desc:'Code Geass හි පසුපස සිට මුළු සේනාවම මෙහෙයවන සුපිරි මූලෝපායඥයෙකි.'},
              {name:'Sasuke Uchiha', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke', desc:'අභ්‍යන්තරවර්තී (Introverted), තමන්ගේම පෞද්ගලික අරමුණක් වෙනුවෙන් කැපවුණු චරිතයකි.'},
              {name:'Tang San', img:'https://api.dicebear.com/7.x/bottts/svg?seed=TangSan', desc:'සතුරන් විශ්ලේෂණය කර උපරිම මූලෝපායික ලෙස භාවිත කරන බුද්ධිමත් නායකයෙකි.'}
            ]
          }
        }
      },
      INTP:{
        name:'තර්කයා (The Logician)',
        cat:'analyst', catName:'විශ්ලේෂක',
        desc:'නව අදහස් හා තාර්කික විශ්ලේෂණය කෙරෙහි ගැඹුරු ආශාවක් දක්වන නිර්මාණශීලී චින්තකයෙකි.',
        str:['ගැඹුරු විශ්ලේෂණය','නිර්මාණශීලී ගැටලු විසඳීම','ස්වාධීන චින්තනය','බුද්ධිමය කුතුහලය','තාර්කික ශක්තිය'],
        car:['පර්යේෂක','ක්‍රමලේඛක','ගණිතඥ','දාර්ශනික','විද්‍යාඥ'],
        extra: {
          quote: 'වැදගත්ම දෙය නම් ප්‍රශ්න කිරීම නතර නොකිරීමයි. කුතුහලයට එහි පැවැත්ම සඳහාම වූ ආවේණික හේතුවක් ඇත.',
          author: 'ඇල්බට් අයින්ස්ටයින් (Albert Einstein)',
          intro: 'INTP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Logicians) තමන් සතු සුවිශේෂී දෘෂ්ටිකෝණය සහ තේජවන්ත බුද්ධිය පිළිබඳව නිරන්තරයෙන් ආඩම්බර වෙති. විශ්වයේ පවතින අභිරහස් පිළිබඳව නිරන්තරයෙන් ගැඹුරින් සිතීමට ඔවුන් පෙළඹෙන අතර, ලොක ඉතිහාසයේ බිහිවූ බලගතුම දාර්ශනිකයන් සහ විද්‍යාඥයන්ගෙන් බහුතරයක් INTP පෞරුෂත්වයෙන් යුක්ත වූවන් වීම පුදුමයක් නොවේ.',
          sections: [
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>විශ්ලේෂණාත්මක මනස:</strong> ඕනෑම දෙයක් ඉතා සියුම්ව විශ්ලේෂණය කර අසාමාන්‍ය රටාවන් හඳුනා ගැනීමට සමත් වේ.</li>
                      <li><strong>නිර්මාණශීලී අනන්‍යතාව:</strong> සාම්ප්‍රදායික නොවන අද්විතීය අදහස් නිර්මාණය කිරීමේ හැකියාව.</li>
                      <li><strong>විවෘත මනස:</strong> නව දැනුම හමුවේ තම මතයන් පවා වෙනස් කර ගැනීමට සූදානම්ය.</li>
                      <li><strong>නිරන්තර කුතුහලය:</strong> විවිධ මාතෘකා පිළිබඳව ගැඹුරින් හැදෑරීමට ඇති දැඩි ආශාව.</li>
                      <li><strong>අවංකභාවය:</strong> මතුපිටින් පෙනෙන දේට වඩා සත්‍යය සොයා යාමට වෙහෙසේ.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>සමාජයෙන් හුදෙකලා වීම:</strong> තමන්ගේම සිතුවිලි ලෝකයේ අතරමං වීම නිසා අන් අයගෙන් වෙන් වී ඇති බවක් හැඟීම.</li>
                      <li><strong>සංවේදී නොවීම:</strong> හැඟීම්වල වටිනාකම මඟහැරීම නිසා රළු පුද්ගලයෙකු ලෙස පෙනී යාම.</li>
                      <li><strong>නිරන්තර අතෘප්තිය:</strong> දැනටමත් සාර්ථක දේවල් පවා නැවත මුල සිට නිර්මාණය කිරීමට යාම.</li>
                      <li><strong>අධික ලෙස සිතීම:</strong> සෑම පැත්තක් ගැනම ඕනෑවට වඩා සිතන්නට යාම නිසා තීරණ ගැනීමට අපහසු වීම (Analysis Paralysis).</li>
                      <li><strong>ඉවසීමක් නොමැතිකම:</strong> තමන් පවසන දේ අන් අයට ඉක්මනින් වටහා ගත නොහැකි විට කලකිරීම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>INTP පුද්ගලයන් සබඳතාවයකදී තමන්ගේ සීමාවන් ලිහිල් කළ පසු ඔවුන් තුළ ඇති සෙල්ලම්කාරී සහ අතිශය නිර්මාණශීලී පැත්ත බාහිරට පෙනේ. ඔවුන්ට අනුව පරිපූර්ණ සහකරුවෙකු යනු තමන්ගේ අදහස්වලට අභියෝග කළ හැකි බුද්ධිමත් අයෙකි.</p>
                <p>ඔවුන් ආදරයේදී වක්‍ර "Mind games" වල නිරත වීමට අකමැති අතර, අසාමාන්‍ය ලෙස සෘජු සහ අවංක වෙති. කෙසේ වෙතත්, තමන්ගේ සෙනෙහස ප්‍රකාශ කිරීම ඔවුන්ට තරමක් අපහසු විය හැක.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p class="res-quote">"සැමටම මිතුරෙකු වන අයෙකු කිසිවෙකුගේවත් සැබෑ මිතුරෙකු නොවේ." — ඇරිස්ටෝටල්</p>
                <p>මොවුන් හුදෙක් පාලුව මකා ගැනීමට මිතුරන් සොයන්නේ නැත. ඔවුන් ඉහළින්ම අගය කරන්නේ බුද්ධිමය ගැඹුරයි. තමන්ගේ මතයන්ට අභියෝග කරන සහ තමන්ව සක්‍රීයව තබන මිතුරන් කෙරෙහි ඔවුන් තුළ දැඩි ගෞරවයක් ඇත.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p class="res-quote">"දරුවන්ට ඉගැන්විය යුත්තේ සිතිය යුත්තේ කුමක්ද කියා නොව, සිතිය යුත්තේ කෙසේද කියාය." — මාග්‍රට් මීඩ්</p>
                <p>INTP දෙමාපියන් තම දරුවන්ට ස්වාධීනව සිතීමට සහ අලුත් දැනුම සොයා යාමට උපරිම නිදහස ලබා දෙයි. ඔවුන් නිවසේ අනවශ්‍ය නීති පනවනවා වෙනුවට ගවේෂණය දිරිමත් කරන පරිසරයක් නිර්මාණය කරයි. දරුවන්ට හැඟීම්බර සහයෝගය ලබා දීම ඔවුන්ට ඇති ලොකුම අභියෝගයයි.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>මොවුන් වඩාත් ආකර්ෂණය වන්නේ විවිධ සිද්ධාන්ත සහ අදහස් පවතින වියුක්ත ක්ෂේත්‍රයන්ටය. ගණිතඥයන්, පර්යේෂකයන් සහ මෘදුකාංග ඉංජිනේරුවන් ලෙස ඔවුන් බෙහෙවින් සාර්ථක වේ. තමන් වෙනුවෙන්ම පනවා ගත් උසස් ප්‍රමිතීන් අනුව වැඩ කරන ඔවුන්, සාමාන්‍ය හෝ මධ්‍යස්ථ මට්ටමේ අයෙකු වීමට අකමැති වෙති.</p>
              `
            }
          ],
          facts: {
            strength: 'විශ්ලේෂණාත්මක හැකියාව, නිර්මාණශීලී බව සහ විවෘත මනස.',
            weakness: 'සමාජයෙන් හුදෙකලා වීම, අධික ලෙස සිතීම සහ ඉවසීමක් නොමැතිකම.',
            humor: 'තියුණු බුද්ධියක් සහ උපහාසාත්මක (Dark/Sarcastic) හාස්‍ය රසයක් ඇත.',
            relations: 'බුද්ධිමය ගැළපීම සහ අවංකභාවය මත පදනම් වූ සීමිත මිත්‍රත්වයන්.'
          },
          figures: {
            real: [
              {name:'Albert Einstein', img:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg', desc:'නිරන්තරයෙන් ප්‍රශ්න කිරීමට සහ විශ්වයේ අභිරහස් සෙවීමට දැඩි කුතුහලයක් දැක්වූ චරිතයකි.'},
              {name:'Bill Gates', img:'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_2013.jpg', desc:'Microsoft හි නිර්මාතෘ. විශ්ලේෂණාත්මක මනසක් ඇති, දත්ත මඟින් ලෝකය වෙනස් කළ අයෙකි.'},
              {name:'Charles Darwin', img:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg', desc:'පරිසරයේ රටාවන් ඉතා සියුම්ව විශ්ලේෂණය කරමින් පරිණාමවාදය හඳුන්වා දුන් විද්‍යාඥයාය.'},
              {name:'Marie Curie', img:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.png', desc:'බාහිර බාධා කිරීම්වලින් තොරව තනිවම අලුත් සොයාගැනීම් කිරීමට ප්‍රිය කළ විද්‍යාඥවරියකි.'}
            ],
            fictional: [
              {name:'Sherlock Holmes', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Sherlock', desc:'තියුණු විශ්ලේෂණාත්මක මනසක් ඇති, හැඟීම්වලට වඩා තර්කයට මුල් තැන දෙන රහස් පරීක්ෂකයා.'},
              {name:'Neo (The Matrix)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Neo', desc:'පවතින යථාර්ථය ප්‍රශ්න කරන, පද්ධතීන් විශ්ලේෂණය කිරීමට දක්ෂ චරිතයකි.'},
              {name:'Bruce Banner (Marvel)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Banner', desc:'විද්‍යාගාරයක් තුළ තනිවම පර්යේෂණ කිරීමට ප්‍රිය කරන බුද්ධිමත් විද්‍යාඥයෙකි.'},
              {name:'Yoda (Star Wars)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Yoda', desc:'මුළු විශ්වයේම ක්‍රියාකාරිත්වය සහ දාර්ශනික සංකල්ප දෙස ගැඹුරු දෘෂ්ටිකෝණයකින් බලන චරිතයකි.'}
            ],
            anime: [
              {name:'L Lawliet', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Lawliet', desc:'ඉතාමත් අවුල් සහගත ගැටලුවල ඇති වාසි අවාසි තර්කානුකූලව සිතා බලන රහස් පරීක්ෂකවරයෙකි.'},
              {name:'Kakashi Hatake', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi', desc:'සටන් බිමේදී සතුරාගේ උපක්‍රම ක්ෂණිකව විශ්ලේෂණය කරන බුද්ධිමත් චරිතයකි.'},
              {name:'Xiao Yan', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Xiao', desc:'අලුත් ක්‍රමවේද පිළිබඳව නිරන්තරයෙන් අත්හදා බැලීම් කරන, තමන්ගේම කොන්දේසි මත වැඩ කරන චරිතයකි.'}
            ]
          }

        }
      },
      ENTJ:{
        name:'අණදෙන නිලධාරියා (The Commander)',
        cat:'analyst', catName:'විශ්ලේෂක',
        desc:'ස්වාභාවික නායකයෙක් හා උපායමාර්ගික බුද්ධියක් දරන පුද්ගලයෙක්.',
        str:['ස්වාභාවික නායකත්වය','උපායමාර්ගික සැලසුම්කරණය','කාර්යක්ෂමතාව','දැඩි අධිෂ්ඨානය','තීරණාත්මක බව'],
        car:['ව්‍යාපාර විධායක','නීතිඥ','කළමනාකරණ උපදේශක','ව්‍යවසායක','මූල්‍ය අධ්‍යක්ෂ'],
        extra: {
          quote: 'ඔබේ කාලය සීමිතය, එබැවින් වෙනත් අයෙකුගේ ජීවිතයක් ජීවත් වෙමින් එය නාස්ති නොකරන්න.',
          author: 'ස්ටීව් ජොබ්ස් (Steve Jobs)',
          intro: 'ENTJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Commanders) යනු ඉතාමත් තීරණාත්මක, නොනැවතී ඉදිරියටම යාමට සහ ජයග්‍රහණ ලැබීමට දැඩි ලෙස ප්‍රිය කරන පිරිසකි. ඔවුහු තමන්ගේ නිර්මාණශීලී දැක්ම ගොඩනැඟීම සඳහා විවිධ තොරතුරු රැස් කරන නමුත්, ඒවා ක්‍රියාත්මක කිරීමේදී කිසිවිටෙකත් ප්‍රමාද වීමට හෝ පසුබට වීමට අකමැති වෙති.',
          sections: [
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>ඉහළ කාර්යක්ෂමතාව:</strong> අකාර්යක්ෂමතාව දකින්නේ තමන්ගේ ඉලක්ක කරා යාමට ඇති බාධාවක් ලෙසයි.</li>
                      <li><strong>ජවයෙන් පිරි උද්‍යෝගිමත් බව:</strong> වගකීම් සහ කාර්යයන් ඉටු කරන්නේ දැඩි ජවයකින් සහ කැපවීමකිනි.</li>
                      <li><strong>ඉහළ ආත්ම විශ්වාසය:</strong> තම මතයන් කෙළින්ම ප්‍රකාශ කරන අතර නායකත්ව හැකියාව ගැන දැඩි විශ්වාසයක් ඇත.</li>
                      <li><strong>නොබිඳෙන අධිෂ්ඨාන ශක්තිය:</strong> දුෂ්කරතා හමුවේ කිසිසේත් පසුබට නොවී තම ඉලක්ක කරාම ගමන් කරයි.</li>
                      <li><strong>උපායමාර්ගික චින්තනය:</strong> ගැටලුවක සෑම පැතිකඩක්ම පරීක්ෂා කර විශාල සැලසුම් සාර්ථකව මෙහෙයවයි.</li>
                      </ul>
                      </div>

                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>මුරණ්ඩු සහ අධිපතිවාදී:</strong> ඕනෑම වාදයකදී තමන්ම ජය ගැනීමට උත්සාහ කරමින් අන් අයගේ අදහස් බැහැර කිරීම.</li>
                      <li><strong>නොයිවසීම සහ දැඩි බව:</strong> තමන්ගේ ඉලක්කයට බාධා වන හෝ හැඟීම්බර පසුබිමක් ඇති අදහස්වලට අකමැත්ත.</li>
                      <li><strong>අහංකාර බව:</strong> තමන්ගේ වේගයට ගැළපෙන්නට අපොහොසත් වන අය දෙස පහත් කොට බැලීම.</li>
                      <li><strong>හැඟීම් කළමනාකරණය:</strong> තමන්ගේ හැඟීම් ප්‍රකාශ කිරීමට මෙන්ම අන් අයගේ හැඟීම් තේරුම් ගැනීමට අපහසු වීම.</li>
                      <li><strong>සීතල සහ අනුකම්පාවෙන් තොර:</strong> ඉලක්ක සපුරා ගැනීමේදී අන් අයගේ පුද්ගලික තත්ත්වයන් අතාර්කික ලෙස සලකා බැහැර කිරීම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p class="res-quote">"සබඳතාවය කොතරම් සුමටව ඉදිරියට යන්නේද යන්න පිළිබඳ පුද්ගලික වගකීම භාර ගන්නා ඔවුන්, දෙදෙනාටම එකසේ සතුටුදායක අත්දැකීමක් ලබා දීමට වෙහෙසෙති."</p>
                <p>ENTJ පුද්ගලයන් ආදරය දෙස බලන්නේද සැලසුම් සහගතවය. ඔවුන් සබඳතාවයේ නායකත්වය ගැනීමට ප්‍රිය කරන අතර, තම සහකරු තුළ සිටින හොඳම පුද්ගලයා බාහිරට ගැනීමට නිරන්තරයෙන් දිරිමත් කරති.</p>
                <p>කෙසේ වෙතත්, අන් අයගේ හැඟීම් වටහා ගැනීම ඔවුන්ට ස්වභාවිකව පිහිටන කුසලතාවක් නොවන බැවින්, සබඳතාවක මුල් කාලයේදී සහකරු පාලනය කිරීමට යාම නිසා ගැටලු ඇති විය හැක.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>මිත්‍රත්වයේදී මොවුන් අපේක්ෂා කරන්නේ පුද්ගලික වර්ධනය සහ අන්‍යෝන්‍ය දිරිගැන්වීමයි. තමන්ගේ සිතුවිලි ඉදිරිපත් කරමින් කරන තියුණු වාද විවාද ඔවුන් බෙහෙවින් රසවිඳිති. ඔවුන්ගේ ගෞරවය දිනා ගැනීමට ඇති හොඳම මඟ ඔවුන්ගේ අදහස්වලට බුද්ධිමත්ව අභියෝග කිරීමයි.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p class="res-quote">"දරුවන්ට ඉගැන්විය යුත්තේ සිතිය යුත්තේ කුමක්ද කියා නොව, සිතිය යුත්තේ කෙසේද කියාය." — මාග්‍රට් මීඩ්</p>
                <p>ENTJ දෙමාපියන් තම දරුවන්ගේ සහජ දක්ෂතා හඳුනාගෙන ඒවා පෝෂණය කිරීමට දක්ෂය. තම දරුවන් ස්වාධීන සහ තර්කානුකූලව සිතිය හැකි පුද්ගලයන් ලෙස හැදී වැඩෙනවා දැකීමට ඔවුහු වෙහෙසෙති.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>වෘත්තීය ක්ෂේත්‍රය යනු මොවුන් තම උපරිම දක්ෂතාවලින් බැබළෙන තලයයි. ආයතනවල ඉහළ විධායක තනතුරු සහ ව්‍යවසායකත්වය මොවුන්ට කදිමට ගැළපේ. අනාගතය පිළිබඳ පැහැදිලි දැක්මක් මවාගෙන එය සාර්ථක කර ගැනීමට ඕනෑම බාධකයක් පරාජය කිරීමට ඔවුහු සමත් වෙති.</p>
              `
            }
          ],
          facts: {
            strength: 'කාර්යක්ෂමතාව, උපායමාර්ගික චින්තනය සහ නොබිඳෙන අධිෂ්ඨානය.',
            weakness: 'මුරණ්ඩු බව, නොයිවසීම සහ හැඟීම් කළමනාකරණයට ඇති අපහසුව.',
            humor: 'තියුණු බුද්ධියක් ඇති නමුත් සමහර විට සීතල හෝ රළු හාස්‍ය රසයක් පෙන්වයි.',
            relations: 'පුද්ගලික වර්ධනය සහ අන්‍යෝන්‍ය අරමුණු මත පදනම් වූ ශක්තිමත් සබඳතා.'
          },
          figures: {
            real: [
              {name:'Steve Jobs', desc:'Apple හි සම-නිර්මාතෘ. අසමසම දූරදර්ශී දැක්මක් සහ දැඩි ස්වයං-විනයක් ඇති නායකයෙකි.'},
              {name:'Gordon Ramsay', desc:'පවතින අකාර්යක්ෂමතාව දුටු සැනින් අනුකම්පාවෙන් තොරව විවේචනය කරන ප්‍රසිද්ධ ENTJ චරිතයකි.'},
              {name:'Margaret Thatcher', desc:'බ්‍රිතාන්‍යයේ හිටපු අගමැතිනිය. දැඩි අධිෂ්ඨානයෙන් යුතුව පෙනී සිටි නායිකාවකි.'},
              {name:'Franklin D. Roosevelt', desc:'අර්බුද හමුවේ නොබිඳෙන ආත්ම විශ්වාසයකින් යුතුව මුළු රටම මෙහෙයවූ අයෙකි.'}
            ],
            fictional: [
              {name:'Tony Stark', desc:'ආකර්ෂණීය (Charismatic), තමන්ගේ හැකියාවන් ගැන උපරිම ආත්ම විශ්වාසයක් ඇති නායකයෙකි.'},
              {name:'Tywin Lannister', desc:'බලය, කාර්යක්ෂමතාවය සහ උපායමාර්ගික ජයග්‍රහණ අගය කරන සීතල සහ බලගතු නායකයෙකි.'},
              {name:'Harvey Specter', desc:'නීති ලෝකය තුළ බලගතු සන්නිවේදනයක් සහ කිසිසේත් යටත් නොවන ස්වභාවයක් පෙන්වන දක්ෂයෙකි.'}
            ],
            anime: [
              {name:'Erwin Smith', desc:'තම සේනාව ඉදිරියේ අතිශය ආකර්ෂණීය සහ පොදු අරමුණ වෙනුවෙන් ඕනෑම දැඩි තීරණයක් ගත හැකි අණදෙන්නෙකි.'},
              {name:'Madara Uchiha', desc:'මුළු ලෝකයම තමන්ගේම දූරදර්ශී දැක්මකට අනුව වෙනස් කිරීමට සැරසෙන අසමසම නායකයෙකි.'},
              {name:'Bibi Dong', desc:'උපායමාර්ගික චින්තනය භාවිත කරමින් මුළු අධිරාජ්‍යයම තමන් යටතේ ඒකාබද්ධ කිරීමට වෙහෙසෙන නායිකාවකි.'}
            ]
          }
        }
      },
      ENTP:{
        name:'විවාදකයා (The Debater)',
        cat:'analyst', catName:'විශ්ලේෂක',
        desc:'බුද්ධිමය අභියෝගවලට ප්‍රිය කරන බුද්ධිමත් සහ කුතුහලයෙන් පිරි චින්තකයෝය.',
        str:['නිර්මාණශීලී බුද්ධිය','බුද්ධිමය කුතුහලය','ක්ෂණික චින්තනය','සන්නිවේදන කුසලතා','නම්‍යශීලී බව'],
        car:['ව්‍යවසායක','නීතිඥ','මාධ්‍යවේදී','නිර්මාණ අධ්‍යක්ෂ','දේශපාලනඥයා'],
        extra: {
          quote: 'අනාරක්ෂිත, ස්වාධීන චින්තකයෙකුගේ මාවත තෝරාගන්න. විවාදාත්මක හා මතභේදාත්මක තත්ත්වයන් නමැති අවදානමට ඔබේ අදහස් විවෘත කරන්න.',
          author: 'තෝමස් ජේ. වොට්සන් (Thomas J. Watson)',
          intro: 'ENTP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Debaters) යනු ඉතාමත් නිර්භීත, නිර්මාණශීලී, මෙන්ම අතිශය ඉහළ මානසික වේගයකින් යුතුව අලුත් අදහස් විග්‍රහ කිරීමට සහ ප්‍රතිසංස්කරණය කිරීමට දක්ෂ පිරිසකි.',
          sections: [
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>වේගවත් චින්තනය:</strong> ඉතා සුළු උත්සාහයකින් එක අදහසක සිට තවත් අදහසක් කරා ක්ෂණිකව මාරු වීමට සමත් වේ.</li>
                      <li><strong>නිර්මාණශීලී අනන්‍යතාව:</strong> සාම්ප්‍රදායික ක්‍රමවේද බැහැර කරමින් නිර්භීත අලුත් සංකල්ප නිර්මාණය කරයි.</li>
                      <li><strong>විශිෂ්ට අදහස් නිෂ්පාදකයින්:</strong> ගැටලුවක් දෙස සෑම කෝණයකින්ම බලා අලුත් අවස්ථා ඉදිරිපත් කරයි.</li>
                      <li><strong>ආකර්ෂණීය පෞරුෂය:</strong> අන් අයව ආකර්ෂණය කරගත හැකි සුවිශේෂී වචන හැසිරවීමේ හැකියාවක් ඇත.</li>
                      <li><strong>ජවයෙන් පිරි උද්‍යෝගය:</strong> උනන්දුවක් දක්වන ගැටලුවක් විසඳීම සඳහා නොනැවතී වෙහෙසෙයි.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>අධික ලෙස වාද විවාදවලට බර වීම:</strong> හුදෙක් මානසික ව්‍යායාමයක් ලෙස අන් අයගේ විශ්වාසයන් ප්‍රශ්න කිරීම.</li>
                      <li><strong>සංවේදී නොවීම:</strong> වාද විවාදවලදී අන් අයගේ හැඟීම් වැරදියට තක්සේරු කිරීම.</li>
                      <li><strong>නොයිවසීම:</strong> තාර්කික නොවන අදහස් ඉදිරිපත් කරන පුද්ගලයන් සම්පූර්ණයෙන්ම බැහැර කිරීම.</li>
                      <li><strong>අවධානය එක තැනක තබා ගැනීමේ අපහසුව:</strong> අලුත් සිතුවිලි පසුපස හඹා යාම නිසා වැඩ අතරමඟ නතර වීම.</li>
                      <li><strong>ප්‍රායෝගික කරුණුවලට ඇති අකමැත්ත:</strong> දිනපතා ක්‍රියාත්මක කිරීමේ පියවරයන් වලදී උනන්දුව ගිලිහී යාම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ENTP පුද්ගලයන් තම සහකරුට එකවරම අතිශය කුල්මත් කරවන සුළු මෙන්ම දැඩි අභියෝගාත්මක සහකරුවෙකු වීමට සමත්ය. ඔවුන් සබඳතාවයක ඇති වන ඒකාකාරීත්වයට (Monotony) දැඩි අකමැත්තක් දක්වති.</p>
                <p>ශක්තිමත් සබඳතාවක් පවත්වා ගැනීම සඳහා හැඟීම්බර අවබෝධය, සංවේදීතාවය සහ එකඟතාවලට පැමිණීම (Compromise) අතිශය වැදගත් බව ඔවුන් වටහා ගත යුතුය.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>මොවුන් මිත්‍රත්වය ප්‍රකාශ කරන්නේම විවිධ වාද විවාද සහ සාකච්ඡා මඟිනි. තමන්ගේ මතයන්ට අභියෝග කරන සහ තමන් සමඟ එකඟ නොවීමට බිය නොවන මිතුරන් සිටිනවාට ඔවුහු බෙහෙවින් ප්‍රිය කරති.</p>
                <p>තමන්ගේ මිතුරෙකු මානසිකව වැටී සිටින අවස්ථාවකදී සැනසීම වෙනුවට තාර්කික විසඳුම් දීමට යාම නිසා සමහර විට මිතුරන් අමනාප විය හැක.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>ENTP දෙමාපියන් තම දරුවන්ට ස්වාධීනව ලෝකය ගවේෂණය කිරීමට අවශ්‍ය උපරිම නිදහස ලබා දෙයි. ඔවුන් තම දරුවන්ට කියා දෙන්නේ දේවල් දෙස අපක්ෂපාතීව සහ තාර්කිකව බැලීමටය.</p>
                <p>දරුවන් යොවුන් වියට පා තබන විට ඔවුන්ගේ හැඟීම් ප්‍රකාශ කිරීම් හමුවේ ENTJ දෙමාපියන් දැඩි ලෙස ව්‍යාකූලත්වයට පත් විය හැක.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>මොවුන් ප්‍රිය කරන්නේ තමන්ගේ මානසික ශක්තිය මෙහෙයවීමට ලැබෙන සහ නව්‍ය අදහස් භාවිත කරමින් අලුත් ප්‍රවේශයන් නිර්මාණය කිරීමට ඉඩ දෙන ඕනෑම රැකියා පරිසරයකටය. නීතිඥයන්, මෘදුකාංග ඉංජිනේරුවන් සහ පද්ධති විශ්ලේෂකයන් ලෙස මොවුන් බෙහෙවින් සාර්ථක වේ.</p>
              `
            }
          ],
          facts: {
            strength: 'වේගවත් චින්තනය, නිර්මාණශීලිත්වය සහ අසමසම ජවය.',
            weakness: 'වාදකාමී බව, සංවේදී නොවීම සහ අවධානය එක තැනක තබා ගැනීමේ අපහසුව.',
            humor: 'ක්ෂණික බුද්ධියක් සහ තියුණු උපහාසාත්මක (Sarcastic) හාස්‍ය රසයක් ඇත.',
            relations: 'බුද්ධිමත් වාද විවාද සහ නව්‍ය අදහස් හුවමාරුව මත පදනම් වූ සබඳතා.'
          },
          figures: {
            real: [
              {name:'Mark Twain', desc:'සමාජ සම්මතයන් තමන්ගේ තියුණු උපහාසාත්මක ලේඛන හරහා ප්‍රශ්න කළ ලේඛකයා.'},
              {name:'Thomas Edison', desc:'අසාර්ථකවීම් දහස් ගණනක් මැද අලුත් අදහස් අත්හදා බැලීමට දැඩි උනන්දුවක් දැක්වූ නව නිපැයුම්කරු.'},
              {name:'Celine Dion', desc:'වේදිකාව මත පෙන්වන ආකර්ෂණීය සහ සජීවී පෞරුෂය නිසා කැපී පෙනෙන ගායන ශිල්පිනිය.'},
              {name:'Socrates', desc:'සමාජ සම්මතයන් ප්‍රශ්න කරමින් බුද්ධිමත් වාද විවාදවල නිරත වූ ග්‍රීක දාර්ශනිකයා.'}
            ],
            fictional: [
              {name:'Jack Sparrow', desc:'කිසිදු රාමුවක් මායිම් නොකරන, ඉතාමත් ක්‍ෂණික බුද්ධියක් සහ හාස්‍ය රසයක් ඇති චරිතයකි.'},
              {name:'The Joker', desc:'සමාජයේ පවතින සාමාන්‍ය ව්‍යුහයන් කැබලිවලට බිඳ දමමින් ඒවා ප්‍රශ්න කරන බුද්ධිමත් චරිතයකි.'},
              {name:'Tyrion Lannister', desc:'තියුණු වචන හැසිරවීමේ හැකියාව භාවිත කරමින් බුද්ධිමත් වචන හරඹවල නිරත වන චරිතයකි.'},
              {name:'Jim Halpert', desc:'ඒකාකාරී ස්වභාවයට අකමැති, නිරන්තරයෙන්ම සිනහවට කරුණු සොයන සැහැල්ලු පෞරුෂයකි.'}
            ],
            anime: [
              {name:'Osamu Dazai', desc:'ඕනෑම සංකීර්ණ ගැටලුවක ඇතුළාන්තය ක්ෂණිකව වටහාගත හැකි තියුණු මනසක් ඇති චරිතයකි.'},
              {name:'Edward Elric', desc:'විද්‍යාත්මක සිද්ධාන්ත ක්ෂණිකව විශ්ලේෂණය කරමින් පවතින නීතිවලට අභියෝග කරන චරිතයකි.'},
              {name:'Ryuk', desc:'ඒකාකාරීත්වයට අකමැති, හුදෙක් තමන්ගේ විනෝදය වෙනුවෙන්ම ලෝකය දෙස වෙනස් කෝණයකින් බලන චරිතයකි.'}
            ]
          }
        }
      },
      INFJ:{
        name:'උපදේශකයා (The Advocate)',
        cat:'diplomat', catName:'දූතයා',
        desc:'නිහඬ සහ අද්භූත, නමුත් ආශ්වාදජනක පරමාදර්ශීහුය. ඔබ ගැඹුරු චින්තනයකින් සහ අන් අයට උපකාර කිරීමේ දැඩි ආශාවකින් යුක්තය.',
        str:['සංවේදනය','පරමාදර්ශී දැක්ම','ප්‍රතිපත්තිගරුක බව','නිර්මාණශීලී බව','දැඩි කැපවීම'],
        car:['උපදේශක','ලේඛක','මනෝවිද්‍යාඥ','ගුරු','සමාජ සේවක'],
        extra: {
          quote: 'මිනිසුන්ට ඔවුන් දැනට සිටින තත්ත්වයට වඩා උසස් ලෙස සලකන්න, එවිට ඔවුන්ට ළඟා විය හැකි උපරිම දක්ෂතාවය කරා යාමට ඔබ ඔවුන්ට උපකාර කරනු ඇත.',
          author: 'ජොහෑන් වුල්ෆ්ගැන්ග් වොන් ගොතේ (Johann Wolfgang Von Goethe)',
          intro: 'INFJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Advocates) යනු ඉතාමත් ගැඹුරු සිතීමේ රටාවකින් සහ ඉහළ පරිකල්පන ශක්තියකින් යුතුව ජීවිතයට ප්‍රවේශ වන පිරිසකි. ඔවුන්ගේ අභ්‍යන්තර දැක්ම (Inner vision), පුද්ගලික වටිනාකම් මෙන්ම මිනිස් සංහතිය කෙරෙහි ඔවුන් තුළ ඇති නිහඬ, ප්‍රතිපත්තිගරුක මානුෂීය ලැදියාව සැමවිටම ඔවුන්ගේ සෑම ක්‍රියාවකටම මඟ පෙන්වයි.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ඉතාමත් පරමාදර්ශී (Idealistic) සහ ප්‍රතිපත්තිගරුක පුද්ගලයන් වන INFJ අය, ජීවිතයේ නිකම්ම කාලය ගත කර දැමීමට අකමැති පිරිසකි — ඔවුන්ට අවශ්‍ය වන්නේ සමාජය වෙනුවෙන් නැඟී සිටිමින් යහපත් වෙනසක් (Make a difference) ඇති කිරීමටය. මෙම කරුණාවන්ත පෞරුෂයන්ට අනුව, සැබෑ සාර්ථකත්වය මැනිය හැක්කේ මුදල් හෝ සමාජ තත්ත්වයන් මත නොවේ; ජීවිතයේ නියම තෘප්තිය සෙවීම, අන් අයට උපකාර කිරීම සහ මේ ලෝකය වඩාත් යහපත් තැනක් කිරීමට දායක වීම තුළිනි.</p>
                <p>මොවුන්ට ඉතා උසස් අරමුණු සහ අභිලාෂයන් තිබුණද, ඔවුන්ව නිකම්ම සිහින මවන්නන් (Idle dreamers) ලෙස වැරදියට වටහා නොගත යුතුය. මෙම පෞරුෂත්ව වර්ගයේ පුද්ගලයන් තමන්ගේ අවංකභාවය සහ සදාචාරය (Integrity) කෙරෙහි දැඩි ලෙස සැලකිලිමත් වන අතර, තමන් නිවැරදි යැයි දන්නා දේ ක්‍රියාවෙන් ඔප්පු කරන තෙක් ඔවුහු කිසිසේත් සෑහීමකට පත් නොවෙති. හෘද සාක්ෂියට එකඟව වැඩ කරන මොවුන්, මුළු ජීවිතය පුරාම තමන්ගේ මූලික වටිනාකම් මනාව ආරක්ෂා කර ගනිති.</p>
              `
            },
            {
              title: 'ජීවිතයේ සැබෑ අරමුණ සෙවීම (Seeking Purpose)',
              content: `
                <p>INFJ යනු ලෝකයේ ඉතාමත් කලාතුරකින් දැකිය හැකි (Uncommon) පෞරුෂත්ව වර්ගයක් බැවින්, තමන් අනෙක් පොදු මිනිසුන්ට වඩා වෙනස් ය යන හැඟීම ඔවුන් තුළ නිරන්තරයෙන්ම පවතී. තමන් සතු පොහොසත් අභ්‍යන්තර ජීවිතය සහ තම ජීවිතයේ නියම අරමුණ සෙවීමට ඔවුන් තුළ ඇති දැඩි ආශාව නිසා, ඔවුන්ට සැමවිටම අවට සිටින පිරිස සමඟ සාමාන්‍ය පරිදි මුසු වීමට අපහසු විය හැක.</p>
                <p>වාසනාවකට මෙන්, මෙම තත්ත්වය මේ ලෝකය වඩාත් යහපත් තැනක් කිරීම සඳහා INFJ අය තුළ ඇති කැපවීම කිසිසේත් අඩු කරන්නේ නැත. ඔවුහු සමාජයේ පවතින අසාධාරණකම් (Injustice) හමුවේ දැඩි ලෙස කම්පාවට පත් වන අතර, තමන්ගේ පුද්ගලික වාසිවලට වඩා පරාර්ථකාමීත්වය (Altruism) කෙරෙහි වැඩි අවධානයක් යොමු කරති. අන් අයව දිරිමත් කිරීමට සහ ලෝකය පුරා කරුණාව පැතිරවීම සඳහා තමන් සතු සුවිශේෂී ශක්තීන් වන නිර්මාණශීලිත්වය, පරිකල්පනය සහ සංවේදීතාව (Sensitivity) භාවිත කිරීමට ඔවුහු සැමවිටම පෙළඹෙති.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>තියුණු තේරුම් ගැනීම:</strong> මතුපිටින් ඔබ්බට ගොස් ගැඹුරු සත්‍යයන් සහ මිනිසුන්ගේ සැබෑ චේතනාවන් වටහා ගැනීමට ඇති හැකියාව.</li>
                      <li><strong>ප්‍රතිපත්තිගරුක බව:</strong> සදාචාරාත්මක සහ ආචාරධර්මීය කරුණුවලදී ඉතා ස්ථාවර විශ්වාසයන් සහ වටිනාකම් පැවතීම.</li>
                      <li><strong>දැඩි කැපවීම සහ ආශාව:</strong> ජීවිතයේ සැබෑ අරමුණක් අපේක්ෂා කරන අතර උසස් ඉලක්ක කරා යාමට කිසිසේත් බිය නොවීම.</li>
                      <li><strong>පරාර්ථකාමීත්වය:</strong> තමන් සතු ශක්තීන් මුළු මහත් සමාජයේම යහපත උදෙසා (Greater good වෙනුවෙන්) භාවිත කිරීමට අපේක්ෂා කිරීම.</li>
                      <li><strong>නිර්මාණශීලිත්වය:</strong> සාම්ප්‍රදායික රාමුවෙන් පිටත සිතීමට සහ තම අදහස් නිදහසේ ප්‍රකාශ කිරීමට ඇති කැමැත්ත.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>විවේචන හමුවේ අධික ලෙස සංවේදී වීම:</strong> තමන් පණ මෙන් සුරකින මූලික ප්‍රතිපත්ති හෝ වටිනාකම් ප්‍රශ්න කරන විට එය ඉවසීමට අපහසු වීම.</li>
                      <li><strong>අභ්‍යන්තරය විවෘත කිරීමට අකමැත්ත:</strong> තම පුද්ගලික ජීවිතය සහ මානසික ගැටලු රහසිගතව තබා ගැනීමට ප්‍රිය කිරීම.</li>
                      <li><strong>අධික පූර්ණත්වවාදය:</strong> සැබෑ ජීවිතයේ මුහුණ දීමට සිදු වන ප්‍රායෝගික අඩුපාඩු සහ අවුල් සහගත තත්ත්වයන් බාර ගැනීමට ඇති අපහසුව.</li>
                      <li><strong>සාමාන්‍ය එදිනෙදා වැඩ මඟහැරීම:</strong> මහා සිහින, දිනපතා කළ යුතු ප්‍රායෝගික පියවරයන් බවට පත් කර ගැනීමට අපොහොසත් වීම.</li>
                      <li><strong>අධික ලෙස මානසිකව වැටීමේ අවදානම:</strong> අන් අයට උපකාර කිරීමේදී තමන්ගේම විවේකය සහ සෞඛ්‍යය නොසලකා හැරීම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p class="res-quote">"මනුෂ්‍ය හදවතකට එහි ප්‍රතිවිරුද්ධ දෙයට වඩා ආදරය ඉතා ස්වභාවිකව ගලා එයි." — නෙල්සන් මැන්ඩෙලා</p>
                <p>INFJ පුද්ගලයන් ආදරයේදී සැමවිටම අපේක්ෂා කරන්නේ ගැඹුර සහ අර්ථවත් බවයි. සැබෑ ආදරය මත පදනම් නොවුණු කිසිදු සාමාන්‍ය බැඳීමකින් සෑහීමකට පත් වීමට ඔවුන්ට අපහසුය. ඔවුන් තම සහකරු සමඟ මානසිකව පමණක් නොව, ආත්මීය මෙන්ම ආධ්‍යාත්මික බැඳීමක්ද අපේක්ෂා කරති.</p>
                <p>ප්‍රේම සබඳතාවකදී මොවුන් ඉතාමත් ආදරණීය, රැකවරණය දෙන, අවංක සහ තියුණු අවබෝධයක් ඇති සහකරුවන්ය. ඔවුන් උත්සාහ කරන්නේ පුද්ගලයන් ලෙස තමන් දිනෙන් දින වර්ධනය වීමට සහ තම සහකරු සමඟ ඇති බැඳීම තවදුරටත් ශක්තිමත් කර ගැනීමටයි.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p class="res-quote">"මගේ මිතුරා වෙනුවෙන් මට කළ හැකි උපරිම දේ නම්, නිකම්ම ඔහුගේ මිතුරෙකු ලෙස රැඳී සිටීම පමණි." — හෙන්රි ඩේවිඩ් තොරෝ</p>
                <p>මොවුන් මතුපිටින් පමණක් පවතින, නොගැඹුරු සාමාන්‍ය මිත්‍රත්වයන්ගෙන් සෑහීමකට පත්වන්නේ නැත. ඔවුන්ට අවශ්‍ය වන්නේ තමන්ව සැබෑ ස්වභාවයෙන්ම වටහාගෙන බාරගන්නා සමීපතම මිතුරන් කිහිපදෙනෙකු පමණි. සැබෑ මිත්‍රත්වයක් ගොඩනඟා ගත් පසු, INFJ පුද්ගලයන් යනු ඉතාමත් විශ්වාසවන්ත, පක්ෂපාතී සහ රැකවරණය දෙන උදාර මිතුරන්ය.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p class="res-quote">"දරුවන්ට ඉගැන්විය යුත්තේ සිතිය යුත්තේ කුමක්ද කියා නොව, සිතිය යුත්තේ කෙසේද කියාය." — මාග්‍රට් මීඩ්</p>
                <p>INFJ දෙමාපියන්ගේ ප්‍රධානතම අරමුණ වන්නේ තම දරුවන්ව ස්වාධීන මෙන්ම සෑම පැත්තකින්ම යහපත් ගුණාංගවලින් පිරි උදාර මිනිසුන් ලෙස සමාජයට දායාද කිරීමයි. ඔවුන් දරුවන්ගේ චිත්තවේගී බුද්ධිය සහ කරුණාවන්ත හදවත ගොඩනැඟීම කෙරෙහි දැඩි අවධානයක් යොමු කරති. තමන්ගේම කියා ස්වාධීන පරමාදර්ශ ගොඩනඟා ගැනීමට හැකියාව ඇති පුද්ගලයන් ලෙස තම දරුවන් හැදී වැඩීම දැකීමෙන් ඔවුහු විශාල ආත්මීය තෘප්තියක් ලබති.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p class="res-quote">"සම්පූර්ණයෙන්ම සාර්ථක වීමට නොහැකි වේ යැයි බියෙන් 'මම උත්සාහ කරන්නේ නැහැ' කියනවාට වඩා, අභියෝගාත්මක යමක් වෙනුවෙන් වෙහෙසීම යහපත් ය." — ජිමී කාටර්</p>
                <p>වෘත්තීයමය තීරණ ගැනීමේදී මොවුන් බලන්නේ තමන් කරන කාර්යය තුළින් අන් අය සමඟ අර්ථවත් ලෙස සම්බන්ධ වීමට සහ පුද්ගලික මානසික තෘප්තියක් ලබා ගැනීමට ඇති හැකියාව පිළිබඳවයි. ජීවිතයට ගැඹුරු අරමුණක් නොලැබෙන්නේ නම් ඔවුන් එම රැකියාවෙන් සෑහීමකට පත් වන්නේ නැත. උපදේශකවරුන්, මනෝවිද්‍යාඥයින්, ගුරුවරුන්, සමාජ සේවකයින් සහ ලේඛකයන් ලෙස ඔවුන් බෙහෙවින් සාර්ථක වේ.</p>
              `
            },
            {
              title: 'රැකියා ස්ථානයේ පුරුදු (Workplace Habits)',
              content: `
                <p>INFJ පුද්ගලයන් වඩාත්ම සාර්ථක ලෙස වැඩ කරන්නේ සාධාරණත්වය සහ සමානාත්මතාවය අගය කරන රැකියා වටපිටාවන් තුළය. ඔවුන් සහයෝගීතාවය, සංවේදී බව සහ පුද්ගලික නිදහස බෙහෙවින් අගය කරති. කළමනාකරුවන් ලෙස, ඔවුන් සේවකයන්ට ස්වාධීනව සිතීමට සහ තීරණ ගැනීමට අවශ්‍ය නිදහස ලබා දීමට ප්‍රිය කරන අතර, සේවකයන් ලෙස, ඔවුන් විවෘත මනසක් ඇති ප්‍රධානීන් යටතේ සේවය කිරීමට කැමැත්තක් දක්වති.</p>
              `
            },
            {
              title: 'අවසාන නිගමනය (Conclusion)',
              content: `
                <p class="res-quote">"අවසාන වශයෙන්, ඔබේ සැබෑ චරිතය ලොවට හෙළි කරන්නේ ඔබේ ක්‍රියාවන් සහ ඔබ අවට පවතින තත්ත්වයන්ට ප්‍රතිචාර දක්වන ආකාරයයි." — කේට් බ්ලැන්චෙට්</p>
                <p>ඔබ මෙතෙක් කියවූ කරුණු, අතිශය කරුණාවන්ත, නිර්මාණශීලී මෙන්ම මුළු ලෝකයේම ඉතාමත් කලාතුරකින් දැකිය හැකි සුවිශේෂී INFJ (Advocate) පෞරුෂත්ව වර්ගයේ පවතින සංකීර්ණ ස්වභාවය පිළිබඳ කෙටි හඳුන්වාදීමක් පමණි. ඔබ තුළ ඇති නිර්මාණශීලිත්වය, දැඩි කැපවීම සහ සැමවිටම නිවැරදි දේම කිරීමට ඇති උනන්දුව අප මනාව වටහා ගන්නා අතරම, ඔබේ සැබෑ හැකියාවන්ගේ (Potential) උපරිම තලයට ළඟා වීමට ඇති සහජ පෙළඹවීම හඳුනා ගැනීමට අපට හැකි වී ඇත.</p>
              `
            }
          ],
          facts: {
            strength: 'තියුණු සහජ බුද්ධිය, පරාර්ථකාමීත්වය සහ පරමාදර්ශී දැක්ම.',
            weakness: 'විවේචන හමුවේ සංවේදී වීම සහ අධික ලෙස මානසිකව පීඩාවට පත් වීම.',
            humor: 'නිහඬව සිටියද, අවස්ථාවට ගැළපෙන ඉතා ගැඹුරු සහ අර්ථවත් හාස්‍ය රසයක් ඇත.',
            relations: 'ආත්මීය බැඳීමක් සහ පූර්ණ අවංකභාවයක් අපේක්ෂා කරන සබඳතා.'
          },
          figures: {
            real: [
              {name:'Martin Luther King Jr.', img:'https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg', desc:'සහකම්පනය පෙරදැරි කරගනිමින් යුක්තිය වෙනුවෙන් පෙනී සිටි නායකයෙකි.'},
              {name:'Nelson Mandela', img:'https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg', desc:'ප්‍රතිපත්තිගරුක බව සහ සමානාත්මතාවය වෙනුවෙන් කැපවූ නායකයෙකි.'},
              {name:'Mother Teresa', img:'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mother_Teresa_1.jpg', desc:'අසරණ මිනිසුන් වෙනුවෙන් පරාර්ථකාමී සේවයක් කළ තැනැත්තියකි.'},
              {name:'Lady Gaga', img:'https://upload.wikimedia.org/wikipedia/commons/2/23/Lady_Gaga_at_2019_Golden_Globes.jpg', desc:'තම නිර්මාණශීලිත්වය හරහා පීඩිතයන් වෙනුවෙන් හඬ නඟන කලාකාරිනියකි.'}
            ],
            fictional: [
              {name:'Albus Dumbledore', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Dumbledore', desc:'ගැඹුරු ප්‍රඥාවකින් සහ දූරදර්ශී දැක්මකින් යුත් නායකයෙකි.'},
              {name:'Aragorn', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Aragorn', desc:'පොදු අරමුණක් වෙනුවෙන් තම කණ්ඩායම ආදරයෙන් මෙහෙයවන නිහඬ වීරයෙකි.'},
              {name:'Atticus Finch', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Atticus', desc:'සමාජ අසාධාරණකම් හමුවේ හෘද සාක්ෂියට එකඟව යුක්තිය වෙනුවෙන් පෙනී සිටින නීතිඥයෙකි.'},
              {name:'Professor X', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfessorX', desc:'සමාජයේ සාමය සහ සමානාත්මතාවය උදෙසා තම සහකම්පනය භාවිත කරමින් සටන් කරන උපදේශකවරයෙකි.'}
            ],
            anime: [
              {name:'Itachi Uchiha', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Itachi', desc:'තමන් විශ්වාස කළ සාමය වෙනුවෙන් තම ජීවිතයම රහසිගතව කැප කළ චරිතයකි.'},
              {name:'Armin Arlert', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Armin', desc:'හෘදයාංගම සහකම්පනය සහ බුද්ධිය භාවිත කරමින් විසඳුම් සොයන චරිතයකි.'},
              {name:'Izuku Midoriya', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Izuku', desc:'අන් අයට උපකාර කිරීම තම ජීවිතයේ එකම මෙහෙවර කරගත් පරමාදර්ශී චරිතයකි.'}
            ]
          }
        }
      },
      INFP:{
        name:'මැදිහත්කරු (The Mediator)',
        cat:'diplomat', catName:'දූතයා',
        desc:'කාව්‍යමය, කරුණාවන්ත හා පරාර්ථකාමී පුද්ගලයෝය. ඔබ සැමවිටම උදාර අරමුණක් වෙනුවෙන් පෙනී සිටීමට කැමැත්තක් දක්වයි.',
        str:['ගැඹුරු සහකම්පනය','නිර්මාණශීලී බව','පරමාදර්ශී දැක්ම','ත්‍යාගශීලී බව','විවෘත මනස'],
        car:['ලේඛක','කලාකරු','උපදේශක','මනෝවිද්‍යාඥ','සමාජ සේවක'],
        extra: {
          quote: 'රන් වූ සියල්ල දිදුලන්නේ නැත; අතරමං වූවන් සියල්ලෝම මඟ වැරදුණු අය නොවේ; ශක්තිමත් වූ පැරණි දේ දිරාපත් නොවේ; ගැඹුරු මුල් කරා හිම කඩාවැටෙන්නේ නැත.',
          author: 'ජේ. ආර්. ආර්. ටොල්කියන් (J. R. R. Tolkien)',
          intro: 'INFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Mediators) යනු ඉතාමත් නිහඬ, විවෘත මනසක් ඇති, සහ ඉහළ පරිකල්පන ශක්තියකින් යුක්ත පිරිසකි. ඔවුහු තමන් කරන සෑම ක්‍රියාවකදීම ඉතාමත් සැලකිලිමත් මෙන්ම නිර්මාණශීලී ප්‍රවේශයක් භාවිත කිරීමට ප්‍රිය කරති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>බාහිර ලෝකයට ඔවුන් ඉතා නිහඬ හෝ නිහතමානී අය ලෙස පෙනුනද, INFP පෞරුෂයන් සතුව අතිශය සජීවී මෙන්ම දැඩි හැඟීම්වලින් පිරි අභ්‍යන්තර ජීවිතයක් පවතී. නිර්මාණශීලී සහ පරිකල්පනීය ගුණයෙන් පිරි මොවුන්, තමන්ගේම මනසින් විවිධ කතාන්දර සහ සංවාද නිර්මාණය කරගනිමින්, දිවා සිහිනවල (Daydreams) ගිලී සිටීමට බෙහෙවින් ප්‍රිය කරති.</p>
                <p>පරමාදර්ශී සහ සහකම්පනීය ගුණයෙන් පිරි මෙම පුද්ගලයන්, තමන්ගේ ජීවිතය තුළ ඉතා ගැඹුරු, ආත්මීය සබඳතාවන් අපේක්ෂා කරන අතර, අන් අයට උපකාර කිරීම තමන්ට ලැබුණු කැඳවීමක් ලෙස සලකති.</p>
              `
            },
            {
              title: 'සහකම්පනය සහ අනන්‍යතාව (Empathy & Truth)',
              content: `
                <p>INFP පෞරුෂයන් සතු විශිෂ්ටතම දායාදය වන්නේ සහකම්පනයයි (Empathy). ඔවුන් අන් අයව ලේසියෙන් විනිශ්චය නොකරන (Nonjudgmental) පිරිසක් වන අතර, ඕනෑම පුද්ගලයෙකුගේ ජීවන කතාවකට සවන් දීමට සැමවිටම සූදානම්ය.</p>
                <p>තමන් තුළ ඇති ඉහළ සංවේදීතාවය සහ අවංකභාවය (Authenticity) නිසාම, තමන්ගේ නිර්මාණශීලී අදහස් බාහිර ලෝකයට ප්‍රකාශ කිරීමට ඔවුහු නිරන්තරයෙන්ම අවස්ථා අපේක්ෂා කරති. මේ නිසා, ලොව ප්‍රකට බොහෝ INFP පුද්ගලයන් කවියන්, ලේඛකයන්, සහ කලාකරුවන් බවට පත්වෙති.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>ඉහළ සහකම්පනය:</strong> අන් අයගේ හැඟීම් තම හදවතින්ම විඳීමේ සුවිශේෂී හැකියාව.</li>
                      <li><strong>ත්‍යාගශීලී බව:</strong> තමන් සතු සතුට සහ වටිනා දේවල් අන් අය සමඟ බෙදා ගැනීමට ඇති කැමැත්ත.</li>
                      <li><strong>විවෘත මනස:</strong> මිනිසුන්ව ලේසියෙන් විනිශ්චය නොකර ඔවුන්ව ඒ අයුරින්ම පිළිගැනීම.</li>
                      <li><strong>නිර්මාණශීලිත්වය:</strong> ඕනෑම දෙයක් දෙස සාම්ප්‍රදායික නොවන අලුත්ම දෘෂ්ටිකෝණයකින් බැලීම.</li>
                      <li><strong>පරමාදර්ශී ස්වභාවය:</strong> හෘද සාක්ෂියට එකඟව නිවැරදි දේ කිරීමට නිරන්තරයෙන් උත්සාහ කිරීම.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>ප්‍රායෝගික නොවීම:</strong> සැබෑ ලෝකය තමන් මවාගත් සිහින ලෝකයට වඩා වෙනස් වන විට කලකිරීමට පත්වීම.</li>
                      <li><strong>සමාජයෙන් හුදෙකලා වීම:</strong> නව මිතුරන් ඇති කර ගැනීමට හෝ විවෘත වීමට ඇති පැකිලීම.</li>
                      <li><strong>අවධානය මඟහැරීම:</strong> එකවර සිහින සහ අදහස් විශාල ප්‍රමාණයක අතරමං වීම නිසා වැඩ ප්‍රමාද වීම.</li>
                      <li><strong>මානසිකව වැටීමේ අවදානම:</strong> අන් අයගේ සෘණාත්මක හැඟීම් තමන්ගේ ඇතුළාන්තයට උරා ගැනීම.</li>
                      <li><strong>ස්වයං-විවේචනය:</strong> තමන් මවාගත් උසස් පරමාදර්ශී මට්ටමට ළඟා වීමට නොහැකි වූ විට තමන්ටම දෝෂාරෝපණය කර ගැනීම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>INFP පුද්ගලයන් ආදරය ලෝකයට පා තබන්නේ ඉතාමත් ඉහළ බලාපොරොත්තු සහ පරමාදර්ශ පෙරදැරි කරගෙනය. ඔවුන් සොයන්නේ නිකම්ම නිකම් සහකරුවෙකු නොව, තම නියම ආත්මීය සහකරුවාය (Soulmate).</p>
                <p>තමන් සැබවින්ම ආදරයෙන් බැඳුණු විට, ඔවුන් අතිශය පක්ෂපාතී සහ සැලකිලිමත් සහකරුවන් බවට පත්වේ. තම සහකරුට තමන් ඉතාමත් සුවිශේෂී කෙනෙකු බව දැනවීමට ඔවුන් තමන් සතු නිර්මාණශීලිත්වය උපරිමයෙන්ම යොදවති.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>මොවුන් මිතුරන් සංඛ්‍යාවට වඩා මිත්‍රත්වයේ පවතින ගුණාත්මකභාවය (Quality trumps quantity) අතිශය වැදගත් කොට සලකති. ඔවුන් සැමවිටම කැමති වන්නේ බාහිරින් විනිශ්චය වීමට බියක් නොමැතිව තමන්ගේ මහා බලාපොරොත්තු සහ සිහින බෙදාගත හැකි ඉතාමත් ගැඹුරු සබඳතාවලටය.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>INFP දෙමාපියන් තම දරුවන් වෙනුවෙන් අතිශය ආදරණීය, රැකවරණය දෙන සහ ඉතාමත් විවෘත මනසක් ඇති අය වෙති. ඔවුන්ට අවශ්‍ය වන්නේ තම දරුවන්ට තමන්ගේම කියා ස්වාධීන අනන්‍යතාවයකින් යුතුව හැදී වැඩීමට අවශ්‍ය උපරිම නිදහස ලබා දීමටයි.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>නිකම්ම නිකම් මාසික බිල්පත් ගෙවා ගැනීමට පමණක් උදව් වන රැකියාවකට වඩා, තමන්ගේ පුද්ගලික මානසික තෘප්තිය උපරිමයෙන්ම ලැබෙන වෘත්තියක් කරා යාමට මොවුහු කැමැත්තක් දක්වති. ලේඛන කලාව, රංගනය, සංගීතය, සහ උපදේශනය වැනි ක්ෂේත්‍රයන් ඔවුන්ට ඉතා හොඳින් ගැළපේ.</p>
              `
            },
            {
              title: 'අවසාන නිගමනය (Conclusion)',
              content: `
                <p>INFP පුද්ගලයන් සතු ඉහළ නිර්මාණශීලිත්වය, මහා පරිකල්පන ශක්තිය සහ අසිරිමත් කරුණාවන්තභාවය, ඔවුන්ගේ පුද්ගලික ජීවන වර්ධනය සඳහා අතිශය වටිනා මෙවලම් වේ. තමන් කවුදැයි නිවැරදිව හඳුනා ගැනීම සහ තමන්ගේ සැබෑ ස්වභාවය ඒ අයුරින්ම බාරගැනීම (Self-acceptance) ඔබ තැබිය යුතු වැදගත්ම පියවරයි.</p>
              `
            }
          ],
          facts: {
            strength: 'ඉහළ සහකම්පනය, නිර්මාණශීලී බව සහ පරමාදර්ශී දැක්ම.',
            weakness: 'ප්‍රායෝගික නොවීම, සමාජයෙන් වෙන් වීම සහ අධික ස්වයං-විවේචනය.',
            humor: 'කාව්‍යමය සහ සියුම් හාස්‍ය රසයක් ඇති අතර සමීපතමයන් සමඟ ඉතා සජීවී වේ.',
            relations: 'ආත්මීය සහකරුවෙකු (Soulmate) අපේක්ෂා කරන ගැඹුරු ප්‍රේම සබඳතා.'
          },
          figures: {
            real: [
              {name:'J. R. R. Tolkien', img:'https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg', desc:'The Lord of the Rings කතා මාලාවේ කතුවරයා වන මොහු අසිරිමත් පරිකල්පනයක් හිමි සැබෑ INFP චරිතයකි.'},
              {name:'William Shakespeare', img:'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg', desc:'මිනිස් ස්වභාවයේ ගැඹුරු හැඟීම් උපමා රූපක හරහා ලෝකයට හෙළි කළ විශිෂ්ටතම ලේඛකයාය.'},
              {name:'Princess Diana', img:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Princess_Diana_1997_%28cropped%29.jpg', desc:'සහකම්පනය සහ කරුණාවන්ත හදවත නිසා මුළු ලෝකයේම ගෞරවයට පාත්‍ර වූ තැනැත්තියකි.'},
              {name:'Keanu Reeves', img:'https://upload.wikimedia.org/wikipedia/commons/9/90/Keanu_Reeves_%282019%29.jpg', desc:'ප්‍රසිද්ධියට වඩා නිහතමානී බව සහ පරාර්ථකාමීත්වය අගය කරන ආදරණීය රංගන ශිල්පියෙකි.'}
            ],
            fictional: [
              {name:'Frodo Baggins', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Frodo', desc:'හෘද සාක්ෂියට එකඟව මහා මෙහෙවරක් උදෙසා නිහඬව කැපවූ පරමාදර්ශී චරිතයකි.'},
              {name:'Luna Lovegood', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna', desc:'තමන්ගේම සුන්දර පරිකල්පන ලෝකයක ජීවත් වන, අතිශය අවංක සහ විවෘත මනසක් ඇති චරිතයකි.'},
              {name:'Amélie Poulain', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Amelie', desc:'නිර්මාණශීලී උපක්‍රම හරහා අන් අයගේ ජීවිතවලට සතුට ළඟා කර දීමට වෙහෙසෙන නිහඬ චරිතයකි.'},
              {name:'Belle', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Belle', desc:'මතුපිට පෙනුමට වඩා ඇතුළාන්තයේ ඇති සැබෑ ස්වභාවය හඳුනා ගන්නා සංවේදී චරිතයකි.'}
            ],
            anime: [
              {name:'Kaneki Ken', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kaneki', desc:'වේදනාවන් තමන්ගේ අභ්‍යන්තරයෙන්ම දරා ගැනීමට උත්සාහ කරන ඉතාමත් සංවේදී චරිතයකි.'},
              {name:'Gaara', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Gaara', desc:'සැබෑ ආදරය සහ සහකම්පනය වටහා ගනිමින් තම මිනිසුන්ව රැකබලා ගන්නා පරමාදර්ශී නායකයෙකි.'},
              {name:'Alphonse Elric', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Alphonse', desc:'ඇතුළාන්තයෙන් අතිශය කරුණාවන්ත, සැමවිටම අන් අයගේ දුකේදී පිහිට වන උදාර මැදිහත්කරුවෙකි.'}
            ]
          }
        }
      },
      ENFJ:{
        name:'ප්‍රධාන නායකයා (The Protagonist)',
        cat:'diplomat', catName:'දූතයා',
        desc:'ආකර්ෂණීය සහ ආශ්වාදජනක නායකයෝය. අන් අයට උපකාර කිරීමට උපරිමයෙන්ම ප්‍රිය කරති.',
        str:['ආකර්ෂණීය නායකත්වය','විශ්වාසවන්තභාවය','පරාර්ථකාමීත්වය','අන් අදහස්වලට ඇහුම්කන් දීම','දැඩි උද්‍යෝගය'],
        car:['ගුරු','රාජ්‍ය තාන්ත්‍රික','මානව සම්පත් කළමනාකරු','උපදේශක','මහජන සබඳතා නිලධාරී'],
        extra: {
          quote: 'මුළු ලෝකයම නිශ්ශබ්දව සිටින විට, එකම එක් හඬක් වුවද අතිශය බලගතු වේ.',
          author: 'මලාලා යූසෆ්සායි (Malala Yousafzai)',
          intro: 'ENFJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Protagonists) යනු ඉතාමත් උණුසුම්, අවංක මෙන්ම සෘජු ගුණාංගවලින් හෙබි, අන් අයට උපකාර කිරීමට උපරිමයෙන්ම ප්‍රිය කරන පිරිසකි. ඔවුන් සතුව ඉතා ස්ථාවර අදහස් සහ මූලික සදාචාරාත්මක වටිනාකම් පවතින අතර, තමන්ගේ ඉලක්කයන් සහ සිහින සාක්ෂාත් කර ගැනීම සඳහා තමන් සතු නිර්මාණශීලී ජවය උපරිමයෙන්ම යෙදවීමට ඔවුහු කටයුතු කරති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>තමන්ගේ ජීවිතය තුළ ඉතා උසස් පොදු අරමුණක් හෝ මෙහෙවරක් (Greater purpose) ඉටු කිරීම සඳහා තමන්ට කැඳවීමක් ලැබී ඇති බව ENFJ පෞරුෂයන්ට දැඩිව හැඟේ. ඉතාමත් සැලකිලිමත් මෙන්ම පරමාදර්ශී චින්තනයක් ඇති මොවුන්, තමන් අවට සිටින මිනිසුන්ගේ ජීවිතවලට මෙන්ම මුළු මහත් සමාජයටම ධනාත්මක යහපත් වෙනසක් ඇති කිරීම සඳහා නිරන්තරයෙන්ම වෙහෙසෙති.</p>
                <p>මොවුන් සහජයෙන්ම උපන් නායකයන් (Born leaders) වන අතර, ඔවුන් සතුව පවතින දැඩි උද්‍යෝගය සහ ආකර්ෂණීය පෞරුෂය නිසා ප්‍රේම සබඳතා සහ මිත්‍රත්වයන් ඇතුළු ජීවිතයේ සෑම අංශයකදීම අන් අයව දිරිමත් කිරීමට සහ ඔවුන්ට ආදර්ශයක් වීමට ඔවුන්ට පුළුවන.</p>
              `
            },
            {
              title: 'සාධාරණත්වය වෙනුවෙන් හඬ නැඟීම (Speaking Up)',
              content: `
                <p>ENFJ පුද්ගලයන් තමන් පණ මෙන් සුරකින මූලික වටිනාකම් සහ සැබෑ අවංකභාවය පිළිබඳව බාහිර සමාජය ඉදිරියේ ඉතාමත් සෘජුව සහ විවෘතව අදහස් දක්වති. සමාජයේ හෝ තමන් අවට කිසියම් අසාධාරණයක් සිදුවන බව වැටහුණු සැනින්, ඊට විරුද්ධව නොබියව හඬ නැඟීමට ඔවුහු ඉදිරිපත් වෙති.</p>
                <p>මිනිසුන්ගේ ඇතුළාන්තයේ සැඟවුණු සැබෑ චේතනාවන් සහ හැඟීම් මනාව වටහා ගැනීමට මොවුන්ට ඇත්තේ පුදුමාකාර සහජ හැකියාවකි. ඔවුන්ගේ අරමුණ මිනිසුන්ව පාලනය කිරීම නොව, සැමවිටම නිවැරදි දේ කිරීමයි.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>ආකර්ෂණීය පෞරුෂය:</strong> මිනිසුන්ව දිරිමත් කරමින් පොදු ඉලක්කයක් කරා මෙහෙයවීමට අතිශය දක්ෂය.</li>
                      <li><strong>විශ්වාසවන්තභාවය:</strong> ලබාදුන් පොරොන්දු සහ වගකීම් අවසානය දක්වාම සාර්ථකව නිම කරයි.</li>
                      <li><strong>අන් අදහස්වලට ඇහුම්කන් දීම:</strong> වෙනස් මතයන්ට පවා නිදහසේ ප්‍රකාශ වීමට ඉඩ දෙමින් ඒවා පිළිගනී.</li>
                      <li><strong>පරාර්ථකාමීත්වය:</strong> අසරණ මිනිසුන් වෙනුවෙන් පෙරමුණ ගෙන පෙනී සිටීමට නිරන්තරයෙන් පෙළඹේ.</li>
                      <li><strong>දැඩි උද්‍යෝගය:</strong> විවිධ ක්ෂේත්‍ර කෙරෙහි උනන්දුවක් දක්වමින් ජවසම්පන්නව කටයුතු කරයි.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>ප්‍රායෝගික නොවීම:</strong> ලෝකයේ පවතින සියලුම ගැටලු තනිවම විසඳීමට යාමෙන් මානසිකව වෙහෙසට පත්වීම.</li>
                      <li><strong>අධික පරමාදර්ශී ස්වභාවය:</strong> අන් අය තමන්ගේ මූලික ප්‍රතිපත්ති උල්ලංඝනය කරන විට දැඩි ලෙස කම්පාවට පත්වීම.</li>
                      <li><strong>උපදේශක ලීලාවෙන් හැසිරීම:</strong> අන් අයට ජීවිතය කියා දීමට යාම සමහර විට අන් අයව පහත් කොට සැලකීමක් සේ පෙනීම.</li>
                      <li><strong>සීමාව ඉක්මවා සහකම්පනය දැක්වීම:</strong> අන් අයගේ ප්‍රශ්න තමන්ගේම ප්‍රශ්න ලෙස සිතා මානසික සාමය නැති කර ගැනීම.</li>
                      <li><strong>ඕනෑවට වඩා දැඩි වීම:</strong> බාහිර පුද්ගලයන්ට වෙනස් වන ලෙස දැඩි ලෙස බලපෑම් කිරීමට පෙළඹීම.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>හෘදයාංගම කරුණුවලදී ENFJ පුද්ගලයන් අතිශය දැඩි මෙන්ම ප්‍රබල හැඟීම් ප්‍රකාශ කරති. ඔවුන් සැබෑ ආදරයේ සුන්දරත්වය මුළු හදවතින්ම විශ්වාස කරන අතර තම නියම ආත්මීය සහකරු සොයා ගන්නා තෙක් උත්සාහය අත්නොහරිති.</p>
                <p>ඔවුන් සාමාන්‍ය ආදර සෙල්ලම්වලට (Dating games) අකමැති අතර, සබඳතාවයේ පළමු පියවර තැබීමට නොබියව ඉදිරිපත් වෙති. තම සහකරුගේ මහා සිහින සැබෑ කර ගැනීම වෙනුවෙන් ඔවුන්ට උපරිම සහයෝගය ලබා දීමට ඔවුහු දැඩි ලෙස වෙහෙසෙති.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>ENFJ අය තම මිතුරන් සමඟ නිරන්තරයෙන්ම සමීපව රැඳී සිටීම සඳහා කැපවූ දැඩි උත්සාහයක් දරති. විවිධාකාර ගතිලක්ෂණ සහ ලෝක දෘෂ්ටීන් ඇති මිතුරන් විශාල පිරිසක් වටකරගෙන ජීවත් වීමට ඔවුන් ප්‍රිය කරයි.</p>
                <p>ඔවුන් ඕනෑම දුෂ්කර අවස්ථාවකදී මිතුරන් වෙනුවෙන් ළඟින්ම සිටින ඉතාමත් විශ්වාසවන්ත පිරිසකි. කෙසේ වෙතත්, තම මිතුරන් තමන්ගේ උපදෙස් පිළිනොගන්නා විට කලකිරීමට පත් නොවී සිටීමට ඔවුන් ඉගෙන ගත යුතුය.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>තම දරුවන්ට ජීවිතයේ වර්ධනය වෙමින් ඔවුන්ට විය හැකි උපරිම හොඳම පුද්ගලයන් වීමට උපකාර කිරීම ENFJ දෙමාපියන්ගේ ප්‍රධානතම මෙහෙවරයි. ඔවුහු දරුවන්ගේ සිත් තුළ ඉතාමත් ශක්තිමත් මානුෂීය වටිනාකම් සහ පුද්ගලික වගකීම තදින්ම තැන්පත් කරති.</p>
                <p>ඔවුන් දරුවන් කෙරෙහි ඉතා උසස් බලාපොරොත්තු තබා ගන්නා අතර, එම බලාපොරොත්තු දරුවන්ට දැවැන්ත පීඩනයක් නොවන සේ සමබර කර ගැනීමට ඔවුන් වගබලා ගත යුතුය.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>ENFJ පුද්ගලයන් අන් අයට උපකාර කිරීම තුළින් උපරිම මානසික තෘප්තියක් ලබති. මානව සම්පත් කළමනාකරණය, ගුරු වෘත්තිය, මනෝ උපදේශනය සහ මහජන සබඳතා වැනි ක්ෂේත්‍රයන්හි ඔවුහු ඉතාමත් ඉහළින් කැපී පෙනෙති.</p>
                <p>තමන් කරන සේවය හරහා සමාජයට සිදුවන සැබෑ යහපත් බලපෑම තම දෑසින්ම දැකීමට ඔවුන් නිරන්තරයෙන් අපේක්ෂා කරයි.</p>
              `
            },
            {
              title: 'රැකියා ස්ථානයේ පුරුදු (Workplace Habits)',
              content: `
                <p>කළමනාකරුවන් ලෙස කටයුතු කිරීමේදී, ඔවුන් තම සේවකයන්ව නිකම්ම රැකියා කරන පිරිසක් ලෙස නොව වටිනා මිනිසුන් ලෙස අගය කරති. සේවකයන් ලෙස ඔවුන් ඉතාමත් විශ්වාසවන්ත සහ පක්ෂපාතී වන අතර, වෘත්තීය සගයන් සමඟ සහයෝගයෙන් වැඩ කිරීමට අතිශය දක්ෂය.</p>
              `
            },
            {
              title: 'අවසාන නිගමනය (Conclusion)',
              content: `
                <p class="res-quote">"අවසාන වශයෙන්, ඔබේ සැබෑ චරිතය ලොවට හෙළි කරන්නේ ඔබේ ක්‍රියාවන් සහ ඔබ අවට පවතින තත්ත්වයන්ට ප්‍රතිචාර දක්වන ආකාරයයි." — කේට් බ්ලැන්චෙට්</p>
                <p>ඔබ වැනි ENFJ පුද්ගලයන්ට තමන් සතු දායාදයන් ප්‍රායෝගිකව භාවිත කරමින් වඩාත් යහපත් මිනිසුන් වීමට සහ මේ ලෝකය වෙනුවෙන් උසස් මෙහෙවරක් (Greater purpose) ඉටු කිරීමට පුළුවන. ඔබ සතු ආකර්ෂණීය නායකත්වය සහ සහකම්පනය ලෝකයට අත්‍යවශ්‍යම වී ඇත.</p>
              `
            }
          ],
          facts: {
            strength: 'ආකර්ෂණීය නායකත්වය, නොබිඳෙන පරාර්ථකාමීත්වය සහ තියුණු සහකම්පනය.',
            weakness: 'ප්‍රායෝගික නොවීම, අන් අය වෙනුවෙන් ඕනෑවට වඩා වෙහෙසී මානසිකව වැටීම.',
            humor: 'සැමවිටම අන් අයව දිරිමත් කරන සහ සිනහ ගන්වන ඉතා උණුසුම් හාස්‍ය රසයක් ඇත.',
            relations: 'ආත්මීය සහකරුවෙකු අපේක්ෂා කරමින් සබඳතාවයේ නායකත්වය සහ වගකීම භාර ගනී.'
          },
          figures: {
            real: [
              {name:'Malala Yousafzai', img:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Malala_Yousafzai_2015.jpg', desc:'මාරාන්තික තර්ජන මැද වුවද අධ්‍යාපන අයිතිවාසිකම් වෙනුවෙන් හඬ නැඟූ පරමාදර්ශී නායිකාවකි.'},
              {name:'Barack Obama', img:'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg', desc:'චතුර සන්නිවේදනය භාවිත කරමින් මුළු මහත් ජාතියක්ම දිරිමත් කළ නායකයෙකි.'},
              {name:'Oprah Winfrey', img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Oprah_Winfrey_2018.jpg', desc:'සහකම්පනය හරහා මිනිසුන්ගේ ජීවිත යහපත් මඟකට හැරවීමට කැපවූ මාධ්‍යවේදිනියකි.'},
              {name:'Martin Luther King Jr.', img:'https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg', desc:'උදාර ප්‍රතිපත්ති හරහා මිලියන සංඛ්‍යාත ජනතාවක් එකම අරමුණක් වෙනුවෙන් පෙළගැස්වූ නායකයෙකි.'}
            ],
            fictional: [
              {name:'Morpheus', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Morpheus', desc:'අන් අයගේ සැබෑ සැඟවුණු හැකියාවන් හඳුනාගෙන ඔවුන්ට මඟ පෙන්වූ පරමාදර්ශී නායකයෙකි.'},
              {name:'Judy Hopps', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Judy', desc:'සමාජ අසාධාරණකම්වලට විරුද්ධව පෙරමුණ ගෙන සටන් කරන සුභවාදී චරිතයකි.'},
              {name:'Katara', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Katara', desc:'යුක්තිය සහ අසරණ මිනිසුන්ගේ අයිතිවාසිකම් වෙනුවෙන් නොබියව සටන් වදින ශක්තිමත් චරිතයකි.'},
              {name:'Atticus Finch', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Atticus', desc:'සමානාත්මතාවය වෙනුවෙන් ක්‍රියාවෙන් පෙන්වා දුන් ආදර්ශමත් නීතිඥයෙකි.'}
            ],
            anime: [
              {name:'Tang San', img:'https://api.dicebear.com/7.x/bottts/svg?seed=TangSan', desc:'තම මිතුරන්ව ආරක්ෂා කරමින් ඔවුන්ව ඉහළම සාර්ථකත්වයන් කරා මෙහෙයවන පරමාදර්ශී නායකයෙකි.'},
              {name:'All Might', img:'https://api.dicebear.com/7.x/bottts/svg?seed=AllMight', desc:'සාමයේ සහ බලාපොරොත්තුවේ සංකේතය වෙමින් නව පරපුර දිරිමත් කළ උදාර වීරයෙකි.'},
              {name:'Rengoku Kyojuro', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Rengoku', desc:'දුර්වලයන්ව ආරක්ෂා කිරීමේ වගකීම වෙනුවෙන් තම ජීවිතයම කැප කළ වීර චරිතයකි.'}
            ]
          }
        }
      },
      ENFP:{name:'ප්‍රවර්ථකයා',cat:'diplomat',catName:'දූතයා',desc:'උද්යෝගිමත්, නිර්මාණශීලී හා සුන්දර චින්තකයෙක්.',str:['උද්යෝගිමත් ශක්තිය','ආශ්වාදය'],car:['මාධ්‍යවේදී','ව්‍යවසායක'], extra: {
          quote: 'ඔබ ජීවිකාව සඳහා කරන්නේ කුමක්ද යන්න මට වැදගත් නැත. මට දැනගැනීමට අවශ්‍ය වන්නේ ඔබේ හදවතේ ඇති දැඩි ආශාව කුමක්ද යන්නයි.',
          author: 'ඔරියා මවුන්ටන් ඩ්‍රීමර්',
          intro: 'ENFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Campaigners) යනු සැබෑ නිදහස් ආත්මයන්ය. ඔවුන් සාදයකදී වඩාත්ම කැපී පෙනෙන පුද්ගලයන් වුවද, ඔවුන්ට අවශ්‍ය වන්නේ නිකම්ම විනෝද වීමට වඩා අන් අය සමඟ ගැඹුරු මානසික සබඳතා ගොඩනගා ගැනීමටයි.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ඔවුහු සෑම දෙයකම සුන්දරත්වය දකින අතර, අන් අයගේ හැඟීම් ඉතා පහසුවෙන් වටහා ගනිති. ඔවුන්ගේ දැඩි උද්යෝගය සහ නිර්මාණශීලී අදහස් නිසා අන් අයටද විශාල ආශ්වාදයක් ලැබේ.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>කුතුහලය:</strong> ඕනෑම දෙයක සුන්දරත්වය දැකීමේ හැකියාව ඇත.</li>
                      <li><strong>උද්යෝගිමත් බව:</strong> අන් අය සමඟ පහසුවෙන් සම්බන්ධ වී ප්‍රීතිය බෙදා ගනී.</li>
                      <li><strong>සන්නිවේදනය:</strong> ඉතා දක්ෂ ලෙස අන් අය සමඟ අදහස් හුවමාරු කරයි.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>ඕනෑවට වඩා සිතීම:</strong> සරල දේවල් ගැන පවා අනවශ්‍ය ලෙස සිතා පීඩාවට පත් වේ.</li>
                      <li><strong>ඉක්මනින් ආතතියට පත්වීම:</strong> අන් අයගේ ප්‍රශ්න තමන්ගේ කරගෙන මානසිකව වෙහෙසේ.</li>
                      <li><strong>ප්‍රායෝගික නොවීම:</strong> එදිනෙදා සාමාන්‍ය වැඩ කටයුතු කිරීම ඔවුන්ට අපහසුය.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ඔවුන් ආදරය දකින්නේ අන්‍යෝන්‍ය වශයෙන් ගවේෂණය කළ යුතු සුන්දර ගමනක් ලෙසිනි. ඔවුන් තම සහකරුට සම්පූර්ණයෙන්ම කැප වන අතර අතිශය ආදරණීය වේ.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>මිතුරන් ලෙස ඔවුන් ඉතා ප්‍රීතිමත් සහ සහයෝගී පිරිසකි. ඕනෑම කෙනෙකු සමඟ පහසුවෙන් මිතුරු වීමට ඔවුන්ට හැකිය.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>නිර්මාණශීලී සහ විනෝදකාමී දෙමාපියන් වන ඔවුන් තම දරුවන්ට ලෝකය ගවේෂණය කිරීමට නිදහස ලබා දෙයි.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>මාධ්‍යවේදීන්, රංගන ශිල්පීන්, සහ උපදේශකයන් ලෙස අලුත් අදහස් ගවේෂණය කළ හැකි වෘත්තීන් ඔවුන්ට ගැළපේ.</p>
              `
            }
          ],
          facts: {
            strength: 'නිර්මාණශීලීත්වය, ගැඹුරු සහකම්පනය සහ උද්යෝගය.',
            weakness: 'අනවශ්‍ය ලෙස සිතීම සහ දැඩි කාලසටහන්වලට අකමැත්ත.',
            humor: 'විනෝදකාමී, නිර්මාණශීලී සහ අන් අයව සිනාස්සන හාස්‍යයක් ඇත.',
            relations: 'ගැඹුරු ආත්මීය සබඳතා අපේක්ෂා කරයි.'
          },
          figures: {
            real: [
              {name:'Robin Williams', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=RobinW', desc:'අසීමිත ශක්තියක් සහ නිර්මාණශීලීත්වයක් ගෙන ආ සුප්‍රසිද්ධ විකට නළුවෙකි.'},
              {name:'RM (Kim Nam-joon)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=RM', desc:'ආශ්වාදජනක, ගැඹුරින් සිතන නායකයෙක් සහ කලාකරුවෙකි.'},
              {name:'Will Smith', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=WillS', desc:'අතිශය ආකර්ෂණීය සහ උද්යෝගිමත් රංගන ශිල්පියෙකි.'},
              {name:'Kelly Clarkson', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=KellyC', desc:'ප්‍රේක්ෂකයන් සමඟ චිත්තවේගීයව බැඳෙන දක්ෂ ගායිකාවකි.'}
            ],
            fictional: [
              {name:'Michael Scott', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelS', desc:'විනෝදකාමී, මානව සබඳතා අගය කරන නිර්මාණශීලී චරිතයකි.'},
              {name:'Spider-Man', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=SpiderMan', desc:'අන් අයගේ දුකේදී පිහිට වන සංවේදී වීරයෙකි.'},
              {name:'Willy Wonka', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Wonka', desc:'අසීමිත නිර්මාණශීලීත්වයක් ඇති අද්විතීය චරිතයකි.'},
              {name:'Phil Dunphy', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=PhilD', desc:'උද්යෝගිමත්, ආදරණීය සහ විනෝදකාමී පියෙකි.'}
            ],
            anime: [
              {name:'Kaori Miyazono', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Kaori', desc:'තම ආශාව තුළින් අන් අයව දිරිමත් කරන නිදහස් සංගීතඥයෙකි.'},
              {name:'Camie Utsushimi', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Camie', desc:'ඉතාමත් කතාබහට ලැදි සහ විවෘත මනසක් ඇති චරිතයකි.'},
              {name:'Son Goku', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Goku', desc:'අතිශය උද්යෝගිමත් සහ ධනාත්මක වීරයෙකි.'}
            ]
          }
        }},
      ISTJ:{name:'ලොජිස්ටිකියන්',cat:'sentinel',catName:'ආරක්ෂක',desc:'ප්‍රායෝගික, ක්‍රමානුකූල හා වගකීමකින් යුතු පුද්ගලයෙක්.',str:['විශ්වාසදායක බව','ස්ථාවරත්වය'],car:['ගණකාධිකාරී','නීතිඥ'], extra: {
          quote: 'මට ලැබී ඇති කුමන හෝ හැකියාවන් ප්‍රයෝජනයට නොගෙන සිටීමට මම බිය වෙමි. වැඩ කල්දැමීම සහ අලසකම පිළිබඳව මම මීට වඩා බෙහෙවින් බිය වෙමි.',
          author: 'ඩෙන්සෙල් වොෂින්ටන් (Denzel Washington)',
          intro: 'ISTJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Logisticians) යනු බාහිරින් තරමක් නිහඬ, නමුත් දැඩි අධිෂ්ඨානශීලී සහ ජීවිතය දෙස ඉතාමත් තාර්කික, ප්‍රායෝගික දෘෂ්ටිකෝණයකින් බලන පිරිසකි. ඔවුහු තමන් ගන්නා සෑම ක්‍රියාවක්ම ඉතාමත් සැලකිලිමත් ව පියවරෙන් පියවර සැලසුම් කරන අතර, ඒවා ක්‍රමවත් ක්‍රමවේදයකට අනුව (Methodical purpose එකකින්) අවසානය දක්වාම සාර්ථකව ක්‍රියාවට නැංවීමට කැපවෙති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ISTJ පෞරුෂත්වයේ පුද්ගලයන් තමන් පවසන වචනය ඒ අයුරින්ම අදහස් කරන අතර, තමන් අදහස් කරන දේ පමණක් සෘජුව ප්‍රකාශ කරති. ඔවුන් කිසියම් කාර්යයක් ඉටු කිරීමට පොරොන්දු වුවහොත්, එහි වගකීම උපරිමයෙන්ම ඉටු කිරීමට ඔවුහු වගබලා ගනිති.</p>
                <p>ඔවුන් තුළ පවතින මෙම වගකිවයුතු සහ සියයට සියයක්ම විශ්වාස කළ හැකි සහජ ස්වභාවය නිසාම, සමාජීය රාමුවලට, ක්‍රමවත් ව්‍යුහයන්ට සහ සම්ප්‍රදායන්ට (Structure & Tradition) ඔවුන් තුළ ඇත්තේ අතිශය ගැඹුරු ගරුත්වයකි. තමන්ගේ ක්‍රමවත් සහ සැලසුම්සහගත ස්වභාවයට එකඟව, ISTJ පුද්ගලයෝ කිසිවිටෙකත් ක්ෂණික හැඟීම් මත පදනම් වූ හදිසි තීරණ ගන්නේ නැත.</p>
              `
            },
            {
              title: 'ඉහළ සදාචාරය සහ අවංකභාවය (A Life of Integrity)',
              content: `
                <p>ඕනෑම ප්‍රායෝගික අවස්ථාවකදී ඉදිරියට යාම සඳහා අනුගමනය කළ යුතු එකම එක් නිවැරදි සහ සාධාරණ මඟක් පවතින බව ISTJ පෞරුෂයන් දැඩිව විශ්වාස කරති. තමන් අතින් සිදුවන වැරදි ඉතාමත් ඉක්මනින් පිළිගන්නා මොවුන්, එමඟින් තමන් සමාජය ඉදිරියේ අපහසුතාවයට පත් වුවද පවතින සැබෑ සත්‍යය ඒ අයුරින්ම ප්‍රකාශ කරති.</p>
                <p>බාහිරින් රඟපාන බොරු සංදර්ශනවලට වඩා සැබෑ අවංකභාවය සහ සෘජු, පැහැදිලි සන්නිවේදනය අතිශය වැදගත්ය. වෙනත් කෙනෙකුගේ සිත දිනා ගැනීම සඳහා බොරු කීමට වඩා, තමන්ගේම හෘද සාක්ෂිය සතුටින් තබා ගැනීමට ඔවුහු සැමවිටම කටයුතු කරති.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>අවංක සහ සෘජු බව:</strong> මනෝවිද්‍යාත්මක සෙල්ලම් සහ බොරු කීම්වලට හාත්පසින්ම විරුද්ධ වේ.</li>
                      <li><strong>ඉහළ විනය:</strong> තමන් වෙත පැවරුණු වගකීම් සහ ලබාදුන් පොරොන්දු කුමන තත්ත්වයක් යටතේ වුවද ඉටු කරති.</li>
                      <li><strong>අතිශය වගකීම් සහගත බව:</strong> තමන් බැඳී සිටින ආයතන වෙනුවෙන් දිවා රෑ නොබලා වැඩ කිරීමට සතුටින් පෙළඹෙති.</li>
                      <li><strong>සන්සුන් සහ ප්‍රායෝගික ස්වභාවය:</strong> ඕනෑම බාධකයකදී තර්කානුකූල සහ ප්‍රායෝගික තීරණ ගනිති.</li>
                      <li><strong>ක්‍රමවත් සහ කාර්යක්ෂම බව:</strong> පැහැදිලි නීති රීති අනුගමනය කරමින් උපරිම නිෂ්පාදන ධාරිතාවයකින් වැඩ කරති.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>මුරණ්ඩු බව:</strong> සැබෑ කරුණු මඟින් තහවුරු නොකරන ලද අලුත් අදහස් පිළිගැනීමට දැඩි ලෙස අකමැති වේ.</li>
                      <li><strong>සංවේදී නොවීම:</strong> සෘජු වචන භාවිතය නිසා අන් අයගේ සිත් රිදවීමට ඉඩ ඇත.</li>
                      <li><strong>නීති පොතටම වැඩ කිරීම:</strong> නීති රීති මදක් හෝ වෙනස් කිරීමට හෝ අලුත් අත්හදා බැලීම් කිරීමට පැකිලෙති.</li>
                      <li><strong>විනිශ්චයකාරී ස්වභාවය:</strong> ක්ෂණික හැඟීම් මත තීරණ ගන්නා අය දැඩි ලෙස විවේචනය කිරීමට පෙළඹෙති.</li>
                      <li><strong>මානසිකව ඇද වැටීමේ අවදානම:</strong> සියලුම වගකීම් තමන්ගේම කර මත පටවා ගැනීම නිසා විඩාවට පත් වෙති.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ISTJ පුද්ගලයන් ප්‍රේම සබඳතාවලදීද අතිශය වගකිවයුතු, සියයට සියයක්ම විශ්වාස කළ හැකි සහකරුවන් වේ. ඔවුන් ක්ෂණික ආදර හමුවීම් (Blind dates) හෝ ආදර සෙල්ලම් ප්‍රතික්ෂේප කරති.</p>
                <p>සබඳතාවයේ ස්ථාවර කැපවීම් සහ පොරොන්දු ඇති කරගත් පසු, ඔවුහු තමන් ලබාදුන් පොරොන්දු සියල්ලම ජීවිතයේ අවසානය දක්වාම අකුරටම රකිති.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>සැබෑ ISTJ මිතුරෙකු යනු අතිශය පක්ෂපාතී, සියයට සියයක්ම විශ්වාස කළ හැකි, ගෞරවනීය මෙන්ම ඕනෑම අවස්ථාවකදී ළඟින්ම සිටින උදාර චරිතයකි. ඔවුන් තමන්ගේ මිත්‍රත්වය ප්‍රකාශ කරන්නේ වචනවලින් නොව ප්‍රායෝගික ක්‍රියාවෙනි.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>ISTJ දෙමාපියන් තම දරුවන්ව පවුල තුළ මෙන්ම සමාජය ඉදිරියේ ගරුත්වයක් ඇති සාමාජිකයන් ලෙස ඇති දැඩි කිරීමට කටයුතු කරති. ඔවුන් තම දරුවන් වෙනුවෙන් ඉතාමත් ස්ථාවර සහ ක්‍රමවත් ව්‍යුහාත්මක පරිසරයක් නිර්මාණය කර දෙති.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>මොවුන් වඩාත්ම අවධානය යොමු කරන්නේ ඉතාමත් ස්ථාවර වූත්, ශක්තිමත් වූත් දීර්ඝකාලීන වෘත්තීය ජීවිතයක් ගොඩනඟා ගැනීම වෙනුවෙනි. හමුදා නිලධාරීන්, නීතිඥයන්, ගණකාධිකාරීවරුන් සහ දත්ත විශ්ලේෂකයන් ලෙස මොවුන් බෙහෙවින් සාර්ථක වේ.</p>
              `
            }
          ],
          facts: {
            strength: 'අවංකභාවය, ඉහළ විනය, කාර්යක්ෂමතාවය සහ අතිශය වගකීම් සහගත බව.',
            weakness: 'මුරණ්ඩු බව, නීති පොතටම වැඩ කිරීම සහ සංවේදී නොවීම.',
            humor: 'බැරෑරුම් වුවද, සමීපතමයන් සමඟ විනෝදයෙන් සිටීමට ප්‍රිය කරන වියළි හාස්‍යයක් ඇත.',
            relations: 'සාම්ප්‍රදායික, ස්ථාවර සහ සියයට සියයක් විශ්වාස කළ හැකි බැඳීම් අපේක්ෂා කරයි.'
          },
          figures: {
            real: [
              {name:'Denzel Washington', img:'https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg', desc:'දැඩි ස්වයං-විනයක් සහ උසස් වෘත්තීය සදාචාරයක් පවත්වා ගන්නා සැබෑ ISTJ චරිතයකි.'},
              {name:'George Washington', img:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', desc:'නීතිය, සාධාරණත්වය සහ ඉහළ පුද්ගලික විනය අගය කළ ඇමරිකාවේ ප්‍රථම ජනාධිපතිවරයා.'},
              {name:'Angela Merkel', img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Angela_Merkel_July_2010_-_2.jpg', desc:'සැබෑ කරුණුවලට මුල් තැන දෙමින් අර්බුද හමුවේ නොසැලී තීරණ ගත් ජර්මනියේ හිටපු චාන්සලර්වරිය.'},
              {name:'Natalie Portman', img:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg', desc:'උපරිම සූක්ෂ්මතාවයකින් සහ අකුරටම රාජකාරි ඉටු කිරීමට ලැදි රංගන ශිල්පිනියකි.'}
            ],
            fictional: [
              {name:'Hermione Granger', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Hermione', desc:'නීති රීති අකුරටම රකින, සාක්ෂි සහ තොරතුරු මතම විශ්වාසය තබන පරිපූර්ණ ISTJ චරිතයකි.'},
              {name:'Ned Stark', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=NedStark', desc:'තමන් පණ මෙන් සුරකින උසස් සදාචාරය සහ යුතුකම වෙනුවෙන් පෙනී සිටි ගෞරවනීය නායකයෙකි.'},
              {name:'Spock', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Spock', desc:'ඕනෑම අවස්ථාවකදී වියළි තර්කය සහ විද්‍යාත්මක කරුණු මත පමණක් තීරණ ගන්නා චරිතයකි.'},
              {name:'Inspector Javert', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Javert', desc:'නීතිය සහ රාජකාරිය ලෝකයේ උත්තරීතරම දේ ලෙස සලකන දැඩි නිලධාරී චරිතයකි.'}
            ],
            anime: [
              {name:'Mikasa Ackerman', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Mikasa', desc:'තමන්ගේ සමීපතමයන් වෙනුවෙන් නොබිඳෙන දැඩි පක්ෂපාතීත්වයක් පෙන්වන සටන්කාරියකි.'},
              {name:'Tenya Iida', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Iida', desc:'පාසලේ නීති රීති අකුරටම අනුගමනය කරන අතිශය ක්‍රමවත් ශිෂ්‍ය නායකයෙකි.'},
              {name:'Byakuya Kuchiki', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Byakuya', desc:'පෞරාණික සම්ප්‍රදායන් සහ නීති පද්ධතීන් ආරක්ෂා කිරීම තම එකම මෙහෙවර කරගත් සෙන්පතියෙකි.'}
            ]
          }
        }},
      ISFJ:{name:'ආරක්ෂකයා',cat:'sentinel',catName:'ආරක්ෂක',desc:'කරුණාවන්ත, විශ්වාසදායක හා ආරක්ෂක පුද්ගලයෙක්.',str:['කරුණාව','විශ්වාසවන්ත බව'],car:['වෛද්‍ය','සෞඛ්‍ය සේවක']},
      ESTJ:{name:'ව්‍යවසායකයා',cat:'sentinel',catName:'ආරක්ෂක',desc:'වැඩ කටයුතු නිම කරන විශිෂ්ට පරිපාලකයන් හා කළමනාකරුවන්ය.',str:['කළමනාකරණ ශක්තිය','සංවිධානාත්මක බව'],car:['ව්‍යාපාර කළමනාකරු','මූල්‍ය නිලධාරී']},
      ESFJ:{name:'උපදේශකයා',cat:'sentinel',catName:'ආරක්ෂක',desc:'සමාජශීලී, කරුණාවන්ත හා සම්බන්ධතා ගැන සැලකිල්ල දක්වන පුද්ගලයෙක්.',str:['සමාජශීලී බව','සම්බන්ධතා කළමනාකරණය'],car:['ගුරු','HR කළමනාකරු']},
      ISTP:{name:'ශිල්පියා',cat:'explorer',catName:'ගවේෂක',desc:'ප්‍රායෝගික, නම්‍යශීලී හා බුද්ධිමය පුද්ගලයෙක්.',str:['ප්‍රායෝගික බුද්ධිය','තාක්ෂණික හැකියාව'],car:['ඉංජිනේරු','කාර්මික ශිල්පී']},
      ISFP:{name:'ත්‍රාසජනක ගවේෂකයා',cat:'explorer',catName:'ගවේෂක',desc:'නම්‍යශීලී, කරුණාවන්ත හා කලාත්මක පුද්ගලයෙක්.',str:['කලාත්මක හැකියාව','නිදහස'],car:['කලාකරු','සංගීතඥ'], extra: {
          quote: 'දවසක් පුරා මගේ ස්වභාවය වෙනස් වෙනවා. මම අවදි වෙන්නේ එක පුද්ගලයෙක් විදියට, නමුත් මම නින්දට යන විට මම අනිවාර්යයෙන්ම දන්නවා මම ඊට හාත්පසින්ම වෙනස් තවත් කෙනෙක් කියලා.',
          author: 'බොබ් ඩිලන් (Bob Dylan)',
          intro: 'ISFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Adventurers) යනු සැබෑ කලාකරුවන් පිරිසකි. ඔවුන්ට අනුව, ජීවිතය යනුම තමන්ගේ සැබෑ ආත්මය ප්‍රකාශ කිරීමට භාවිත කළ හැකි අතිශය සුන්දර කැන්වස් එකකි. ගවේෂණාත්මක ස්වභාවය සහ කුඩා දේවලින් උපරිම සතුටක් ලැබීමේ හැකියාව ඔවුන් සතුය.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ඔවුන් ජීවිතය දෙස බලන්නේ ඉතාමත් නම්‍යශීලී සහ වෙනස් වීමට බිය නොවන ප්‍රවේශයකිනි. ඔවුන් සෑම දවසක්ම ගෙවන්නේ එම මොහොතේ තමන්ට නිවැරදි යැයි හැඟෙන දේ සිදු කරමිනි. ඔවුන් තමන්ගේ ජීවිතය තුළ සැමවිටම අනපේක්ෂිත දේ සඳහා ඉඩක් තබා ගනී.</p>
                <p>අන් අයගේ අදහස්වලට ඉතාමත් ඉහළින් ගරු කරන ඔවුන්, අන් අයව විනිශ්චය නොකරන උදාර ගුණාංගයකින් යුක්ත වේ. ඔවුන් ලෝකයේ විවිධත්වය අගය කරන අතර, තමන්ට වඩා හාත්පසින්ම වෙනස් මත දරන මිනිසුන්ව ඉතාමත් ආදරයෙන් වැළඳ ගනිති.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>ආකර්ෂණීය බව:</strong> “ජීවත් වන්න සහ ජීවත් වීමට ඉඩ දෙන්න” යන ආකල්පය නිසා ස්වභාවිකවම ප්‍රියමනාප වේ.</li>
                      <li><strong>සංවේදී බව:</strong> අන් අයගේ හැඟීම් සමඟ පහසුවෙන් බැඳී සමගිය පවත්වා ගනී.</li>
                      <li><strong>පරිකල්පන ශක්තිය:</strong> නිර්මාණශීලිත්වය භාවිත කරමින් නිර්භීත අදහස් ගොඩනඟයි.</li>
                      <li><strong>ආශාවෙන් පිරි බව:</strong> ලැජ්ජාශීලී බව යටතේ දැඩි හැඟීම්බර හදවතක් සැඟවී ඇත.</li>
                      <li><strong>කරුණාවන්ත බව:</strong> අන් අයට තමන්ගේ අදහස් ප්‍රකාශ කිරීමට ආරක්ෂිත ඉඩක් නිර්මාණය කරයි.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>ව්‍යුහගත බවට අකමැත්ත:</strong> සම්ප්‍රදායන් සහ දැඩි නීති රීති පීඩාවක් ලෙස දැනේ.</li>
                      <li><strong>අනපේක්ෂිත බව:</strong> දිගුකාලීන කැපවීම් සහ සැලසුම් අකමැත්තෙන් බැහැර කරති.</li>
                      <li><strong>ඉක්මනින් ආතතියට පත්වීම:</strong> තත්ත්වයන් පාලනයෙන් බැහැර වූ විට අධික ආතතියකට පත් වේ.</li>
                      <li><strong>තාක්ෂණික ගැටලු විසඳීමේ අපහසුව:</strong> යාන්ත්‍රික හෝ තාක්ෂණික ගැටලු විසඳීමට වඩා නිරීක්ෂණයට කැමතිය.</li>
                      <li><strong>ස්වයං-වටිනාකම උච්චාවචනය වීම:</strong> උත්සාහයන් ප්‍රතික්ෂේප වූ විට දැඩි ලෙස පසුතැවෙති.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ඔවුන් අතිශය හැඟීම්බර පුද්ගලයන් වුවද, තම සංවේදී අභ්‍යන්තරය ඉතා ප්‍රවේශමෙන් ආරක්ෂා කර ගනී. ඔවුන්ගේ ආදරය වචනවලට වඩා කුඩා ප්‍රායෝගික ක්‍රියාවන්ගෙන් සහ කැපවීම්වලින් පිරී පවතී.</p>
                <p>සබඳතාවය තුළ හැඟීම් ප්‍රධාන තැනක් ගන්නා අතර, ඔවුන්ට සැමවිටම "ඊළඟට කුමක් සිදුවේද?" යන උද්යෝගිමත් අපේක්ෂාව අවශ්‍ය වේ.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>ඔවුන්ගේ මිත්‍රත්වයන් ඉතාමත් සැහැල්ලු සහ ස්වයංසිද්ධ වේ. ඔවුන් තර්ක විතර්ක හෝ දිගුකාලීන සැලසුම් මගින් මිත්‍රත්වය සංකීර්ණ නොකරන අතර, වර්තමාන මොහොත විඳීමට ප්‍රිය කරති.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>ISFP දෙමාපියන් තම දරුවන්ට තම අදහස් විවෘතව ප්‍රකාශ කිරීමට හැකි, විනිශ්චයන්ගෙන් තොර ආරක්ෂිත වටපිටාවක් නිර්මාණය කරයි. ඔවුන් දරුවන් සමඟ ස්වයංසිද්ධ ක්‍රියාකාරකම්වල යෙදීමට කැමතිය.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>ඔවුන්ට හුදෙක් රැකියාවක් පමණක් ප්‍රමාණවත් නොවන අතර නිර්මාණශීලී නිදහස අත්‍යවශ්‍ය වේ. කලාකරුවන්, සංගීතඥයන්, ඡායාරූප ශිල්පීන්, සහ ෆ්‍රීලෑන්ස් වෘත්තිකයන් ලෙස ඔවුහු බැබළෙති.</p>
              `
            }
          ],
          facts: {
            strength: 'අතිශය නිර්මාණශීලී, සංවේදී සහ නම්‍යශීලී ස්වභාවය.',
            weakness: 'දිගුකාලීන සැලසුම් නොමැතිකම, ඉක්මනින් ආතතියට පත්වීම.',
            humor: 'සැහැල්ලු, නිදහස් මෙන්ම අන් අයගේ සිත් නොරිදවන හාස්‍යයක් ඇත.',
            relations: 'වර්තමාන මොහොත විඳින, නිදහස් සහ උණුසුම් බැඳීම්.'
          },
          figures: {
            real: [
              {name:'Bob Dylan', img:'https://upload.wikimedia.org/wikipedia/commons/1/18/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg', desc:'අතිශය නිර්මාණශීලී, ප්‍රකාශනයේ නිදහස ඉහළින්ම අගය කළ ගීත රචකයෙකි.'},
              {name:'Michael Jackson', img:'https://upload.wikimedia.org/wikipedia/commons/9/90/Michael_Jackson_1984.jpg', desc:'කලාව තුළින් තම අභ්‍යන්තර හැඟීම් ලෝකයට බෙදාහදා ගත් සංවේදී කලාකරුවෙකි.'},
              {name:'Frida Kahlo', img:'https://upload.wikimedia.org/wikipedia/commons/4/4b/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg', desc:'වේදනාවන් සහ අත්දැකීම් චිත්‍ර කලාව හරහා නිර්මාණශීලීව ලෝකය හමුවේ තැබූ චරිතයකි.'},
              {name:'Audrey Hepburn', img:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Audrey_Hepburn_1956.jpg', desc:'කරුණාවන්ත, නිහතමානී මෙන්ම ස්වාධීන පෞරුෂයක් පවත්වා ගත් කලාකාරිනියකි.'}
            ],
            fictional: [
              {name:'Harry Potter', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HarryP', desc:'තමන්ගේ හෘද සාක්ෂියට අනුව ක්‍රියා කරන, සංවේදී සහ පරාර්ථකාමී චරිතයකි.'},
              {name:'Belle', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Belle', desc:'සම්ප්‍රදායන්ට වඩා තම පෞද්ගලික අභිලාෂයන් සහ දැනුම සොයා යාමට කැමති චරිතයකි.'},
              {name:'Pocahontas', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Pocahontas', desc:'ස්වභාවධර්මය සමඟ බැඳී, ගවේෂණයට ප්‍රිය කරන නිදහස් චරිතයකි.'},
              {name:'Jon Snow', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JonSnow', desc:'නිහඬ, සංවේදී මෙන්ම හෘද සාක්ෂියට එකඟව ජීවත් වන වගකීම් සහගත ගවේෂකයෙකි.'}
            ],
            anime: [
              {name:'Tanjiro Kamado', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Tanjiro', desc:'කරුණාවන්ත සහ සංවේදී හදවතක් ඇති, අන් අයගේ හැඟීම් මනාව වටහා ගන්නා චරිතයකි.'},
              {name:'Yona', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Yona', desc:'බාධක හමුවේ ස්වාධීනව ලෝකය ගවේෂණය කරමින් වර්ධනය වන නායිකාවකි.'},
              {name:'Wei Wuxian', img:'https://api.dicebear.com/7.x/bottts/svg?seed=WeiWuxian', desc:'සාම්ප්‍රදායික නීතිවලට අභියෝග කරන, නිර්මාණශීලී සහ නිදහස් මනසක් ඇති චරිතයකි.'}
            ]
          }
        }},
      ESTP:{name:'ව්‍යාපාරිකයා',cat:'explorer',catName:'ගවේෂක',desc:'ජවසම්පන්න, ප්‍රායෝගික හා ක්‍රියාශලී පුද්ගලයෙක්.',str:['ජවසම්පන්න බව','අවදානම් ගැනීම'],car:['ව්‍යාපාරික','ක්‍රීඩක'], extra: {
          quote: 'ජීවිතය යනු එක්කෝ නිර්භීත වික්‍රමාන්විතයක්, නැතහොත් කිසිවක්ම නොවේ.',
          author: 'හෙලන් කෙලර් (Helen Keller)',
          intro: 'ESTP (ව්‍යවසායක) පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් යනු අතිශය උද්යෝගිමත්, ජවයෙන් පිරි සහ ඉතාමත් තියුණු නිරීක්ෂණ ශක්තියක් සහිත, ජීවිතයේ සෑම අවස්ථාවකදීම අභියෝගයන්ට මුහුණ දෙමින් ජීවත් වීමට ප්‍රිය කරන පිරිසකි. ඔවුහු සහජයෙන්ම ක්‍රියාකාරීත්වයට මුල් තැන දෙන (Action-oriented) පුද්ගලයන් වෙති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ඔවුන්ගේ අවධානය නිරන්තරයෙන්ම පවතින්නේ වර්තමානය කෙරෙහි වන අතර, දේවල් සිදුවන ආකාරය ගැන කතා කිරීමට වඩා, ඒවා ප්‍රායෝගිකව ක්‍රියාත්මක කිරීමට (Go out and do it) වැඩි කැමැත්තක් දක්වති. බොහෝ විට ඔවුන් වැඩ කටයුතු කිරීමට පෙර ඒ පිළිබඳව ගැඹුරින් සිතා බලනවාට වඩා, වැඩ කරන අතරතුරම තම වැරදි නිවැරදි කර ගැනීමට පෙළඹෙති.</p>
                <p>ESTP පුද්ගලයන්ට අන් අයගේ සදාචාරාත්මක නීති වලට වඩා තමන්ගේම සදාචාරාත්මක මාලිමාව (Moral compass) භාවිතා කිරීම වඩාත් තාර්කික බවක් පෙනේ. "නීති රීති සාදා ඇත්තේ කඩ කිරීමටයි" යන්න ඔවුන්ගේ අදහස විය හැකිය.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>නිර්භීත බව:</strong> සීමාවන් ඉක්මවා යාම සහ නව මෙවලම් හා අදහස් අත්හදා බැලීම විශාල සතුටක් ගෙන දෙයි.</li>
                      <li><strong>තාර්කික සහ ප්‍රායෝගික බව:</strong> දර්ශනයට වඩා දැනුම ක්‍රියාවට නැංවිය හැකි දේවල් බවට පත් කර ගැනීමට කැමතිය.</li>
                      <li><strong>නිරීක්ෂණ ශක්තිය:</strong> පුරුදුවල සහ පෙනුමේ සිදුවන කුඩා වෙනස්කම් පවා ඔවුන්ට ඉක්මනින් වැටහේ.</li>
                      <li><strong>සෘජු බව:</strong> පැහැදිලි, සෘජු සහ කරුණු මත පදනම් වූ සන්නිවේදනයක් පවත්වා ගනී.</li>
                      <li><strong>සමාජශීලී බව:</strong> සමාජ අන්තර්ක්‍රියා සහ ජාලකරණ අවස්ථා මනාව භාවිත කිරීමට දක්ෂ ස්වභාවික නායකයන්ය.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>සංවේදී නොවීම:</strong> කරුණු සහ ප්‍රායෝගිකත්වය ඉදිරියේ හැඟීම් දෙවන තැනට වැටේ.</li>
                      <li><strong>ඉවසිලිවන්ත නොවීම:</strong> අන් අය තේරුම් ගැනීමට පමා වන විට ඔවුන් අතිශය අපහසුතාවයට පත් වේ.</li>
                      <li><strong>ආවේගශීලී බව:</strong> අනාගත ප්‍රතිඵල ගැන නොසිතා හදිසි තීරණ ගැනීමට පෙළඹේ.</li>
                      <li><strong>විශාල පින්තූරය මගහැරීම:</strong> වර්තමානය තුළ ජීවත් වීමට යාම නිසා සමස්ත සැලැස්ම අමතක විය හැකිය.</li>
                      <li><strong>අකීකරු බව:</strong> නීති රීතිවලට කොටු වී සිටීමට ඔවුන් කැමති නැත.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ඔවුන් අනාගත ඉලක්ක වෙනුවෙන් දින ගණමින් බලා සිටින අය නොවේ. ජීවිතය විනෝදජනක සහ පුදුමයන්ගෙන් පිරි එකක් ලෙස දකින ඔවුන්, වර්තමානය තුළ ජීවත් වෙමින් එම සුන්දරත්වය උපරිමයෙන් විඳගැනීමට ප්‍රිය කරයි.</p>
                <p>සබඳතාවය චිත්තවේගීයව වඩාත් ගැඹුරු මට්ටමකට ගෙන යාම ඔවුන්ට අභියෝගයක් විය හැකි නමුත්, ඔවුන්ගේ ස්වභාවික ආකර්ෂණය සහ නිර්භීත බව නිසා ඔවුහු උද්යෝගිමත් සහකරුවන් වෙති.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>ඔවුන්ට ඕනෑම සාදයකට හෝ සමාජ හමුවකට සැබෑ ජීවයක් ලබා දීමට හැකියාව පවතී. කණ්ඩායම් ක්‍රීඩා වැනි ශක්තිජනක ක්‍රියාකාරකම් හරහා අලුත් මිතුරන් හඳුනා ගැනීමට ඔවුන් බෙහෙවින් ප්‍රිය කරති.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>විනෝදයට සහ ක්‍රීඩාවට ලැදි, නම්‍යශීලී මෙන්ම අවබෝධයෙන් යුත් ESTP දෙමාපියන් තම දරුවන් සමඟ කාලය ගත කිරීමට සැබවින්ම ප්‍රිය කරයි. ඔවුන් තම දරුවන්ට උපරිම නිදහස සහ ගවේෂණයට අවස්ථාව ලබා දෙයි.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>ඔවුන් ඕනෑම තත්ත්වයකදී ක්ෂණිකව සිතා තීරණ ගැනීමේ ඉහළ හැකියාවක් ඇති අය වෙති. විකුණුම්, ව්‍යාපාරික සාකච්ඡා, අලෙවිකරණය වැනි තරඟකාරී පරිසරයන් මෙන්ම හදිසි ප්‍රතිචාර දැක්වීමේ වෘත්තීන් ඔවුනට මනාව ගැළපේ.</p>
              `
            }
          ],
          facts: {
            strength: 'නිර්භීත බව, ප්‍රායෝගික නිරීක්ෂණ ශක්තිය සහ සමාජශීලී බව.',
            weakness: 'ආවේගශීලී බව, ඉවසිලිවන්ත නොවීම සහ නීති රීතිවලට අකමැති වීම.',
            humor: 'සෘජු, පොළොවේ පය ගසා ජීවත් වන ආකාරයේ (Down-to-earth) හාස්‍යයක් ඇත.',
            relations: 'වර්තමාන මොහොත විඳින, විනෝදජනක සහ උද්යෝගිමත් බැඳීම්.'
          },
          figures: {
            real: [
              {name:'Ernest Hemingway', img:'https://upload.wikimedia.org/wikipedia/commons/2/28/ErnestHemingway.jpg', desc:'වර්තමානය අගය කළ, වික්‍රමාන්විත ජීවිතයක් ගත කළ ප්‍රකට ලේඛකයෙකි.'},
              {name:'Jack Nicholson', img:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jack_Nicholson_2001.jpg', desc:'සෘජු, නිර්භීත මෙන්ම ආකර්ෂණීය පෞරුෂයක් හිමි රංගන ශිල්පියෙකි.'},
              {name:'Madonna', img:'https://upload.wikimedia.org/wikipedia/commons/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg', desc:'අනපේක්ෂිත, නිර්භීත සහ සැමවිටම අවධානය දිනාගන්නා ගායිකාවකි.'},
              {name:'Samuel L. Jackson', img:'https://upload.wikimedia.org/wikipedia/commons/2/29/SamuelLJackson.jpg', desc:'තම භූමිකාවන්හිදී අතිශය සෘජු සහ ක්‍රියාශීලී පෞරුෂයක් පෙන්වන නළුවෙකි.'}
            ],
            fictional: [
              {name:'Jaime Lannister', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JaimeL', desc:'ක්ෂණික තීරණ ගන්නා, අවදානම් ගැනීමට බිය නොවන නිර්භීත සටන්කරුවෙකි.'},
              {name:'Han Solo', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HanSolo', desc:'නීති කඩ කිරීමට පසුබට නොවන, ප්‍රායෝගිකව ගැටලු විසඳන වික්‍රමාන්විතයෙකි.'},
              {name:'Arthur Curry (Aquaman)', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Aquaman', desc:'සම්ප්‍රදායන්ට අකමැති, ක්‍රියාශීලී සහ ස්වාධීන වීරයෙකි.'},
              {name:'Thor', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Thor', desc:'හැඟීම්වලට වඩා ක්‍රියාවට සහ සටනට ප්‍රිය කරන, ආවේගශීලී රණශූරයෙකි.'}
            ],
            anime: [
              {name:'Inosuke Hashibira', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Inosuke', desc:'ක්ෂණිකව ක්‍රියාත්මක වන, අතිශය තරඟකාරී සහ සෘජු චරිතයකි.'},
              {name:'Katsuki Bakugo', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Bakugo', desc:'ආවේගශීලී, තරඟකාරී සහ සෑමවිටම ක්‍රියාවෙන් පිළිතුරු දෙන චරිතයකි.'},
              {name:'Revy', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Revy', desc:'නීති නොතකන, වර්තමානය සඳහා ජීවත් වන ප්‍රායෝගික සටන්කාරියකි.'}
            ]
          }
        }},
      ESFP:{name:'විනෝද සාදන්නා',cat:'explorer',catName:'ගවේෂක',desc:'ජවසම්පන්න හා ස්වාභාවිකව උද්දීපනයක් දක්වන පුද්ගලයෙක්.',str:['සමාජශීලී බව','උද්යෝගය'],car:['රංගන ශිල්පි','උත්සව සැලසුම්කරු'], extra: {
          quote: 'හැකි සෑම තත්පරයක්ම කිසිදු පැකිලීමකින් තොරව ජීවත් වන්න.',
          author: 'එල්ටන් ජෝන් (Elton John)',
          intro: 'ESFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Entertainers) යනු මොහොතේ පවතින උද්යෝගය තුළ සහමුලින්ම ගිලී යන අතර, තමන් විඳින ඒ සතුට අන් අයටත් ලබා දීමට කැමැත්තක් දක්වන පිරිසකි. අන් අයව දිරිමත් කිරීම සඳහා තමන්ගේ කාලය සහ ශක්තිය ලබා දීමේදී ESFP පුද්ගලයන් තරම් ත්‍යාගශීලී පෞරුෂයක් තවත් නොමැති තරම්ය.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: `
                <p>ESFP පෞරුෂත්වයේ පුද්ගලයන් සාමාන්‍යයෙන් අන් අය ඉදිරියේ රඟපෑමට හෝ තම දක්ෂතා පෙන්වීමට කැමති අතර, අවධානයේ කේන්ද්‍රස්ථානය (spotlight) වීමට ඔවුහු ඉතා ප්‍රිය කරති. එහෙත්, මෙම ආත්ම විශ්වාසය ඔවුන් තුළ ඇති වන්නේ අවධානය ලැබීමට ඇති ආශාව නිසාම නොව, ඕනෑම තත්ත්වයකට ගැළපෙන දේ කුමක්දැයි හඳුනා ගැනීමට ඔවුන් සතු සුවිශේෂී හැකියාව නිසාය.</p>
                <p>ඔවුහු ඉතාමත් කුතුහලයෙන් යුක්තව අලුත් නිර්මාණ සහ විලාසිතා සොයා ගවේෂණය කරති. අන් අයගේ හැඟීම් පිළිබඳව ඉතා සංවේදී වන ඔවුන්, තම මිතුරන් ගැටලුවකට මුහුණ දුන් විට ඔවුන්ට සහයෝගය ලබා දීමට සහ උපදෙස් දීමට සැමවිටම ඉදිරිපත් වේ.</p>
              `
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: `
                <div class="sw-wrap">
                  <div class="sw-col">
                    <h4>ශක්තීන් (Strengths)</h4>
                    <ul>
                      <li><strong>නිර්භීත බව:</strong> අන් අය මැලිවන විට පවා ඔවුන් තම සුවපහසු කලාපයෙන් පිටතට පැමිණ අත්දැකීම් ලබා ගැනීමට කැමැත්තක් දක්වයි.</li>
                      <li><strong>මුල් නිර්මාණශීලී බව:</strong> සම්ප්‍රදායන් සහ අපේක්ෂාවන් ඔවුන්ට වැදගත් නොවන අතර, අලුත් විලාසිතා අත්හදා බලමින් කැපී පෙනීමට ප්‍රිය කරයි.</li>
                      <li><strong>ධනාත්මක සහ උද්යෝගිමත් බව:</strong> ජීවිතය කෙරෙහි පවතින උද්යෝගය නිසා අන් අයව ආකර්ෂණය කර ගන්නා ස්වභාවික චමත්කාරයක් විදහා දක්වයි.</li>
                      <li><strong>ප්‍රායෝගික සහ නිරීක්ෂණශීලී බව:</strong> එදිනෙදා සිදුවන වෙනස්කම් සහ යථාර්ථයන් හඳුනා ගැනීමට සහජ දක්ෂතාවයක් දක්වයි.</li>
                      <li><strong>විශිෂ්ට සමාජ කුසලතා:</strong> කතාබහට සහ විහිළු තහළුවලට දක්ෂ වන අතර, සමාජය සමඟ කාලය ගත කිරීම සතුටක් කර ගනී.</li>
                    </ul>
                  </div>
                  <div class="sw-col">
                    <h4>දුර්වලතාවන් (Weaknesses)</h4>
                    <ul>
                      <li><strong>සංවේදී බව:</strong> දැඩි ලෙස හැඟීම්බර වන අතර විවේචන හමුවේ ඉක්මනින් අවදානමට ලක් වේ.</li>
                      <li><strong>ගැටුම් මගහැරීම:</strong> ගැටුම් විසඳනවා වෙනුවට ඒවා සම්පූර්ණයෙන්ම නොසලකා හැරීමට හෝ මගහැර යාමට පෙළඹේ.</li>
                      <li><strong>ඉක්මනින් කම්මැලිකමට පත් වීම:</strong> නිරන්තර උද්යෝගයක් නොමැති විට අවදානම් සහිත හැසිරීම් හෝ තාවකාලික සතුට පසුපස හඹා යයි.</li>
                      <li><strong>දිගුකාලීන සැලසුම්කරණයේ දුර්වලතා:</strong> අනාගතය සඳහා සවිස්තරාත්මක සැලසුම් සකස් කිරීමට උනන්දුවක් නොදක්වයි.</li>
                      <li><strong>අවධානය රඳවා ගැනීමට අපහසු වීම:</strong> දිගුකාලීන කැපවීම් සහ අවධානය අවශ්‍ය කාර්යයන් ඔවුන්ට අභියෝගයකි.</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: `
                <p>ඔවුන් ආදරය කිරීමේදීද උද්යෝගය ප්‍රදර්ශනය කරන අතර, සබඳතා යනු අනාගතය සඳහා සැලසුම් කිරීමක් ලෙස නොව, සතුට පවතින තාක් කල් විඳිය යුතු අනපේක්ෂිත අත්දැකීම් ලෙස සලකයි.</p>
                <p>ඔවුහු නිතරම අලුත් සහ උද්යෝගිමත් ක්‍රියාකාරකම් තම සහකරු සමඟ බෙදා ගැනීමට ප්‍රිය කරති. එසේම, ඔවුන් භෞතික සමීපතාව ඉතා අගය කරන අතර ආදරණීය සහ විවෘත මනසකින් යුත් සහකරුවන් වේ.</p>
              `
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: `
                <p>ඔවුන් තමන්ගේ සතුට, විහිළු තහළු, ශෛලිය සහ සුබවාදී බව තම මිතුරන් සමඟ බෙදා ගැනීමට ප්‍රිය කරන අතර, ජීවිතයේ වින්දනයන් අන් අය සමඟ බෙදා ගැනීම අගය කරති.</p>
              `
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: `
                <p>ඉතාමත් සැහැල්ලු සහ විනෝදයට ප්‍රිය කරන දෙමාපියන් පිරිසකි. තම දරුවන් ලබන සතුට සහ පුදුමය දෙස බලා සිටීමට ප්‍රිය කරන අතර, දරුවන් සතුටින් තබා ගැනීමට අලුත් ක්‍රම සොයා ගනී.</p>
              `
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: `
                <p>අන් අය සමඟ වැඩ කරන ඕනෑම වෘත්තියක් ඔවුන්ට ඉතා ගැලපේ. උත්සව සැලසුම් කරන්නන්, විකුණුම් නියෝජිතයන්, සංචාරක මාර්ගෝපදේශකයන්, සහ නිර්මාණාත්මක ක්ෂේත්‍රවල ඔවුහු සාර්ථක වෙති.</p>
              `
            }
          ],
          facts: {
            strength: 'නිර්භීත බව, විශිෂ්ට සමාජ කුසලතා සහ ධනාත්මක බව.',
            weakness: 'දිගුකාලීන සැලසුම් නොමැතිකම, ගැටුම් මගහැරීම.',
            humor: 'සජීවී, විනෝදජනක සහ සැමවිටම අන් අයව සිනාස්සන හාස්‍යයක් ඇත.',
            relations: 'උද්යෝගිමත්, නව අත්දැකීම්වලින් පිරි සබඳතා.'
          },
          figures: {
            real: [
              {name:'Elton John', img:'https://upload.wikimedia.org/wikipedia/commons/3/30/Elton_John_2011_Shankbone_2.JPG', desc:'අතිශය නිර්මාණශීලී, කලාත්මක මෙන්ම වේදිකාව මත තම පෞරුෂය මනාව විදහා දක්වන සුප්‍රසිද්ධ සංගීත ශිල්පියෙකි.'},
              {name:'Marilyn Monroe', img:'https://upload.wikimedia.org/wikipedia/commons/4/4e/MarilynMonroe_-_Yank_Army_Weekly.jpg', desc:'ස්වභාවික ආකර්ෂණය සහ චමත්කාරය තුළින් අවධානය දිනාගත්, අතිශය ප්‍රසිද්ධ නිළියකි.'},
              {name:'Jamie Oliver', img:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Jamie_Oliver_by_David_Shankbone.jpg', desc:'ප්‍රායෝගිකව දේවල් කිරීම සහ අන් අය සමඟ එකතු වී ක්‍රියා කිරීමට ඇති දක්ෂතාවය නිසා ප්‍රසිද්ධ වූ සූපවේදියෙකි.'},
              {name:'Adele', img:'https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png', desc:'වේදිකාවේ මෙන්ම සැබෑ ජීවිතයේද අතිශය විනෝදකාමී සහ ආකර්ෂණීය ගායිකාවකි.'}
            ],
            fictional: [
              {name:'Han Solo', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=HanSolo', desc:'අතිශය ස්වයංසිද්ධ, නිර්භීත සහ අවස්ථාවට අනුව ක්‍රියා කිරීමට දක්ෂ චරිතයකි.'},
              {name:'Pippin Took', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Pippin', desc:'සෑමවිටම විනෝදය සහ උද්යෝගය සොයා යන, අතිශය සමාජශීලී චරිතයකි.'},
              {name:'The Joker', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Joker', desc:'අවධානය දිනා ගැනීමට සහ වේදිකාගත වීමට ඇති අසීමිත ආශාව විදහා දක්වන චරිතයකි.'},
              {name:'Captain Jack Sparrow', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=JackSparrow', desc:'අනපේක්ෂිත, චමත්කාරජනක සහ වර්තමානය සඳහා ජීවත් වන වික්‍රමාන්විතයෙකි.'}
            ],
            anime: [
              {name:'Naruto Uzumaki', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Naruto', desc:'අතිශය ශක්තිමත්, මිත්‍රශීලී සහ සෑමවිටම තම අරමුණු වෙනුවෙන් ක්‍රියාශීලීව ඉදිරියට යන චරිතයකි.'},
              {name:'Monkey D. Luffy', img:'https://api.dicebear.com/7.x/bottts/svg?seed=Luffy', desc:'නිදහස අගය කරන, අලුත් දේවල් අත්විඳීමට ප්‍රිය කරන සහ තම මිතුරන් වෙනුවෙන් කැපවන චරිතයකි.'},
              {name:'Usagi Tsukino', img:'https://api.dicebear.com/7.x/bottts/svg?seed=SailorMoon', desc:'අතිශය හැඟීම්බර, මිත්‍රශීලී සහ විලාසිතාවන්ට ප්‍රිය කරන චරිතයකි.'}
            ]
          }
        }}
    },
    questions: [
      {dim:'EI', text:'ඔබ නිරන්තරයෙන්ම අලුත් මිතුරන් ඇති කරගැනීමට උත්සාහ කරයි.', agree:'E', disagree:'I'},
      {dim:'SN', text:'සරල කරුණු වලට වඩා සංකීර්ණ සහ නව්‍ය අදහස් ඔබව වඩාත් උද්යෝගිමත් කරයි.', agree:'N', disagree:'S'},
      {dim:'TF', text:'සාධාරණ තර්කවලට වඩා හැඟීම්බර කරුණු වලින් ඔබ පහසුවෙන් පෙළඹේ.', agree:'F', disagree:'T'},
      {dim:'JP', text:'ඔබේ ජීවන සහ වැඩ කරන පරිසරය ඉතා පිරිසිදු මෙන්ම සංවිධානාත්මකව පවතී.', agree:'J', disagree:'P'},
      {dim:'AT', text:'අධික පීඩනයක් යටතේ වුවද ඔබ සාමාන්‍යයෙන් සන්සුන්ව සිටීමට සමත් වේ.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'නුහුරු පුද්ගලයන් සමඟ සම්බන්ධතා පැවැත්වීම හෝ ඔබ ගැන ප්‍රවර්ධනය කිරීම ඔබට අපහසු කාර්යයකි.', agree:'I', disagree:'E'},
      {dim:'SN', text:'තොරතුරු ලබා ගැනීමේදී ඔබ ප්‍රායෝගික සහ සෘජු ක්‍රමවේදයන්ට මුල්තැන දෙයි.', agree:'S', disagree:'N'},
      {dim:'TF', text:'ඔබ ප්‍රධාන වශයෙන් අවධානය යොමු කරන්නේ පවතින ගැටලුව කඩිනමින් විසඳීමටයි.', agree:'T', disagree:'F'},
      {dim:'JP', text:'ඔබ සැමවිටම කල්තියා සැලසුම් කිරීමට සහ දේවල් පිළිවෙළට තබා ගැනීමට ප්‍රිය කරයි.', agree:'J', disagree:'P'},
      {dim:'AT', text:'ඔබ හමුවන පුද්ගලයන් කෙරෙහි ඔබ ඇති කරන හැඟීම පිළිබඳව ඔබ කලාතුරකින් කරදර වේ.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'අලුත් පුද්ගලයන් හමුවීම ඔබට උද්යෝගයක් සහ නව පණක් ගෙන දෙන්නකි.', agree:'E', disagree:'I'},
      {dim:'SN', text:'යථාර්ථවාදී නොවන නමුත් සිත්ගන්නාසුලු අදහස් ගවේෂණය කිරීමට ඔබ බොහෝ විට කාලය වැය කරයි.', agree:'N', disagree:'S'},
      {dim:'TF', text:'තීරණ ගැනීමේදී ඔබ පුද්ගල හැඟීම්වලට වඩා කරුණු වලට මුල්තැන දෙයි.', agree:'T', disagree:'F'},
      {dim:'JP', text:'කිසිදු සැලසුමකින් තොරව දවස ගෙවී යාමට ඔබ බොහෝ විට ඉඩ හරියි.', agree:'P', disagree:'J'},
      {dim:'AT', text:'ඔබට අනාරක්ෂිත බවක් හෝ අවිශ්වාසයක් දැනෙන්නේ ඉතා කලාතුරකිනි.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'ඔබ කණ්ඩායම් ක්‍රියාකාරකම්වලට සක්‍රීයව සහභාගී වීමට කැමැත්තක් දක්වයි.', agree:'E', disagree:'I'},
      {dim:'SN', text:'අලුත් සහ පරීක්ෂා නොකළ ක්‍රමවේදයන් අත්හදා බැලීමට ඔබ ප්‍රිය කරයි.', agree:'N', disagree:'S'},
      {dim:'TF', text:'සම්පූර්ණයෙන්ම අවංක වීමට වඩා සංවේදී වීමට ඔබ මුල්තැන දෙයි.', agree:'F', disagree:'T'},
      {dim:'SN', text:'ඔබ නිරන්තරයෙන්ම නව අත්දැකීම් සහ දැනුම ලබා ගැනීමට උත්සාහ කරයි.', agree:'N', disagree:'S'},
      {dim:'AT', text:'දේවල් නරක අතට හැරෙනු ඇතැයි ඔබ නිතරම කනස්සල්ලෙන් පසුවේ.', agree:'Tr', disagree:'A'},
      {dim:'EI', text:'ඔබ කණ්ඩායම් ක්‍රියාකාරකම්වලට වඩා හුදෙකලාව කරන විනෝදාංශවලට ප්‍රිය කරයි.', agree:'I', disagree:'E'},
      {dim:'SN', text:'ප්‍රබන්ධ කථා ලිවීම ඔබේ වෘත්තිය ලෙස තෝරාගැනීම ඔබට සිතාගත නොහැකි දෙයකි.', agree:'S', disagree:'N'},
      {dim:'TF', text:'හැඟීම්බර කරුණු නොසලකා හැර වුවද තීරණ ගැනීමේදී කාර්යක්ෂමතාවයට ඔබ මුල්තැන දෙයි.', agree:'T', disagree:'F'},
      {dim:'JP', text:'විනෝද වීමට පෙර ඔබේ සියලු වැඩ කටයුතු අවසන් කිරීමට ඔබ කැමැත්තක් දක්වයි.', agree:'J', disagree:'P'},
      {dim:'TF', text:'මතභේදවලදී, අන් අයගේ හැඟීම්වලට වඩා ඔබේ මතය නිවැරදි බව ඔප්පු කිරීමට ඔබ උත්සාහ කරයි.', agree:'T', disagree:'F'},
      {dim:'EI', text:'සමාජ උත්සවවලදී අන් අය ඔබව හඳුන්වා දෙන තෙක් ඔබ සාමාන්‍යයෙන් බලා සිටියි.', agree:'I', disagree:'E'},
      {dim:'AT', text:'ඔබේ මනෝභාවය ඉතා ඉක්මනින් වෙනස් වීමට ඉඩකඩ පවතී.', agree:'Tr', disagree:'A'},
      {dim:'TF', text:'හැඟීම්බර තර්කවලින් ඔබව පහසුවෙන් පොළඹවා ගත නොහැක.', agree:'T', disagree:'F'},
      {dim:'JP', text:'ඔබ බොහෝ විට වැඩ කටයුතු අවසාන මොහොත දක්වා කල් දමයි.', agree:'P', disagree:'J'},
      {dim:'SN', text:'ඔබ සදාචාරාත්මක ගැටලු සහ උභතෝකෝටිකයන් පිළිබඳ විවාද කිරීමට ප්‍රිය කරයි.', agree:'N', disagree:'S'},
      {dim:'EI', text:'ඔබ සාමාන්‍යයෙන් හුදෙකලාව සිටීමට වඩා අන් අය සමඟ කාලය ගත කිරීමට කැමතියි.', agree:'E', disagree:'I'},
      {dim:'SN', text:'සාකච්ඡාව ඉතා සෛද්ධාන්තික වන විට ඔබ පාලුවට හෝ උනන්දුව අඩු වීමට පත් වේ.', agree:'S', disagree:'N'},
      {dim:'TF', text:'කරුණු සහ හැඟීම් අතර ගැටුමක් ඇති වූ විට ඔබ සාමාන්‍යයෙන් ඔබේ හදවතට එකඟව කටයුතු කරයි.', agree:'F', disagree:'T'},
      {dim:'JP', text:'ස්ථාවර වැඩ හෝ අධ්‍යයන කාලසටහනක් පවත්වා ගැනීම ඔබට අභියෝගාත්මක කාර්යයකි.', agree:'P', disagree:'J'},
      {dim:'AT', text:'ඔබ ගත් තීරණ පිළිබඳව ඔබ කලාතුරකින් දෙවරක් සිතයි.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'මිතුරන් ඔබව ඉතා උද්යෝගිමත් සහ සමාජශීලී පුද්ගලයෙකු ලෙස හඳුන්වයි.', agree:'E', disagree:'I'},
      {dim:'SN', text:'ලිවීම වැනි විවිධ නිර්මාණාත්මක ප්‍රකාශන කෙරෙහි ඔබ ඇල්මක් දක්වයි.', agree:'N', disagree:'S'},
      {dim:'TF', text:'ඔබ සාමාන්‍යයෙන් ඔබේ තීරණ පදනම් කරන්නේ හැඟීම්වලට වඩා වාස්තවික කරුණු මතයි.', agree:'T', disagree:'F'},
      {dim:'JP', text:'සෑම දිනකම කළ යුතු වැඩ ලැයිස්තුවක් තබා ගැනීමට ඔබ ප්‍රිය කරයි.', agree:'J', disagree:'P'},
      {dim:'AT', text:'ඔබේ හැකියාවන් පිළිබඳව ඔබට කිසිදු සැකයක් හෝ බියක් දැනෙන්නේ නැත.', agree:'A', disagree:'Tr'},
      {dim:'EI', text:'ඔබ දුරකථන ඇමතුම් ලබා ගැනීම හැකිතාක් මගහරියි.', agree:'I', disagree:'E'},
      {dim:'SN', text:'නුහුරු අදහස් සහ විවිධ දෘෂ්ටිකෝණයන් ගවේෂණය කිරීමට ඔබ උනන්දු වෙයි.', agree:'N', disagree:'S'},
      {dim:'EI', text:'ඔබට අලුතින් හමුවූ පුද්ගලයන් සමඟ පහසුවෙන් සම්බන්ධතා ගොඩනගා ගත හැකිය.', agree:'E', disagree:'I'},
      {dim:'JP', text:'සැලසුම්වලට බාධාවක් වුවහොත්, හැකි ඉක්මනින් නැවතත් එම මාර්ගයට පැමිණීම ඔබේ ප්‍රමුඛතාවයයි.', agree:'J', disagree:'P'},
      {dim:'AT', text:'බොහෝ කලකට පෙර ඔබ කළ වැරදි පිළිබඳව ඔබ තවමත් කනස්සල්ලෙන් පසුවේ.', agree:'Tr', disagree:'A'},
      {dim:'SN', text:'අනාගතයේ ලෝකය කෙබඳු විය හැකිද යන්න පිළිබඳ මතවාදයන් ගැන සාකච්ඡා කිරීමට ඔබ උනන්දු නැත.', agree:'S', disagree:'N'},
      {dim:'AT', text:'ඔබේ හැඟීම් ඔබව පාලනය කරනවා මිස ඔබ හැඟීම් පාලනය කරන්නේ නැත.', agree:'Tr', disagree:'A'},
      {dim:'TF', text:'තීරණ ගැනීමේදී ඔබ තාර්කිකත්වයට වඩා අදාළ පුද්ගලයන්ගේ හැඟීම් කෙරෙහි අවධානය යොමු කරයි.', agree:'F', disagree:'T'},
      {dim:'JP', text:'ඔබේ වැඩ විලාසය ක්‍රමානුකූල වීමට වඩා හදිසි උද්යෝගීමත් ක්‍රියාකාරකම්වලට සමාන වේ.', agree:'P', disagree:'J'},
      {dim:'AT', text:'යමෙකු ඔබ ගැන ඉහළින් සිතන විට, ඔවුන් ඔබ ගැන කලකිරීමට කොපමණ කාලයක් ගතවේදැයි ඔබ සිතයි.', agree:'Tr', disagree:'A'},
      {dim:'EI', text:'හුදෙකලාව වැඩ කිරීමට සිදුවන රැකියාවකට ඔබ වඩාත් ප්‍රිය කරයි.', agree:'I', disagree:'E'},
      {dim:'SN', text:'දාර්ශනික ප්‍රශ්න ගැන සිතීම කාලය නාස්ති කිරීමක් බව ඔබ විශ්වාස කරයි.', agree:'S', disagree:'N'},
      {dim:'EI', text:'ඔබ නිස්කලංක ස්ථානවලට වඩා කාර්යබහුල පරිසරයකට කැමැත්තක් දක්වයි.', agree:'E', disagree:'I'},
      {dim:'TF', text:'යම් තීරණයක් නිවැරදි යැයි හැඟේ නම්, සාක්ෂි නොමැතිව වුවද ඔබ ඒ අනුව කටයුතු කරයි.', agree:'F', disagree:'T'},
      {dim:'AT', text:'ඔබට බොහෝ විට ජීවිතයේ වැඩ කටයුතු දරාගත නොහැකි බවක් දැනේ.', agree:'Tr', disagree:'A'},
      {dim:'JP', text:'කිසිදු පියවරක් මග නොහැර ඔබ ඕනෑම කාර්යයක් ක්‍රමානුකූලව අවසන් කරයි.', agree:'J', disagree:'P'},
      {dim:'SN', text:'පියවර අනුගමනය කිරීමට වඩා නිර්මාණශීලී විසඳුම් සෙවීමට අවශ්‍ය වැඩවලට ඔබ ප්‍රිය කරයි.', agree:'N', disagree:'S'},
      {dim:'TF', text:'තීරණයක් ගැනීමේදී ඔබ තර්කනයට වඩා ඔබේ සහජ බුද්ධිය (intuition) මත රඳා පවතී.', agree:'F', disagree:'T'},
      {dim:'JP', text:'නියමිත දින වකවානු (deadlines) සමඟ වැඩ කිරීම ඔබට අසීරු වේ.', agree:'P', disagree:'J'},
      {dim:'AT', text:'දේවල් ඔබට යහපත් ලෙස සිදුවනු ඇතැයි යන ස්ථාවර විශ්වාසය ඔබ සතුය.', agree:'A', disagree:'Tr'}
    ]
  }
};