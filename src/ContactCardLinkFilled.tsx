import type { SVGProps } from "react";

export function ContactCardLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v5.837A3.486 3.486 0 0 0 16.5 11h-4a3.5 3.5 0 0 0-3.163 5H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm3 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm4 3.199a.949.949 0 0 0-.949-.949H4.95a.949.949 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 9 11.699ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default ContactCardLinkFilled;
