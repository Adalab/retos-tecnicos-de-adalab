const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

// Cargar los detalles del libro
fetch(`http://localhost:5001/books/${bookId}`)
  .then((response) => response.json())
  .then((book) => {
    const bookDetails = document.getElementById('book-details');
    bookDetails.innerHTML = `
                    <h2>${book.title}</h2>
                    <p><strong>Género:</strong> ${book.genre}</p>
                    <p><strong>Año:</strong> ${book.year}</p>
                    <p><strong>Autores:</strong> ${book.authors
                      .map((author) => author.name)
                      .join(', ')}</p>
                `;
  });
