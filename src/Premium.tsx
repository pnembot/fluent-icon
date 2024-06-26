import type { SVGProps } from "react";

export function Premium(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3a.5.5 0 0 0-.429.243l-3 5a.5.5 0 0 0 .045.577l7.5 9a.5.5 0 0 0 .768 0l7.5-9a.5.5 0 0 0 .045-.577l-3-5A.5.5 0 0 0 14.5 3h-9ZM3.383 8l2.4-4h1.979l-1.6 4H3.383Zm2.775 1l2.267 5.829L3.568 9h2.59ZM10 16.12L7.231 9h5.538L10 16.12ZM7.239 8l1.6-4h2.322l1.6 4H7.24Zm6.6 0l-1.6-4h1.978l2.4 4h-2.779Zm.003 1h2.59l-4.857 5.829L13.842 9Z"
      />
    </svg>
  );
}
export default Premium;
