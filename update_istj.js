const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

const siExtra = `extra: {
          quote: 'මට ලැබී ඇති කුමන හෝ හැකියාවන් ප්‍රයෝජනයට නොගෙන සිටීමට මම බිය වෙමි. වැඩ කල්දැමීම සහ අලසකම පිළිබඳව මම මීට වඩා බෙහෙවින් බිය වෙමි.',
          author: 'ඩෙන්සෙල් වොෂින්ටන් (Denzel Washington)',
          intro: 'ISTJ පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Logisticians) යනු බාහිරින් තරමක් නිහඬ, නමුත් දැඩි අධිෂ්ඨානශීලී සහ ජීවිතය දෙස ඉතාමත් තාර්කික, ප්‍රායෝගික දෘෂ්ටිකෝණයකින් බලන පිරිසකි. ඔවුහු තමන් ගන්නා සෑම ක්‍රියාවක්ම ඉතාමත් සැලකිලිමත් ව පියවරෙන් පියවර සැලසුම් කරන අතර, ඒවා ක්‍රමවත් ක්‍රමවේදයකට අනුව (Methodical purpose එකකින්) අවසානය දක්වාම සාර්ථකව ක්‍රියාවට නැංවීමට කැපවෙති.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: \`
                <p>ISTJ පෞරුෂත්වයේ පුද්ගලයන් තමන් පවසන වචනය ඒ අයුරින්ම අදහස් කරන අතර, තමන් අදහස් කරන දේ පමණක් සෘජුව ප්‍රකාශ කරති. ඔවුන් කිසියම් කාර්යයක් ඉටු කිරීමට පොරොන්දු වුවහොත්, එහි වගකීම උපරිමයෙන්ම ඉටු කිරීමට ඔවුහු වගබලා ගනිති.</p>
                <p>ඔවුන් තුළ පවතින මෙම වගකිවයුතු සහ සියයට සියයක්ම විශ්වාස කළ හැකි සහජ ස්වභාවය නිසාම, සමාජීය රාමුවලට, ක්‍රමවත් ව්‍යුහයන්ට සහ සම්ප්‍රදායන්ට (Structure & Tradition) ඔවුන් තුළ ඇත්තේ අතිශය ගැඹුරු ගරුත්වයකි. තමන්ගේ ක්‍රමවත් සහ සැලසුම්සහගත ස්වභාවයට එකඟව, ISTJ පුද්ගලයෝ කිසිවිටෙකත් ක්ෂණික හැඟීම් මත පදනම් වූ හදිසි තීරණ ගන්නේ නැත.</p>
              \`
            },
            {
              title: 'ඉහළ සදාචාරය සහ අවංකභාවය (A Life of Integrity)',
              content: \`
                <p>ඕනෑම ප්‍රායෝගික අවස්ථාවකදී ඉදිරියට යාම සඳහා අනුගමනය කළ යුතු එකම එක් නිවැරදි සහ සාධාරණ මඟක් පවතින බව ISTJ පෞරුෂයන් දැඩිව විශ්වාස කරති. තමන් අතින් සිදුවන වැරදි ඉතාමත් ඉක්මනින් පිළිගන්නා මොවුන්, එමඟින් තමන් සමාජය ඉදිරියේ අපහසුතාවයට පත් වුවද පවතින සැබෑ සත්‍යය ඒ අයුරින්ම ප්‍රකාශ කරති.</p>
                <p>බාහිරින් රඟපාන බොරු සංදර්ශනවලට වඩා සැබෑ අවංකභාවය සහ සෘජු, පැහැදිලි සන්නිවේදනය අතිශය වැදගත්ය. වෙනත් කෙනෙකුගේ සිත දිනා ගැනීම සඳහා බොරු කීමට වඩා, තමන්ගේම හෘද සාක්ෂිය සතුටින් තබා ගැනීමට ඔවුහු සැමවිටම කටයුතු කරති.</p>
              \`
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: \`
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
              \`
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: \`
                <p>ISTJ පුද්ගලයන් ප්‍රේම සබඳතාවලදීද අතිශය වගකිවයුතු, සියයට සියයක්ම විශ්වාස කළ හැකි සහකරුවන් වේ. ඔවුන් ක්ෂණික ආදර හමුවීම් (Blind dates) හෝ ආදර සෙල්ලම් ප්‍රතික්ෂේප කරති.</p>
                <p>සබඳතාවයේ ස්ථාවර කැපවීම් සහ පොරොන්දු ඇති කරගත් පසු, ඔවුහු තමන් ලබාදුන් පොරොන්දු සියල්ලම ජීවිතයේ අවසානය දක්වාම අකුරටම රකිති.</p>
              \`
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: \`
                <p>සැබෑ ISTJ මිතුරෙකු යනු අතිශය පක්ෂපාතී, සියයට සියයක්ම විශ්වාස කළ හැකි, ගෞරවනීය මෙන්ම ඕනෑම අවස්ථාවකදී ළඟින්ම සිටින උදාර චරිතයකි. ඔවුන් තමන්ගේ මිත්‍රත්වය ප්‍රකාශ කරන්නේ වචනවලින් නොව ප්‍රායෝගික ක්‍රියාවෙනි.</p>
              \`
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: \`
                <p>ISTJ දෙමාපියන් තම දරුවන්ව පවුල තුළ මෙන්ම සමාජය ඉදිරියේ ගරුත්වයක් ඇති සාමාජිකයන් ලෙස ඇති දැඩි කිරීමට කටයුතු කරති. ඔවුන් තම දරුවන් වෙනුවෙන් ඉතාමත් ස්ථාවර සහ ක්‍රමවත් ව්‍යුහාත්මක පරිසරයක් නිර්මාණය කර දෙති.</p>
              \`
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: \`
                <p>මොවුන් වඩාත්ම අවධානය යොමු කරන්නේ ඉතාමත් ස්ථාවර වූත්, ශක්තිමත් වූත් දීර්ඝකාලීන වෘත්තීය ජීවිතයක් ගොඩනඟා ගැනීම වෙනුවෙනි. හමුදා නිලධාරීන්, නීතිඥයන්, ගණකාධිකාරීවරුන් සහ දත්ත විශ්ලේෂකයන් ලෙස මොවුන් බෙහෙවින් සාර්ථක වේ.</p>
              \`
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
        }`;

const enExtra = `extra: {
          quote: 'I would be more frightened by not using whatever abilities I\\'d been given. I\\'d be more frightened by procrastination and laziness.',
          author: 'Denzel Washington',
          intro: 'Logisticians (ISTJs) are quiet, firm, and approach life from a very logical and practical perspective. They meticulously plan their actions and follow them through methodically to successful completion.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>ISTJs are extremely responsible and 100% reliable partners in romantic relationships. They reject blind dates or dating games.</p>
                <p>Once stable commitments and promises are established in the relationship, they strictly adhere to them for the rest of their lives.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>A true ISTJ friend is an extremely loyal, 100% trustworthy, and honorable companion who will stay by your side in any situation. They express their friendship through practical actions rather than words.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>ISTJ parents work to raise their children as respected members of both the family and society. They create a highly stable and structured environment for their children.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>They focus the most on building a highly stable and strong long-term career. They are highly successful as military officers, lawyers, accountants, and data analysts.</p>
              \`
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
        }`;

const regexSi = /(ISTJ:\{name:\'ලොජිස්ටිකියන්\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexSi, `$1, ${siExtra}}`);

const regexEn = /(ISTJ:\{name:\'The Logistician\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexEn, `$1, ${enExtra}}`);

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
console.log('Update Data Done');
