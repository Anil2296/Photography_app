import { useState } from 'react'
import type { Camera } from '../Common/data';

export function CameraCard({ brand, model, sensorType, status }: Camera) {
    const [Status, showstatus] = useState(false);
    return (
        <div className="camera-card">
            <h2>{brand}</h2>
            <p><strong>Model:</strong>{model}</p>
            <p><strong>sensorType:</strong>{sensorType}</p>
            <button onClick={() => showstatus(!Status)}>
                {Status ? "Hide Satus" : "show Satus"}
            </button>
            {Status && <p><strong>Status:</strong>{status}</p>}
        </div>

    )

}