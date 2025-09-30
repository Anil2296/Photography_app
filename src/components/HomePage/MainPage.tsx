import { useState, useEffect } from "react";
import PhotographerComponent from "../Photograher/photographerDetails";
import ShootDetails from "../Shoot/Shootdetails";
import Cameradetails from "../Camera/Cameradetails";
import { useLoading } from '../../context/LoadingContext';
import "./MainPage.css";

function MainPage() {
    const [activeTab, setActiveTab] = useState("MainPage");
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 800);
    }, []);

    const handleTabChange = (tab: string) => {
        setLoading(true);
        setActiveTab(tab);
        setTimeout(() => setLoading(false), 600);
    };

    return (
        <div className="main-container">
            <nav className="nav">
                <div className="nav-buttons">
                    <button onClick={() => handleTabChange("MainPage")}>Home</button>
                    <button onClick={() => handleTabChange("photographers")}>Photographers</button>
                    <button onClick={() => handleTabChange("shoots")}>Shoot Details</button>
                    <button onClick={() => handleTabChange("cameradetails")}>Camera Details</button>
                </div>
                <div className="contact-info">
                    <p>📞 +91 6302711927</p>
                    <p>📩 Anil@photography.com</p>
                </div>
            </nav>

            <div className="content">
                {activeTab === "MainPage" && (
                    <div className="homepage">
                        <h1>Welcome to Photography Studio</h1>
                        <div className="photo-gallery">
                            <img src="../src/assets/p1.jpg" alt="Photo 1" />
                            <img src="../src/assets/p2.jpg" alt="Photo 2" />
                            <img src="../src/assets/p3.jpg" alt="Photo 3" />
                            <img src="../src/assets/p4.jpg" alt="Photo 4" />
                            <img src="../src/assets/p2.jpg" alt="Photo 2" />
                            <img src="../src/assets/p3.jpg" alt="Photo 3" />
                            <img src="../src/assets/p4.jpg" alt="Photo 4" />
                            <img src="../src/assets/p1.jpg" alt="Photo 1" />
                        </div>
                    </div>
                )}
                {activeTab === "photographers" && <PhotographerComponent />}
                {activeTab === "shoots" && <ShootDetails />}
                {activeTab === "cameradetails" && <Cameradetails />}
            </div>
        </div>
    );
}

export default MainPage;
