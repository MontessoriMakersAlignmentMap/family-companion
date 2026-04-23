// dynamic-content.js — playbooks, transitions, rooms, Q&A archive, cohort seed
// Content is written, not generated — this is a reference app, not a mock.

window.PLAYBOOKS = [
  {
    id: 'hitting-biting',
    title: 'Hitting or biting',
    ages: ['toddler', 'primary'],
    situation: 'Your child hits or bites another child (or you).',
    steps: [
      {
        head: 'Stop the contact, calmly',
        body: 'Physically intervene without a speech. A hand on the arm, a body between. No lecture in the moment — a two-year-old in a big-feelings state cannot take in words. Your job right now is safety, not teaching.',
      },
      {
        head: 'Name the feeling, not the crime',
        body: '“You wanted the truck. That was so hard.” You are not excusing the behavior. You are giving them the word for what flooded them. Language is how a small child gets a handle on a feeling.',
      },
      {
        head: 'Show the repair',
        body: 'Go together to the child who was hit. Get a damp cloth. Offer it. You do the repair on their behalf if they cannot yet. Do not force an apology — the word means nothing. The action means everything.',
      },
      {
        head: 'Later, when calm, practice the other hand',
        body: 'When your child is regulated, sit together and practice: “When you are angry, your hand can squeeze a pillow. Your hand can stomp. Your hand can come find me.” Rehearse it. The nervous system learns by repetition, not lecture.',
      },
    ],
    whyThisWorks: 'Biting and hitting at this age are almost never aggression. They are the overflow of a feeling a small body cannot yet hold. Suppressing the behavior without giving somewhere for the feeling to go is a dam with no spillway.',
  },
  {
    id: 'drop-off',
    title: 'Drop-off meltdown',
    ages: ['toddler', 'primary'],
    situation: 'Your child falls apart at school drop-off, every morning or intermittently.',
    steps: [
      {
        head: 'Build a ritual, and don’t negotiate it',
        body: 'Three things, in the same order, every morning. A hug, a phrase (“I’ll see you at pickup”), a wave at the door. Rituals give a dysregulated nervous system a handrail.',
      },
      {
        head: 'Leave cleanly',
        body: 'Do not linger. Do not sneak out. Do not promise. A long goodbye keeps the nervous system in alarm. A clear goodbye lets them start grieving and then recovering, which usually takes 3–7 minutes.',
      },
      {
        head: 'Check with the guide, not the child',
        body: 'Ask the classroom guide how long the crying lasted. Almost always it is a few minutes. The version your child reports that evening (“I cried all day”) is how it felt, not what happened.',
      },
      {
        head: 'Don’t relitigate at pickup',
        body: 'Don’t ask, “Was drop-off hard today?” at 3pm. They already lived through it. Talking about it again rebuilds the alarm loop. Just be glad to see them.',
      },
    ],
    whyThisWorks: 'Attachment crying is not damage. It is a healthy child showing you that you matter. The work is to let them feel it fully, trust that it ends, and not add an adult-sized problem (your guilt) to a toddler-sized problem (separation).',
  },
  {
    id: 'bedtime',
    title: 'Bedtime resistance',
    ages: ['toddler', 'primary'],
    situation: 'Every night is a 90-minute fight to get your child to stay in bed.',
    steps: [
      {
        head: 'Anchor the sequence, not the clock',
        body: 'Children don’t read time — they read pattern. Bath, books, brush, bed, in the same order, every night. The pattern is what cues their body to wind down. Miss the order once and the whole thing slips.',
      },
      {
        head: 'Give one real choice, not ten',
        body: '“Would you like the blue pajamas or the red ones?” Not: “What would you like to do now?” A tired child cannot handle open questions. Two real options, both acceptable to you.',
      },
      {
        head: 'When they get up, walk them back without speech',
        body: 'No lecture, no bargain, no second story. Hand on the shoulder, back to bed. Boring. It might take twenty returns the first week. It takes three the second.',
      },
      {
        head: 'Examine the afternoon',
        body: 'Most bedtime chaos is really a 4pm problem. Too much screen, not enough movement, a too-late nap. Shift something at 4 and watch what happens at 8.',
      },
    ],
    whyThisWorks: 'Bedtime resistance is rarely defiance. It is either a dysregulated afternoon catching up with them, or a child who has figured out that ambiguity at bedtime extends the day. Clear rhythm, boring returns, and an honest look at the afternoon will solve most of it.',
  },
  {
    id: 'public-meltdown',
    title: 'Meltdown in public',
    ages: ['toddler', 'primary'],
    situation: 'Grocery store, restaurant, or other adults watching. Full-body meltdown.',
    steps: [
      {
        head: 'Get low, get close, get quiet',
        body: 'Kneel. You do not need to speak yet. Your presence is the regulation. The loudest voice in the moment should not be yours or theirs.',
      },
      {
        head: 'Leave if you can',
        body: 'A meltdown needs somewhere to land. A fluorescent-lit aisle is the worst place. The car, a bench outside, a quiet corner. Abandon the cart if you need to. You can always come back.',
      },
      {
        head: 'Name the feeling once, then wait',
        body: '“You are so upset.” That is enough. Do not problem-solve mid-storm. Sit with them while the wave passes. Most meltdowns run their course in 5–12 minutes if you don’t add fuel.',
      },
      {
        head: 'Ignore the audience',
        body: 'Strangers’ opinions of your parenting do not enter the equation. The only relationship that matters in this moment is the one between you and your child. Full stop.',
      },
    ],
    whyThisWorks: 'A meltdown is a neurological event, not a behavior. Your calm body is the co-regulator they are borrowing. Reacting to the audience teaches the child that the audience matters. Your indifference to strangers is one of the most protective things you can model.',
  },
  {
    id: 'no-phase',
    title: 'The “no” phase',
    ages: ['toddler'],
    situation: 'Everything is no. Shoes: no. Breakfast: no. The thing they just asked for: no.',
    steps: [
      {
        head: 'Understand what “no” really is',
        body: 'At around two, “no” is not defiance. It is the first time they realize they are a separate person with a preference. Their no is a celebration of selfhood. Treat it with some respect.',
      },
      {
        head: 'Reduce the questions',
        body: 'Stop offering choices you are not prepared to honor. “Do you want to brush your teeth?” is a trap. “It’s time to brush teeth. Would you like the green brush or the yellow one?” is real.',
      },
      {
        head: 'Go alongside, not against',
        body: 'Push back on “no” and you escalate. Step next to it: “You don’t want to put your shoes on. I hear you. AND it’s time to go. I’ll help.” Acknowledge the feeling, then proceed.',
      },
      {
        head: 'Let them say no where it costs nothing',
        body: 'Their soul needs to practice having a preference. Let them say no to the blue cup, no to the banana, no to the blanket. It is the cheapest, most important gift you can give a two-year-old’s emerging self.',
      },
    ],
    whyThisWorks: 'The goal at this age is not a compliant child. It is a child who knows their own mind. A child who cannot say no at two will struggle to say no at twelve, when saying no matters in ways you care about very much.',
  },
  {
    id: 'sibling-conflict',
    title: 'Sibling hitting or grabbing',
    ages: ['toddler', 'primary', 'lower_el'],
    situation: 'One child hits, grabs from, or torments a sibling. Daily.',
    steps: [
      {
        head: 'Don’t play judge',
        body: 'You did not see what happened. You saw the last frame of a movie. Adjudicating “who started it” is a losing game that teaches them to perform for you rather than resolve with each other.',
      },
      {
        head: 'Attend to the hurt child first',
        body: 'Physically. Quietly. The child who lashed out gets your nervous system next, not your punishment. Often they are as dysregulated as the one who got hurt, just in a different direction.',
      },
      {
        head: 'Name what you saw, not what you think happened',
        body: '“I see two kids who wanted the same toy.” “I see a big sister who is exhausted.” Description, not verdict. Description lets both kids feel seen without anyone being cast as the villain.',
      },
      {
        head: 'Create more protected solo time for each',
        body: 'Most chronic sibling conflict is a bid for individual attention. Ten minutes a day of one-on-one time with each child, doing whatever they choose, reduces between-sibling chaos more than any lecture ever will.',
      },
    ],
    whyThisWorks: 'Siblings who are forced into “fair” outcomes by an adult judge learn to appeal to the adult. Siblings whose parents model seeing both of them clearly learn, slowly, to see each other.',
  },
];

