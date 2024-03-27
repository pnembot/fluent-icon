import type { SVGProps } from "react";

export function PhoneEraser(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.578 1.44a1.5 1.5 0 0 1 2.12 0l1.864 1.86a1.5 1.5 0 0 1 0 2.122l-5.138 5.138a1.5 1.5 0 0 1-2.122 0L9.44 8.699a1.5 1.5 0 0 1 0-2.122l5.139-5.138Zm-4.431 5.845a.5.5 0 0 0 0 .707l1.861 1.862a.5.5 0 0 0 .708 0l1.29-1.29l-2.57-2.57l-1.29 1.29Zm2.385-5.214A2.002 2.002 0 0 0 12 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.61a2.5 2.5 0 0 1-1 .528V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.603l.929-.929ZM7.5 14.5A.5.5 0 0 1 8 14h2a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default PhoneEraser;
