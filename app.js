// ===== WORD DATA =====
const words = [
  { word: "Petrichor", pron: "PET-ri-kor", pos: "Noun", def: "The pleasant, earthy smell produced when rain falls on dry soil. It comes from oils released by plants during dry periods.", ex: "After weeks of drought, the petrichor that followed the first rain was intoxicating." },
  { word: "Sonder", pron: "SON-der", pos: "Noun", def: "The realization that each passerby has a life as vivid and complex as your own, with their own ambitions, worries, and routines.", ex: "Standing in the crowded subway, a wave of sonder washed over her as she watched hundreds of strangers." },
  { word: "Apricity", pron: "ah-PRIS-ih-tee", pos: "Noun", def: "The warmth of the sun in winter. That cozy feeling when sunlight hits your face on a cold day.", ex: "She closed her eyes on the park bench, basking in the apricity of the January afternoon." },
  { word: "Hiraeth", pron: "HEER-eyeth", pos: "Noun", def: "A deep longing for a home you can't return to, or one that maybe never was. A Welsh word with no direct English translation.", ex: "Every autumn, he felt a quiet hiraeth for the village he left as a child." },
  { word: "Defenestration", pron: "dee-fen-eh-STRAY-shun", pos: "Noun", def: "The act of throwing someone or something out of a window. Yes, there's a word for that.", ex: "The defenestration of his old laptop was dramatic but oddly satisfying." },
  { word: "Meraki", pron: "meh-RAH-kee", pos: "Noun", def: "A Greek word meaning to do something with soul, creativity, or love — to put a piece of yourself into your work.", ex: "You could taste the meraki in every dish she prepared." },
  { word: "Limerence", pron: "LIM-er-ence", pos: "Noun", def: "The state of being infatuated or obsessed with another person, typically involuntary and characterized by a strong desire for reciprocation.", ex: "His limerence made it impossible to focus on anything but her smile." },
  { word: "Phosphenes", pron: "FOS-feenz", pos: "Noun", def: "The colors and patterns you see when you close your eyes and press on your eyelids. Light without light.", ex: "As a child, she'd press her palms against her eyes just to watch the phosphenes dance." },
  { word: "Vellichor", pron: "VEL-ih-kor", pos: "Noun", def: "The strange wistfulness of used bookstores, filled with thousands of old books you'll never have time to read.", ex: "The vellichor of the dusty shop on Fifth Street kept drawing him back every Saturday." },
  { word: "Ubuntu", pron: "oo-BOON-too", pos: "Noun", def: "A Southern African philosophy meaning 'I am because we are.' The belief that we are defined by our compassion and connection to others.", ex: "The community rebuilt the home together, embodying the spirit of ubuntu." },
  { word: "Tsundoku", pron: "TSOON-doh-koo", pos: "Noun", def: "The Japanese word for acquiring books and letting them pile up without reading them.", ex: "His nightstand was proof of his tsundoku habit — six unread novels stacked high." },
  { word: "Eunoia", pron: "yoo-NOY-ah", pos: "Noun", def: "Beautiful thinking. A state of normal, healthy mental well-being. Also the shortest English word containing all five vowels.", ex: "Her therapist encouraged eunoia — nurturing kind, constructive thoughts." },
  { word: "Fernweh", pron: "FERN-vay", pos: "Noun", def: "A German word for an ache to travel to far-off places. The opposite of homesickness — a longing for somewhere you've never been.", ex: "Scrolling through travel photos filled her with an unbearable fernweh." },
  { word: "Komorebi", pron: "koh-moh-REH-bee", pos: "Noun", def: "A Japanese word for the sunlight that filters through the leaves of trees, creating a dappled, dancing pattern of light and shadow.", ex: "They spread their blanket in the komorebi under the old oak tree." },
  { word: "Saudade", pron: "sow-DAH-djee", pos: "Noun", def: "A Portuguese word for a deep, melancholic longing for something or someone you love that is absent.", ex: "The old song stirred a saudade so deep it brought tears to his eyes." },
  { word: "Flâneur", pron: "flah-NUR", pos: "Noun", def: "A person who strolls around a city with no purpose other than to soak in the experience. An idle wanderer and keen observer.", ex: "On Sundays, he became a true flâneur, drifting through Paris with nowhere to be." },
  { word: "Chatoyant", pron: "shuh-TOY-unt", pos: "Adjective", def: "Having a changeable luster or color, like a cat's eye. Used to describe gems that seem to glow with a band of shifting light.", ex: "The chatoyant surface of the tiger's eye ring caught the candlelight beautifully." },
  { word: "Hygge", pron: "HOO-gah", pos: "Noun", def: "A Danish word for a quality of coziness and comfortable togetherness. Think candles, warm blankets, good friends, and hot cocoa.", ex: "They created the perfect hygge with fairy lights, wool socks, and mugs of cider." },
  { word: "Ineffable", pron: "in-EFF-uh-bul", pos: "Adjective", def: "Too great or extreme to be expressed or described in words. Beyond what language can capture.", ex: "The beauty of the northern lights was truly ineffable." },
  { word: "Ikigai", pron: "ee-kee-GUY", pos: "Noun", def: "A Japanese concept meaning your reason for being — the intersection of what you love, what you're good at, what the world needs, and what you can be paid for.", ex: "After years of searching, she finally found her ikigai in teaching art to children." },
  { word: "Serendipity", pron: "ser-en-DIP-ih-tee", pos: "Noun", def: "The occurrence of finding pleasant or valuable things by happy accident.", ex: "Meeting his business partner at a random coffee shop was pure serendipity." },
  { word: "Mudita", pron: "moo-DEE-tah", pos: "Noun", def: "A Buddhist concept meaning vicarious joy — the pleasure that comes from delighting in other people's happiness and success.", ex: "Watching her best friend accept the award, she was overwhelmed with mudita." },
  { word: "Querencia", pron: "keh-REN-see-ah", pos: "Noun", def: "A Spanish word for a place where you feel safe, where you draw strength from. A personal sanctuary.", ex: "The old reading nook by the window was her querencia." },
  { word: "Wabi-sabi", pron: "WAH-bee SAH-bee", pos: "Noun", def: "A Japanese worldview centered on the acceptance of imperfection and transience. Finding beauty in the flawed and incomplete.", ex: "The cracked ceramic bowl, repaired with gold, was the essence of wabi-sabi." },
  { word: "Ethereal", pron: "ih-THEER-ee-ul", pos: "Adjective", def: "Extremely delicate, light, and airy in a way that seems too perfect for this world.", ex: "The ballerina moved with an ethereal grace that hushed the entire audience." },
  { word: "Natsukashii", pron: "naht-soo-KAH-shee", pos: "Adjective", def: "A Japanese word for the bittersweet feeling of happily revisiting fond memories, tinged with the knowledge that those times are gone.", ex: "The smell of his grandmother's kitchen was deeply natsukashii." },
  { word: "Toska", pron: "TOSS-kah", pos: "Noun", def: "A Russian word for a deep spiritual anguish without a specific cause. A dull ache of the soul, a restless longing with nothing to long for.", ex: "On grey winter evenings, a nameless toska would settle in his chest." },
  { word: "Sonorous", pron: "SAHN-er-us", pos: "Adjective", def: "Having a deep, rich, full sound that is pleasant to hear.", ex: "The professor's sonorous voice made even chemistry lectures feel like poetry." },
  { word: "Gökotta", pron: "YUR-kot-ah", pos: "Noun", def: "A Swedish word meaning to wake up early in the morning to go outside and listen to the first birds sing.", ex: "Every May, she practiced gökotta, greeting the dawn chorus with a cup of tea." },
  { word: "Reverie", pron: "REV-er-ee", pos: "Noun", def: "A state of being pleasantly lost in your thoughts. A daydream so absorbing that the real world fades away.", ex: "She was deep in reverie when the bus arrived, nearly missing her stop." },
  { word: "Uitwaaien", pron: "OUT-vwy-en", pos: "Verb", def: "A Dutch word meaning to take a break by walking in the wind, letting it clear your mind and refresh your spirit.", ex: "After the stressful meeting, he went to the shore to uitwaaien." },
  { word: "Mellifluous", pron: "meh-LIF-loo-us", pos: "Adjective", def: "Sweet-sounding, smooth, and pleasant to hear. Like honey for your ears.", ex: "Her mellifluous singing voice could calm even the fussiest baby." },
  { word: "Lagom", pron: "LAH-gom", pos: "Adjective", def: "A Swedish word meaning 'just the right amount.' Not too much, not too little — perfectly balanced.", ex: "The seasoning was lagom — not overpowering, just enough to enhance the flavor." },
  { word: "Nefelibata", pron: "neh-feh-lee-BAH-tah", pos: "Noun", def: "A Portuguese word literally meaning 'cloud walker.' A dreamer who lives in the clouds of their own imagination.", ex: "He was a nefelibata, always drifting between reality and his vivid daydreams." },
  { word: "Chrysalism", pron: "KRIS-ah-liz-um", pos: "Noun", def: "The amniotic tranquility of being indoors during a thunderstorm, listening to the rain and feeling cozy and protected.", ex: "With rain hammering the windows, she sank into the sofa in perfect chrysalism." },
  { word: "Kairos", pron: "KY-ross", pos: "Noun", def: "An ancient Greek word for the perfect, supreme moment. Not clock time, but the right or opportune moment for action.", ex: "He recognized the kairos and seized the chance to speak his mind." },
  { word: "Opia", pron: "OH-pee-ah", pos: "Noun", def: "The ambiguous intensity of looking someone in the eye, which can feel simultaneously invasive and vulnerable.", ex: "Their accidental eye contact across the room was charged with opia." },
  { word: "Sobremesa", pron: "soh-breh-MEH-sah", pos: "Noun", def: "A Spanish word for the time spent lingering at the table after a meal, talking and enjoying each other's company.", ex: "The best part of Sunday dinner was always the sobremesa that followed." },
  { word: "Eleutheromania", pron: "el-OO-thero-MAY-nee-ah", pos: "Noun", def: "An intense, irresistible desire for freedom. A mania for liberty that hums in the bones.", ex: "The long winter lockdown stirred an eleutheromania she couldn't ignore." },
  { word: "Kintsukuroi", pron: "kin-tsoo-koo-ROY", pos: "Noun", def: "The Japanese art of repairing broken pottery with gold, treating the breakage as part of the object's history rather than something to hide.", ex: "She thought of her scars as kintsukuroi — proof she had healed into something more beautiful." },
  { word: "Syzygy", pron: "SIZ-ih-jee", pos: "Noun", def: "The alignment of three celestial bodies in a straight line. Also the only English word with three Y's.", ex: "The solar eclipse was caused by a perfect syzygy of the sun, moon, and Earth." },
  { word: "Friluftsliv", pron: "FREE-loofts-leev", pos: "Noun", def: "A Norwegian concept meaning 'open-air living.' The philosophy that spending time outdoors is essential for a good life.", ex: "Rain or shine, she embraced friluftsliv with daily hikes through the forest." },
  { word: "Ataraxia", pron: "at-ah-RAK-see-ah", pos: "Noun", def: "A state of serene calmness, free from worry or preoccupation. The ancient Greek ideal of inner tranquility.", ex: "After years of meditation, he finally achieved something close to ataraxia." },
  { word: "Raconteur", pron: "rak-on-TUR", pos: "Noun", def: "A person who tells stories with skillful flair and wit. The person at the party everyone gathers around.", ex: "Grandpa was the family's greatest raconteur, holding everyone spellbound after dinner." },
  { word: "Duende", pron: "DWEN-day", pos: "Noun", def: "A Spanish term for the mysterious power of art to deeply move a person. A quality of passion and authenticity.", ex: "The flamenco dancer performed with such duende that the audience wept." },
  { word: "Elysian", pron: "ih-LIZH-un", pos: "Adjective", def: "Relating to or characteristic of paradise. Blissful, creative, and divinely inspired.", ex: "The hidden beach was elysian — white sand, turquoise water, and absolute silence." },
  { word: "Yūgen", pron: "YOO-gen", pos: "Noun", def: "A Japanese word for a profound, mysterious sense of the beauty of the universe — and the sad beauty of human suffering within it.", ex: "Watching the cherry blossoms fall in the rain, he felt the yūgen of the moment." },
  { word: "Abscond", pron: "ab-SKOND", pos: "Verb", def: "To leave hurriedly and secretly, usually to escape from custody or avoid detection.", ex: "The cat absconded with the entire salmon fillet when no one was looking." },
  { word: "Halcyon", pron: "HAL-see-on", pos: "Adjective", def: "Denoting a period of time in the past that was idyllically happy and peaceful. Golden, calm, and carefree.", ex: "She often thought back to the halcyon days of college with a wistful smile." },
  { word: "Mamihlapinatapai", pron: "mah-mee-lah-pin-yah-tah-PIE", pos: "Noun", def: "A look shared between two people, each wishing the other would start something that both want but neither will begin.", ex: "They exchanged a mamihlapinatapai across the table but neither spoke first." },
  { word: "Dulcet", pron: "DUL-sit", pos: "Adjective", def: "Sweet and soothing, especially of sound. Gentle and pleasing to the ear.", ex: "The dulcet tones of the cello filled the moonlit garden." },
  { word: "Psithurism", pron: "SITH-yur-iz-um", pos: "Noun", def: "The sound of wind whispering through the trees and rustling the leaves.", ex: "She fell asleep on the hammock, lullabied by the gentle psithurism overhead." },
  { word: "Jouska", pron: "ZHOO-skah", pos: "Noun", def: "A hypothetical conversation that you compulsively play out in your head — rehearsing what you'd say and how they'd respond.", ex: "He spent the entire shower in jouska, perfecting a speech he'd never give." },
  { word: "Tacenda", pron: "tah-SEN-dah", pos: "Noun", def: "Things better left unsaid. Matters to be passed over in silence.", ex: "Some family stories are tacenda, known by all but spoken by none." },
  { word: "Orenda", pron: "oh-REN-dah", pos: "Noun", def: "A Haudenosaunee concept for the extraordinary, invisible force present in all people. A spiritual power of human will.", ex: "Against all odds, her orenda carried her through the final miles of the marathon." },
  { word: "Scintilla", pron: "sin-TIL-ah", pos: "Noun", def: "A tiny, brilliant spark or flash. A small trace or barely perceptible amount of something.", ex: "There wasn't a scintilla of doubt in her voice when she said yes." },
  { word: "Waldeinsamkeit", pron: "VALD-eyen-zahm-kyte", pos: "Noun", def: "A German word for the feeling of solitude and connectedness to nature when being alone in the woods.", ex: "Deep among the pines, a peaceful waldeinsamkeit settled over him." },
  { word: "Coddiwomple", pron: "COD-ee-wom-pul", pos: "Verb", def: "To travel purposefully toward a vague destination. Moving forward with conviction even when you don't know where you're going.", ex: "With no map and a full tank, they decided to coddiwomple westward." },
  { word: "Brontide", pron: "BRON-tide", pos: "Noun", def: "The low rumbling of distant thunder. A sound felt as much as heard.", ex: "A faint brontide rolled across the valley, promising a storm by nightfall." },
  { word: "Ephemeral", pron: "eh-FEM-er-ul", pos: "Adjective", def: "Lasting for a very short time. Fleeting and transient, like morning dew or a perfect sunset.", ex: "The ephemeral beauty of the cherry blossoms made them all the more precious." },
  { word: "Sillage", pron: "see-YAZH", pos: "Noun", def: "The trail of scent left in the air by someone who has walked past. A perfume's lingering wake.", ex: "He recognized her sillage — jasmine and vanilla — before he even turned around." },
  { word: "Susurrus", pron: "soo-SUR-us", pos: "Noun", def: "A whispering or rustling sound. The gentle murmur of a breeze, a stream, or hushed voices.", ex: "The susurrus of the creek outside was nature's white noise machine." },
  { word: "Palimpsest", pron: "PAL-imp-sest", pos: "Noun", def: "Something reused or altered but still bearing traces of its earlier form. Originally a manuscript written over older, scraped-off text.", ex: "The city was a palimpsest, modern glass towers rising over centuries-old foundations." },
  { word: "Penumbra", pron: "peh-NUM-brah", pos: "Noun", def: "The partial shadow between full shadow and full light. The blurry edge where darkness meets brightness.", ex: "She sat in the penumbra of the lamplight, half in shadow, half aglow." },
  { word: "Liminal", pron: "LIM-in-ul", pos: "Adjective", def: "Relating to a transitional or in-between state. The threshold between what was and what's next.", ex: "Graduation felt liminal — no longer a student, not yet whatever came next." },
  { word: "Selcouth", pron: "SEL-kooth", pos: "Adjective", def: "Unfamiliar, rare, and marvelous. Strange in a wonderful way.", ex: "The bioluminescent bay was utterly selcouth — like swimming through liquid starlight." },
  { word: "Clinomania", pron: "kly-no-MAY-nee-ah", pos: "Noun", def: "An excessive desire to stay in bed. The overwhelming pull of your pillow on a cold morning.", ex: "Monday mornings triggered her clinomania like nothing else." },
  { word: "Sempiternal", pron: "sem-pih-TUR-nul", pos: "Adjective", def: "Eternal and unchanging. Everlasting — having no beginning and no end.", ex: "The stars seemed sempiternal, burning long before humans and long after." },
  { word: "Numinous", pron: "NOO-min-us", pos: "Adjective", def: "Having a strong spiritual or religious quality. Indicating the presence of something divine or transcendent.", ex: "Standing in the ancient cathedral, she felt a numinous presence she couldn't explain." },
  { word: "Effervescent", pron: "ef-er-VES-ent", pos: "Adjective", def: "Bubbly, vivacious, and enthusiastic. Originally describing fizzy liquids, now used for sparkling personalities.", ex: "Her effervescent laugh was contagious and lit up the entire room." },
  { word: "Redamancy", pron: "RED-ah-man-see", pos: "Noun", def: "The act of loving the one who loves you. A love fully returned.", ex: "Theirs was a rare redamancy — equal, warm, and unwavering." },
  { word: "Peripatetic", pron: "per-ih-pah-TET-ik", pos: "Adjective", def: "Traveling from place to place, especially working in various locations. A wandering lifestyle.", ex: "His peripatetic career took him from Tokyo to Buenos Aires in a single month." },
  { word: "Phosphorescence", pron: "fos-for-ES-ence", pos: "Noun", def: "A soft glow of light without heat. The eerie blue-green light of ocean waves at night.", ex: "They waded into the phosphorescence, each step lighting up the dark water." },
  { word: "Harbinger", pron: "HAR-bin-jer", pos: "Noun", def: "A person or thing that signals the approach of something. A forerunner or early warning sign.", ex: "The first robin of spring was always a harbinger of warmer days." },
  { word: "Schadenfreude", pron: "SHAH-den-froy-duh", pos: "Noun", def: "Pleasure derived from another person's misfortune. A German word for a very human (if slightly guilty) feeling.", ex: "He felt a twinge of schadenfreude when his rival tripped on stage." },
  { word: "Melancholia", pron: "mel-an-KOH-lee-ah", pos: "Noun", def: "A deep, persistent sadness. A poetic, old-fashioned word for a heavy and reflective sorrow.", ex: "The painting's blue palette conveyed a profound melancholia." },
  { word: "Quixotic", pron: "kwik-SOT-ik", pos: "Adjective", def: "Extremely idealistic, unrealistic, and impractical. Inspired by Don Quixote's impossible dreams.", ex: "His quixotic plan to bike across Siberia surprised absolutely no one who knew him." },
  { word: "Oblivion", pron: "oh-BLIV-ee-un", pos: "Noun", def: "The state of being completely forgotten or unaware. Total nothingness or unconsciousness.", ex: "The once-famous ballad faded into oblivion over the decades." },
  { word: "Lucid", pron: "LOO-sid", pos: "Adjective", def: "Expressed clearly and easy to understand. Also describes a state of clear, aware thinking — especially during dreams.", ex: "In a lucid dream, she realized she was dreaming and chose to fly." },
  { word: "Ephemeron", pron: "eh-FEM-er-on", pos: "Noun", def: "Something that lasts for a remarkably brief time. A thing designed to be useful or beautiful only temporarily.", ex: "The sand mandala, an ephemeron by design, was swept away at sunset." },
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
  if (e.target === document.getElementById('themeOverlay')) {
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
