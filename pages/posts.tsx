import { GetStaticProps} from 'next'
import styles from '../styles/posts.module.css'
import Layout from '../components/Layout'
import {getPosts} from '../lib/postHelper'

type Props = {
  posts: {
    slug: string,
    frontmatter: {
      author: string,
      date: string,
      description: string,
      draft: boolean,
      tags: Array<string>
      title: string 
    }
  }[]
}

const Posts = ({posts}: Props) => {
  return (
    <Layout title='Posts' mainStyle={styles.main}>
      <div className={styles.root}>
        <h1>Posts</h1>
        <div className={styles.group}>
        <ul className={styles.list} >
        {posts.sort( (a,b) => {
         const dateA = new Date(a.frontmatter.date)
         const dateB = new Date(b.frontmatter.date) 
        return Number(dateB) - Number(dateA)
        }).map(post => (
            <li className={styles.item}key={post.slug}>
              <a className={styles.itemA} href={`posts/${post.slug}`}>
                <span>{post.frontmatter.title}</span>
                <span className={styles.day}>{post.frontmatter.date}</span>
            </a>
            </li>
            ))
            }
        </ul>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts()
  return {
    props: {
      posts
    },
  };
}

export default Posts