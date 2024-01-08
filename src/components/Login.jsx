import React, { useEffect, useState } from "react";

const Login = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((raw) => raw.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
    <center>
      {data.map((item) => {
        return (
          <ul>
            <li>
              <div key={item.id}>{item.title}</div>
            </li>
            <li>
              <div>{item.userid}</div>
            </li>
          </ul>
        );
      })}
      </center>
    </div>
  );
};
export default Login;
