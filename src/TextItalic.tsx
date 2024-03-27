import type { SVGProps } from "react";

export function TextItalic(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 3a.5.5 0 0 1 0 1h-3.157L8.227 16H11.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.156l4.615-12H8.5a.5.5 0 0 1 0-1H16Z"
      />
    </svg>
  );
}
export default TextItalic;
