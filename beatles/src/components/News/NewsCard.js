import "./NewsCard.css";

function NewsCard(props) {
  return (
    <div className="news-wrapper">
      <a href={props.link} target="_blank" rel="noreferrer noopener">
        {console.log(props)}
        <h1 className="news-heading">{props.heading}</h1>
        <h1 className="news-content">{props.content}</h1>
      </a>
    </div>
  );
}

export default NewsCard;
