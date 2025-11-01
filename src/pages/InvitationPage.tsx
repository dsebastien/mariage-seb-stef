import PageLayout from '../components/PageLayout'
import { getAssetUrl } from '../utils/assets'

export default function InvitationPage() {
  return (
    <PageLayout showFloralDecoration>
      <div className="fade-in">
        <h1 className="section-title">Nous sommes heureux de vous inviter à notre mariage</h1>
      </div>

      <div className="fade-in fade-in-delay-1">
        <img src={getAssetUrl('images/ligne.svg')} alt="" className="w-48 mx-auto mb-8" />
      </div>

      <div className="flex items-center justify-center gap-8 md:gap-16 my-12 fade-in fade-in-delay-2">
        <div>
          <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-32 md:w-48 mb-2" />
          <p className="date-text">Samedi</p>
        </div>
        <div>
          <p className="date-number">19</p>
        </div>
        <div>
          <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-32 md:w-48 mb-2" />
          <p className="date-text">
            Septembre
            <br />
            2026
          </p>
        </div>
      </div>

      <div className="fade-in fade-in-delay-3">
        <img src={getAssetUrl('images/anneaux.svg')} alt="" className="w-32 mx-auto mt-12" />
      </div>
    </PageLayout>
  )
}
