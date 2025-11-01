import PageLayout from '../components/PageLayout'
import { getAssetUrl } from '../utils/assets'

export default function InfoPage() {
  return (
    <PageLayout>
      <div className="fade-in">
        <h2 className="section-title">Informations Pratiques</h2>
        <p className="location-text mb-12">
          Domaine de la Ferme du Coq, Boulevard du coq 44, 7100 Saint-Vaast
        </p>
      </div>

      <div className="fade-in fade-in-delay-1">
        <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-64 mx-auto my-12" />
        <img src={getAssetUrl('images/anneaux.svg')} alt="" className="w-32 mx-auto my-8" />
        <img src={getAssetUrl('images/separateur.svg')} alt="" className="w-64 mx-auto my-12" />
      </div>

      <div className="max-w-2xl mx-auto space-y-8 fade-in fade-in-delay-2">
        <p className="info-text">
          Notre souhait est de partager ce jour avec vous. Si vous désirez nous offrir un cadeau,
          vous pouvez adresser votre contribution sur le compte suivant:
          <br />
          <strong>BE91 0636 2455 8076</strong>
        </p>

        <div className="info-text space-y-2">
          <p>Stéphanie Dominé: 0471/53.31.96 — stef.domine@gmail.com</p>
          <p>Sébastien Dubois: 0478/40.29.93 — seb@dsebastien.net</p>
        </div>
      </div>
    </PageLayout>
  )
}
