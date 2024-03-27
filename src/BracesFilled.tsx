import type { SVGProps } from "react";

export function BracesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.494 5.752a2.75 2.75 0 0 1 2.75-2.75a.75.75 0 0 1 0 1.5c-.69 0-1.25.56-1.25 1.25L5 8.382c0 .6-.21 1.169-.576 1.618c.366.448.576 1.017.576 1.618v2.636c0 .69.56 1.25 1.25 1.25a.75.75 0 1 1 0 1.5a2.75 2.75 0 0 1-2.75-2.75v-2.636c0-.397-.222-.76-.574-.942a.75.75 0 0 1 0-1.353c.352-.181.574-.544.574-.941l-.006-2.63Zm13.012 0a2.75 2.75 0 0 0-2.75-2.75a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25L15 8.382c0 .6.21 1.169.576 1.618A2.558 2.558 0 0 0 15 11.618v2.636c0 .69-.56 1.25-1.25 1.25a.75.75 0 1 0 0 1.5a2.75 2.75 0 0 0 2.75-2.75v-2.636c0-.397.222-.76.574-.942a.75.75 0 0 0 0-1.353a1.059 1.059 0 0 1-.574-.941l.006-2.63Z"
      />
    </svg>
  );
}
export default BracesFilled;
