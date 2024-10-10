// Obtener la lista de libros desde el servidor
fetch('http://localhost:5001/books/list')
  .then((response) => response.json())
  .then((books) => {
    const bookList = document.getElementById('book-list');
    books.forEach((book) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.genre}</td>
                        <td>${book.year}</td>
                        <td>${book.authors
                          .map((author) => author.name)
                          .join(', ')}</td>
                        <td>
                            <a href="bookDetails.html?id=${
                              book._id
                            }" class="btn btn-info btn-sm">Ver detalles</a>
                            <a href="editBook.html?id=${
                              book._id
                            }" class="btn btn-warning btn-sm">Editar</a>
                            <button class="btn btn-danger btn-sm" onclick="deleteBook('${
                              book._id
                            }')">Eliminar</button>
                        </td>
                    `;
      bookList.appendChild(row);
    });
  });

function deleteBook(id) {
  fetch(`http://localhost:5001/books/delete/${id}`, {
    method: 'DELETE',
  }).then(() => {
    alert('Libro eliminado');
    window.location.reload();
  });
}
