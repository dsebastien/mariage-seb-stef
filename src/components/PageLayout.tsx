import { ReactNode } from 'react'
import { getAssetUrl } from '../utils/assets'

interface PageLayoutProps {
  children: ReactNode
  showFloralDecoration?: boolean
}

export default function PageLayout({ children, showFloralDecoration = false }: PageLayoutProps) {
  return (
    <section className="section-container pt-20">
      {showFloralDecoration && (
        <div className="floral-decoration">
          <img
            src={getAssetUrl('images/demi-cercle-haut.png')}
            alt=""
            className="absolute top-0 left-0 w-full max-w-2xl opacity-80"
          />
          <img
            src={getAssetUrl('images/demi-cercle-bas.png')}
            alt=""
            className="absolute bottom-0 right-0 w-full max-w-2xl opacity-80"
          />
        </div>
      )}

      <div className="content-wrapper">
        {children}
      </div>
    </section>
  )
}
