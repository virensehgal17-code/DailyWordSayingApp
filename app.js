// ===== WORD DATA =====
const words = [
    {
        "word":  "Aberration",
        "pron":  "ab-uh-RAY-shun",
        "pos":  "Noun",
        "def":  "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
        "ex":  "They described the outbreak of violence as an aberration."
    },
    {
        "word":  "Abstemious",
        "pron":  "ab-STEE-mee-us",
        "pos":  "Adjective",
        "def":  "Not self-indulgent, especially when eating and drinking.",
        "ex":  "The monks lived a very abstemious life in the monastery."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the invitation with alacrity."
    },
    {
        "word":  "Amalgamate",
        "pron":  "uh-MAL-guh-mayt",
        "pos":  "Verb",
        "def":  "Combine or unite to form one organization or structure.",
        "ex":  "He amalgamated his company with another."
    },
    {
        "word":  "Anachronism",
        "pron":  "uh-NAK-ruh-niz-um",
        "pos":  "Noun",
        "def":  "A thing belonging or appropriate to a period other than that in which it exists.",
        "ex":  "Everything was as it would have appeared in centuries past apart from one obvious anachronism."
    },
    {
        "word":  "Anomalous",
        "pron":  "uh-NOM-uh-lus",
        "pos":  "Adjective",
        "def":  "Deviating from what is standard, normal, or expected.",
        "ex":  "There was an anomalous situation where the lowest paid actually received the biggest tax cut."
    },
    {
        "word":  "Antipathy",
        "pron":  "an-TIP-uh-thee",
        "pos":  "Noun",
        "def":  "A deep-seated feeling of dislike; aversion.",
        "ex":  "His fundamental antipathy to capitalism made him a controversial figure."
    },
    {
        "word":  "Archaic",
        "pron":  "ar-KAY-ik",
        "pos":  "Adjective",
        "def":  "Very old or old-fashioned.",
        "ex":  "Prisons are run on archaic methods."
    },
    {
        "word":  "Ascetic",
        "pron":  "uh-SET-ik",
        "pos":  "Adjective",
        "def":  "Characterized by or suggesting the practice of severe self-discipline.",
        "ex":  "The ascetic lifestyle of the desert hermit was fascinating to the scholars."
    },
    {
        "word":  "Assuage",
        "pron":  "uh-SWAYJ",
        "pos":  "Verb",
        "def":  "Make (an unpleasant feeling) less intense.",
        "ex":  "The letter assuaged the fears of most members."
    },
    {
        "word":  "Auspicious",
        "pron":  "aw-SPISH-us",
        "pos":  "Adjective",
        "def":  "Conducive to success; favorable.",
        "ex":  "It was not the most auspicious moment to hold an election."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "Songs with banal, repeated words are forgettable."
    },
    {
        "word":  "Belligerent",
        "pron":  "buh-LIJ-er-unt",
        "pos":  "Adjective",
        "def":  "Hostile and aggressive.",
        "ex":  "A bull-necked, belligerent old man was shouting at the waiter."
    },
    {
        "word":  "Bolster",
        "pron":  "BOHL-ster",
        "pos":  "Verb",
        "def":  "Support or strengthen; prop up.",
        "ex":  "The fall in interest rates is starting to bolster confidence."
    },
    {
        "word":  "Cacophony",
        "pron":  "kuh-KOF-uh-nee",
        "pos":  "Noun",
        "def":  "A harsh discordant mixture of sounds.",
        "ex":  "A cacophony of deafening alarm bells echoed through the halls."
    },
    {
        "word":  "Capricious",
        "pron":  "kuh-PRISH-us",
        "pos":  "Adjective",
        "def":  "Given to sudden and unaccountable changes of mood or behavior.",
        "ex":  "A capricious and often brutal administration."
    },
    {
        "word":  "Castigate",
        "pron":  "KAS-tih-gayt",
        "pos":  "Verb",
        "def":  "Reprimand (someone) severely.",
        "ex":  "He was castigated for not setting a good example."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event.",
        "ex":  "The governor\u0027s speech acted as a catalyst for debate."
    },
    {
        "word":  "Caustic",
        "pron":  "KAW-stik",
        "pos":  "Adjective",
        "def":  "Sarcastic in a scathing and bitter way.",
        "ex":  "The players were making caustic comments about the refereeing."
    },
    {
        "word":  "Chicanery",
        "pron":  "shih-KAY-nuh-ree",
        "pos":  "Noun",
        "def":  "The use of trickery to achieve a political, financial, or legal purpose.",
        "ex":  "An underhanded person who schemes corruption and political chicanery behind closed doors."
    },
    {
        "word":  "Cogent",
        "pron":  "KOH-junt",
        "pos":  "Adjective",
        "def":  "Clear, logical, and convincing.",
        "ex":  "They put forward cogent arguments for British membership."
    },
    {
        "word":  "Commensurate",
        "pron":  "kuh-MEN-ser-it",
        "pos":  "Adjective",
        "def":  "Corresponding in size or degree; in proportion.",
        "ex":  "Salary will be commensurate with experience."
    },
    {
        "word":  "Corroborate",
        "pron":  "kuh-ROB-uh-rayt",
        "pos":  "Verb",
        "def":  "Confirm or give support to (a statement, theory, or finding).",
        "ex":  "The witness had corroborated the boy\u0027s account of the attack."
    },
    {
        "word":  "Craven",
        "pron":  "KRAY-vun",
        "pos":  "Adjective",
        "def":  "Contemptibly lacking in courage; cowardly.",
        "ex":  "A craven abdication of his moral duty."
    },
    {
        "word":  "Credulous",
        "pron":  "KREJ-uh-lus",
        "pos":  "Adjective",
        "def":  "Having or showing too great a readiness to believe things.",
        "ex":  "A ceremony staged for credulous tourists."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a dearth of evidence linking the suspects to the crime."
    },
    {
        "word":  "Deference",
        "pron":  "DEF-er-uns",
        "pos":  "Noun",
        "def":  "Humble submission and respect.",
        "ex":  "He addressed her with the deference due to age."
    },
    {
        "word":  "Deride",
        "pron":  "dih-RYD",
        "pos":  "Verb",
        "def":  "Express contempt for; ridicule.",
        "ex":  "Critics derided the proposals as clumsy attempts to find a solution."
    },
    {
        "word":  "Desiccate",
        "pron":  "DES-ih-kayt",
        "pos":  "Verb",
        "def":  "Remove the moisture from (something); cause to become completely dry.",
        "ex":  "Both the older growth and the new vegetation were desiccated by months of relentless sun."
    },
    {
        "word":  "Desultory",
        "pron":  "DES-ul-tor-ee",
        "pos":  "Adjective",
        "def":  "Lacking a plan, purpose, or enthusiasm.",
        "ex":  "A few people were left, dancing in a desultory fashion."
    },
    {
        "word":  "Diatribe",
        "pron":  "DY-uh-tryb",
        "pos":  "Noun",
        "def":  "A forceful and bitter verbal attack against someone or something.",
        "ex":  "A diatribe against the Roman Catholic Church."
    },
    {
        "word":  "Diffident",
        "pron":  "DIF-ih-dunt",
        "pos":  "Adjective",
        "def":  "Modest or shy because of a lack of self-confidence.",
        "ex":  "A diffident youth who refused to socialize with the other delegates."
    },
    {
        "word":  "Dilatory",
        "pron":  "DIL-uh-tor-ee",
        "pos":  "Adjective",
        "def":  "Slow to act.",
        "ex":  "He had been dilatory in appointing a solicitor."
    },
    {
        "word":  "Dilettante",
        "pron":  "DIL-ih-tahnt",
        "pos":  "Noun",
        "def":  "A person who cultivates an area of interest without real commitment or knowledge.",
        "ex":  "A wealthy literary dilettante."
    },
    {
        "word":  "Dirge",
        "pron":  "DURJ",
        "pos":  "Noun",
        "def":  "A lament for the dead, especially one forming part of a funeral rite.",
        "ex":  "Singers chanted dirges to the rhythmic beat of drums."
    },
    {
        "word":  "Disabuse",
        "pron":  "dis-uh-BYOOZ",
        "pos":  "Verb",
        "def":  "Persuade (someone) that an idea or belief is mistaken.",
        "ex":  "He quickly disabused me of my fanciful notions."
    },
    {
        "word":  "Disparate",
        "pron":  "DIS-per-it",
        "pos":  "Adjective",
        "def":  "Essentially different in kind; not allowing comparison.",
        "ex":  "They inhabit disparate worlds of thought."
    },
    {
        "word":  "Dissemble",
        "pron":  "dih-SEM-bul",
        "pos":  "Verb",
        "def":  "Conceal one\u0027s true motives, feelings, or beliefs.",
        "ex":  "An honest, sincere person with no need to dissemble."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "He gives his opinion without trying to be dogmatic."
    },
    {
        "word":  "Eclectic",
        "pron":  "ih-KLEK-tik",
        "pos":  "Adjective",
        "def":  "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        "ex":  "Universities offering an eclectic mix of courses."
    },
    {
        "word":  "Efficacy",
        "pron":  "EF-ih-kuh-see",
        "pos":  "Noun",
        "def":  "The ability to produce a desired or intended result.",
        "ex":  "There is little information on the efficacy of this treatment."
    },
    {
        "word":  "Elegy",
        "pron":  "EL-uh-jee",
        "pos":  "Noun",
        "def":  "A poem of serious reflection, typically a lament for the dead.",
        "ex":  "He wrote a beautiful elegy for his late friend."
    },
    {
        "word":  "Enervate",
        "pron":  "EN-er-vayt",
        "pos":  "Verb",
        "def":  "Cause (someone) to feel drained of energy or vitality; weaken.",
        "ex":  "The heat and humidity enervated us completely."
    },
    {
        "word":  "Engender",
        "pron":  "in-JEN-der",
        "pos":  "Verb",
        "def":  "Cause or give rise to (a feeling, situation, or condition).",
        "ex":  "The issue engendered continuing controversy."
    },
    {
        "word":  "Ephemeral",
        "pron":  "ih-FEM-er-ul",
        "pos":  "Adjective",
        "def":  "Lasting for a very short time.",
        "ex":  "Fashions are ephemeral."
    },
    {
        "word":  "Equivocate",
        "pron":  "ih-KWIV-uh-kayt",
        "pos":  "Verb",
        "def":  "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
        "ex":  "Not wishing to commit himself, he started to equivocate."
    },
    {
        "word":  "Erudite",
        "pron":  "AIR-yoo-dyt",
        "pos":  "Adjective",
        "def":  "Having or showing great knowledge or learning.",
        "ex":  "Ken could turn any conversation into an erudite discussion."
    },
    {
        "word":  "Esoteric",
        "pron":  "es-uh-TAIR-ik",
        "pos":  "Adjective",
        "def":  "Intended for or likely to be understood by only a small number of people with a specialized knowledge.",
        "ex":  "Esoteric philosophical debates."
    },
    {
        "word":  "Estimable",
        "pron":  "ES-tih-muh-bul",
        "pos":  "Adjective",
        "def":  "Worthy of great respect.",
        "ex":  "She was shown into that estimable woman\u0027s parlor."
    },
    {
        "word":  "Eulogy",
        "pron":  "YOO-luh-jee",
        "pos":  "Noun",
        "def":  "A speech or piece of writing that praises someone or something highly.",
        "ex":  "His good friend delivered a brief eulogy."
    },
    {
        "word":  "Euphemism",
        "pron":  "YOO-fuh-miz-um",
        "pos":  "Noun",
        "def":  "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "ex":  "\u0027Downsizing\u0027 is a corporate euphemism for firing people."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make (a problem, bad situation, or negative feeling) worse.",
        "ex":  "The exorbitant cost of land in urban areas only exacerbated the problem."
    },
    {
        "word":  "Exculpate",
        "pron":  "EK-skul-payt",
        "pos":  "Verb",
        "def":  "Show or declare that (someone) is not guilty of wrongdoing.",
        "ex":  "The article exculpated the mayor."
    },
    {
        "word":  "Exigent",
        "pron":  "EK-sih-junt",
        "pos":  "Adjective",
        "def":  "Pressing; demanding.",
        "ex":  "The exigent demands of the music took a toll on her voice."
    },
    {
        "word":  "Fawn",
        "pron":  "FAWN",
        "pos":  "Verb",
        "def":  "Give a servile display of exaggerated flattery or affection, typically in order to gain favor.",
        "ex":  "Congressmen fawn over the President."
    },
    {
        "word":  "Foment",
        "pron":  "foh-MENT",
        "pos":  "Verb",
        "def":  "Instigate or stir up (an undesirable or violent sentiment or course of action).",
        "ex":  "They accused him of fomenting political unrest."
    },
    {
        "word":  "Garrulous",
        "pron":  "GAIR-uh-lus",
        "pos":  "Adjective",
        "def":  "Excessively talkative, especially on trivial matters.",
        "ex":  "Polonius is portrayed as a foolish, garrulous old man."
    },
    {
        "word":  "Gregarious",
        "pron":  "gruh-GAIR-ee-us",
        "pos":  "Adjective",
        "def":  "Fond of company; sociable.",
        "ex":  "He was a popular and gregarious man."
    },
    {
        "word":  "Guile",
        "pron":  "GYL",
        "pos":  "Noun",
        "def":  "Sly or cunning intelligence.",
        "ex":  "He used all his guile and guts to free himself from the muddle he was in."
    },
    {
        "word":  "Gullible",
        "pron":  "GUL-uh-bul",
        "pos":  "Adjective",
        "def":  "Easily persuaded to believe something.",
        "ex":  "An attempt to persuade a gullible public to spend their money."
    },
    {
        "word":  "Homogeneous",
        "pron":  "hoh-muh-JEE-nee-us",
        "pos":  "Adjective",
        "def":  "Of the same kind; alike.",
        "ex":  "Timbermen prefer to deal with homogeneous woods."
    },
    {
        "word":  "Iconoclast",
        "pron":  "y-KON-uh-klast",
        "pos":  "Noun",
        "def":  "A person who attacks or criticizes cherished beliefs or institutions.",
        "ex":  "A notorious iconoclast who mocked everything the society held dear."
    },
    {
        "word":  "Imperturbable",
        "pron":  "im-per-TUR-buh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be upset or excited; calm.",
        "ex":  "An imperturbable tranquility."
    },
    {
        "word":  "Impervious",
        "pron":  "im-PUR-vee-us",
        "pos":  "Adjective",
        "def":  "Not allowing fluid to pass through. Unable to be affected by.",
        "ex":  "He worked, apparently impervious to the heat."
    },
    {
        "word":  "Impetuous",
        "pron":  "im-PECH-oo-us",
        "pos":  "Adjective",
        "def":  "Acting or done quickly and without thought or care.",
        "ex":  "Her friend was headstrong and impetuous."
    },
    {
        "word":  "Implacable",
        "pron":  "im-PLAK-uh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be placated.",
        "ex":  "He was an implacable enemy of Ted\u0027s."
    },
    {
        "word":  "Inchoate",
        "pron":  "in-KOH-it",
        "pos":  "Adjective",
        "def":  "Just begun and so not fully formed or developed; rudimentary.",
        "ex":  "A still inchoate democracy."
    },
    {
        "word":  "Ingenuous",
        "pron":  "in-JEN-yoo-us",
        "pos":  "Adjective",
        "def":  "Innocent and unsuspecting.",
        "ex":  "He eyed her with wide, ingenuous eyes."
    },
    {
        "word":  "Inimical",
        "pron":  "ih-NIM-ih-kul",
        "pos":  "Adjective",
        "def":  "Tending to obstruct or harm.",
        "ex":  "Actions inimical to our interests."
    },
    {
        "word":  "Innocuous",
        "pron":  "ih-NOK-yoo-us",
        "pos":  "Adjective",
        "def":  "Not harmful or offensive.",
        "ex":  "It was an innocuous question."
    },
    {
        "word":  "Insipid",
        "pron":  "in-SIP-id",
        "pos":  "Adjective",
        "def":  "Lacking flavor or interest.",
        "ex":  "Mugs of insipid coffee."
    },
    {
        "word":  "Intractable",
        "pron":  "in-TRAK-tuh-bul",
        "pos":  "Adjective",
        "def":  "Hard to control or deal with.",
        "ex":  "Intractable economic problems."
    },
    {
        "word":  "Intransigent",
        "pron":  "in-TRAN-zih-junt",
        "pos":  "Adjective",
        "def":  "Unwilling or refusing to change one\u0027s views or to agree about something.",
        "ex":  "Her father had tried persuasion, but she was intransigent."
    },
    {
        "word":  "Irascible",
        "pron":  "ih-RAS-uh-bul",
        "pos":  "Adjective",
        "def":  "Having or showing a tendency to be easily angered.",
        "ex":  "An irascible man who yelled at his neighbors often."
    },
    {
        "word":  "Laconic",
        "pron":  "luh-KON-ik",
        "pos":  "Adjective",
        "def":  "Using very few words.",
        "ex":  "His laconic reply suggested a lack of interest in the topic."
    },
    {
        "word":  "Laud",
        "pron":  "LAWD",
        "pos":  "Verb",
        "def":  "Praise (a person or their achievements) highly, especially in a public context.",
        "ex":  "The obituary lauded him as a great statesman and soldier."
    },
    {
        "word":  "Aberration",
        "pron":  "ab-uh-RAY-shun",
        "pos":  "Noun",
        "def":  "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
        "ex":  "They described the outbreak of violence as an aberration."
    },
    {
        "word":  "Abstemious",
        "pron":  "ab-STEE-mee-us",
        "pos":  "Adjective",
        "def":  "Not self-indulgent, especially when eating and drinking.",
        "ex":  "The monks lived a very abstemious life in the monastery."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the invitation with alacrity."
    },
    {
        "word":  "Amalgamate",
        "pron":  "uh-MAL-guh-mayt",
        "pos":  "Verb",
        "def":  "Combine or unite to form one organization or structure.",
        "ex":  "He amalgamated his company with another."
    },
    {
        "word":  "Anachronism",
        "pron":  "uh-NAK-ruh-niz-um",
        "pos":  "Noun",
        "def":  "A thing belonging or appropriate to a period other than that in which it exists.",
        "ex":  "Everything was as it would have appeared in centuries past apart from one obvious anachronism."
    },
    {
        "word":  "Anomalous",
        "pron":  "uh-NOM-uh-lus",
        "pos":  "Adjective",
        "def":  "Deviating from what is standard, normal, or expected.",
        "ex":  "There was an anomalous situation where the lowest paid actually received the biggest tax cut."
    },
    {
        "word":  "Antipathy",
        "pron":  "an-TIP-uh-thee",
        "pos":  "Noun",
        "def":  "A deep-seated feeling of dislike; aversion.",
        "ex":  "His fundamental antipathy to capitalism made him a controversial figure."
    },
    {
        "word":  "Archaic",
        "pron":  "ar-KAY-ik",
        "pos":  "Adjective",
        "def":  "Very old or old-fashioned.",
        "ex":  "Prisons are run on archaic methods."
    },
    {
        "word":  "Ascetic",
        "pron":  "uh-SET-ik",
        "pos":  "Adjective",
        "def":  "Characterized by or suggesting the practice of severe self-discipline.",
        "ex":  "The ascetic lifestyle of the desert hermit was fascinating to the scholars."
    },
    {
        "word":  "Assuage",
        "pron":  "uh-SWAYJ",
        "pos":  "Verb",
        "def":  "Make (an unpleasant feeling) less intense.",
        "ex":  "The letter assuaged the fears of most members."
    },
    {
        "word":  "Auspicious",
        "pron":  "aw-SPISH-us",
        "pos":  "Adjective",
        "def":  "Conducive to success; favorable.",
        "ex":  "It was not the most auspicious moment to hold an election."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "Songs with banal, repeated words are forgettable."
    },
    {
        "word":  "Belligerent",
        "pron":  "buh-LIJ-er-unt",
        "pos":  "Adjective",
        "def":  "Hostile and aggressive.",
        "ex":  "A bull-necked, belligerent old man was shouting at the waiter."
    },
    {
        "word":  "Bolster",
        "pron":  "BOHL-ster",
        "pos":  "Verb",
        "def":  "Support or strengthen; prop up.",
        "ex":  "The fall in interest rates is starting to bolster confidence."
    },
    {
        "word":  "Cacophony",
        "pron":  "kuh-KOF-uh-nee",
        "pos":  "Noun",
        "def":  "A harsh discordant mixture of sounds.",
        "ex":  "A cacophony of deafening alarm bells echoed through the halls."
    },
    {
        "word":  "Capricious",
        "pron":  "kuh-PRISH-us",
        "pos":  "Adjective",
        "def":  "Given to sudden and unaccountable changes of mood or behavior.",
        "ex":  "A capricious and often brutal administration."
    },
    {
        "word":  "Castigate",
        "pron":  "KAS-tih-gayt",
        "pos":  "Verb",
        "def":  "Reprimand (someone) severely.",
        "ex":  "He was castigated for not setting a good example."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event.",
        "ex":  "The governor\u0027s speech acted as a catalyst for debate."
    },
    {
        "word":  "Caustic",
        "pron":  "KAW-stik",
        "pos":  "Adjective",
        "def":  "Sarcastic in a scathing and bitter way.",
        "ex":  "The players were making caustic comments about the refereeing."
    },
    {
        "word":  "Chicanery",
        "pron":  "shih-KAY-nuh-ree",
        "pos":  "Noun",
        "def":  "The use of trickery to achieve a political, financial, or legal purpose.",
        "ex":  "An underhanded person who schemes corruption and political chicanery behind closed doors."
    },
    {
        "word":  "Cogent",
        "pron":  "KOH-junt",
        "pos":  "Adjective",
        "def":  "Clear, logical, and convincing.",
        "ex":  "They put forward cogent arguments for British membership."
    },
    {
        "word":  "Commensurate",
        "pron":  "kuh-MEN-ser-it",
        "pos":  "Adjective",
        "def":  "Corresponding in size or degree; in proportion.",
        "ex":  "Salary will be commensurate with experience."
    },
    {
        "word":  "Corroborate",
        "pron":  "kuh-ROB-uh-rayt",
        "pos":  "Verb",
        "def":  "Confirm or give support to (a statement, theory, or finding).",
        "ex":  "The witness had corroborated the boy\u0027s account of the attack."
    },
    {
        "word":  "Craven",
        "pron":  "KRAY-vun",
        "pos":  "Adjective",
        "def":  "Contemptibly lacking in courage; cowardly.",
        "ex":  "A craven abdication of his moral duty."
    },
    {
        "word":  "Credulous",
        "pron":  "KREJ-uh-lus",
        "pos":  "Adjective",
        "def":  "Having or showing too great a readiness to believe things.",
        "ex":  "A ceremony staged for credulous tourists."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a dearth of evidence linking the suspects to the crime."
    },
    {
        "word":  "Deference",
        "pron":  "DEF-er-uns",
        "pos":  "Noun",
        "def":  "Humble submission and respect.",
        "ex":  "He addressed her with the deference due to age."
    },
    {
        "word":  "Deride",
        "pron":  "dih-RYD",
        "pos":  "Verb",
        "def":  "Express contempt for; ridicule.",
        "ex":  "Critics derided the proposals as clumsy attempts to find a solution."
    },
    {
        "word":  "Desiccate",
        "pron":  "DES-ih-kayt",
        "pos":  "Verb",
        "def":  "Remove the moisture from (something); cause to become completely dry.",
        "ex":  "Both the older growth and the new vegetation were desiccated by months of relentless sun."
    },
    {
        "word":  "Desultory",
        "pron":  "DES-ul-tor-ee",
        "pos":  "Adjective",
        "def":  "Lacking a plan, purpose, or enthusiasm.",
        "ex":  "A few people were left, dancing in a desultory fashion."
    },
    {
        "word":  "Diatribe",
        "pron":  "DY-uh-tryb",
        "pos":  "Noun",
        "def":  "A forceful and bitter verbal attack against someone or something.",
        "ex":  "A diatribe against the Roman Catholic Church."
    },
    {
        "word":  "Diffident",
        "pron":  "DIF-ih-dunt",
        "pos":  "Adjective",
        "def":  "Modest or shy because of a lack of self-confidence.",
        "ex":  "A diffident youth who refused to socialize with the other delegates."
    },
    {
        "word":  "Dilatory",
        "pron":  "DIL-uh-tor-ee",
        "pos":  "Adjective",
        "def":  "Slow to act.",
        "ex":  "He had been dilatory in appointing a solicitor."
    },
    {
        "word":  "Dilettante",
        "pron":  "DIL-ih-tahnt",
        "pos":  "Noun",
        "def":  "A person who cultivates an area of interest without real commitment or knowledge.",
        "ex":  "A wealthy literary dilettante."
    },
    {
        "word":  "Dirge",
        "pron":  "DURJ",
        "pos":  "Noun",
        "def":  "A lament for the dead, especially one forming part of a funeral rite.",
        "ex":  "Singers chanted dirges to the rhythmic beat of drums."
    },
    {
        "word":  "Disabuse",
        "pron":  "dis-uh-BYOOZ",
        "pos":  "Verb",
        "def":  "Persuade (someone) that an idea or belief is mistaken.",
        "ex":  "He quickly disabused me of my fanciful notions."
    },
    {
        "word":  "Disparate",
        "pron":  "DIS-per-it",
        "pos":  "Adjective",
        "def":  "Essentially different in kind; not allowing comparison.",
        "ex":  "They inhabit disparate worlds of thought."
    },
    {
        "word":  "Dissemble",
        "pron":  "dih-SEM-bul",
        "pos":  "Verb",
        "def":  "Conceal one\u0027s true motives, feelings, or beliefs.",
        "ex":  "An honest, sincere person with no need to dissemble."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "He gives his opinion without trying to be dogmatic."
    },
    {
        "word":  "Eclectic",
        "pron":  "ih-KLEK-tik",
        "pos":  "Adjective",
        "def":  "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        "ex":  "Universities offering an eclectic mix of courses."
    },
    {
        "word":  "Efficacy",
        "pron":  "EF-ih-kuh-see",
        "pos":  "Noun",
        "def":  "The ability to produce a desired or intended result.",
        "ex":  "There is little information on the efficacy of this treatment."
    },
    {
        "word":  "Elegy",
        "pron":  "EL-uh-jee",
        "pos":  "Noun",
        "def":  "A poem of serious reflection, typically a lament for the dead.",
        "ex":  "He wrote a beautiful elegy for his late friend."
    },
    {
        "word":  "Enervate",
        "pron":  "EN-er-vayt",
        "pos":  "Verb",
        "def":  "Cause (someone) to feel drained of energy or vitality; weaken.",
        "ex":  "The heat and humidity enervated us completely."
    },
    {
        "word":  "Engender",
        "pron":  "in-JEN-der",
        "pos":  "Verb",
        "def":  "Cause or give rise to (a feeling, situation, or condition).",
        "ex":  "The issue engendered continuing controversy."
    },
    {
        "word":  "Ephemeral",
        "pron":  "ih-FEM-er-ul",
        "pos":  "Adjective",
        "def":  "Lasting for a very short time.",
        "ex":  "Fashions are ephemeral."
    },
    {
        "word":  "Equivocate",
        "pron":  "ih-KWIV-uh-kayt",
        "pos":  "Verb",
        "def":  "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
        "ex":  "Not wishing to commit himself, he started to equivocate."
    },
    {
        "word":  "Erudite",
        "pron":  "AIR-yoo-dyt",
        "pos":  "Adjective",
        "def":  "Having or showing great knowledge or learning.",
        "ex":  "Ken could turn any conversation into an erudite discussion."
    },
    {
        "word":  "Esoteric",
        "pron":  "es-uh-TAIR-ik",
        "pos":  "Adjective",
        "def":  "Intended for or likely to be understood by only a small number of people with a specialized knowledge.",
        "ex":  "Esoteric philosophical debates."
    },
    {
        "word":  "Estimable",
        "pron":  "ES-tih-muh-bul",
        "pos":  "Adjective",
        "def":  "Worthy of great respect.",
        "ex":  "She was shown into that estimable woman\u0027s parlor."
    },
    {
        "word":  "Eulogy",
        "pron":  "YOO-luh-jee",
        "pos":  "Noun",
        "def":  "A speech or piece of writing that praises someone or something highly.",
        "ex":  "His good friend delivered a brief eulogy."
    },
    {
        "word":  "Euphemism",
        "pron":  "YOO-fuh-miz-um",
        "pos":  "Noun",
        "def":  "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "ex":  "\u0027Downsizing\u0027 is a corporate euphemism for firing people."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make (a problem, bad situation, or negative feeling) worse.",
        "ex":  "The exorbitant cost of land in urban areas only exacerbated the problem."
    },
    {
        "word":  "Exculpate",
        "pron":  "EK-skul-payt",
        "pos":  "Verb",
        "def":  "Show or declare that (someone) is not guilty of wrongdoing.",
        "ex":  "The article exculpated the mayor."
    },
    {
        "word":  "Exigent",
        "pron":  "EK-sih-junt",
        "pos":  "Adjective",
        "def":  "Pressing; demanding.",
        "ex":  "The exigent demands of the music took a toll on her voice."
    },
    {
        "word":  "Fawn",
        "pron":  "FAWN",
        "pos":  "Verb",
        "def":  "Give a servile display of exaggerated flattery or affection, typically in order to gain favor.",
        "ex":  "Congressmen fawn over the President."
    },
    {
        "word":  "Foment",
        "pron":  "foh-MENT",
        "pos":  "Verb",
        "def":  "Instigate or stir up (an undesirable or violent sentiment or course of action).",
        "ex":  "They accused him of fomenting political unrest."
    },
    {
        "word":  "Garrulous",
        "pron":  "GAIR-uh-lus",
        "pos":  "Adjective",
        "def":  "Excessively talkative, especially on trivial matters.",
        "ex":  "Polonius is portrayed as a foolish, garrulous old man."
    },
    {
        "word":  "Gregarious",
        "pron":  "gruh-GAIR-ee-us",
        "pos":  "Adjective",
        "def":  "Fond of company; sociable.",
        "ex":  "He was a popular and gregarious man."
    },
    {
        "word":  "Guile",
        "pron":  "GYL",
        "pos":  "Noun",
        "def":  "Sly or cunning intelligence.",
        "ex":  "He used all his guile and guts to free himself from the muddle he was in."
    },
    {
        "word":  "Gullible",
        "pron":  "GUL-uh-bul",
        "pos":  "Adjective",
        "def":  "Easily persuaded to believe something.",
        "ex":  "An attempt to persuade a gullible public to spend their money."
    },
    {
        "word":  "Homogeneous",
        "pron":  "hoh-muh-JEE-nee-us",
        "pos":  "Adjective",
        "def":  "Of the same kind; alike.",
        "ex":  "Timbermen prefer to deal with homogeneous woods."
    },
    {
        "word":  "Iconoclast",
        "pron":  "y-KON-uh-klast",
        "pos":  "Noun",
        "def":  "A person who attacks or criticizes cherished beliefs or institutions.",
        "ex":  "A notorious iconoclast who mocked everything the society held dear."
    },
    {
        "word":  "Imperturbable",
        "pron":  "im-per-TUR-buh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be upset or excited; calm.",
        "ex":  "An imperturbable tranquility."
    },
    {
        "word":  "Impervious",
        "pron":  "im-PUR-vee-us",
        "pos":  "Adjective",
        "def":  "Not allowing fluid to pass through. Unable to be affected by.",
        "ex":  "He worked, apparently impervious to the heat."
    },
    {
        "word":  "Impetuous",
        "pron":  "im-PECH-oo-us",
        "pos":  "Adjective",
        "def":  "Acting or done quickly and without thought or care.",
        "ex":  "Her friend was headstrong and impetuous."
    },
    {
        "word":  "Implacable",
        "pron":  "im-PLAK-uh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be placated.",
        "ex":  "He was an implacable enemy of Ted\u0027s."
    },
    {
        "word":  "Inchoate",
        "pron":  "in-KOH-it",
        "pos":  "Adjective",
        "def":  "Just begun and so not fully formed or developed; rudimentary.",
        "ex":  "A still inchoate democracy."
    },
    {
        "word":  "Ingenuous",
        "pron":  "in-JEN-yoo-us",
        "pos":  "Adjective",
        "def":  "Innocent and unsuspecting.",
        "ex":  "He eyed her with wide, ingenuous eyes."
    },
    {
        "word":  "Inimical",
        "pron":  "ih-NIM-ih-kul",
        "pos":  "Adjective",
        "def":  "Tending to obstruct or harm.",
        "ex":  "Actions inimical to our interests."
    },
    {
        "word":  "Innocuous",
        "pron":  "ih-NOK-yoo-us",
        "pos":  "Adjective",
        "def":  "Not harmful or offensive.",
        "ex":  "It was an innocuous question."
    },
    {
        "word":  "Insipid",
        "pron":  "in-SIP-id",
        "pos":  "Adjective",
        "def":  "Lacking flavor or interest.",
        "ex":  "Mugs of insipid coffee."
    },
    {
        "word":  "Intractable",
        "pron":  "in-TRAK-tuh-bul",
        "pos":  "Adjective",
        "def":  "Hard to control or deal with.",
        "ex":  "Intractable economic problems."
    },
    {
        "word":  "Intransigent",
        "pron":  "in-TRAN-zih-junt",
        "pos":  "Adjective",
        "def":  "Unwilling or refusing to change one\u0027s views or to agree about something.",
        "ex":  "Her father had tried persuasion, but she was intransigent."
    },
    {
        "word":  "Irascible",
        "pron":  "ih-RAS-uh-bul",
        "pos":  "Adjective",
        "def":  "Having or showing a tendency to be easily angered.",
        "ex":  "An irascible man who yelled at his neighbors often."
    },
    {
        "word":  "Laconic",
        "pron":  "luh-KON-ik",
        "pos":  "Adjective",
        "def":  "Using very few words.",
        "ex":  "His laconic reply suggested a lack of interest in the topic."
    },
    {
        "word":  "Laud",
        "pron":  "LAWD",
        "pos":  "Verb",
        "def":  "Praise (a person or their achievements) highly, especially in a public context.",
        "ex":  "The obituary lauded him as a great statesman and soldier."
    },
    {
        "word":  "Aberration",
        "pron":  "ab-uh-RAY-shun",
        "pos":  "Noun",
        "def":  "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
        "ex":  "They described the outbreak of violence as an aberration."
    },
    {
        "word":  "Abstemious",
        "pron":  "ab-STEE-mee-us",
        "pos":  "Adjective",
        "def":  "Not self-indulgent, especially when eating and drinking.",
        "ex":  "The monks lived a very abstemious life in the monastery."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the invitation with alacrity."
    },
    {
        "word":  "Amalgamate",
        "pron":  "uh-MAL-guh-mayt",
        "pos":  "Verb",
        "def":  "Combine or unite to form one organization or structure.",
        "ex":  "He amalgamated his company with another."
    },
    {
        "word":  "Anachronism",
        "pron":  "uh-NAK-ruh-niz-um",
        "pos":  "Noun",
        "def":  "A thing belonging or appropriate to a period other than that in which it exists.",
        "ex":  "Everything was as it would have appeared in centuries past apart from one obvious anachronism."
    },
    {
        "word":  "Anomalous",
        "pron":  "uh-NOM-uh-lus",
        "pos":  "Adjective",
        "def":  "Deviating from what is standard, normal, or expected.",
        "ex":  "There was an anomalous situation where the lowest paid actually received the biggest tax cut."
    },
    {
        "word":  "Antipathy",
        "pron":  "an-TIP-uh-thee",
        "pos":  "Noun",
        "def":  "A deep-seated feeling of dislike; aversion.",
        "ex":  "His fundamental antipathy to capitalism made him a controversial figure."
    },
    {
        "word":  "Archaic",
        "pron":  "ar-KAY-ik",
        "pos":  "Adjective",
        "def":  "Very old or old-fashioned.",
        "ex":  "Prisons are run on archaic methods."
    },
    {
        "word":  "Ascetic",
        "pron":  "uh-SET-ik",
        "pos":  "Adjective",
        "def":  "Characterized by or suggesting the practice of severe self-discipline.",
        "ex":  "The ascetic lifestyle of the desert hermit was fascinating to the scholars."
    },
    {
        "word":  "Assuage",
        "pron":  "uh-SWAYJ",
        "pos":  "Verb",
        "def":  "Make (an unpleasant feeling) less intense.",
        "ex":  "The letter assuaged the fears of most members."
    },
    {
        "word":  "Auspicious",
        "pron":  "aw-SPISH-us",
        "pos":  "Adjective",
        "def":  "Conducive to success; favorable.",
        "ex":  "It was not the most auspicious moment to hold an election."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "Songs with banal, repeated words are forgettable."
    },
    {
        "word":  "Belligerent",
        "pron":  "buh-LIJ-er-unt",
        "pos":  "Adjective",
        "def":  "Hostile and aggressive.",
        "ex":  "A bull-necked, belligerent old man was shouting at the waiter."
    },
    {
        "word":  "Bolster",
        "pron":  "BOHL-ster",
        "pos":  "Verb",
        "def":  "Support or strengthen; prop up.",
        "ex":  "The fall in interest rates is starting to bolster confidence."
    },
    {
        "word":  "Cacophony",
        "pron":  "kuh-KOF-uh-nee",
        "pos":  "Noun",
        "def":  "A harsh discordant mixture of sounds.",
        "ex":  "A cacophony of deafening alarm bells echoed through the halls."
    },
    {
        "word":  "Capricious",
        "pron":  "kuh-PRISH-us",
        "pos":  "Adjective",
        "def":  "Given to sudden and unaccountable changes of mood or behavior.",
        "ex":  "A capricious and often brutal administration."
    },
    {
        "word":  "Castigate",
        "pron":  "KAS-tih-gayt",
        "pos":  "Verb",
        "def":  "Reprimand (someone) severely.",
        "ex":  "He was castigated for not setting a good example."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event.",
        "ex":  "The governor\u0027s speech acted as a catalyst for debate."
    },
    {
        "word":  "Caustic",
        "pron":  "KAW-stik",
        "pos":  "Adjective",
        "def":  "Sarcastic in a scathing and bitter way.",
        "ex":  "The players were making caustic comments about the refereeing."
    },
    {
        "word":  "Chicanery",
        "pron":  "shih-KAY-nuh-ree",
        "pos":  "Noun",
        "def":  "The use of trickery to achieve a political, financial, or legal purpose.",
        "ex":  "An underhanded person who schemes corruption and political chicanery behind closed doors."
    },
    {
        "word":  "Cogent",
        "pron":  "KOH-junt",
        "pos":  "Adjective",
        "def":  "Clear, logical, and convincing.",
        "ex":  "They put forward cogent arguments for British membership."
    },
    {
        "word":  "Commensurate",
        "pron":  "kuh-MEN-ser-it",
        "pos":  "Adjective",
        "def":  "Corresponding in size or degree; in proportion.",
        "ex":  "Salary will be commensurate with experience."
    },
    {
        "word":  "Corroborate",
        "pron":  "kuh-ROB-uh-rayt",
        "pos":  "Verb",
        "def":  "Confirm or give support to (a statement, theory, or finding).",
        "ex":  "The witness had corroborated the boy\u0027s account of the attack."
    },
    {
        "word":  "Craven",
        "pron":  "KRAY-vun",
        "pos":  "Adjective",
        "def":  "Contemptibly lacking in courage; cowardly.",
        "ex":  "A craven abdication of his moral duty."
    },
    {
        "word":  "Credulous",
        "pron":  "KREJ-uh-lus",
        "pos":  "Adjective",
        "def":  "Having or showing too great a readiness to believe things.",
        "ex":  "A ceremony staged for credulous tourists."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a dearth of evidence linking the suspects to the crime."
    },
    {
        "word":  "Deference",
        "pron":  "DEF-er-uns",
        "pos":  "Noun",
        "def":  "Humble submission and respect.",
        "ex":  "He addressed her with the deference due to age."
    },
    {
        "word":  "Deride",
        "pron":  "dih-RYD",
        "pos":  "Verb",
        "def":  "Express contempt for; ridicule.",
        "ex":  "Critics derided the proposals as clumsy attempts to find a solution."
    },
    {
        "word":  "Desiccate",
        "pron":  "DES-ih-kayt",
        "pos":  "Verb",
        "def":  "Remove the moisture from (something); cause to become completely dry.",
        "ex":  "Both the older growth and the new vegetation were desiccated by months of relentless sun."
    },
    {
        "word":  "Desultory",
        "pron":  "DES-ul-tor-ee",
        "pos":  "Adjective",
        "def":  "Lacking a plan, purpose, or enthusiasm.",
        "ex":  "A few people were left, dancing in a desultory fashion."
    },
    {
        "word":  "Diatribe",
        "pron":  "DY-uh-tryb",
        "pos":  "Noun",
        "def":  "A forceful and bitter verbal attack against someone or something.",
        "ex":  "A diatribe against the Roman Catholic Church."
    },
    {
        "word":  "Diffident",
        "pron":  "DIF-ih-dunt",
        "pos":  "Adjective",
        "def":  "Modest or shy because of a lack of self-confidence.",
        "ex":  "A diffident youth who refused to socialize with the other delegates."
    },
    {
        "word":  "Dilatory",
        "pron":  "DIL-uh-tor-ee",
        "pos":  "Adjective",
        "def":  "Slow to act.",
        "ex":  "He had been dilatory in appointing a solicitor."
    },
    {
        "word":  "Dilettante",
        "pron":  "DIL-ih-tahnt",
        "pos":  "Noun",
        "def":  "A person who cultivates an area of interest without real commitment or knowledge.",
        "ex":  "A wealthy literary dilettante."
    },
    {
        "word":  "Dirge",
        "pron":  "DURJ",
        "pos":  "Noun",
        "def":  "A lament for the dead, especially one forming part of a funeral rite.",
        "ex":  "Singers chanted dirges to the rhythmic beat of drums."
    },
    {
        "word":  "Disabuse",
        "pron":  "dis-uh-BYOOZ",
        "pos":  "Verb",
        "def":  "Persuade (someone) that an idea or belief is mistaken.",
        "ex":  "He quickly disabused me of my fanciful notions."
    },
    {
        "word":  "Disparate",
        "pron":  "DIS-per-it",
        "pos":  "Adjective",
        "def":  "Essentially different in kind; not allowing comparison.",
        "ex":  "They inhabit disparate worlds of thought."
    },
    {
        "word":  "Dissemble",
        "pron":  "dih-SEM-bul",
        "pos":  "Verb",
        "def":  "Conceal one\u0027s true motives, feelings, or beliefs.",
        "ex":  "An honest, sincere person with no need to dissemble."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "He gives his opinion without trying to be dogmatic."
    },
    {
        "word":  "Eclectic",
        "pron":  "ih-KLEK-tik",
        "pos":  "Adjective",
        "def":  "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        "ex":  "Universities offering an eclectic mix of courses."
    },
    {
        "word":  "Efficacy",
        "pron":  "EF-ih-kuh-see",
        "pos":  "Noun",
        "def":  "The ability to produce a desired or intended result.",
        "ex":  "There is little information on the efficacy of this treatment."
    },
    {
        "word":  "Elegy",
        "pron":  "EL-uh-jee",
        "pos":  "Noun",
        "def":  "A poem of serious reflection, typically a lament for the dead.",
        "ex":  "He wrote a beautiful elegy for his late friend."
    },
    {
        "word":  "Enervate",
        "pron":  "EN-er-vayt",
        "pos":  "Verb",
        "def":  "Cause (someone) to feel drained of energy or vitality; weaken.",
        "ex":  "The heat and humidity enervated us completely."
    },
    {
        "word":  "Engender",
        "pron":  "in-JEN-der",
        "pos":  "Verb",
        "def":  "Cause or give rise to (a feeling, situation, or condition).",
        "ex":  "The issue engendered continuing controversy."
    },
    {
        "word":  "Ephemeral",
        "pron":  "ih-FEM-er-ul",
        "pos":  "Adjective",
        "def":  "Lasting for a very short time.",
        "ex":  "Fashions are ephemeral."
    },
    {
        "word":  "Equivocate",
        "pron":  "ih-KWIV-uh-kayt",
        "pos":  "Verb",
        "def":  "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
        "ex":  "Not wishing to commit himself, he started to equivocate."
    },
    {
        "word":  "Erudite",
        "pron":  "AIR-yoo-dyt",
        "pos":  "Adjective",
        "def":  "Having or showing great knowledge or learning.",
        "ex":  "Ken could turn any conversation into an erudite discussion."
    },
    {
        "word":  "Esoteric",
        "pron":  "es-uh-TAIR-ik",
        "pos":  "Adjective",
        "def":  "Intended for or likely to be understood by only a small number of people with a specialized knowledge.",
        "ex":  "Esoteric philosophical debates."
    },
    {
        "word":  "Estimable",
        "pron":  "ES-tih-muh-bul",
        "pos":  "Adjective",
        "def":  "Worthy of great respect.",
        "ex":  "She was shown into that estimable woman\u0027s parlor."
    },
    {
        "word":  "Eulogy",
        "pron":  "YOO-luh-jee",
        "pos":  "Noun",
        "def":  "A speech or piece of writing that praises someone or something highly.",
        "ex":  "His good friend delivered a brief eulogy."
    },
    {
        "word":  "Euphemism",
        "pron":  "YOO-fuh-miz-um",
        "pos":  "Noun",
        "def":  "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "ex":  "\u0027Downsizing\u0027 is a corporate euphemism for firing people."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make (a problem, bad situation, or negative feeling) worse.",
        "ex":  "The exorbitant cost of land in urban areas only exacerbated the problem."
    },
    {
        "word":  "Exculpate",
        "pron":  "EK-skul-payt",
        "pos":  "Verb",
        "def":  "Show or declare that (someone) is not guilty of wrongdoing.",
        "ex":  "The article exculpated the mayor."
    },
    {
        "word":  "Exigent",
        "pron":  "EK-sih-junt",
        "pos":  "Adjective",
        "def":  "Pressing; demanding.",
        "ex":  "The exigent demands of the music took a toll on her voice."
    },
    {
        "word":  "Fawn",
        "pron":  "FAWN",
        "pos":  "Verb",
        "def":  "Give a servile display of exaggerated flattery or affection, typically in order to gain favor.",
        "ex":  "Congressmen fawn over the President."
    },
    {
        "word":  "Foment",
        "pron":  "foh-MENT",
        "pos":  "Verb",
        "def":  "Instigate or stir up (an undesirable or violent sentiment or course of action).",
        "ex":  "They accused him of fomenting political unrest."
    },
    {
        "word":  "Garrulous",
        "pron":  "GAIR-uh-lus",
        "pos":  "Adjective",
        "def":  "Excessively talkative, especially on trivial matters.",
        "ex":  "Polonius is portrayed as a foolish, garrulous old man."
    },
    {
        "word":  "Gregarious",
        "pron":  "gruh-GAIR-ee-us",
        "pos":  "Adjective",
        "def":  "Fond of company; sociable.",
        "ex":  "He was a popular and gregarious man."
    },
    {
        "word":  "Guile",
        "pron":  "GYL",
        "pos":  "Noun",
        "def":  "Sly or cunning intelligence.",
        "ex":  "He used all his guile and guts to free himself from the muddle he was in."
    },
    {
        "word":  "Gullible",
        "pron":  "GUL-uh-bul",
        "pos":  "Adjective",
        "def":  "Easily persuaded to believe something.",
        "ex":  "An attempt to persuade a gullible public to spend their money."
    },
    {
        "word":  "Homogeneous",
        "pron":  "hoh-muh-JEE-nee-us",
        "pos":  "Adjective",
        "def":  "Of the same kind; alike.",
        "ex":  "Timbermen prefer to deal with homogeneous woods."
    },
    {
        "word":  "Iconoclast",
        "pron":  "y-KON-uh-klast",
        "pos":  "Noun",
        "def":  "A person who attacks or criticizes cherished beliefs or institutions.",
        "ex":  "A notorious iconoclast who mocked everything the society held dear."
    },
    {
        "word":  "Imperturbable",
        "pron":  "im-per-TUR-buh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be upset or excited; calm.",
        "ex":  "An imperturbable tranquility."
    },
    {
        "word":  "Impervious",
        "pron":  "im-PUR-vee-us",
        "pos":  "Adjective",
        "def":  "Not allowing fluid to pass through. Unable to be affected by.",
        "ex":  "He worked, apparently impervious to the heat."
    },
    {
        "word":  "Impetuous",
        "pron":  "im-PECH-oo-us",
        "pos":  "Adjective",
        "def":  "Acting or done quickly and without thought or care.",
        "ex":  "Her friend was headstrong and impetuous."
    },
    {
        "word":  "Implacable",
        "pron":  "im-PLAK-uh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be placated.",
        "ex":  "He was an implacable enemy of Ted\u0027s."
    },
    {
        "word":  "Inchoate",
        "pron":  "in-KOH-it",
        "pos":  "Adjective",
        "def":  "Just begun and so not fully formed or developed; rudimentary.",
        "ex":  "A still inchoate democracy."
    },
    {
        "word":  "Ingenuous",
        "pron":  "in-JEN-yoo-us",
        "pos":  "Adjective",
        "def":  "Innocent and unsuspecting.",
        "ex":  "He eyed her with wide, ingenuous eyes."
    },
    {
        "word":  "Inimical",
        "pron":  "ih-NIM-ih-kul",
        "pos":  "Adjective",
        "def":  "Tending to obstruct or harm.",
        "ex":  "Actions inimical to our interests."
    },
    {
        "word":  "Innocuous",
        "pron":  "ih-NOK-yoo-us",
        "pos":  "Adjective",
        "def":  "Not harmful or offensive.",
        "ex":  "It was an innocuous question."
    },
    {
        "word":  "Insipid",
        "pron":  "in-SIP-id",
        "pos":  "Adjective",
        "def":  "Lacking flavor or interest.",
        "ex":  "Mugs of insipid coffee."
    },
    {
        "word":  "Intractable",
        "pron":  "in-TRAK-tuh-bul",
        "pos":  "Adjective",
        "def":  "Hard to control or deal with.",
        "ex":  "Intractable economic problems."
    },
    {
        "word":  "Intransigent",
        "pron":  "in-TRAN-zih-junt",
        "pos":  "Adjective",
        "def":  "Unwilling or refusing to change one\u0027s views or to agree about something.",
        "ex":  "Her father had tried persuasion, but she was intransigent."
    },
    {
        "word":  "Irascible",
        "pron":  "ih-RAS-uh-bul",
        "pos":  "Adjective",
        "def":  "Having or showing a tendency to be easily angered.",
        "ex":  "An irascible man who yelled at his neighbors often."
    },
    {
        "word":  "Laconic",
        "pron":  "luh-KON-ik",
        "pos":  "Adjective",
        "def":  "Using very few words.",
        "ex":  "His laconic reply suggested a lack of interest in the topic."
    },
    {
        "word":  "Laud",
        "pron":  "LAWD",
        "pos":  "Verb",
        "def":  "Praise (a person or their achievements) highly, especially in a public context.",
        "ex":  "The obituary lauded him as a great statesman and soldier."
    },
    {
        "word":  "Aberration",
        "pron":  "ab-uh-RAY-shun",
        "pos":  "Noun",
        "def":  "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
        "ex":  "They described the outbreak of violence as an aberration."
    },
    {
        "word":  "Abstemious",
        "pron":  "ab-STEE-mee-us",
        "pos":  "Adjective",
        "def":  "Not self-indulgent, especially when eating and drinking.",
        "ex":  "The monks lived a very abstemious life in the monastery."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the invitation with alacrity."
    },
    {
        "word":  "Amalgamate",
        "pron":  "uh-MAL-guh-mayt",
        "pos":  "Verb",
        "def":  "Combine or unite to form one organization or structure.",
        "ex":  "He amalgamated his company with another."
    },
    {
        "word":  "Anachronism",
        "pron":  "uh-NAK-ruh-niz-um",
        "pos":  "Noun",
        "def":  "A thing belonging or appropriate to a period other than that in which it exists.",
        "ex":  "Everything was as it would have appeared in centuries past apart from one obvious anachronism."
    },
    {
        "word":  "Anomalous",
        "pron":  "uh-NOM-uh-lus",
        "pos":  "Adjective",
        "def":  "Deviating from what is standard, normal, or expected.",
        "ex":  "There was an anomalous situation where the lowest paid actually received the biggest tax cut."
    },
    {
        "word":  "Antipathy",
        "pron":  "an-TIP-uh-thee",
        "pos":  "Noun",
        "def":  "A deep-seated feeling of dislike; aversion.",
        "ex":  "His fundamental antipathy to capitalism made him a controversial figure."
    },
    {
        "word":  "Archaic",
        "pron":  "ar-KAY-ik",
        "pos":  "Adjective",
        "def":  "Very old or old-fashioned.",
        "ex":  "Prisons are run on archaic methods."
    },
    {
        "word":  "Ascetic",
        "pron":  "uh-SET-ik",
        "pos":  "Adjective",
        "def":  "Characterized by or suggesting the practice of severe self-discipline.",
        "ex":  "The ascetic lifestyle of the desert hermit was fascinating to the scholars."
    },
    {
        "word":  "Assuage",
        "pron":  "uh-SWAYJ",
        "pos":  "Verb",
        "def":  "Make (an unpleasant feeling) less intense.",
        "ex":  "The letter assuaged the fears of most members."
    },
    {
        "word":  "Auspicious",
        "pron":  "aw-SPISH-us",
        "pos":  "Adjective",
        "def":  "Conducive to success; favorable.",
        "ex":  "It was not the most auspicious moment to hold an election."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "Songs with banal, repeated words are forgettable."
    },
    {
        "word":  "Belligerent",
        "pron":  "buh-LIJ-er-unt",
        "pos":  "Adjective",
        "def":  "Hostile and aggressive.",
        "ex":  "A bull-necked, belligerent old man was shouting at the waiter."
    },
    {
        "word":  "Bolster",
        "pron":  "BOHL-ster",
        "pos":  "Verb",
        "def":  "Support or strengthen; prop up.",
        "ex":  "The fall in interest rates is starting to bolster confidence."
    },
    {
        "word":  "Cacophony",
        "pron":  "kuh-KOF-uh-nee",
        "pos":  "Noun",
        "def":  "A harsh discordant mixture of sounds.",
        "ex":  "A cacophony of deafening alarm bells echoed through the halls."
    },
    {
        "word":  "Capricious",
        "pron":  "kuh-PRISH-us",
        "pos":  "Adjective",
        "def":  "Given to sudden and unaccountable changes of mood or behavior.",
        "ex":  "A capricious and often brutal administration."
    },
    {
        "word":  "Castigate",
        "pron":  "KAS-tih-gayt",
        "pos":  "Verb",
        "def":  "Reprimand (someone) severely.",
        "ex":  "He was castigated for not setting a good example."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event.",
        "ex":  "The governor\u0027s speech acted as a catalyst for debate."
    },
    {
        "word":  "Caustic",
        "pron":  "KAW-stik",
        "pos":  "Adjective",
        "def":  "Sarcastic in a scathing and bitter way.",
        "ex":  "The players were making caustic comments about the refereeing."
    },
    {
        "word":  "Chicanery",
        "pron":  "shih-KAY-nuh-ree",
        "pos":  "Noun",
        "def":  "The use of trickery to achieve a political, financial, or legal purpose.",
        "ex":  "An underhanded person who schemes corruption and political chicanery behind closed doors."
    },
    {
        "word":  "Cogent",
        "pron":  "KOH-junt",
        "pos":  "Adjective",
        "def":  "Clear, logical, and convincing.",
        "ex":  "They put forward cogent arguments for British membership."
    },
    {
        "word":  "Commensurate",
        "pron":  "kuh-MEN-ser-it",
        "pos":  "Adjective",
        "def":  "Corresponding in size or degree; in proportion.",
        "ex":  "Salary will be commensurate with experience."
    },
    {
        "word":  "Corroborate",
        "pron":  "kuh-ROB-uh-rayt",
        "pos":  "Verb",
        "def":  "Confirm or give support to (a statement, theory, or finding).",
        "ex":  "The witness had corroborated the boy\u0027s account of the attack."
    },
    {
        "word":  "Craven",
        "pron":  "KRAY-vun",
        "pos":  "Adjective",
        "def":  "Contemptibly lacking in courage; cowardly.",
        "ex":  "A craven abdication of his moral duty."
    },
    {
        "word":  "Credulous",
        "pron":  "KREJ-uh-lus",
        "pos":  "Adjective",
        "def":  "Having or showing too great a readiness to believe things.",
        "ex":  "A ceremony staged for credulous tourists."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a dearth of evidence linking the suspects to the crime."
    },
    {
        "word":  "Deference",
        "pron":  "DEF-er-uns",
        "pos":  "Noun",
        "def":  "Humble submission and respect.",
        "ex":  "He addressed her with the deference due to age."
    },
    {
        "word":  "Deride",
        "pron":  "dih-RYD",
        "pos":  "Verb",
        "def":  "Express contempt for; ridicule.",
        "ex":  "Critics derided the proposals as clumsy attempts to find a solution."
    },
    {
        "word":  "Desiccate",
        "pron":  "DES-ih-kayt",
        "pos":  "Verb",
        "def":  "Remove the moisture from (something); cause to become completely dry.",
        "ex":  "Both the older growth and the new vegetation were desiccated by months of relentless sun."
    },
    {
        "word":  "Desultory",
        "pron":  "DES-ul-tor-ee",
        "pos":  "Adjective",
        "def":  "Lacking a plan, purpose, or enthusiasm.",
        "ex":  "A few people were left, dancing in a desultory fashion."
    },
    {
        "word":  "Diatribe",
        "pron":  "DY-uh-tryb",
        "pos":  "Noun",
        "def":  "A forceful and bitter verbal attack against someone or something.",
        "ex":  "A diatribe against the Roman Catholic Church."
    },
    {
        "word":  "Diffident",
        "pron":  "DIF-ih-dunt",
        "pos":  "Adjective",
        "def":  "Modest or shy because of a lack of self-confidence.",
        "ex":  "A diffident youth who refused to socialize with the other delegates."
    },
    {
        "word":  "Dilatory",
        "pron":  "DIL-uh-tor-ee",
        "pos":  "Adjective",
        "def":  "Slow to act.",
        "ex":  "He had been dilatory in appointing a solicitor."
    },
    {
        "word":  "Dilettante",
        "pron":  "DIL-ih-tahnt",
        "pos":  "Noun",
        "def":  "A person who cultivates an area of interest without real commitment or knowledge.",
        "ex":  "A wealthy literary dilettante."
    },
    {
        "word":  "Dirge",
        "pron":  "DURJ",
        "pos":  "Noun",
        "def":  "A lament for the dead, especially one forming part of a funeral rite.",
        "ex":  "Singers chanted dirges to the rhythmic beat of drums."
    },
    {
        "word":  "Disabuse",
        "pron":  "dis-uh-BYOOZ",
        "pos":  "Verb",
        "def":  "Persuade (someone) that an idea or belief is mistaken.",
        "ex":  "He quickly disabused me of my fanciful notions."
    },
    {
        "word":  "Disparate",
        "pron":  "DIS-per-it",
        "pos":  "Adjective",
        "def":  "Essentially different in kind; not allowing comparison.",
        "ex":  "They inhabit disparate worlds of thought."
    },
    {
        "word":  "Dissemble",
        "pron":  "dih-SEM-bul",
        "pos":  "Verb",
        "def":  "Conceal one\u0027s true motives, feelings, or beliefs.",
        "ex":  "An honest, sincere person with no need to dissemble."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "He gives his opinion without trying to be dogmatic."
    },
    {
        "word":  "Eclectic",
        "pron":  "ih-KLEK-tik",
        "pos":  "Adjective",
        "def":  "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        "ex":  "Universities offering an eclectic mix of courses."
    },
    {
        "word":  "Efficacy",
        "pron":  "EF-ih-kuh-see",
        "pos":  "Noun",
        "def":  "The ability to produce a desired or intended result.",
        "ex":  "There is little information on the efficacy of this treatment."
    },
    {
        "word":  "Elegy",
        "pron":  "EL-uh-jee",
        "pos":  "Noun",
        "def":  "A poem of serious reflection, typically a lament for the dead.",
        "ex":  "He wrote a beautiful elegy for his late friend."
    },
    {
        "word":  "Enervate",
        "pron":  "EN-er-vayt",
        "pos":  "Verb",
        "def":  "Cause (someone) to feel drained of energy or vitality; weaken.",
        "ex":  "The heat and humidity enervated us completely."
    },
    {
        "word":  "Engender",
        "pron":  "in-JEN-der",
        "pos":  "Verb",
        "def":  "Cause or give rise to (a feeling, situation, or condition).",
        "ex":  "The issue engendered continuing controversy."
    },
    {
        "word":  "Ephemeral",
        "pron":  "ih-FEM-er-ul",
        "pos":  "Adjective",
        "def":  "Lasting for a very short time.",
        "ex":  "Fashions are ephemeral."
    },
    {
        "word":  "Equivocate",
        "pron":  "ih-KWIV-uh-kayt",
        "pos":  "Verb",
        "def":  "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
        "ex":  "Not wishing to commit himself, he started to equivocate."
    },
    {
        "word":  "Erudite",
        "pron":  "AIR-yoo-dyt",
        "pos":  "Adjective",
        "def":  "Having or showing great knowledge or learning.",
        "ex":  "Ken could turn any conversation into an erudite discussion."
    },
    {
        "word":  "Esoteric",
        "pron":  "es-uh-TAIR-ik",
        "pos":  "Adjective",
        "def":  "Intended for or likely to be understood by only a small number of people with a specialized knowledge.",
        "ex":  "Esoteric philosophical debates."
    },
    {
        "word":  "Estimable",
        "pron":  "ES-tih-muh-bul",
        "pos":  "Adjective",
        "def":  "Worthy of great respect.",
        "ex":  "She was shown into that estimable woman\u0027s parlor."
    },
    {
        "word":  "Eulogy",
        "pron":  "YOO-luh-jee",
        "pos":  "Noun",
        "def":  "A speech or piece of writing that praises someone or something highly.",
        "ex":  "His good friend delivered a brief eulogy."
    },
    {
        "word":  "Euphemism",
        "pron":  "YOO-fuh-miz-um",
        "pos":  "Noun",
        "def":  "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "ex":  "\u0027Downsizing\u0027 is a corporate euphemism for firing people."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make (a problem, bad situation, or negative feeling) worse.",
        "ex":  "The exorbitant cost of land in urban areas only exacerbated the problem."
    },
    {
        "word":  "Exculpate",
        "pron":  "EK-skul-payt",
        "pos":  "Verb",
        "def":  "Show or declare that (someone) is not guilty of wrongdoing.",
        "ex":  "The article exculpated the mayor."
    },
    {
        "word":  "Exigent",
        "pron":  "EK-sih-junt",
        "pos":  "Adjective",
        "def":  "Pressing; demanding.",
        "ex":  "The exigent demands of the music took a toll on her voice."
    },
    {
        "word":  "Fawn",
        "pron":  "FAWN",
        "pos":  "Verb",
        "def":  "Give a servile display of exaggerated flattery or affection, typically in order to gain favor.",
        "ex":  "Congressmen fawn over the President."
    },
    {
        "word":  "Foment",
        "pron":  "foh-MENT",
        "pos":  "Verb",
        "def":  "Instigate or stir up (an undesirable or violent sentiment or course of action).",
        "ex":  "They accused him of fomenting political unrest."
    },
    {
        "word":  "Garrulous",
        "pron":  "GAIR-uh-lus",
        "pos":  "Adjective",
        "def":  "Excessively talkative, especially on trivial matters.",
        "ex":  "Polonius is portrayed as a foolish, garrulous old man."
    },
    {
        "word":  "Gregarious",
        "pron":  "gruh-GAIR-ee-us",
        "pos":  "Adjective",
        "def":  "Fond of company; sociable.",
        "ex":  "He was a popular and gregarious man."
    },
    {
        "word":  "Guile",
        "pron":  "GYL",
        "pos":  "Noun",
        "def":  "Sly or cunning intelligence.",
        "ex":  "He used all his guile and guts to free himself from the muddle he was in."
    },
    {
        "word":  "Gullible",
        "pron":  "GUL-uh-bul",
        "pos":  "Adjective",
        "def":  "Easily persuaded to believe something.",
        "ex":  "An attempt to persuade a gullible public to spend their money."
    },
    {
        "word":  "Homogeneous",
        "pron":  "hoh-muh-JEE-nee-us",
        "pos":  "Adjective",
        "def":  "Of the same kind; alike.",
        "ex":  "Timbermen prefer to deal with homogeneous woods."
    },
    {
        "word":  "Iconoclast",
        "pron":  "y-KON-uh-klast",
        "pos":  "Noun",
        "def":  "A person who attacks or criticizes cherished beliefs or institutions.",
        "ex":  "A notorious iconoclast who mocked everything the society held dear."
    },
    {
        "word":  "Imperturbable",
        "pron":  "im-per-TUR-buh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be upset or excited; calm.",
        "ex":  "An imperturbable tranquility."
    },
    {
        "word":  "Impervious",
        "pron":  "im-PUR-vee-us",
        "pos":  "Adjective",
        "def":  "Not allowing fluid to pass through. Unable to be affected by.",
        "ex":  "He worked, apparently impervious to the heat."
    },
    {
        "word":  "Impetuous",
        "pron":  "im-PECH-oo-us",
        "pos":  "Adjective",
        "def":  "Acting or done quickly and without thought or care.",
        "ex":  "Her friend was headstrong and impetuous."
    },
    {
        "word":  "Implacable",
        "pron":  "im-PLAK-uh-bul",
        "pos":  "Adjective",
        "def":  "Unable to be placated.",
        "ex":  "He was an implacable enemy of Ted\u0027s."
    },
    {
        "word":  "Inchoate",
        "pron":  "in-KOH-it",
        "pos":  "Adjective",
        "def":  "Just begun and so not fully formed or developed; rudimentary.",
        "ex":  "A still inchoate democracy."
    },
    {
        "word":  "Ingenuous",
        "pron":  "in-JEN-yoo-us",
        "pos":  "Adjective",
        "def":  "Innocent and unsuspecting.",
        "ex":  "He eyed her with wide, ingenuous eyes."
    },
    {
        "word":  "Inimical",
        "pron":  "ih-NIM-ih-kul",
        "pos":  "Adjective",
        "def":  "Tending to obstruct or harm.",
        "ex":  "Actions inimical to our interests."
    },
    {
        "word":  "Innocuous",
        "pron":  "ih-NOK-yoo-us",
        "pos":  "Adjective",
        "def":  "Not harmful or offensive.",
        "ex":  "It was an innocuous question."
    },
    {
        "word":  "Insipid",
        "pron":  "in-SIP-id",
        "pos":  "Adjective",
        "def":  "Lacking flavor or interest.",
        "ex":  "Mugs of insipid coffee."
    },
    {
        "word":  "Intractable",
        "pron":  "in-TRAK-tuh-bul",
        "pos":  "Adjective",
        "def":  "Hard to control or deal with.",
        "ex":  "Intractable economic problems."
    },
    {
        "word":  "Intransigent",
        "pron":  "in-TRAN-zih-junt",
        "pos":  "Adjective",
        "def":  "Unwilling or refusing to change one\u0027s views or to agree about something.",
        "ex":  "Her father had tried persuasion, but she was intransigent."
    },
    {
        "word":  "Irascible",
        "pron":  "ih-RAS-uh-bul",
        "pos":  "Adjective",
        "def":  "Having or showing a tendency to be easily angered.",
        "ex":  "An irascible man who yelled at his neighbors often."
    },
    {
        "word":  "Laconic",
        "pron":  "luh-KON-ik",
        "pos":  "Adjective",
        "def":  "Using very few words.",
        "ex":  "His laconic reply suggested a lack of interest in the topic."
    },
    {
        "word":  "Laud",
        "pron":  "LAWD",
        "pos":  "Verb",
        "def":  "Praise (a person or their achievements) highly, especially in a public context.",
        "ex":  "The obituary lauded him as a great statesman and soldier."
    },
    {
        "word":  "Aberration",
        "pron":  "ab-uh-RAY-shun",
        "pos":  "Noun",
        "def":  "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
        "ex":  "They described the outbreak of violence as an aberration."
    },
    {
        "word":  "Abstemious",
        "pron":  "ab-STEE-mee-us",
        "pos":  "Adjective",
        "def":  "Not self-indulgent, especially when eating and drinking.",
        "ex":  "The monks lived a very abstemious life in the monastery."
    },
    {
        "word":  "Alacrity",
        "pron":  "uh-LAK-rih-tee",
        "pos":  "Noun",
        "def":  "Brisk and cheerful readiness.",
        "ex":  "She accepted the invitation with alacrity."
    },
    {
        "word":  "Amalgamate",
        "pron":  "uh-MAL-guh-mayt",
        "pos":  "Verb",
        "def":  "Combine or unite to form one organization or structure.",
        "ex":  "He amalgamated his company with another."
    },
    {
        "word":  "Anachronism",
        "pron":  "uh-NAK-ruh-niz-um",
        "pos":  "Noun",
        "def":  "A thing belonging or appropriate to a period other than that in which it exists.",
        "ex":  "Everything was as it would have appeared in centuries past apart from one obvious anachronism."
    },
    {
        "word":  "Anomalous",
        "pron":  "uh-NOM-uh-lus",
        "pos":  "Adjective",
        "def":  "Deviating from what is standard, normal, or expected.",
        "ex":  "There was an anomalous situation where the lowest paid actually received the biggest tax cut."
    },
    {
        "word":  "Antipathy",
        "pron":  "an-TIP-uh-thee",
        "pos":  "Noun",
        "def":  "A deep-seated feeling of dislike; aversion.",
        "ex":  "His fundamental antipathy to capitalism made him a controversial figure."
    },
    {
        "word":  "Archaic",
        "pron":  "ar-KAY-ik",
        "pos":  "Adjective",
        "def":  "Very old or old-fashioned.",
        "ex":  "Prisons are run on archaic methods."
    },
    {
        "word":  "Ascetic",
        "pron":  "uh-SET-ik",
        "pos":  "Adjective",
        "def":  "Characterized by or suggesting the practice of severe self-discipline.",
        "ex":  "The ascetic lifestyle of the desert hermit was fascinating to the scholars."
    },
    {
        "word":  "Assuage",
        "pron":  "uh-SWAYJ",
        "pos":  "Verb",
        "def":  "Make (an unpleasant feeling) less intense.",
        "ex":  "The letter assuaged the fears of most members."
    },
    {
        "word":  "Auspicious",
        "pron":  "aw-SPISH-us",
        "pos":  "Adjective",
        "def":  "Conducive to success; favorable.",
        "ex":  "It was not the most auspicious moment to hold an election."
    },
    {
        "word":  "Banal",
        "pron":  "buh-NAL",
        "pos":  "Adjective",
        "def":  "So lacking in originality as to be obvious and boring.",
        "ex":  "Songs with banal, repeated words are forgettable."
    },
    {
        "word":  "Belligerent",
        "pron":  "buh-LIJ-er-unt",
        "pos":  "Adjective",
        "def":  "Hostile and aggressive.",
        "ex":  "A bull-necked, belligerent old man was shouting at the waiter."
    },
    {
        "word":  "Bolster",
        "pron":  "BOHL-ster",
        "pos":  "Verb",
        "def":  "Support or strengthen; prop up.",
        "ex":  "The fall in interest rates is starting to bolster confidence."
    },
    {
        "word":  "Cacophony",
        "pron":  "kuh-KOF-uh-nee",
        "pos":  "Noun",
        "def":  "A harsh discordant mixture of sounds.",
        "ex":  "A cacophony of deafening alarm bells echoed through the halls."
    },
    {
        "word":  "Capricious",
        "pron":  "kuh-PRISH-us",
        "pos":  "Adjective",
        "def":  "Given to sudden and unaccountable changes of mood or behavior.",
        "ex":  "A capricious and often brutal administration."
    },
    {
        "word":  "Castigate",
        "pron":  "KAS-tih-gayt",
        "pos":  "Verb",
        "def":  "Reprimand (someone) severely.",
        "ex":  "He was castigated for not setting a good example."
    },
    {
        "word":  "Catalyst",
        "pron":  "KAT-uh-list",
        "pos":  "Noun",
        "def":  "A person or thing that precipitates an event.",
        "ex":  "The governor\u0027s speech acted as a catalyst for debate."
    },
    {
        "word":  "Caustic",
        "pron":  "KAW-stik",
        "pos":  "Adjective",
        "def":  "Sarcastic in a scathing and bitter way.",
        "ex":  "The players were making caustic comments about the refereeing."
    },
    {
        "word":  "Chicanery",
        "pron":  "shih-KAY-nuh-ree",
        "pos":  "Noun",
        "def":  "The use of trickery to achieve a political, financial, or legal purpose.",
        "ex":  "An underhanded person who schemes corruption and political chicanery behind closed doors."
    },
    {
        "word":  "Cogent",
        "pron":  "KOH-junt",
        "pos":  "Adjective",
        "def":  "Clear, logical, and convincing.",
        "ex":  "They put forward cogent arguments for British membership."
    },
    {
        "word":  "Commensurate",
        "pron":  "kuh-MEN-ser-it",
        "pos":  "Adjective",
        "def":  "Corresponding in size or degree; in proportion.",
        "ex":  "Salary will be commensurate with experience."
    },
    {
        "word":  "Corroborate",
        "pron":  "kuh-ROB-uh-rayt",
        "pos":  "Verb",
        "def":  "Confirm or give support to (a statement, theory, or finding).",
        "ex":  "The witness had corroborated the boy\u0027s account of the attack."
    },
    {
        "word":  "Craven",
        "pron":  "KRAY-vun",
        "pos":  "Adjective",
        "def":  "Contemptibly lacking in courage; cowardly.",
        "ex":  "A craven abdication of his moral duty."
    },
    {
        "word":  "Credulous",
        "pron":  "KREJ-uh-lus",
        "pos":  "Adjective",
        "def":  "Having or showing too great a readiness to believe things.",
        "ex":  "A ceremony staged for credulous tourists."
    },
    {
        "word":  "Dearth",
        "pron":  "DURTH",
        "pos":  "Noun",
        "def":  "A scarcity or lack of something.",
        "ex":  "There is a dearth of evidence linking the suspects to the crime."
    },
    {
        "word":  "Deference",
        "pron":  "DEF-er-uns",
        "pos":  "Noun",
        "def":  "Humble submission and respect.",
        "ex":  "He addressed her with the deference due to age."
    },
    {
        "word":  "Deride",
        "pron":  "dih-RYD",
        "pos":  "Verb",
        "def":  "Express contempt for; ridicule.",
        "ex":  "Critics derided the proposals as clumsy attempts to find a solution."
    },
    {
        "word":  "Desiccate",
        "pron":  "DES-ih-kayt",
        "pos":  "Verb",
        "def":  "Remove the moisture from (something); cause to become completely dry.",
        "ex":  "Both the older growth and the new vegetation were desiccated by months of relentless sun."
    },
    {
        "word":  "Desultory",
        "pron":  "DES-ul-tor-ee",
        "pos":  "Adjective",
        "def":  "Lacking a plan, purpose, or enthusiasm.",
        "ex":  "A few people were left, dancing in a desultory fashion."
    },
    {
        "word":  "Diatribe",
        "pron":  "DY-uh-tryb",
        "pos":  "Noun",
        "def":  "A forceful and bitter verbal attack against someone or something.",
        "ex":  "A diatribe against the Roman Catholic Church."
    },
    {
        "word":  "Diffident",
        "pron":  "DIF-ih-dunt",
        "pos":  "Adjective",
        "def":  "Modest or shy because of a lack of self-confidence.",
        "ex":  "A diffident youth who refused to socialize with the other delegates."
    },
    {
        "word":  "Dilatory",
        "pron":  "DIL-uh-tor-ee",
        "pos":  "Adjective",
        "def":  "Slow to act.",
        "ex":  "He had been dilatory in appointing a solicitor."
    },
    {
        "word":  "Dilettante",
        "pron":  "DIL-ih-tahnt",
        "pos":  "Noun",
        "def":  "A person who cultivates an area of interest without real commitment or knowledge.",
        "ex":  "A wealthy literary dilettante."
    },
    {
        "word":  "Dirge",
        "pron":  "DURJ",
        "pos":  "Noun",
        "def":  "A lament for the dead, especially one forming part of a funeral rite.",
        "ex":  "Singers chanted dirges to the rhythmic beat of drums."
    },
    {
        "word":  "Disabuse",
        "pron":  "dis-uh-BYOOZ",
        "pos":  "Verb",
        "def":  "Persuade (someone) that an idea or belief is mistaken.",
        "ex":  "He quickly disabused me of my fanciful notions."
    },
    {
        "word":  "Disparate",
        "pron":  "DIS-per-it",
        "pos":  "Adjective",
        "def":  "Essentially different in kind; not allowing comparison.",
        "ex":  "They inhabit disparate worlds of thought."
    },
    {
        "word":  "Dissemble",
        "pron":  "dih-SEM-bul",
        "pos":  "Verb",
        "def":  "Conceal one\u0027s true motives, feelings, or beliefs.",
        "ex":  "An honest, sincere person with no need to dissemble."
    },
    {
        "word":  "Dogmatic",
        "pron":  "dog-MAT-ik",
        "pos":  "Adjective",
        "def":  "Inclined to lay down principles as incontrovertibly true.",
        "ex":  "He gives his opinion without trying to be dogmatic."
    },
    {
        "word":  "Eclectic",
        "pron":  "ih-KLEK-tik",
        "pos":  "Adjective",
        "def":  "Deriving ideas, style, or taste from a broad and diverse range of sources.",
        "ex":  "Universities offering an eclectic mix of courses."
    },
    {
        "word":  "Efficacy",
        "pron":  "EF-ih-kuh-see",
        "pos":  "Noun",
        "def":  "The ability to produce a desired or intended result.",
        "ex":  "There is little information on the efficacy of this treatment."
    },
    {
        "word":  "Elegy",
        "pron":  "EL-uh-jee",
        "pos":  "Noun",
        "def":  "A poem of serious reflection, typically a lament for the dead.",
        "ex":  "He wrote a beautiful elegy for his late friend."
    },
    {
        "word":  "Enervate",
        "pron":  "EN-er-vayt",
        "pos":  "Verb",
        "def":  "Cause (someone) to feel drained of energy or vitality; weaken.",
        "ex":  "The heat and humidity enervated us completely."
    },
    {
        "word":  "Engender",
        "pron":  "in-JEN-der",
        "pos":  "Verb",
        "def":  "Cause or give rise to (a feeling, situation, or condition).",
        "ex":  "The issue engendered continuing controversy."
    },
    {
        "word":  "Ephemeral",
        "pron":  "ih-FEM-er-ul",
        "pos":  "Adjective",
        "def":  "Lasting for a very short time.",
        "ex":  "Fashions are ephemeral."
    },
    {
        "word":  "Equivocate",
        "pron":  "ih-KWIV-uh-kayt",
        "pos":  "Verb",
        "def":  "Use ambiguous language so as to conceal the truth or avoid committing oneself.",
        "ex":  "Not wishing to commit himself, he started to equivocate."
    },
    {
        "word":  "Erudite",
        "pron":  "AIR-yoo-dyt",
        "pos":  "Adjective",
        "def":  "Having or showing great knowledge or learning.",
        "ex":  "Ken could turn any conversation into an erudite discussion."
    },
    {
        "word":  "Esoteric",
        "pron":  "es-uh-TAIR-ik",
        "pos":  "Adjective",
        "def":  "Intended for or likely to be understood by only a small number of people with a specialized knowledge.",
        "ex":  "Esoteric philosophical debates."
    },
    {
        "word":  "Estimable",
        "pron":  "ES-tih-muh-bul",
        "pos":  "Adjective",
        "def":  "Worthy of great respect.",
        "ex":  "She was shown into that estimable woman\u0027s parlor."
    },
    {
        "word":  "Eulogy",
        "pron":  "YOO-luh-jee",
        "pos":  "Noun",
        "def":  "A speech or piece of writing that praises someone or something highly.",
        "ex":  "His good friend delivered a brief eulogy."
    },
    {
        "word":  "Euphemism",
        "pron":  "YOO-fuh-miz-um",
        "pos":  "Noun",
        "def":  "A mild or indirect word or expression substituted for one considered to be too harsh or blunt.",
        "ex":  "\u0027Downsizing\u0027 is a corporate euphemism for firing people."
    },
    {
        "word":  "Exacerbate",
        "pron":  "ig-ZAS-er-bayt",
        "pos":  "Verb",
        "def":  "Make (a problem, bad situation, or negative feeling) worse.",
        "ex":  "The exorbitant cost of land in urban areas only exacerbated the problem."
    },
    {
        "word":  "Exculpate",
        "pron":  "EK-skul-payt",
        "pos":  "Verb",
        "def":  "Show or declare that (someone) is not guilty of wrongdoing.",
        "ex":  "The article exculpated the mayor."
    },
    {
        "word":  "Exigent",
        "pron":  "EK-sih-junt",
        "pos":  "Adjective",
        "def":  "Pressing; demanding.",
        "ex":  "The exigent demands of the music took a toll on her voice."
    },
    {
        "word":  "Fawn",
        "pron":  "FAWN",
        "pos":  "Verb",
        "def":  "Give a servile display of exaggerated flattery or affection, typically in order to gain favor.",
        "ex":  "Congressmen fawn over the President."
    },
    {
        "word":  "Foment",
        "pron":  "foh-MENT",
        "pos":  "Verb",
        "def":  "Instigate or stir up (an undesirable or violent sentiment or course of action).",
        "ex":  "They accused him of fomenting political unrest."
    },
    {
        "word":  "Garrulous",
        "pron":  "GAIR-uh-lus",
        "pos":  "Adjective",
        "def":  "Excessively talkative, especially on trivial matters.",
        "ex":  "Polonius is portrayed as a foolish, garrulous old man."
    },
    {
        "word":  "Gregarious",
        "pron":  "gruh-GAIR-ee-us",
        "pos":  "Adjective",
        "def":  "Fond of company; sociable.",
        "ex":  "He was a popular and gregarious man."
    },
    {
        "word":  "Guile",
        "pron":  "GYL",
        "pos":  "Noun",
        "def":  "Sly or cunning intelligence.",
        "ex":  "He used all his guile and guts to free himself from the muddle he was in."
    },
    {
        "word":  "Gullible",
        "pron":  "GUL-uh-bul",
        "pos":  "Adjective",
        "def":  "Easily persuaded to believe something.",
        "ex":  "An attempt to persuade a gullible public to spend their money."
    },
    {
        "word":  "Homogeneous",
        "pron":  "hoh-muh-JEE-nee-us",
        "pos":  "Adjective",
        "def":  "Of the same kind; alike.",
        "ex":  "Timbermen prefer to deal with homogeneous woods."
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
