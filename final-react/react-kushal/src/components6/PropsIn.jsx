// props ye ek shortform hai properties ka

// props facilitate a data transfer from parent to child

// data ko props ki help se parent to child transfer kar sakte hai

// props are immutable means does not changable

import newapiData from "../api/apiData.json";
import Lists from "./Lists";

const PropsIn = () => {
  return (
    <div>
      {newapiData.map((data) => {
        return <Lists key={data.id} data = {data}/>
      })}
    </div>
  );
};

export default PropsIn;
