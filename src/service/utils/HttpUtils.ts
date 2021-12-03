
class HttpUtils {
  /**
   * Helper function to send POST requests
   * Just to prevent code duplicating
   */
  static sendPostRequest = (
    url: string,
    body: any,
    headers = {}
  ): Promise<Response> => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    });
  };

  /**
   * Helper function to send GET requests
   * Just to prevent code duplicating
   */
  static sendGetRequest = (url: string, headers = {}): Promise<Response> => {
    return fetch(url, {
      method: 'GET',
      headers
    });
  };

  /**
   * Helper function to send GET requests
   * Just to prevent code duplicating
   */
  static sendPutRequest = (
    url: string,
    headers = {},
    body = {}
  ): Promise<Response> => {
    return fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });
  };

  /**
   * Helper function to send GET requests
   * Just to prevent code duplicating
   */
  static sendDeleteRequest = (
    url: string,
    headers = {},
    body = {}
  ): Promise<Response> => {
    return fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(body),
    });
  };

  /**
   * Creates url query string from javascript object
   */
  static getQueryFromObject = (obj: object): string => {
    let query = [];
    for (const key in obj) {
      // @ts-ignore
      const val = obj[key];
      query.push(`${key}=${val}`);
    }
    if (query.length === 0) {
      return '';
    }
    return '?' + query.join('&');
  };

  static getHeaders = (): object => {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    return headers;
  };

  /**
   * The function validates response.
   * If an error has been occured - it will throw such error and
   * in the code we can process it with .catch() method
   *
   * @param response Any response from any request
   * @returns Correct response
   */
  static validateResponse = <T>(response: any): T => {
    if (response) {
      if (response.message) {
        throw new Error(response.message);
      }
      if (response.error) {
        throw new Error(response.error);
      }
    }
    return response as T;
  };
}

export default HttpUtils;
