import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "http://2truths1lie.us-east-2.elasticbeanstalk.com/api/v1",
  httpsAgent: false,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getStatements() {
    this.response = await apiClient.get("/statement");
    return this.response;
  },
  async getStatement(id) {
    this.response = await apiClient.get("/statement/" + id);
    return this.response;
  },
  async get2TruthsAndaLie() {
    this.response = await apiClient.get("/game");
    return this.response;
  },
  async resetAllStatements() {
    this.response = await apiClient.put("/game/reset");
    return this.response;
  },
  async submitGuesses(id1, id2, id3) {
    this.response = await apiClient.put("/game/" + id1 + "-" + id2 + "-" + id3);
    return this.response;
  }
};
