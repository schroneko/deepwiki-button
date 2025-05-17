(function() {
  if (!location.hostname.endsWith('github.com')) return;
  function insertButton() {
    const nav = document.querySelector('ul.UnderlineNav-body');
    if (!nav) return;
    if (nav.dataset.deepwikiInjected) return;
    nav.dataset.deepwikiInjected = 'true';

    const li = document.createElement('li');
    li.className = 'UnderlineNav-item';

    const a = document.createElement('a');
    a.textContent = '\u21ba DeepWiki';
    a.href = 'https://deepwiki.example/?url=' + encodeURIComponent(location.href);
    a.target = '_blank';
    a.style.display = 'flex';
    a.style.alignItems = 'center';

    li.appendChild(a);
    nav.insertBefore(li, nav.firstElementChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertButton);
  } else {
    insertButton();
  }
})();
