import type { SVGProps } from "react";

export function ShowerheadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.483 2.422l-1.694 1.691a7.026 7.026 0 0 1 2.052 2.029l1.68-1.679a1.442 1.442 0 1 0-2.038-2.041Zm-10.63 9.432a.5.5 0 0 0-.707-.708l-2 2a.5.5 0 0 0 .708.708l2-2Zm2 2a.5.5 0 0 0-.707-.708l-2 2a.5.5 0 0 0 .708.708l2-2Zm2 1.292a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .708 0Zm4.858-.79a1.456 1.456 0 0 0-.182-.222l-7.66-7.66A1.449 1.449 0 1 0 3.82 8.521l7.66 7.66a1.448 1.448 0 0 0 2.23-1.826Zm-7.136-8.59a2.455 2.455 0 0 0-.444-.352a6 6 0 0 1 8.456 8.455a2.46 2.46 0 0 0-.35-.442l-7.662-7.66Z"
      />
    </svg>
  );
}
export default ShowerheadFilled;
