import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SpaceX Missions'
}

export default function MissionsLayout({children}: {children: React.ReactNode}) {
    return <div>
        <Link href="/">Home</Link> / <Link href="/missions">Missions</Link>
        {children}
    </div>
}