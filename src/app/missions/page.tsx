import Link from "next/link";
import {MissionSummary} from "@/types/MissionSummary";
import {getAllMissions} from "@/service/missionsService";

function MissionSummaryItem({mission}: { mission: MissionSummary }) {
    return <li>
        <Link href={`/missions/${mission.mission_id}`}>{mission.mission_name}</Link>
    </li>;
}

export default async function RocketsPage() {
    const missionSummaries = await getAllMissions();
    const missionItems = missionSummaries.map((missionSummary: MissionSummary, index: number) => (<MissionSummaryItem key={index} mission={missionSummary} />));

    return <ul>{missionItems}</ul>;
}