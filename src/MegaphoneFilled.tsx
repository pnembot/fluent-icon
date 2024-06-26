import type { SVGProps } from "react";

export function MegaphoneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.113 3.352A1.5 1.5 0 0 1 18 4.802v10.31a1.5 1.5 0 0 1-1.974 1.424L11.27 14.95A3.25 3.25 0 0 1 5 13.75v-.89l-1.974-.658A1.5 1.5 0 0 1 2 10.78V8.27a1.5 1.5 0 0 1 1.114-1.45l13-3.467ZM6 13.194v.556a2.25 2.25 0 0 0 4.32.884L6 13.194Z"
      />
    </svg>
  );
}
export default MegaphoneFilled;
