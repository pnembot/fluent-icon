import type { SVGProps } from "react";

export function ShareIos(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 9.5a.5.5 0 0 1 .492.41l.008.09v6a2.5 2.5 0 0 1-2.336 2.495L14 18.5H6a2.5 2.5 0 0 1-2.495-2.336L3.5 16v-6a.5.5 0 0 1 .992-.09L4.5 10v6a1.5 1.5 0 0 0 1.356 1.493L6 17.5h8a1.5 1.5 0 0 0 1.493-1.355L15.5 16v-6a.5.5 0 0 1 .5-.5ZM5.404 6.39l4.242-4.244a.5.5 0 0 1 .638-.057l.07.057l4.242 4.243a.5.5 0 0 1-.638.765l-.069-.058L10.5 3.707V13a.5.5 0 0 1-.41.492L10 13.5a.5.5 0 0 1-.492-.41L9.5 13V3.707l-3.39 3.39a.5.5 0 0 1-.637.057l-.07-.058a.5.5 0 0 1-.057-.638l.058-.069l4.242-4.243L5.404 6.39Z"
      />
    </svg>
  );
}
export default ShareIos;
