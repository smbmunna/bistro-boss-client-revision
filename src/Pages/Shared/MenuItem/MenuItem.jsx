

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-4 mb-8">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-28" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}</h1>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;