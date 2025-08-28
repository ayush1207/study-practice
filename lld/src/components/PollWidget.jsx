import { useState } from "react";
const PollWidget = () => {
  const [pollData, setPollData] = useState([
    {
      option: "A",
      chosen: 0,
      percentage : "0%",
    },
    {
      option: "B",
      chosen: 0,
      percentage : "0%",
    },
    {
      option: "C",
      chosen: 0,
      percentage : "0%",
    },
  ]);
  const updatePoll = (index) => {
    setPollData((prevData) => {
      let newData = [...prevData];
      newData[index].chosen += 1;
      newData= percentageCalc(newData);
      return newData;
    });
  };

  const percentageCalc = (poll) => {
    poll.forEach((item) => {
      item.percentage = calculatePercentage(item.chosen);
    });
    return poll;
  };

  const calculatePercentage = (chosen) => {
    if (pollData.length === 0 || chosen === 0) {
      return "0%";
    }
    // Calculate the total votes
    console.log("Calculating percentage for chosen:", chosen);
    const totalVotes = pollData.reduce((acc, item) => acc + item.chosen, 0);
    console.log("Total votes:", totalVotes);
    const per = ((chosen / totalVotes) * 100).toFixed(2) + "%" || "0%";
    return per;
  };

  return (
    <div className="parentContainer pollWidgetContainer">
      <div className="pollWidget">
        <h2 className="pollWidgetTitle">Poll Widget</h2>
        <div className="pollWidgetContent">
          {pollData.map((item, index) => {
            return (
              <div key={index} className="pollWidgetItem">
                <button onClick={() => updatePoll(index)}>{item.option}</button>
                <span className="centerLine">
                  <div
                    className="final"
                    style={{
                      height: "100%",
                      width: `${item.percentage}`,
                      backgroundColor: 'teal',
                    }}
                  ></div>
                </span>
                <span style={{ maxWidth: "40px" }}>
                  {item.percentage}
                </span>
                <span>{item.chosen}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PollWidget;
