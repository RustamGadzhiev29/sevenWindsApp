/* eslint-disable comma-dangle */
import axios from "axios";

const BASE_URL = "http://185.244.172.108:8081/";

const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

const rowsApi = {
  async getRows(eID: string) {
    const response = await instance.get(
      `v1/outlay-rows/entity/${eID}/row/list`
    );
    return response.data;
  },

  async createRows(eID: string) {
    const response = await instance.post(
      `v1/outlay-rows/entity/${eID}/row/create`
    );

    return response.data;
  },

  async updateRow(eID: string, rID: number) {
    const response = await instance.post(
      `v1/outlay-rows/entity/${eID}/row/${rID}/update`
    );

    return response;
  },

  async deleteRow(eID: string, rID: number) {
    const response = await instance.delete(
      `v1/outlay-rows/entity/${eID}/row/${rID}/delete`
    );
    return response;
  },
  async getUsers(pageSize = 1, currentPage = 10) {
    const response = await instance.get(
      `users?page=${currentPage}
&count=${pageSize}`
    );
    return response.data;
  },
};

export default rowsApi;
