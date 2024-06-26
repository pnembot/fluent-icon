import type { SVGProps } from "react";

export function BlurFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 5.292 14H10v-1h6.245c.253-.315.482-.649.685-1H10v-1h7.419a7.95 7.95 0 0 0 .329-1H10v-1h7.938A8.05 8.05 0 0 0 18 10h-8V9h7.938a7.964 7.964 0 0 0-.19-1H10V7h7.419a7.972 7.972 0 0 0-.49-1H10V5h6.245a8.041 8.041 0 0 0-.953-1H10V3h3.876A7.964 7.964 0 0 0 10 2Z"
      />
    </svg>
  );
}
export default BlurFilled;
