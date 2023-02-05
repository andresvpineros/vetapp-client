import React from 'react'
import styles from './PageLoader.module.css'
export interface PageLoaderInterface {
  height?: string
}

const PageLoader: React.FC<PageLoaderInterface> = (props) => {
  return (
    <div className={styles.wrapper} {...props}>
      <svg
	  	className={styles.svg}
        width="30px"
        height="30px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
		  className={styles.circle}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </div>
  )
}

export default PageLoader
