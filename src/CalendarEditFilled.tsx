import type { SVGProps } from "react";

export function CalendarEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.998 7v2.002a2.86 2.86 0 0 0-1.897.838l-4.83 4.829c-.409.41-.7.923-.84 1.485l-.211.845H5.5a2.5 2.5 0 0 1-2.5-2.5v-7.5h13.998Zm-2.5-4a2.5 2.5 0 0 1 2.5 2.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h8.999Zm-3.52 12.376l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default CalendarEditFilled;
