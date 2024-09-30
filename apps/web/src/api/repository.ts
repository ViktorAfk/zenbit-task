const BASE_URL = 'http://localhost:8080';

export const getAuthorizationInformation = async <T, P>(
  path: string,
  params: P,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 404) {
      throw new Error('404, Not found');
    }

    if (response.status === 500) {
      throw new Error('500, internal server error');
    }

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch', error);
    throw new Error();
  }
};
