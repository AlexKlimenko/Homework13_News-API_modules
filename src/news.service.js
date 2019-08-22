import request from "./http";
import { renderNews } from "./renderNews";

function loadNews(url) {
  request(url)
    .then(res => {
      if (!res.articles.length) {
        alert("Новостей не найдено");
        return;
      }
      renderNews(res.articles);
    })
    .catch(err => alert(err));
}

export default loadNews;
