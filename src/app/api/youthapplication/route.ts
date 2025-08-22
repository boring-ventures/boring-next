import { NextRequest, NextResponse } from 'next/server';
import { API_BASE } from '@/lib/api';

// GET: Listar postulaciones de jóvenes
export async function GET(request: NextRequest) {
    try {
        console.log('🔍 API: Received request for youth applications');
        const { searchParams } = new URL(request.url);

        // Forward all search parameters to backend
        const url = new URL(`${API_BASE}/youthapplication`);
        searchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
        });

        console.log('🔍 API: Forwarding to backend:', url.toString());
        console.log('🔍 API: Authorization header:', request.headers.get('authorization') ? 'Present' : 'Missing');

        const response = await fetch(url.toString(), {
            headers: {
                'Authorization': request.headers.get('authorization') || '',
                'Content-Type': 'application/json',
            },
        });

        console.log('🔍 API: Backend response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('🔍 API: Backend error:', errorText);
            return NextResponse.json(
                { message: `Backend error: ${response.status} ${errorText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        console.log('🔍 API: Backend data received, applications count:', data.length || 0);
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error('Error in youth applications route:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST: Crear nueva postulación de joven
export async function POST(request: NextRequest) {
    try {
        console.log('🔍 API: Received request to create youth application');

        const formData = await request.formData();
        console.log('🔍 API: Form data received:', Object.fromEntries(formData.entries()));

        const url = `${API_BASE}/youthapplication`;
        console.log('🔍 API: Forwarding to backend:', url);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': request.headers.get('authorization') || '',
            },
            body: formData,
        });

        console.log('🔍 API: Backend response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('🔍 API: Backend error:', errorText);
            return NextResponse.json(
                { message: `Backend error: ${response.status} ${errorText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        console.log('🔍 API: Backend data received:', data);
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error('Error in create youth application route:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
} 