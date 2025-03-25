import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const res = await fetch('https://api.tu-cms.com/servicios');
    const data = await res.json();

    const servicios = data.map((servicio: any) => ({
        id: servicio.id,
        nombre: servicio.nombre,
        contenido: servicio.contentBlocks.map((block: any) => ({
            descripcion: block.descripcion,
            icono: block.icono,
            imagen: block.imagen
        }))
    }));

    return new Response(JSON.stringify(servicios), {
        headers: { 'Content-Type': 'application/json' }
    });
};
