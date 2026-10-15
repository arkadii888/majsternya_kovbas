export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Майстерня Ковбас. Усі права захищено.
          </p>
          <a
            href="https://page.ansbackend.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-loose text-muted-foreground transition-colors hover:text-foreground"
          >
            Built by ANS
          </a>
        </div>
      </div>
    </footer>
  )
}
