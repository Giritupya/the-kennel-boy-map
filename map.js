// Interactive image map using Leaflet (CRS.Simple)
// Put your map image in the same folder and name it "world-map.webp"
const MAP_IMAGE = "world-map.webp";

// Your grid labels run 0..59 across and 0..59 down => 60 x 60 squares
const GRID_COLS = 60; // 0..59
const GRID_ROWS = 60; // 0..59

let map;

// Use grid: [col, row] using the printed map numbers (0-based: 0..59)
const locations = [
  {
    id: "rimeholt",
    name: "Rimeholt Keep",
    type: "keep",
    ref: "305305", // placeholder - use click tool to get exact
    description: "Setting: A stone keep raised upon a high shoulder of rock above the frostplain’s edge, its wind-scoured battlements watching land that never quite forgets what lies beneath. The kennels breathe below its walls, and its bells carry farther than they should.",
image: "assets/locations/rimeholt.webp"
  },
  {
    id: "deepenwood",
    name: "Deepenwood",
    type: "nature",
    ref: "285304", // placeholder - use click tool to get exact
    description: "A dense stretch of old forest where the light thins and sound carries strangely between the trunks. The trees grow close and tall, their roots twisting through damp earth and forgotten paths. It is a place of uneasy quiet — not hostile, but watchful — where the world feels older than the roads that cut through it.",
image: "assets/locations/deepenwood.webp"
  },
  {
    id: "ollwens-cottage",
    name: "Ollwen's Cottage",
    type: "Cottage",
    ref: "297286", // placeholder
    description: "A modest woodland dwelling set along a quiet forest track, lamplight warm against deep timber and leaf-shadow. Within its walls, counsel is given and roads begin to shift.",
image: "assets/locations/ollwens-cottage.webp"
  },
  {
    id: "greymoss-hollow",
    name: "Greymoss Hollow",
    type: "town",
    ref: "285256", // placeholder
    description: "Mist-heavy and close with damp, a place where firelight fights to feel welcoming. The tavern crackles and mutters, windows fogged like the world outside wants in — smoke, sour ale, wet wool, and the sense that everyone’s listening.",
image: "assets/locations/greymoss-hollow.webp"
  },
  {
    id: "breys-rescue",
    name: "Brey's Rescue",
    type: "town",
    ref: "276273", // placeholder
    description: "The shape was curled tight into the roots — tangled in them, almost grown into them. For a moment he thought it was part of the tree itself. Then he saw the shimmer of russet fur beneath the crust of lichen. The faintest rise and fall of breath.",
image: "assets/locations/breys-rescue.webp"
  },
  {
    id: "misty-foothills",
    name: "Misty Foothills",
    type: "town",
    ref: "279273", // placeholder
    description: "Mist-heavy and close with damp, a place where firelight fights to feel welcoming. The tavern crackles and mutters, windows fogged like the world outside wants in — smoke, sour ale, wet wool, and the sense that everyone’s listening.",
image: "assets/locations/misty-foothills.webp"
  },
  {
    id: "greymoss-hollow-ruins",
    name: "Greymoss Hollow Ruins",
    type: "town",
    ref: "265286", // placeholder
    description: "A bowl of ruin shrouded in fog — ash underfoot, silence overhead, and the feeling that the village wasn’t merely destroyed… it was emptied. Blackened beams, swallowed stone walls, and a well at the centre like an open mouth.",
image: "assets/locations/greymoss-hollow-ruin.webp"
  },
  {
    id: "hearthmere",
    name: "Hearthmere",
    type: "town",
    ref: "292241", // placeholder
    description: "A modest inland village built along a single east–west road that threads through open farmland and low hills. Stone and timber cottages stand close to the lane, their hearth smoke drifting gently above fields and hedgerows. It is a quiet stopping place on the road, where travellers pause, trade news, and pass on again.",
image: "assets/locations/hearthmere.webp"
  },
  {
    id: "vale-hallow",
    name: "Vale Hallow",
    type: "town",
    ref: "300238", // placeholder
    description: "A small valley settlement now reduced to a perfect ring of ruin, its cottages burned to blackened stumps and the ground within scorched smooth and glassy. Half-burned trees mark the boundary where the fire stopped as if cut by an unseen hand. The air is cold and still, carrying the faint, lingering tang of smoke from a fire that burned far hotter than any natural blaze.",
image: "assets/locations/vale-hallow.webp"
  },
  {
    id: "dextyns-rescue",
    name: "Dextyn's Rescue",
    type: "town",
    ref: "321231", // placeholder
    description: "Dextyn’s form loomed before him—a god of ruin, pain made manifest.",
image: "assets/locations/dextyns-rescue.webp"
  },
 {
    id: "greyharbour-rest",
    name: "Greyharbour Rest",
    type: "town",
    ref: "361211", // placeholder
    description: "A working town turned wary, the last solid “normal” Bram clings to for a while — kindness, faces, a few warm memories… and then the road out again. Beyond it, the southern way thins into older tracks and quieter places.",
image: "assets/locations/greyharbour-rest.webp"
  },
  {
    id: "horse-trader",
    name: "Horse Trader",
    type: "town",
   ref: "373174", // placeholder
    description: "Bram laid a hand against the horse’s warm neck. “Veyrun,” he said softly—the name rising unbidden to his tongue.",
image: "assets/locations/veyrun.webp"
  },
  {
    id: "ash-hollow",
    name: "Ash Hollow (Old Ruin / “nothing left but stone and stories”)",
    type: "town",
    ref: "331200", // placeholder
    description: "A name that still carries weight, even after the place itself is gone. They say it burned out years ago — and that when the wind turns, the ground remembers.",
image: "assets/locations/ash-hollow.webp"
  },
  {
    id: "estmere",
    name: "Estmere",
    type: "town",
    ref: "428140", // placeholder
    description: "A practical stop on the road — a place to buy what a journey demands: boots that don’t fall apart, a heavier coat, a cloak that sheds rain instead of drinking it in. Not glamour. Just survival.",
image: "assets/locations/estmere.webp"
  },
  {
    id: "caravan",
    name: "Caravan",
    type: "town",
    ref: "432182", // placeholder
    description: "That night, the road gave him company he hadn’t expected.",
image: "assets/locations/caravan.webp"
  },
{
    id: "barrow-hill",
    name: "Barrow Hill",
    type: "town",
   ref: "446205", // placeholder
    description: "A ruined rise on the ash plains, where fractured stone and wind-blown soot mark the bones of a town that did not survive its own history. Time feels thinner here, as if memory presses too close to the surface.",
image: "assets/locations/barrow-hill.webp"
  },
  {
    id: "fallen-archive",
    name: "The Scriptorium of Velis",
    type: "Library",
    ref: "456282", // placeholder
    description: "A collapsed mage library buried along the ash plains, its fractured halls holding the silence of unfinished thought. Knowledge lingers in its ruins, but not safely.",
image: "assets/locations/the-fallen-archive.webp" 
  },
{
    id: "brooke-haven",
    name: "Brooke Haven",
    type: "town",
    ref: "536213", // placeholder
    description: "A river settlement near the eastern reaches, set apart from the inland roads and closer to open water than to court or keep. It feels like the edge of something — a place where travel thins and the wider world begins.",
image: "assets/locations/brooke-haven.webp"
  },
  {
    id: "blackmere",
    name: "Blackmere",
    type: "town",
   ref: "506290", // placeholder
    description: "A coastal pull at the edge of the map — sea wind, gull-cry distance, and the feeling of “get there by nightfall.” It’s a place you reach because the road runs out… and the next choice is water."
  },
 {
    id: "capital",
    name: "Capital",
    type: "city",
    ref: "369449", // placeholder
    description: "A place where stories arrive before people do — and where Bram’s name can travel faster than he ever could. Power lives behind gates and in whispers, and the city doesn’t care whether a tale is true… only whether it spreads.",
image: "assets/locations/the-capital.webp"
  },
  { 
    id: "battle",
    name: "Battle",
    type: "city",
    ref: "466290", // placeholder
    description: "The Hollow loomed above Brey, ember-claws stretching down. Bram’s throat locked. He could do nothing—",
image: "assets/locations/hollow.webp"
  }
];

