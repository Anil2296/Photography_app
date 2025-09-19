import { CameraCard } from "./Cameracard";
import { Cameradetails } from "../Common/data";
import "./Cameradetails.css";


function CameraComponent() {
    return (
        <>
            <header>
                <h1>Camera Details
                </h1>
            </header>
            <br></br>
            <div className="app-container">
                {Object.entries(Cameradetails).map(([key, value]) => (
                    <CameraCard key={key}{...value} />
                )
                )}
            </div>
        </>
    )
}

export default CameraComponent;