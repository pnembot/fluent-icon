import type { SVGProps } from "react";

export function SlideMultipleSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a4 4 0 0 0-4 4v2.758a4.474 4.474 0 0 1 2-.73V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm10 14h-5.879l-1.56-1.56A4.5 4.5 0 0 0 5 9.027V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default SlideMultipleSearchFilled;
