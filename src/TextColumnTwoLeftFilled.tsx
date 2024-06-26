import type { SVGProps } from "react";

export function TextColumnTwoLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.75A.75.75 0 0 1 3.75 5h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 5.75Zm6 0A.75.75 0 0 1 9.75 5h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 5.75Zm-6 3A.75.75 0 0 1 3.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 3 8.75Zm6 0A.75.75 0 0 1 9.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 9 8.75Zm-6 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm6 0a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-6 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm6 0a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default TextColumnTwoLeftFilled;
