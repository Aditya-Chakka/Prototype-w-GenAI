// App.js
import React, { useState } from "react";
import WebScraper from "./WebScraper";

function App() {
  const [url, setUrl] = useState("");
  const [scrapedData, setScrapedData] = useState(null);

  const handleScrape = async () => {
    try {
      const data = await WebScraper(url);
      setScrapedData(data);
    } catch (error) {
      console.error("Error scraping data:", error);
    }
  };

  return (
    <div>
      <h1>Event Data Scraper</h1>
      <input
        type="text"
        placeholder="Enter URL to scrape"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleScrape}>Scrape Data</button>
      {scrapedData && (
        <div>
          <h2>Scraped Data</h2>
          <pre>{JSON.stringify(scrapedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
