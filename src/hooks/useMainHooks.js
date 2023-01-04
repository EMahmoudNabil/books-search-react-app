import React, { useState } from "react";
import { api_key } from "../api/api";
import axios from "axios";

export const UseMainHooks = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=
              ${search}
              &key=${api_key}&maxResults=40`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return [search, setSearch, bookData, setData, searchBook];
};
