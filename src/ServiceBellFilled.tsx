import type { SVGProps } from "react";

export function ServiceBellFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 5a2 2 0 1 1 4 0v.79c2.892.86 5 3.539 5 6.71a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5a7.003 7.003 0 0 1 5-6.71V5Zm2.5 3.5c.422 0 .84.004 1.268.158c.413.148.87.451 1.316 1.12a.5.5 0 0 0 .832-.555c-.555-.832-1.18-1.28-1.81-1.506C11.505 7.5 10.93 7.5 10.52 7.5h-.02a.5.5 0 0 0 0 1Zm-7 5.5a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13Z"
      />
    </svg>
  );
}
export default ServiceBellFilled;
