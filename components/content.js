// Family Companion content library
// Each article is keyed by entry point + age level.
// Written in warm, grounded prose — not spoken-word cadence.

window.AGE_LEVELS = [
  { id: 'nido', label: 'Nido', range: 'Birth – 18 mo' },
  { id: 'toddler', label: 'Toddler', range: '18 mo – 3 yr' },
  { id: 'primary', label: 'Primary', range: '3 – 6 yr' },
  { id: 'lower_el', label: 'Lower Elementary', range: '6 – 9 yr' },
  { id: 'upper_el', label: 'Upper Elementary', range: '9 – 12 yr' },
  { id: 'adolescent', label: 'Adolescent', range: '12 – 15 yr' },
  { id: 'high_school', label: 'High School', range: '15 – 18 yr' },
];

window.ENTRY_POINTS = [
  {
    id: 'learning',
    title: 'Is my child actually learning?',
    blurb: 'No grades, no worksheets, no gold stars. What IS happening?',
    tint: '#F4DDD6',
    tintDeep: '#C88476',
    accent: '#7A2E1E',
    beads: 1,
  },
  {
    id: 'track',
    title: 'Is my child on track compared to other kids?',
    blurb: 'The comparison spiral. Their cousin reads at 5. Is mine behind?',
    tint: '#DCE8D6',
    tintDeep: '#7FA97A',
    accent: '#2D5228',
    beads: 2,
  },
  {
    id: 'transition',
    title: 'Will my child be OK when they leave?',
    blurb: 'Public school, middle school, college. What happens next?',
    tint: '#F5DFE5',
    tintDeep: '#D59DAC',
    accent: '#8A3E54',
    beads: 3,
  },
  {
    id: 'classroom',
    title: "I don't understand what's happening in the classroom.",
    blurb: 'Normalization. Work cycle. Prepared environment. What do these mean?',
    tint: '#F4E6C4',
    tintDeep: '#D4B968',
    accent: '#7A5A12',
    beads: 4,
  },
  {
    id: 'home',
    title: 'Am I supporting my child the right way at home?',
    blurb: 'Materials? Screens? Homework? The "am I doing it wrong" feeling.',
    tint: '#D8E5EE',
    tintDeep: '#8DB3CB',
    accent: '#2E5068',
    beads: 5,
  },
];

window.EXTRA_SECTIONS = [
  { id: 'different', title: 'My child learns differently', blurb: 'Neurodivergence, suspected learning differences, how to talk to the school.' },
  { id: 'emotional', title: "Understanding your child's emotional world", blurb: 'Big feelings, friendships, conflict at school.' },
];

