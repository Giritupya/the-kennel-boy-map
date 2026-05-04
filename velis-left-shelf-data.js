const VELIS_LEFT_SHELF = {
  "fragments": {
    kind: "scroll",
    image: "assets/velis/velis-scroll-1.webp",
    html: `
      <h2>Kennel Record Fragment</h2>
      <p>The hounds were not always bound as they are now...</p>
    `
  },

  "book-1": {
    kind: "book",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Ledger of the Keep</h2>

        <p>
          This ledger records the earliest known entries of the Keep’s wardens,
          their duties, and the first structured accounts of the hounds.
        </p>

        <p>
          Many entries are incomplete. Others appear altered, as though rewritten
          by different hands across the years.
        </p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <h3>Entry Fragment</h3>

        <p>
          “The bond holds, though it strains. The hounds respond, but not always
          as expected. There is something deeper in them now… something watching.”
        </p>

        <p>
          Several pages following this entry have been removed.
        </p>
      </div>
    `
  },

  "map": {
  kind: "scroll",
  image: "assets/velis/velis-scroll-map.webp",
  html: ``
},

  "scroll": {
    kind: "scroll",
    image: "assets/velis/velis-scroll-2.webp",
    html: `
      <h2>Burnt Scroll Fragment</h2>
      <p>
        An old scroll, burnt at the edges. Much of its surface has been lost to fire,
        leaving only scattered fragments of text still readable.
      </p>
      <p>
        The remaining words speak of paths long forgotten, and warnings half erased.
      </p>
    `
  },

  "book-2": { 
  kind: "book",
  image: "assets/velis/velis-book-2.webp",
  pages: `

    <!-- PAGE 1 -->
    <div class="velis-book-page velis-book-page-left">
      <h2>Bestiary</h2>
      <p>Notes on creatures encountered beyond the Deepenwood...</p>
    </div>

    <!-- PAGE 2 -->
    <div class="velis-book-page velis-book-page-right">
      <p>Some are not beasts at all, but remnants of something older.</p>
    </div>

    <!-- PAGE 3 -->
    <div class="velis-book-page velis-book-page-left">
      <h2>The Hollow</h2>
      
      <p><em>Location uncertain. Most often reported near Ash Hollow.</em></p>

      <p>
      Witness accounts describe a towering form, partially obscured by heat-haze or
      ashfall. Limbs appear elongated beyond natural proportion, with movement that
      suggests neither beast nor man.
      </p>

      <p>
      The air around it is said to distort — as though the creature carries heat not
      of flame, but of something deeper.
      </p>
    </div>

    <!-- PAGE 4 -->
    <div class="velis-book-page velis-book-page-right">
      <h3>Field Note</h3>

      <p>
      “It did not move like something alive. It reached — not for me, but through me.”
      </p>

      <p>Direct confrontation is not advised.</p>

      <p>Several lines here have been burned away.</p>
     <img src="assets/velis/hollow.png" 
     style="width:40%; display:block; margin:15px auto; filter:grayscale(100%) contrast(0.95) brightness(0.95); opacity:0.9; transform:rotate(-3deg);"
     alt="Sketch of the Hollow">
     <p><em>Recovered sketch. Scale uncertain.</em></p>
    </div>

    <div class="velis-book-page velis-book-page-left">
  <h2>Deepenwood Watchers</h2>

  <p><em>No confirmed sightings recorded beyond the Deepenwood.</em></p>

  <p>
    Accounts do not describe a creature in any consistent form.
    Most witnesses report only a <em>sense</em> of presence — a feeling
    of being observed from just beyond the line of sight.
  </p>

  <p>
    The sensation is strongest in stillness. Travelers who stop walking,
    speaking, or making noise often report that the forest itself seems
    to draw closer, as though attention has been turned toward them.
  </p>

  <p>
    There are no confirmed attacks.
  </p>

  <p>
    No tracks have been reliably identified.
  </p>

  <p>
    Some accounts suggest movement between trees without sound or disturbance,
    though no clear shape is ever described.
  </p>

</div>

<div class="velis-book-page velis-book-page-right">
<p>
    It is commonly advised that those who feel watched should continue moving
    and avoid lingering.
  </p>
  <h3>Field Note</h3>

  <p>
    “I stopped to listen. That was when it changed.<br>
    Not closer — just… aware of me.”
  </p>

  <p>
    No harm reported in any account.
  </p>

  <p>
    Several entries end abruptly without conclusion.
  </p>

  <p><em>No sketch recovered.</em></p>
</div>

<div class="velis-book-page velis-book-page-left">
  <h2>Ash Plain Crawlers</h2>

  <p><em>Found across the ash plains and burned settlements.</em></p>

  <p>
    Witness descriptions vary, though all agree on one point:
    the movement is wrong.
  </p>

  <p>
    Limbs appear misjointed or uneven in number. Some accounts
    describe bodies that fold and unfold as they move, as though
    the creature does not follow a fixed structure.
  </p>

  <p>
    Several observers report that the creatures do not walk, but
    instead advance in short, uneven shifts — covering ground too
    quickly for the motion observed.
  </p>

  <p>
    Remains found in affected areas suggest bodies altered by
    prolonged exposure to extreme heat, though no clear origin
    has been confirmed.
  </p>

  <p>
    It is unknown whether these forms are living creatures,
    or something left behind.
  </p>
</div>

<div class="velis-book-page velis-book-page-right">
  <h3>Field Note</h3>

  <p>
    “It bent the wrong way.<br>
    I swear it did… and then it was closer.”
  </p>

  <p>
    Engagement is strongly discouraged.
  </p>

  <p>
    Several sketches accompanying early reports have been
    deliberately destroyed.
  </p>

  <p><em>Recovered fragments show only partial forms.</em></p>
</div>

<div class="velis-book-page velis-book-page-left">
  <h2>The Unseen Herd</h2>

  <p><em>Reported in open ground, most often at night.</em></p>

  <p>
    Witnesses describe the sound first — a low, distant movement
    like many bodies crossing earth together.
  </p>

  <p>
    The ground is said to tremble faintly, though no source can
    be clearly identified. The sensation passes as quickly as it comes,
    leaving no visible disturbance.
  </p>

  <p>
    Some accounts speak of shapes at the edge of vision — large,
    shifting forms that never fully resolve when looked at directly.
  </p>

  <p>
    No tracks have been reliably recovered.
  </p>

  <p>
    It is unclear whether the phenomenon represents a single moving
    body, or many.
  </p>
</div>

<div class="velis-book-page velis-book-page-right">
  <h3>Field Note</h3>

  <p>
    “You can feel them pass.<br>
    Not around you — through the ground itself.”
  </p>

  <p>
    No confirmed visual identification exists.
  </p>

  <p>
    Reports suggest the event follows no predictable pattern.
  </p>

  <p><em>Several observers refused to remain in the area after first occurrence.</em></p>
</div>

<div class="velis-book-page velis-book-page-left">
  <h2>Gate-Touched Creatures</h2>

  <p><em>Reports originate far beyond their expected range.</em></p>

  <p>
    Creatures bearing unfamiliar traits have been recorded in regions
    where no such forms should exist.
  </p>

  <p>
    Observers describe features that do not align with known fauna —
    unusual symmetry, distorted proportion, or movement that suggests
    unfamiliar anatomy.
  </p>

  <p>
    In several cases, animals previously considered ordinary were later
    noted to display altered behaviour, as though responding to something
    not present in their environment.
  </p>

  <p>
    No clear pattern links these occurrences, though many accounts
    reference areas associated with older structures or sites of
    uncertain origin.
  </p>

  <p>
    It is not known whether these creatures have
  </p>
</div>

<div class="velis-book-page velis-book-page-right">
  <p>
  migrated, or been changed.
   <p>
  <h3>Field Note</h3>

  <p>
    “It shouldn’t be here.<br>
    That was the first thought… not fear.”
  </p>

  <p>
    Several specimens were not recovered.
  </p>

  <p>
    Recorded behaviours suggest awareness beyond typical instinct.
  </p>

  <p><em>Further study was advised. No follow-up reports remain.</em></p>
</div>


  `
},

  "book-3": {
    kind: "book",
    image: "assets/velis/velis-book-3.webp",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Watcher Notes</h2>
        <p>Records kept by those who stood at the Gate...</p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <p>Their words grow more uncertain over time.</p>
      </div>
    `
  },

  "book-4": {
    kind: "book",
    image: "assets/velis/velis-book-4.webp",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Flame Record</h2>
        <p>Accounts of those who followed the Ascendant Flame...</p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <p>Much of it has been deliberately erased.</p>
      </div>
    `
  },

  "book-5": {
    kind: "book",
    image: "assets/velis/velis-book-5.webp",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Velis Codex</h2>
        <p>The oldest surviving fragments of the archive...</p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <p>The script shifts between languages long forgotten.</p>
      </div>
    `
  },

"book-6": {
  kind: "book",
  image: "assets/velis/velis-book-6.webp",
  pages: `
    <div class="velis-book-page velis-book-page-left">
  <h2>On the First Settlement of the Broken Lands</h2>
  <p><em>Collected Accounts and Surviving Records</em></p>

  <p>The people of the lost land are believed to have arrived through what is now known as the Sea Gate in a single great movement, comprising nine clans.</p>

  <p>They did not come as conquerors, but as refugees, bringing with them what provisions, livestock, and tools could be carried across the sea.</p>

  <p>Upon arrival, it quickly became apparent that the harbour and its surrounding structures could not accommodate the number of people who had crossed.</p>

  <p>Though stone buildings already stood near the Sea Gate—ruined, but repairable—they were too few.</p>
</div>

<div class="velis-book-page velis-book-page-right">
  <p>The majority of the ships were therefore dismantled, their timber, iron, and fittings repurposed for shelter and construction.</p>

  <p>Temporary dwellings arose beyond the harbour in the form of shacks and crude halls, organised loosely by clan.</p>

  <p>While each clan claimed its own space, the labour of dismantling the ships and erecting shelter was shared.</p>

  <p>Before permanent settlement was undertaken, two clans were selected to scout the surrounding land.</p>
</div>


<div class="velis-book-page velis-book-page-left">
  <h3>The Loss of the Two Clans</h3>

  <p>The scouting clans were tasked with charting the territory beyond the harbour and returning with knowledge of its boundaries and resources.</p>

  <p>Their efforts resulted in the earliest maps of what would later be named the Broken Lands.</p>

  <p>These maps recorded a land that appeared not merely shaped by geography, but enclosed by it.</p>

  <p>To the north and east rose a vast mountain range, later called the Teeth. To the south lay sheer coastal cliffs, broken only by the harbour through which the people had arrived.</p>
 <p>To the west stood a great wall of unknown origin, accompanied by immense stone structures now collectively referred to as the Gates.</p>
  </div>

<div class="velis-book-page velis-book-page-right">
  
  <p>Runners returned with this information. The clans themselves did not.</p>

  <p>No trace was ever found—no camps, no remains, no evidence that anyone had occupied those sites.</p>

  <p>Their maps, however, survived.</p>
</div>


<div class="velis-book-page velis-book-page-left">
  <h3>Winter at the Sea Gate</h3>

  <p>Following the disappearance of the scouting clans and with winter approaching, the leaders of the remaining seven clans agreed to establish themselves temporarily near the Sea Gate.</p>

  <p>They retained sufficient provisions and livestock to endure the colder months and preserved a small number of vessels for fishing.</p>

  <p>Despite repairs to the ancient harbour structures, shelter remained inadequate, reinforcing the necessity of dismantling the remaining ships.</p>
<p>The people proved industrious and resilient. Work was shared, and dwellings rose quickly, though they offered little comfort against the coming cold.</p>
  </div>

<div class="velis-book-page velis-book-page-right">
  
  <p>Winter proved severe. Loss of life was significant, and it is widely held that more perished during that first winter than at any other point in the early settlement.</p>
</div>


<div class="velis-book-page velis-book-page-left">
  <h3>Discovery of the Roads</h3>

  <p>With the arrival of spring, the land yielded one of its earliest secrets.</p>

  <p>Beneath scrub and shallow soil, the clans uncovered a network of stone-laid roads.</p>

  <p>Clearing efforts began at once, each clan tending the stretches nearest their holdings.</p>
<p>Four main roads extended northward, each terminating at one of the northern Gates.</p>

  <p>Smaller roads branched away, cutting through farmland and marsh, consistently guiding travellers either toward a Gate or back to the sea.</p>
  <p>The implication was unmistakable: the land had been organised long before the arrival of its current inhabitants.</p>
  </div>

<div class="velis-book-page velis-book-page-right">
  <h3>The Division of the Clans</h3>

  <p>As settlement expanded, disagreements arose. Differences in leadership, land claims, and long-term vision led the clans to separate.</p>

  <p>Many moved north toward the Teeth, drawn by familiarity with mountainous terrain.</p>

  <p>Four clans eventually settled at the northern Gates, one at each.</p>
  
  <p>One clan claimed arable lowland, another chose the marshes, and one moved west to the great wall to assume responsibility for its upkeep.</p>

  <p>As distance grew, so too did difference.</p>
</div>



<div class="velis-book-page velis-book-page-left">
  <h3>Stonecross and the End of Accord</h3>

  <p>Stonecross was constructed at a major junction within the ancient road system, serving as a centre for trade and coordination.</p>

  <p>Timber, ore, fish, and grain moved through this place by necessity rather than goodwill.</p>

  <p>The first High Chief was chosen by agreement among the clan leaders.</p>

  <p>This arrangement did not endure. One clan seized control of Stonecross by force, and leadership thereafter rested on strength.</p>

  </div>


<div class="velis-book-page velis-book-page-right">
  <h3>Life Under the Gates</h3>

  <p>Over generations, the clans grew in different ways—some in wealth, others in strength or knowledge.</p>

  <p>For five of the clans, daily life became inseparable from the Gates they guarded.</p>

  <p>The High Gate was watched continuously and opened only under strict necessity.</p>

  <p>The Unknown Gate gradually fell out of common discussion.</p>

  <p>The clan assigned to it withdrew from broader contact, trading quietly and speaking little.</p>

  <p>Rumours arose that they had become worshippers of the Gate, believing their rites kept it sealed.</p>
</div>


<div class="velis-book-page velis-book-page-left">
  <h3>Closing Observation</h3>

  <p>By the time the Sea Gate ceased to be remembered as a place of arrival and became simply another boundary, the Broken Lands had already begun to shape those who lived within them.</p>

  <p>The land revealed its structures slowly. The people adapted.</p>

  <p>And those things which could not be explained were, in time, lived alongside.</p>
</div>
  `
},

  "scroll-3": {
    kind: "scroll",
    image: "assets/velis/velis-scroll-3.webp",
    html: `
      <h2>Sealed Scroll</h2>
      <p>Its seal remains unbroken...</p>
    `
  }
};