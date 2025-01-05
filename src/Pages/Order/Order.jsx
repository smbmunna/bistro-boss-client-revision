import orderCover from '../../assets/shop/orderCover.jpg'
import Cover from '../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../../Hooks/useMenu';
import { useState } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import OrderTab from './OrderTab';

const Order = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == 'offered');
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizzas = menu.filter(item => item.category == 'pizza');
    const soups = menu.filter(item => item.category == 'soup');
    const salads = menu.filter(item => item.category == 'salad');
    const drinks = menu.filter(item => item.category == 'drinks');
    //change tabs
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Cover img={orderCover} title="Order Food" />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={offered}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salads}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;