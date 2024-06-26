import type { SVGProps } from "react";

export function ScanTextFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h1.5a.5.5 0 0 1 .487.612a.75.75 0 0 1-.737.888H6A1.5 1.5 0 0 0 4.5 6v1.25a.75.75 0 0 1-.888.737A.502.502 0 0 1 3 7.5V6Zm9-2.5a.5.5 0 0 1 .5-.5H14a3 3 0 0 1 3 3v1.5a.5.5 0 0 1-.612.487a.75.75 0 0 1-.888-.737V6A1.5 1.5 0 0 0 14 4.5h-1.25a.75.75 0 0 1-.737-.888A.505.505 0 0 1 12 3.5ZM3.5 12c.039 0 .076.004.112.013a.75.75 0 0 1 .888.737V14A1.5 1.5 0 0 0 6 15.5h1.25a.75.75 0 0 1 .737.888A.502.502 0 0 1 7.5 17H6a3 3 0 0 1-3-3v-1.5a.5.5 0 0 1 .5-.5Zm13 0a.5.5 0 0 1 .5.5V14a3 3 0 0 1-3 3h-1.5a.5.5 0 0 1-.487-.612a.75.75 0 0 1 .737-.888H14a1.5 1.5 0 0 0 1.5-1.5v-1.25a.75.75 0 0 1 .888-.737A.506.506 0 0 1 16.5 12ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5ZM6 9.75A.75.75 0 0 1 6.75 9h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 9.75ZM6.75 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
      />
    </svg>
  );
}
export default ScanTextFilled;
