import PageLayout from '../components/PageLayout'
import { getAssetUrl } from '../utils/assets'

export default function CeremoniesPage() {
  return (
    <PageLayout showFloralDecoration>
      <div className="space-y-12">
        <div className="fade-in">
          <h2 className="section-title">Cérémonie Civile</h2>
          <p className="location-text">Hôtel de Ville de Binche</p>
          <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-48 mx-auto my-6" />
          <p className="ceremony-time">9h30</p>
        </div>

        <div className="my-16 fade-in fade-in-delay-1">
          <h2 className="section-title">Cérémonie Religieuse</h2>
          <p className="location-text">Église Saint-Vincent d'Haulchin</p>
          <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-48 mx-auto my-6" />
          <p className="ceremony-time">10h30</p>
        </div>

        <div className="flex items-start gap-4 max-w-2xl mx-auto mt-16 fade-in fade-in-delay-2">
          <img src={getAssetUrl('images/verre.svg')} alt="" className="w-12 h-12 mt-1 flex-shrink-0" />
          <p className="info-text text-left">
            Après les cérémonies, nous aurons le plaisir de vous retrouver à partir de ... pour la
            soirée au domaine de la Ferme du Coq à Saint-Vaast
          </p>
        </div>

        <div className="mt-12 fade-in fade-in-delay-3">
          <p className="info-text">
            Merci de confirmer votre présence avant le
            <br />
            <strong>30 juin 2026</strong>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
