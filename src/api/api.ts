import { DataType, DomainDataType } from "../types/types";
import { instance } from "./config/index";

const rowsApi = {
  async getRows() {
    const response = await instance.get<Array<DomainDataType>>(
      `/57964/row/list`
    );
    return response;
  },
  async createRow(items: DomainDataType) {
    const response = await instance.post(`/57964/row/create`, {
      ...items,
    });
    console.log(response.data.current);
    return response.data.current;
  },
  async updateRow(items: DataType) {
    const response = await instance.post(`/57964/row/${items.id}/update`, {
      ...items,
    });
    return response.data.current;
  },
  async deleteRow(id: number) {
    const response = await instance.delete(`/57964/row/${id}/delete`);
    return response.data.current;
  },
};

export default rowsApi;
