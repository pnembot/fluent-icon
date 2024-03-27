import type { SVGProps } from "react";

export function CodeRb(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M13.279 7.9a2.244 2.244 0 0 0 .061-3.24A2.252 2.252 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.252 2.252 0 0 0 1.992-3.294a2.252 2.252 0 0 0-.713-.806ZM13 6.25a1.252 1.252 0 0 1-1.25 1.25H10V5h1.75A1.252 1.252 0 0 1 13 6.25ZM12 11h-2V8.5h2a1.252 1.252 0 0 1 1.25 1.25A1.252 1.252 0 0 1 12 11Zm-4 .065a6.502 6.502 0 0 1-.185-.558A5.83 5.83 0 0 0 6.72 8.271A2.247 2.247 0 0 0 8 6.25A2.252 2.252 0 0 0 5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1c1.07 0 1.488 1.087 1.854 2.3c.2.672.365 1.2.9 1.2A.5.5 0 0 0 8 11.065ZM4 5h1.75A1.252 1.252 0 0 1 7 6.25A1.252 1.252 0 0 1 5.75 7.5H4V5Z"
      />
    </svg>
  );
}
export default CodeRb;
