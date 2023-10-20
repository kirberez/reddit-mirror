import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../../../Text";
import styles from "./title.css";

interface IProps {
  postId: string;
  title: string;
}

export function Title({ postId, title = "" }: IProps) {
  let id = postId;

  return (
    <Text As="h2" size={20} mobileSize={16}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </Text>
  );
}
