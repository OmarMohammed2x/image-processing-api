document.addEventListener('DOMContentLoaded', () => {
  const imagesContainer = document.querySelector('#images');
  const ResizedImagesContainer = document.querySelector('#resizedImages');
  const resizeForm = document.querySelector('#resize');
  const uploadForm = document.querySelector('#upload');
  // i used type assertion to make this input able to use HTMLInputElement interface
  const imageInput = document.querySelector(
    '#imageInput',
  ) as unknown as HTMLInputElement;

  uploadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (imageInput?.files && imageInput.files[0]) {
      console.log('this imageInput.files[0]: ', imageInput.files[0]);
      console.log('this imageInput.files: ', imageInput.files);
    }

    const formData = new FormData();
    if (imageInput?.files && imageInput.files[0]) {
      formData.append('image', imageInput.files[0]);
      await fetch('http://localhost:3000/api/upload', {
        method: 'post',
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('this the body',data.body);
          // imagesContainer?.append(`<img src="../../backend/images/${}" alt="Desert">`)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('upload your file');
    }
  });
});
