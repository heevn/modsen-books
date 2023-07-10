import LoaderImg from "../../assets/loading-svg.svg";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader flex flex-c">
      <img src={LoaderImg} alt="loader" />
    </div>
  )
}