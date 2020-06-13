import { GetStaticProps} from 'next'
import { readFileSync } from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';

const About = ({content}: {content: string}) => {
  return(
    <ReactMarkdown source={content} />
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const file = readFileSync('content/about.md').toString()
  const {data, content} = matter(file)

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);
  const frontmatter = {...data, date: formattedDate}

  return (
    {
    props: {
      content,
      frontmatter
    }
  }
  )
}

export default About