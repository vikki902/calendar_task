import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;
const StyledTable = styled(Table)`
  width: 20%;
  margin: 50px 0 0 50px;
  float:left
`;

const StyledTable2 = styled(Table)`
  width: 70%;
  margin: 50px 0 0 50px;
  float:left
`

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  } 
`;

const User = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [tableVal , setTableVal] = useState([])
  const [tableval2 ,setTableVal2] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((res) => setValue(res.data))
      .catch((err) => console.error);
  }, []);

  const handelData = (i) => {
    setData([i.title])

    let str = i.start
    let newstr = str.replace("T","  ")
     let mainStr =  newstr.slice(0,17)

     let str2 = i.end
     let newstr2 = str2.replace("T","  ")
     let maiStr2 =newstr2.slice(0,17)
    
    setTableVal([mainStr])
    setTableVal2([maiStr2]) 

    

  };
  
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid align-items-center">
          <Link className="navbar-brand ms-2" to="/">
            <h3>Agenda</h3>
          </Link>

          <span className="navbar-brand mb-0 h2 ">
            <Link className="nav-link pe-0 " to={"/"}>
              logout
            </Link>
          </span>
        </div>
      </nav>

      <h1>Hello Students Todays Agenda</h1>

      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Avaliable Instructors</TableCell>
          </THead>
        </TableHead>

        <TableBody>
          {value?.map((key, i) => (
          <TRow>
              <TableCell className="datain-table" onClick={() => handelData(key)}>
                  {key.describe}
              </TableCell>
              </TRow>
          ))}
        </TableBody>
      </StyledTable>

      <StyledTable2>
        <TableHead>
          <THead>
            <TableCell>Status</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
          </THead>
        </TableHead>
        <TableBody>
            <TRow>
              <TableCell>{data}</TableCell>
              <TableCell>{tableVal}</TableCell>
              <TableCell>{tableval2}</TableCell>
            </TRow>
        </TableBody>
      </StyledTable2>

    </>
  );
};

export default User;
