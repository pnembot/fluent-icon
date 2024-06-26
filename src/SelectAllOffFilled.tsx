import type { SVGProps } from "react";

export function SelectAllOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm.268 15A2 2 0 0 0 6 18h8a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V14a3 3 0 0 1-3 3H4.268Z"
      />
    </svg>
  );
}
export default SelectAllOffFilled;
