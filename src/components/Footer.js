import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {(new Date().getFullYear())} TRUSTED CONSUMER, ALL RIGHTS RESERVED
  </footer>
)

export default Footer
