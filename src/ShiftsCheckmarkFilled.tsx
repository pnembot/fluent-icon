import type { SVGProps } from "react";

export function ShiftsCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.6c.384-.75.6-1.6.6-2.5c0-1.33-.472-2.55-1.257-3.5H12.5a.5.5 0 0 0 0-1H10V6.5a.5.5 0 0 0-1 0v3.757A5.477 5.477 0 0 0 5.5 9c-.9 0-1.75.216-2.5.6V6Zm7 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L4.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default ShiftsCheckmarkFilled;
