import type { SVGProps } from "react";

export function Directions(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 8.5A1.5 1.5 0 0 0 9 10v2.5a.5.5 0 1 1-1 0V10a2.5 2.5 0 0 1 2.5-2.5h.793l-.647-.647a.5.5 0 0 1 .707-.707l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 1 1-.707-.707l.647-.646H10.5ZM8.232 3.06a2.5 2.5 0 0 1 3.536 0l5.171 5.172a2.5 2.5 0 0 1 0 3.536l-5.171 5.171a2.5 2.5 0 0 1-3.536 0L3.06 11.768a2.5 2.5 0 0 1 0-3.536L8.232 3.06Zm2.828.707a1.5 1.5 0 0 0-2.121 0L3.767 8.94a1.5 1.5 0 0 0 0 2.121l5.172 5.172a1.5 1.5 0 0 0 2.121 0l5.172-5.172a1.5 1.5 0 0 0 0-2.121L11.06 3.767Z"
      />
    </svg>
  );
}
export default Directions;
