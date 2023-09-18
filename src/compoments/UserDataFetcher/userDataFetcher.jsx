import React, { useEffect, useState } from "react";
import axios from "axios";

const userDataFetcher = () => {
  const URL_API = "https://api.github.com/users/fabpot/followers?per_page=6";

  const totalPages = 300;
  const [loadding, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const page = Math.min(currentPage + 1, totalPages);
      const res = await axios.get(`${URL_API}&page=${page}`);
      setUsers(res.data);
      setLoading(false);
      console.log(res.data);
    };

    fetchData();
  }, [currentPage]);

  return {
    loadding,
    users,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default userDataFetcher;
