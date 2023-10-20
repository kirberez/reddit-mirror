import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { IPostData } from "../../hooks/usePostsData";
import { updatePostListAsync } from "../../store/postList/actions";
import { RootState, store } from "../../store/store";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.postListReducer.loading
  );
  const errorLoading = useSelector<RootState, string>(
    (state) => state.postListReducer.error
  );
  const CARDS = useSelector<RootState, IPostData[]>(
    (state) => state.postListReducer.posts
  );
  const [countUnder3, setCountUnder3] = useState(false);
  const dispatch = useDispatch();
  // const postsList = GenericList({ list: CARDS });

  let counter: number = 0;

  const counterUp = () => {
    counter++;
    if (counter >= 3) setCountUnder3(true);
    return counter;
  };
  const counterClear = () => {
    setCountUnder3(false);
    return (counter = 0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!token) return;
        if (entries[0].isIntersecting && !countUnder3) {
          store.dispatch(updatePostListAsync());
          // dispatch(updatePostListAsync());
          counterUp();
          console.log("loading " + counter + " times");
        }
      },
      {
        rootMargin: "10px",
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [token, bottomOfList.current, countUnder3]);

  console.log("CARDS: ", CARDS);

  return (
    <>
      <ul className={styles.cardsList}>
        {CARDS.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: "center" }}>No one BEST posts there...</div>
        )}
        {CARDS.map((card: IPostData) => {
          return (
            <Card
              postId={card.id}
              key={card.id}
              title={card.title}
              img={card.img}
              author={card.author}
              thumbnail={card.thumbnail}
              created_utc={card.created_utc}
            />
          );
        })}
        <div className="Last_in_list" ref={bottomOfList} />
        {countUnder3 && !loading && !errorLoading && CARDS.length !== 0 && (
          <div
            style={{ textAlign: "center", padding: 20, backgroundColor: "red" }}
          >
            <button onClick={counterClear}>Additional loading...</button>
          </div>
        )}
        {loading && (
          <div style={{ textAlign: "center" }}>
            Loading BEST posts in progress...
          </div>
        )}
        {errorLoading && (
          <div style={{ textAlign: "center" }} role="alert">
            {errorLoading}
          </div>
        )}
      </ul>
      <Outlet />
    </>
  );
}
