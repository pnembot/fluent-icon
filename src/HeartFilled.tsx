import type { SVGProps } from "react";

export function HeartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.388 4.29a4.302 4.302 0 0 0-6.127-.016c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0l6.245-6.304a4.408 4.408 0 0 0-.017-6.187a4.305 4.305 0 0 0-6.135-.015l-.596.603l-.605-.61Z"
      />
    </svg>
  );
}
export default HeartFilled;
