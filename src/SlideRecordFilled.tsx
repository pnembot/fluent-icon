import type { SVGProps } from "react";

export function SlideRecordFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.707A5.504 5.504 0 0 1 9 14.5a5.5 5.5 0 0 1 .207-1.5H5.5a.5.5 0 0 1 0-1h4.1c.288-.563.67-1.07 1.125-1.5H5.5a.5.5 0 0 1 0-1h6.706A5.48 5.48 0 0 1 14.5 9c1.33 0 2.55.472 3.5 1.257V6.5A2.5 2.5 0 0 0 15.5 4h-11ZM5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM14.5 18a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm0 1a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
}
export default SlideRecordFilled;
