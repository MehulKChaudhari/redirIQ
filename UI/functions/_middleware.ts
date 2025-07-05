export const onRequest = async (context: any) => {
  const url = new URL(context.request.url);

  const backendUrl = context.env?.VITE_API_BASE_URL || 'http://localhost:3000';

  if (/^\/[a-zA-Z0-9]{6,}$/.test(url.pathname)) {
    return fetch(backendUrl + url.pathname, {
      method: context.request.method,
      headers: context.request.headers,
      body: context.request.body,
      redirect: 'manual',
    });
  }

  return context.next();
}; 