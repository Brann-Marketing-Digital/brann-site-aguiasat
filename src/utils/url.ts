const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixa caminhos internos (`/servicos/`) com o `base` do deploy (ex.: GitHub Pages em subpasta). */
export function withBase(path: string): string {
  return path.startsWith('/') && !path.startsWith('//') ? `${base}${path}` : path;
}

/** Remove o `base` de um pathname, devolvendo a rota lógica do site. */
export function stripBase(pathname: string): string {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
