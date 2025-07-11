export const onRequest = async (context: any) => {
    try {
        const url = new URL(context.request.url);
        const backendUrl = context.env?.VITE_API_BASE_URL || 'http://localhost:3000';

        const reservedRoutes = [
            '', 'dashboard', 'signin', 'signup', 'analytics', 'api', 'assets', 'static', 'favicon.ico', 'robots.txt', 'manifest.json', 'index.html'
        ];

        const path = url.pathname.slice(1).split('/')[0];

        if (!path || reservedRoutes.includes(path)) {
            return await context.next();
        }

        const response = await fetch(backendUrl + url.pathname, {
            method: context.request.method,
            headers: context.request.headers,
            body: context.request.body,
            redirect: 'manual',
        });

        if (response.status === 301 || response.status === 302) {
            const location = response.headers.get('Location');
            if (location) {
                return Response.redirect(location, response.status);
            }
        }

        return await context.next();

    } catch (error) {
        return await context.next();
    }
};