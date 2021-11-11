import s from "./NewsItem.module.css";
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {

    let path = `/content/${props.id}`;
    return (
        <div className={s.news_item}>
            <NavLink to={path}>
                {props.title}
            </NavLink>
        </div>
    );
}

export default NewsItem;