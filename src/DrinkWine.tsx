import type { SVGProps } from "react";

export function DrinkWine(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.452 8.075a.5.5 0 0 0-.986-.164a2.5 2.5 0 0 1-2.048 2.054a.5.5 0 0 0 .167.986a3.5 3.5 0 0 0 2.867-2.876ZM5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 4.975V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.025A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5h-9ZM6 5.5V3h8v2.5H6Zm0 1h8V8a4 4 0 0 1-8 0V6.5Z"
      />
    </svg>
  );
}
export default DrinkWine;
