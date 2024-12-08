import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../../assets/menu/banner3.jpg'; 
import PopularMenu from '../../PopularMenu/PopularMenu'; 
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

import dessertImage from "../../../../assets/menu/dessert-bg.jpeg"; 
import pizzaImage from "../../../../assets/menu/pizza-bg.jpg"; 
import soupImage from "../../../../assets/menu/soup-bg.jpg"; 
import saladImage from "../../../../assets/menu/salad-bg.jpg"; 


const Menu = () => {
    const [menu]= useMenu(); 
    const offered= menu.filter(item=>item.category=='offered'); 
    const desserts= menu.filter(item=>item.category=='dessert'); 
    const pizzas= menu.filter(item=>item.category=='pizza'); 
    const soups= menu.filter(item=>item.category=='soup'); 
    const salads= menu.filter(item=>item.category=='salad'); 
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"/>   
            {/* Offered items     */}
            <SectionTitle subHeading={"Don't Miss! "} heading={"Todays Offer"}/>
            <MenuCategory items={offered} />
            {/* dessert items */}
            <MenuCategory items={desserts} title="Dessert Items" coverImage={dessertImage}/> 
            {/* pizza items */}
            <MenuCategory items={pizzas} title="Pizza Items" coverImage={pizzaImage}/> 
            {/* salad items  */}
            <MenuCategory items={salads} title="Salad Items" coverImage={saladImage}/> 
            {/* soup items  */}
            <MenuCategory items={soups} title="Soup Items" coverImage={soupImage}/> 
        </div>

    );
};

export default Menu;