import { Link } from 'react-router-dom'
import style from "./User.module.css";
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'

function MyShoppingList() {
  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account" className={style.unactive}>
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist" className={style.active}>
          購買清單 <hr />
        </Link>
        <Link to="/collection" className={style.unactive}>
          我的收藏 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>購買清單</h1>
      </main>

    </>
  )
}

export default MyShoppingList
