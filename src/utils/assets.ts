/// <reference types="vite/client" />

/**
 * Get the full path to a public asset respecting the Vite base URL
 * @param path - Path relative to public folder (e.g., 'images/cover.png')
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
