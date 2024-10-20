document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const file = document.getElementById('fileInput').files[0];
  
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert('Imagen subida exitosamente');
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
});
