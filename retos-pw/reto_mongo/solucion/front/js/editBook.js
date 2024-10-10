const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

// Cargar los detalles del libro existente
fetch(`http://localhost:5001/books/${bookId}`)
  .then((response) => response.json())
  .then((book) => {
    document.getElementById('title').value = book.title;
    document.getElementById('genre').value = book.genre;
    document.getElementById('year').value = book.year;

    fetch('http://localhost:5001/authors')
      .then((response) => response.json())
      .then((authors) => {
        const authorSelect = document.getElementById('authors');
        authors.forEach((author) => {
          const option = document.createElement('option');
          option.value = author._id;
          option.text = author.name;
          if (book.authors.some((a) => a._id === author._id)) {
            option.selected = true;
          }
          authorSelect.appendChild(option);
        });
      });
  });

const editForm = document.getElementById('editBookForm');

editForm.addEventListener('submit', function (e) {
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
  fetch(`http://localhost:5001/books/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  }).then((data) => {
    alert('Libro actualizado exitosamente');
    window.location.href = 'index.html';
    console.log(data);
  });
});
