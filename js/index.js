const base = "audio";
const buttons = document.getElementsByClassName("audio-button");
const audio = document.getElementById("player");

let i = 0;
for (const button of buttons) {
  button.setAttribute("alt", button.textContent);
  button.addEventListener("click", async () => {
    audio.src = `${base}/${button.getAttribute("data-file-name")}`;
    await audio.play();
  });
}