window.ARTICLES = [
  {
    id: 'nido-learning', ep: 'learning', age: 'nido',
    headline: 'Your baby studying their own hand for twenty minutes is doing real cognitive work. Here is what they are actually learning.',
    body: [
      "It is a Tuesday morning and your four-month-old is lying on a blanket on the floor, holding one hand in front of their face, turning it slowly, bringing it to their mouth, taking it out, turning it again. This has been going on for almost twenty minutes. You keep checking to see if they need you. They do not. You wonder, quietly, if anything is actually happening.",
      "Everything is happening. A baby in the first year of life is doing what Dr. Montessori called the work of self-construction, and in the Nido stage \u2014 birth to roughly eighteen months \u2014 that work is mostly hidden. The brain is building itself at a rate it will never match again. Ninety percent of its eventual structure is being laid down through exactly these small, self-directed experiments. The hand is not random. The hand is a face your baby is learning to recognize as their own.",
      "What looks like nothing from the outside is, from the inside, the construction of the most important relationships of a human life. The relationship between intention and movement. The relationship between one part of the body and another. The relationship between self and not-self. A baby who has the time and space to run these experiments uninterrupted is, at four months old, already building the foundations of agency, concentration, and trust.",
      "The Montessori approach at this age is almost entirely about what you do not do. You do not interrupt. You do not correct. You do not entertain. You offer a calm, safe, visually interesting space on the floor \u2014 a low mirror, a mobile they can look at, a few carefully chosen objects within reach \u2014 and you let your baby choose what to look at, for how long. This is called the prepared environment, and at the Nido level it is radically simple. A clean mat. A few real objects. An unhurried adult nearby, present but not performing.",
      "What you can watch for, instead of milestones: the length of time your baby can stay absorbed in one thing. The look on their face when they notice they can make their hand do what they meant. The slow turn of their head toward a sound that interests them. These are not performances. They are signs of a person quietly coming online.",
    ],
    tryThis: [
      'Set up one low, quiet corner for your baby with a movement mat, a securely mounted mirror, and one mobile at a time. Change the mobile only when they clearly stop engaging with it.',
      'The next time they are absorbed in looking at their own hand, or the ceiling fan, or the light on the wall, do not interrupt. Sit nearby and let them finish. Notice how long it lasts.',
      'Replace a plastic rattle with one real object that is safe to explore \u2014 a wooden spoon, a smooth stone too large to swallow, a small metal whisk. Let them study the weight, the temperature, the sound.',
    ],
    askGuide: [
      'What kind of materials is my baby choosing in the Nido environment right now, and what is that telling you about what they are ready for?',
      'Where is my child on the path of independent movement, and is there anything about our home setup I should adjust?',
    ],
    hearMore: { episode: 'Young Children Episode 3 \u2014 The First Year: Building the Foundation', duration: '19 min' },
    related: ['nido-home', 'nido-classroom', 'toddler-learning'],
  },
  {
    id: 'nido-track', ep: 'track', age: 'nido',
    headline: 'Your friend\u2019s baby is crawling. Yours is not. The internet has forty opinions. Here is what actually matters.',
    body: [
      "It is the baby\u2019s nine-month appointment. The pediatrician checks a box. Your neighbor\u2019s baby, three weeks younger, crawled last Tuesday. Yours is still doing a kind of commando-wriggle and shows no signs of getting up on all fours. You close the parenting app because it is not helping. Let\u2019s talk about what\u2019s actually going on.",
      "A baby in the first year is moving through what Dr. Montessori called the first plane of development, and during this plane the variation between healthy children is astonishing. Crawling, in particular, is one of the most variable milestones. Some babies crawl at six months. Some crawl at eleven. Some skip it entirely, go from sitting to pulling up to walking, and never crawl at all. All of these are typical. None of them are predictive of anything later in life that matters to you.",
      "What pediatricians actually watch for at this age is not a specific date on a chart. It is a direction of travel. Is your baby engaged. Are they trying things. Are they getting stronger and more coordinated over weeks and months, not days. Are they responding to you and to the world. A healthy baby who is slower than the chart is almost always just a slower baby, not a baby in trouble. A true developmental concern shows up as a pattern, not a moment.",
      "The Montessori insight here is that movement is not something to be rushed. It is something to be invited. A baby who is given real floor time every day \u2014 on a firm, safe surface, without a container, without a walker, without a well-meaning adult propping them upright \u2014 will develop strength, balance, and the internal drive to move themselves in the order their own body is ready for. Babies who spend their days in bouncers, carriers, and saucers often skip the early floor work and end up working that strength out later, sometimes uncomfortably.",
      "The comparison itself is worth interrogating. It is rarely really about the crawling. It is usually about an older, quieter fear \u2014 that something could be wrong, that you are not doing enough, that the next eighteen years are going to be like this. You can notice the fear, thank it for trying to protect you, and set it down. Your baby does not need you to win the milestone race. They need you steady, present, and unhurried. That is what actually builds a healthy nervous system.",
    ],
    tryThis: [
      'For one week, give your baby at least one thirty-minute block a day of uninterrupted floor time on a firm surface. Nothing in their hands you did not put there. No one narrating at them. Just watch.',
      'Stop reading the milestone app for a month. Write down, instead, three specific new things you noticed your baby do this week. One real observation beats one hundred averages.',
      'When someone compares babies, say: \u201cMine is taking their own sweet time.\u201d Practice it. It is the only sentence you need.',
    ],
    askGuide: [
      'Where would you place my baby on the Montessori sequence of movement right now, and what is the next invitation you would offer them?',
      'Is there anything in our home environment I could change to give my baby more freedom of movement?',
    ],
    hearMore: { episode: 'Young Children Episode 4 \u2014 The Role of Observation in the Toddler Years', duration: '19 min' },
    related: ['nido-learning', 'toddler-track'],
  },
  {
    id: 'nido-transition', ep: 'transition', age: 'nido',
    headline: 'The move from home to a Nido, or from a Nido into a toddler community, is the first transition of your child\u2019s life. Treat it that way.',
    body: [
      "You have been offered a spot in a Nido program and the start date is in three weeks, or your baby is coming up on eighteen months and the Nido is about to move them into the toddler community. Either way, something real is ending and something new is beginning, and the part of you that is honest knows this matters. The other part of you, the one that has barely slept in a year, wants to believe that because they are small, the transition will not affect them. It does.",
      "Even the youngest baby is capable of attachment, preference, and grief. A Nido-aged child has spent months or a year building a relationship with a specific caregiver, in a specific space, with specific smells and sounds and routines. Moving them out of it is not neutral to them. This is not a reason not to do it. It is a reason to do it on purpose, slowly, and with respect.",
      "A good transition in the Nido years looks mostly like overlap. Before the first day, you visit together several times. Your baby sees the new room with your body right there. They are introduced to the new guide while you are present and the old guide, if there is one, is present too. On the first days, you stay longer than you think is necessary. You leave for twenty minutes, then an hour. You do not disappear without a goodbye, and you do not sneak out while they are distracted. You say, clearly and warmly, \u201cI am going, and I will come back,\u201d even to a baby who cannot yet answer. They understand more than you think.",
      "The hardest part is often not the child. It is you. The first day you hand your baby over to another adult for several hours is a grief of its own, and nobody warns you. You can cry in the car. You can call your person. You can sit with the strange feeling that your baby\u2019s world has just gotten bigger than you. This is also development. Yours, this time.",
      "In the first weeks, watch for patterns, not moments. A rough first day is not information. A rough third week is. A baby who sleeps less, eats less, or seems more fragile at home for a short stretch is usually integrating, not falling apart. If something feels truly off, say so to the guide. You know your child. Your noticing is useful. Say it early, say it specifically, and expect to be taken seriously.",
    ],
    tryThis: [
      'Before the first day, take your baby to the new space at least three times during the times they will normally be there. Let them sit on your lap. Let them be held by the new adult while you stay.',
      'Choose one small object that travels with your baby between home and the Nido \u2014 a soft muslin cloth, a simple wooden toy. Consistency in one thing helps a nervous system settle.',
      'Tell yourself, out loud if you need to, the date and time you will be back to pick them up. It helps you trust the plan. Your calm is the thing your baby reads.',
    ],
    askGuide: [
      'What does the first week of settling in usually look like for a baby at this age, and what signs would tell you we are adjusting well?',
      'Is there anything about our home routines I should share with you, so that your day and ours can rhyme as much as possible?',
    ],
    hearMore: { episode: 'Young Children Episode 6 \u2014 Moving Up to the Primary Classroom: What to Expect', duration: '22 min' },
    related: ['nido-classroom', 'toddler-classroom'],
  },
  {
    id: 'nido-classroom', ep: 'classroom', age: 'nido',
    headline: 'The Nido room looks almost empty on purpose. The quiet is the curriculum.',
    body: [
      "You walk into a Montessori Nido for the first time and your nervous system relaxes before your brain catches up. The room is small. The lighting is soft. There is a large, low mirror along one wall, with a padded bar mounted horizontally in front of it. A few babies are on floor mats, each one quietly engaged with something different. Two are in the arms of adults who are moving slowly and speaking softly. You might, for a moment, wonder if this is enough.",
      "It is. Dr. Montessori believed that the infant is building themselves from what the environment offers, and in the Nido the environment is deliberately spare. A handful of carefully chosen objects. Real textures and materials. A few developmentally appropriate mobiles. Low, stable furniture that supports pulling up when the baby is ready. The emptiness is not a lack. It is respect. The room gives a baby room to choose.",
      "The adults in a Nido are trained to do less than you might expect. They observe constantly. They narrate only what is happening. They do not rush to entertain a quiet baby, because a quiet baby may be deep in their own experiment. When a baby does need care \u2014 a diaper, a feeding, a comfort \u2014 the guide slows down and explains what is happening, even though the baby cannot yet answer. This is not performative. Babies absorb tone long before they absorb words, and the respect they are shown in these small moments is what they are learning.",
      "A few words to know. The movement area is the part of the room with the mirror and bar, where babies are invited to practice rolling, pushing up, crawling, pulling to stand. The feeding area is a separate, predictable spot where meals happen, so that eating stays calm. The sleep area is separate again. A young baby thrives on the sense that activities have their own places, because the world is otherwise very new.",
      "When you pick your baby up from a Nido and they seem different than they do at home \u2014 more focused, or more independent, or differently tired \u2014 this is not a trick of the light. A well-prepared environment and a trained adult can elicit parts of your baby you have not yet seen. This is part of why the Nido exists. Not to teach your baby. To show them, and you, what they can already do.",
    ],
    tryThis: [
      'Ask for a parent observation during a normal day. Sit still, do not talk, do not try to catch your baby\u2019s eye. Watch the whole room for twenty minutes. You will be changed.',
      'At home, try narrating instead of entertaining. \u201cI am going to pick you up now. I am going to carry you to the changing table.\u201d Watch how your baby quiets.',
      'Replace one loud, flashing toy with something real \u2014 a wooden rattle, a metal bowl, a smooth stone too large to swallow. Notice the difference in how long they engage.',
    ],
    askGuide: [
      'What does my baby gravitate toward in the Nido environment, and what does that say about where they are developmentally?',
      'How do you handle transitions within the day \u2014 from movement to feeding to sleep \u2014 so that I can try to do the same at home?',
    ],
    hearMore: { episode: 'Young Children Episode 3 \u2014 The First Year: Building the Foundation', duration: '19 min' },
    related: ['nido-learning', 'nido-home'],
  },
  {
    id: 'nido-home', ep: 'home', age: 'nido',
    headline: 'You do not need a beautiful wooden nursery. You need a low mat, a quiet corner, and the willingness to not jump in.',
    body: [
      "You are standing in the nursery at eleven at night, looking at a crib, a glider, a changing table, and a pile of hand-me-down toys, and you are wondering whether you should have bought the fifteen-hundred-dollar floor bed setup you saw on Instagram. The baby, who does not care about any of this, is asleep on your shoulder. Let\u2019s put the phone down and talk about what actually matters.",
      "The Montessori approach at the Nido stage is not about buying a specific product. It is about a specific quality of attention. A baby in the first eighteen months is building a sense of the world as a place that is safe, responsive, and slightly larger than them. You do not build that with objects. You build it with the hundred small interactions that happen every day \u2014 the tone of your voice when you pick them up, the rhythm of feeding and sleeping, the amount of time you give them before stepping in.",
      "There are a few things that help, and they are cheaper than you think. A firm, clean movement mat on the floor where your baby can safely roll, push up, and eventually crawl \u2014 no container, no bouncer, no swing. A low, securely mounted mirror they can see themselves in, because watching their own face make faces is some of the most useful work they will do this year. A few real, simple objects \u2014 a wooden spoon, a metal whisk, a smooth stone too large to swallow \u2014 that you rotate rather than pile. Clothes they can move freely in. Nothing more.",
      "The harder, more important piece is the piece you cannot buy. It is the willingness to be present without performing. When your baby is on their mat, absorbed in studying their own hand, you do not need to shake a rattle at them or play music or narrate nonstop. You can sit nearby with your tea. You can go make dinner in the next room with them in sight. You can trust that a baby who is quiet is not a baby who is bored. They are a baby who is working.",
      "And screens at this age. The honest answer is as close to zero as you can manage, and this includes the television that is on in the background, and the phone you are holding while feeding them. Babies under eighteen months do not learn from screens. What they do absorb is the sense that the adult in the room is elsewhere. You do not have to be perfect. Just notice it, put the phone down more often, and trust that your face \u2014 not Cocomelon \u2014 is the richest thing in their world.",
    ],
    tryThis: [
      'Tonight, set up a simple movement space. A firm rug or mat, one mirror, one object. Leave it ready so tomorrow you can put them down without preparing anything.',
      'Pick one feeding or changing each day and narrate it slowly, in short sentences, with long pauses. \u201cI am lifting your leg. I am putting on a clean diaper.\u201d Notice your own pace change.',
      'For one week, do not hand your baby a phone or turn on a screen in their presence. Notice what gets harder. Notice what gets easier.',
    ],
    askGuide: [
      'What practical life elements of the Nido could I reasonably mirror at home, and which ones should I just leave in the classroom?',
      'Are there any home habits that might be interfering with what my baby is working on at school, that I could adjust?',
    ],
    hearMore: { episode: 'Young Children Episode 3 \u2014 The First Year: Building the Foundation', duration: '19 min' },
    related: ['nido-learning', 'toddler-home'],
  },
  {
    id: 'primary-learning', ep: 'learning', age: 'primary',
    headline: 'Your 4-year-old pouring beans is building the neural pathways for writing. Here\u2019s how.',
    body: [
      "When you visit a Primary classroom, the first thing you\u2019ll probably notice is how quiet it is. A child is transferring dried beans from one small bowl to another with a spoon. Another is polishing a piece of silver. A third is washing a tiny table. Your brain, trained by every movie about school you\u2019ve ever seen, will ask: where is the learning?",
      "The learning is in the beans. In Montessori, the hand is the instrument of the mind. Before a child can hold a pencil steady enough to write, they need the pincer grip, the cross-lateral coordination, and the focus to stay with one task for fifteen uninterrupted minutes. The spoon is building all three. The bean is a rehearsal for the letter.",
      "This is why Dr. Montessori called these materials \u201cthe work.\u201d Your child is not playing. They are building themselves. Each activity isolates a specific skill \u2014 weight, texture, sequence, one-to-one correspondence \u2014 and repeats it until the skill is absorbed. Then the child, on their own timeline, abandons that material and moves to a harder one. No adult needs to push.",
      "What you won\u2019t see: worksheets, tests, grades, or homework. Not because Montessori is soft, but because those things interrupt the long arc of concentration that produces real learning. A child who has spent forty minutes with the pink tower has done the equivalent of a full math lesson. Their brain knows what ten looks like, and it knows it in their body.",
      "So when your child comes home and says they \u201cdidn\u2019t do anything\u201d today, trust what you can\u2019t see. The quiet child at the tiny table is learning more than the loud one doing the flashcard drill.",
    ],
    tryThis: [
      'Put a small pitcher of water and two cups on a low shelf your child can reach. Don\u2019t demonstrate. Just let them find it.',
      'When they ask for help with something they\u2019re almost capable of, wait ten seconds before stepping in. Count silently. You\u2019ll be surprised how often they solve it.',
      'Narrate real work: "I\u2019m chopping onions for dinner." Invite them to stand beside you with a butter knife and a mushroom. The kitchen is a classroom.',
    ],
    askGuide: [
      'What material is my child choosing most often right now, and what is it preparing them for?',
      'Where in the Montessori sequence are they, and what comes next?',
    ],
    hearMore: { episode: 'Primary Episode 7 — Why Materials Matter', duration: '18 min' },
    related: ['primary-track', 'primary-classroom', 'primary-home'],
  },
  {
    id: 'primary-track', ep: 'track', age: 'primary',
    headline: 'Your friend\u2019s kid does spelling tests. Yours pours beans. Both are fine. One is comparable, the other is building foundation.',
    body: [
      "It is 10:17 at night. A friend posts a photo of their kindergartener holding a perfect spelling test. Your child, same age, has never taken a spelling test in their life. They can, however, tell you the names of six different grains and set a table for four. The doubt hits anyway. It is not irrational. Let\u2019s talk about it.",
      "Montessori doesn\u2019t teach on a grade-by-grade clock. It teaches in three-year cycles organized around what the brain is ready to do. In the Primary years (3 to 6), children are in what Dr. Montessori called the absorbent mind \u2014 a state where they learn by osmosis, not drill. Reading emerges here, but often late in the cycle. Many Montessori children don\u2019t read fluently until five and a half. Then they read everything.",
      "The third year of Primary is the key. This is when the groundwork laid in years one and two bursts into visible ability. Children who looked \u201cbehind\u201d on paper suddenly read chapter books, do four-digit addition, write their own stories. Not because they caught up. Because the foundation was finally thick enough to hold the skyscraper.",
      "A conventional kindergartener scoring 100 on a spelling test is taking a snapshot. A Montessori four-year-old working with the sandpaper letters is pouring a foundation. Snapshots are comparable. Foundations aren\u2019t. That\u2019s the whole gap.",
      "If you want a metric, watch for these: Can they concentrate for thirty minutes on one task? Can they resolve a conflict with a peer without an adult? Can they dress themselves, pack their own bag, put things back where they found them? Those are the Primary milestones. Reading comes, and it comes on time.",
    ],
    tryThis: [
      'Next time the comparison hits, name it out loud to yourself: "This is a snapshot vs. a foundation problem." It helps.',
      'Watch your child for ten minutes tonight without interrupting. Notice what they stay with. That\u2019s the foundation being poured.',
      'If you must compare, compare to your child six months ago. That\u2019s the only fair measurement.',
    ],
    askGuide: [
      'What does my child\u2019s trajectory look like \u2014 not compared to peers, but compared to where they were three months ago?',
      'What skills are emerging right now that I might not recognize as "academic"?',
    ],
    hearMore: { episode: 'Primary Episode 8 — The Importance of the 3rd Year', duration: '22 min' },
    related: ['primary-learning', 'primary-classroom'],
  },
  {
    id: 'primary-classroom', ep: 'classroom', age: 'primary',
    headline: 'Your child\u2019s teacher is standing very still, watching. That is the job.',
    body: [
      "The first time parents observe in a Montessori classroom, many of them are confused. The guide \u2014 what Montessori calls the teacher \u2014 doesn\u2019t seem to be doing much. They\u2019re sitting on a low stool. Watching. Occasionally they rise, kneel beside a child, show them something with their hands, and then sit down again. Meanwhile, twenty-five children are all doing different things.",
      "This is not absence. This is the work. A Montessori guide is a trained observer. Their job is to see where each child is, what they\u2019re ready for, and at the precise right moment, invite them to the next lesson. Too early, the lesson doesn\u2019t land. Too late, the window closes. Reading the child is the entire skill.",
      "The classroom itself is doing most of the teaching. Every material on the shelf is calibrated to isolate one concept, and the materials are arranged in a sequence a child can navigate themselves. The guide doesn\u2019t need to lecture because the pink tower teaches size. The sandpaper letters teach phonemes. The golden beads teach place value. The environment is, as Montessori said, the third teacher.",
      "A few words worth knowing. Normalization: the state of calm, focused engagement a classroom settles into when children are given real freedom. Work cycle: the three-hour uninterrupted block children need to find their concentration and go deep. Grace and courtesy: the explicit teaching of how to greet, interrupt politely, wait, and apologize. These aren\u2019t soft skills. They\u2019re the operating system.",
      "When you pick your child up and ask \u201cHow was school?\u201d and they say \u201cfine,\u201d try instead: \u201cTell me about one thing you worked with today.\u201d They\u2019ll light up. They were working. They want to tell you about it.",
    ],
    tryThis: [
      'Instead of "How was school?" try "What did you work with today?" or "Did you give anyone a lesson?"',
      'Ask your child to show you grace and courtesy. They love performing it at home.',
      'If your school offers parent observations, sign up. Twenty quiet minutes in the classroom will explain more than any book.',
    ],
    askGuide: [
      'What lessons has my child received recently, and which ones are they choosing to repeat?',
      'How is my child moving through the work cycle \u2014 are they settling into concentration, or still searching?',
    ],
    hearMore: { episode: 'Primary Episode 5 — Observing Your Child in the Classroom', duration: '24 min' },
    related: ['primary-learning', 'primary-track'],
  },
  {
    id: 'primary-home', ep: 'home', age: 'primary',
    headline: 'You do not have to turn your living room into a classroom. Actually, please don\u2019t.',
    body: [
      "There is a specific kind of guilt that attaches to Montessori parents. You see the beautiful wooden shelves on Instagram, the perfectly arranged trays of seasonal activities, the neutral-toned playroom with not a piece of plastic in sight. And you think: I am failing. My child has a bin full of loud toys and I gave them an iPad at the restaurant on Saturday.",
      "Breathe. Your job is not to recreate the classroom. Your job is to be their home, which is a different and equally important thing. The classroom is for deep, focused work. Home is for connection, rest, mess, and the kind of unstructured time children actually need to metabolize everything they did at school.",
      "What helps at home is smaller than you think. A low hook for their own coat. A stool at the sink so they can wash their own cup. A place for their shoes that they can reach. Giving them a real job in the family \u2014 feeding the dog, setting the table, folding their own laundry poorly \u2014 is worth more than any imported wooden toy.",
      "What also helps: not rushing in. If they spill, hand them a towel instead of a towel and a cleanup. If they\u2019re frustrated with a puzzle, wait. If they\u2019re bored, let them be bored. Boredom is the doorway to the thing they invent next.",
      "And screens? The honest answer is, less is better, and zero isn\u2019t realistic, and you haven\u2019t ruined anything. A family movie on Friday night is not the same as two hours of YouTube shorts on a Tuesday. You already know the difference. Trust yourself.",
    ],
    tryThis: [
      'Pick one everyday task (setting the table, watering plants) and make it fully their job this week. Resist doing it over.',
      'Lower one hook or one shelf to their height. Watch how differently they move through the space.',
      'The next time they\u2019re bored, say "that sounds interesting" and walk away. See what happens.',
    ],
    askGuide: [
      'What practical life work is my child doing in class that I could mirror at home?',
      'Is there anything they\u2019re working on at school that I should specifically NOT try to teach at home?',
    ],
    hearMore: { episode: 'Primary Episode 4 — Practical Life and Sensorial at Home', duration: '19 min' },
    related: ['primary-learning', 'primary-classroom'],
  },
  {
    id: 'toddler-home', ep: 'home', age: 'toddler',
    headline: 'The tantrum in the cereal aisle is not a behavior problem. It is a development task you are both doing together.',
    body: [
      "Your toddler is standing in the cereal aisle, howling, because you said no to the box with the cartoon tiger. A stranger is staring. You want to disappear. Before you do anything else, remember this: what is happening is not a failure. It is a two-year-old\u2019s brain doing exactly what it is supposed to be doing at this stage.",
      "Toddlers are in the middle of their first great act of separation. They have just discovered they are a person \u2014 distinct from you, with their own opinions \u2014 and they are testing what that means by saying no to absolutely everything. The tantrum is not manipulation. They do not yet have the cognitive tools to regulate a big feeling. They have the feeling and no exit.",
      "Your job is not to stop the feeling. It is to be the calm next to it. Get down to their height. Name what\u2019s happening: \u201cYou really wanted that cereal. I can see you\u2019re so upset.\u201d You do not have to give in, and you do not have to fix it. You just have to not abandon them inside it.",
      "At home, the smaller the world, the easier their day. A few good toys on a low shelf, not a bin of eighty. Predictable routines \u2014 snack, then walk, then nap \u2014 so their brain has a map. Clothes they can pull on themselves. A stool at the sink. A spoon they can lift. Independence lowers tantrums, because tantrums often come from the specific humiliation of wanting to do something and not being allowed or able to.",
      "And when the tantrum ends, it ends. Don\u2019t lecture. Don\u2019t relitigate. Offer a hug if they want one. They have already done hard work.",
    ],
    tryThis: [
      'Rotate toys. Put three-quarters of them in a closet. Every two weeks, swap. The "new" ones will feel new.',
      'Let them pour their own milk. Use a tiny pitcher. It will spill. That is part of the lesson.',
      'Before the next tantrum, decide the two words you\u2019ll say: something like "I\u2019m here." Practice them so they come out automatically.',
    ],
    askGuide: [
      'What kind of practical life work is my child drawn to at school, and how can I mirror it at home?',
      'How does the school handle big feelings, so I can use the same language?',
    ],
    hearMore: { episode: 'Young Children Episode 2 — Practical Life at Home', duration: '21 min' },
    related: ['toddler-learning', 'primary-home'],
  },
  {
    id: 'toddler-learning', ep: 'learning', age: 'toddler',
    headline: 'Your toddler dragging the same chair across the room for the tenth time is doing the most important learning of their life.',
    body: [
      "It is 4:47 in the afternoon. Your toddler has dragged the kitchen chair from one side of the room to the other, then back, then back again. They are pink in the cheeks and breathing through their mouth and have ignored every other toy in the house. You are tired. You are also wondering, quietly, whether anything resembling learning is happening here.",
      "It is. A toddler between eighteen months and three years lives inside what Dr. Montessori called the period of maximum effort. They are physically driven to test their body against the world \u2014 to lift the heavy thing, to carry the awkward thing, to repeat the same motion until their muscles, balance, and judgment can be trusted. The chair is not random. Their brain has chosen this work.",
      "Repetition is the curriculum. A toddler will fill and empty the same basket forty times. They will open and close a cabinet door until you want to scream. From the outside it looks like nothing. From the inside, neurons are pruning themselves into adult-grade pathways for sequencing, prediction, and cause and effect. Each round of the loop is one more layer of myelin on a wire that will, eventually, let them tie a shoe.",
      "The other half of the curriculum is what Montessori called practical life. Real tasks with real purpose. Pouring water from a small pitcher into a cup. Carrying a tray of glass dishes to the sink. Wiping up their own spill with a real cloth. These are not chores dressed up as games. They are the work of becoming a person, and a toddler is desperate to be invited into them.",
      "What you can watch for, in place of the milestones a baby book would list: longer windows of focus on one thing. The willingness to try, fail, and try again without your prompting. A glance back at you for confirmation, then a return to the work. That is concentration arriving. That is the learning. The chair, the tenth time, is the lesson.",
    ],
    tryThis: [
      'Set up one practical-life station they own. A small pitcher, a small bowl, a cloth. Refresh the water once a day and let them use it however they like.',
      'Stop saying \u201cgood job.\u201d Replace it with description: \u201cYou carried that all the way across the room.\u201d Children stop performing for praise and start working for the work.',
      'Pick one repetitive thing they do and stop redirecting it. Sit nearby with your tea and just let them repeat for as long as they need.',
    ],
    askGuide: [
      'What kind of repetition are you seeing in my child at school, and is there a way I can support it at home without breaking the cycle?',
      'When my toddler resists transitions, what language are you using in the classroom that I could echo at pickup?',
    ],
    hearMore: { episode: 'Young Children Episode 1 \u2014 Building Independence: The Toddler\u2019s First Steps', duration: '20 min' },
    related: ['toddler-home', 'primary-learning'],
  },
  {
    id: 'toddler-track', ep: 'track', age: 'toddler',
    headline: 'The chart on the pediatrician\u2019s wall measures averages. Your toddler is not an average. Here is what to actually watch.',
    body: [
      "You are sitting in the pediatrician\u2019s office and there is a chart on the wall with a curve drawn on it. Your child is on or near the curve, but the chart does not say whether they are happy. Across the waiting room a same-aged toddler is reciting the names of dinosaurs while yours is licking their shoe. The doubt is so reasonable. Here is the thing the chart cannot show you.",
      "A toddler is not a small adult on a delayed clock. They are a being moving through what Dr. Montessori called the first plane of development \u2014 birth to roughly six \u2014 during which they construct themselves more than they perform. The work is interior. The visible markers, the words and the pointing and the kicking of a ball, are byproducts of that interior construction. They emerge on individual timelines that can vary by twelve months and still sit comfortably inside healthy.",
      "Take language. Between eighteen months and three years, the range of typical vocabulary growth is enormous. One child is speaking in three-word sentences at twenty-two months. Another is silent until twenty-eight, then opens their mouth and speaks in paragraphs. Both are absorbing. Both are sorting grammar. The early talker is not smarter. The late talker is not behind. The brain has its own schedule for moving from intake to output, and the adult who pushes against it tends to slow it down.",
      "What you can watch for, instead of the chart: Are they curious. Do they bring you objects to name. Do they settle into one task for a few minutes at a time, and is that few-minute window slowly getting longer. Do they look back at you for reassurance and then move on. Can they tolerate small frustrations without melting down every time. Those are Montessori milestones. They are also human ones.",
      "The pediatrician\u2019s chart is a population average. Your child is one person. If something is genuinely off, the people who see them every day \u2014 you, their guide, their pediatrician taken together \u2014 will see it long before the chart does. In the meantime, comparison is mostly a way to manage your own uncertainty. You can put it down.",
    ],
    tryThis: [
      'For one week, do not Google a milestone. Notice how it feels in your body when the urge arises and choose not to act on it.',
      'Keep a small notebook where you write one specific thing your child did this week. Not a milestone, a moment. Read it back at the end of the month.',
      'When another parent compares, try a flat, friendly response: \u201cMine is taking their time on that one.\u201d Practice it before you need it.',
    ],
    askGuide: [
      'Is there anything in my child\u2019s development you would want me to watch more closely, or are we tracking together?',
      'How do you handle wide developmental ranges in a mixed-age classroom, and what does my child gain from being around older and younger kids?',
    ],
    hearMore: { episode: 'Young Children Episode 4 \u2014 The Role of Observation in the Toddler Years', duration: '19 min' },
    related: ['toddler-learning', 'toddler-home'],
  },
  {
    id: 'toddler-classroom', ep: 'classroom', age: 'toddler',
    headline: 'The toddler classroom looks like a tiny apartment because that is what a toddler needs. Not a school. A home that fits.',
    body: [
      "The first time you walk into a toddler Montessori classroom, your body might react before your brain does. The room is small. The shelves are low. There is a real broom, child-size, leaning in a corner. There are glass cups on the table. A two-year-old is washing their hands at a small sink with a real bar of soap. The whole space looks less like a classroom and more like a tiny apartment that has been arranged with unusual care.",
      "That is the design. Dr. Montessori called this the prepared environment, and at the toddler level the principle is simple: a child between eighteen months and three is building the sense that they are a competent person who lives in a real world. They are not preparing for life. They are inside it. So the environment gives them real tools, real consequences, and real responsibility, scaled to their hands. The plastic kitchen is replaced with the real one. The pretend pour is replaced with the actual pitcher of water that will spill if they tip it.",
      "The guide moves slowly. They almost never narrate. When they show a child how to do something \u2014 wipe a table, carry a chair, fasten a bib \u2014 they do it in slow, exact motions, with no talking, so the child can absorb the gesture itself. This is called a presentation. After the guide stands up, the child either tries it or doesn\u2019t. They are not corrected. They are observed.",
      "A few words to know. The prepared environment, again, is the room itself, designed for the child rather than for the adult. Freedom within limits is the condition that allows real choice \u2014 the child can pick what to work on, but only from materials they have been shown how to use, and only one at a time. The mixed-age community puts toddlers of different stages together, so that an older two-year-old can model for a younger one and learn from being looked up to.",
      "When you pick your toddler up and they cannot tell you a single thing about their day, this is normal. They do not yet have the language to explain. What you can trust is what you see in their body. Are they tired in a settled, satisfied way, or scattered and wired. The settled tired is the sign of a good day. The good day is the curriculum.",
    ],
    tryThis: [
      'Visit the school during the work cycle if they allow it. Twenty minutes of quiet observation will teach you more than any orientation.',
      'Replace one plastic version of a thing at home with the small real version. A small glass cup, a real spoon, a tiny pitcher.',
      'Model one task \u2014 washing a window, folding a cloth \u2014 in slow, silent movements. Don\u2019t ask them to copy. They will, eventually, on their own.',
    ],
    askGuide: [
      'What does my child gravitate toward in the prepared environment, and what does that tell you about where they are developmentally?',
      'How do you handle separation in the morning, and what could I be doing at drop-off that would help rather than harm?',
    ],
    hearMore: { episode: 'Young Children Episode 6 \u2014 Moving Up to the Primary Classroom: What to Expect', duration: '22 min' },
    related: ['toddler-learning', 'primary-classroom'],
  },
  {
    id: 'primary-transition', ep: 'transition', age: 'primary',
    headline: 'The transition from a Primary classroom to a conventional kindergarten is the hardest one parents underestimate. Plan for it.',
    body: [
      "You are looking at the calendar and the truth is, your child is finishing their third year of Primary and you are not sending them to a Montessori first grade. Maybe the school stops at six. Maybe the elementary tuition isn\u2019t possible. Maybe you moved. Whatever the reason, the question underneath is the same: after three years of beans and silver and pink towers, will my child survive a desk.",
      "The honest answer is that they will survive, and that they will bring with them more than you may realize. A child who has completed a full Primary cycle in a strong classroom has built three things you cannot fake: long, sustained concentration, the ability to choose their own work and stay with it, and a clear internal sense that learning is interesting. None of those are taken away by a worksheet. They travel. Often Montessori children stand out in their new classrooms not because they are smarter, but because they are calm, focused, and unafraid of independent work.",
      "What will be harder, and you should not pretend otherwise, is the pace and the texture. Conventional first grade will move the whole class together through the same lesson at the same time. There will be sitting at a desk for blocks longer than your child is used to. There will be assignments handed to them rather than chosen by them. There will be praise and stickers and grades, and your child, who has spent three years learning for the work itself, may find this confusing or, worse, may begin to learn for the sticker. That is the real risk.",
      "You can prepare them. Visit the new school more than once. Walk the halls. Talk to a future teacher. Tell your child the truth about what will be different \u2014 there will be a desk, there will be a bell, you will not get to choose your work the same way \u2014 and let them ask their questions. Do not disparage the new school. Children read tone, and you do not want them to enter as a critic. You want them to enter as themselves.",
      "You can also prepare yourself. The first month may be rough. Your child may come home tired in a different way, less satisfied, sometimes irritable. This is the body adjusting. Hold the long view. Protect their afternoons and weekends with real work, real play, real outside, real boredom. The Montessori foundation is not erased by a year of conventional school. It is, in the end, the thing that lets them adapt.",
    ],
    tryThis: [
      'Schedule two visits to the new school before the year starts. One during a school day to feel the rhythm, one when it\u2019s empty so your child can walk it without a crowd.',
      'Establish a decompression hour at home after school. No questions, no homework, no screens. A snack and unstructured time. They will tell you about their day when they are ready, not when you ask.',
      'Find one place after school where your child still has choice and uninterrupted time \u2014 an art table, a garden bed, a corner of their room. Protect it.',
    ],
    askGuide: [
      'Based on what you know about my child, what specific things should I watch for in the transition, and what would tell us they are struggling vs. just adjusting?',
      'Are there any materials or work I should make sure they finish before they leave Primary, so the cycle feels complete to them?',
    ],
    hearMore: { episode: 'Primary Episode 9 \u2014 Transitioning from Primary to Lower Elementary', duration: '23 min' },
    related: ['primary-learning', 'primary-track', 'primary-home'],
  },
  {
    id: 'lower_el-learning', ep: 'learning', age: 'lower_el',
    headline: 'A six-to-nine year old asks why a hundred times a day. Your job is to point them toward where the answer lives.',
    body: [
      "It is Saturday morning. Your seven-year-old has just asked, between bites of cereal, why people in some countries drive on the left. You answer. They ask why the king of England in the 1700s decided that. You don\u2019t know. They ask why anyone thought England should have a king. They ask whether a king is the same as a president. Twenty minutes later, neither of you has finished breakfast and you are explaining the French Revolution badly. This is what learning looks like in lower elementary.",
      "A child between six and nine has crossed into what Dr. Montessori called the second plane of development. The body has stabilized. The mind, freed up, has turned outward. They want to understand how things came to be the way they are. They are no longer satisfied with the name of a thing. They want the story behind it. This is the reasoning mind, and once it is awake, it does not go back to sleep.",
      "Montessori built a curriculum specifically for this hungry mind, called the cosmic curriculum. It is a sequence of five great lessons \u2014 the universe, the coming of life, the coming of humans, the story of writing, the story of numbers \u2014 told as stories, not facts. From those grand stories, the child generates their own questions and follows them down. A child fascinated by the coming of life might spend three weeks on the Cretaceous. Another might be pulled into how letters were invented. The work cycle in lower elementary is wider than in Primary, often involving research, writing, drawing, and group projects that span days.",
      "This is also when the classroom starts going out. A child who wants to know how a bridge is built does not study a worksheet. They go to the bridge. They take a notebook. They interview the engineer if they can. The going out is part of the curriculum, not an extra. So is the group work, because at this age children also wake up to ethics and friendship and want to do things together. You will see them collaborating, arguing, negotiating, then sitting together with their heads bent over the same book.",
      "Because this looks so unlike a row of desks, parents sometimes worry that nothing structured is happening. Look closer. The child is learning multiplication by working through the bead frame in long, patient sessions. They are learning to write by composing a four-page report on volcanoes. They are learning to read by reading. The structure is there. It just lives inside the child now, and the adults, you included, have moved into a different role. You are no longer the teacher. You are the reference desk.",
    ],
    tryThis: [
      'When they ask a question you can\u2019t answer, say \u201clet\u2019s find out together\u201d and actually find out. Look it up in front of them. Model the search.',
      'Take them to one real place this month that connects to something they\u2019re curious about. A working farm, a courthouse, a printing press, a tide pool. Bring a notebook.',
      'Read a chapter book aloud at night, even though they can read on their own. The shared imagination is part of the curriculum.',
    ],
    askGuide: [
      'Which of the great lessons has my child connected with most deeply, and what threads are they following from it?',
      'What kind of group work is my child gravitating toward, and what does it tell you about who they are becoming socially?',
    ],
    hearMore: { episode: 'Lower Elementary Episode 1 \u2014 The Plane of Development: The 6-9 Year Old', duration: '22 min' },
    related: ['primary-learning', 'lower_el-classroom'],
  },
  {
    id: 'lower_el-track', ep: 'track', age: 'lower_el',
    headline: 'Their cousin reads at a fifth-grade level. Yours is writing a hand-drawn book about beetles. These are not the same measurement.',
    body: [
      "It is a Sunday phone call with your sister-in-law, and somehow the conversation lands on reading. Her fifth grader is, she casually mentions, reading at an eighth-grade level. Your nine-year-old is reading at a second-grade level and is currently three weeks into a hand-drawn book about beetles, with the spelling of \u201cthorax\u201d still in flux. You hang up and the spiral starts. Let\u2019s look at what was actually compared.",
      "A reading level is a specific, narrow measurement of decoding speed and comprehension on a standardized passage. It is useful in the way a thermometer is useful. It tells you one thing about one moment. It tells you nothing about whether your child reads for pleasure, whether they finish books, whether they read deeply enough to come back with a question, or whether they can sit with a hard text until it gives them something. A child who scores high on the test can still hate reading. A child who scores middle can be a real reader. The test does not catch that.",
      "What is worth watching at this age, much more than a level, is depth. Does your child stay with one topic long enough to learn something nobody told them. Do they revise their own work without being made to. Can they organize a project that takes more than one day. Do they enjoy, even a little, the part where the work gets hard. Those are the actual lower elementary muscles, and a Montessori curriculum trains them every single day. They do not show up on a chart.",
      "Many Montessori lower elementary children look, on a standardized test, slightly behind their conventional peers in second grade. By fourth grade, the gap usually closes. By sixth grade, in study after study, the Montessori child tends to be ahead, particularly in writing and complex problem-solving. The reason is that the foundation in the first plane keeps paying off. They have the concentration to read a long book. They have the autonomy to revise a draft. They have the interest. The conventional child who hit decoding early can still lose the love of it. The Montessori child rarely does.",
      "The other thing worth saying out loud, and you already know this: the comparison hurts you more than it hurts your child. Your nine-year-old is not lying awake worrying about their cousin. They are thinking about beetles. The doubt is yours to manage, and the most generous thing you can do for both of you is to put it down and ask, instead, to see the next chapter.",
    ],
    tryThis: [
      'Ask your child to teach you something they know well. Spend twenty minutes letting them be the expert. You\u2019ll see their actual learning, not a level.',
      'The next time the comparison comes up in conversation, change the subject specifically and on purpose. Practice a sentence: \u201cWe\u2019re not really tracking by levels. They\u2019re really into beetles right now.\u201d',
      'Buy them one beautiful, slightly-too-hard book about something they love. Leave it on their bed. Don\u2019t mention it.',
    ],
    askGuide: [
      'Where is my child going deep, and where are they going wide right now? I want to know what they are actually doing, not where they are on a scale.',
      'Are there any skills I should know are emerging or stalling, and what would you want me to do at home about them?',
    ],
    hearMore: { episode: 'Lower Elementary Episode 6 \u2014 Mathematics in Montessori: A Hands-On Approach', duration: '21 min' },
    related: ['lower_el-learning', 'primary-track'],
  },
  {
    id: 'lower_el-home', ep: 'home', age: 'lower_el',
    headline: 'Stop helping with the homework that should not exist. Build a household instead.',
    body: [
      "It is Tuesday at 5:32, you are trying to make dinner, and your eight-year-old is at the kitchen table refusing to do twenty minutes of math homework that the school sent home. You feel the rise of frustration. You hear yourself starting to bargain. Let us pause this scene and ask what is actually being built here.",
      "Most homework given to children in this age range, when it is given, does not produce learning. The data on this is clear and has been for a long time. What homework reliably produces is family conflict, the erosion of intrinsic motivation, and children who learn to perform compliance rather than think. If your school assigns it and you cannot opt out, do the minimum and do it without theater. If your school does not assign it, count yourselves lucky and do not invent your own.",
      "What does help at this age is something else entirely, and it is the thing the modern home has slowly stopped offering: real responsibility inside a working household. A nine-year-old can plan and cook a simple meal. They can do their own laundry. They can manage a small budget for the week\u2019s family snacks. They can take care of a pet, mostly, with check-ins. Each of these is harder and more educational than any worksheet, because each requires the child to plan, sequence, persist, and notice consequences. This is the Montessori practical life of lower elementary, and your kitchen is the prepared environment.",
      "Screens at this age are a real conversation, not a rule. Children between six and nine are tracking how the adults around them use technology. They notice when you check your phone mid-sentence. They notice when the rules are different for you than for them. The most useful work is to set family norms that include you, talk openly about what makes a screen choice good or bad, and protect long blocks of unstructured analog time without fanfare. The point is not to demonize the device. It is to keep boredom alive, because boredom at this age is the doorway to invention.",
      "Your role has shifted, quietly, from teacher to ecosystem keeper. The school is teaching the math. You are teaching the everything else: how a household runs, how disagreements get resolved, how a hard week is survived together, how to take care of people you love. This is not less than academic learning. It is the soil it grows in.",
    ],
    tryThis: [
      'Hand over one full responsibility this month. Not a chore \u2014 a domain. The breakfast situation is theirs. The plant care. The weekly grocery list for school lunches.',
      'Replace a piece of homework battle with a real cognitive task. Cooking from a recipe. Building something from instructions. Writing a real letter to a real person.',
      'Establish one weekly family ritual that requires no screens. Friday night pizza and a board game. Sunday morning long walk. The ritual will outlast the elementary years.',
    ],
    askGuide: [
      'What is my child working on at school that I could specifically NOT supplement at home, so I don\u2019t interfere with their learning?',
      'How is my child collaborating with peers, and is there anything I could do at home that would help that work translate?',
    ],
    hearMore: { episode: 'Lower Elementary Episode 2 \u2014 Fostering Independence in the Elementary Years', duration: '23 min' },
    related: ['lower_el-learning', 'primary-home'],
  },
  {
    id: 'lower_el-classroom', ep: 'classroom', age: 'lower_el',
    headline: 'The lower elementary classroom looks chaotic because it isn\u2019t being managed. It is being trusted.',
    body: [
      "You step into your child\u2019s lower elementary classroom for the first time and your first instinct is to wonder where the teacher is. Children are everywhere. Two are sprawled on a rug with a giant world map between them. Three are on a couch arguing politely about whether to write their report by hand or type it. One is alone at a small table covered in beads, working through a long multiplication. There is a low buzz of conversation, occasional laughter, no one is being told to be quiet, and somehow everyone is doing something.",
      "This is what a classroom for the second plane of development is supposed to look like. The Primary child needed long stretches of solitary, repetitive work. The lower elementary child needs the opposite \u2014 projects that stretch over days, partners to argue and collaborate with, a body that is allowed to lie on the floor with a book if that is the position the brain works best in. The guide has not lost control. The guide has built a culture in which control is held by the children together.",
      "The curriculum, called the cosmic curriculum, is built around five great lessons that the guide tells, in story form, at the start of each year \u2014 the universe, life, humans, writing, numbers. From each of those stories, the children pick threads. One year a child might follow the Cretaceous all the way to a model of Pangaea. Another might go from the great lesson on writing into ancient alphabets and then into making their own. The work cycle includes going out, which is exactly what it sounds like \u2014 a small group of children, with a parent or guide, leaving the building to follow a question into the world. The library, the museum, the bridge, the nursing home.",
      "The guide in this room is closer to a librarian than to a teacher. They are watching, asking sharper questions, connecting one child\u2019s interest to another\u2019s, presenting the next material at the moment a child is ready. You may rarely see them at the front of the room. That is not because they are uninvolved. It is because the prepared environment is doing the heavy lifting and the guide is handling the precision work.",
      "When your child comes home and says they did a project on volcanoes, your follow-up question matters. Try, instead of \u201cdid you finish\u201d: \u201cWhat did you find out that surprised you,\u201d or \u201cWho else worked on it with you,\u201d or \u201cWhat was the hardest part.\u201d You will be amazed at what you hear. They want to tell you. They have just been waiting for the right opening.",
    ],
    tryThis: [
      'Sign up for any parent observation the school offers. Stay quiet, stay still, stay long enough to see a full work cycle.',
      'At dinner, swap \u201cHow was school\u201d for \u201cWho did you work with today\u201d or \u201cWhat\u2019s the most interesting question you heard this week.\u201d',
      'If your school does parent-as-resource visits, offer one. A real cook, real builder, real nurse coming in for an hour will light the right kid on fire.',
    ],
    askGuide: [
      'Which of the great lessons most caught my child\u2019s imagination, and what work has spun out of it for them?',
      'Is my child finding their place in the social fabric of the classroom, and is there anything you would want me to know about that?',
    ],
    hearMore: { episode: 'Lower Elementary Episode 4 \u2014 Observing Your Child in the Lower Elementary Classroom', duration: '24 min' },
    related: ['lower_el-learning', 'lower_el-track'],
  },
  {
    id: 'upper_el-track', ep: 'track', age: 'upper_el',
    headline: 'The middle-school admissions essay is asking the wrong question. Your nine-to-twelve year old is doing harder work than that.',
    body: [
      "It is the season when middle school applications open and you are looking at a form that asks for your child\u2019s standardized scores, current grades, and a four-hundred-word essay on a leadership experience. Your eleven-year-old does not have grades. They have a portfolio of long, strange, deeply researched projects on subjects nobody assigned them. The form does not have a box for that. Before you panic-translate, take a breath.",
      "A child between nine and twelve is doing some of the hardest cognitive and moral work of childhood. The reasoning mind from lower elementary is now combined with a hunger for fairness, an appetite for the abstract, and a clear, sometimes uncomfortable awareness of social systems. They want to know why people are poor. They want to design a society. They want to argue with you about whether the law is the same as justice. This is exactly the work their developmental moment requires, and it is not work that an essay prompt was built to capture.",
      "What the upper elementary Montessori curriculum produces is not easily summarized. A child who has spent three years on long collaborative projects has developed planning, negotiation, research, revision, and presentation skills well above the conventional grade level. A child who has worked through the timeline of life, the function of government, the math of large numbers, and an ethics of personal responsibility is doing real intellectual work. None of it ladders into a single grade. All of it shows, the moment you put the child in a room and ask them an open question.",
      "When you fill out the application, your job is translation, not invention. You can describe the long project as a self-designed research initiative. You can describe the group presentation as collaborative public-speaking experience. You can attach the actual portfolio. If the new school is the right one, they will know how to read it. If they cannot read it, that is information about the school, not about your child.",
      "The harder, quieter question underneath the application season is what kind of middle school will keep this child whole. A school that wants to measure your child against a grade-level chart will eventually shape them to be measurable. A school that wants to know who they are, what they care about, and how they think will find your child immediately. There are middle schools, including non-Montessori ones, that ask the better question. It is worth the work to find them.",
    ],
    tryThis: [
      'Make the actual portfolio. Real artifacts, real photos, captioned in your child\u2019s own words. The making of it is also a chance for them to see their own progress.',
      'For one or two of the schools you are considering, ask if your child can spend a half-day there. Let them tell you which one felt like a place they could think.',
      'Write down, with your child, the three things you are not willing to compromise on for middle school. Carry that list into every tour. It will keep you grounded when a beautiful campus tries to dazzle you.',
    ],
    askGuide: [
      'What would you most want a middle school to know about my child, and is there a way to get that into the application?',
      'Where is my child stretching themselves this year, and what kind of environment would best support that growth next year?',
    ],
    hearMore: { episode: 'Upper Elementary Episode 7 \u2014 Transitioning to Middle School: What\u2019s Different', duration: '22 min' },
    related: ['lower_el-learning', 'upper_el-transition'],
  },
  {
    id: 'upper_el-transition', ep: 'transition', age: 'upper_el',
    headline: 'A nine-to-twelve year old leaving Montessori for a conventional middle school will lose the work cycle. Plan for what fills its place.',
    body: [
      "You are weighing middle schools, or you have already chosen one, and the decision is to leave the Montessori program your child has been in since they were three. Maybe the school stops at twelve. Maybe the next stage isn\u2019t there geographically. Maybe the financial math finally caught you. The grief is real even when the decision is right. Let\u2019s separate what travels from what is genuinely lost, so you can plan around the loss instead of pretending it isn\u2019t there.",
      "A child finishing upper elementary in a strong Montessori program leaves with skills that adapt to almost any environment. They can plan a project over weeks. They can collaborate without melting down when the group disagrees. They can write a report from real sources. They can stand in front of a room and present what they learned. They are usually politically and ethically awake in a way conventional twelve-year-olds are not, which can read as precocious or as intense, depending on the eye watching. None of this gets unlearned by a class change.",
      "What is actually lost is the long, uninterrupted self-directed work cycle, and at this age, that loss matters more than parents expect. A nine-to-twelve-year-old has just learned to plan their own time across days. In a conventional middle school, that planning will be done for them \u2014 every forty-five minutes a bell will ring, every assignment will be given. The skill they spent three years building will not have a place to live during the school day. Without something to replace it, that muscle will atrophy.",
      "You can build the replacement, and it does not have to be elaborate. Protect a real after-school block, even an hour, that belongs to a project they choose. A book they are writing, an animation they are building, an instrument they are learning, a garden bed they are designing. Help them find one mentor at the new school, an adult who sees them, even if it is the librarian or the art teacher. Stay close to one or two friendships from the Montessori community if the geography allows. The continuity matters.",
      "The other thing worth saying is that your child is on the cusp of adolescence, and the school question, while important, is about to be eclipsed by the much larger work of figuring out who they are. The middle school you choose will matter less than the dinner table you keep. Stay curious. Ask hard questions and tolerate hard answers. The Montessori foundation in your child is not in the building. It is in them.",
    ],
    tryThis: [
      'Help your child design the after-school project block before the new year starts. One real, sustained, self-chosen thing.',
      'Schedule a tour of the new school with your child along, after the official tour, when it\u2019s a normal day. They will read the room better than you.',
      'Plan a real conversation, not a lecture, about what they are excited about and what they are scared of. Listen more than you speak.',
    ],
    askGuide: [
      'What about my child\u2019s working style would you most want their next teachers to understand?',
      'Are there any specific adolescence-related developmental things I should be watching for over the summer, before the new school starts?',
    ],
    hearMore: { episode: 'Upper Elementary Episode 7 \u2014 Transitioning to Middle School: What\u2019s Different', duration: '22 min' },
    related: ['upper_el-track', 'adolescent-transition'],
  },
  {
    id: 'adolescent-transition', ep: 'transition', age: 'adolescent',
    headline: 'A Montessori adolescent leaving for a conventional high school will be fine academically. The harder question is whether they will be seen.',
    body: [
      "You are at the end of your child\u2019s middle school years and the family conversation has turned to high school. There may not be a Montessori option in your area, or there may not be the right one. Your fifteen-year-old has spent the last few years in a program built around them, with real responsibility and real respect, and you are about to send them somewhere that may not extend either. This is a worry worth taking seriously.",
      "Here is the part that does not require worry. A Montessori adolescent leaving for a conventional high school will, in nearly every case, do fine academically. They have spent years writing real essays, leading real projects, managing real time. They will pick up the academic content. They will, in many cases, find the academic load light compared to what they are already doing. Standardized tests, after a short ramp, are usually not a problem. You can put down the academic worry.",
      "The harder thing, and the worth-saying thing, is that adolescents in many conventional high schools are infantilized in ways that a Montessori-formed adolescent will feel keenly. They will be asked for hall passes. They will be assigned reading they have already done. They will be told what to think about books they have already loved. They may be the only person in the room who notices when a teacher\u2019s reasoning is sloppy. This is not a fragility on their part. It is a perceptiveness, and it can be lonely.",
      "The work, then, is to make sure the conditions for their wholeness exist outside the building. One adult mentor at the school who sees them. One serious commitment outside school \u2014 a job, a band, an internship, a sport, a service \u2014 where they continue to be trusted with real work. A peer or two who can take them seriously. Continued real conversation at home, not lectures, not interrogation. Time with their hands in real things. Protected hours that are theirs alone. They will adapt to high school. They will not lose themselves if you make sure home and the wider world keep treating them as a developing adult.",
      "The deeper truth about these years is that the high school question is one piece of a much larger puzzle. The teen years are an act of identity construction, and the people inside the construction site are usually quiet about what they are building. Your job is to be a steady, loving witness. Not to fix, not to script, not to ask for explanations they do not yet have. The adolescent you are sending into high school is becoming a person you will know for the rest of your life. The years to come will be easier and harder than you expect. Stay close.",
    ],
    tryThis: [
      'Help them find one real outside commitment by the start of high school. A weekly job, an apprenticeship, a meaningful volunteer role. Something where they are trusted.',
      'Establish a weekly one-on-one ritual that does not get cancelled. A drive, a meal, a walk. No phones. No agenda. They will fill the silence eventually.',
      'Talk openly about what you anticipate will be frustrating about high school, and what they can do when they hit it. Let them practice having strategies, not just feelings.',
    ],
    askGuide: [
      'What about my child\u2019s developmental trajectory would you most want a high school teacher to understand on day one?',
      'Where is my child\u2019s edge of growth right now, and what should I be doing to support it without crowding it?',
    ],
    hearMore: { episode: 'Erdkinder Episode 7 \u2014 Preparing for High School: The Next Big Transition', duration: '24 min' },
    related: ['upper_el-transition', 'adolescent-home'],
  },
  {
    id: 'adolescent-home', ep: 'home', age: 'adolescent',
    headline: 'A twelve-to-fifteen year old needs less of you, and more of you, at the same time. Learn the difference.',
    body: [
      "The bedroom door is closing more often. The conversations at dinner are shorter. The thirteen-year-old who used to follow you from room to room now answers a question over their shoulder and walks away. You reach for them and feel them slip back, and the question that lives in your chest is some version of: are we losing each other. Let\u2019s name what is actually happening.",
      "A child between twelve and fifteen has crossed into the third plane of development. The body is changing fast and unevenly. The brain is rewiring itself around social cognition, abstraction, and identity. Dr. Montessori thought this stage was so distinct from childhood that she designed a whole different educational environment for it, called Erdkinder, in which adolescents lived and worked together on a small farm, doing real economic and physical work with real consequences. Her insight was simple: the adolescent does not need more school. They need to test themselves against the real world.",
      "The withdrawal you are seeing is not rejection. It is construction. A young teenager is starting to understand themselves as a separate person and the only way they can do that is by stepping back from the people who have, until now, defined them. You are still the most important presence in their life. They cannot tell you that. The way they will say it, if you watch closely, is by coming back, often at strange hours, and sitting near you, and not saying much.",
      "What helps at home in this stage is mostly an inversion of what helped in the early years. Less direction, more invitation. Less management, more trust. A real role in the running of the household \u2014 not chores, but actual responsibility, like cooking the family dinner once a week, or managing the family calendar, or running the laundry for everyone. Time with non-parent adults who take them seriously: a coach, a great uncle, an employer at a part-time job. Real work outside school: a paid job, a serious craft, a regular volunteer role. Adolescents need to be useful, and useful is hard to find in modern life unless you build it on purpose.",
      "The relationship is not ending. It is being remade. The parent of a young child is the planet around which they orbit. The parent of a teenager becomes more like a fixed star. They are not always looking at you. They use you to navigate by. Stay where you said you would be. Keep the lights on. They will come find you, again and again, on their own schedule, for the rest of your life together.",
    ],
    tryThis: [
      'Hand over a real domain. The Sunday dinner is theirs. The car maintenance is theirs. The garden is theirs. Resist the urge to take it back when they do it imperfectly.',
      'Find one weekly thing the two of you do together that you don\u2019t talk about as a thing. A drive, a meal, an episode of a show. Consistency does the work.',
      'Help them get a real job or a real volunteer role this year. Money or impact, not enrichment. Adolescents respond to the world taking them seriously.',
    ],
    askGuide: [
      'Where is my child finding meaning at school right now, and where are they feeling stuck?',
      'What would you want me to know about how my child shows up in community, that I might not see at home?',
    ],
    hearMore: { episode: 'Erdkinder Episode 1 \u2014 The Adolescent: Exploring Identity and Independence', duration: '23 min' },
    related: ['adolescent-transition'],
  },
];

(function generateStubs() {
  const written = new Set(window.ARTICLES.map(a => `${a.age}:${a.ep}`));
  for (const age of window.AGE_LEVELS) {
    for (const ep of window.ENTRY_POINTS) {
      const key = `${age.id}:${ep.id}`;
      if (!written.has(key)) {
        window.ARTICLES.push({
          id: key.replace(':', '-'),
          ep: ep.id,
          age: age.id,
          headline: null,
          stub: true,
        });
      }
    }
  }
})();

window.getArticle = function(ep, age) {
  return window.ARTICLES.find(a => a.ep === ep && a.age === age);
};

window.getArticleById = function(id) {
  return window.ARTICLES.find(a => a.id === id);
};
