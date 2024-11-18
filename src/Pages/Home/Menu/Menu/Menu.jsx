import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../../assets/menu/banner3.jpg'; 
import PopularMenu from '../../PopularMenu/PopularMenu'; 

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"/>       

        </div>

    );
};

export default Menu;