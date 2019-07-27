export const get = url => fetch(url).then(res => res.json());

export const post = (url, data) => fetch(url, { method: 'POST', body: JSON.stringify(data) }).then(res => res.json());