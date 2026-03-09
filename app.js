// ===== WORD DATA =====
const words = [
    {
        "word":  "Pragmatic",
        "pron":  "prag-MAT-ik",
        "pos":  "Adjective",
        "def":  "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        "ex":  "Instead of hoping for a miracle, she took a pragmatic approach to solving the budget crisis."
    },
    {
        "word":  "Ubiquitous",
        "pron":  "yoo-BIK-wih-tus",
        "pos":  "Adjective",
        "def":  "Present, appearing, or found everywhere.",
        "ex":  "Smartphones have become a ubiquitous part of modern life."
    },
    {
        "word":  "Tenacious",
        "pron":  "teh-NAY-shus",
        "pos":  "Adjective",
        "def":  "Tending to keep a firm hold of something; clinging or adhering closely. Not easily stopped or discouraged.",
        "ex":  "His tenacious spirit allowed him to finish the marathon despite the injury."
    },
    {
        "word":  "Candid",
        "pron":  "KAN-did",
        "pos":  "Adjective",
        "def":  "Truthful and straightforward; frank.",
        "ex":  "I appreciate your candid feedback on my presentation."
    },
    {
        "word":  "Meticulous",
        "pron":  "muh-TIK-yuh-lus",
        "pos":  "Adjective",
        "def":  "Showing great attention to detail; very careful and precise.",
        "ex":  "The artist was completely meticulous in painting the tiny details of the portrait."
    },
    {
        "word":  "Eloquent",
        "pron":  "EL-uh-kwent",
        "pos":  "Adjective",
        "def":  "Fluent or persuasive in speaking or writing.",
        "ex":  "She gave an eloquent speech that moved the entire audience to tears."
    },
    {
        "word":  "Resilient",
        "pron":  "rih-ZIL-yunt",
        "pos":  "Adjective",
        "def":  "Able to withstand or recover quickly from difficult conditions.",
        "ex":  "Children are often far more resilient than we give them credit for."
    },
    {
        "word":  "Lucid",
        "pron":  "LOO-sid",
        "pos":  "Adjective",
        "def":  "Expressed clearly; easy to understand. Thinking clearly.",
        "ex":  "The professor gave a lucid explanation of a very complex theory."
    },
    {
        "word":  "Ambiguous",
        "pron":  "am-BIG-yoo-us",
        "pos":  "Adjective",
        "def":  "Open to more than one interpretation; having a double meaning.",
        "ex":  "The instructions on the box were so ambiguous that I built the chair backward."
    },
    {
        "word":  "Amiable",
        "pron":  "AY-mee-uh-bul",
        "pos":  "Adjective",
        "def":  "Having or displaying a friendly and pleasant manner.",
        "ex":  "The new neighbor was very amiable, bringing over cookies on her first day."
    },
    {
        "word":  "Diligent",
        "pron":  "DIL-ih-junt",
        "pos":  "Adjective",
        "def":  "Having or showing care and conscientiousness in one\u0027s work or duties.",
        "ex":  "Through diligent effort, he managed to learn a new language in six months."
    },
    {
        "word":  "Empathy",
        "pron":  "EM-puh-thee",
        "pos":  "Noun",
        "def":  "The ability to understand and share the feelings of another.",
        "ex":  "A good leader leads not just with authority, but with deep empathy."
    },
    {
        "word":  "Inevitably",
        "pron":  "in-EV-ih-tuh-blee",
        "pos":  "Adverb",
        "def":  "As is certain to happen; unavoidably.",
        "ex":  "If you leave the cake on the counter, the dog will inevitably eat it."
    },
    {
        "word":  "Prolific",
        "pron":  "pruh-LIF-ik",
        "pos":  "Adjective",
        "def":  "Producing much fruit or foliage or many offspring. Present in large numbers or quantities.",
        "ex":  "Stephen King is a highly prolific author, publishing a new book almost every year."
    },
    {
        "word":  "Cynical",
        "pron":  "SIN-ih-kul",
        "pos":  "Adjective",
        "def":  "Believing that people are motivated by self-interest; distrustful of human sincerity or integrity.",
        "ex":  "After years in politics, he developed a somewhat cynical view of humanity."
    },
    {
        "word":  "Nostalgia",
        "pron":  "nuh-STAL-juh",
        "pos":  "Noun",
        "def":  "A sentimental longing or wistful affection for the past.",
        "ex":  "Hearing that 90s pop song filled him with a sudden wave of nostalgia."
    },
    {
        "word":  "Articulate",
        "pron":  "ar-TIK-yuh-lit",
        "pos":  "Adjective",
        "def":  "Having or showing the ability to speak fluently and coherently.",
        "ex":  "She is an incredibly articulate speaker who can explain complex ideas to anyone."
    },
    {
        "word":  "Objective",
        "pron":  "ub-JEK-tiv",
        "pos":  "Adjective",
        "def":  "Not influenced by personal feelings or opinions in considering and representing facts.",
        "ex":  "A judge must remain strictly objective during a trial."
    },
    {
        "word":  "Subjective",
        "pron":  "sub-JEK-tiv",
        "pos":  "Adjective",
        "def":  "Based on or influenced by personal feelings, tastes, or opinions.",
        "ex":  "Whether that movie is a masterpiece or a disaster is entirely subjective."
    },
    {
        "word":  "Versatile",
        "pron":  "VER-suh-tul",
        "pos":  "Adjective",
        "def":  "Able to adapt or be adapted to many different functions or activities.",
        "ex":  "The potato is a highly versatile vegetable."
    },
    {
        "word":  "Vindicate",
        "pron":  "VIN-dih-kayt",
        "pos":  "Verb",
        "def":  "Clear someone of blame or suspicion. Show or prove to be right, reasonable, or justified.",
        "ex":  "The new DNA evidence will completely vindicate him."
    },
    {
        "word":  "Superfluous",
        "pron":  "soo-PER-floo-us",
        "pos":  "Adjective",
        "def":  "Unnecessary, especially through being more than enough.",
        "ex":  "The speaker\u0027s superfluous remarks made the presentation twice as long as needed."
    },
    {
        "word":  "Trivial",
        "pron":  "TRIV-ee-ul",
        "pos":  "Adjective",
        "def":  "Of little value or importance.",
        "ex":  "They spent the whole meeting arguing over trivial details instead of the big picture."
    },
    {
        "word":  "Scrutinize",
        "pron":  "SKROO-tih-nyz",
        "pos":  "Verb",
        "def":  "Examine or inspect closely and thoroughly.",
        "ex":  "The accountant will carefully scrutinize every receipt before approving the budget."
    },
    {
        "word":  "Audacious",
        "pron":  "aw-DAY-shus",
        "pos":  "Adjective",
        "def":  "Showing a willingness to take surprisingly bold risks.",
        "ex":  "It was an audacious plan, but it just might work."
    },
    {
        "word":  "Plausible",
        "pron":  "PLAW-zih-bul",
        "pos":  "Adjective",
        "def":  "Seeming reasonable or probable.",
        "ex":  "That sounds like a plausible excuse for being late."
    },
    {
        "word":  "Tangible",
        "pron":  "TAN-jih-bul",
        "pos":  "Adjective",
        "def":  "Perceptible by touch. Clear and definite; real.",
        "ex":  "After months of work, they finally had a tangible product to show investors."
    },
    {
        "word":  "Subtle",
        "pron":  "SUT-ul",
        "pos":  "Adjective",
        "def":  "So delicate or precise as to be difficult to analyze or describe.",
        "ex":  "There was a subtle change in his tone that told me he was lying."
    },
    {
        "word":  "Compelling",
        "pron":  "kum-PEL-ing",
        "pos":  "Adjective",
        "def":  "Evoking interest, attention, or admiration in a powerfully irresistible way.",
        "ex":  "The documentary presented a compelling argument for climate action."
    },
    {
        "word":  "Empirical",
        "pron":  "im-PIR-ih-kul",
        "pos":  "Adjective",
        "def":  "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
        "ex":  "We need empirical data to prove that this new treatment actually works."
    },
    {
        "word":  "Intrinsic",
        "pron":  "in-TRIN-zik",
        "pos":  "Adjective",
        "def":  "Belonging naturally; essential.",
        "ex":  "Access to clean water is an intrinsic human right."
    },
    {
        "word":  "Nuance",
        "pron":  "NOO-ahns",
        "pos":  "Noun",
        "def":  "A subtle difference in or shade of meaning, expression, or sound.",
        "ex":  "The online debate completely lacked the nuance of a face-to-face conversation."
    },
    {
        "word":  "Intuitive",
        "pron":  "in-TOO-ih-tiv",
        "pos":  "Adjective",
        "def":  "Using or based on what one feels to be true even without conscious reasoning; instinctive.",
        "ex":  "The software\u0027s interface is very intuitive; you don\u0027t even need a manual."
    },
    {
        "word":  "Rapport",
        "pron":  "ra-POR",
        "pos":  "Noun",
        "def":  "A close and harmonious relationship in which the people or groups understand each other\u0027s feelings or ideas.",
        "ex":  "The teacher built a great rapport with her students from day one."
    },
    {
        "word":  "Proactive",
        "pron":  "pro-AK-tiv",
        "pos":  "Adjective",
        "def":  "Creating or controlling a situation by causing something to happen rather than responding to it after it has happened.",
        "ex":  "Being proactive about your health is much better than waiting to get sick."
    },
    {
        "word":  "Pinnacle",
        "pron":  "PIN-uh-kul",
        "pos":  "Noun",
        "def":  "The most successful point; the culmination.",
        "ex":  "Winning the Nobel Prize was the absolute pinnacle of his career."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make a problem, bad situation, or negative feeling worse.",
        "ex":  "Yelling at him when he\u0027s stressed will only exacerbate the situation."
    },
    {
        "word":  "Mitigate",
        "pron":  "MIT-ih-gayt",
        "pos":  "Verb",
        "def":  "Make less severe, serious, or painful.",
        "ex":  "Planting trees can help mitigate the effects of global warming."
    },
    {
        "word":  "Cynic",
        "pron":  "SIN-ik",
        "pos":  "Noun",
        "def":  "A person who believes that people are motivated purely by self-interest rather than acting for honorable or unselfish reasons.",
        "ex":  "He\u0027s such a cynic; he never believes anyone does anything just out of kindness."
    },
    {
        "word":  "Validate",
        "pron":  "VAL-ih-dayt",
        "pos":  "Verb",
        "def":  "Check or prove the validity or accuracy of something. Demonstrate or support the truth or value of.",
        "ex":  "The clinical trials will validate whether the new drug is safe."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event or accelerates a change.",
        "ex":  "The protest acted as a catalyst for massive political reform."
    },
    {
        "word":  "Volatile",
        "pron":  "VAH-luh-tul",
        "pos":  "Adjective",
        "def":  "Liable to change rapidly and unpredictably, especially for the worse.",
        "ex":  "The stock market has been incredibly volatile this week."
    },
    {
        "word":  "Endeavor",
        "pron":  "in-DEV-er",
        "pos":  "Verb",
        "def":  "Try hard to do or achieve something. An attempt to achieve a goal.",
        "ex":  "Starting a new business is a challenging but rewarding endeavor."
    },
    {
        "word":  "Feasible",
        "pron":  "FEE-zuh-bul",
        "pos":  "Adjective",
        "def":  "Possible to do easily or conveniently.",
        "ex":  "Building a bridge across the ocean simply isn\u0027t technically feasible yet."
    },
    {
        "word":  "Notorious",
        "pron":  "noh-TOR-ee-us",
        "pos":  "Adjective",
        "def":  "Famous or well known, typically for some bad quality or deed.",
        "ex":  "The intersection is notorious for terrible traffic accidents."
    },
    {
        "word":  "Redundant",
        "pos":  "Adjective",
        "pron":  "rih-DUN-dunt",
        "def":  "Not or no longer needed or useful; superfluous.",
        "ex":  "Having three backup generators is slightly redundant, but very safe."
    },
    {
        "word":  "Impartial",
        "pos":  "Adjective",
        "pron":  "im-PAR-shul",
        "def":  "Treating all rivals or disputants equally; fair and just.",
        "ex":  "A referee must remain completely impartial during the game."
    },
    {
        "word":  "Pertinent",
        "pos":  "Adjective",
        "pron":  "PER-tih-nunt",
        "def":  "Relevant or applicable to a particular matter; apposite.",
        "ex":  "Please stick to questions that are pertinent to today\u0027s lesson."
    },
    {
        "word":  "Vulnerable",
        "pos":  "Adjective",
        "pron":  "VUL-ner-uh-bul",
        "def":  "Susceptible to physical or emotional attack or harm.",
        "ex":  "The city\u0027s power grid is highly vulnerable to cyber attacks."
    },
    {
        "word":  "Paradigm",
        "pos":  "Noun",
        "pron":  "PAR-uh-dym",
        "def":  "A typical example or pattern of something; a model.",
        "ex":  "The invention of the smartphone created a new paradigm in communication."
    },
    {
        "word":  "Opaque",
        "pos":  "Adjective",
        "pron":  "oh-PAYK",
        "def":  "Not able to be seen through; not transparent. Hard to understand.",
        "ex":  "The company\u0027s hiring process is entirely opaque; no one knows how they decide."
    },
    {
        "word":  "Transparent",
        "pos":  "Adjective",
        "pron":  "trans-PAR-ent",
        "def":  "Allowing light to pass through so that objects behind can be distinctly seen. Easy to perceive or detect.",
        "ex":  "The government promised to be fully transparent about how the funds are spent."
    },
    {
        "word":  "Elicit",
        "pos":  "Verb",
        "pron":  "ih-LIS-it",
        "def":  "Evoke or draw out (a response, answer, or fact) from someone in reaction to one\u0027s own actions or questions.",
        "ex":  "Her tragic story elicited a lot of sympathy from the audience."
    },
    {
        "word":  "Incentive",
        "pos":  "Noun",
        "pron":  "in-SEN-tiv",
        "def":  "A thing that motivates or encourages one to do something.",
        "ex":  "The bonus check was a great incentive to hit our sales goals this month."
    },
    {
        "word":  "Prevalent",
        "pos":  "Adjective",
        "pron":  "PREV-uh-lunt",
        "def":  "Widespread in a particular area or at a particular time.",
        "ex":  "Fake news is becoming distressingly prevalent on social media."
    },
    {
        "word":  "Deter",
        "pos":  "Verb",
        "pron":  "dih-TUR",
        "def":  "Discourage someone from doing something by instilling doubt or fear of the consequences.",
        "ex":  "The severe fines are meant to deter drivers from speeding."
    },
    {
        "word":  "Advocate",
        "pos":  "Verb",
        "pron":  "AD-vuh-kayt",
        "def":  "Publicly recommend or support.",
        "ex":  "She is a strong advocate for animal rights and environmental protection."
    },
    {
        "word":  "Reiterate",
        "pos":  "Verb",
        "pron":  "ree-IT-uh-rayt",
        "def":  "Say something again or a number of times, typically for emphasis or clarity.",
        "ex":  "Let me reiterate: the deadline is absolutely non-negotiable."
    },
    {
        "word":  "Frivolous",
        "pos":  "Adjective",
        "pron":  "FRIV-uh-lus",
        "def":  "Not having any serious purpose or value.",
        "ex":  "He wasted his entire paycheck on frivolous purchases."
    },
    {
        "word":  "Concede",
        "pos":  "Verb",
        "pron":  "kun-SEED",
        "def":  "Admit that something is true or valid after first denying or resisting it. Surrender or yield.",
        "ex":  "After looking at the data, I have to concede that you were right."
    },
    {
        "word":  "Pervasive",
        "pos":  "Adjective",
        "pron":  "per-VAY-siv",
        "def":  "Spreading widely throughout an area or a group of people.",
        "ex":  "The belief that money buys happiness is a pervasive misconception."
    },
    {
        "word":  "Skeptical",
        "pos":  "Adjective",
        "pron":  "SKEP-tih-kul",
        "def":  "Not easily convinced; having doubts or reservations.",
        "ex":  "I\u0027m highly skeptical of any product that claims to be a \u0027miracle cure.\u0027"
    },
    {
        "word":  "Ambivalent",
        "pos":  "Adjective",
        "pron":  "am-BIV-uh-lunt",
        "def":  "Having mixed feelings or contradictory ideas about something or someone.",
        "ex":  "She felt deeply ambivalent about moving to a new city."
    },
    {
        "word":  "Pivotal",
        "pos":  "Adjective",
        "pron":  "PIV-uh-tul",
        "def":  "Of crucial importance in relation to the development or success of something else.",
        "ex":  "The battle was a pivotal moment in the nation\u0027s history."
    },
    {
        "word":  "Superficial",
        "pos":  "Adjective",
        "pron":  "soo-per-FISH-ul",
        "def":  "Existing or occurring at or on the surface. Not thorough, deep, or complete.",
        "ex":  "Their relationship was entirely superficial; they never talked about anything serious."
    },
    {
        "word":  "Reconcile",
        "pos":  "Verb",
        "pron":  "REK-un-syl",
        "def":  "Restore friendly relations between. Cause to coexist in harmony.",
        "ex":  "It was difficult to reconcile his generous public persona with his private greed."
    },
    {
        "word":  "Prerequisite",
        "pos":  "Noun",
        "pron":  "pree-REK-wih-zit",
        "def":  "A thing that is required as a prior condition for something else to happen or exist.",
        "ex":  "Passing Biology 101 is a prerequisite for enrolling in Anatomy."
    },
    {
        "word":  "Arbitrary",
        "pos":  "Adjective",
        "pron":  "AR-bih-trair-ee",
        "def":  "Based on random choice or personal whim, rather than any reason or system.",
        "ex":  "The school\u0027s dress code policy seemed entirely arbitrary and unfair."
    },
    {
        "word":  "Comprehend",
        "pos":  "Verb",
        "pron":  "kom-pri-HEND",
        "def":  "Grasp mentally; understand.",
        "ex":  "I simply cannot comprehend why someone would leave a dog in a hot car."
    },
    {
        "word":  "Discrepancy",
        "pos":  "Noun",
        "pron":  "dih-SKREP-un-see",
        "def":  "A lack of compatibility or similarity between two or more facts.",
        "ex":  "There is a major discrepancy between what he said yesterday and what he is saying today."
    },
    {
        "word":  "Evoke",
        "pos":  "Verb",
        "pron":  "ih-VOHK",
        "def":  "Bring or recall to the conscious mind.",
        "ex":  "The smell of baking bread always evokes memories of my grandmother\u0027s kitchen."
    },
    {
        "word":  "Lethargic",
        "pos":  "Adjective",
        "pron":  "luh-THAR-jik",
        "def":  "Affected by lethargy; sluggish and apathetic.",
        "ex":  "Eating a giant bowl of pasta for lunch always makes me feel lethargic all afternoon."
    },
    {
        "word":  "Obsolete",
        "pos":  "Adjective",
        "pron":  "ob-suh-LEET",
        "def":  "No longer produced or used; out of date.",
        "ex":  "The invention of the smartphone rendered my old digital camera totally obsolete."
    },
    {
        "word":  "Proponent",
        "pos":  "Noun",
        "pron":  "pruh-POH-nunt",
        "def":  "A person who advocates a theory, proposal, or project.",
        "ex":  "He is a strong proponent of renewable energy subsidies."
    },
    {
        "word":  "Retaliate",
        "pos":  "Verb",
        "pron":  "rih-TAL-ee-ayt",
        "def":  "Make an attack or assault in return for a similar attack.",
        "ex":  "If you attack them, they will certainly retaliate with full force."
    },
    {
        "word":  "Viable",
        "pos":  "Adjective",
        "pron":  "VY-uh-bul",
        "def":  "Capable of working successfully; feasible.",
        "ex":  "Solar power is now a highly viable alternative to fossil fuels."
    },
    {
        "word":  "Affinity",
        "pos":  "Noun",
        "pron":  "uh-FIN-ih-tee",
        "def":  "A spontaneous or natural liking or sympathy for someone or something.",
        "ex":  "She\u0027s always had a natural affinity for working with animals."
    },
    {
        "word":  "Dilute",
        "pos":  "Verb",
        "pron":  "dy-LOOT",
        "def":  "Make a liquid thinner or weaker by adding water or another solvent. Make simpler or less potent.",
        "ex":  "I had to dilute the concentrated cleaner with water before using it."
    },
    {
        "word":  "Convey",
        "pos":  "Verb",
        "pron":  "kun-VAY",
        "def":  "Make (an idea, impression, or feeling) known or understandable to someone.",
        "ex":  "Please convey my deepest apologies to your parents for missing the dinner."
    },
    {
        "word":  "Aesthetic",
        "pos":  "Adjective",
        "pron":  "es-THET-ik",
        "def":  "Concerned with beauty or the appreciation of beauty.",
        "ex":  "The new cafe has a very modern, minimalist aesthetic."
    },
    {
        "word":  "Abundant",
        "pron":  "uh-BUN-dunt",
        "pos":  "Adjective",
        "def":  "Existing or available in large quantities; plentiful.",
        "ex":  "The region offers an abundant supply of fresh water."
    },
    {
        "word":  "Acumen",
        "pron":  "AK-yuh-mun",
        "pos":  "Noun",
        "def":  "The ability to make good judgments and quick decisions, typically in a particular domain.",
        "ex":  "Her business acumen allowed her to grow the company rapidly."
    },
    {
        "word":  "Adequate",
        "pron":  "AD-ih-kwut",
        "pos":  "Adjective",
        "def":  "Satisfactory or acceptable in quality or quantity.",
        "ex":  "The town has adequate facilities for handling the storm."
    },
    {
        "word":  "Adhere",
        "pron":  "ad-HEER",
        "pos":  "Verb",
        "def":  "Stick fast to (a surface or substance). Believe in and follow the practices of.",
        "ex":  "Please adhere to the rules while visiting the museum."
    },
    {
        "word":  "Affirm",
        "pron":  "uh-FURM",
        "pos":  "Verb",
        "def":  "State as a fact strongly and publicly.",
        "ex":  "He affirmed his commitment to the project."
    },
    {
        "word":  "Alleviate",
        "pron":  "uh-LEE-vee-ayt",
        "pos":  "Verb",
        "def":  "Make (suffering, deficiency, or a problem) less severe.",
        "ex":  "The medicine did not immediately alleviate her pain."
    },
    {
        "word":  "Allocated",
        "pron":  "AL-oh-kay-tid",
        "pos":  "Adjective",
        "def":  "Distributed (resources or duties) for a particular purpose.",
        "ex":  "The funds were allocated strictly for educational purposes."
    },
    {
        "word":  "Ample",
        "pron":  "AM-pul",
        "pos":  "Adjective",
        "def":  "Enough or more than enough; plentiful.",
        "ex":  "There is ample evidence to support his theory."
    },
    {
        "word":  "Anomaly",
        "pron":  "uh-NOM-uh-lee",
        "pos":  "Noun",
        "def":  "Something that deviates from what is standard, normal, or expected.",
        "ex":  "The sudden snow in July was a weather anomaly."
    },
    {
        "word":  "Anticipate",
        "pron":  "an-TIS-uh-payt",
        "pos":  "Verb",
        "def":  "Regard as probable; expect or predict.",
        "ex":  "I didn\u0027t anticipate such a large turn-out at the meeting."
    },
    {
        "word":  "Apathy",
        "pron":  "AP-uh-thee",
        "pos":  "Noun",
        "def":  "Lack of interest, enthusiasm, or concern.",
        "ex":  "The voter apathy during the local election was disappointing."
    },
    {
        "word":  "Apparent",
        "pron":  "uh-PAR-unt",
        "pos":  "Adjective",
        "def":  "Clearly visible or understood; obvious.",
        "ex":  "It became apparent that the plan wasn\u0027t going to work."
    },
    {
        "word":  "Apprehensive",
        "pron":  "ap-rih-HEN-siv",
        "pos":  "Adjective",
        "def":  "Anxious or fearful that something bad or unpleasant will happen.",
        "ex":  "He felt apprehensive about the upcoming interview."
    },
    {
        "word":  "Arbitrate",
        "pron":  "AR-bih-trayt",
        "pos":  "Verb",
        "def":  "Reach an authoritative judgment or settlement.",
        "ex":  "An independent committee will arbitrate the dispute."
    },
    {
        "word":  "Assertive",
        "pron":  "uh-SUR-tiv",
        "pos":  "Adjective",
        "def":  "Having or showing a confident and forceful personality.",
        "ex":  "You need to be more assertive if you want that promotion."
    },
    {
        "word":  "Assess",
        "pron":  "uh-SES",
        "pos":  "Verb",
        "def":  "Evaluate or estimate the nature, ability, or quality of.",
        "ex":  "The insurance agent arrived to assess the flood damage."
    },
    {
        "word":  "Asset",
        "pron":  "AS-et",
        "pos":  "Noun",
        "def":  "A useful or valuable thing, person, or quality.",
        "ex":  "Quick thinking is a tremendous asset in this line of work."
    },
    {
        "word":  "Attribute",
        "pron":  "uh-TRIB-yoot",
        "pos":  "Verb",
        "def":  "Regard something as being caused by someone or something.",
        "ex":  "He attributed his success to sheer hard work."
    },
    {
        "word":  "Authentic",
        "pron":  "aw-THEN-tik",
        "pos":  "Adjective",
        "def":  "Of undisputed origin; genuine.",
        "ex":  "The restaurant serves authentic Italian cuisine."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "The speaker\u0027s banal remarks put the audience to sleep."
    },
    {
        "word":  "Beneficial",
        "pron":  "ben-uh-FISH-ul",
        "pos":  "Adjective",
        "def":  "Favorable or advantageous; resulting in good.",
        "ex":  "Eating a balanced diet is highly beneficial for your health."
    },
    {
        "word":  "Benign",
        "pron":  "bih-NYN",
        "pos":  "Adjective",
        "def":  "Gentle; kindly. Not harmful in effect.",
        "ex":  "Thankfully, the doctor confirmed the tumor was benign."
    },
    {
        "word":  "Brevity",
        "pron":  "BREV-ih-tee",
        "pos":  "Noun",
        "def":  "Concise and exact use of words in writing or speech.",
        "ex":  "The brevity of his email suggested he was in a rush."
    },
    {
        "word":  "Capitalize",
        "pron":  "KAP-ih-tuh-lyz",
        "pos":  "Verb",
        "def":  "Take the chance to gain advantage from.",
        "ex":  "The company failed to capitalize on the new market trends."
    },
    {
        "word":  "Caveat",
        "pron":  "KAV-ee-at",
        "pos":  "Noun",
        "def":  "A warning or proviso of specific stipulations, conditions, or limitations.",
        "ex":  "He agreed to the deal, but added one major caveat."
    },
    {
        "word":  "Chronological",
        "pron":  "kron-uh-LOJ-ih-kul",
        "pos":  "Adjective",
        "def":  "Start with the earliest and follow the order in which they occurred.",
        "ex":  "The biography details her life in strict chronological order."
    },
    {
        "word":  "Coherent",
        "pron":  "koh-HEER-unt",
        "pos":  "Adjective",
        "def":  "Logical and consistent.",
        "ex":  "They failed to develop a coherent strategy for the campaign."
    },
    {
        "word":  "Coincide",
        "pron":  "koh-in-SYD",
        "pos":  "Verb",
        "def":  "Occur at or during the same time.",
        "ex":  "His arrival coincided with the start of the heavy rain."
    },
    {
        "word":  "Collaborate",
        "pron":  "kuh-LAB-uh-rayt",
        "pos":  "Verb",
        "def":  "Work jointly on an activity, especially to produce or create something.",
        "ex":  "The two completely different artists decided to collaborate."
    },
    {
        "word":  "Commence",
        "pron":  "kuh-MENS",
        "pos":  "Verb",
        "def":  "Begin; start.",
        "ex":  "The graduation ceremony will commence promptly at noon."
    },
    {
        "word":  "Commendable",
        "pron":  "kuh-MEN-duh-bul",
        "pos":  "Adjective",
        "def":  "Deserving praise.",
        "ex":  "Her effort to rescue the stray animals was truly commendable."
    },
    {
        "word":  "Compact",
        "pron":  "kum-PAKT",
        "pos":  "Adjective",
        "def":  "Closely and neatly packed together; dense.",
        "ex":  "She drives a very compact car that\u0027s easy to park."
    },
    {
        "word":  "Compassion",
        "pron":  "kum-PASH-un",
        "pos":  "Noun",
        "def":  "Sympathetic pity and concern for the sufferings or misfortunes of others.",
        "ex":  "The nurse showed great compassion toward the elderly patient."
    },
    {
        "word":  "Compatible",
        "pron":  "kum-PAT-uh-bul",
        "pos":  "Adjective",
        "def":  "Able to exist or occur together without conflict.",
        "ex":  "The new software isn\u0027t compatible with older operating systems."
    },
    {
        "word":  "Compliment",
        "pron":  "KOM-plih-munt",
        "pos":  "Noun",
        "def":  "A polite expression of praise or admiration.",
        "ex":  "He paid her a sincere compliment on her impressive presentation."
    },
    {
        "word":  "Comprehensive",
        "pron":  "kom-prih-HEN-siv",
        "pos":  "Adjective",
        "def":  "Complete; including all or nearly all elements or aspects of something.",
        "ex":  "The school provides a comprehensive review of world history."
    },
    {
        "word":  "Compromise",
        "pron":  "KOM-pruh-myz",
        "pos":  "Noun",
        "def":  "An agreement or a settlement of a dispute that is reached by each side making concessions.",
        "ex":  "They finally reached a compromise after hours of negotiation."
    },
    {
        "word":  "Concise",
        "pron":  "kun-SYS",
        "pos":  "Adjective",
        "def":  "Giving a lot of information clearly and in a few words; brief but comprehensive.",
        "ex":  "Please keep your summary concise; under one page if possible."
    },
    {
        "word":  "Conclusive",
        "pron":  "kun-KLOO-siv",
        "pos":  "Adjective",
        "def":  "Of evidence or argument serving to prove a case; decisive or convincing.",
        "ex":  "There is still no conclusive proof that the theory is correct."
    },
    {
        "word":  "Concur",
        "pron":  "kun-KUR",
        "pos":  "Verb",
        "def":  "Be of the same opinion; agree.",
        "ex":  "I strongly concur with the recommendations laid out in the report."
    },
    {
        "word":  "Condone",
        "pron":  "kun-DOHN",
        "pos":  "Verb",
        "def":  "Accept and allow (behavior that is considered morally wrong or offensive) to continue.",
        "ex":  "The school cannot condone bullying under any circumstances."
    },
    {
        "word":  "Conducive",
        "pron":  "kun-DOO-siv",
        "pos":  "Adjective",
        "def":  "Making a certain situation or outcome likely or possible.",
        "ex":  "The noisy environment was not conducive to studying."
    },
    {
        "word":  "Conform",
        "pron":  "kun-FORM",
        "pos":  "Verb",
        "def":  "Comply with rules, standards, or laws.",
        "ex":  "All employees must conform to the new security policies."
    },
    {
        "word":  "Congruent",
        "pron":  "KONG-groo-unt",
        "pos":  "Adjective",
        "def":  "In agreement or harmony.",
        "ex":  "His actions are rarely congruent with his stated values."
    },
    {
        "word":  "Consequence",
        "pron":  "KON-sih-kwens",
        "pos":  "Noun",
        "def":  "A result or effect of an action or condition.",
        "ex":  "Deforestation has devastating environmental consequences."
    },
    {
        "word":  "Conservative",
        "pron":  "kun-SUR-vuh-tiv",
        "pos":  "Adjective",
        "def":  "Averse to change or innovation and holding traditional values.",
        "ex":  "Her financial estimates were deliberately conservative to avoid risk."
    },
    {
        "word":  "Consistent",
        "pron":  "kun-SIS-tunt",
        "pos":  "Adjective",
        "def":  "Acting or done in the same way over time, especially so as to be fair or accurate.",
        "ex":  "To see results at the gym, you have to be highly consistent."
    },
    {
        "word":  "Consolidate",
        "pron":  "kun-SOL-ih-dayt",
        "pos":  "Verb",
        "def":  "Combine into a single, more effective whole.",
        "ex":  "We need to consolidate our debts into one manageable payment."
    },
    {
        "word":  "Constitute",
        "pron":  "KON-stih-toot",
        "pos":  "Verb",
        "def":  "Be a part of a whole. Combine to form a whole.",
        "ex":  "Nine players constitute a standard baseball team."
    },
    {
        "word":  "Constraint",
        "pron":  "kun-STRAYNT",
        "pos":  "Noun",
        "def":  "A limitation or restriction.",
        "ex":  "Time constraints forced us to completely cut the final objective."
    },
    {
        "word":  "Constructive",
        "pron":  "kun-STRUK-tiv",
        "pos":  "Adjective",
        "def":  "Serving a useful purpose; tending to build up.",
        "ex":  "She responded graciously to the constructive criticism."
    },
    {
        "word":  "Contingent",
        "pron":  "kun-TIN-junt",
        "pos":  "Adjective",
        "def":  "Subject to chance. Occurring or existing only if certain other circumstances are the case.",
        "ex":  "The purchase of the new house is contingent on selling our old one."
    },
    {
        "word":  "Contradict",
        "pron":  "kon-truh-DIKT",
        "pos":  "Verb",
        "def":  "Deny the truth of (a statement), especially by asserting the opposite.",
        "ex":  "The witness\u0027s testimony completely contradicted the security footage."
    },
    {
        "word":  "Contrast",
        "pron":  "KON-trast",
        "pos":  "Noun",
        "def":  "The state of being strikingly different from something else.",
        "ex":  "The stark contrast between extreme wealth and poverty in the city."
    },
    {
        "word":  "Contribute",
        "pron":  "kun-TRIB-yoot",
        "pos":  "Verb",
        "def":  "Give in order to help achieve or provide something.",
        "ex":  "Everyone needs to contribute to the group project."
    },
    {
        "word":  "Converse",
        "pron":  "kun-VURS",
        "pos":  "Verb",
        "def":  "Engage in conversation.",
        "ex":  "They conversed quietly in the back of the library."
    },
    {
        "word":  "Coordinate",
        "pron":  "koh-OR-dn-ayt",
        "pos":  "Verb",
        "def":  "Bring elements of a complex activity into a relationship that will ensure efficiency.",
        "ex":  "She will coordinate the massive relief effort."
    },
    {
        "word":  "Correlate",
        "pron":  "KOR-uh-layt",
        "pos":  "Verb",
        "def":  "Have a mutual relationship or connection, in which one thing affects or depends on another.",
        "ex":  "High stress levels often correlate with poor sleep quality."
    },
    {
        "word":  "Credible",
        "pron":  "KRED-uh-bul",
        "pos":  "Adjective",
        "def":  "Able to be believed; convincing.",
        "ex":  "The defense attorney argued that the witness was not credible."
    },
    {
        "word":  "Criterion",
        "pron":  "kry-TEER-ee-un",
        "pos":  "Noun",
        "def":  "A principle or standard by which something may be judged or decided.",
        "ex":  "The main criterion for admission is academic excellence."
    },
    {
        "word":  "Crucial",
        "pron":  "KROO-shul",
        "pos":  "Adjective",
        "def":  "Decisive or critical, especially in the success or failure of something.",
        "ex":  "Proper hydration is crucial for athletic performance."
    },
    {
        "word":  "Cumulative",
        "pron":  "KYOO-myuh-luh-tiv",
        "pos":  "Adjective",
        "def":  "Increasing or increased in quantity, degree, or force by successive additions.",
        "ex":  "The cumulative effect of losing sleep over a week is severe."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a severe dearth of affordable housing in the city."
    },
    {
        "word":  "Debate",
        "pron":  "dih-BAYT",
        "pos":  "Noun",
        "def":  "A formal discussion on a particular topic in a public meeting or legislative assembly.",
        "ex":  "The candidates will hold a televised debate tomorrow night."
    },
    {
        "word":  "Decipher",
        "pron":  "dih-SY-fur",
        "pos":  "Verb",
        "def":  "Succeed in understanding, interpreting, or identifying something.",
        "ex":  "I simply couldn\u0027t decipher his extremely messy handwriting."
    },
    {
        "word":  "Deduce",
        "pron":  "dih-DOOS",
        "pos":  "Verb",
        "def":  "Arrive at a fact or a conclusion by reasoning; draw as a logical conclusion.",
        "ex":  "From the evidence, the detective deduced that the suspect was lying."
    },
    {
        "word":  "Deficient",
        "pron":  "dih-FISH-unt",
        "pos":  "Adjective",
        "def":  "Not having enough of a specified quality or ingredient.",
        "ex":  "The soil in this area is highly deficient in nitrogen."
    },
    {
        "word":  "Definitive",
        "pron":  "dih-FIN-ih-tiv",
        "pos":  "Adjective",
        "def":  "Done or reached decisively and with authority.",
        "ex":  "The judge issued a definitive ruling on the complex case."
    },
    {
        "word":  "Delegate",
        "pron":  "DEL-ih-gayt",
        "pos":  "Verb",
        "def":  "Entrust a task or responsibility to another person, typically one who is less senior than oneself.",
        "ex":  "A good manager knows how to properly delegate tasks."
    },
    {
        "word":  "Deliberate",
        "pron":  "dih-LIB-er-it",
        "pos":  "Adjective",
        "def":  "Done consciously and intentionally.",
        "ex":  "Tripping the opposing player was a deliberate foul."
    },
    {
        "word":  "Demographics",
        "pron":  "dem-uh-GRAF-iks",
        "pos":  "Noun",
        "def":  "Statistical data relating to the population and particular groups within it.",
        "ex":  "The marketing team closely analyzed the demographics of the area."
    },
    {
        "word":  "Demonstrate",
        "pron":  "DEM-un-strayt",
        "pos":  "Verb",
        "def":  "Clearly show the existence or truth of something by giving proof or evidence.",
        "ex":  "The chef will demonstrate how to properly dice an onion."
    },
    {
        "word":  "Depict",
        "pron":  "dih-PIKT",
        "pos":  "Verb",
        "def":  "Show or represent by a drawing, painting, or other art form. Portray in words.",
        "ex":  "The mural beautifully depicts the rich history of the town."
    },
    {
        "word":  "Derive",
        "pron":  "dih-RYV",
        "pos":  "Verb",
        "def":  "Obtain something from a specified source.",
        "ex":  "A lot of modern medicines derive from plants found in the rainforest."
    },
    {
        "word":  "Descriptive",
        "pron":  "dih-SKRIP-tiv",
        "pos":  "Adjective",
        "def":  "Serving or seeking to describe.",
        "ex":  "The author uses highly descriptive language to set the scene."
    },
    {
        "word":  "Designate",
        "pron":  "DEZ-ig-nayt",
        "pos":  "Verb",
        "def":  "Appoint someone to a specified position.",
        "ex":  "They will designate a new team leader by the end of the week."
    },
    {
        "word":  "Determine",
        "pron":  "dih-TUR-min",
        "pos":  "Verb",
        "def":  "Cause something to occur in a particular way; be the decisive factor in.",
        "ex":  "Access to capital often determines whether a startup survives."
    },
    {
        "word":  "Detrimental",
        "pron":  "deh-truh-MEN-tul",
        "pos":  "Adjective",
        "def":  "Tending to cause harm.",
        "ex":  "Smoking is highly detrimental to long-term lung health."
    },
    {
        "word":  "Deviate",
        "pron":  "DEE-vee-ayt",
        "pos":  "Verb",
        "def":  "Depart from an established course.",
        "ex":  "The pilot had to deviate from the planned flight path due to storms."
    },
    {
        "word":  "Differentiate",
        "pron":  "dif-uh-REN-shee-ayt",
        "pos":  "Verb",
        "def":  "Recognize or ascertain what makes someone or something different.",
        "ex":  "It\u0027s difficult to differentiate between the identical twins."
    },
    {
        "word":  "Diminish",
        "pron":  "dih-MIN-ish",
        "pos":  "Verb",
        "def":  "Make or become less.",
        "ex":  "Her confidence severely diminished after failing the major exam."
    },
    {
        "word":  "Diplomatic",
        "pron":  "dip-luh-MAT-ik",
        "pos":  "Adjective",
        "def":  "Of or concerning the profession, activity, or skill of managing international relations.",
        "ex":  "He handled the incredibly tense situation with diplomatic skill."
    },
    {
        "word":  "Direct",
        "pron":  "dih-REKT",
        "pos":  "Adjective",
        "def":  "Extending or moving from one place to another without changing direction or stopping.",
        "ex":  "Is there a direct flight from New York to Tokyo?"
    },
    {
        "word":  "Disclose",
        "pron":  "dis-KLOHZ",
        "pos":  "Verb",
        "def":  "Make secret or new information known.",
        "ex":  "The company refused to disclose the exact terms of the settlement."
    },
    {
        "word":  "Discriminate",
        "pron":  "dih-SKRIM-uh-nayt",
        "pos":  "Verb",
        "def":  "Recognize a distinction; differentiate.",
        "ex":  "Babies can quickly discriminate between their mother\u0027s voice and others."
    },
    {
        "word":  "Dismiss",
        "pron":  "dis-MIS",
        "pos":  "Verb",
        "def":  "Order or allow to leave; send away.",
        "ex":  "The teacher decided to dismiss the class five minutes early."
    },
    {
        "word":  "Dispatch",
        "pron":  "dis-PACH",
        "pos":  "Verb",
        "def":  "Send off to a destination or for a purpose.",
        "ex":  "The police promptly dispatched three cars to the scene of the accident."
    },
    {
        "word":  "Disperse",
        "pron":  "dih-SPURS",
        "pos":  "Verb",
        "def":  "Distribute or spread over a wide area.",
        "ex":  "The crowd began to disperse once the concert ended."
    },
    {
        "word":  "Displace",
        "pron":  "dis-PLAYS",
        "pos":  "Verb",
        "def":  "Take over the place, position, or role of something.",
        "ex":  "The massive new factory will displace hundreds of local farming jobs."
    },
    {
        "word":  "Distinct",
        "pron":  "dih-STINKT",
        "pos":  "Adjective",
        "def":  "Recognizably different in nature from something else of a similar type.",
        "ex":  "There is a distinct difference between being tired and being exhausted."
    },
    {
        "word":  "Distort",
        "pron":  "dih-STORT",
        "pos":  "Verb",
        "def":  "Pull or twist out of shape.",
        "ex":  "The funhouse mirror will hilariously distort your reflection."
    },
    {
        "word":  "Diverse",
        "pron":  "dy-VURS",
        "pos":  "Adjective",
        "def":  "Showing a great deal of variety; very different.",
        "ex":  "The city boasts an incredibly rich and diverse cultural landscape."
    },
    {
        "word":  "Document",
        "pron":  "DOK-yuh-munt",
        "pos":  "Noun",
        "def":  "A piece of written, printed, or electronic matter that provides information or evidence.",
        "ex":  "Please sign this official legal document to finalize the sale."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "His dogmatic approach to the debate shut down any real discussion."
    },
    {
        "word":  "Dominant",
        "pron":  "DOM-uh-nunt",
        "pos":  "Adjective",
        "def":  "Most important, powerful, or influential.",
        "ex":  "The massive lion was clearly the dominant male of the pride."
    },
    {
        "word":  "Draft",
        "pron":  "DRAFT",
        "pos":  "Noun",
        "def":  "A preliminary version of a piece of writing.",
        "ex":  "This is just a rough early draft of my upcoming novel."
    },
    {
        "word":  "Duration",
        "pron":  "doo-RAY-shun",
        "pos":  "Noun",
        "def":  "The time during which something continues.",
        "ex":  "You must remain seated for the entire duration of the flight."
    },
    {
        "word":  "Dynamic",
        "pron":  "dy-NAM-ik",
        "pos":  "Adjective",
        "def":  "Characterized by constant change, activity, or progress.",
        "ex":  "The software industry is incredibly fast-paced and dynamic."
    },
    {
        "word":  "Eccentric",
        "pron":  "ik-SEN-trik",
        "pos":  "Adjective",
        "def":  "Unconventional and slightly strange.",
        "ex":  "My eccentric uncle collects hundreds of vintage garden gnomes."
    },
    {
        "word":  "Economical",
        "pron":  "ek-uh-NOM-ih-kul",
        "pos":  "Adjective",
        "def":  "Giving good value or service in relation to the amount of money, time, or effort spent.",
        "ex":  "Buying items in bulk at Costco is often highly economical."
    },
    {
        "word":  "Edify",
        "pron":  "ED-uh-fy",
        "pos":  "Verb",
        "def":  "Instruct or improve someone morally or intellectually.",
        "ex":  "The documentary was meant to edify its young audience."
    },
    {
        "word":  "Efficient",
        "pron":  "ih-FISH-unt",
        "pos":  "Adjective",
        "def":  "Achieving maximum productivity with minimum wasted effort or expense.",
        "ex":  "The new hybrid engines are vastly more fuel efficient."
    },
    {
        "word":  "Elaborate",
        "pron":  "ih-LAB-uh-rut",
        "pos":  "Adjective",
        "def":  "Involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        "ex":  "The elaborate heist took months to plan perfectly."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    },
    {
        "word":  "Ambience",
        "pron":  "AM-bee-uns",
        "pos":  "Noun",
        "def":  "The character and atmosphere of a place.",
        "ex":  "The fancy expensive restaurant had a deeply romantic ambience."
    },
    {
        "word":  "Ameliorate",
        "pron":  "uh-MEEL-yuh-rayt",
        "pos":  "Verb",
        "def":  "Make something bad or unsatisfactory better.",
        "ex":  "The medicine did absolutely nothing to ameliorate his terrible condition."
    },
    {
        "word":  "Acquisition",
        "pron":  "ak-wuh-ZISH-un",
        "pos":  "Noun",
        "def":  "An asset or object bought or obtained.",
        "ex":  "The massive company\u0027s newest expensive acquisition was a small promising startup."
    },
    {
        "word":  "Adept",
        "pron":  "uh-DEPT",
        "pos":  "Adjective",
        "def":  "Very skilled or proficient at something.",
        "ex":  "She is highly adept at quickly resolving complex confounding massive technical issues."
    },
    {
        "word":  "Admonish",
        "pron":  "ad-MON-ish",
        "pos":  "Verb",
        "def":  "Warn or reprimand someone firmly.",
        "ex":  "The angry strict teacher had to sternly admonish the loudly talking students."
    },
    {
        "word":  "Affluent",
        "pron":  "AF-loo-unt",
        "pos":  "Adjective",
        "def":  "Having a great deal of money",
        "ex":  " wealthy."
    },
    {
        "word":  "Aggregate",
        "pron":  "AG-rih-gut",
        "pos":  "Noun",
        "def":  "A whole formed by combining several separate elements.",
        "ex":  "The final score was the total aggregate of all the games."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the amazing invitation with massive alacrity."
    }
];

// ===== SAYINGS DATA =====
const sayings = [
  { text: "He's as sharp as a marble.", ctx: "When someone's not the brightest" },
  { text: "Like a porkchop at a synagogue.", ctx: "Completely out of place" },
  { text: "Ships don't sink because of the water around them. They sink because of the water that gets in them.", ctx: "Don't let negativity in" },
  { text: "Don't bring a knife to a gunfight.", ctx: "Come prepared or don't come at all" },
  { text: "I have it on good authority.", ctx: "When you've got reliable inside info" },
  { text: "Jack of all trades, master of none — but oftentimes better than a master of one.", ctx: "Being well-rounded has its perks" },
  { text: "He could fall into a barrel of manure and come out smelling like roses.", ctx: "Someone who's impossibly lucky" },
  { text: "That dog won't hunt.", ctx: "That idea isn't going to work" },
  { text: "You can't make a silk purse out of a sow's ear.", ctx: "Can't make gold from garbage" },
  { text: "Smooth seas never made a skilled sailor.", ctx: "Hardship builds character" },
  { text: "He's all hat and no cattle.", ctx: "Big talk, nothing to back it up" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", ctx: "Stop waiting and start doing" },
  { text: "You can lead a horse to water, but you can't make it drink.", ctx: "Can't force someone to do what's good for them" },
  { text: "Not my circus, not my monkeys.", ctx: "Not my problem" },
  { text: "A watched pot never boils.", ctx: "Obsessing over something won't speed it up" },
  { text: "That's about as useful as a screen door on a submarine.", ctx: "Something completely pointless" },
  { text: "He's one taco short of a combo plate.", ctx: "A little off" },
  { text: "Even a blind squirrel finds a nut once in a while.", ctx: "Even clueless people get lucky" },
  { text: "The juice isn't worth the squeeze.", ctx: "The effort outweighs the reward" },
  { text: "If it ain't broke, don't fix it.", ctx: "Leave well enough alone" },
  { text: "You're barking up the wrong tree.", ctx: "Looking in the wrong place" },
  { text: "He's running around like a chicken with its head cut off.", ctx: "Panicking with no direction" },
  { text: "She could sell ice to an Eskimo.", ctx: "Incredibly persuasive" },
  { text: "You catch more flies with honey than vinegar.", ctx: "Kindness beats aggression" },
  { text: "The squeaky wheel gets the grease.", ctx: "Speak up if you want attention" },
  { text: "That train has left the station.", ctx: "Opportunity's gone" },
  { text: "She's got more issues than a magazine stand.", ctx: "A lot of problems" },
  { text: "Close only counts in horseshoes and hand grenades.", ctx: "Almost doesn't cut it" },
  { text: "Penny wise, pound foolish.", ctx: "Saving small while wasting big" },
  { text: "If you're the smartest person in the room, you're in the wrong room.", ctx: "Always seek growth" },
  { text: "He couldn't pour water out of a boot if the instructions were on the heel.", ctx: "Spectacularly incompetent" },
  { text: "A rising tide lifts all boats.", ctx: "When things improve, everyone benefits" },
  { text: "You can't unring a bell.", ctx: "Some things can't be taken back" },
  { text: "She's busier than a one-legged cat in a sandbox.", ctx: "Extremely busy" },
  { text: "The early bird gets the worm, but the second mouse gets the cheese.", ctx: "Sometimes caution beats eagerness" },
  { text: "When you're a hammer, everything looks like a nail.", ctx: "Over-relying on one approach" },
  { text: "He'd argue with a fence post.", ctx: "Argues about everything" },
  { text: "That's like rearranging deck chairs on the Titanic.", ctx: "Pointless effort during a disaster" },
  { text: "She's tougher than a two-dollar steak.", ctx: "Seriously resilient" },
  { text: "Comparison is the thief of joy.", ctx: "Stop measuring yourself against others" },
  { text: "He's about as subtle as a freight train.", ctx: "Zero finesse" },
  { text: "The house always wins.", ctx: "The system is rigged" },
  { text: "He's got the personality of a wet paper bag.", ctx: "Incredibly boring" },
  { text: "Fortune favors the bold.", ctx: "Take risks, reap rewards" },
  { text: "That's the pot calling the kettle black.", ctx: "Hypocrisy" },
  { text: "She could talk the ears off a cornfield.", ctx: "Never stops talking" },
  { text: "There's no such thing as a free lunch.", ctx: "Everything has a cost" },
  { text: "The road to hell is paved with good intentions.", ctx: "Meaning well isn't enough" },
  { text: "You can't teach an old dog new tricks.", ctx: "Some people resist change" },
  { text: "He's all sizzle and no steak.", ctx: "Great presentation, no substance" },
  { text: "That went over like a lead balloon.", ctx: "Completely flopped" },
  { text: "She's got nerves of steel.", ctx: "Unshakable under pressure" },
  { text: "Still waters run deep.", ctx: "Quiet people have the most going on" },
  { text: "Rome wasn't built in a day, but they were laying bricks every hour.", ctx: "Big goals need daily effort" },
  { text: "She read him like a dollar-store novel.", ctx: "Saw right through someone" },
  { text: "He's got about as much chance as a snowball in Texas.", ctx: "Impossible odds" },
  { text: "The devil is in the details.", ctx: "Small things matter" },
  { text: "She's nuttier than a squirrel's breakfast.", ctx: "Delightfully crazy" },
  { text: "That's just putting lipstick on a pig.", ctx: "Dressing up something bad doesn't fix it" },
  { text: "The apple doesn't fall far from the tree.", ctx: "Kids turn out like their parents" },
  { text: "An ounce of prevention is worth a pound of cure.", ctx: "Better to prepare than repair" },
  { text: "People who live in glass houses shouldn't throw stones.", ctx: "Don't criticize if you're not perfect" },
  { text: "The grass is always greener on the other side — until you have to mow it.", ctx: "Things look better from the outside" },
  { text: "She turned lemons into a whole lemonade franchise.", ctx: "Took a bad situation and crushed it" },
  { text: "He's about as coordinated as a giraffe on roller skates.", ctx: "Extremely clumsy" },
  { text: "That plan has the structural integrity of a chocolate teapot.", ctx: "A plan that will absolutely not hold up" },
  { text: "She's got the patience of a toddler waiting for a microwave.", ctx: "Zero patience at all" },
  { text: "He showed up looking like a raccoon that just got caught at a buffet.", ctx: "Disheveled and guilty-looking" },
  { text: "That's about as rare as a quiet opinion on the internet.", ctx: "Not rare at all" },
  { text: "He's got the poker face of a golden retriever.", ctx: "Can't hide anything" },
  { text: "She organized that about as well as a squirrel organizes acorns.", ctx: "Chaotic organization" },
  { text: "He's trying to parallel park a cruise ship.", ctx: "Attempting something way too ambitious" },
  { text: "That meeting could've been a shrug.", ctx: "A pointless meeting" },
  { text: "He's got main character energy in an extra's role.", ctx: "Way too confident for the situation" },
  { text: "She's running on coffee and audacity.", ctx: "Fueled by nothing but caffeine and nerve" },
  { text: "That aged about as well as milk on a dashboard.", ctx: "Something that went bad fast" },
  { text: "He's fighting ghosts in an empty room.", ctx: "Creating problems that don't exist" },
  { text: "She's got the emotional range of a parking meter.", ctx: "Emotionally flat" },
  { text: "He treats every molehill like he's training for Everest.", ctx: "Overreacting to small things" },
  { text: "That's got the same energy as wearing a helmet to a pillow fight.", ctx: "Wildly over-prepared" },
  { text: "He peaked in the group chat.", ctx: "Someone whose best moments are online" },
  { text: "She's negotiating like she's got coupons to a sword fight.", ctx: "Wildly underequipped" },
  { text: "That idea has the shelf life of a sneeze.", ctx: "Something that won't last at all" },
  { text: "He brings a spreadsheet to a vibe check.", ctx: "Too analytical for the moment" },
  { text: "She's decorating the parachute on the way down.", ctx: "Focusing on the wrong thing during a crisis" },
  { text: "He's got the urgency of a sloth at a crosswalk.", ctx: "Moving painfully slow" },
  { text: "That was smoother than a buttered penguin on an ice rink.", ctx: "Something that went incredibly smoothly" },
  { text: "She looked at me like I just told her the Wi-Fi password was wrong.", ctx: "Pure horror and disbelief" },
  { text: "He's flexing with rented confidence.", ctx: "Faking it but not quite making it" },
  { text: "That's like putting a bow tie on a dumpster fire.", ctx: "Trying to dress up a disaster" },
  { text: "She's got the focus of a puppy in a tennis ball factory.", ctx: "Distracted by absolutely everything" },
  { text: "He tried to microwave a situation that needed a slow cooker.", ctx: "Rushing something that needs patience" },
  { text: "That explanation had more holes than a screen door convention.", ctx: "Full of gaps" },
  { text: "She walks into a room like her theme song is playing.", ctx: "Supreme confidence" },
  { text: "He debugs his life the same way he debugs his code — by ignoring the warnings.", ctx: "Avoiding obvious red flags" },
  { text: "That's got the believability of a 'one size fits all' tag.", ctx: "Not believable at all" },
  { text: "He's so indecisive he'd starve at a buffet.", ctx: "Can't make a choice to save his life" },
  { text: "She left that conversation like a cat leaving a knocked-over vase — no eye contact, full speed.", ctx: "A swift, guiltless exit" },
  { text: "He's about as intimidating as a chihuahua in a thunderstorm.", ctx: "Trying to be tough but clearly not" },
  { text: "That excuse was held together with vibes and duct tape.", ctx: "A barely passable excuse" },
  { text: "She's living proof that confidence is a renewable resource.", ctx: "Endlessly self-assured" },
  { text: "He's the human equivalent of a 'loading' screen.", ctx: "Slow to respond or act" },
  { text: "That went sideways faster than a shopping cart with a bad wheel.", ctx: "Quick, uncontrollable failure" },
  { text: "She speaks fluent sarcasm with a minor in eye rolls.", ctx: "Peak sass" },
];

// ===== PALETTES (used when theme is 'auto') =====
const palettes = [
  ["#0d0d1a","#1a1a2e","#533483"], ["#0d1117","#161b22","#1f6feb"],
  ["#1a1a2e","#16213e","#0f3460"], ["#2d132c","#801336","#c72c41"],
  ["#1b262c","#0f4c75","#3282b8"], ["#0b0c10","#1f2833","#45a29e"],
  ["#1a1a2e","#533483","#e94560"], ["#0d1b2a","#1b263b","#415a77"],
  ["#2b2d42","#3d405b","#ef233c"], ["#10002b","#240046","#3c096c"],
  ["#1d3557","#264653","#2a9d8f"], ["#2c003e","#512b58","#e26d5c"],
  ["#0f0e17","#232946","#b8c1ec"], ["#141e30","#243b55","#6c63ff"],
];

// ===== THEMES =====
const themes = {
  midnight: { gradient: ["#0d0d1a","#1a1a2e","#533483"], particle: "167,139,250" },
  ocean:    { gradient: ["#0a192f","#0d3b66","#1a936f"], particle: "34,211,238" },
  ember:    { gradient: ["#1a0a00","#4a1a0a","#b44d12"], particle: "251,146,60" },
  forest:   { gradient: ["#0a1a0a","#1a3a1a","#2d6a4f"], particle: "74,222,128" },
  mono:     { gradient: ["#111111","#222222","#444444"], particle: "226,232,240" },
};
let currentTheme = localStorage.getItem('wotd_theme') || 'midnight';

// ===== CORE LOGIC =====
const EPOCH = new Date(2025, 0, 1);

function getDayIndex(date) {
  const d = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const e = Date.UTC(EPOCH.getFullYear(), EPOCH.getMonth(), EPOCH.getDate());
  return Math.floor((d - e) / 86400000);
}

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; };
}

function shuffleWithSeed(arr, seed) {
  const a = arr.slice();
  const rng = seededRandom(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getItemForDay(items, dayIdx, cycleSeed) {
  const cycleLen = items.length;
  const cycleNum = Math.floor(dayIdx / cycleLen);
  const posInCycle = dayIdx % cycleLen;
  const shuffled = shuffleWithSeed(items, cycleSeed + cycleNum * 9999);
  return shuffled[posInCycle];
}

// ===== STATE =====
let currentDate = new Date();
let currentWord = "";

// ===== STREAK =====
function updateStreak() {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem('wotd_lastVisit');
  let streak = parseInt(localStorage.getItem('wotd_streak') || '0');
  if (lastVisit === today) {
    // Already visited today
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastVisit === yesterday.toDateString()) {
      streak++;
    } else {
      streak = 1;
    }
    localStorage.setItem('wotd_lastVisit', today);
    localStorage.setItem('wotd_streak', streak.toString());
  }
  document.getElementById('streakCount').textContent = streak;
}

// ===== SPEECH =====
function speakWord() {
  if (!currentWord) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(currentWord);
  u.rate = 0.85; u.pitch = 1; u.lang = "en-US";
  window.speechSynthesis.speak(u);
}

// ===== RENDER =====
function render() {
  const dayIdx = getDayIndex(currentDate);
  const w = getItemForDay(words, dayIdx, 42);
  const s = getItemForDay(sayings, dayIdx, 77);
  currentWord = w.word;

  // Use theme gradient or daily random palette
  const t = themes[currentTheme];
  let p;
  if (t) {
    p = t.gradient;
  } else {
    const pRng = seededRandom(dayIdx + 123);
    p = palettes[Math.floor(pRng() * palettes.length)];
  }
  document.body.style.background = `linear-gradient(135deg, ${p[0]}, ${p[1]}, ${p[2]})`;

  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('dateLabel').textContent = currentDate.toLocaleDateString('en-US', opts);
  document.getElementById('dayCount').textContent = `Word #${dayIdx + 1}`;
  document.getElementById('word').textContent = w.word;
  document.getElementById('pronunciation').textContent = w.pron;
  document.getElementById('pos').textContent = w.pos;
  document.getElementById('definition').textContent = w.def;
  document.getElementById('example').textContent = `"${w.ex}"`;
  document.getElementById('saying').textContent = `"${s.text}"`;
  document.getElementById('sayingContext').textContent = `— ${s.ctx}`;

  const today = new Date();
  document.getElementById('nextBtn').disabled = currentDate.toDateString() === today.toDateString();

  // Re-trigger animation
  const card = document.getElementById('card');
  card.style.animation = 'none';
  void card.offsetHeight;
  card.style.animation = 'fadeUp 0.5s cubic-bezier(.4,0,.2,1)';
}

function navigate(dir) {
  const next = new Date(currentDate);
  next.setDate(next.getDate() + dir);
  if (next > new Date()) return;
  currentDate = next;
  render();
}

function goToday() { currentDate = new Date(); render(); }

// ===== SHARE =====
function shareWord() {
  const dayIdx = getDayIndex(currentDate);
  const w = getItemForDay(words, dayIdx, 42);
  const text = `📖 Word of the Day: ${w.word} (${w.pron})\n${w.pos} — ${w.def}`;
  if (navigator.share) {
    navigator.share({ title: 'Word of the Day', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('shareBtn');
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> Share'; }, 2000);
    });
  }
}

// ===== NOTIFICATIONS =====
function toggleNotifications() {
  if (Notification.permission === 'granted' && localStorage.getItem('wotd_notif') === 'on') {
    // Turn off
    localStorage.setItem('wotd_notif', 'off');
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'CANCEL_NOTIFICATION' });
    }
    updateNotifUI();
    return;
  }
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      localStorage.setItem('wotd_notif', 'on');
      scheduleNotification();
      updateNotifUI();
      // Send a test notification
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'TEST_NOTIFICATION' });
      }
    }
  });
}

