import {RocketSummary} from "@/types/RocketSummary";
import {RocketDetails} from "@/types/RocketDetails";

export async function getAllRockets(): Promise<RocketSummary[]> {
    const rocketsSummaryResponse = await fetch(process.env.SPACEX_API_ROCKETS_ENDPOINT!);
    const rocketsSummary = await rocketsSummaryResponse.json();

    return rocketsSummary as RocketSummary[]
}

export async function getRocket(id: string): Promise<RocketDetails> {
    const rocketDetailsResponse = await fetch(`${process.env.SPACEX_API_ROCKETS_ENDPOINT!}/${id}`);
    const rocketDetails = await rocketDetailsResponse.json();
    console.log(rocketDetails)

    return rocketDetails as RocketDetails;
}