const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

const engExtra = {
  ENTJ: `extra: {
          quote: 'Your time is limited, so don\\'t waste it living someone else\\'s life.',
          author: 'Steve Jobs',
          intro: 'Commanders (ENTJs) are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p class="res-quote">"Taking personal responsibility to ensure the relationship moves smoothly, they strive to make it equally satisfying for both partners."</p>
                <p>ENTJs approach love strategically. They prefer to take the lead in relationships and constantly encourage their partners to bring out their best self.</p>
                <p>However, understanding emotions isn't their strong suit, and trying to control the partner early in the relationship can lead to issues.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>In friendships, they seek personal growth and mutual encouragement. They deeply enjoy sharp debates to present their thoughts. The best way to earn their respect is by intelligently challenging their ideas.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>ENTJ parents are excellent at recognizing and nurturing their children's innate talents. They work hard to raise children who are independent and logical thinkers.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>The professional field is where they shine the brightest. High executive roles and entrepreneurship fit them perfectly. Once they envision a clear future, they can overcome any obstacle to achieve it.</p>
              \`
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
        }`,
  ENTP: `extra: {
          quote: 'Follow the path of the unsafe, independent thinker. Expose your ideas to the dangers of controversy.',
          author: 'Thomas J. Watson',
          intro: 'Debaters (ENTPs) are bold, creative, and capable of deconstructing and rebuilding new ideas with incredibly high mental agility.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>ENTPs can be incredibly exciting yet highly challenging partners. They strongly dislike monotony in relationships.</p>
                <p>They must realize that emotional understanding, sensitivity, and compromise are critical to maintaining a strong relationship.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>They express friendship through debates and discussions. They love having friends who challenge their opinions and aren't afraid to disagree.</p>
                <p>When a friend is feeling down, attempting to offer logical solutions rather than comfort can sometimes cause resentment.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>ENTP parents give their children maximum freedom to explore the world independently. They teach their kids to view things objectively and logically.</p>
                <p>However, when children enter adolescence, ENTP parents may find emotional outbursts very confusing.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>They thrive in any environment that allows them to direct their mental energy and create new approaches using innovative ideas. They are highly successful as lawyers, software engineers, and systems analysts.</p>
              \`
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
        }`,
  INFJ: `extra: {
          quote: 'Treat people as if they were what they ought to be and you help them to become what they are capable of being.',
          author: 'Johann Wolfgang Von Goethe',
          intro: 'Advocates (INFJs) are individuals who approach life with deep thought and high imagination. Their inner vision, personal values, and quiet, principled dedication to humanity guide everything they do.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p class="res-quote">"Love comes more naturally to the human heart than its opposite." — Nelson Mandela</p>
                <p>INFJs always seek depth and meaning in love. They are rarely satisfied with ordinary connections not based on true love. They desire emotional, soulful, and spiritual bonds with their partners.</p>
                <p>In relationships, they are loving, protective, honest, and highly perceptive. They strive for personal growth and constantly work to strengthen their bond.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p class="res-quote">"The most I can do for my friend is simply be his friend." — Henry David Thoreau</p>
                <p>They find no satisfaction in shallow, superficial friendships. They only need a few close friends who truly understand and accept them. Once formed, they are incredibly loyal and caring friends.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p class="res-quote">"Children must be taught how to think, not what to think." — Margaret Mead</p>
                <p>The primary goal of INFJ parents is to raise independent, noble children filled with good qualities. They focus heavily on building their children's emotional intelligence and kindness.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p class="res-quote">"Go out and do something. It isn’t your room that’s a prison, it’s yourself." — Sylvia Plath</p>
                <p>When making career decisions, they look for the ability to connect meaningfully with others and achieve personal fulfillment. They are deeply dissatisfied if a job lacks a deeper sense of purpose. They thrive as counselors, psychologists, teachers, social workers, and writers.</p>
              \`
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
        }`,
  INFP: `extra: {
          quote: 'All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost.',
          author: 'J. R. R. Tolkien',
          intro: 'Mediators (INFPs) are quiet, open-minded, and highly imaginative individuals. They apply a deeply caring and creative approach to everything they do.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>INFPs enter the world of love with high expectations and ideals. They aren't looking for just a partner, but a true soulmate.</p>
                <p>When truly in love, they are fiercely loyal and caring. They utilize all their creativity to make their partner feel truly special.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>They value quality over quantity in friendships. They seek deep bonds where they can share their greatest hopes and dreams without fear of judgment.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>INFP parents are incredibly loving, protective, and open-minded. They strive to give their children maximum freedom to grow with their own independent identities.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>Rather than a job just to pay bills, they want a career that offers maximum personal fulfillment. Writing, acting, music, and counseling suit them perfectly.</p>
              \`
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
        }`,
  ENFJ: `extra: {
          quote: 'When the whole world is silent, even one voice becomes powerful.',
          author: 'Malala Yousafzai',
          intro: 'Protagonists (ENFJs) are incredibly warm, honest, and straightforward individuals who love helping others. With strong ideals, they apply their creative energy to achieve their dreams.',
          sections: [
            {
              title: 'Strengths & Weaknesses',
              content: \`
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
              \`
            },
            {
              title: 'Romantic Relationships',
              content: \`
                <p>In matters of the heart, ENFJs express incredibly intense emotions. Believing in the beauty of true love, they won't stop until they find their soulmate.</p>
                <p>They dislike dating games and aren't afraid to make the first move. They work tirelessly to support their partner in achieving their grand dreams.</p>
              \`
            },
            {
              title: 'Friendships',
              content: \`
                <p>ENFJs put in dedicated effort to stay close to their friends. They enjoy surrounding themselves with a large circle of friends with varying traits and views.</p>
                <p>They are incredibly reliable in any difficult situation. However, they must learn not to be discouraged when friends don't follow their advice.</p>
              \`
            },
            {
              title: 'Parenthood',
              content: \`
                <p>The primary mission for ENFJ parents is helping their children grow into the best possible people. They deeply instill strong human values and personal responsibility.</p>
                <p>They have high expectations for their children but must ensure these don't turn into overwhelming pressure.</p>
              \`
            },
            {
              title: 'Career Paths',
              content: \`
                <p>ENFJs gain maximum mental satisfaction by helping others. They excel in Human Resources, teaching, counseling, and public relations.</p>
                <p>They constantly seek to witness the real, positive impact their work has on society.</p>
              \`
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
              {name:'Morpheus', img:'https://api.dicebear.com/7.x/avataaars/svg?seed=Morpheus', desc:'An idealistic leader who recognized others\\' true potential and guided them.'},
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
        }`
};

let enContent = content.substring(content.indexOf('en: {'), content.indexOf('si: {'));

for (const type in engExtra) {
    const regex = new RegExp(`(${type}:\\{[^}]*car:\\[.*?\\])\\}(,|\\n)`, 'g');
    content = content.replace(regex, `$1, ${engExtra[type]}} `);
}

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
console.log('Done');
