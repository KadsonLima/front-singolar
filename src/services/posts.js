import api from "./api";

export async function listPosts() {
  const response = await api.get("/posts");
  return response.data;
}

export async function listUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function getUser(userId) {
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

export async function getUserPosts(userId) {
  const response = await api.get(`/users/${userId}/posts`);
  return response.data;
}

export async function editPost(postId, data) {
  const response = await api.put("/posts", data);
  return response;
}

export async function deletePost(postId) {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
}

export async function getCommentsPost(postId) {

  const response = await api.get(`/posts/${postId}/comments`)
  
  return response
}

export async function sendPost(body) {
  const response = await api.post(`/posts`, body);
  return response.data;
}