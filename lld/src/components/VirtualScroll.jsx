import React from "react";

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const   getData = (start, end) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.slice(start, end));
    }, 1000);
  });
};

const VirtualScroll = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const initialData = await getData(0, 15);
      setItems(initialData);
      console.log("Initial data fetched:", initialData);
    };

    fetchData();
  }, []);

  const handleScroll = async(e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log(
      "Scroll event triggered",
      scrollTop,
      scrollHeight,
      clientHeight
    );
    if(scrollTop + clientHeight >= scrollHeight - 5) {
      const lastItem = items[items.length - 1];
      const newItems = await getData(lastItem, lastItem + 5);
      setItems((prevItems) => [...prevItems, ...newItems]);
      console.log("Fetching more data", newItems);
    }
  };
  return (
    <div className="virtualScrollContainer parentContainer">
      <div className="virtualScrollContent" onScroll={(e) => handleScroll(e)}>
        {items.map((item, index) => (
          <div
            key={index}
            className="virtualScrollItem"
            style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScroll;
