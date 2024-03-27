import type { SVGProps } from "react";

export function StrikethroughGaNaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M9.5 4.75a.75.75 0 0 0-1.5 0V9h1.5V4.75zM1.75 10a.75.75 0 0 0 0 1.5h2.41c-.373.227-.866.406-1.526.509a.75.75 0 1 0 .232 1.482c1.688-.264 2.753-.986 3.373-1.991H8v4.75a.75.75 0 0 0 1.5 0V11.5h1.115l-.113 1.7a.75.75 0 0 0 .81.797l3-.25a.75.75 0 1 0-.124-1.494l-2.132.177l.062-.93H16v4.75a.75.75 0 0 0 1.5 0V11.5h.75a.75.75 0 0 0 0-1.5H1.75zm10.535-1h-1.503l.22-3.3a.75.75 0 1 1 1.496.1L12.285 9zM16 9h1.5V4.75a.75.75 0 0 0-1.5 0V9zM5.455 9H6.96c.035-.437.04-.862.04-1.25A.75.75 0 0 0 6.25 7h-3.5a.75.75 0 1 0 0 1.5h2.736c-.007.17-.017.337-.032.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default StrikethroughGaNaFilled;
