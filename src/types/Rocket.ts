export type Rocket = {
    id: string;
    name: string;
    description: string;
    first_flight: string;
    success_rate_pct: string;
    height: { meters: number },
    diameter: { meters: number },
    mass: { kg: number },
    flickr_images: string[];
}