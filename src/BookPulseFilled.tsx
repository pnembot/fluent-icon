import type { SVGProps } from "react";

export function BookPulseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm5.455 2.293a.5.5 0 0 0-.902-.017L7.19 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .447-.276L8.98 7.66l2.066 4.546a.5.5 0 0 0 .884.05L13.283 10h.217a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.429.243l-1.01 1.683l-2.106-4.633Z"
      />
    </svg>
  );
}
export default BookPulseFilled;
