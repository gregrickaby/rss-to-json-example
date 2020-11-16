import { useState, useEffect } from "react";
const Parser = require("rss-parser");
const parser = new Parser();

const Homepage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;

  // CHANGE THIS TO MATCH YOUR RSS FEED!
  const feed_url = `https://webdevstudios.com/feed`;

  /**
   * A very basic fetcher. (note the lack of error checking!)
   */
  async function fetchFeed() {
    const feed = await parser.parseURL(CORS_PROXY + feed_url);
    setData(feed);
    setLoading(false);
  }

  /**
   * On mount, fetch the feed.
   */
  useEffect(() => {
    fetchFeed();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>RSS Feed</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Homepage;
