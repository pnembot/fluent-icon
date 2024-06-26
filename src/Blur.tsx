import type { SVGProps } from "react";

export function Blur(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 5.292 14H10v1a7 7 0 1 1 0-14h3.876A7.964 7.964 0 0 0 10 2Zm0 2h5.292c.345.305.665.64.953 1H10V4Zm6.93 2H10v1h7.419a7.972 7.972 0 0 0-.49-1ZM10 8h7.748c.084.326.148.66.19 1H10V8Zm8 2h-8v1h7.938A8.05 8.05 0 0 0 18 10Zm-8 2h7.748a7.95 7.95 0 0 1-.33 1H10v-1Zm6.93 2H10v1h6.245c.253-.315.482-.649.685-1Z"
      />
    </svg>
  );
}
export default Blur;
