import type { SVGProps } from "react";

export function PaddingDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.75 2.75c0 .414.336.75.75.75H15A.75.75 0 0 0 15 2H4.5a.75.75 0 0 0-.75.75Zm0 14.5c0 .414.336.75.75.75h1.313a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0-.75.75Zm3.938 0c0 .414.335.75.75.75h2.624a.75.75 0 0 0 0-1.5H8.438a.75.75 0 0 0-.75.75Zm5.25 0c0 .414.335.75.75.75H15a.75.75 0 0 0 0-1.5h-1.313a.75.75 0 0 0-.75.75Zm-2.658-1.97a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.94V5.75a.75.75 0 0 1 1.5 0v7.19l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25Z"
      />
    </svg>
  );
}
export default PaddingDownFilled;
