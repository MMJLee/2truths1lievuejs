import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/projects",
  baseURL: "https://api.mjlee.dev/projects",
  withCredentials: true,
  httpsAgent: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getProjects() {
    this.response = await apiClient.get("/");
    return this.response;
  },
  async getProject(id) {
    this.response = await apiClient.get("/" + id + "/");
    return this.response;
  },
};
