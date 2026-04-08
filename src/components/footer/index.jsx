const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="px-8 min-h-[--footer-height] bg-(--background-footer)"
    >
      <div className="flex justify-between items-center py-4">
        <div>
          <h4 className="footer-title text-(--foreground) font-(--weight-semibold)">
            iGendei Admin Systems
          </h4>
          <p className="text-(--foreground-subtle) text-sm">
            © 2026 | Planejamento preciso para seu negocio.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-(--foreground-link) hover:text-(--info-hover)"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-(--foreground-link) hover:text-(--info-hover)"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-(--foreground-link) hover:text-(--info-hover)"
          >
            Help Center
          </a>
          <a
            href="#"
            className="text-(--foreground-link) hover:text-(--info-hover)"
          >
            Status
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
