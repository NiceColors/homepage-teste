
function setTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light'
  document.body.dataset.theme = currentTheme

  themeSwitcher.innerText = currentTheme === 'light' ? '🌑' : '☀️'
  console.log(currentTheme)

}




function switchTheme() {
    // toggle theme
    const toggleValue =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
  
    // update localstorage value;
    localStorage.setItem('theme', toggleValue)
  
    // update theme
    setTheme()
  }

const themeSwitcher = document.querySelector('#theme')


var hello = document.getElementById("hello");
var text = document.getElementById("text");

var hello = new Typewriter(hello, {
  loop: false,
});

var text = new Typewriter(text, {
  loop: false,
  delay: 50,
});

hello
  .typeString("Seja bem-vindo!")
  .pauseFor(500)
  .deleteChars(2)
  .typeString("<strong>a!</strong>")
  .pauseFor(2500)
  .start();

text
  .pauseFor(4500)
  .typeString(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturiet minima qui vitae. Autem quae numquam ut impedit suscipit iusto"
  )
  .pauseFor(9500)
  .start();