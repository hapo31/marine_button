document.addEventListener("DOMContentLoaded", () => {
  const base = "audio";
  const buttons = document.getElementsByClassName("audio-button");

  for (const button of buttons) {
    button.setAttribute("alt", button.textContent);
    button.addEventListener("click", async () => {
      const audio = document.getElementById("player");
      audio.src = `${base}/${button.getAttribute("data-file-name")}`;
      await audio.play();
    });
  }
});
