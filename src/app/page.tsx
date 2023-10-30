import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="h1">Welcome to SpaceX Explorer</h1>
      <div>
        <p>You can start by viewing details of the different SpaceX <Link href="/rockets">rockets</Link>.</p>
      </div>
    </main>
  )
}
