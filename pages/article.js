import Layout from "../components/Layout";
import Articleempty from "../components/Articleempty";
import Undercons from "../components/Undercons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";

function Article(props) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const slug = router.query.lesson;

  const checkLesson = (check) => {
    if (check.slug === slug) {
      return check;
    }
  };

  function getLesson() {
    setLoading(true);
    const idx = props.lessons.findIndex(checkLesson);
    setArticle(props.lessons[idx]);
    setLoading(false);
  }

  useEffect(() => {
    getLesson();
  }, {});

  return (
    <>
      <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {article ? (
              <Articleempty article={article}></Articleempty>
            ) : (
              <Undercons></Undercons>
            )}
          </>
        )}
      </Layout>
    </>
  );
}

export default Article;
