import type { SVGProps } from "react";

export function TagError(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.426.584L3.022 9.249a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 1.947.514a5.488 5.488 0 0 1-.496-.929a.997.997 0 0 1-.744-.292l-4.949-4.948a1 1 0 0 1 .001-1.415l6.682-6.665A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.162.546c.304.144.592.314.862.509a2 2 0 0 0 .3-1.057l-.008-4.95a2 2 0 0 0-1.986-1.997L11.13 2ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default TagError;
