import { useEffect, useState } from "react";

const suggestionData = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];
const AutoComplete = () => {
  const [data, setData] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setSuggestions(() => {
        return suggestionData.filter((item) => {
          return data && item.toLowerCase().includes(data.toLowerCase());
        });
      });
    }, 500);
    return () => clearTimeout(delay);
  }, [data]);

  return (
    <div className="autoCompleteContainer">
      <div className="autoComplete">
        <input
          type="text"
          placeholder="Search..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        {data && suggestions && (
          <div className="suggestions">
            <ul>
              {suggestions.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