function scheduleNotification() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'SCHEDULE_NOTIFICATION', hour: 9, minute: 0 });
  }
}

function updateNotifUI() {
  const btn = document.getElementById('notifBtn');
  const label = document.getElementById('notifLabel');
  if (localStorage.getItem('wotd_notif') === 'on') {
    btn.classList.add('active');
    label.textContent = 'Reminders On';
  } else {
    btn.classList.remove('active');
    label.textContent = 'Remind Me';
  }
}

// ===== PWA INSTALL =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const dismissed = localStorage.getItem('wotd_installDismissed');
  if (!dismissed) {
    document.getElementById('installBanner').classList.add('show');
  }
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('installBanner').classList.remove('show');
    });
  }
}

function dismissInstall() {
  document.getElementById('installBanner').classList.remove('show');
  localStorage.setItem('wotd_installDismissed', '1');
}

// ===== SWIPE NAVIGATION =====
(function initSwipe() {
  const card = document.getElementById('card');
  let startX = 0, startY = 0, swiping = false;
  card.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    swiping = false;
  }, { passive: true });
  card.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 20) {
      swiping = true;
      card.classList.toggle('swiping-left', dx < 0);
      card.classList.toggle('swiping-right', dx > 0);
    }
  }, { passive: true });
  card.addEventListener('touchend', e => {
    card.classList.remove('swiping-left', 'swiping-right');
    if (!swiping) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -60) navigate(1);
    else if (dx > 60) navigate(-1);
  }, { passive: true });
})();

