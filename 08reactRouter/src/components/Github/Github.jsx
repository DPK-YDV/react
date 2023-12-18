import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/DPK-YDV")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className=" flex justify-center bg-gray-600 text-white p-4 text-3xl items-center">
      <img
        src={data.avatar_url}
        alt=""
        style={{ height: "200px", borderRadius: "50%" }}
      />
      <div className=" mx-8">
        Username: {data.login} <br />
        Github followers: {data.followers} <br />
        <div className=" my-7  text-blue-200 bg-orange-600  pl-10 rounded-lg py-6">
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
