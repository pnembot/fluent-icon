import type { SVGProps } from "react";

export function StarProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-.549.535a5.5 5.5 0 0 0-7.959 6.259l-3.05 1.604a1 1 0 0 1-1.452-1.055l.738-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912Zm.898 11.6a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9a3.484 3.484 0 0 1-.696-2.097Zm3.5 3.5a3.482 3.482 0 0 1-2.096-.697l4.9-4.899A3.5 3.5 0 0 1 14.502 18Z"
      />
    </svg>
  );
}
export default StarProhibitedFilled;
