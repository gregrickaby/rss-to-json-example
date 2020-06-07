# RSS to JSON Example

Converts an RSS feed to JSON with [rss-parser](https://www.npmjs.com/package/rss-parser) via React Hooks. Built on top of [Next.js](https://nextjs.org).

```js
import { useState, useEffect } from "react";
const Parser = require("rss-parser");
const parser = new Parser();

const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const feed_url = `https://webdevstudios.com/feed`;
  const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;

  useEffect(() => {
    (async () => {
      try {
        let feed = await parser.parseURL(CORS_PROXY + feed_url);
        setData(feed);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Feed</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
```
