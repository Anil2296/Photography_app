export type Camera = {
    brand: string,
    model: string,
    sensorType: string
    status: string
}

export type Photographer = {
    name: string;
    level: string;
    email: string;
    phone: string;
};

export type ShootDetailsProps = {
    photographerName: string;
    location: string;
    cameraDetails: string;
    date: string
};

export type Photographers = { [key: string]: Photographer };
export type Cameras = { [key: string]: Camera };
export type ShootDetails = { [key: string]: ShootDetailsProps };

export const Cameradetails: Cameras = {
    C1: { brand: "Canon", model: "EOS R5", sensorType: "Full-frame", status: "working" },
    C2: { brand: "Nikon", model: "D850", sensorType: "Full-frame", status: "working" },
    C3: { brand: "Sony", model: "A7 III", sensorType: "Full-frame", status: "working" },
    C4: { brand: "Fujifilm", model: "X-T4", sensorType: "APS-C", status: "not-working" },
    C5: { brand: "Olympus", model: "OM-D E-M1", sensorType: "Micro Four Thirds", status: "not-working" },
    C6: { brand: "Panasonic", model: "GH5", sensorType: "Micro Four Thirds", status: "working" },
    C7: { brand: "Leica", model: "M10", sensorType: "Full-frame", status: "working" },
    C8: { brand: "Pentax", model: "K-1 Mark II", sensorType: "Full-frame", status: "not-working" }
}

export const initialPhotographers: Photographers = {
    P1: { name: "Anil", level: "Professional", email: "anil@example.com", phone: "5551234" },
    P2: { name: "Rohith", level: "Intermediate", email: "Rohith@example.com", phone: "5555678" },
    P3: { name: "Ranadheer", level: "Expert", email: "Ranadheer@example.com", phone: "5558765" },
    P4: { name: "Venu", level: "Beginner", email: "Venu@example.com", phone: "5554321" },
    P5: { name: "Teja", level: "Professional", email: "Teja@example.com", phone: "5551357" },
    P6: { name: "Adi", level: "Intermediate", email: "Adi@example.com", phone: "5552468" },
    P7: { name: "Kumar", level: "Expert", email: "Kumar@example.com", phone: "5559753" },
    P8: { name: "Prince", level: "Professional", email: "Prince@example.com", phone: "5558642" },
    P9: { name: "Nandhan", level: "Advanced", email: "Nandhan@example.com", phone: "5551239" }
};

export const shootDetails: ShootDetails = {
    S1: { photographerName: "Anil", location: "Yosemite National Park", cameraDetails: "Canon EOS R5 with 24-70mm lens", date: "2024-07-01" },
    S2: { photographerName: "Rohith", location: "Golden Gate Bridge", cameraDetails: "Nikon D850 with 50mm lens", date: "2024-07-05" },
    S3: { photographerName: "Ranadheer", location: "Hawaii Volcanoes National Park", cameraDetails: "Sony Alpha A7 III with 85mm lens", date: "2024-07-10" },
    S4: { photographerName: "Venu", location: "Grand Canyon", cameraDetails: "Fujifilm X-T4 with 24-70mm lens", date: "2024-07-15" },
    S5: { photographerName: "Teja", location: "Machu Picchu", cameraDetails: "Leica Q2 with 85mm lens", date: "2024-07-20" },
    S6: { photographerName: "Adi", location: "Yellowstone National Park", cameraDetails: "Canon EOS 5D Mark IV with 50mm lens", date: "2024-07-25" },
    S7: { photographerName: "Kumar", location: "Niagara Falls", cameraDetails: "Nikon Z6 with 24-70mm lens", date: "2024-07-30" },
    S8: { photographerName: "Prince", location: "Sedona, Arizona", cameraDetails: "Sony Alpha A7R III with 85mm lens", date: "2024-08-02" },
    S9: { photographerName: "Nandhan", location: "Mount Rushmore National Memorial", cameraDetails: "Canon EOS R6 with 50mm lens", date: "2024-08-06" }
};


