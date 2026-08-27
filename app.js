const CARDS = [
  "Ai cười hở mồm thì uống",
  "Cả nhóm chọn ra 2 người vinh dự được bạn ngửi nách",
  "Ai từng Huệ thì uống nhé",
  "Ảnh đại diện Facebook ai nhiều Ha...Ha... nhất thì uống đi, chờ gì nữa",
  "Hôn má người bên trái bạn",
  "Gọi cho người yêu cũ xin quay lại - Hoặc uống",
  "Người đối diện hôn má 1 người mà cả bàn chỉ định - Hoặc uống",
  "Ai mặc áo trắng hoặc đen thì uống",
  "Người ít tuổi nhất uống với người lớn tuổi nhất",
  "Chưa có người yêu uống 1 ly, Có người yêu uống 2 ly, Có gia đình uống 3 ly",
  "Nhắn với bố/ mẹ \"Con/ bạn gái/ vợ con có bầu rồi\"- Hoặc uống 2 ly",
  "2 người bên cạnh người bốc lá bài này phải uống",
  "Cả bàn không dùng tay uống 1 ly, Ai không làm được uống thêm 1 ly",
  "Ai đã từng bị cắm sừng uống",
  "Giữ lại lá bài này và có quyền chỉ định 1 người uống thay mình 1 lần",
  "Gọi điện cho người yêu cũ \"Anh/ Em khoẻ không\"- Không có NYC thì uống",
  "Show số dư tài khoản hoặc uống",
  "Đoán màu quần lót người bên cạnh- đoán sai thì bạn uống, đoán đúng thì người đó uống",
  "Không ai được nói từ \"Uống\"/\"Nốc\" từ giờ tới cuối buổi. Ai nói thì uống",
  "Chơi nối từ, người cuối cùng \"bí\" thì uống",
  "Nghĩ ra một chủ đề để mọi người cùng trả lời (ví dụ: các nước ĐNA). Ai không nói được uống.",
  "Chọn 1 người đối thủ. Trong vòng 30s ai kể tên nhiều bộ phận trên cơ thể bắt đầu bằng chữ M thì thắng. Ai thua thì uống",
  "Kể một chuyện cười. Ai cười thì uống 1 ly. Nếu không ai cười thì bạn phải uống 2 ly.",
  "Không gọi tên nhau cho đến khi hết cuộc chơi. Ai phạm luật uống.",
  "Trong vòng 3s, mọi người chỉ vào người mà bạn nghĩ \"giỏi chuyện ấy nhất\". Ai được nhiều vote nhất sẽ phải uống.",
  "Nói 2 điều bạn thích và 3 điều bạn không thích về người ngồi bên trái bạn- Hoặc ăn 1 thìa cà phê/ 1 thìa đầy muối",
  "Dùng 3 từ diễn tả lần đầu tiên của bạn (Mọi người quyết đinh lần đầu đó là gì)",
  "Chọn 1 người cùng chơi không chớp mắt trong 30s, ai thua uống",
  "Hát 1 bài chứa từ Tâm - Hoặc uống =)))",
  "Cho mọi người xem tab ẩn danh hoặc lịch sử web điện thoại mà ko đc kiểm tra trước- Hoặc uống 2 ly",
  "Bạn phải quần áo với người khác giới được cả bàn chỉ định",
  "Trong 20' tới không được gọi tên mọi người trong bàn. Ai vi phạm bị phạt",
  "Để người đối diện quyết định thử thách mà bạn phải làm",
  "Bạn sẽ bị bịt mắt và phải ngửi một thứ bất kỳ. Đoán được thì cả bàn uống và ngược lại",
  "Cởi đồ lót và phải thả rông trong 10 phút",
  "Ai từng dùng Tinder thì uống",
  "Chơi vật tay với một người mà cả nhóm chỉ định. Ai thua thì uống",
  "Nói 1 điều mà bạn xấu hổ nhất về bản thân HOẶC Đi ra tát một người ngay lập tức",
  "Bí mật lớn nhất của bạn là gì",
  "Cúi đầu đếm 1,2,3 Mọi người ngẩng đầu lên nhìn 1 người bất kỳ, 2 người nào nhìn nhau thì uống",
  "2 người ngồi cạnh người bốc lá bài này uống",
  "2 người nào mặc áo cùng màu thì mời nhau uống 1 ly",
  "Tô son cho tất cả các bạn nam ai ko chịu bôi người đó uống",
  "Chụp 1 tấm hình cùng nhau và tất cả post story nàooooo",
  "Tiết lộ 3 điều bạn thấy quyến rũ nhất của người mà cả bàn chọn",
  "Like một tấm hình cũ (trên 1 tháng) của NYC hoặc NYC cũ người yêu =))))",
  "Ai FA lâu nhất uống",
  "Ai CV 1 dòng uống",
  "Bao nhiêu tình cũ bấy nhiêu ly sầu",
  "Bạn đã bao giờ tè ra hồ bơi Hoặc lap dance một người mà cả bàn chọn",
  "Kể về lần nói dối mà bạn ân hận nhất Hoặc nhắn tin Chúc Mừng Sinh Nhật NYC hoặc NYC của người yêu",
  "Trong bàn này bạn muốn nhìn ai khoả thân nhất",
  "Trong bàn này bạn muốn nhìn ai khoả thân nhất",
  "Chụp một tấm hình Kawaii chu môi và post lên FB caption \"nh0k l0k ch0k hay kh0x vi anh/ em\"",
  "Bắt chước một đặc điểm của một ai đó trong bàn này cho đến khi người chơi khác có thể đoán bạn là ai",
  "Cới cúc áo/áo cho người đối diện bằng miệng",
  "Đổi quần áo với một người khác giới HOẶC Kể về điều bạn muốn chồng/vợ/ny/nyc của bạn thay đổi",
  "Hôn một bộ phận mà cả bàn chỉ định của người bên cạnh bạn",
  "Cho người cả bàn chọn nằm lên đùi và vuốt tóc họ 10 lần",
  "Ai cận nặng nhất uống",
  "Lần cuối cùng bạn có lần đầu tiên là khi nào, kể về lần đầu tiên đó",
  "Miêu tả nụ hôn tệ nhất bạn từng có",
  "Bật đèn hay tắt đèn",
  "Trên giường hay trên bàn",
  "Truyền thống hay táo bạo",
  "Kể về một sự thật ít ai biết về bạn",
  "Vỗ mông người bên cạnh bạn",
  "Định nghĩa về true love của bạn",
  "Hãy chọn 1 người trong bàn thích hợp nhất để làm người yêu",
  "Ai đang mặc nhiều đồ nhất hãy uống một ly",
  "Viết họ tên người yêu cũ và post lên FB",
  "Nhắn tin chia tay ny/nyc trên messenger",
  "Tất cả mọi người uống không dùng tay, ai uống không được uống thêm 1 ly",
  "Nếu được chọn 1 phẩm chất của 1 người trong nhóm bạn sẽ chọn gì và của ai",
  "Kể 1 câu chuyện cười, ai cười người đó uống, không ai cười bạn phải uống",
  "Kể về 1 điều mà bạn hối tiếc nhất",
  "Gửi tin nhắn tỏ tình với anh Gosha mà ko được thêm context gì khi anh í reply trong vòng 30'",
  "Vuốt má người bên cạnh bạn",
  "Thả Ha...Ha... avatar FB của NYC",
  "Gọi cho người bạn nhắn tin gần đây nhất, không được nói gì và hát cho người đó nghe trong vòng 30 giây",
  "Ai đang dùng điện thoại thực hiện squat 5 cái và hô \"Tôi dại dột\"",
  "Cả bàn chọn một người cho bạn và 2 người phải nhìn nhau đắm đuối trong 30s",
  "Thì thầm vào tai người bên cạnh điều mà bạn thích nhất ở họ",
  "NYC có ấn tượng sâu sắc nhất HOẶC Tất cả chuyền 1 vật bằng môi đến khi có 1 người rớt thì uống",
  "Giữ thẻ này và chọn 1 người uống cho bạn",
  "Giữ thẻ này và chọn 1 người thực hiện thử thách cho bạn",
  "Gọi điện mời NYC đi đám cưới. Nếu người ấy không đi hoặc bạn không dám gọi thì uống 2 ly",
  "Thẻ quyền lực- Chọn một người và được đưa ra thử thách cho người đó phải làm",
  "Ai đã từng stalk người khác trên mạng xã hội thì uống",
  "Đọc họ và tên của từng người trong bàn này. Số người bạn đọc sai tên bằng số ly bạn phải uống",
  "Tất cả mọi người chỉ tay vào người mà mình nghĩ là uống giỏi nhất. Ai được vote nhiều nhất uống",
  "Tất cả mọi người chỉ tay vào người mà mình nghĩ là giàu nhất. Ai được vote nhiều nhất uống",
  "Người bốc lá này chọn 1 đối thủ vật tay, ai thua uống",
  "Từng người trong bàn chọn chẵn hoặc lẻ. Người bốc lá này lấy một tờ tiền và xem số cuối trong số seri là chẵn hay lẻ. Ai sai thì uống",
  "Bạn từng trộm tiền của bố mẹ chưa, nếu rồi thì bạn dùng nó vào việc gì",
  "Bạn và 1 người được cả bàn đối diện sẽ bị bịt mắt phải cạ má để đoán đúng vật mà mọi người chọn. Ai đóán sai/ chậm hơn thì phải uống",
  "Thẻ quyền lực- Chọn một người và được đặt ra một câu hỏi cho người đó",
  "Tất cả mọi người quay vòi voi 10 vòng, sau đấy đổ nước ra ly, ai làm tràn nước thì uống",
  "Tất cả mọi người ngậm nước vào mồm rồi nhìn nhau, ai phun nước ra trước thì uống",
  "Cả bạn chọn 1 đối thủ cho bạn, 2 người sẽ bị dán sticker lên mặt và nhiệm vụ là phải thổi bay sticker trên mặt đối phương. Ai còn ít sticker trên mặt hơn phải uống",
];

