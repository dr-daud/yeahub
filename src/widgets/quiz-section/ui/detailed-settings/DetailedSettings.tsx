import {
  LevelSelector,
  ModeSelector,
  QuantitySelector,
} from '@features/quiz-settings'

const DetailedSettings = () => {
  return (
    <div className="settings">
      <LevelSelector />
      <ModeSelector />
      <QuantitySelector />
    </div>
  )
}

export default DetailedSettings
