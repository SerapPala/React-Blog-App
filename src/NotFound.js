import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <div className="not-found">
            <h2>sayfa bulunamadı</h2>
            <Link to="/">Anasayfa</Link>
        </div>
        
        </>
      );
}
 
export default NotFound;