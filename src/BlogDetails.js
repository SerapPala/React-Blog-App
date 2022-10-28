import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const history=useHistory();

  const { veri: blog, yukleniyor, hata } = useFetch('http://localhost:8000/yazilar/' + id);
  console.log(blog) 

const handleDelete = () => {
  fetch('http://localhost:8000/yazilar/' + id,{
    method:'DELETE'

  }).then(()=>{
    console.log('silindi');
    history.push("/")
  })
}


  return (
    <div className="blog-details">
      {yukleniyor && <div>yükleniyor..</div>}
      {hata && <div>{hata}</div>}
      {blog && (
        <article>
          <div>
            <h3>ID: {id}</h3>
          </div>

          <h2>{blog.ad}</h2>
          <h2>Yazar: {blog.yazar}</h2>
          <div>Açıklama: {blog.aciklama}</div>
          <button className="btn" onClick={handleDelete}>Sil</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