window.TRANSITIONS = [
  {
    id: 'starting-nido',
    title: 'Starting Nido',
    ages: ['nido'],
    duration: 14,
    blurb: 'A two-week gradual entry into a Nido program.',
    days: [
      { day: 1, head: 'Visit together, 30 minutes', body: 'You stay in arms. Child observes the space from your body. Meet the guide. Leave before the baby tires.' },
      { day: 2, head: 'Visit together, 45 minutes', body: 'Let your baby be set down on the mat if they want. Stay within sight. Guide may offer an object.' },
      { day: 3, head: 'Visit together, 60 minutes', body: 'Step a few feet away for short stretches. Return before distress, not after.' },
      { day: 4, head: 'First separation, 20 minutes', body: 'Nurse or feed first. Hand them to the guide, say goodbye, leave cleanly. Stay close enough to return if called.' },
      { day: 5, head: 'Separation, 45 minutes', body: 'Repeat. Don’t quiz the guide afterwards — ask one question: how did they settle.' },
      { day: 6, head: 'Rest day', body: 'No visit. Let the integration happen. Extra floor time at home.' },
      { day: 7, head: 'Separation, 90 minutes', body: 'Include one feed in the visit. Notice whether they settle faster this time.' },
      { day: 8, head: 'Half morning', body: 'About 2 hours. Watch for signs at pickup: relaxed body, quiet, interested — those are good signs, not lethargy.' },
      { day: 9, head: 'Half morning', body: 'Repeat. Consistency matters more than progress here.' },
      { day: 10, head: 'Full morning', body: 'Three hours. You may see a sleep disruption tonight — it is normal, not a problem.' },
      { day: 11, head: 'Full morning', body: 'Repeat. Start noticing what they come home excited by.' },
      { day: 12, head: 'Full morning', body: 'Repeat. Skip the questions. Let them tell you in their own time, in their own language.' },
      { day: 13, head: 'Full day', body: 'If the program offers a full day, try it once. Reassess if the nervous system needs a shorter week still.' },
      { day: 14, head: 'Full day, and a quiet evening', body: 'Nothing else on the calendar tonight. Early bedtime. The transition is not done — the nervous system is still integrating for another four to six weeks.' },
    ],
  },
  {
    id: 'floor-bed',
    title: 'Moving to a floor bed',
    ages: ['nido', 'toddler'],
    duration: 21,
    blurb: 'Three weeks to make the switch calmly.',
    days: [
      { day: 1, head: 'Audit the room for safety', body: 'Outlets, cords, anything on the floor, anything climbable. Crawl through the room yourself at their eye level.' },
      { day: 2, head: 'Introduce the bed at nap', body: 'Naps first, nights later. Most children accept a new bed faster for naps.' },
      { day: 3, head: 'Nap only', body: 'Repeat. Short naps are fine for a few days.' },
      { day: 4, head: 'Night in the crib, nap on floor bed', body: 'Keep the crib in the room for now if space allows — it reduces the sense of losing something.' },
      { day: 5, head: 'Nap only', body: 'Consistency.' },
      { day: 6, head: 'Rest day', body: 'No change. Let them settle.' },
      { day: 7, head: 'First night on floor bed', body: 'Stay nearby. Use the same bedtime ritual. The bed is different; the ritual is the anchor.' },
      { day: 8, head: 'Second night', body: 'Expect 1–3 getting-outs. Walk them back, no speech.' },
      { day: 9, head: 'Third night', body: 'Often the hardest. Stay calm. They are not being bad; they are testing the new rules of the space.' },
      { day: 10, head: 'Fourth night', body: 'Often it starts to click here.' },
      { day: 11, head: 'Fifth night', body: 'Notice what’s better, not what’s worse.' },
      { day: 12, head: 'Rest day', body: 'No audits. No changes. Let the new normal become normal.' },
      { day: 13, head: 'Sixth night', body: 'If they’re mostly staying put, great. If not, look at the room once more.' },
      { day: 14, head: 'End of week two', body: 'By now the pattern is usually set. If chaos persists, the room may be doing too much — consider simpler.' },
      { day: 15, head: 'Week 3 begins', body: 'Remove the crib if you still have it. This signals the transition is complete.' },
      { day: 16, head: 'Steady', body: 'Continue ritual.' },
      { day: 17, head: 'Steady', body: 'Continue ritual.' },
      { day: 18, head: 'Steady', body: 'Continue ritual.' },
      { day: 19, head: 'Observe', body: 'Notice what they do now before sleep. Some children develop a small self-led ritual. Honor it.' },
      { day: 20, head: 'Steady', body: 'Continue ritual.' },
      { day: 21, head: 'Done', body: 'Write down in the journal what worked. You will need this again for the next transition.' },
    ],
  },
  {
    id: 'toilet-learning',
    title: 'Toilet learning',
    ages: ['toddler'],
    duration: 14,
    blurb: 'Montessori toilet learning — a two-week focused arc once signs of readiness appear.',
    days: [
      { day: 1, head: 'Confirm readiness', body: 'Dry for 1–2 hours, interested in the toilet, can pull pants down, notices when wet. If not all four, wait two weeks and revisit.' },
      { day: 2, head: 'Set up the bathroom', body: 'Low potty or seat reducer. Step stool. A basket of cotton underwear. A pile of easy-clean clothes.' },
      { day: 3, head: 'Underwear day', body: 'No diapers at home except for sleep. Expect puddles. Do not shame. Offer the potty every 45–60 minutes without asking.' },
      { day: 4, head: 'Stay home', body: 'Second day of underwear. Patterns start to emerge.' },
      { day: 5, head: 'Stay home', body: 'Third day. Often a noticeable decrease in accidents.' },
      { day: 6, head: 'Rest day', body: 'Normal life. Diapers for outings if needed, underwear at home.' },
      { day: 7, head: 'First outing in underwear', body: 'Short. Bring a full change. Go to a place with an accessible bathroom.' },
      { day: 8, head: 'Home day', body: 'Continue the rhythm. Most children can now initiate.' },
      { day: 9, head: 'Longer outing', body: 'Plan around where bathrooms are. Visit the bathroom on arrival.' },
      { day: 10, head: 'Home day', body: 'Notice what predicts accidents: hunger, excitement, transitions. Those are the moments to offer.' },
      { day: 11, head: 'Outing', body: 'Most children now have <1 accident a day.' },
      { day: 12, head: 'Rest day', body: 'Reflect.' },
      { day: 13, head: 'Steady', body: 'The work is basically done. Night training is a separate thing, handled later.' },
      { day: 14, head: 'Done', body: 'Celebrate quietly — in your journal, not in front of them. They do not need it to be a performance.' },
    ],
  },
  {
    id: 'new-sibling',
    title: 'Welcoming a new sibling',
    ages: ['toddler', 'primary', 'lower_el'],
    duration: 28,
    blurb: 'Four weeks around a new baby arriving — two before, two after.',
    days: [
      { day: 1, head: 'Start talking about it without a performance', body: 'Mention the baby in passing, in context. Not in a sit-down. Not as an announcement every few minutes.' },
      { day: 2, head: 'Show, don’t pitch', body: 'Look at their own baby photos together. “This was you.” Stories, not a sales job.' },
      { day: 3, head: 'Prepare their space', body: 'Anything being moved to make room for the baby should be moved now, weeks before, not in the week of the arrival.' },
      { day: 4, head: 'Include them in preparation', body: 'Folding tiny clothes together. Choosing a book to give the baby. Concrete tasks, not abstract promises.' },
      { day: 5, head: 'Rest', body: 'Normal life.' },
      { day: 6, head: 'Introduce a doll, maybe', body: 'Only if they are interested. Don’t force it. Some children care, some don’t.' },
      { day: 7, head: 'Rest', body: 'Normal life.' },
      { day: 8, head: 'Pre-arrange a caregiver they love', body: 'For the birth and the first week. Someone they already trust. Not a novelty aunt.' },
      { day: 9, head: 'Protect sleep', body: 'In the two weeks before, defend their sleep aggressively. A well-rested child handles upheaval far better.' },
      { day: 10, head: 'Rest', body: 'Normal life.' },
      { day: 11, head: 'Read one specific book about siblings', body: 'Not ten. One, repeatedly. Repetition is how young children process.' },
      { day: 12, head: 'Rest', body: 'Normal life.' },
      { day: 13, head: 'Final prep', body: 'Pack their bag at the caregiver’s house. Familiar pajamas, a book, the usual bedtime objects.' },
      { day: 14, head: 'Baby arrives', body: 'Keep the first meeting small and unhurried. Let the older child lead the pace.' },
      { day: 15, head: 'Day after arrival', body: 'Short, unpressured time together. Don’t stage photos. Don’t coach them to kiss the baby.' },
      { day: 16, head: 'Normal life begins', body: 'Try to keep the older child’s routines almost unchanged. Their predictability is their anchor.' },
      { day: 17, head: 'Expect regression', body: 'Sleep, toileting, speech. All temporary. Don’t correct it — it is a nervous system seeking the younger self.' },
      { day: 18, head: 'Rest', body: 'Normal life.' },
      { day: 19, head: 'One solo outing', body: 'The older child, one parent, one hour, out of the house. This is medicine.' },
      { day: 20, head: 'Include, don’t assign', body: 'Let them help with the baby. Don’t require it. A three-year-old is not the help; they are still the child.' },
      { day: 21, head: 'Rest', body: 'Normal life.' },
      { day: 22, head: 'Name what you see', body: '“It is hard to share me.” Said once, lightly, in a quiet moment. Not made into a Big Talk.' },
      { day: 23, head: 'Rest', body: 'Normal life.' },
      { day: 24, head: 'Watch for the curdle', body: 'If the older child becomes withdrawn or increasingly aggressive with the baby, that is a sign they need more solo attention, not a lecture.' },
      { day: 25, head: 'Another solo outing', body: 'One parent, one child, one hour.' },
      { day: 26, head: 'Rest', body: 'Normal life.' },
      { day: 27, head: 'Notice what has settled', body: 'Usually by now the new equilibrium is visible, if not yet easy.' },
      { day: 28, head: 'Write it down', body: 'In your journal. What you did that helped. What you would do differently. This is a transition you will remember.' },
    ],
  },
];

