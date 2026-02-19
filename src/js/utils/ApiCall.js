import axios from "axios";
import { BASE_URL } from "./BASE_URL";

class ApiCall {
  // static fields
  static #httpClient = axios.create({
    baseURL: BASE_URL,
  });
  // private fields
  #endpoint;
  // constructor
  constructor(endpoint) {
    this.#endpoint = endpoint;
  }

  #url(id = null) {
    if (id === null || id === undefined) {
      return this.#endpoint;
    }

    return `${this.#endpoint}/${id}`;
  }

  async #request(method, { id = null, body } = {}) {
    const res = await ApiCall.#httpClient({
      url: this.#url(id),
      method,
      ...(body !== undefined ? { data: body } : {}),
    });

    return res;
  }

  #isNil(value) {
    return value === null || value === undefined;
  }
  // pubic methods
  async get(id = null) {
    try {
      const res = await this.#request("get", { id });

      return {
        status: res.status,
        data: res.data,
      };
    } catch (e) {
      return e.message;
    }
  }

  async post(body) {
    try {
      if (this.#isNil(body)) {
        throw new Error("Body is required!");
      }

      const res = await this.#request("post", { body });

      return {
        status: res.status,
        data: res.data,
      };
    } catch (e) {
      return e.message;
    }
  }

  async put(id, body) {
    try {
      if (this.#isNil(body)) {
        throw new Error("Body is required!");
      }

      if (this.#isNil(id)) {
        throw new Error("Id is required!");
      }

      const res = await this.#request("put", { id, body });

      return {
        status: res.status,
        data: res.data,
      };
    } catch (e) {
      return e.message;
    }
  }

  async patch(id, body) {
    try {
      if (this.#isNil(body)) {
        throw new Error("Body is required!");
      }

      if (this.#isNil(id)) {
        throw new Error("Id is required!");
      }

      const res = await this.#request("patch", { id, body });

      return {
        status: res.status,
        data: res.data,
      };
    } catch (e) {
      return e.message;
    }
  }

  async delete(id) {
    try {
      if (this.#isNil(id)) {
        throw new Error("Id is required!");
      }

      const res = await this.#request("delete", { id });

      return {
        status: res.status,
      };
    } catch (e) {
      return e.message;
    }
  }
}

export default ApiCall;
