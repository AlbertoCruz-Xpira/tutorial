import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';

const SECRET_KEY = import.meta.env.JWT_SECRET;

export const POST: APIRoute = async ({ request }) => {
    const { token } = await request.json();

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return new Response(JSON.stringify({ user: decoded }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Token inválido' }), { status: 401 });
    }
};
