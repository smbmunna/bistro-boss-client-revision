
const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Food" />
            </figure>
            <p className="bg-black px-4 py-2 text-white absolute right-4 top-2">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;