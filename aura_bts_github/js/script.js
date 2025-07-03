
function createGif(src, bottom = '20px', right = '20px') {
  const gif = document.createElement('img');
  gif.src = src;
  gif.className = 'gif-overlay';
  gif.style.bottom = bottom;
  gif.style.right = right;
  gif.style.width = '120px';
  document.body.appendChild(gif);
  setTimeout(() => gif.remove(), 3000);
}

function playMusic() {
  document.getElementById("bts-music").play();
  createGif('gifs/jungkook.gif');
}

function playVideo() {
  const video = document.getElementById("bts-video");
  video.style.display = 'block';
  video.play();
  createGif('gifs/yoongi.gif', '40px', '40px');
}

setInterval(() => {
  if (Math.random() < 0.2) { // 20% de chance
    createGif('gifs/jimin.gif', '100px', '50%');
  }
}, 10000);
