import { useEffect, useState } from "react";

interface Plant {
  id: number;
  name: string;
  image: string;
}

const Plants = () => {
  const key = import.meta.env.VITE_REACT_API_KEY;
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    fetch(`https://perenual.com/api/species-list?key=${key}&page=1`)
      .then((response: Response) => response.json())
      .then((data: any) => {
        const filteredData = data.data.map((item: any) => ({
          id: item.id,
          name: item.common_name,
          image:
            item.default_image?.medium_url ||
            "https://placehold.co/500x500?text=?",
        }));
        setPlants(filteredData);
      });
  }, [key]);

  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 items-center">
        {plants.map((plant) => (
          <div key={plant.id}>
            <h2>{plant.name}</h2>
            <img src={plant.image} alt={plant.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
