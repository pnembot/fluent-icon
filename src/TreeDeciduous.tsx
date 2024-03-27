import type { SVGProps } from "react";

export function TreeDeciduous(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a3.501 3.501 0 0 0-3.387 2.613a3.501 3.501 0 0 0-2.563 3.98A3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.407a3.501 3.501 0 0 0-2.563-3.98A3.501 3.501 0 0 0 10 2Zm1 13v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V15h2ZM7.53 5.112a2.5 2.5 0 0 1 4.94 0a.5.5 0 0 0 .417.418a2.5 2.5 0 0 1 2.015 3.167a.5.5 0 0 0 .25.583A2.5 2.5 0 0 1 14 14H6a2.5 2.5 0 0 1-1.151-4.72a.5.5 0 0 0 .25-.583A2.502 2.502 0 0 1 7.111 5.53a.5.5 0 0 0 .418-.418Z"
      />
    </svg>
  );
}
export default TreeDeciduous;
