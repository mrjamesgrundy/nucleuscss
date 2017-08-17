(function () {
  if (content.hits) {
    return content.hits.forEach(function (hit) {
      var item = document.createElement('li');
      item.setAttribute('class', 'c-card__item');
      item.textContent = hit.title;
      item.onclick = function () {
        window.location.href = hit.url;
      };
      elemSearchResults.appendChild(item);
    });
  }
});
