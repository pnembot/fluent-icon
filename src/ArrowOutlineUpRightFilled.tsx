import type { SVGProps } from "react";

export function ArrowOutlineUpRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.334 2.01a1.5 1.5 0 0 1 1.656 1.656l-1.078 9.703c-.139 1.25-1.662 1.784-2.551.895l-1.068-1.067L8.93 17.56a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.121l4.362-4.363l-1.067-1.067c-.889-.89-.355-2.413.895-2.551l9.704-1.079Z"
      />
    </svg>
  );
}
export default ArrowOutlineUpRightFilled;
