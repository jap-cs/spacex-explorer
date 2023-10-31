import Link from "next/link";
import {MissionSummary} from "@/types/MissionSummary";
import {getAllMissions} from "@/service/missionsService";
import {SearchBar} from "@/app/SearchBar";

function MissionSummaryItem({mission}: { mission: MissionSummary }) {
    return <li>
        <Link href={`/missions/${mission.mission_id}`}>{mission.mission_name}</Link>
    </li>;
}

export default async function RocketsPage({ searchParams }: { searchParams: { name?: string }}) {
    const missionSummaries = await getAllMissions();
    const filteredMissionSummaries = missionSummaries.filter((missionSummary: MissionSummary) => {
        if (!searchParams.name) {
            return true;
        }
        return missionSummary.mission_name.toLowerCase().includes(searchParams.name.toLowerCase());
    });
    const missionItems = filteredMissionSummaries.map((missionSummary: MissionSummary, index: number) => (<MissionSummaryItem key={index} mission={missionSummary} />));

    return (
        <>
            <h1>Missions</h1>
            <SearchBar />
            <ul>{missionItems}</ul>
        </>
    );
}