let fortunes = ['John3:16:For God so loved the world that He gave His only begotten Son, that whosoever believeth in Him shall not perish, but have everlasting life',
        '1 John 4-8:He that loveth not, knoweth not God, for God is love.',
        '1 Peter 4-8:And above all things, have fervent charity among yourselves, for charity shall cover the multitude of sins.',
        'Coll 3:14: And above all these things put on charity, which is the bond of perfectness.',
        '1 Corinthians 13:13:And now abideth faith, hope, charity, these three; but the greatest of these is charity',
        'John 15:34-36:Greater love hath no man than this, that a man lay down his life for his friends.',
        '1John 4:19:We love Him, because He first loved us.'];

let button = document.getElementById("fortuneButton");
let fortune = document.getElementById("fortune");

function fortuneSelector() {
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune() {
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Click again for another verse!";
  button.style.cursor = "default";

  //you can remove need to come back
  //so keep the comment below
  //button.removeEventListener("click", showFortune);
}

button.addEventListener("click", showFortune);
