import {getMission} from "@/service/missionsService";

export default async function MissionDetailsPage({ params }: { params: {id: string }}) {
    const mission = await getMission(params.id);

    return <div>
        <h1>Mission {mission.mission_name} Details</h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Wikipedia</th>
                <th>Payload IDs</th>
            </tr>
            </thead>
            <tbody >
            <tr>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td><a target="_blank" href={mission.wikipedia}>Further information</a></td>
                <td><ul>{mission.payload_ids?.map((payload_id: string, index: number) =>
                    (<li key={index}>{payload_id}</li>))}</ul></td>
            </tr>
            </tbody>
        </table>
    </div>
}