import {RocketSummary} from "@/types/RocketSummary";
import {getAllRockets} from "@/service/rocketsService";
import Link from "next/link";
import {SearchBar} from "@/app/SearchBar";

function RocketSummaryItem({rocket}: { rocket: RocketSummary }) {
    return <li>
        <Link href={`/rockets/${rocket.id}`}>{rocket.name}</Link>
    </li>;
}

// This component is an asynchronous, server-side component.
// Its data will be fetched and filtered on the server based on the provided query param. It will be rendered on the server and then sent to the client.
export default async function RocketsPage({ searchParams }: { searchParams: { name?: string }}) {
    const rockets = await getAllRockets();
    const filteredRockets = rockets.filter((rocket: RocketSummary) => {
        if (!searchParams.name) {
            return true;
        }
        return rocket.name.toLowerCase().includes(searchParams.name.toLowerCase());
    });
    const rocketItems = filteredRockets.map((rocket: RocketSummary, index: number) => (<RocketSummaryItem key={index} rocket={rocket} />));

    return (
        <>
            <h1>Rockets2</h1>
            <SearchBar />
            <ul>{rocketItems}</ul>
        </>
    )
}