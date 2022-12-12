//METODO GET
const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

//METODO POST
const POST = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

//METODO DELETE
const DELETE = async (url, id) => {
  return await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};
//METODO PATCH
const PATCH = async (url, id, body) => {
  return await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { GET, POST, DELETE, PATCH };
