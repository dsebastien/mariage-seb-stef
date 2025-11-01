import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/invitation', label: 'Invitation' },
    { to: '/ceremonies', label: 'Cérémonies' },
    { to: '/info', label: 'Infos' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-separator/20">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex justify-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`
                  font-text text-lg transition-colors duration-200
                  ${
                    location.pathname === to
                      ? 'text-separator font-semibold'
                      : 'text-text hover:text-separator'
                  }
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
