// Obtener la lista de autores desde el servidor
fetch('http://localhost:5001/authors')
  .then((response) => response.json())
  .then((authors) => {
    const authorList = document.getElementById('author-list');
    authors.forEach((author) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                        <td>${author.name}</td>
                        <td>${author.bio || 'N/A'}</td>
                        <td>${
                          author.birthDate
                            ? new Date(author.birthDate).toLocaleDateString()
                            : 'N/A'
                        }</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteAuthor('${
                              author._id
                            }')">Eliminar</button>
                        </td>
                    `;
      authorList.appendChild(row);
    });
  });

function deleteAuthor(id) {
  fetch(`http://localhost:5001/authors/${id}`, {
    method: 'DELETE',
  }).then(() => {
    alert('Autor eliminado');
    window.location.reload();
  });
}
