const SERVER_URL = 'http://localhost:3000';

const jsonRequest = (url, options = {}) => {
  return fetch(SERVER_URL + url, {
    headers: {
      'content-type': 'application/json',
    },
    ...options,
  }).then((response) => response.json());
};

export const fetchProducts = () => {
  const options = { method: 'GET' };
  const req = jsonRequest('/users', options);

  return req;
};

export const saveProduct = (user) => {
  const options = {
    body: JSON.stringify(user),
    method: 'PUT',
  };

  const req = jsonRequest(`/users/${user.id}`, options);

  return req;
};

export const deleteProducts = (user) => {
  const options = { method: 'DELETE' };
  const req = jsonRequest(`/users/${user.id}`, options);

  return req;
};

export const createProduct = (user) => {
  const options = {
    body: JSON.stringify(user),
    method: 'POST',
  };

  const req = jsonRequest(`/users/`, options);

  return req;
};
