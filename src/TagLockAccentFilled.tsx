import type { SVGProps } from "react";

export function TagLockAccentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.506 4.034a1.5 1.5 0 0 0-1.49-1.498l-4.89-.032a1.5 1.5 0 0 0-1.07.438l-6.68 6.664a1.5 1.5 0 0 0-.002 2.123l4.948 4.948a1.5 1.5 0 0 0 1.678.308V14a2 2 0 0 1 1.5-1.937V12a3 3 0 0 1 5.41-1.788l.164-.165a1.5 1.5 0 0 0 .44-1.063l-.008-4.95Z"
      />
    </svg>
  );
}
export default TagLockAccentFilled;