// === Chapter reveal list (minimal test) ===
const chapterReveals = {
  0: [],
  1: ["rimeholt"],
  2: ["rimeholt", "deepenwood"],
  3: ["rimeholt", "deepenwood", "ollwens-cottage"],
  4: ["rimeholt", "deepenwood", "ollwens-cottage"],
  5: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills"],
  6: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins"],
  7: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins"],
  8: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins"],
  9: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins"],
  10: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins"],
  11: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere"],
  12: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere"],
  13: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere"],
  14: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue"],
  15: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue"],
  16: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue"],
  17: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest"],
  18: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader"],
  19: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere"],
  20: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere"],
  21: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere"],
  22: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan"],
  23: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill"],
  24: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill"],
  25: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill"],
  26: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill", "fallen-archive"],
  27: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill", "fallen-archive"],
  28: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill", "fallen-archive"],
  29: ["rimeholt", "deepenwood", "ollwens-cottage", "greymoss-hollow", "misty-foothills", "breys-rescue", "greymoss-hollow-ruins", "hearthmere", "vale-hallow", "dextyns-rescue", "greyharbour-rest", "horse-trader", "ash-hollow", "estmere", "caravan","barrow-hill", "fallen-archive", "battle"],
};
function focusLocation(latlng, loc) {

  if (!map) return;

  const flyZoom = 0.6;
  const finalZoom = 1.2;

  map.flyTo(latlng, flyZoom, {
    animate: true,
    duration: 1.3
  });

  map.once("moveend", function () {
    map.flyTo(latlng, finalZoom, {
      animate: true,
      duration: 0.8
    });

    setTimeout(() => {
      setPanel(loc.name, loc.description, loc.image);
    }, 850);
  });

}

