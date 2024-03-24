function getUsuarioActivo(nombre) {
    return {
      id: "ABC567",
      username: nombre,
    };
  }
  
  const usuarioActivo = getUsuarioActivo("Fernando");
  console.log(usuarioActivo);
  
  const getUsuarioActivo2 = (nombre) => ({ id: "ABC567", username: nombre });
  
  const usuarioActivo2 = getUsuarioActivo2('Maria');
  
  console.log(usuarioActivo2);