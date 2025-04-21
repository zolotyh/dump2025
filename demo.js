document.addEventListener("click", async (event) => {
  const { selector, navigation } = event.target.dataset;
  const url = event.target.getAttribute("href");

  if (navigation) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Забрать с сервера, распарсить ответ, получить по селектору
  const result = await getContent(url, selector);
  target.innerHTML = result;
});
