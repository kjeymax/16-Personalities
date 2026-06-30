const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

const siExtra = `extra: {
          quote: 'ජීවිතය යනු එක්කෝ නිර්භීත වික්‍රමාන්විතයක්, නැතහොත් කිසිවක්ම නොවේ.',
          author: 'හෙලන් කෙලර් (Helen Keller)',
          intro: 'ESTP (ව්‍යවසායක) පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් යනු අතිශය උද්යෝගිමත්, ජවයෙන් පිරි සහ ඉතාමත් තියුණු නිරීක්ෂණ ශක්තියක් සහිත, ජීවිතයේ සෑම අවස්ථාවකදීම අභියෝගයන්ට මුහුණ දෙමින් ජීවත් වීමට ප්‍රිය කරන පිරිසකි. ඔවුහු සහජයෙන්ම ක්‍රියාකාරීත්වයට මුල් තැන දෙන (Action-oriented) පුද්ගලයන් වෙති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: \`
                <p>ඔවුන්ගේ අවධානය නිරන්තරයෙන්ම පවතින්නේ වර්තමානය කෙරෙහි වන අතර, දේවල් සිදුවන ආකාරය ගැන කතා කිරීමට වඩා, ඒවා ප්‍රායෝගිකව ක්‍රියාත්මක කිරීමට (Go out and do it) වැඩි කැමැත්තක් දක්වති. බොහෝ විට ඔවුන් වැඩ කටයුතු කිරීමට පෙර ඒ පිළිබඳව ගැඹුරින් සිතා බලනවාට වඩා, වැඩ කරන අතරතුරම තම වැරදි නිවැරදි කර ගැනීමට පෙළඹෙති.</p>
                <p>ESTP පුද්ගලයන්ට අන් අයගේ සදාචාරාත්මක නීති වලට වඩා තමන්ගේම සදාචාරාත්මක මාලිමාව (Moral compass) භාවිතා කිරීම වඩාත් තාර්කික බවක් පෙනේ. "නීති රීති සාදා ඇත්තේ කඩ කිරීමටයි" යන්න ඔවුන්ගේ අදහස විය හැකිය.</p>
              \`
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: \`
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
              \`
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: \`
                <p>ඔවුන් අනාගත ඉලක්ක වෙනුවෙන් දින ගණමින් බලා සිටින අය නොවේ. ජීවිතය විනෝදජනක සහ පුදුමයන්ගෙන් පිරි එකක් ලෙස දකින ඔවුන්, වර්තමානය තුළ ජීවත් වෙමින් එම සුන්දරත්වය උපරිමයෙන් විඳගැනීමට ප්‍රිය කරයි.</p>
                <p>සබඳතාවය චිත්තවේගීයව වඩාත් ගැඹුරු මට්ටමකට ගෙන යාම ඔවුන්ට අභියෝගයක් විය හැකි නමුත්, ඔවුන්ගේ ස්වභාවික ආකර්ෂණය සහ නිර්භීත බව නිසා ඔවුහු උද්යෝගිමත් සහකරුවන් වෙති.</p>
              \`
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: \`
                <p>ඔවුන්ට ඕනෑම සාදයකට හෝ සමාජ හමුවකට සැබෑ ජීවයක් ලබා දීමට හැකියාව පවතී. කණ්ඩායම් ක්‍රීඩා වැනි ශක්තිජනක ක්‍රියාකාරකම් හරහා අලුත් මිතුරන් හඳුනා ගැනීමට ඔවුන් බෙහෙවින් ප්‍රිය කරති.</p>
              \`
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: \`
                <p>විනෝදයට සහ ක්‍රීඩාවට ලැදි, නම්‍යශීලී මෙන්ම අවබෝධයෙන් යුත් ESTP දෙමාපියන් තම දරුවන් සමඟ කාලය ගත කිරීමට සැබවින්ම ප්‍රිය කරයි. ඔවුන් තම දරුවන්ට උපරිම නිදහස සහ ගවේෂණයට අවස්ථාව ලබා දෙයි.</p>
              \`
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: \`
                <p>ඔවුන් ඕනෑම තත්ත්වයකදී ක්ෂණිකව සිතා තීරණ ගැනීමේ ඉහළ හැකියාවක් ඇති අය වෙති. විකුණුම්, ව්‍යාපාරික සාකච්ඡා, අලෙවිකරණය වැනි තරඟකාරී පරිසරයන් මෙන්ම හදිසි ප්‍රතිචාර දැක්වීමේ වෘත්තීන් ඔවුනට මනාව ගැළපේ.</p>
              \`
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
        }`;

const enExtra = `extra: {
          quote: 'Life is either a daring adventure or nothing at all.',
          author: 'Helen Keller',
          intro: 'Entrepreneurs (ESTPs) are highly enthusiastic, energetic, and perceptive people who love to live life on the edge. They are action-oriented individuals who excel at navigating whatever situation is in front of them.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>ESTPs aren't the type to spend days pining for future milestones like marriage. They see life as a fun, surprise-filled journey and prefer to live in the present moment.</p>
                <p>Their spontaneity makes them incredibly exciting dating partners, though transitioning into deeper emotional intimacy can sometimes be a challenge for them.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>An ESTP is the life of any party. They are energetic and highly sociable, effortlessly moving from group to group, making new friends through shared activities and sports.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>Fun-loving, flexible, and understanding, ESTP parents genuinely enjoy spending time with their children. They encourage hands-on exploration and give their kids a lot of freedom.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>They are excellent at thinking on their feet. Competitive, high-pressure environments like sales, marketing, and business negotiations suit them perfectly, as do emergency response roles.</p>
              \`
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
        }`;

// Update Sinhala
const regexSi = /(ESTP:\{name:\'ව්‍යාපාරිකයා\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexSi, `$1, ${siExtra}}`);

// Update English
const regexEn = /(ESTP:\{name:\'The Entrepreneur\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexEn, `$1, ${enExtra}}`);

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
console.log('Update Data Done');
