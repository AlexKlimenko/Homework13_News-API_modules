import loadNews from "./news.service";
import { form } from "./renderNews";

function requestURL() {
  const country = form.elements["country"].value;
  const category = form.elements["category"].value;
  const search = form.elements["autocomplete-input"].value;
  const apiKey = "2c0f1ee00f8f46f5916226f221bf3858";
  const apiUrl = "https://newsapi.org/v2";

  const url = search
    ? `${apiUrl}/everything?q=${search}&apiKey=${apiKey}`
    : `${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  console.log(url);
  loadNews(url);
}

export { requestURL, form };
