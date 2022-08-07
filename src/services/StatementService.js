import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getStatements() {
    this.response = await apiClient.get("/statements");
    return this.response;
  },
  async getStatement(id) {
    this.response = await apiClient.get("/statements/" + id);
    return this.response;
  },
  async get2TruthsAndaLie() {
    this.response = await apiClient.get("/game");
    this.setStatementsUsed(this.response.data[0].id, this.response.data[1].id, this.response.data[2].id);
    return this.response;
  },
  async setStatementsUsed(id1, id2, id3) {
    this.response = await apiClient.put("/game/" + id1 + "-" + id2 + "-" + id3);
    return this.response;
  },
  async resetAllStatements() {
    this.response = await apiClient.put("/game/reset");
    return this.response;
  },
};
