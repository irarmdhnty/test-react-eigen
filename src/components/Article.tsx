import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Articles, ResponseData } from "../models/API";
import { ApiServices } from "../services/ApiServices";
import { Table, Button, Image } from "antd";

interface Data {
  loading: boolean;
  data: ResponseData;
  errorMsg: string;
}

const Article: React.FC = () => {
  const navigate = useNavigate();
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

  const detailData = (author: string | null) => {
    const dataName = tableData.filter((e) => e.author === author);
    const article = dataName[0];
    setDetailArticle({
      author: article.author,
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      content: article.content,
    });
    localStorage.setItem("item", JSON.stringify(article))
    navigate("/detail")
  };

  React.useEffect(() => {
    setAllData({ ...allData, loading: true });
    ApiServices.getAllData()
      .then((res) =>
        setAllData({
          ...allData,
          loading: false,
          data: res.data,
        })
      )
      .catch((err) =>
        setAllData({
          ...allData,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);

  const { loading, data, errorMsg } = allData;

  const tableData = data.articles.map((item, index) => ({
    ...item,
    id: index+1,
    author: item.author,
    title: item.title,
    image: item.urlToImage,
  }));
  return (
    <div>
      <h1 style={{ marginTop: "30px", textAlign: "center" }}>Article</h1>
      {errorMsg && (
        <p style={{ marginTop: "30px", textAlign: "center" }}>{errorMsg}</p>
      )}
      {loading && (
        <h1 style={{ marginTop: "30px", textAlign: "center" }}>loading ...</h1>
      )}
      <Table
        style={{ margin: "30px" }}
        dataSource={tableData}
        columns={[
          {
            title: "No",
            dataIndex: "id",
            key: "id",
          },
          {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_, { image }) => {
              return (
                <>
                  <Image width={90} src={image || ""} />
                </>
              );
            },
          },
          {
            title: "Author",
            dataIndex: "author",
            key: "author",
          },
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },

          {
            title: "Action",
            dataIndex: "action",
            key: "action",
            align: "center",
            render: (_, { author }) => {
              return (
                <>
                  <Button type="primary" onClick={() => detailData(author)}>
                    View
                  </Button>
                </>
              );
            },
          },
        ]}
      />
    </div>
  );
};

export default Article;
