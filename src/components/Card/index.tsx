import { useMemo } from "react";
import "./Card.scss";
import { trimText } from "../../utils/functions";
import { MAX_CONTENT_CHARACTERS } from "../../utils/constants";

type Props = { imgSrc: string; content: string; imgAlt: string };

const Card = ({ imgSrc, imgAlt, content }: Props) => {
  const trimmedText = useMemo(
    () => trimText({ text: content, maxCharacters: MAX_CONTENT_CHARACTERS }),
    [content]
  );
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={imgSrc} alt={imgAlt} />
        <p className="card__description">{trimmedText}</p>
      </div>
      <button className="card__button">Read More</button>
    </div>
  );
};

export default Card;
