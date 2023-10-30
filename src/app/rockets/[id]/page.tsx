import {getRocket} from "@/service/rocketsService";

export default async function RocketDetailsPage({ params }: { params: {id: string }}) {
    const rocket = await getRocket(params.id);

    return <div>
        <h1>Rocket {rocket.name} Details</h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>First Flight</th>
                <th>Success Rate (%)</th>
                <th>Height (m)</th>
                <th>Diameter (m)</th>
                <th>Mass (kg)</th>
                <th>Images</th>
            </tr>
            </thead>
            <tbody >
            <tr>
                <td>{rocket.name}</td>
                <td>{rocket.description}</td>
                <td>{rocket.first_flight}</td>
                <td>{rocket.success_rate_pct}</td>
                <td>{rocket.height?.meters}</td>
                <td>{rocket.diameter?.meters}</td>
                <td>{rocket.mass?.kg}</td>
                <td><ul>{rocket.flickr_images?.map((url: string, index: number) =>
                    (<li key={index}><a target="_blank" href={url}>img {index}</a></li>))}</ul></td>
            </tr>
            </tbody>
        </table>
    </div>
}