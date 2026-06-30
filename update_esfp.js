const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

const siExtra = `extra: {
          quote: 'හැකි සෑම තත්පරයක්ම කිසිදු පැකිලීමකින් තොරව ජීවත් වන්න.',
          author: 'එල්ටන් ජෝන් (Elton John)',
          intro: 'ESFP පෞරුෂත්ව වර්ගය හිමි පුද්ගලයන් (Entertainers) යනු මොහොතේ පවතින උද්යෝගය තුළ සහමුලින්ම ගිලී යන අතර, තමන් විඳින ඒ සතුට අන් අයටත් ලබා දීමට කැමැත්තක් දක්වන පිරිසකි. අන් අයව දිරිමත් කිරීම සඳහා තමන්ගේ කාලය සහ ශක්තිය ලබා දීමේදී ESFP පුද්ගලයන් තරම් ත්‍යාගශීලී පෞරුෂයක් තවත් නොමැති තරම්ය.',
          sections: [
            {
              title: 'ප්‍රධාන ගතිලක්ෂණ සහ පෞරුෂත්වයේ ස්වභාවය',
              content: \`
                <p>ESFP පෞරුෂත්වයේ පුද්ගලයන් සාමාන්‍යයෙන් අන් අය ඉදිරියේ රඟපෑමට හෝ තම දක්ෂතා පෙන්වීමට කැමති අතර, අවධානයේ කේන්ද්‍රස්ථානය (spotlight) වීමට ඔවුහු ඉතා ප්‍රිය කරති. එහෙත්, මෙම ආත්ම විශ්වාසය ඔවුන් තුළ ඇති වන්නේ අවධානය ලැබීමට ඇති ආශාව නිසාම නොව, ඕනෑම තත්ත්වයකට ගැළපෙන දේ කුමක්දැයි හඳුනා ගැනීමට ඔවුන් සතු සුවිශේෂී හැකියාව නිසාය.</p>
                <p>ඔවුහු ඉතාමත් කුතුහලයෙන් යුක්තව අලුත් නිර්මාණ සහ විලාසිතා සොයා ගවේෂණය කරති. අන් අයගේ හැඟීම් පිළිබඳව ඉතා සංවේදී වන ඔවුන්, තම මිතුරන් ගැටලුවකට මුහුණ දුන් විට ඔවුන්ට සහයෝගය ලබා දීමට සහ උපදෙස් දීමට සැමවිටම ඉදිරිපත් වේ.</p>
              \`
            },
            {
              title: 'ශක්තීන් සහ දුර්වලතාවන් (Strengths & Weaknesses)',
              content: \`
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
              \`
            },
            {
              title: 'ආදරය සහ සබඳතා (Romantic Relationships)',
              content: \`
                <p>ඔවුන් ආදරය කිරීමේදීද උද්යෝගය ප්‍රදර්ශනය කරන අතර, සබඳතා යනු අනාගතය සඳහා සැලසුම් කිරීමක් ලෙස නොව, සතුට පවතින තාක් කල් විඳිය යුතු අනපේක්ෂිත අත්දැකීම් ලෙස සලකයි.</p>
                <p>ඔවුහු නිතරම අලුත් සහ උද්යෝගිමත් ක්‍රියාකාරකම් තම සහකරු සමඟ බෙදා ගැනීමට ප්‍රිය කරති. එසේම, ඔවුන් භෞතික සමීපතාව ඉතා අගය කරන අතර ආදරණීය සහ විවෘත මනසකින් යුත් සහකරුවන් වේ.</p>
              \`
            },
            {
              title: 'මිත්‍රත්වය (Friendships)',
              content: \`
                <p>ඔවුන් තමන්ගේ සතුට, විහිළු තහළු, ශෛලිය සහ සුබවාදී බව තම මිතුරන් සමඟ බෙදා ගැනීමට ප්‍රිය කරන අතර, ජීවිතයේ වින්දනයන් අන් අය සමඟ බෙදා ගැනීම අගය කරති.</p>
              \`
            },
            {
              title: 'දෙමාපිය භූමිකාව (Parenthood)',
              content: \`
                <p>ඉතාමත් සැහැල්ලු සහ විනෝදයට ප්‍රිය කරන දෙමාපියන් පිරිසකි. තම දරුවන් ලබන සතුට සහ පුදුමය දෙස බලා සිටීමට ප්‍රිය කරන අතර, දරුවන් සතුටින් තබා ගැනීමට අලුත් ක්‍රම සොයා ගනී.</p>
              \`
            },
            {
              title: 'වෘත්තීය ජීවිතය (Career Paths)',
              content: \`
                <p>අන් අය සමඟ වැඩ කරන ඕනෑම වෘත්තියක් ඔවුන්ට ඉතා ගැලපේ. උත්සව සැලසුම් කරන්නන්, විකුණුම් නියෝජිතයන්, සංචාරක මාර්ගෝපදේශකයන්, සහ නිර්මාණාත්මක ක්ෂේත්‍රවල ඔවුහු සාර්ථක වෙති.</p>
              \`
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
        }`;

const enExtra = `extra: {
          quote: 'Live every second without hesitation.',
          author: 'Elton John',
          intro: 'Entertainers (ESFPs) love vibrant experiences, engaging with people, and discovering new things. They get caught up in the excitement of the moment, and want everyone else to feel that way, too.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>ESFPs are social, fun-loving, and free-spirited individuals who live entirely in the moment. They bring this same enthusiasm to dating and romantic relationships.</p>
                <p>They see relationships not as foundations for the future, but as unpredictable experiences that should be enjoyed as long as the excitement lasts.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>Entertainers are famous for their vibrant and enthusiastic attitudes. They love sharing their pleasure, humor, style, and optimism with their friends.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>They are highly relaxed, fun-loving parents who genuinely enjoy playing with their children and exploring the world together without strict rules or schedules.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>ESFPs excel in careers where they can work with others and avoid strict, repetitive tasks. They make great event planners, sales representatives, tour guides, and artists.</p>
              \`
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
              {name:'Marilyn Monroe', img:'https://upload.wikimedia.org/wikipedia/commons/4/4e/MarilynMonroe_-_Yank_Army_Weekly.jpg', desc:'An iconic actress whose natural charm and charisma captured the world\\'s attention.'},
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
        }`;

// Update Sinhala
const regexSi = /(ESFP:\{name:\'විනෝද සාදන්නා\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexSi, `$1, ${siExtra}}`);

// Update English
const regexEn = /(ESFP:\{name:\'The Entertainer\'[^}]*car:\[.*?\])\}/;
content = content.replace(regexEn, `$1, ${enExtra}}`);

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
console.log('Update Data Done');
