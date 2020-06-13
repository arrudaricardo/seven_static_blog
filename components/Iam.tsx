import { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { iam } from '../config.json'
import style from '../styles/iam.module.css'
const { IamList } = iam

IamList as string[][]
const iamList = IamList.map(([a, b], i) => {
  const [prevA] = IamList[i - 1] ?? [null]
  return {
    changedA: a === prevA ? false : true,
    index: i,
    first: a,
    second: b,
    key: b
  }
})

const Iam = () => {
  const [iam, setIam] = useState(iamList[0])
  const transitions = useTransition(
    iam,
    key => key.key,
    {
      trail: 150,
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: {
        transform: 'translate3d(0,0px,0)', opacity: 1,
        textShadow: '0px 3px 3px rgba(255,255,255,0.3)'
      },
      leave: { transform: 'translate3d(0,30px,0)', opacity: 0 },
    })


  useEffect(() => {
    const timeout = setTimeout(() => setIam(state => {
      let i = iamList[state.index + 1] ? state.index + 1 : 0
      // window.history.pushState({}, 'null', iamList[i].second.replace(/ /g, '-'))
      return (iamList[i])
    }), 2500)
    return () => {
      clearTimeout(timeout)
    }
  }, [iam])

  return (
    <div className={style.root}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div className={style.list} key={key} >
            <animated.div style={props} className={style.listItems}>
              {item.first}
            </animated.div>
            <animated.div style={props}>
              {item.second}
            </animated.div>
          </animated.div>
        )
      })}
    </div>
  )
}

export default Iam