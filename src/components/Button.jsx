// Botão laranja com corte inclinado, padrão de toda a página.
export default function Button({ href, children, className = '', size = 'md' }) {
  const sizes = {
    sm: 'min-h-12 px-6 text-lg',
    md: 'min-h-14 px-[34px] text-[22px]',
    lg: 'min-h-16 w-full px-8 text-2xl [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]',
  }
  const external = href && href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`dsp cut inline-flex items-center justify-center bg-brand text-black no-underline transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
