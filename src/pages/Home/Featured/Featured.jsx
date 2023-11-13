import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
            subHeading='Check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti, inventore blanditiis consequuntur consequatur harum reprehenderit praesentium at asperiores esse dicta aliquid magnam distinctio enim nemo aliquam! Iste error quos dicta placeat hic reprehenderit explicabo consectetur excepturi rem repellat recusandae ipsum, cupiditate labore quis perferendis qui quibusdam saepe dolore deleniti?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;