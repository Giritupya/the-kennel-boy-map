const VELIS_RIGHT_SHELF = {
  "restricted-ledger": {
    kind: "book",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Restricted Ledger</h2>
        <p>
          A chained record of sealed entries, copied by later hands from sources
          no longer kept in public view.
        </p>
        <p>
          Marginal notes suggest that some sections were removed deliberately,
          not lost to age.
        </p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <h3>Archive Note</h3>
        <p>
          “Access denied except by leave of the chamber keeper, or in times
          when the old signs begin again.”
        </p>
        <p>
          Several names have been scratched out.
        </p>
      </div>
    `
  },

  "sealed-scroll": {
    kind: "scroll",
    image: "assets/velis/velis-scroll-3.webp",
    html: `
      <h2>Sealed Scroll</h2>
      <p>
        A tightly wound scroll wrapped in dark cord. The seal is cracked,
        but not fully broken.
      </p>
      <p>
        Only a few lines are visible beneath the fold, each written in a hand
        more careful than hurried.
      </p>
    `
  },

  "damaged-codex": {
    kind: "book",
    pages: `
      <div class="velis-book-page velis-book-page-left">
        <h2>Damaged Codex</h2>
        <p>
          Much of this volume has been stained by damp and smoke, leaving whole
          passages blurred into near-illegibility.
        </p>
        <p>
          Yet certain phrases remain unnervingly clear, as though the damage
          chose what to spare.
        </p>
      </div>

      <div class="velis-book-page velis-book-page-right">
        <h3>Recovered Line</h3>
        <p>
          “What is buried is not always sleeping. What is watched is not always bound.”
        </p>
      </div>
    `
  },

  "prelude-fragment": {
    kind: "scroll",
    image: "assets/velis/velis-scroll-2.webp",
    html: `
      <h2>Prelude Fragment</h2>
      <p>
        A torn fragment from an older record, preserved only because it was folded
        into the back of another manuscript.
      </p>
      <p>
        The surviving lines speak of a fire beneath roots, and of those who swore
        to remain when others fled.
      </p>
    `
  }
};