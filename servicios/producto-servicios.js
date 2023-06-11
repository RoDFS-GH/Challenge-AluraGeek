//GET
const listaProductos = () =>
  fetch("https://my-json-server.typicode.com/RoDFS-GH/Challenge-One-E-Commerce/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
  return fetch(`https://my-json-server.typicode.com/RoDFS-GH/Challenge-One-E-Commerce/producto/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price) => {
  return fetch("https://my-json-server.typicode.com/RoDFS-GH/Challenge-One-E-Commerce/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fué posible crear un producto");
  });
};

// PUT/PATCH
const alteraProducto = async (id, name, price, description) => {
  return fetch(`https://my-json-server.typicode.com/RoDFS-GH/Challenge-One-E-Commerce/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`https://my-json-server.typicode.com/RoDFS-GH/Challenge-One-E-Commerce/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProducto,
  creaProdutos,
  alteraProducto,
  deleteProducto,
};
