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
    for (let data of this.response.data) {
      this.setStatementUsed(data.id);
    }
    return this.response;
  },
  async setStatementUsed(id) {
    this.response = await apiClient.put("/game/" + id);
    return this.response;
  },
  async resetAllStatements() {
    this.response = await apiClient.put("/game/reset");
    return this.response;
  },
};
