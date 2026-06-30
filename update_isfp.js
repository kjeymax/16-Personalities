const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

const siExtra = `extra: {
          quote: 'දවසක් පුරා මගේ ස්වභාවය වෙනස් වෙනවා. මම අවදි වෙන්නේ එක පුද්ගලයෙක් විදියට, නමුත් මම නින්දට යන විට මම අනිවාර්යයෙන්ම දන්නවා මම ඊට හාත්පසින්ම වෙනස් තවත් කෙනෙක් කියලා.',
          author: 'බොබ් ඩිලන් (Bob Dylan)',
          intro: 'ISFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Adventurers) යනු සැබෑ කලාකරුවන් පිරිසකි. ඔවුන්ට අනුව, ජීවිතය යනුම තමන්ගේ සැබෑ ආත්මය ප්‍රකාශ කිරීමට භාවිත කළ හැකි අතිශය සුන්දර කැන්වස් එකකි. ගවේෂණාත්මක ස්වභාවය සහ කුඩා දේවලින් උපරිම සතුටක් ලැබීමේ හැකියාව ඔවුන් සතුය.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: \`
                <p>ඔවුන් ජීවිතය දෙස බලන්නේ ඉතාමත් නම්‍යශීලී සහ වෙනස් වීමට බිය නොවන ප්‍රවේශයකිනි. ඔවුන් සෑම දවසක්ම ගෙවන්නේ එම මොහොතේ තමන්ට නිවැරදි යැයි හැඟෙන දේ සිදු කරමිනි. ඔවුන් තමන්ගේ ජීවිතය තුළ සැමවිටම අනපේක්ෂිත දේ සඳහා ඉඩක් තබා ගනී.</p>
                <p>අන් අයගේ අදහස්වලට ඉතාමත් ඉහළින් ගරු කරන ඔවුන්, අන් අයව විනිශ්චය නොකරන උදාර ගුණාංගයකින් යුක්ත වේ. ඔවුන් ලෝකයේ විවිධත්වය අගය කරන අතර, තමන්ට වඩා හාත්පසින්ම වෙනස් මත දරන මිනිසුන්ව ඉතාමත් ආදරයෙන් වැළඳ ගනිති.</p>
              \`
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: \`
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
              \`
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: \`
                <p>ඔවුන් අතිශය හැඟීම්බර පුද්ගලයන් වුවද, තම සංවේදී අභ්‍යන්තරය ඉතා ප්‍රවේශමෙන් ආරක්ෂා කර ගනී. ඔවුන්ගේ ආදරය වචනවලට වඩා කුඩා ප්‍රායෝගික ක්‍රියාවන්ගෙන් සහ කැපවීම්වලින් පිරී පවතී.</p>
                <p>සබඳතාවය තුළ හැඟීම් ප්‍රධාන තැනක් ගන්නා අතර, ඔවුන්ට සැමවිටම "ඊළඟට කුමක් සිදුවේද?" යන උද්යෝගිමත් අපේක්ෂාව අවශ්‍ය වේ.</p>
              \`
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: \`
                <p>ඔවුන්ගේ මිත්‍රත්වයන් ඉතාමත් සැහැල්ලු සහ ස්වයංසිද්ධ වේ. ඔවුන් තර්ක විතර්ක හෝ දිගුකාලීන සැලසුම් මගින් මිත්‍රත්වය සංකීර්ණ නොකරන අතර, වර්තමාන මොහොත විඳීමට ප්‍රිය කරති.</p>
              \`
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: \`
                <p>ISFP දෙමාපියන් තම දරුවන්ට තම අදහස් විවෘතව ප්‍රකාශ කිරීමට හැකි, විනිශ්චයන්ගෙන් තොර ආරක්ෂිත වටපිටාවක් නිර්මාණය කරයි. ඔවුන් දරුවන් සමඟ ස්වයංසිද්ධ ක්‍රියාකාරකම්වල යෙදීමට කැමතිය.</p>
              \`
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: \`
                <p>ඔවුන්ට හුදෙක් රැකියාවක් පමණක් ප්‍රමාණවත් නොවන අතර නිර්මාණශීලී නිදහස අත්‍යවශ්‍ය වේ. කලාකරුවන්, සංගීතඥයන්, ඡායාරූප ශිල්පීන්, සහ ෆ්‍රීලෑන්ස් වෘත්තිකයන් ලෙස ඔවුහු බැබළෙති.</p>
              \`
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
        }`;

const enExtra = `extra: {
          quote: 'I change during the course of a day. I wake and I\\'m one person, and when I go to sleep I know for certain I\\'m somebody else.',
          author: 'Bob Dylan',
          intro: 'Adventurers (ISFPs) are true artists. For them, life is a canvas used to express their true selves. Their explorative nature and ability to find joy in everyday moments makes them incredibly fascinating.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>ISFPs carefully protect their sensitive inner core. They prefer to listen rather than express their own feelings with words. They show their love through spontaneous, practical acts of affection.</p>
                <p>They always need to feel that exciting anticipation of "what's next?". Forcing them into long-term commitments too early can push them away.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>In friendships, ISFPs are relaxed and spontaneous. They don't complicate things with arguments or long-term plans; the "here and now" is what matters.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>ISFP parents create a non-judgmental, safe environment where their children can freely express themselves. They love surprising their kids with spontaneous activities and adventures.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>For ISFPs, a job is not enough; they need creative freedom. They shine as artists, musicians, photographers, designers, and in freelance or consulting roles where they can make the world beautiful.</p>
              \`
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
        }`;

// Update Sinhala
const regexSi = /(ISFP:\{name:\'ත්‍රාසජනක ගවේෂකයා\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexSi, `$1, ${siExtra}}`);

// Update English
const regexEn = /(ISFP:\{name:\'The Adventurer\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexEn, `$1, ${enExtra}}`);

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
console.log('Update Data Done');
