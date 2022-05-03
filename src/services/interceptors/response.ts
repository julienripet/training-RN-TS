export function responseHandler(response: {data?: any}): Object {
  if (response.data.errors?.length) {
    return Promise.reject(response.data.errors);
  }
  return response.data;
}
