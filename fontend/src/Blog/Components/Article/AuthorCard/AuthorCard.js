import classes from './AuthorCard.module.css'
// import logo from '../../../../Home/assets/developers5.png';
import { useEffect, useState } from 'react'
import PillBtn from '../../UI/PillBtn'
import LoadingSpinner from './LoadingSpinner'
import { useParams } from 'react-router-dom'

const AuthorCard = (props) => {
  const { author_info, author_name, author_id, author_logo } =
    props.trendingArticle

  const { isFollowingAuthor } = props
  const [isFollowAuthor, setIsFollowAuthor] = useState(isFollowingAuthor)
  const [favArticle, setFavArticle] = useState(true)
  const [isFavLoading, setIsFavLoading] = useState(false)
  const [isFollowLoading, setIsFollowLoading] = useState(false)
  const [followAuthorData, setFollowAuthorData] = useState([])

  const params = useParams()
  const currentArticle = params.id
  const userId = localStorage.getItem('id')

  // ------------收藏文章功能

  useEffect(() => {
    setIsFollowAuthor(isFollowingAuthor)
  }, [isFollowingAuthor])

  // 收藏文章
  const favArticleHandler = () => {
    setFavArticle(true)
    setIsFavLoading(true)
    fetch(
      `http://localhost:3001/Blog/insert/fav?id=${currentArticle}&userid=${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsFavLoading(false)
        }, 200)
        console.log(data)
      })
  }

  // 取消收藏
  const deleteFavArticleHandler = () => {
    setFavArticle(false)
    setIsFavLoading(true)
    fetch(
      `http://localhost:3001/Blog/delete/fav?id=${currentArticle}&userid=${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsFavLoading(false)
        }, 200)
        console.log(data)
      })
  }

  // ------------追蹤作者功能

  // 訂閱作者
  const followAuthorHandler = () => {
    setIsFollowAuthor(true)
    setIsFollowLoading(true)
    fetch(
      `http://localhost:3001/Blog/follow/author?author=${author_id}&userid=${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTimeout(() => {
          setIsFollowLoading(false)
        }, 200)
      })
  }

  // 取消追蹤

  const unfollowAuthorHandler = () => {
    setIsFollowAuthor(false)
    setIsFollowLoading(true)
    fetch(
      `http://localhost:3001/Blog/unfollow/author?author=${author_id}&userid=${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTimeout(() => {
          setIsFollowLoading(false)
        }, 200)
      })
  }

  // 利用回傳回來的json檔判斷是不是有收藏文章，傳回來如果是空陣列代表沒有收藏

  useEffect(() => {
    fetch(
      `http://localhost:3001/blog/fav/render?userid=${userId}&article=${currentArticle}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) setFavArticle(false)
      })
  }, [])

  // 沒辦法同步？
  console.log(
    `從上面傳下來的：${isFollowingAuthor}，這個原本的：${isFollowAuthor}`
  )

  return (
    <>
      <div className={classes['author-card']}>
        <div className={classes['author-card--body']}>
          <img
            src={`http://localhost:3000/blog/image/${author_logo}.webp`}
            alt="author_logo"
          ></img>

          <div className={classes['author-card--body__content']}>
            <h2>{author_name}</h2>
            <p>{author_info}</p>
          </div>
        </div>
      </div>
      {/* 這邊有雙重判斷式，先判斷有沒有按收藏，
      接著判斷後端有沒有在 insert 或 delete ，有的話放spinning*/}
      <div className={classes['author-card--footer']}>
        {favArticle ? (
          isFavLoading ? (
            <LoadingSpinner />
          ) : (
            <PillBtn
              onClick={deleteFavArticleHandler}
              className={classes['author-card--footer__btn']}
            >
              取消收藏
            </PillBtn>
          )
        ) : isFavLoading ? (
          <LoadingSpinner />
        ) : (
          <PillBtn
            onClick={favArticleHandler}
            className={classes['author-card--footer__btn']}
          >
            收藏本文
          </PillBtn>
        )}

        {isFollowAuthor ? (
          isFollowLoading ? (
            <LoadingSpinner />
          ) : (
            <PillBtn
              onClick={unfollowAuthorHandler}
              className={classes['author-card--footer__btn']}
            >
              取消訂閱
            </PillBtn>
          )
        ) : isFollowLoading ? (
          <LoadingSpinner />
        ) : (
          <PillBtn
            onClick={followAuthorHandler}
            className={classes['author-card--footer__btn']}
          >
            訂閱作者
          </PillBtn>
        )}
      </div>
    </>
  )
}

export default AuthorCard
