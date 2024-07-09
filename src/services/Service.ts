import { BASE_URL } from '../constants';

class Service<T> {
  resourceUrl: string;

  constructor(resourceName: string) {
    this.resourceUrl = `${BASE_URL}/${resourceName}`;
  }

  /**
   * Fetches an item by its ID from the server.
   * @param {string} id - The ID of the item to fetch.
   * @returns {Promise<T>} A promise that resolves to an item of type T.
   */
  async getById(id: string): Promise<T> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error fetching item by id: ${id}`, error);
      throw new Error(`Failed to fetch data: ${errorMessage}`);
    }
  }

  /**
   * Fetches items by category from the server.
   * @param {string} key - The key of the items to fetch.
   * @returns {Promise<T[]>} A promise that resolves to an array of items of type T.
   */
  async getByParams(key: string, value: string): Promise<T[]> {
    const url = new URL(this.resourceUrl);
    url.searchParams.append(`${key}`, value);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 404) {
        return [];
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error fetching items by params: ${value}`, error);
      throw new Error(`Error occurred during item search: ${errorMessage}`);
    }
  }

  /**
   * Updates an item by its ID on the server.
   * @param {string} id - The ID of the item to update.
   * @param {T} data - The item data to update.
   * @returns {Promise<T>} A promise that resolves to the updated item of type T.
   */
  async updateById(id: string, data: T): Promise<T> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error updating item by id: ${id}`, error);
      throw new Error(`Failed to update item: ${errorMessage}`);
    }
  }
}

export default Service;
