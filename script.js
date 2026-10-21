const stories = [
  { id: 1, title: 'The Silent Echo', author: 'Alex Vance', genre: 'Sci-Fi', cover: 'cover1.svg', synopsis: 'A mysterious signal from deep space forces an isolated astronaut to confront echoes of his past.', chapter: 'The First Signal', paragraphs: ['The control panel blinked with a rhythm that was not coded into any human system. Captain Mercer leaned over the console as the life-support hum filled the cockpit. Beyond the glass, the stars were sharp and cold.', 'The signal repeated three notes he had heard in a childhood recording. He answered with the old melody. Somewhere in the darkness, a blue light pulsed back. For the first time in months, the silence felt less like being alone.'] },
  { id: 2, title: 'Shadows of the Citadel', author: 'E. R. Thorne', genre: 'Fantasy', cover: 'cover2.svg', synopsis: 'An orphaned apprentice discovers an ancient spell capable of reshaping the kingdom.', chapter: 'The Last Lantern', paragraphs: ['Mara found the spell beneath a loose stone in the citadel library, written in ink that shimmered like moonlight. The words were not a weapon, as the royal scholars claimed, but a promise: the kingdom could become whatever its people dared to imagine.', 'At midnight, she climbed the tower and read the spell aloud. Every lantern in the city flared to life. From the streets below rose thousands of voices, and the old citadel finally opened its gates.'] },
  { id: 3, title: 'Letters in the Rain', author: 'Sophie Lane', genre: 'Romance', cover: 'cover3.svg', synopsis: 'Two strangers keep finding the same unsigned letters tucked beneath a station bench.', chapter: 'An Umbrella for Two', paragraphs: ['Nora found the first letter on a rainy Tuesday, folded beneath the bench at Bell Street station. It spoke of a small joy: warm bread, wet pavement, and the courage to begin again. Every week, a new note appeared.', 'When she arrived early to leave a reply, someone was already waiting with a red umbrella. They read each other’s words between passing trains, smiling as the rain softened to a drizzle. Neither hurried to catch the next one.'] },
  { id: 4, title: 'The Clockmaker’s Secret', author: 'M. J. Bell', genre: 'Mystery', cover: 'cover4.svg', synopsis: 'A young apprentice finds a hidden message inside the town clock that stopped at midnight.', chapter: 'Twelve Strikes', paragraphs: ['The clock had been still for twenty years, its hands fixed at twelve. When apprentice Kit opened the brass casing, a folded map slipped between the gears. Each mark matched a place in the town—and each place held a piece of the missing clockmaker’s story.', 'The final mark led Kit back to the tower. Inside the bell, they found a letter addressed to the whole town, explaining why the clock had stopped: its maker had been waiting for everyone to learn how to listen to one another.'] },
  { id: 5, title: 'Beyond the Map', author: 'Jordan Wells', genre: 'Adventure', cover: 'cover5.svg', synopsis: 'A curious cartographer sails beyond the edge of every map in search of a vanished island.', chapter: 'Where the Ink Ends', paragraphs: ['Every map in the harbor ended at the same blank stretch of blue. Lina packed her compass, her grandfather’s journal, and a stubborn little sailboat, then headed past the final inked coastline.', 'On the seventh morning, a green island rose from the mist. Its beaches were covered in shells shaped like tiny stars. Lina drew the first line on a new map and left the rest of the page open for whoever came next.'] },
  { id: 6, title: 'The Last Transmission', author: 'Theo Mercer', genre: 'Sci-Fi', cover: 'cover6.svg', synopsis: 'A radio operator on Mars receives a message that seems to come from Earth’s future.', chapter: 'A Voice at Dawn', paragraphs: ['The radio was meant to be silent during the storm, but at dawn it crackled awake. “Do not launch at noon,” said a voice that sounded exactly like Ilya’s—older, tired, and afraid.', 'The crew held their launch. At noon, the red horizon split with a wall of dust that swallowed the landing field. That evening, Ilya recorded a message for the next watch. He began with the words he wished someone had told him: wait until morning.'] },
  { id: 7, title: 'A Garden of Stars', author: 'Nina Vale', genre: 'Sci-Fi', cover: 'cover7.svg', synopsis: 'A botanist on a quiet moon coaxes a garden to bloom beneath an unfamiliar sky.', chapter: 'First Bloom', paragraphs: ['The moon dust resisted every seed until Sera mixed it with water from the old ice cave. Then one pale shoot appeared, turning its leaves toward a sky with two small suns.', 'By the next week, the greenhouse was full of silver flowers. Their gentle glow reached the observation window, where the station crew gathered after long shifts. For a little while, the distant moon felt like a home they had made together.'] },
  { id: 8, title: 'Signal from Europa', author: 'C. R. Hale', genre: 'Sci-Fi', cover: 'cover8.svg', synopsis: 'A deep-sea drone discovers a repeating pattern beneath Europa’s frozen ocean.', chapter: 'Below the Ice', paragraphs: ['The drone’s camera caught a row of lights moving beneath the ice, too steady to be drifting crystals. Engineer Dev traced the pattern and realized it matched the rhythm of the station’s beacon.', 'He sent one pulse back. The lights gathered into a bright circle, then slowly parted to reveal a clear path into the deep. Dev leaned toward the screen, certain that somewhere below, something had been waiting for an answer.'] },
  { id: 9, title: 'Tomorrow’s Archive', author: 'Lena Park', genre: 'Sci-Fi', cover: 'cover9.svg', synopsis: 'A librarian finds a book that records the choices her city has not yet made.', chapter: 'Unwritten Pages', paragraphs: ['The library’s new book had no title, only pages that filled themselves whenever the city made a difficult choice. Its latest lines described a flood, a closed bridge, and a child left waiting on the wrong side.', 'Librarian Jo ran through the rain and found the child exactly where the book said. Together, they opened the old footpath and led a dozen neighbors home. When Jo returned, the final page was blank again.'] },
  { id: 10, title: 'The Ember Crown', author: 'Rowan Ash', genre: 'Fantasy', cover: 'cover10.svg', synopsis: 'A village baker learns the glowing stone in her oven is the lost crown of an ancient queen.', chapter: 'A Crown of Warmth', paragraphs: ['The stone in Elian’s oven glowed brighter each time she shared a loaf with someone hungry. By market day, it shone like a small sun. The village elder recognized it as the Ember Crown, lost when the old queen vanished.', 'Elian refused the throne. Instead, she placed the crown above the bakery door, where its warmth reached the entire square. The people chose their leaders together, and the bread never ran out.'] },
  { id: 11, title: 'The Fox and the Moonwell', author: 'A. Wren', genre: 'Fantasy', cover: 'cover11.svg', synopsis: 'A clever fox follows a moonlit trail to a well that grants one wish to the forest.', chapter: 'One Wish', paragraphs: ['When the Moonwell appeared between the pines, every creature brought a wish. The fox listened as they argued over who deserved it most, while the water reflected a sky without a single star.', 'The fox wished for the stars to return. Light scattered across the water, and the forest grew quiet with wonder. The well vanished by morning, but the path home was bright enough for every traveler.'] },
  { id: 12, title: 'The Wandering Library', author: 'Mina Corin', genre: 'Fantasy', cover: 'cover12.svg', synopsis: 'A bookshop appears in a new forest clearing whenever someone needs the right story.', chapter: 'The Book That Found Her', paragraphs: ['A wooden bookshop stood in the clearing where Tavi had lost her way. Its keeper offered no map, only a book with a blank green cover. The moment Tavi opened it, the pages described the trail she had forgotten.', 'She followed the story back to her village. Before she left, Tavi returned the book to its shelf. The shop gave a quiet creak, lifted its roots from the ground, and set off toward someone else who needed a little guidance.'] },
  { id: 13, title: 'The Dragon’s Promise', author: 'P. L. Rowan', genre: 'Fantasy', cover: 'cover13.svg', synopsis: 'A young dragon keeper must decide whether an old promise still protects the valley.', chapter: 'The Valley Below', paragraphs: ['The dragon had guarded the valley for centuries, but the river was drying and the people had begun to leave. Keeper Fen found the old promise carved into the mountain: the dragon would protect the valley as long as the valley protected its river.', 'Fen brought the villagers to clear the spring of fallen stone. The dragon joined them, lifting boulders with careful claws. When water rushed down the mountain, the promise felt new again.'] },
  { id: 14, title: 'The Blue Hour Cafe', author: 'Amelia Hart', genre: 'Romance', cover: 'cover14.svg', synopsis: 'A quiet cafe pianist and a night-shift baker discover they share a favorite song.', chapter: 'One More Song', paragraphs: ['At closing time, Eli played the same piano melody for an empty room. One night, a baker from the shop next door paused in the doorway, flour on her sleeves, and hummed the next line.', 'After that, Mara brought warm pastries and Eli saved the last song for her. They never planned a grand confession. One evening, when the final note faded, they simply stayed at the piano together until the blue hour became morning.'] },
  { id: 15, title: 'Postcards from June', author: 'Clara Finch', genre: 'Romance', cover: 'cover15.svg', synopsis: 'A seaside bookseller receives postcards from a traveler who has never signed their name.', chapter: 'The Return Address', paragraphs: ['Every summer, June received postcards of places she had never seen: a mountain train, a crowded market, a field of sunflowers. The handwriting was familiar, though no name appeared.', 'The last card showed her own bookshop, photographed from across the street. A traveler stood at the door holding a postcard. June stepped outside, and the writer finally introduced himself: her childhood friend, home at last.'] },
  { id: 16, title: 'The Borrowed Scarf', author: 'Mira Ellis', genre: 'Romance', cover: 'cover16.svg', synopsis: 'A forgotten scarf passes between two commuters, bringing them together on the coldest morning.', chapter: 'A Small Return', paragraphs: ['A blue scarf slipped from the train seat just as the doors closed. Sam carried it to the station lost-and-found, but the next morning it was wrapped around the rail with a note: “You looked colder than I did.”', 'For a week, the scarf appeared wherever Sam needed it, each time with a new little note. On Friday, he waited by the rail with two cups of cocoa. The stranger arrived, smiled, and finally asked his name.'] },
  { id: 17, title: 'Under the Lemon Tree', author: 'Lily Moreno', genre: 'Romance', cover: 'cover17.svg', synopsis: 'Two neighbors restore a courtyard and find the courage to begin again.', chapter: 'The Courtyard', paragraphs: ['The courtyard lemon tree had not borne fruit in years. Rosa trimmed the dead branches while her new neighbor, Ben, repaired the cracked fountain. They worked without talking, sharing tools and the occasional cup of tea.', 'By spring, white blossoms covered the branches. Rosa found a lemon on her doorstep, bright and fragrant, with a note asking if she would like to share it in the garden. She brought a knife, two plates, and a smile.'] },
  { id: 18, title: 'The Missing Hour', author: 'M. J. Bell', genre: 'Mystery', cover: 'cover18.svg', synopsis: 'Every clock in town skips the same hour, and a curious student decides to find out why.', chapter: 'At 3:17', paragraphs: ['At exactly 3:17, every clock in Bellweather jumped forward by one hour. The school’s newest student, Inez, compared the town’s timepieces and found they all had one tiny gear stamped with the same initials.', 'Those initials belonged to a retired watchmaker who had hidden a message in the bell tower. He had built the clocks to remind the town of a lost anniversary. That evening, the whole square gathered to celebrate it together.'] },
  { id: 19, title: 'The Glasshouse Key', author: 'R. D. Finch', genre: 'Mystery', cover: 'cover19.svg', synopsis: 'A locked greenhouse and a brass key lead a gardener to a secret kept for generations.', chapter: 'The Unlocked Door', paragraphs: ['The brass key was tucked inside a cracked flowerpot, polished despite years of dust. It opened the old glasshouse at the edge of the estate, where a single thriving vine curled around the empty shelves.', 'Gardener Mae followed the vine to a loose floorboard and found a bundle of letters from the family who once lived there. The letters asked that the greenhouse be given to the town. Mae planted the first community seeds before sunset.'] },
  { id: 20, title: 'Footprints at Dawn', author: 'Jonas Reed', genre: 'Mystery', cover: 'cover20.svg', synopsis: 'Fresh footprints appear each morning in a lighthouse that has been empty for years.', chapter: 'The Lightkeeper', paragraphs: ['The footprints began at the lighthouse door and stopped beneath the lamp. No one lived there, yet each morning the keeper found the dusty floor marked with a trail of bare feet.', 'On the seventh dawn, she stayed through the night. A young seal had slipped through a broken window and climbed the stairs, following the beam. Together they repaired the window and guided the animal safely back to the shore.'] },
  { id: 21, title: 'The Portrait in Room Nine', author: 'Nora Quill', genre: 'Mystery', cover: 'cover21.svg', synopsis: 'A hotel portrait changes its expression whenever a guest solves one of its riddles.', chapter: 'A Face in the Frame', paragraphs: ['The portrait in room nine wore a different expression each morning. This time, it was smiling at a note tucked behind the frame: a riddle about a name that had vanished from the hotel records.', 'Guest Ada searched the old ledger and found the forgotten name of the hotel’s first housekeeper. When she spoke it aloud, the painted figure relaxed. The manager added the name to the lobby wall, where it belonged all along.'] },
  { id: 22, title: 'The Island of Quiet Maps', author: 'Jordan Wells', genre: 'Adventure', cover: 'cover22.svg', synopsis: 'An explorer follows a map that only reveals its landmarks when the world grows quiet.', chapter: 'Listen to the Shore', paragraphs: ['The map showed nothing during the noisy crossing. When the boat reached a quiet cove, silver lines appeared: a waterfall, a narrow pass, and a small grove above the beach.', 'Explorer Niko walked without speaking and found each landmark. At the grove, the map revealed one final mark: a place to sit and watch the waves. He understood then that the island had not been hiding treasure; it had been teaching him how to notice.'] },
  { id: 23, title: 'The Mountain Post', author: 'S. K. Rivers', genre: 'Adventure', cover: 'cover23.svg', synopsis: 'A new courier must deliver a letter across the mountain before the winter road closes.', chapter: 'The High Pass', paragraphs: ['The letter was sealed with red wax and addressed to a village beyond the high pass. Courier Anya set out at first light, following a trail that narrowed between walls of snow.', 'At the ridge, the weather cleared long enough to reveal the village below. The letter carried news that the spring bridge had been repaired, and the villagers were waiting on the far side with a lantern. Anya arrived just before dusk.'] },
  { id: 24, title: 'River of Lanterns', author: 'Kai Morgan', genre: 'Adventure', cover: 'cover24.svg', synopsis: 'A young boat builder joins a festival voyage to return a lantern to its mountain source.', chapter: 'The River’s Beginning', paragraphs: ['Every year, lanterns floated down the river toward the sea. This year, apprentice Bo noticed one traveling upstream, against the current, its flame steady in the wind.', 'Bo followed it by boat until the river narrowed to a mountain spring. There, an old villager explained that the lantern carried a wish to see its birthplace once more. Bo tied it safely to the bank and watched its light dance on the water.'] },
  { id: 25, title: 'The Compass of Clouds', author: 'Tess Wilder', genre: 'Adventure', cover: 'cover25.svg', synopsis: 'A broken compass points toward the one place a daring pilot has never dared to go.', chapter: 'Above the Storm', paragraphs: ['The compass needle spun wildly until pilot Ren flew above the clouds. Then it pointed straight toward a bright patch in the storm, where no chart showed a safe path.', 'Ren trusted the clear blue beyond the clouds and guided the small plane through. On the other side lay a chain of islands hidden by weather for generations. She marked them carefully, then shared the route with every pilot who followed.'] },
  { id: 26, title: 'The Starlit Station', author: 'Alex Vance', genre: 'Sci-Fi', cover: 'cover26.svg', synopsis: 'A station caretaker keeps a promise to light a signal for travelers lost between worlds.', chapter: 'Keep the Beacon', paragraphs: ['The station beacon was scheduled to shut down at midnight, but caretaker Sol saw a tiny ship drifting far beyond its reach. Its navigation light flashed once, then disappeared.', 'Sol restarted the beacon by hand. The ship found its way to the station just before dawn, carrying a family who had been lost for three days. When the crew asked why the light was still burning, Sol pointed to the stars and said someone might need it tomorrow.'] },
  { id: 27, title: 'The Paper Phoenix', author: 'E. R. Thorne', genre: 'Fantasy', cover: 'cover27.svg', synopsis: 'A folded paper bird comes alive and leads a shy student toward a forgotten library.', chapter: 'Wings of Ink', paragraphs: ['The paper phoenix lifted itself from the desk when the final bell rang. It circled the classroom and flew down a hallway that had been walled off for years. Lio followed, carrying a lantern.', 'Beyond the old door waited a library filled with books no one had read. The phoenix settled on the first open page, where a story began with Lio’s name. He smiled, pulled up a chair, and started reading aloud.'] },
  { id: 28, title: 'When the Sea Glass Shines', author: 'Sophie Lane', genre: 'Romance', cover: 'cover28.svg', synopsis: 'Two beachcombers leave sea glass on the same windowsill until a note finally appears.', chapter: 'Green Glass', paragraphs: ['Each morning, June found a smooth piece of sea glass on her windowsill. She left a shell in its place. The exchange went on through summer, a quiet conversation with someone she had never seen.', 'One evening she left a note beside the green glass: “Would you like to walk the shore?” At sunset, her neighbor from the blue house appeared with a pocket full of shells. They walked until the tide turned silver.'] },
  { id: 29, title: 'The Mapmaker’s Lantern', author: 'M. J. Bell', genre: 'Mystery', cover: 'cover29.svg', synopsis: 'A lantern casts a different shadow each night, revealing a hidden street on the town map.', chapter: 'The Street That Wasn’t', paragraphs: ['Mapmaker Ellis noticed that the lantern’s shadow fell in a new direction each night. He traced it onto the town plan and discovered a narrow street that had been erased from every map.', 'At the end of the hidden lane stood a little school, still full of drawings and letters. The town restored the lane and turned the school into a place for everyone to make maps of the places they hoped to find.'] },
  { id: 30, title: 'A Thousand Small Miles', author: 'Jordan Wells', genre: 'Adventure', cover: 'cover30.svg', synopsis: 'A girl walks the old postal road to reunite a collection of undelivered letters with their owners.', chapter: 'The Long Way Home', paragraphs: ['Milo found a canvas mailbag in the attic, still full of letters that had never reached their destinations. The addresses belonged to villages along the old postal road, a route no one walked anymore.', 'She carried the bag from town to town. Some letters brought laughter, others tears, but every recipient welcomed the news. At the road’s end, Milo mailed one last letter to herself, thanking the journey for showing her how many ways home could feel.'] }
];

