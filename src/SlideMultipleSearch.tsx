import type { SVGProps } from "react";

export function SlideMultipleSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a4 4 0 0 0-4 4v2.758a4.484 4.484 0 0 1 1-.502V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm10 14h-5.879l-1-1H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.256a4.474 4.474 0 0 0-1-.229V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default SlideMultipleSearch;
