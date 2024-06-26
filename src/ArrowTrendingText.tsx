import type { SVGProps } from "react";

export function ArrowTrendingText(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793L11 8.293L9.354 6.646a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708L9 7.707l1.646 1.647a.5.5 0 0 0 .707 0L16 4.707V7.5a.5.5 0 0 0 1 0v-4ZM10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
      />
    </svg>
  );
}
export default ArrowTrendingText;
