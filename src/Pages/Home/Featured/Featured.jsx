import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (        
            <div className="featured bg-fixed text-white">
                <SectionTitle subHeading="Should Try" heading="Chef Recommends" />
                <div className="flex gap-8 justify-center items-center mb-8 py-8 px-16 bg-slate-700 bg-opacity-80">
                    <div><img src={featured} alt="" /></div>
                    <div className="space-y-2">
                        <h2>March 20, 2023</h2>
                        <h2>Where can I get some?</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam corrupti cupiditate debitis fugiat rerum maiores provident molestias natus suscipit facere consequatur sapiente nihil iste, facilis quis veniam! Nihil, placeat voluptatum?
                            Mollitia animbus dolore quos molestiae temporibus id praesentium exercitationem facere rerum! Eaque nobis delectus aspernatur voluptatem sit culpa voluptatum minus commodi eligendi. Inventore perspiciatis itaque sequi voluptatibus laboriosam magni.</p>
                        <button className="btn btn-outline">Default</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Featured;