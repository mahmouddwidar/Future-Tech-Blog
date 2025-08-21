'use server';

import { cookies } from 'next/headers';
import { verifyTokenForPages } from '@/utils/verifyToken';

export async function getServerUser() {
    try {
        const token = (await cookies()).get('token')?.value;
        if (!token) return null;
        const userFromToken = verifyTokenForPages(token);
        return userFromToken;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}