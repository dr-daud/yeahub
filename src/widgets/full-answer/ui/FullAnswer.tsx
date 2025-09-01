import './full-answer.css'

interface Props {
  longAnswer?: string
}

export const FullAnswer = ({ longAnswer }: Props) => {
  return (
    <section className="full">
      <div className="container full__wrap">
        <div className="full__title body5-med">Развёрнутый ответ</div>
        <div
          className="full__answer body3"
          dangerouslySetInnerHTML={{ __html: longAnswer || '' }}
        />
      </div>
    </section>
  )
}
