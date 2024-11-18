import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu(); 
    const popular= menu.filter(item=> item.category=='popular'); 
    // const [menu, setMenu]= useState([]); 
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(response=>response.json())
    //     .then(data=> {
    //         const popularItems= data.filter(item=> item.category== 'popular'); 
    //         setMenu(popularItems); 
    //     })
    // },[])
    return (
        <section>
            <SectionTitle subHeading={"Check it out! "} heading={"From our menu"}/>
            <div className="mb-4 grid md:grid-cols-2">
                {
                    popular.map(item=> <MenuItem key={item._id} item={item} />)
                }
            </div>

        </section>
    );
};

export default PopularMenu;