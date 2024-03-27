import type { SVGProps } from "react";

export function TabProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25V9.6a5.46 5.46 0 0 0-1.5-.51V5.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h3.84A5.46 5.46 0 0 0 9.6 17H5.25A2.25 2.25 0 0 1 3 14.75v-9.5ZM14.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11Zm-2.096 6.303a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default TabProhibitedFilled;
