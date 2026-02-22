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
    grid: [30, 30], // placeholder - use click tool to get exact
    description: "Setting: A stone keep raised upon a high shoulder of rock above the frostplain’s edge, its wind-scoured battlements watching land that never quite forgets what lies beneath. The kennels breathe below its walls, and its bells carry farther than they should.",
image: "assets/locations/rimeholt.webp"
  },
 {
    id: "Greyharbour Rest",
    name: "Greyharbour Rest",
    type: "town",
    grid: [35, 20], // placeholder
    description: "A working town turned wary, the last solid “normal” Bram clings to for a while — kindness, faces, a few warm memories… and then the road out again. Beyond it, the southern way thins into older tracks and quieter places.",
image: "assets/locations/Greyharbour-Rest.webp"
  },
{
    id: "Barrow Hill",
    name: "Barrow Hill",
    type: "town",
    grid: [44, 20], // placeholder
    description: "A ruined rise on the ash plains, where fractured stone and wind-blown soot mark the bones of a town that did not survive its own history. Time feels thinner here, as if memory presses too close to the surface.",
image: "assets/locations/Barrow-Hill.webp"
  },
{
    id: "Brooke Haven",
    name: "Brooke Haven",
    type: "town",
    grid: [53, 21], // placeholder
    description: "A river settlement near the eastern reaches, set apart from the inland roads and closer to open water than to court or keep. It feels like the edge of something — a place where travel thins and the wider world begins.",
image: "assets/locations/Brooke-Haven.webp"
  },
{
    id: "Ash Hollow",
    name: "Ash Hollow (Old Ruin / “nothing left but stone and stories”)",
    type: "town",
    grid: [31, 20], // placeholder
    description: "A name that still carries weight, even after the place itself is gone. They say it burned out years ago — and that when the wind turns, the ground remembers.",
image: "assets/locations/Ash-Hollow.webp"
  },
{
    id: "Greymoss Hollow (New Village)",
    name: "Greymoss Hollow",
    type: "town",
    grid: [28, 25], // placeholder
    description: "Mist-heavy and close with damp, a place where firelight fights to feel welcoming. The tavern crackles and mutters, windows fogged like the world outside wants in — smoke, sour ale, wet wool, and the sense that everyone’s listening.",
image: "assets/locations/Greymoss-Hollow.webp"
  },
{
    id: "Greymoss Hollow (Old Ruins)",
    name: "Greymoss Hollow",
    type: "town",
    grid: [26, 28], // placeholder
    description: "A bowl of ruin shrouded in fog — ash underfoot, silence overhead, and the feeling that the village wasn’t merely destroyed… it was emptied. Blackened beams, swallowed stone walls, and a well at the centre like an open mouth.",
image: "assets/locations/Greymoss-Ruin.webp"
  },
{
    id: "Ollwen's Cottage",
    name: "Ollwen's Cottage",
    type: "Cottage",
    grid: [29, 28], // placeholder
    description: "A modest woodland dwelling set along a quiet forest track, lamplight warm against deep timber and leaf-shadow. Within its walls, counsel is given and roads begin to shift.",
image: "assets/locations/Ollwens-Cottage.webp"
  },
  {
    id: "blackmere",
    name: "Blackmere",
    type: "town",
    grid: [50, 28], // placeholder
    description: "A coastal pull at the edge of the map — sea wind, gull-cry distance, and the feeling of “get there by nightfall.” It’s a place you reach because the road runs out… and the next choice is water."
  },
{
    id: "estmere",
    name: "Estmere",
    type: "town",
    grid: [42, 13], // placeholder
    description: "A practical stop on the road — a place to buy what a journey demands: boots that don’t fall apart, a heavier coat, a cloak that sheds rain instead of drinking it in. Not glamour. Just survival.",
image: "assets/locations/Estmere.webp"
  },
{
    id: "fallenarchive",
    name: "The Scriptorium of Velis",
    type: "Library",
    grid: [45, 27], // placeholder
    description: "A collapsed mage library buried along the ash plains, its fractured halls holding the silence of unfinished thought. Knowledge lingers in its ruins, but not safely.",
image: "assets/locations/The-Fallen-Archive.webp" 
  },
 {
    id: "capital",
    name: "Capital",
    type: "city",
    grid: [36, 44], // placeholder
    description: "A place where stories arrive before people do — and where Bram’s name can travel faster than he ever could. Power lives behind gates and in whispers, and the city doesn’t care whether a tale is true… only whether it spreads.",
image: "assets/locations/The-Capital.webp"
  }
];

// Convert grid cell (col,row) to Leaflet image coords [y,x] centred in the cell
function gridToLatLng(col, row, imgW, imgH) {
  const cellW = imgW / GRID_COLS;
  const cellH = imgH / GRID_ROWS;

  const x = (col + 0.5) * cellW;
  const y = (row + 0.5) * cellH;

  return [y, x]; // Leaflet CRS.Simple uses [lat(y), lng(x)]
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
  if (abyss) abyss.style.backgroundImage = `url('assets/velis/abyss.webp')`;

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
  locations.forEach((loc) => {
  const latlng = gridToLatLng(loc.grid[0], loc.grid[1], imgW, imgH);

  const marker = L.marker(latlng).addTo(map);

  // Normal pins show the info panel + popup.
  // Fallen Archive triggers the Velis transition instead.
  if (loc.id === "fallenarchive") {
    marker.on("click", () => startVelisTransition());
  } else {
    marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`);
    marker.on("click", () => {
      setPanel(loc.name, loc.description, loc.image);
    });
  }
});

  // === CLICK-TO-GET-GRID TOOL (THIS IS THE NEW BIT) ===
  // Click anywhere on the map and it will show you the exact grid cell [col,row]
  map.on("click", (e) => {
    const x = e.latlng.lng;
    const y = e.latlng.lat;

    const cellW = imgW / GRID_COLS;
    const cellH = imgH / GRID_ROWS;

    const col = Math.floor(x / cellW);
    const row = Math.floor(y / cellH);

    const text = `grid: [${col}, ${row}]`;

    L.popup()
      .setLatLng(e.latlng)
      .setContent(`<b>${text}</b>`)
      .openOn(map);

    console.log(text, "pixels:", Math.round(x), Math.round(y));
  });
});
