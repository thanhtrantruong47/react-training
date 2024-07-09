import { BASE_URL } from '../constants';

class HttpService<T> {
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
      return response.json();
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
      return response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(
        `Error fetching items by params: ${JSON.stringify(value)}`,
        error
      );
      throw new Error(`Error occurred during item search: ${errorMessage}`);
    }
  }

  /**
   * Fetches all items from the server.
   * @returns {Promise<T[]>} A promise that resolves to an array of all items of type T.
   */
  async getAll(): Promise<T[]> {
    try {
      const response = await fetch(this.resourceUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Error fetching all items', error);
      throw new Error(`Failed to fetch data: ${errorMessage}`);
    }
  }

  /**
   * Creates a new item on the server.
   * @param {T} data - The item data to create.
   * @returns {Promise<T>} A promise that resolves to the created item of type T.
   */
  async create(data: T): Promise<T> {
    try {
      const response = await fetch(this.resourceUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      return response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Error creating item', error);
      throw new Error(`Failed to create item: ${errorMessage}`);
    }
  }

  /**
   * Deletes an item by its ID from the server.
   * @param {string} id - The ID of the item to delete.
   * @returns {Promise<void>} A promise that resolves when the item is successfully deleted.
   */
  async deleteById(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error deleting item by id: ${id}`, error);
      throw new Error(`Failed to delete item: ${errorMessage}`);
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

export default HttpService;
