import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />

      ))}
    </div>
  )
}

export default ArticleList

//         <h3 key={article.title}>{article.title}</h3>