window.ROOMS = [
  {
    id: 'entryway',
    title: 'Entryway',
    blurb: 'Where the day begins and ends. Make it a place your child can navigate alone.',
    byAge: {
      toddler: [
        'Low hooks at child height for coat and bag',
        'A basket or tray on the floor for shoes',
        'A small bench they can sit on to put shoes on themselves',
        'A mirror at their height, not yours',
        'One place for gloves or hats, labeled or color-coded',
      ],
      primary: [
        'Their coat and bag on their own hook',
        'A small chair or bench',
        'A clear place for school things they bring home',
        'A tray for keys, library cards, things that travel',
        'A shoe horn if shoes are hard to get on',
      ],
      lower_el: [
        'Their own section of the entryway, visibly theirs',
        'A hook for a backpack heavy enough to slip off an adult hook',
        'A place for paperwork from school — an in-tray for you, an out-tray for them',
      ],
    },
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    blurb: 'The most important classroom in your house. Nearly every child can help more than you think.',
    byAge: {
      nido: [
        'A low mat or blanket on the floor during meal prep so they can be near you',
        'A few safe wooden objects in a basket for floor time',
      ],
      toddler: [
        'A learning tower or sturdy step stool at the counter',
        'Low cabinet with their plates, bowls, cups (real, not plastic)',
        'A small pitcher they can pour from',
        'A small butter knife or child-safe knife for soft foods',
        'A cloth at child height for wiping up spills',
      ],
      primary: [
        'Their own cabinet stocked with the tools they use',
        'Access to a water source they can use independently',
        'A simple snack they can prepare themselves (fruit, crackers, spread)',
        'A place for their work — a small cutting board they know is theirs',
        'A broom and dustpan sized for them',
      ],
      lower_el: [
        'Access to basic cooking tools: peeler, measuring cups, a real knife for age',
        'Visibility into the week’s meals — a chalkboard, a menu',
        'A task or recipe they are learning to own this month',
      ],
    },
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    blurb: 'Independence in the bathroom is the fastest way to adult-size a child’s sense of self.',
    byAge: {
      toddler: [
        'A low potty or secure seat reducer, always accessible',
        'A step stool at the sink',
        'Their toothbrush, cup, and hand towel at their height',
        'A basket of cotton underwear visible and reachable',
        'A small laundry bin for wet clothes, accessible',
      ],
      primary: [
        'Full access to sink, toilet, and their own grooming tools',
        'A hook for their own towel',
        'A small mirror at their height',
      ],
      lower_el: [
        'Their own shelf in the cabinet',
        'Responsibility for one bathroom task — restocking toilet paper, wiping the sink',
      ],
    },
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    blurb: 'A room that invites sleep, dressing, and quiet work — not a playroom.',
    byAge: {
      nido: [
        'A firm movement mat on the floor',
        'A low, securely mounted mirror',
        'One mobile at a time, changed when interest fades',
        'A floor bed once the child is mobile, if you choose',
      ],
      toddler: [
        'Floor bed, always accessible',
        'Low shelves with a small, rotated selection of toys/books — 6 to 10 items total',
        'A small basket for dirty clothes they can reach',
        'Low drawers with 2–3 outfits they can choose from',
      ],
      primary: [
        'A small table and chair for drawing, writing, cutting',
        'Their own dresser they can fully operate',
        'A clock they can read (analog, if possible)',
      ],
      lower_el: [
        'A workspace with real tools: pens, a real stapler, tape, scissors',
        'Their own small bookshelf, organized by them',
      ],
    },
  },
];

