import React, { useEffect, useState } from 'react';

function App() {
  const [headerData, setHeaderData] = useState([]);
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    const postData = async () => {
      const phonenumber = '8171109175'; 

      try {
        const response = await fetch('https://chimpu.xyz/api/post.php', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({phonenumber}),
        });


        if (response.ok) {
          const headers = response.headers;
          const headersArray = [];
          headers.forEach((value, name) => {
            headersArray.push(`${name}: ${value}`);
          });
          setHeaderData(headersArray);

          const responseData = await response.json(); 
      console.log(responseData);
          setResponseData(responseData);
        } else {
          console.error('Failed to post data to the API. Status:', response.status);
          const responseData = await response.json();
          console.log(responseData);

          setResponseData(responseData);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    postData();
  }, []);

  return (
    <div>
      <p>The headers and response data received from the API.</p>
      <p>Headers:</p>
      <ul>
        {headerData.map((header, index) => (
          <li key={index}>{header}</li>
        ))}
      </ul>
      <p>Response Data: {responseData?.msg}</p>
    </div>
  );
}

export default App;
