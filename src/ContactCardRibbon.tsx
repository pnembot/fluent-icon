import type { SVGProps } from "react";

export function ContactCardRibbon(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M8 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-4 3.199a.95.95 0 0 1 .949-.949H8.05a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h.626c.091-.355.23-.69.41-1H11.5Zm-7.75 4h8.785c.134.23.29.447.465.646V16H3.75A1.75 1.75 0 0 1 2 14.25v-8.5C2 4.784 2.784 4 3.75 4h12.5c.966 0 1.75.784 1.75 1.75v3.785a3.975 3.975 0 0 0-1-.409V5.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75ZM19 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 3.465A3.982 3.982 0 0 1 16 17a3.982 3.982 0 0 1-2-.535v2.285a.25.25 0 0 0 .378.215L16 18l1.622.965A.25.25 0 0 0 18 18.75v-2.285Z"
      />
    </svg>
  );
}
export default ContactCardRibbon;
