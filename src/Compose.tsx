import type { SVGProps } from "react";

export function Compose(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.854 2.854a.5.5 0 0 0-.707-.708l-8 8L9 11l.854-.146l8-8ZM5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-6a.5.5 0 0 0-1 0v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4h6.005a.5.5 0 0 0 0-1H5.5Z"
      />
    </svg>
  );
}
export default Compose;
