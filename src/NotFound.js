import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <div className="not-found">
            <h2>sayfa bulunamad─▒</h2>
            <Link to="/">Anasayfa</Link>
        </div>
        
        </>
      );
}
 
export default NotFound;