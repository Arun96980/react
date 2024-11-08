import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("feed");
  const [tabData, setTabData] = useState(null);

  useEffect(() => {
    console.log("Request sent for:", currentTab);

    // Fetching data based on the currentTab
    fetch(`https://dummyjson.com/quotes/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setTabData(data); // Update tabData state with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentTab]); // Trigger useEffect when currentTab changes

  return (
    <div>
      <button
        onClick={() => setCurrentTab("feed")}
        style={{ color: currentTab === "feed" ? "red" : "black" }}
      >
        quote 1
      </button>
      <button
        onClick={() => setCurrentTab("notifications")}
        style={{ color: currentTab === "notifications" ? "red" : "black" }}
      >
        quote 2
      </button>
      <button
        onClick={() => setCurrentTab("jobs")}
        style={{ color: currentTab === "jobs" ? "red" : "black" }}
      >
        quote 3
      </button>

      <div style={{ marginTop: "20px" }}>
        {tabData ? (
          <div>
            <h3>Random Quote:</h3>
            <p>{tabData.quote}</p>
            <p>- {tabData.author}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