function renderPinsForChapter(chapter, imgW, imgH, markerLayer) {
  markerLayer.clearLayers();

  const allowed = new Set(chapterReveals[chapter] || []);

  locations.forEach((loc) => {
    if (!allowed.has(loc.id)) return;

    let latlng;

    if (loc.ref) {
      latlng = gridRefToLatLng(loc.ref, imgW, imgH);
    } else {
      latlng = gridToLatLng(loc.grid[0], loc.grid[1], imgW, imgH);
    }

    const marker = L.marker(latlng).addTo(markerLayer);

marker.on("mouseover", function () {
  const el = this.getElement();
  if (el) {
    el.style.filter = "drop-shadow(0 0 6px gold)";
    el.style.transition = "filter 0.15s ease";
    el.style.zIndex = "1000";
  }
});

marker.on("mouseout", function () {
  const el = this.getElement();
  if (el) {
    el.style.filter = "";
    el.style.zIndex = "";
  }
});
    if (loc.id === "fallen-archive") {
      marker.on("click", () => startVelisTransition());
    } else {
      marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`);
      marker.on("click", () => focusLocation(latlng, loc));
    }
  });
}

// Convert grid cell (col,row) to Leaflet image coords [y,x] centred in the cell
function gridToLatLng(col, row, imgW, imgH) {
  const cellW = imgW / GRID_COLS;
  const cellH = imgH / GRID_ROWS;

  const x = (col + 0.5) * cellW;
  const y = (row + 0.5) * cellH;

  return [y, x]; // Leaflet CRS.Simple uses [lat(y), lng(x)]
}
function gridRefToLatLng(gridRef, imgW, imgH) {
  const cellW = imgW / GRID_COLS;
  const cellH = imgH / GRID_ROWS;

  const ref = String(gridRef).padStart(6, "0");

  const col = parseInt(ref.slice(0, 2), 10);
  const east = parseInt(ref.slice(2, 3), 10);
  const row = parseInt(ref.slice(3, 5), 10);
  const north = parseInt(ref.slice(5, 6), 10);

  const x = (col * cellW) + (east / 10) * cellW;
  const y = (row * cellH) + (north / 10) * cellH;

  return [y, x];
}
function setPanel(title, text, image) {
  const panel = document.getElementById("infoPanel");
  const titleEl = document.getElementById("panelTitle");
  const textEl = document.getElementById("panelText");

  if (!panel) return;

  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;

  const existingImg = document.getElementById("panelImage");
  if (existingImg) existingImg.remove();

 if (image) {
  const img = document.createElement("img");
  img.id = "panelImage";
  img.src = image;
  img.loading = "lazy";
  img.decoding = "async";
  img.onload = () => img.classList.add("loaded");
  img.alt = title;
  img.style.width = "100%";
  img.style.marginTop = "16px";
  img.style.borderRadius = "16px";
  img.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  panel.appendChild(img);
}
}


/* =========================
   Velis transition helpers
   ========================= */

function freezeMapViewForTransition() {
  if (!map) return null;

  const imgW = 4096;
  const imgH = 4096;

  const zoom = map.getZoom();
  const scale = map.getZoomScale(zoom, 0); // 1 at zoom 0 in CRS.Simple
  const pxBounds = map.getPixelBounds();   // pixel bounds at current zoom

  return {
    imgW, imgH, scale,
    bgSize: `${imgW * scale}px ${imgH * scale}px`,
    bgPos: `${-pxBounds.min.x}px ${-pxBounds.min.y}px`,
  };
}

function startVelisTransition(){
  console.log("startVelisTransition fired ✅");

  const overlay = document.getElementById("velisTransition");
  const abyss = document.getElementById("velisAbyss");
  const front = document.getElementById("velisFront");
  const left  = document.getElementById("velisLeft");
  const right = document.getElementById("velisRight");

  if (!overlay || !front) return;

  // Hide the real map while transition runs
  document.body.classList.add("velis-running");

  // Freeze EXACT view (map + markers + panel) by cloning the DOM the user sees
  const liveWrap = document.querySelector(".map-wrap");
  if (liveWrap) {
    const clone = liveWrap.cloneNode(true);
    clone.id = "velisFrozen";
    clone.style.pointerEvents = "none";
    clone.style.width = "100%";
    clone.style.height = "100%";

    // Put the clone into the falling face
    front.innerHTML = "";
    front.appendChild(clone);

    // Make sure the face isn't using a background image anymore
    front.style.backgroundImage = "none";
  }

  // Disable map interaction while we run the sequence
  try {
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.touchZoom.disable();
  } catch (_) {}

  // Abyss image (briefly visible behind the falling plane)
  if (abyss) abyss.style.backgroundImage = `url('./assets/velis/abyss.webp')`;

  // Side tethers: still use the frozen background (NOT the front, which is now the DOM clone)
  const frozen = freezeMapViewForTransition();
  const paintStrip = (el) => {
    if (!el) return;
    if (frozen) {
      el.style.backgroundImage = `url('${MAP_IMAGE}')`;
      el.style.backgroundSize = frozen.bgSize;
      el.style.backgroundPosition = frozen.bgPos;
      el.style.backgroundRepeat = "no-repeat";
    } else {
      el.style.backgroundImage = `url('${MAP_IMAGE}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    }
  };
  paintStrip(left);
  paintStrip(right);

  // Kick off animations
  overlay.classList.add("on");

  requestAnimationFrame(() => {
    overlay.classList.add("run");
  });

  // Open doors once
  window.setTimeout(() => {
    overlay.classList.add("open");
  }, 5600);

  // Navigate
  window.setTimeout(() => {
    window.location.href = "velis.html";
  }, 11000);

}
window.addEventListener("DOMContentLoaded", async () => {
  // Load image to get dimensions
 

  const imgW = 4096;
const imgH = 4096;

  // Create map
  map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 2,
    zoomSnap: 0.25
  });

  // Define image bounds and add overlay
  const bounds = [[0, 0], [imgH, imgW]];
  L.imageOverlay(MAP_IMAGE, bounds).addTo(map);

  // Fit and lock bounds (prevents dragging off into empty space)
  map.fitBounds(bounds);
  map.setMaxBounds(bounds);
  map.setZoom(0);

  // Add markers from grid coordinates
   const markerLayer = L.layerGroup().addTo(map);
   renderPinsForChapter(0, imgW, imgH, markerLayer);


  // === CLICK-TO-GET-GRID TOOL (THIS IS THE NEW BIT) ===
  // Click anywhere on the map and it will show you the exact grid cell [col,row]
map.on("click", (e) => {
  const x = e.latlng.lng;
  const y = e.latlng.lat;

  const cellW = imgW / GRID_COLS;
  const cellH = imgH / GRID_ROWS;

  const col = Math.floor(x / cellW);
  const row = Math.floor(y / cellH);

  // position inside the square (0–9)
  const xRemainder = (x % cellW) / cellW;
  const yRemainder = (y % cellH) / cellH;

  const east = Math.floor(xRemainder * 10);
  const north = Math.floor(yRemainder * 10);

  // build 6-figure grid reference
  const grid6 = `${col}${east}${row}${north}`;

  const text = `grid: [${col}, ${row}] | ref: ${grid6}`;

  L.popup()
    .setLatLng(e.latlng)
    .setContent(`<b>${text}</b>`)
    .openOn(map);

  console.log(text, "pixels:", Math.round(x), Math.round(y));
});

  // === Chapter dropdown wiring (test only) ===
  const chapterSelect = document.getElementById("chapterSelect");
  if (chapterSelect) {
    chapterSelect.addEventListener("change", () => {
      const ch = parseInt(chapterSelect.value, 10) || 0;
      console.log("Chapter changed to:", ch);
      renderPinsForChapter(ch, imgW, imgH, markerLayer);
    });
  }

});
