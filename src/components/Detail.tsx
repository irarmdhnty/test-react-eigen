import * as React from "react";
import { Articles, ResponseData } from "../models/API";
import { Image } from "antd";

interface Data {
  loading: boolean;
  data: ResponseData;
  errorMsg: string;
}

const Detail: React.FC = () => {
  const [allData, setAllData] = React.useState<Data>({
    loading: false,
    data: {
      status: "",
      totalResult: 0,
      articles: [] as Articles[],
    },
    errorMsg: "",
  });
  const [detailArticle, setDetailArticle] = React.useState<Articles>({
    author: "",
    title: "",
    description: "",
    urlToImage: "",
    content: "",
  });

  React.useEffect(() => {
    setAllData({ ...allData, loading: true });
    const dataArticle = JSON.parse(localStorage.getItem("item") || "");
    setDetailArticle(dataArticle);
  }, []);

  return (
    <div style={{ paddingLeft: "100px" }}>
      <h1 style={{ marginTop: "30px", textAlign: "center" }}>Detail Article</h1>
      <div style={{ textAlign: "center" }}>
        <Image width={"50%"} src={detailArticle.urlToImage || ""} />
      </div>
      <div style={{ maxWidth:"90%", paddingBottom: "10px" }}>
        <h2 style={{ fontWeight: "bold" }}>Author: </h2>
        <p style={{ marginTop: "-8px", marginLeft: "15px", fontSize: "20px" }}>
          {detailArticle.author}
        </p>
        <h2 style={{ fontWeight: "bold" }}>Title: </h2>
        <p style={{ marginTop: "-8px", marginLeft: "15px", fontSize: "20px" }}>
          {detailArticle.title}
        </p>
        <h2 style={{ fontWeight: "bold" }}>Content: </h2>
        <p style={{ marginTop: "-8px", marginLeft: "15px", fontSize: "20px" }}>
          {detailArticle.content}
        </p>
        <h2 style={{ fontWeight: "bold" }}>Descripsi: </h2>
        <p style={{ marginTop: "-8px", marginLeft: "15px", fontSize: "20px" }}>
          {detailArticle.description}
        </p>
      </div>
    </div>
  );
};

export default Detail;
