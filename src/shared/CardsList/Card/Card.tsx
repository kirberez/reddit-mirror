import React from "react";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";
import styles from "./card.css";

interface ICardProps {
  title?: string;
  thumbnail?: string;
  author?: string;
  img?: string;
  postId: string;
  created_utc?: number;
  // public_description?:
  // render_post?: () => {};
  // karma ???
  selftext?: string;
}

export function Card({
  title = "",
  thumbnail,
  author,
  img,
  postId,
  created_utc,
  // public_description?:
  // render_post?: () => {};
  selftext = "",
}: ICardProps) {
  // console.log('postId in Card: ', postId);
  if (!postId) return <div>Nothing here!!!! Any posts are abscent </div>;

  return (
    <div key={postId} id={postId} className={styles.card}>
      <TextContent
        title={title}
        author={author}
        selftext={selftext}
        postId={postId}
      />
      <Preview img={img ? img : "nothing"} />
      <Menu />
      <Controls />
    </div>
  );
}
