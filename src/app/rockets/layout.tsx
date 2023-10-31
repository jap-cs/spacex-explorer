import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SpaceX Rockets'
}

export default function RocketLayout({children}: {children: React.ReactNode}) {
    return <div>
        <Link href="/">Home</Link> / <Link href="/rockets">Rockets</Link>
        {children}
    </div>
}