import type { SVGProps } from "react";

export function TimerOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.963 5.67L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-2.316-2.316A7 7 0 1 1 4.962 5.67ZM10 10.707l-1-1V11.5a.5.5 0 0 0 1 0v-.793ZM10 6.5v1.379l5.919 5.918a7 7 0 0 0-9.216-9.216L9 6.88V6.5a.5.5 0 0 1 1 0Zm-3-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707Z"
      />
    </svg>
  );
}
export default TimerOffFilled;
