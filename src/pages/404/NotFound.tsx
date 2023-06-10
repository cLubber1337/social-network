import React from "react"
import styles from "./not-found-page.module.css"

export const NotFound = () => {
  return (
    <section className={styles.no__found}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page not found</h2>
    </section>
  )
}

export default 404
