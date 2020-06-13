import { social } from '../config.json'
import style from '../styles/social.module.css'
import socialIcons from './utils/socialIcons'

interface Tsocial {
 [index: string]: {
   url: string;
 }
} 
const socialConf: Tsocial = social


const Social = () => {
  return (
    <div className={ style["social-home"]}>
    { Object.keys(socialConf).map(social => {
      const link = socialConf[social].url
      const Icon = socialIcons[social]
      return (
      <a key={social} className={style['link']} href={link}>
        <Icon className={style['icon']}/>
      </a>
      )
    })
    }
    </div>
  )
}


export default Social