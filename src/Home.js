
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {veri:blogs,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar')






  return (
    <div className="home">
        {hata && <div className="error">{hata}</div>}
        {yukleniyor && <div className="loading">{yukleniyor}</div>}
      {blogs &&
      <BlogList
      bloglar={blogs}
      baslik="Bütün Başlıklar"
     
    />}
     
    </div>
  );
};

export default Home;
