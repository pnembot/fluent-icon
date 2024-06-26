import type { SVGProps } from "react";

export function ArrowTrendingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.943 5.463a.748.748 0 0 0-.161-.242l-.002-.001l-.001-.002A.748.748 0 0 0 17.25 5h-5.5a.75.75 0 0 0 0 1.5h3.69l-4.94 4.94l-1.97-1.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L8 11.06l1.97 1.97a.75.75 0 0 0 1.06 0l5.47-5.47v3.69a.75.75 0 0 0 1.5 0v-5.5a.747.747 0 0 0-.057-.287Z"
      />
    </svg>
  );
}
export default ArrowTrendingFilled;
