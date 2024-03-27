import type { SVGProps } from "react";

export function SaveSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5a2 2 0 0 1 2-2h1v3.5A1.5 1.5 0 0 0 7.5 8h4A1.5 1.5 0 0 0 13 6.5V3h.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V15a2 2 0 0 1-2 2v-5.5a1.5 1.5 0 0 0-1.5-1.5H9.329A4.5 4.5 0 0 0 3 10.671V5Zm7.562 10.44l1.56 1.56H14v-5.5a.5.5 0 0 0-.5-.5h-3.257a4.508 4.508 0 0 1 .319 4.44ZM12 3H7v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V3Zm-2 10.5c0 .786-.26 1.512-.697 2.096l2.55 2.55a.5.5 0 0 1-.707.708l-2.55-2.55A3.5 3.5 0 1 1 10 13.5Zm-6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0Z"
      />
    </svg>
  );
}
export default SaveSearchFilled;
