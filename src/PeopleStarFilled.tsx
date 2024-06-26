import type { SVGProps } from "react";

export function PeopleStarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 .993.263A5.489 5.489 0 0 0 9 14.5c0 .396.042.781.121 1.153c-.644.217-1.425.347-2.371.347c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12ZM17 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm2 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.002-1.108h-1.545l-.477-1.531a.494.494 0 0 0-.952 0l-.477 1.531H12c-.484 0-.686.647-.294.944l1.25.947l-.477 1.532c-.15.48.378.88.77.583l1.25-.947l1.25.947c.392.297.92-.103.77-.583l-.477-1.532l1.25-.947c.392-.297.19-.944-.294-.944Z"
      />
    </svg>
  );
}
export default PeopleStarFilled;
