const getCloudinaryURL = async (file, type) => {
    // const {
    //   VITE_CLOUDINARY_APY_KEY,
    //   VITE_CLOUDINARY_PUBLICACIONES,
    //   VITE_CLOUDINARY_VIDEO,
    //   VITE_CLOUDINARY_DOCUMENTOS,
    //   VITE_API_CLOUDINARY,
    //   VITE_CLOUDINARY_FILEMULTIPLE,
    // } = import.meta.env;
  
    // const preset =
    //   type === "Video"
    //     ? VITE_CLOUDINARY_VIDEO
    //     : type === "Document"
    //     ? VITE_CLOUDINARY_DOCUMENTOS
    //     : type === "Images"
    //     ? VITE_CLOUDINARY_PUBLICACIONES
    //     : VITE_CLOUDINARY_FILEMULTIPLE;
  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", preset);
    data.append("api_key", 'VITE_CLOUDINARY_APY_KEY');
  
    const response = await fetch('VITE_API_CLOUDINARY', {
      method: "POST",
      body: data,
    });
  
    if (response?.status < 400) {
      const json = await response.json();
      const url = json?.secure_url;
      return url;
    }
  
    return null;
  };
  
  export default getCloudinaryURL;
  