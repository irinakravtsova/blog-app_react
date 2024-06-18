const BASE_URL = 'https://jsonplaceholder.typicode.com';


export function getPosts() {
  return fetch(`${BASE_URL}//posts`)
  .then(response => {
    if (!response.ok) {
      throw new Error('api response failed');
    }
    return response.json();
  })
}

export function addPost(post) {
  return fetch(`${BASE_URL}//posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('api response failed');
    }
    return response.json();
  });
}

export function deletePost(id) {
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
}

export function updatePost(post) {
  fetch(`${BASE_URL}/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}