import {
  Mode,
  Prepare,
  SimulatorPromo,
  TopQuestions,
  Track,
} from '@widgets/index'

export const MainPage = () => {
  return (
    <main>
      <TopQuestions />
      <SimulatorPromo />
      <Prepare />
      <Mode />
      <Track />
    </main>
  )
}