const chapterAdditions = {
  1: 'Mercer saved the three notes in the ship’s log, beside the old recording he had almost forgotten. He played them once more before sleep, wondering whether the distant light had recognized the melody—or had been waiting for him to remember it.',
  2: 'At sunrise, Mara returned to the library and found the moonlit words fading from the page. She copied what she could into a new book, leaving space for the people of the city to add their own hopes.',
  3: 'On the next rainy Tuesday, Nora brought a second umbrella and left it beside the bench. When the train doors opened, the stranger was there again, holding two cups of warm tea and a fresh blank letter.',
  4: 'Kit carried the letter downstairs and read it aloud in the square. Neighbors who had barely spoken began sharing what they remembered, and by evening the clock tower was filled with voices instead of ticking.',
  5: 'That night, Lina camped beneath the island’s palms and listened to waves roll over the unfamiliar shore. In the morning, she added the island to her chart, careful to mark the safe passage for the next traveler.',
  6: 'Before the next storm, Ilya checked every instrument twice and left the warning beside the radio. When the crew asked how he had known, he only looked toward Earth and wondered how far a voice could travel through time.',
  7: 'Sera began keeping a small notebook beside the greenhouse door, inviting each crewmate to record what the flowers reminded them of. Their entries filled the pages with memories of gardens they had left behind and dreams of the one they were growing.',
  8: 'Dev kept the drone hovering at the edge of the opening, sending a gentle pulse every few minutes. Each time, the lights below answered, steady and patient, while the crew gathered to watch the first conversation their station had ever shared with the ocean.',
  9: 'The child later returned to the library with a drawing of the new footpath. Jo slipped it into the mysterious book, but its pages stayed blank, as if the city had earned a chance to choose its next story for itself.',
  10: 'By morning, people had brought flour, fruit, and stories to the square. Elian baked while her neighbors worked beside her, and the crown glowed softly above the door, brightened by a kindness no ruler could claim alone.',
  11: 'The fox followed the returning starlight through the pines, pausing whenever another traveler needed help along the path. By dawn, every creature had found its way home, and the Moonwell’s quiet gift seemed to shine in every clearing.',
  12: 'Tavi reached the village just as the evening lamps were lit. She told everyone about the wandering shop, but when they returned to the clearing, there was only a green leaf on the ground—and a trail leading deeper into the woods.',
  13: 'Fen watched the river reach the fields and saw the villagers fill their cups together. The dragon settled on the ridge above them, no longer guarding from a distance but keeping watch over a valley that had learned to care for itself.',
  14: 'The next evening, Eli left the cafe door unlocked a little longer, and Mara arrived with a fresh tray from the bakery. This time, she played the melody while he listened, and the room felt like a place they had made together.',
  15: 'They spent the afternoon inside the bookshop, trading stories about the years they had been apart. Before he left, her friend promised there would be no more unsigned postcards—unless he was sending one from just around the corner.',
  16: 'Sam and the stranger walked to the platform together, the blue scarf resting between them. When the next train arrived, neither rushed aboard; they decided there was time for another cocoa before either had to go.',
  17: 'They planted the lemon seeds in the courtyard and set a small table beside the fountain. Neighbors began stopping by with spare pots and stories, and soon the quiet space felt welcoming even before the tree bore fruit again.',
  18: 'Inez watched the restored clock strike the right hour as people gathered beneath the tower. The retired watchmaker stood beside her, smiling at the sound, while the town made a new tradition of remembering what had once been overlooked.',
  19: 'Mae wrote the greenhouse’s opening hours on a board and left a basket of seeds by the door. By the following week, children and elders were planning rows together, turning the old estate’s secret into a shared beginning.',
  20: 'The keeper left a shallow bowl of water and a small lamp beside the repaired window. At dawn, the seal returned to the rocks below, and a trail of wet flipper marks led back to the waves.',
  21: 'Ada copied the housekeeper’s name into the guest ledger, where it would greet everyone who stayed in room nine. The portrait held its gentle expression after that, no longer waiting for someone to remember.',
  22: 'Before leaving, Niko drew the quiet grove on the map and marked it with no name, only a small wave. He carried the page home folded in his pocket, ready to unfold it whenever the world grew too loud.',
  23: 'Anya warmed her hands by the village lantern and watched the snow settle along the pass. The villagers offered her a place by the fire, and she stayed long enough to hear how the repaired bridge had brought their families together again.',
  24: 'Bo waited by the spring until the lantern’s flame steadied in the dawn breeze. Then he set off downstream, carrying the story of its journey so the festival would remember where every light began.',
  25: 'Ren returned with fresh charts and a promise to guide other pilots through the safe passage. The hidden islands were no longer a rumor whispered among crews; they became a destination reached by those willing to look beyond the storm.',
  26: 'Sol added a note to the station log: keep the beacon ready, even on quiet nights. Outside, the family’s ship rested safely in the hangar, its small navigation light blinking in time with the signal that had brought them home.',
  27: 'Lio returned the next day with classmates, each carrying a book they had found at home. They read to one another until the lantern burned low, while the paper phoenix perched above them like a promise that every story could find new wings.',
  28: 'The next morning, June placed a jar on the windowsill for their shells and sea glass. Her neighbor added a note with two names on it, and soon they were meeting there each day before walking down to the shore.',
  29: 'Ellis drew the restored lane in bright ink and placed copies of the new map around town. People began adding their own favorite corners, and the old school filled with drawings of places that had mattered to them.',
  30: 'At home, Milo placed the old mailbag by the door, ready for any letter that needed carrying. She kept her own reply in a drawer, a reminder that the long road had delivered more than messages—it had helped her recognize where she belonged.'
};

