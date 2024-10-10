// Cargar autores y llenar el select
fetch('http://localhost:5001/authors')
  .then((response) => response.json())
  .then((authors) => {
    const authorSelect = document.getElementById('authors');
    authors.forEach((author) => {
      const option = document.createElement('option');
      option.value = author._id;
      option.text = author.name;
      authorSelect.appendChild(option);
    });
  });

const formBook = document.getElementById('addBookForm');
formBook.addEventListener('submit', function (e) {
  e.preventDefault();
  const selectedAuthors = Array.from(
    document.getElementById('authors').selectedOptions
  ).map((option) => option.value);
  const bookData = {
    title: this.title.value,
    genre: this.genre.value,
    year: this.year.value,
    authors: selectedAuthors,
  };
  fetch('http://localhost:5001/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  }).then(() => {
    alert('Libro agregado exitosamente');
    window.location.href = 'index.html';
  });
});
