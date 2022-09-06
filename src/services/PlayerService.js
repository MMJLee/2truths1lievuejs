import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/players",
  baseURL: "https://api.mjlee.dev/players",
  withCredentials: true,
  httpsAgent: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getPlayers() {
    this.response = await apiClient.get("/");
    return this.response;
  },
  async getPlayer(id) {
    this.response = await apiClient.get("/" + id + "/");
    return this.response;
  },
  async addPlayer(playerName, score) {
    this.response = await apiClient.post("/", { name: playerName, score: score });
    return this.response;
  },
  async getTop5Players() {
    this.response = await apiClient.get("/top5/")
    return this.response;
  }
};
