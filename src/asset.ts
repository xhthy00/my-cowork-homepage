/** Prefix public paths with Vite `base` so assets resolve on GitHub Pages. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
