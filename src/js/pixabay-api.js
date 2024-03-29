export function fetchUsers(value) {
    const searchParams = new URLSearchParams({
      key: '43103378-6af8ee9eb079e11667ecfffdc',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }