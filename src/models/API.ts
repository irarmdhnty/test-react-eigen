export interface ResponseData {
  status: string;
  totalResult: number;
  articles: Articles[];
}

export interface Articles {
  author: string | null;
  title: string | null;
  description: string | null;
  urlToImage?: string | null ;
  content: string | null;
}
