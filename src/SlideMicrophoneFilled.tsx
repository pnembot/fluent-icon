import type { SVGProps } from "react";

export function SlideMicrophoneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v5.466A3 3 0 0 0 12 12v1.073a1.5 1.5 0 0 0-1.95 1.639c.065.452.19.884.366 1.288H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm3.5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 10a.5.5 0 0 0 .5.5H11a.5.5 0 0 0 0-1H5.5a.5.5 0 0 0-.5.5Zm.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.5 0a2 2 0 1 1 4 0v2a2 2 0 0 1-4 0v-2Zm-.97 2.43a.5.5 0 1 0-.99.14a4.002 4.002 0 0 0 3.46 3.4v.53a.5.5 0 1 0 1 0v-.531a4.002 4.002 0 0 0 3.46-3.398a.5.5 0 1 0-.99-.142a3 3 0 0 1-5.94 0Z"
      />
    </svg>
  );
}
export default SlideMicrophoneFilled;
