import { useEffect, useState } from "react";
import Card from "./Card";
import { CardData } from "../../type";
import { useSearch } from "../../SearchContext";

function Main() {
  const { searchQuery } = useSearch();
  const [response, setResponse] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://cloud.codesupply.co/endpoint/react/data.json")
        .then((data) => data.json())
        .then((data) => setResponse(data));
    };
    fetchData();
  }, [searchQuery, setResponse]);

  const filteredData = response.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <>
      <div className="w-full h-full flex justify-center mx-auto">
        <div className="w-[1160px] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20 mb-10">
          {filteredData.map((item: CardData) => {
            return (
              <div key={item.title}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      {!filteredData.length && (
        <div className="w-full flex justify-center">
          <p className="text-lg text-[#9E9E9E] italic">No content to show</p>
        </div>
      )}
    </>
  );
}

export default Main;
