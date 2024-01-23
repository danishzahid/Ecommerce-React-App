import "./Home.css";
import heroImage from "../../images/header-image.jpg";
import CategoryCardList from "../../components/CategoryCardList";
import { Link } from "react-router-dom";
import Review from "../../components/review/Review";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import { useData } from "../../contexts/DataContext";

export const Home = () => {
  const { state, dispatch } = useData();
  useEffect(() => {
    dispatch({ type: "CLEAR_FILTER" });
  }, []);

  return (
    <>
      <div className="header">
        <div className="heading">
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "#820000",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            Tirhut Khadi Bhandar
          </h1>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "400",
              color: "#fcf8f8",
              marginTop: "10px",
              marginBottom: "100px",
              fontStyle: "italic",
            }}
          >
            Khadi: the fabric of freedom and fashion
          </h1>
          <Link to={"/products"}>
            <button className="btn">Shop Now</button>
          </Link>
        </div>
        <div className="image">
          <img
            src="https://img.freepik.com/premium-vector/gandhi-jayanti-with-charkha-vector-illustration_730767-251.jpg?w=2000"
            alt="Example Image"
          />
        </div>
      </div>
      <CategoryCardList />
      <Review />
    </>
  );
};
