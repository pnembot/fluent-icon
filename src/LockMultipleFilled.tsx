import type { SVGProps } from "react";

export function LockMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 3a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Zm3 3V5a3 3 0 1 0-6 0v1h-.5A1.5 1.5 0 0 0 4 7.5v6A1.5 1.5 0 0 0 5.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 6H12ZM6.086 16A1.5 1.5 0 0 0 7.5 17h5a3.5 3.5 0 0 0 3.5-3.5v-4a1.5 1.5 0 0 0-1-1.415V13.5a2.5 2.5 0 0 1-2.5 2.5H6.086ZM10 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default LockMultipleFilled;
