import type { SVGProps } from "react";

export function BinderTriangleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3a2 2 0 0 0 2 2h1.354L14 5.896V4a2 2 0 0 0-2-2H5Zm1.5 4h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm10.173-1.73c.45-.537 1.324-.219 1.324.482V16a2 2 0 0 1-2 2H6.751a.75.75 0 0 1-.574-1.233L16.673 4.27Zm-1.672 9.985l.002-2.645a.25.25 0 0 0-.441-.161l-2.64 3.145a.25.25 0 0 0 .192.41h2.137a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
}
export default BinderTriangleFilled;
