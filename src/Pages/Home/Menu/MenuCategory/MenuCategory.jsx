import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, coverImage }) => {
    
    return (
        <div>
            {title && <Cover img={coverImage} title={title} />}
            <div className="mb-4 grid md:grid-cols-2">

                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            
                <Link className="btn btn-warning  mx-auto w-40" to={`/order/${title}`}>Order Items</Link>
            
        </div>
    );
};

export default MenuCategory;