stories.forEach(story => {
  story.cover = `cover${story.id}.svg`;
});

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function getStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    return [];
  }
}

function createBookCard(story, showBookmark) {
  const bookmark = showBookmark
    ? `<button class="bookmark-btn" data-id="${story.id}" type="button" title="Save to Library" aria-label="Save ${escapeHTML(story.title)} to library">🔖</button>`
    : '';
  const synopsis = showBookmark
    ? `<button class="toggle-synopsis-btn" type="button" aria-expanded="false">Show Synopsis</button>
       <p class="synopsis hidden">${escapeHTML(story.synopsis)}</p>`
    : '';
  return `
    <article class="book-card${showBookmark ? '' : ' recent-book-card'}" data-id="${story.id}" data-genre="${escapeHTML(story.genre)}" data-title="${escapeHTML(story.title)}" data-author="${escapeHTML(story.author)}">
      <div class="book-cover-wrapper">
        <img src="images/${story.cover}?v=8" alt="Cover artwork for ${escapeHTML(story.title)}" class="book-cover" loading="lazy">
        ${bookmark}
      </div>
      <div class="book-info">
        <span class="genre-tag">${escapeHTML(story.genre)}</span>
        <h4>${escapeHTML(story.title)}</h4>
        <p class="author">By ${escapeHTML(story.author)}</p>
        ${synopsis}
        <a href="story1.html?id=${story.id}" class="read-btn" data-id="${story.id}">Read Story</a>
      </div>
    </article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('storyTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
  if (themeToggleBtn) {
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
      localStorage.setItem('storyTheme', isDark ? 'dark' : 'light');
    });
  }

  const bookGrid = document.getElementById('book-grid');
  const isCatalogPage = Boolean(bookGrid);
  if (isCatalogPage) {
    bookGrid.innerHTML = stories.map(story => createBookCard(story, true)).join('');
    const cards = Array.from(bookGrid.querySelectorAll('.book-card'));
    const navHome = document.getElementById('nav-home');
    const navRecent = document.getElementById('nav-recent');
    const navGenres = document.getElementById('nav-genres');
    const navLibrary = document.getElementById('nav-library');
    const hero = document.getElementById('hero-section');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const genreFilter = document.getElementById('genre-filter-container');
    const recentSection = document.getElementById('recent-section');
    const recentGrid = document.getElementById('recent-grid');
    const emptyRecent = document.getElementById('empty-recent');
    const catalogTitle = document.getElementById('catalog-title');
    const emptyLibrary = document.getElementById('empty-library');
    const noResults = document.getElementById('no-results');
    let activeGenre = 'all';
    let currentView = 'home';

    const savedStories = new Set(getStoredArray('savedStories').map(String));
    function updateBookmarks() {
      bookGrid.querySelectorAll('.bookmark-btn').forEach(button => {
        const saved = savedStories.has(button.dataset.id);
        button.textContent = saved ? '❤️' : '🔖';
        button.classList.toggle('saved', saved);
        button.setAttribute('aria-label', `${saved ? 'Remove' : 'Save'} ${button.closest('.book-card').dataset.title} ${saved ? 'from' : 'to'} library`);
      });
    }

    function updateCatalog() {
      const query = searchInput.value.trim().toLowerCase();
      const recentIds = new Set(getStoredArray('recentStories').map(item => String(item.id)));
      const sortKey = sortSelect.value;
      const sortedCards = [...cards];
      if (sortKey !== 'featured') {
        const [field, direction] = sortKey.split('-');
        sortedCards.sort((a, b) => {
          const comparison = a.dataset[field].localeCompare(b.dataset[field], undefined, { sensitivity: 'base' });
          return direction === 'desc' ? -comparison : comparison;
        });
      }
      bookGrid.append(...sortedCards);
      let visibleCount = 0;
      sortedCards.forEach(card => {
        const matchesSearch = card.dataset.title.toLowerCase().includes(query) || card.dataset.author.toLowerCase().includes(query);
        const matchesGenre = activeGenre === 'all' || card.dataset.genre === activeGenre;
        const matchesLibrary = currentView !== 'library' || savedStories.has(card.dataset.id);
        const matchesRecent = currentView !== 'recent' || recentIds.has(card.dataset.id);
        const visible = matchesSearch && matchesGenre && matchesLibrary && matchesRecent;
        card.classList.toggle('hidden', !visible);
        if (visible) visibleCount++;
      });
      emptyLibrary.classList.toggle('hidden', currentView !== 'library' || visibleCount > 0);
      noResults.classList.toggle('hidden', currentView === 'library' || currentView === 'recent' || visibleCount > 0);
      emptyRecent.classList.toggle('hidden', currentView !== 'recent' || recentIds.size > 0);
    }

    function setView(view) {
      currentView = view;
      [navHome, navRecent, navGenres, navLibrary].forEach(link => link.classList.toggle('active', link.id === `nav-${view}`));
      hero.classList.toggle('hidden', view === 'library' || view === 'recent');
      searchContainer.classList.toggle('hidden', view === 'library' || view === 'recent');
      genreFilter.classList.toggle('hidden', view !== 'genres');
      recentSection.classList.toggle('hidden', view !== 'recent');
      document.getElementById('library').classList.toggle('hidden', view === 'recent');
      catalogTitle.textContent = view === 'library' ? 'My Saved Library' : view === 'genres' ? 'Explore by Genre' : 'Featured Stories';
      if (view !== 'genres') {
        activeGenre = 'all';
        genreFilter.querySelectorAll('.genre-pill').forEach(pill => pill.classList.toggle('active', pill.dataset.genre === 'all'));
      }
      updateCatalog();
    }

    navHome.addEventListener('click', event => { event.preventDefault(); setView('home'); });
    navRecent.addEventListener('click', event => {
      event.preventDefault();
      history.replaceState(null, '', '#recent');
      setView('recent');
    });
    navGenres.addEventListener('click', event => { event.preventDefault(); setView('genres'); });
    navLibrary.addEventListener('click', event => { event.preventDefault(); setView('library'); });
    searchInput.addEventListener('input', updateCatalog);
    sortSelect.addEventListener('change', updateCatalog);

    genreFilter.querySelectorAll('.genre-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        activeGenre = pill.dataset.genre;
        genreFilter.querySelectorAll('.genre-pill').forEach(item => item.classList.toggle('active', item === pill));
        updateCatalog();
      });
    });

    bookGrid.addEventListener('click', event => {
      const target = event.target;
      if (target.matches('.bookmark-btn')) {
        event.preventDefault();
        const id = target.dataset.id;
        if (savedStories.has(id)) savedStories.delete(id);
        else savedStories.add(id);
        localStorage.setItem('savedStories', JSON.stringify(Array.from(savedStories)));
        updateBookmarks();
        updateCatalog();
        return;
      }
      if (target.matches('.toggle-synopsis-btn')) {
        const synopsis = target.nextElementSibling;
        const expanded = target.getAttribute('aria-expanded') === 'true';
        target.setAttribute('aria-expanded', String(!expanded));
        target.textContent = expanded ? 'Show Synopsis' : 'Hide Synopsis';
        synopsis.classList.toggle('hidden', expanded);
      }
      if (target.matches('.read-btn')) {
        const id = target.dataset.id;
        const recent = getStoredArray('recentStories').filter(item => String(item.id) !== id);
        const story = stories.find(item => item.id === Number(id));
        recent.unshift({ id, title: story.title, author: story.author, genre: story.genre, cover: story.cover });
        localStorage.setItem('recentStories', JSON.stringify(recent.slice(0, 6)));
      }
    });

    function renderRecent() {
      const recent = getStoredArray('recentStories');
      recentGrid.innerHTML = recent.map(item => {
        const story = stories.find(entry => entry.id === Number(item.id));
        return story ? createBookCard(story, false).replace('Read Story', 'Continue Reading') : '';
      }).join('');
    }
    renderRecent();
    updateBookmarks();
    setView(window.location.hash === '#recent' ? 'recent' : 'home');
  }

  const storyArea = document.getElementById('story-content-area');
  if (storyArea) {
    const requestedId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
    const story = stories.find(item => item.id === requestedId) || stories[0];
    storyArea.dataset.id = String(story.id);
    document.title = `${story.title} - StoryBook`;
    document.getElementById('story-title').textContent = story.title;
    document.getElementById('story-author').textContent = story.author;
    document.getElementById('story-genre').textContent = story.genre;
    document.getElementById('story-synopsis').textContent = story.synopsis;
    document.getElementById('story-cover').src = `images/${story.cover}?v=8`;
    document.getElementById('story-cover').alt = `Cover artwork for ${story.title}`;
    document.getElementById('story-image-caption').textContent = `${story.title} — ${story.genre}`;
    document.getElementById('chapter-title').textContent = `Chapter 1: ${story.chapter}`;
    document.getElementById('chapter-body').innerHTML = [...story.paragraphs, chapterAdditions[story.id]]
      .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('');

    const likeCount = document.getElementById('like-count');
    const likeKey = `story_likes_${story.id}`;
    likeCount.textContent = localStorage.getItem(likeKey) || '0';
    document.getElementById('like-btn').addEventListener('click', () => {
      const likes = Number(localStorage.getItem(likeKey) || 0) + 1;
      localStorage.setItem(likeKey, String(likes));
      likeCount.textContent = String(likes);
    });

    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0}%`;
    });

    const paragraphs = document.querySelectorAll('#chapter-text p');
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const fontReset = document.getElementById('font-reset');
    let fontSize = 1.05;
    const applyFontSize = () => paragraphs.forEach(paragraph => { paragraph.style.fontSize = `${fontSize}rem`; });
    fontIncrease.addEventListener('click', () => { fontSize = Math.min(1.65, fontSize + 0.1); applyFontSize(); });
    fontDecrease.addEventListener('click', () => { fontSize = Math.max(0.85, fontSize - 0.1); applyFontSize(); });
    fontReset.addEventListener('click', () => { fontSize = 1.05; applyFontSize(); });

    const storageKey = `story_comments_${story.id}`;
    const authorInput = document.getElementById('comment-author');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const commentCount = document.getElementById('comment-count');
    function renderComments() {
      const comments = getStoredArray(storageKey);
      commentCount.textContent = String(comments.length);
      commentsList.innerHTML = comments.length
        ? comments.map(comment => `<div class="comment-item"><div class="comment-header"><span class="comment-author">${escapeHTML(comment.author)}</span><span class="comment-date">${escapeHTML(comment.date)}</span></div><p class="comment-text">${escapeHTML(comment.text)}</p></div>`).join('')
        : '<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>';
    }
    renderComments();
    document.getElementById('post-comment-btn').addEventListener('click', () => {
      const author = authorInput.value.trim();
      const text = commentInput.value.trim();
      if (!author || !text) {
        alert('Please enter both your name and comment.');
        return;
      }
      const comments = getStoredArray(storageKey);
      comments.unshift({
        author,
        text,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
      localStorage.setItem(storageKey, JSON.stringify(comments));
      authorInput.value = '';
      commentInput.value = '';
      renderComments();
    });
  }
});
