import React, { useEffect } from "react";

const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const fetchMoreData = (startIndex, endIndex) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = data.slice(startIndex, endIndex);
      resolve(newData);
    }, 1000); // Simulate network delay
  });
};

const InfiniteScroll = () => {
  const [items, setItems] = React.useState([]);
  const handleScrollEvent = async (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if(clientHeight + scrollTop >= scrollHeight - 5) {
        const currentLength = items.length;
        const newItems = await fetchMoreData(currentLength, currentLength + 15);
        setItems((prevItems) => [...prevItems, ...newItems]);
        console.log("Fetching more data", newItems);
    }
    console.log("Scroll event triggered", scrollTop, scrollHeight, clientHeight);
  };

  useEffect(() => {
    async function fetchData() {
      const displayData = await fetchMoreData(0, 15);
        console.log("Fetched data:", displayData);
      setItems(displayData);
    }
    fetchData();
  }, []);

  return (
    <div className="infiniteScrollContainer parentContainer">
      <div
        className="infiniteScrollContent"
        onScroll={(e) => handleScrollEvent(e)}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="infiniteScrollItem"
            style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
