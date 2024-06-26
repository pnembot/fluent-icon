import type { SVGProps } from "react";

export function ArrowMinimizeVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.75 1.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V2.25a.75.75 0 0 1 .75-.75ZM3.5 9.75A.75.75 0 0 1 4.25 9h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75Zm8.78 4.47l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.69a.75.75 0 0 0 1.5 0v-2.69l.72.72a.75.75 0 1 0 1.06-1.06Z"
      />
    </svg>
  );
}
export default ArrowMinimizeVerticalFilled;