window.QUESTIONS_ARCHIVE = [
  {
    id: 'qa-01', age: 'toddler', tag: 'emotion',
    q: 'My 22-month-old hits me when he’s frustrated. What do I do in the moment?',
    a: 'Stop the hand without speech — a hand around his wrist, gentle but firm. Then, only then, the words: “I won’t let you hit. You’re so angry.” You are not teaching him not to hit through a lecture. You are teaching him that a feeling can rise and fall without hurting anyone, because you held the line for him. He will hit again. That is not failure — it is the work.',
    askedBy: 'Toddler cohort',
  },
  {
    id: 'qa-02', age: 'primary', tag: 'language',
    q: 'My 4-year-old asks “why?” about everything. I am exhausted. Am I supposed to answer every time?',
    a: 'No. Sometimes the question is the work, not the answer. Try: “What do you think?” or “Let’s find out together.” It honors the question without handing her a consumer-grade answer to a question she is capable of chewing on. You are not an encyclopedia. You are a companion in her wondering.',
    askedBy: 'Primary cohort',
  },
  {
    id: 'qa-03', age: 'toddler', tag: 'sleep',
    q: 'My 2.5-year-old dropped her nap. Now bedtime is chaos. Help.',
    a: 'The nap drop is often not about the nap — it’s about rhythm. Without the nap, the afternoon stretches too long for a toddler’s nervous system. Move bedtime 30–45 minutes earlier, protect a quiet rest time (not nap, just rest) in the afternoon, and cut stimulation after 4pm. Two weeks of this and bedtime usually reorganizes itself.',
    askedBy: 'Toddler cohort',
  },
  {
    id: 'qa-04', age: 'primary', tag: 'school',
    q: 'My kindergartner is in Primary and hasn’t started reading. Her cousin reads. Should I be worried?',
    a: 'The short answer is no, and I know that does not fully help. The reading explosion in Primary comes in the third year for most children — between five and six, with wide variation. What you should watch for is not a date but a direction: is she interested in letters and sounds, is she tracking words on the page, is she asking how things are spelled. If yes, she is on the path. If none of those are true by age 6.5, talk to her guide and your pediatrician — not panicked, just curious.',
    askedBy: 'Primary cohort',
  },
  {
    id: 'qa-05', age: 'lower_el', tag: 'social',
    q: 'My 7-year-old says he has “no friends.” The teacher says he plays with kids every day. Who is right?',
    a: 'Both of them. At seven, children are starting to develop a narrative about themselves — and “no friends” is a story he is trying on, not a fact. Don’t argue it. Don’t reassure it away (“but you have LOTS of friends!”). Ask: “What would a friend feel like?” That question usually opens a more honest conversation about what he is actually missing, which is often one specific child, not the whole concept.',
    askedBy: 'Lower El cohort',
  },
  {
    id: 'qa-06', age: 'adolescent', tag: 'emotion',
    q: 'My 13-year-old has become withdrawn and surly. I miss him. Is this normal?',
    a: 'It is. The third plane (12–15) is the adolescent version of the toddler years — another great reorganization. They pull away in order to come back as a more fully formed self. What they need is not more conversation but more proximity without demand. Drive them somewhere. Cook alongside them. Let the conversation happen in the margins, not in a sit-down. And: make sure nothing else is happening underneath (sleep, peers, a loss). Withdrawal is typical. Withdrawal plus flat affect plus lost interests is a different thing.',
    askedBy: 'Adolescent cohort',
  },
  {
    id: 'qa-07', age: 'nido', tag: 'feeding',
    q: 'My 10-month-old refuses a spoon and will only eat with his hands. Is this okay?',
    a: 'Yes, and I’d argue it’s better than okay. Self-feeding — hands first, utensils as interest emerges — builds hand-eye coordination, grip strength, and a healthy relationship with eating. The spoon will come. Offer it alongside, don’t require it. A baby who feeds himself, however messily, is doing the exact work his developmental stage asks for.',
    askedBy: 'Nido cohort',
  },
  {
    id: 'qa-08', age: 'primary', tag: 'screens',
    q: 'We said no screens until 6. Now he is 4 and asking constantly because his friends have tablets. What now?',
    a: 'Your original decision is not wrong, and you are not obligated to change it because a four-year-old’s friends changed the ambient pressure. What does help: name the difference without judgment. “Different families make different choices. In our family, we wait.” Said calmly and repeatedly, without defensiveness. He may test it. Hold the line. Children don’t need you to be right; they need you to be steady.',
    askedBy: 'Primary cohort',
  },
];

