import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [veri, setVeri] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState(null);

  useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("Veriler Çekilemedi");
          return res.json();
        })
        .then((data) => {
          /*    console.log(data); */
          
          setVeri(data);
          setYukleniyor(false);
        })
        .catch((err) => {
          setYukleniyor(false);
          setHata(err.message);
        });
    },
    [url]
  );

  return { veri, yukleniyor, hata };
};

export default useFetch;
