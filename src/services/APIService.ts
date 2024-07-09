import { BASE_URL } from '../constants';
import { ApiResponse } from '../types/apiResponse ';

class ApiService<T> {
  resourceUrl: string;

  constructor(resourceName: string) {
    this.resourceUrl = `${BASE_URL}/${resourceName}`;
  }

  /**
   * Fetches an item by its ID from the server using a GET request.
   * @param {string} id - The ID of the item to fetch.
   * @returns {Promise<ApiResponse<T>>} A promise that resolves to a Response object containing the fetched item.
   */
  async getById(id: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      return { data };
    } catch (error) {
      return this.handleError(error, `Failed to fetch data for id: ${id}`);
    }
  }

  /**
   * Fetches items by category from the server.
   * @param {string} category - The category of the items to fetch.
   * @returns {Promise<ApiResponse<T[]>>} A promise that resolves to a Response object containing an array of items.
   */
  async getList(value?: string): Promise<ApiResponse<T[]>> {
    const url = new URL(this.resourceUrl);
    if (value) {
      url.searchParams.append('category', value);
    }
    try {
      const response = await fetch(url.toString());
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      return { data };
    } catch (error) {
      return this.handleError(
        error,
        `Failed to fetch data for category: ${value}`
      );
    }
  }

  /**
   * Creates a new item on the server.
   * @param {T} data - The item data to create.
   * @returns {Promise<ApiResponse<T>>} A promise that resolves to a Response object containing the created item.
   */
  async create(data: T): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(this.resourceUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const createdItem = await response.json();

      if (!response.ok) {
        throw new Error('Failed to create item');
      }

      return { data: createdItem };
    } catch (error) {
      return this.handleError(error, 'Failed to create item');
    }
  }

  /**
   * Deletes an item by its ID from the server.
   * @param {string} id - The ID of the item to delete.
   * @returns {Promise<ApiResponse<void>>} A promise that resolves to a Response object indicating success or failure.
   */
  async delete(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      return { data: undefined };
    } catch (error) {
      return this.handleError(error, `Failed to delete item with id: ${id}`);
    }
  }

  /**
   * Updates an item by its ID on the server.
   * @param {string} id - The ID of the item to update.
   * @param {T} data - The updated item data.
   * @returns {Promise<ApiResponse<T>>} A promise that resolves to a Response object containing the updated item.
   */
  async update(id: string, data: T): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updatedItem = await response.json();

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      return { data: updatedItem };
    } catch (error) {
      return this.handleError(error, `Failed to update item with id: ${id}`);
    }
  }

  /**
   * Helper function to handle errors consistently.
   * @param {unknown} error - The error object.
   * @param {string} message - The error message.
   * @returns {ApiResponse} An object containing the error details.
   */
  handleError(error: unknown, message: string) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error(message, error);

    return {
      error: new Error(errorMessage),
    };
  }
}

export default ApiService;
