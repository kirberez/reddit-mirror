import React from "react";
import { Break } from "../../../Break";
import { EColor, Text } from "../../../Text";
import { Title } from "./Title";
import styles from "./textcontent.css";

interface ITextContentProps {
  postId: string;
  title: string;
  selftext?: string;
  author?: string;
}

export function TextContent({
  title,
  selftext,
  postId,
  author = "Дмитрий Гришин",
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/1461762/avatars/small/9706dcf151cfc79c27ce7e46005a0eb3.png?1664797691"
            alt="avatar"
          />
          <a className={styles.username}>{author}</a>
        </div>
        <div className={styles.labelWrapper}>
          <Text size={14} mobileSize={10} color={EColor.grey99}>
            Опубликовано{" "}
          </Text>
          <Text size={14} mobileSize={10} color={EColor.grey99}>
            4 часа назад
          </Text>
        </div>
      </div>
      <Break top size={0} tabletSize={8} />
      <Title postId={postId} title={title} />
      {selftext && (
        <Text As="p" size={12}>
          {selftext}
        </Text>
      )}
    </div>
  );
}
