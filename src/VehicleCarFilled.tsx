import type { SVGProps } from "react";

export function VehicleCarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 16v1a1 1 0 1 1-2 0v-1h2Zm10 0v1a1 1 0 1 1-2 0v-1h2ZM13.86 3a2.5 2.5 0 0 1 2.452 2.01l.197.99h.741a.75.75 0 0 1 .743.648L18 6.75a.75.75 0 0 1-.648.743l-.102.007h-.441l.112.56A1.5 1.5 0 0 1 18 9.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-4a1.5 1.5 0 0 1 1.079-1.44l.111-.56h-.44a.75.75 0 0 1 0-1.5h.74l.198-.99A2.5 2.5 0 0 1 6.14 3h7.72ZM6 10.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM13.86 4H6.14a1.5 1.5 0 0 0-1.471 1.206L4.109 8H15.89l-.559-2.794A1.5 1.5 0 0 0 13.861 4Z"
      />
    </svg>
  );
}
export default VehicleCarFilled;