const DECK = CARDS.map((text, id) => ({ id, text }));
const STORAGE_KEY = "drinking-card-game-used-ids";

const els = {
  intro: document.getElementById("screen-intro"),
  game: document.getElementById("screen-game"),
  end: document.getElementById("screen-end"),
  card: document.getElementById("card"),
  scene: document.getElementById("card-scene"),
  text: document.getElementById("card-text"),
  cardFront: document.querySelector(".card-front"),
  progress: document.getElementById("progress-label"),
  bar: document.getElementById("progress-bar"),
  start: document.getElementById("btn-start"),
  next: document.getElementById("btn-next"),
  shuffle: document.getElementById("btn-shuffle"),
  restart: document.getElementById("btn-restart"),
  replay: document.getElementById("btn-replay"),
  mute: document.getElementById("btn-mute"),
  soundOn: document.getElementById("icon-sound-on"),
  soundOff: document.getElementById("icon-sound-off"),
  introEyebrow: document.getElementById("intro-eyebrow"),
  introCount: document.getElementById("intro-count"),
};

const state = {
  deck: [],
  used: new Set(),
  current: null,
  flipped: false,
  busy: false,
  muted: false,
  audio: null,
};

function loadUsed() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id) => Number.isInteger(id)));
  } catch {
    return new Set();
  }
}

