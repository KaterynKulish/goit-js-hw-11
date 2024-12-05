const API_KEY = '47426000-935f334b470be797f22188feb';
const BASE_URL = `https://pixabay.com/api/`;

export function servicePhoto(value) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // console.log(response.json());

    return response.json();
  });
}
