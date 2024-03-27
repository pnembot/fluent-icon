import type { SVGProps } from "react";

export function TagMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 6.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9.207 2.586A2 2 0 0 1 10.621 2h4.452a2 2 0 0 1 2 2v4.374a2 2 0 0 1-.593 1.422l-5.818 5.76a2 2 0 0 1-2.82-.008l-4.385-4.384a2 2 0 0 1 0-2.828l5.75-5.75ZM10.621 3a1 1 0 0 0-.707.293l-5.75 5.75a1 1 0 0 0 0 1.414l4.384 4.384a1 1 0 0 0 1.41.004l5.819-5.76a1 1 0 0 0 .296-.71V4a1 1 0 0 0-1-1h-4.452Zm-7.624 8.8a2 2 0 0 0 .46 2.114l2.977 2.977a4 4 0 0 0 5.642.014l4.404-4.36a2 2 0 0 0 .593-1.42v-.573l-4.997 4.953a4.086 4.086 0 0 1-.147.14l-.556.55a3 3 0 0 1-4.232-.01l-.499-.5a4.047 4.047 0 0 1-.208-.194l-2.977-2.977a1.992 1.992 0 0 1-.46-.714Z"
      />
    </svg>
  );
}
export default TagMultiple;
