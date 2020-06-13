import Social from './Social'
import style from '../styles/navbottom.module.css'
import config from '../config.json'

type Props = {
  hasPosts?: boolean;
}

export default function NavBottom({hasPosts}: Props) {
  return (
    <header id="site-header" className={style.root}>
      <div className={style.wrapper}>
        <div className={style.navLeft}>
          <div className={style.branding}>
            <a href={config.baseURL}> {config.title}</a>
          </div>
          { hasPosts &&
            <nav className={style.nav}>
              <a href={config.baseURL + '/posts'}>Posts</a>
            </nav>
          }
        </div>
        <div className={style.navRight}>
          <Social />
        </div>
      </div>
    </header>
  )
}
