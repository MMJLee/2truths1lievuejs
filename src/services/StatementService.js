import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/statements",
  baseURL: "https://api.mjlee.dev/statements",
  withCredentials: true,
  httpsAgent: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getStatements() {
    this.response = await apiClient.get("/");
    return this.response;
  },
  async getStatement(id) {
    this.response = await apiClient.get("/" + id + "/");
    return this.response;
  },
  async get2TruthsAndaLie() {
    this.response = await apiClient.get("/game/");
    return this.response;
  },
  async resetAllStatements() {
    this.response = await apiClient.put("/game/reset/");
    return this.response;
  },
  async submitGuesses(id1, id2, id3) {
    this.response = await apiClient.put("/game/" + id1 + "-" + id2 + "-" + id3 + "/");
    return this.response;
  }
};