function saveUsed() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.used]));
}

function unusedCards() {
  return DECK.filter((card) => !state.used.has(card.id));
}

function shuffle(list) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function textSize(text) {
  if (text.length > 150) return "is-sm";
  if (text.length > 85) return "is-md";
  return "";
}

function showScreen(name) {
  [els.intro, els.game, els.end].forEach((screen) => screen.classList.remove("is-active"));
  els[name].classList.add("is-active");
}

function updateHud() {
  const flippedCount = state.used.size;
  els.progress.textContent = `${flippedCount} / ${DECK.length}`;
  els.bar.style.width = `${(flippedCount / DECK.length) * 100}%`;
}

function refreshIntro() {
  state.used = loadUsed();
  const left = unusedCards().length;
  const flippedCount = state.used.size;
  updateHud();

  if (els.introCount) {
    els.introCount.textContent = left ? `${left} CARDS` : "HẾT BÀI";
  }
  if (els.introEyebrow) {
    els.introEyebrow.textContent = flippedCount
      ? `Đã lật ${flippedCount} • Còn ${left}`
      : "100 thử thách";
  }
  els.start.textContent = flippedCount
    ? (left ? "Tiếp tục chơi" : "Xem kết quả")
    : "Bắt đầu chơi";
}

function renderCard(text) {
  els.text.textContent = text;
  els.text.className = `card-text ${textSize(text)}`.trim();
}

