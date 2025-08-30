import { Link, useLocation } from 'react-router-dom'

import { useGetSearchParams } from '../../../../shared/hooks/useGetSearchParams'
import { useWindowWidth } from '../../../../shared/hooks/useWindowWidth'
import rightArr from '../../assets/CaretRight.svg'
import MobileBreadcrumbs from '../mobile-breadcrumbs/MobileBreadcrumbs'
import './breadcrumbs.css'

type ReplacedKey = 'quiz' | 'questions' | 'learnt questions'

const Breadcrumbs = () => {
  const replacedNames: Record<ReplacedKey, string> = {
    quiz: 'Квиз',
    questions: 'Вопросы',
    ['learnt questions']: 'Пройденные вопросы',
  }
  const width = useWindowWidth()
  const { searchParams } = useGetSearchParams()

  const location = useLocation()

  const pathnames = location.pathname.split('/').filter((x) => x)
  return pathnames.length ? (
    <nav className="breadcrumbs">
      {width > 730 ? (
        <ol className="breadcrumbs__list">
          <li>
            <Link to="/">Главная</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
            const isLast = index === pathnames.length - 1

            const readable = decodeURIComponent(name).replace(/-/g, ' ')
            const label = replacedNames[readable as ReplacedKey] || readable
            if (!isNaN(Number(name))) {
              return
            }
            return (
              <li key={routeTo} className="breadcrumbs__list-item">
                <img src={rightArr} alt="right arrow" />
                {isLast ? (
                  <span>{label}</span>
                ) : (
                  <Link to={`${routeTo}?${searchParams}`}>{label}</Link>
                )}
              </li>
            )
          })}
        </ol>
      ) : (
        <MobileBreadcrumbs />
      )}
    </nav>
  ) : null
}

export default Breadcrumbs
