import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
        return new Response(JSON.stringify({ error: 'Falta el parámetro de búsqueda' }), { status: 400 });
    }

    const res = await fetch(`https://api.tu-cms.com/centros?search=${query}`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
};
