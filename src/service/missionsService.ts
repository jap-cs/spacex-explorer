import {Mission} from "@/types/Mission";
import {MissionSummary} from "@/types/MissionSummary";

export async function getAllMissions(): Promise<MissionSummary[]> {
    const missionsSummaryResponse = await fetch(process.env.SPACEX_API_MISSIONS_ENDPOINT!);
    const missionsSummary = await missionsSummaryResponse.json();

    return missionsSummary as MissionSummary[];
}

export async function getMission(id: string): Promise<Mission> {
    const missionResponse = await fetch(`${process.env.SPACEX_API_MISSIONS_ENDPOINT!}/${id}`);
    const mission = await missionResponse.json();

    return mission as Mission;
}