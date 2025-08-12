// ====== Filter by Search Input ======
const searchInput = document.querySelector('.search-box input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('p').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});

// ====== Filter by Category Buttons ======
const categoryButtons = document.querySelectorAll('.categories button');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.textContent.toLowerCase();
    
    cards.forEach(card => {
      const title = card.querySelector('p').textContent.toLowerCase();
      if (category === 'all' || title.includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ====== Download Button Logic ======
const downloadButtons = document.querySelectorAll('.card-info button');

downloadButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const image = cards[index].querySelector('img');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `image-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
const authModal = document.getElementById('auth-modal');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  showForm('login');
});

signupBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  showForm('signup');
});

function closeModal() {
  authModal.classList.add('hidden');
}

function showForm(type) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => btn.classList.remove('active'));

  if (type === 'login') {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    tabs[0].classList.add('active');
  } else {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    tabs[1].classList.add('active');
  }
}
