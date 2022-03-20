export const parseUrlParams = (params: unknown): URLSearchParams => {
  const requestParams = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(
      params as Record<string, string | number>
    )) {
      if (value !== undefined || value !== '') {
        requestParams.append(key, String(value));
      }
    }
  }

  return requestParams;
};
