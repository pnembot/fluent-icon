import type { SVGProps } from "react";

export function Location(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0Zm2.95 4.955a7.005 7.005 0 0 0 0-9.904a6.998 6.998 0 0 0-9.9 0a7.005 7.005 0 0 0 0 9.904l1.521 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37l1.128-1.114ZM5.755 4.756a6.002 6.002 0 0 1 8.49 0a6.008 6.008 0 0 1 .176 8.31l-.176.184l-1.321 1.304l-2.23 2.168l-.094.08a.997.997 0 0 1-1.2 0l-.093-.08l-2.98-2.905l-.572-.567l-.176-.183a6.008 6.008 0 0 1 .176-8.31Z"
      />
    </svg>
  );
}
export default Location;
