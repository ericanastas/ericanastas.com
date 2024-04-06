import markdownStyles from "./markdown-styles.module.css";

type Props = {
  html: string;
};

export function Content({ html }: Props) {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
