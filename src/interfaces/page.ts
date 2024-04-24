export interface Page {
  /**Url slog */
  slug: string;

  //**Title of content */
  title: string;

  /**markdown content */
  content: string;

  //**HTMM content generated from `content` */
  html: string;

  /**Indicates if the content is a draft and should be hidden in production */
  draft?: boolean;

  /**Url of the content */
  url: string;
}