// ===== PARTICLES =====
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.3 + 0.05,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      const pc = (themes[currentTheme] || themes.midnight).particle;
      ctx.fillStyle = `rgba(${pc},${p.o})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(reg => {
    // Re-schedule notifications if enabled
    if (localStorage.getItem('wotd_notif') === 'on') {
      navigator.serviceWorker.ready.then(() => {
        scheduleNotification();
      });
    }
  }).catch(err => console.log('SW registration failed:', err));
}

// ===== THEME PICKER =====
function toggleThemePicker() {
  document.getElementById('themeOverlay').classList.toggle('show');
  updateThemePickerUI();
}

function closeThemePicker(e) {
  // Close if no event (e.g., clicked the close button) OR if the user clicked directly on the overlay background
  if (!e || e.target === document.getElementById('themeOverlay')) {
    document.getElementById('themeOverlay').classList.remove('show');
  }
}

function setTheme(name) {
  currentTheme = name;
  localStorage.setItem('wotd_theme', name);
  document.documentElement.setAttribute('data-theme', name);
  render();
  updateThemePickerUI();
  document.getElementById('themeOverlay').classList.remove('show');
}

function updateThemePickerUI() {
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === currentTheme);
  });
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemePickerUI();
}

// ===== INIT =====
initTheme();
render();
updateStreak();
updateNotifUI();