function tone(freq, duration, type = "sine", gain = 0.04) {
  if (state.muted) return;
  try {
    if (!state.audio) state.audio = new AudioContext();
    const ctx = state.audio;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    amp.gain.setValueAtTime(gain, ctx.currentTime);
    amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Ignore audio errors on restricted browsers.
  }
}

function dealCard() {
  if (!state.deck.length) {
    showScreen("end");
    updateHud();
    return;
  }

  state.current = state.deck.pop();
  state.flipped = false;
  els.card.classList.remove("is-flipped");
  els.cardFront?.classList.remove("is-revealed");
  els.next.textContent = "Lật bài";
  renderCard(state.current.text);
  updateHud();

  els.scene.classList.remove("is-leaving");
  els.scene.classList.remove("is-dealing");
  void els.scene.offsetWidth;
  els.scene.classList.add("is-dealing");
  tone(220, 0.12, "triangle", 0.03);
}

function startGame(reset = false) {
  enterFullscreen();
  if (reset) {
    state.used = new Set();
    saveUsed();
  } else {
    state.used = loadUsed();
  }

  state.deck = shuffle(unusedCards());
  state.current = null;
  state.flipped = false;
  state.busy = false;
  updateHud();

  if (!state.deck.length) {
    showScreen("end");
    return;
  }

  showScreen("game");
  dealCard();
}

function markCurrentUsed() {
  if (!state.current || state.used.has(state.current.id)) return;
  state.used.add(state.current.id);
  saveUsed();
  updateHud();
}

function flipCard() {
  if (state.busy || state.flipped || !state.current) return;
  if (state.audio?.state === "suspended") state.audio.resume();
  state.flipped = true;
  markCurrentUsed();
  els.card.classList.add("is-flipped");
  els.cardFront?.classList.add("is-revealed");
  els.next.textContent = "Lá tiếp theo";
  tone(330, 0.16, "sine", 0.045);
  setTimeout(() => tone(440, 0.18, "sine", 0.03), 90);
}

function nextCard() {
  if (state.busy) return;
  if (!state.flipped) {
    flipCard();
    return;
  }

  state.busy = true;
  els.scene.classList.remove("is-dealing");
  els.scene.classList.add("is-leaving");
  tone(196, 0.1, "triangle", 0.025);

  setTimeout(() => {
    state.busy = false;
    dealCard();
  }, 420);
}

