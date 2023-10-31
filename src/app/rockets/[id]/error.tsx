'use client'

import {useEffect} from 'react'
import {useRouter} from "next/navigation";

export default function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const router = useRouter()

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
            <button onClick={() => router.push("/rockets")}>Back to Rockets</button>
        </div>
    )
}