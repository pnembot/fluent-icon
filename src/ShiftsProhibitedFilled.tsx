import type { SVGProps } from "react";

export function ShiftsProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.6A5.5 5.5 0 0 0 3 9.6V6Zm8 .5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11V6.5Zm-10 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 2 14.5ZM5.5 18c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 5.5 18Z"
      />
    </svg>
  );
}
export default ShiftsProhibitedFilled;
