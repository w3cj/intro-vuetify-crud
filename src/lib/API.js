import ezFetch from 'ez-fetch';

const API_URL = 'http://localhost:3000/api/v1/products';

export default {
  getProducts() {
    return ezFetch.get(API_URL);
  },
  getProduct(id) {
    return ezFetch.get(`${API_URL}/${id}`);
  },
  createProduct(product) {
    return ezFetch.post(API_URL, product);
  },
  updateProduct(id, product) {
    return ezFetch.put(`${API_URL}/${id}`, product);
  },
  deleteProduct(id) {
    return ezFetch.delete(`${API_URL}/${id}`);
  },
};
