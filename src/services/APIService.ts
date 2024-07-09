import { BASE_URL } from '../constants';
import { Response } from '../types/response';

class APIService<T> {
  resourceUrl: string;

  constructor(resourceName: string) {
    // Initialize the resource URL based on the base URL and resource name
    this.resourceUrl = `${BASE_URL}/${resourceName}`;
  }

  /**
   * Fetches an item by its ID from the server using a GET request.
   * @param {string} id - The ID of the item to fetch.
   * @returns {Promise<Response<T>>} A promise that resolves to a Response object containing the fetched item.
   */
  async getById(id: string): Promise<Response<T>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      return { data };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      return {
        error: new Error(`Failed to fetch data: ${errorMessage}`),
      };
    }
  }

  /**
   * Fetches items by category from the server.
   * @param {string} category - The category of the items to fetch.
   * @returns {Promise<Response<T[]>>} A promise that resolves to a Response object containing an array of items.
   */
  async getList(category?: string): Promise<Response<T[]>> {
    const url = new URL(this.resourceUrl);

    if (category) {
      url.searchParams.append('category', category);
    }

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      return { data };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Error fetching list', error);

      return {
        error: new Error(`Error occurred during item search: ${errorMessage}`),
      };
    }
  }

  /**
   * Creates a new item on the server.
   * @param {T} data - The item data to create.
   * @returns {Promise<Response<T>>} A promise that resolves to a Response object containing the created item.
   */
  async create(data: T): Promise<Response<T>> {
    try {
      const response = await fetch(this.resourceUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create item');
      }

      const createdItem = await response.json();

      return { data: createdItem };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Error creating item', error);

      return {
        error: new Error(`Failed to create item: ${errorMessage}`),
      };
    }
  }

  /**
   * Deletes an item by its ID from the server.
   * @param {string} id - The ID of the item to delete.
   * @returns {Promise<Response<void>>} A promise that resolves to a Response object indicating success or failure.
   */
  async delete(id: string): Promise<Response<void>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      return {};
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error deleting item by id: ${id}`, error);

      return {
        error: new Error(`Failed to delete item: ${errorMessage}`),
      };
    }
  }

  /**
   * Updates an item by its ID on the server.
   * @param {string} id - The ID of the item to update.
   * @param {T} data - The updated item data.
   * @returns {Promise<Response<T>>} A promise that resolves to a Response object containing the updated item.
   */
  async update(id: string, data: T): Promise<Response<T>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedItem = await response.json();

      return { data: updatedItem };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error updating item by id: ${id}`, error);

      return {
        error: new Error(`Failed to update item: ${errorMessage}`),
      };
    }
  }
}

export default APIService;
