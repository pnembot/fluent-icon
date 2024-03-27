import type { SVGProps } from "react";

export function Mention(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 0 1 8 8c0 2.706-1.142 4.5-3 4.5c-1.226 0-2.14-.781-2.62-2.09c-.596.983-1.598 1.59-2.88 1.59C7.36 14 6 12.307 6 10c0-2.337 1.313-4 3.5-4c1.052 0 1.901.385 2.5 1.044V6.5a.5.5 0 0 1 .992-.09L13 6.5V10c0 2.223.813 3.5 2 3.5s2-1.277 2-3.5a7 7 0 1 0-4.617 6.584a.5.5 0 0 1 .34.94A8 8 0 1 1 10 2Zm-.5 5C7.924 7 7 8.17 7 10c0 1.797.966 3 2.5 3s2.5-1.203 2.5-3c0-1.83-.924-3-2.5-3Z"
      />
    </svg>
  );
}
export default Mention;
