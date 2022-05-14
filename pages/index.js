import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        <span>Thuocsi</span> Shoes
      </h1>
      <p className={styles.description}>
        Nơi hỗ trợ bạn tìm kiếm và mua sắm thời trang
      </p>
    </div>
  )
}
