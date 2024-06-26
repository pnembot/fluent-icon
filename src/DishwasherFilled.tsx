import type { SVGProps } from "react";

export function DishwasherFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v2h14V6a3 3 0 0 0-3-3H6Zm8 14H6.915A1.504 1.504 0 0 0 6 16.085v-1.422A3.5 3.5 0 0 0 8 11.5v-2a1.5 1.5 0 0 0-.086-.5H17v5a3 3 0 0 1-3 3ZM6.75 6.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5ZM10 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM2.5 9a.5.5 0 0 0-.5.5v2a2.5 2.5 0 0 0 2 2.45V17h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5v-3.05a2.5 2.5 0 0 0 2-2.45v-2a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default DishwasherFilled;
