import type { SVGProps } from "react";

export function DataBarVerticalStarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 3a2 2 0 0 1 2 2v4.6a5.47 5.47 0 0 0-2.5-.6a5.5 5.5 0 0 0-1.5.207V5a2 2 0 0 1 2-2ZM9 14.5c0 .882.208 1.716.577 2.455A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-3 4.9ZM7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm12 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.024-2.64a.494.494 0 0 0-.952 0l-.477 1.532H12c-.484 0-.686.647-.294.944l1.25.947l-.477 1.532c-.15.48.378.88.77.583l1.25-.947l1.25.947c.392.297.92-.103.77-.583l-.477-1.532l1.25-.947c.392-.297.19-.944-.294-.944h-1.545l-.478-1.531Z"
      />
    </svg>
  );
}
export default DataBarVerticalStarFilled;
