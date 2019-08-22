import "./app.css";
import { requestURL, form } from "./config";
import { newsContainer } from "./renderNews";

document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
  requestURL();
});

form.addEventListener("submit", e => {
  e.preventDefault();
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }

  requestURL();
});
