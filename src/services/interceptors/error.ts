export function errorHandler(error: any) {
  if (error.response?.data) {
    if (error.response.data?.errors) {
      return Promise.reject(error.response.data.errors);
    }

    return Promise.reject(error.response.data);
  }

  return Promise.reject(error);
}
