import type { SVGProps } from "react";

export function FontSpaceTrackingOut(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.458 11.685a.5.5 0 0 1-.932 0l-3.508-9.021a.5.5 0 1 1 .932-.363l3.042 7.823l3.043-7.823a.5.5 0 0 1 .931.363l-3.508 9.02ZM6.004 1.983a.5.5 0 0 1 .466.318L8.788 8.26a.49.49 0 0 1 .044.114l1.147 2.948a.5.5 0 0 1-.932.363L8 8.997H4.008l-1.046 2.688a.5.5 0 0 1-.932-.363l1.165-2.996a.505.505 0 0 1 .009-.021L5.538 2.3a.5.5 0 0 1 .466-.318ZM4.397 7.997h3.215L6.004 3.862L4.397 7.997Zm10.392 5.179a.5.5 0 0 1 .705-.054l2.33 1.998a.5.5 0 0 1 0 .76l-2.33 2a.5.5 0 0 1-.651-.758l1.304-1.12H3.846l1.306 1.12a.5.5 0 1 1-.65.76l-2.33-2a.5.5 0 0 1-.001-.758l2.33-2.002a.5.5 0 1 1 .652.759L3.848 15H16.15l-1.307-1.12a.5.5 0 0 1-.054-.705Z"
      />
    </svg>
  );
}
export default FontSpaceTrackingOut;
