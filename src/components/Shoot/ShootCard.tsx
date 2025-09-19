import { useState } from "react";
import type { ShootDetailsProps } from "../Common/data";

export function ShootCard({ photographerName, location, cameraDetails, date }: ShootDetailsProps) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="shoot-card">
            <h2>{photographerName}</h2>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Date:</strong> {date}</p>

            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Camera Details" : "Show Camera Details"}
            </button>

            {showDetails && <p><strong>Camera:</strong> {cameraDetails}</p>}
        </div>
    );
}