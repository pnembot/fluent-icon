import type { SVGProps } from "react";

export function CardUiFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7ZM9.5 6h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm3 2h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1ZM5 11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z"
      />
    </svg>
  );
}
export default CardUiFilled;