window.COHORT_POSTS = [
  {
    id: 'cp1', ageGroup: 'toddler', author: 'Maya D.', hours: 3,
    title: 'We finally cracked drop-off',
    body: 'After four weeks of screaming, we started letting her carry one small object from home into the classroom — a rock she found. Within three days drop-off went from 15 minutes of crying to a clean goodbye. Guide said the rock stays in her cubby and comes home at pickup. Anyway. Sharing in case it helps someone.',
    replies: 12, likes: 47,
  },
  {
    id: 'cp2', ageGroup: 'toddler', author: 'Jordan K.', hours: 8,
    title: 'How much is too much pouring?',
    body: 'My 26-month-old has been pouring water from one cup to another for literal hours this week. Is this a phase I should enable or redirect?',
    replies: 18, likes: 22,
  },
  {
    id: 'cp3', ageGroup: 'toddler', author: 'Sam R.', hours: 14,
    title: 'Nap transition is killing us',
    body: 'Dropped the nap three weeks ago (against our will, she just stopped). Bedtime is now 5:30pm and she is still exhausted by 4pm. Does this ever settle?',
    replies: 24, likes: 31,
  },
  {
    id: 'cp4', ageGroup: 'primary', author: 'Priya S.', hours: 6,
    title: 'Reading explosion happened overnight',
    body: 'For a year he was "almost" reading. This weekend he read an entire chapter book out loud to us. I am writing it down because I think I will forget how it felt.',
    replies: 31, likes: 89,
  },
  {
    id: 'cp5', ageGroup: 'primary', author: 'Mark T.', hours: 20,
    title: 'Sibling hitting — when does it end',
    body: 'Four-year-old hits his two-year-old sister every day. We have tried naming, separating, solo time. Anyone else in year two of this? Tell me it ends.',
    replies: 29, likes: 18,
  },
  {
    id: 'cp6', ageGroup: 'nido', author: 'Elena V.', hours: 11,
    title: 'Floor bed, week one',
    body: 'She has gotten out of bed exactly once. We cannot believe it. Posting here before we jinx it.',
    replies: 9, likes: 34,
  },
  {
    id: 'cp7', ageGroup: 'lower_el', author: 'Devon M.', hours: 30,
    title: 'Math boredom',
    body: 'My 8yo says math is boring at school. Guide says he is working above grade level and has plenty of material. Anyone else get this report? Is it just the word "boring"?',
    replies: 14, likes: 25,
  },
];

window.COHORT_GROUPS = [
  { id: 'nido', label: 'Nido', range: '0–18 mo', members: 38 },
  { id: 'toddler', label: 'Toddler', range: '18 mo – 3 yr', members: 127 },
  { id: 'primary', label: 'Primary', range: '3–6 yr', members: 194 },
  { id: 'lower_el', label: 'Lower El', range: '6–9 yr', members: 82 },
  { id: 'upper_el', label: 'Upper El', range: '9–12 yr', members: 41 },
  { id: 'adolescent', label: 'Adolescent', range: '12–15 yr', members: 22 },
];
