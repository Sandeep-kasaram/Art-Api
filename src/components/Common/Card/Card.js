import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const { data, hasClick } = props;
  const cardStyle = {
    backgroundImage: `url(${data?.webImage?.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
};
const navigate = useNavigate();

  const handleArtClick = (artId) => {
    navigate(`/single_art/${artId}`);
  };
  return (

    <div class="card" style={cardStyle} onClick={() => hasClick && handleArtClick(data?.objectNumber)}>
        <div class="overlay"></div>
      <div class="card_body">
        {data?.principalOrFirstMaker && <h5 class="card_tag">{data?.principalOrFirstMaker}</h5>}
        <p class="card_title">{data?.title}</p>
      </div>
    </div>
  );
}

export default Card;
