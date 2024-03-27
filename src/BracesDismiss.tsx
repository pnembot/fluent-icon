import type { SVGProps } from "react";

export function BracesDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4.5 13.5a.5.5 0 0 1-.5.5a2 2 0 0 1-2-2V9a.5.5 0 0 0-.5-.5a.5.5 0 0 1 0-1A.5.5 0 0 0 2 7V4a2 2 0 0 1 2-2a.5.5 0 0 1 0 1a1 1 0 0 0-1 1v3c0 .384-.144.735-.382 1c.238.265.382.616.382 1v3a1 1 0 0 0 1 1a.5.5 0 0 1 .5.5Zm10-6A.5.5 0 0 1 14 7V4a2 2 0 0 0-2-2a.5.5 0 0 0 0 1a1 1 0 0 1 1 1v3c0 .384.144.735.382 1A1.497 1.497 0 0 0 13 9v3a1 1 0 0 1-1 1a.5.5 0 0 0 0 1a2 2 0 0 0 2-2V9a.5.5 0 0 1 .5-.5a.5.5 0 0 0 0-1ZM12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-1 0c0-1.654-1.346-3-3-3S5 6.346 5 8s1.346 3 3 3s3-1.346 3-3ZM9.5 6.5a.5.5 0 0 0-.707 0L8 7.293L7.207 6.5a.5.5 0 0 0-.707.707L7.293 8l-.793.793a.5.5 0 0 0 .707.707L8 8.707l.793.793a.5.5 0 0 0 .707-.707L8.707 8l.793-.793a.5.5 0 0 0 0-.707Z"
      />
    </svg>
  );
}
export default BracesDismiss;
