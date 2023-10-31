import {RocketSummary} from "@/types/RocketSummary";
import {Rocket} from "@/types/Rocket";

export async function getAllRockets(): Promise<RocketSummary[]> {
    const rocketsSummaryResponse = await fetch(process.env.SPACEX_API_ROCKETS_ENDPOINT!);
    const rocketsSummary = await rocketsSummaryResponse.json();

    return rocketsSummary as RocketSummary[]
}

export async function getRocket(id: string): Promise<Rocket> {
    const rocketDetailsResponse = await fetch(`${process.env.SPACEX_API_ROCKETS_ENDPOINT!}/${id}`);
    const rocketDetails = await rocketDetailsResponse.json();

    return rocketDetails as Rocket;
}