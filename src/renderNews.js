const newsContainer = document.querySelector(".news-container .row");
const form = document.forms["newsControls"];

function newsTemplate({ url, title, description, urlToImage } = {}) {
  return `
  <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${description || ""}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

function renderNews(newsItems) {
  let fragment = "";

  newsItems.forEach(item => {
    const el = newsTemplate(item);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

export { renderNews, newsContainer, form };
