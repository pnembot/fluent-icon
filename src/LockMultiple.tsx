import type { SVGProps } from "react";

export function LockMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 3a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2ZM6 5v1h-.5A1.5 1.5 0 0 0 4 7.5v6A1.5 1.5 0 0 0 5.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 6H12V5a3 3 0 1 0-6 0ZM5 7.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-6ZM7.5 17a1.5 1.5 0 0 1-1.414-1H12.5a2.5 2.5 0 0 0 2.5-2.5V8.085A1.5 1.5 0 0 1 16 9.5v4a3.5 3.5 0 0 1-3.5 3.5h-5ZM9 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default LockMultiple;
