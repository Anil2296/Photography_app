import { useEffect, useState } from 'react';
import { shootDetails, type ShootDetails } from "../Common/data";
import {ShootCard} from "./ShootCard";
import { useLoading } from '../../context/LoadingContext';
import "./Shootdetails.css"

function ShootComponent(){
  const { setLoading } = useLoading();
  const [shoots, setShoots] = useState<ShootDetails>({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadShoots = async () => {
      setLoading(true);
      setDataLoaded(false);
      await new Promise(resolve => setTimeout(resolve, 800));
      setShoots(shootDetails);
      setDataLoaded(true);
      setLoading(false);
    };
    loadShoots();
  }, []);

  if (!dataLoaded) {
    return null;
  }

  return (
    <>
      <div>
        <header>
          <h1>Shoot Details</h1>
        </header>
        <br />
      </div>
      <div className="app-container">
        {Object.entries(shoots).map(([key, shoot]) => (
          <ShootCard key={key} {...shoot} />
        ))}
      </div>
    </>
  );
}

export default ShootComponent ;
