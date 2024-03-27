import type { SVGProps } from "react";

export function PhoneTabletFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.804C4 3.794 4.84 3 5.845 3h10.31C17.16 3 18 3.794 18 4.804v7.392c0 1.01-.84 1.804-1.845 1.804H10v-2h2.5a.5.5 0 0 0 0-1H10V8a2 2 0 0 0-2-2H4V4.804ZM3.5 7A1.5 1.5 0 0 0 2 8.5v8A1.5 1.5 0 0 0 3.5 18h4A1.5 1.5 0 0 0 9 16.5v-8A1.5 1.5 0 0 0 7.5 7h-4Zm1 8.5A.5.5 0 0 1 5 15h1a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default PhoneTabletFilled;
