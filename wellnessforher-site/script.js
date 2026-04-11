document.querySelectorAll('.reveal').forEach((item) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(item);
});

document.querySelectorAll('.js-subscribe-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    if (message) message.textContent = 'Thanks for subscribing!';
    form.reset();
  });
});

document.querySelectorAll('.js-work-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    if (message) message.textContent = 'Thanks for submitting!';
    form.reset();
  });
});

document.querySelectorAll('.like-button').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('is-liked');
    button.textContent = button.classList.contains('is-liked') ? '♥' : '♡';
  });
});

const search = document.getElementById('post-search');
if (search) {
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    document.querySelectorAll('.blog-list-card').forEach((card) => {
      card.hidden = !card.dataset.title.includes(query);
    });
  });
}

const dotLinks = document.querySelectorAll('.dot-nav a');
const dotTargets = ['top', 'intro', 'footer'].map((id) => document.getElementById(id)).filter(Boolean);
if (dotLinks.length && dotTargets.length) {
  const dotObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dotLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id));
    });
  }, { threshold: 0.35 });
  dotTargets.forEach((target) => dotObserver.observe(target));
}
