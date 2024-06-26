import type { SVGProps } from "react";

export function PersonWrench(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0c0 2.198-1.816 4-4 4a4 4 0 0 1-4-4Zm5.226 5H5.01A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c.811.517 1.801.861 2.89 1.045a2.52 2.52 0 0 1 .062-1.005c-.937-.168-1.76-.466-2.414-.884C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h5.985c.04-.34.117-.675.232-1ZM10 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.892 6.024c.366.042.471.48.21.742l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132l2.726-2.726a3.518 3.518 0 0 1 3.724-4.676Z"
      />
    </svg>
  );
}
export default PersonWrench;
