import Mode from '@widgets/mode/ui/mode/Mode'
import Prepare from '@widgets/prepare/ui/prepare/Prepare'
import SimulatorPromo from '@widgets/simulator-promo/ui/simulator-promo/SimulatorPromo'
import TopQuestions from '@widgets/top-questions/ui/top-questions/TopQuestions'
import Track from '@widgets/track/ui/track/Track'

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
