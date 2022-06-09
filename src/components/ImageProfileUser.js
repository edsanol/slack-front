import React, { useState } from 'react';
import axios from 'axios';

export const ImageProfileUser = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    if (file) {
      console.log(typeof file);
      for (let i = 0; i < file.length; i++) {
        //nombre de la propiedad, archivo y nombre del archivo
        data.append(`file_${i}`, file[i], file[i].name);
      }
    }

    const response = await axios.post('http://localhost:8080/profile', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
  }

  function readFile(file) {
    const reader = new FileReader();

    //Result tiene el resultado de la imagen
    reader.onload = (e) => setImage(e.target.result);
    // reader.onload = e => console.log(e.target.result)

    //Como no hemos seleccionado imagen aùn
    reader.readAsDataURL(file);
  }

  function handleChange(e) {
    setFile(e.target.files);
  }

  return (
    <div>
      <div>{!!image && <img src={image} alt="upload preview" />}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">Change your image profile</label>
        <input
          type="file"
          accept="image/*"
          multiple
          name="file"
          id="file"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
