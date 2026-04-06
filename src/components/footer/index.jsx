const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="flex items-center justify-between px-8 min-h-[--footer-height] bg-(--background-footer)"
    >
      <p className="text-(--foreground-subtle) text-sm">
        © 2024 iGendei Admin Systems. Precision scheduling for the digital
        architect.
      </p>

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
    </footer>
  );
};

export default Footer;
