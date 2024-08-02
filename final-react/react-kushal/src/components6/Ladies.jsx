
import newapiData from "../api/Ladies.json";
import NewGirlapi from "./NewGirlapi";

const Ladies = () => {
  return (
    <div>
      {newapiData.GirlImages.map((data, index) => (
        <NewGirlapi key={index} data={data} />
      ))}
    </div>
  );
};

export default Ladies;
