import type { SVGProps } from "react";

export function Question(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3C7.794 3 6 4.794 6 7a.5.5 0 0 0 1 0c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.249-.692 1.863-1.575 2.62l-.032.027C10.534 10.384 9.5 11.27 9.5 13v.5a.5.5 0 0 0 1 0V13c0-1.249.692-1.863 1.575-2.62l.032-.027C12.966 9.615 14 8.731 14 7c0-2.206-1.794-4-4-4Zm0 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default Question;
