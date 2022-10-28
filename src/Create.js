import { useState } from "react";
import { useHistory} from "react-router-dom"
const Create = () => {

  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [yazar, setYazar] = useState("");
  const [yukleniyor,setYukleniyor]=useState(false);

  const history= useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setYukleniyor(true);

    const yazi = { ad:baslik, aciklama, yazar };

    fetch("http://localhost:8000/yazilar/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(yazi),
    }).then(() => {
      setYukleniyor(false);
      
      history.push("/")
    });
  };

  return (
    <div className="create">
      <h2 style={{ color: "#ff793f" }}>Yeni Yazı Ekle</h2>

      <form onSubmit={handleSubmit}>
        <label>Yazı Başlık</label>
        <input
          type="text"
          required
          value={baslik}
          onChange={(e) => setBaslik(e.target.value)}
        />
        <label>Yazı Açıklama</label>
        <textarea
          required
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
        ></textarea>
        <label>Yazar</label>
        <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
          <option value="serap">Serap</option>
          <option value="sinem">Sinem</option>
          <option value="selin">Selin</option>
        </select>
        { !yukleniyor && <button  className="btn">Ekle</button>}
        { yukleniyor && <button  className="btn" disabled>Yukleniyor</button>}
      </form>
    </div>
  );
};

export default Create;
