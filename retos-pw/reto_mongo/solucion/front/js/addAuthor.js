const authorForm = document.getElementById('addAuthorForm');

authorForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const authorData = {
    name: this.name.value,
    bio: this.bio.value,
    birthDate: this.birthDate.value,
  };
  fetch('http://localhost:5001/authors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authorData),
  }).then(() => {
    alert('Autor agregado exitosamente');
    window.location.href = 'manageAuthors.html';
  });
});
