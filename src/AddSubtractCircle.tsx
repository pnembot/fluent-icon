import type { SVGProps } from "react";

export function AddSubtractCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-3-7a.5.5 0 0 0-1 0v1H6a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 1 0 0-1H8v-1ZM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-1a6.973 6.973 0 0 1-4.584-1.71l9.875-9.874A7 7 0 0 1 10 17Zm-5.29-2.416a7 7 0 0 1 9.874-9.874l-9.875 9.874Z"
      />
    </svg>
  );
}
export default AddSubtractCircle;
