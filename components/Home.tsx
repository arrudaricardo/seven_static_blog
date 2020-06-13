import config from '../config.json'
import style from '../styles/home.module.css'
import { ReactElement } from 'react'
import Link from 'next/link'


type Props = {
  hasPosts?: boolean,
  children: ReactElement
}

const Home = ({hasPosts, children}: Props ) => {
  return (
  <div className={ style.center}>
      <h1 className={ style.title}>{ config.title }</h1>
      { children }
      { config.subTitle && <p className={ style.subtitle} >{ config.subTitle }</p> }
      {hasPosts && 
      <Link href='/posts'>
          <a className={style.posts}>Posts</a>
      </Link>
      }
  </div>
  )
}



export default Home
