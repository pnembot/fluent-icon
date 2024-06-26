import type { SVGProps } from "react";

export function WindowNewFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.766 17a2.501 2.501 0 0 0 2.452-2.012A2 2 0 0 0 17 13V5a2 2 0 0 0-2-2H7a2 2 0 0 0-1.991 1.814A2.5 2.5 0 0 0 3 7.266V13.5A3.5 3.5 0 0 0 6.5 17h6.266ZM4 7.266A1.5 1.5 0 0 1 5 5.85V13a2 2 0 0 0 2 2h7.18a1.5 1.5 0 0 1-1.414 1H6.5A2.5 2.5 0 0 1 4 13.5V7.266ZM9.516 6H13.5a.5.5 0 0 1 .5.5v3.984a.5.5 0 0 1-1 0V7.707l-4.146 4.147a.5.5 0 0 1-.708-.708L12.293 7H9.516a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default WindowNewFilled;
