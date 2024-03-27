import type { SVGProps } from "react";

export function PlantGrassFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.854 3.146v.002l.003.002l.008.008l.029.03c.024.025.06.062.103.11c.088.094.212.233.362.411c.3.357.703.873 1.123 1.519c.538.827 1.11 1.878 1.518 3.082c.409-1.204.98-2.255 1.518-3.082a15.58 15.58 0 0 1 1.123-1.519a11.715 11.715 0 0 1 .465-.521l.029-.03l.008-.008l.002-.002v-.001A.501.501 0 0 1 14 3.5v5.106c.251-.522.525-.947.794-1.29c.376-.478.74-.792 1.018-.99a3.236 3.236 0 0 1 .45-.267l.033-.015l.011-.005l.005-.002h.002l.001-.001A.5.5 0 0 1 17 6.5V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6.5a.5.5 0 0 1 .686-.464h.001l.002.001l.005.002l.011.005a1.34 1.34 0 0 1 .14.068c.086.046.204.116.343.215c.279.197.642.511 1.018.99c.27.342.543.767.794 1.29V3.5a.5.5 0 0 1 .854-.354Z"
      />
    </svg>
  );
}
export default PlantGrassFilled;
