import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, coverImage }) => {
    return (
        <div>
            {title && <Cover img={coverImage} title="Our Menu" />}
            <div className="mb-4 grid md:grid-cols-2">

                {
                    items.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;