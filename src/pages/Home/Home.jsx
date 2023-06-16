import "./Home.css";
import heroImage from "../../images/header-image.jpg";
import CategoryCardList from "../../components/CategoryCardList";

export const Home = () => {
  return (
    <>
      <div className="header">
        <div className="heading">
          <h1>Heding up to 3 lines will be here</h1>
          <button className="btn">Shop Now</button>
        </div>
        <div className="image">
          <img src={heroImage} alt="Example Image" />
        </div>
      </div>
      <CategoryCardList />
    </>
  );
};
