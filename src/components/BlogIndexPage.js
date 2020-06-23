import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <Link href="https://github.com/joaovitor3" target="_blank">Github</Link> &bull; 
          <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-r-souza/" target="_blank" >
            LinkedIn
          </Link>
          <Link href="/tags" style={{ float: 'right' }}
            >Tags
          </Link>{' '}
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