function shuffleRemaining() {
  if (state.busy) return;
  if (!state.deck.length && state.flipped) {
    showScreen("end");
    updateHud();
    return;
  }
  const rest = state.current && !state.flipped ? [...state.deck, state.current] : [...state.deck];
  if (!rest.length) return;
  state.deck = shuffle(rest);
  if (state.flipped) {
    nextCard();
    return;
  }
  dealCard();
}

function toggleMute() {
  state.muted = !state.muted;
  els.soundOn.classList.toggle("hidden", state.muted);
  els.soundOff.classList.toggle("hidden", !state.muted);
  els.mute.setAttribute("aria-label", state.muted ? "Bật âm thanh" : "Tắt âm thanh");
}

function enterFullscreen() {
  const node = document.documentElement;
  const request = node.requestFullscreen || node.webkitRequestFullscreen;
  if (!request || document.fullscreenElement) return;
  Promise.resolve(request.call(node)).catch(() => {});
}

function lockToThisPage() {
  const stay = { stay: true };
  history.replaceState(stay, "");
  history.pushState(stay, "");
  window.addEventListener("popstate", () => {
    history.pushState(stay, "");
  });
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
  });
  document.addEventListener("touchstart", (event) => {
    if (event.target.closest("button")) return;
    const x = event.touches[0]?.clientX ?? 0;
    if (x <= 16 || x >= window.innerWidth - 16) event.preventDefault();
  }, { passive: false });
  document.addEventListener("pointerdown", enterFullscreen, { once: true });
}

els.start.addEventListener("click", () => startGame(false));
els.replay.addEventListener("click", () => startGame(true));
els.restart.addEventListener("click", () => startGame(true));
els.next.addEventListener("click", nextCard);
els.shuffle.addEventListener("click", shuffleRemaining);
els.mute.addEventListener("click", toggleMute);
els.card.addEventListener("click", () => {
  if (state.flipped) nextCard();
  else flipCard();
});

let touchX = null;
els.card.addEventListener("touchstart", (event) => {
  touchX = event.changedTouches[0].clientX;
}, { passive: true });
els.card.addEventListener("touchend", (event) => {
  if (touchX == null) return;
  const dx = event.changedTouches[0].clientX - touchX;
  touchX = null;
  if (dx < -60 && state.flipped) nextCard();
}, { passive: true });

function spawnSparkles() {
  const host = document.getElementById("bg-sparkles");
  if (!host) return;
  const count = window.matchMedia("(max-width: 760px)").matches ? 22 : 40;
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("i");
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.animationDelay = `${Math.random() * 6}s`;
    spark.style.animationDuration = `${3 + Math.random() * 5}s`;
    host.appendChild(spark);
  }
}

spawnSparkles();
refreshIntro();
lockToThisPage();

document.addEventListener("dblclick", (event) => {
  event.preventDefault();
});
["gesturestart", "gesturechange", "gestureend"].forEach((type) => {
  document.addEventListener(type, (event) => event.preventDefault());
});
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) event.preventDefault();
}, { passive: false });
let lastTouchEnd = 0;
document.addEventListener("touchend", (event) => {
  const now = Date.now();
  if (now - lastTouchEnd <= 350) {
    event.preventDefault();
    const button = event.target.closest("button");
    if (button) button.click();
  }
  lastTouchEnd = now;
}, { passive: false });

document.addEventListener("keydown", (event) => {
  if ((event.altKey && (event.key === "ArrowLeft" || event.key === "ArrowRight")) || event.key === "BrowserBack" || event.key === "BrowserForward") {
    event.preventDefault();
    return;
  }
  if (event.target instanceof HTMLButtonElement && event.key === " ") return;
  if (!els.game.classList.contains("is-active")) {
    if (event.key === "Enter" || event.key === " ") {
      const reset = els.end.classList.contains("is-active");
      startGame(reset);
    }
    return;
  }
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    if (state.flipped) nextCard();
    else flipCard();
  }
  if (event.key === "ArrowRight") nextCard();
  if (event.key === "r" || event.key === "R") shuffleRemaining();
});
