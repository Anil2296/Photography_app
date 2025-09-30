import { useEffect, useState } from 'react';
import { CameraCard } from "./Cameracard";
import { Cameradetails, type Cameras } from "../Common/data";
import { useLoading } from '../../context/LoadingContext';
import "./Cameradetails.css";

function CameraComponent() {
    const { setLoading } = useLoading();
    const [cameras, setCameras] = useState<Cameras>({});
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const loadCameras = async () => {
            setLoading(true);
            setDataLoaded(false);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCameras(Cameradetails);
            setDataLoaded(true);
            setLoading(false);
        };
        loadCameras();
    }, []);
    
    if (!dataLoaded) {
        return null;
    }

    return (
        <>
            <header>
                <h1>Camera Details</h1>
            </header>
            <br />
            <div className="app-container">
                {Object.entries(cameras).map(([key, value]) => (
                    <CameraCard key={key} {...value} />
                ))}
            </div>
        </>
    )
}

export default CameraComponent;