import type { SVGProps } from "react";

export function ContactCardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 4h-13Zm3 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-1.551.75H8.05a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699a.95.95 0 0 1 .949-.949ZM11 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default ContactCardFilled;
