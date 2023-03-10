import { useEffect, useState } from "react";
import dateFormat from "dateformat";

import Pagination from "../pagination/pagination.component";
import Filter from "../filter/filter.component";
import Status from "../../components/status/status.component";

import { BiFilter } from "react-icons/bi";
import { RxDotsVertical } from "react-icons/rx";

import "./userData.styles.scss";

const UserData = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(false);
  const [status, setStatus] = useState(false);

  const filterHandler = () => {
    setFilter(!filter);

    console.log(filter);
  };

  const statusHandler = () => {
    setStatus(!status);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const data = await response.json();

      // storing data in local storage
      localStorage.setItem("data", JSON.stringify(data));

      // retrieving data from local storage
      const userData = JSON.parse(localStorage.getItem("data"));

      // console.log(userData)
      setData(userData);
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {status ? <Status /> : ""}
      <div className="user-data-container">
        {filter ? <Filter /> : ""}
        <table>
          <thead>
            <tr className="data-heading-container">
              <th className="data-headings">
                Organization
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '-3px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
              <th className="data-headings">
                Username
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '-3px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
              <th className="data-headings">
                Email
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '-3px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
              <th className="data-headings">
                Phone Number
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '0px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
              <th className="data-headings">
                Date Joined
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '-3px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
              <th className="data-headings">
                Status
                <span className="data-heading-icon">
                  <BiFilter
                    onClick={filterHandler}
                    className="data-icon"
                    size="20px"
                    style={{
                      position: "absolute",
                      // top: '-3px',
                      cursor: "pointer",
                    }}
                  />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.slice(0, 10).map((item) => (
                <tr className="user-data-item-container" key={item.id}>
                  <td className="user-data-item">{item.orgName}</td>
                  <td className="user-data-item">{item.userName}</td>
                  <td className="user-data-item">{item.email}</td>
                  <td className="user-data-item">{item.phoneNumber}</td>
                  <td className="user-data-item">
                    {dateFormat(`${item.createdAt}`, "mmm dd, yyyy hh:M TT")}
                  </td>
                  <td className="user-data-item user-data-status-item">
                    <div className="status pending">Pending</div>
                    <div className="status-icon">
                      <RxDotsVertical
                        onClick={statusHandler}
                        size="20px"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="user-data-error-container">
                <td className="user-data-error">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default UserData;
