import {RocketSummary} from "@/types/RocketSummary";
import {getAllRockets} from "@/service/rocketsService";
import Link from "next/link";

function RocketSummaryItem({rocket}: { rocket: RocketSummary }) {
    return <li>
        <Link href={`/rockets/${rocket.id}`}>{rocket.name}</Link>
    </li>;
}

export default async function RocketsPage() {
    const rockets = await getAllRockets();
    const rocketItems = rockets.map((rocket: RocketSummary, index: number) => (<RocketSummaryItem key={index} rocket={rocket} />));

    return <ul>{rocketItems}</ul>;
}