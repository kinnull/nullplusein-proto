export default function Footer() {
  const footerlinks = [
    { footName: "Impressum", footLinks: "/" },
    { footName: "Datenschutz", footLinks: "/" },
  ];
  return (
    <footer className="mx-[14px] mt-40">
      <ul className="flex items-center justify-start gap-10">
        {footerlinks.map((links, i) => (
          <li
            className="font-Melno  text-sm  font-bold text-pureGreen lg:text-[19px]"
            key={i}
          >
            <a href={links.footLinks}>{links.footName}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
