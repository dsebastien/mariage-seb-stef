import PageLayout from '../components/PageLayout'
import { getAssetUrl } from '../utils/assets'

export default function CoverPage() {
  return (
    <PageLayout>
      <div className="fade-in">
        <img
          src={getAssetUrl('images/cover.png')}
          alt="Stéphanie & Sebastien"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </PageLayout>
  )
}
