import { shootDetails } from "../Common/data";
import {ShootCard} from "./ShootCard";
import "./Shootdetails.css"



function ShootComponent(){

  return (
    <>
      <div>
        <header>
          <h1>Shoot Details</h1>
        </header>
        <br></br>
      </div>
      <div className="app-container">
        {Object.entries(shootDetails).map(([key, shoot]) => (
          <ShootCard key={key} {...shoot} />
        ))}
      </div>
    </>
  );
}

export default ShootComponent ;
