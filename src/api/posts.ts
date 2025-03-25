import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
    const API_URL = 'https://api.tu-cms.com/publicaciones';
    const API_KEY = import.meta.env.CMS_API_KEY; // Se almacena en variables de entorno

    const res = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    if (!res.ok) {
        return new Response(JSON.stringify({ error: 'No se pudo obtener publicaciones' }), { status: 500 });
    }

    const data = await res.json();

    // Filtrar datos antes de enviarlos al frontend
    const publicaciones = data.map((pub: any) => ({
        id: pub.id,
        nombre: pub.nombre,
        contenido: pub.contenido,
        categoria: pub.categoria,
        etiquetas: pub.etiquetas
    }));

    return new Response(JSON.stringify(publicaciones), {
        headers: { 'Content-Type': 'application/json' }
    });
};
