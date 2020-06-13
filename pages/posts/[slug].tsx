import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'
import Head from "next/head";
import Prism from 'prismjs'
import Layout from '../../components/Layout'
import NavBottom from '../../components/NavBottom'
import Footer from '../../components/Footer'
import style from '../../styles/post.module.css'
import Share from '../../components/ShareFeather'
import { author, footerCopyright, baseURL } from '../../config.json'
import { Posts, getPosts, postsExist } from '../../lib/postHelper'

function Atag(props: { href: string, children: any }) {
  const { value } = props.children[0].props
  return (<a className={style.link} href={props.href}> {value} </a>)
}

function CodeBlock({ language, value }: { language: string, value: string }) {
  const prismLanguages = Prism.languages[language]
  const html = prismLanguages ? Prism.highlight(value, prismLanguages, language) : value
  const cls = `language-${language}`
  return (<pre>
    <code className={cls}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </pre>)
}
interface Post {
  post: Posts,
  footer: any,
  hasPosts: boolean
}

export default function PostTemplate({ post, hasPosts, footer }: Post) {
  return (
    <Layout title={post.frontmatter.title!} >
      <>
        <Head>
          {post.frontmatter.description && <meta property="og:description" content={post.frontmatter.description} />}
        </Head>
        <Share title={post.frontmatter.title} />
        <div className={style.root}>
          <h1>{post.frontmatter.title}</h1>
          <ReactMarkdown escapeHtml={false} source={post.content} renderers={{ code: CodeBlock, link: Atag }} />
          <Footer footer={footer} display='relative' />
        </div>
        <NavBottom hasPosts={hasPosts} />
      </>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getPosts()
  const paths = posts.map(el => ({ params: { slug: el.slug } }))
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPosts()
  if (params?.slug === undefined) throw new Error('Params not found')
  const post = posts.find(post => (post.slug === params.slug))

  const dateNow = new Date()
  const footer = {
    author: author.name,
    copyRight: footerCopyright,
    link: baseURL,
    year: dateNow.getFullYear(),
  }
  const hasPosts = postsExist()

  return {
    props: {
      post,
      footer,
      hasPosts
    },
  };
}
