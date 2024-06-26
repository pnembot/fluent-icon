import type { SVGProps } from "react";

export function PositionToBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 14a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3ZM5 9v3.5A2.5 2.5 0 0 0 7.5 15H11v-1H9.707l1.66-1.66c.235-.402.571-.738.973-.973L14 9.707V11h1V7.5A2.5 2.5 0 0 0 12.5 5H9v1h1.293l-1.66 1.66c-.235.402-.57.738-.973.973L6 10.293V9H5Zm6.707-3h.793c.232 0 .45.052.647.146l-7 7A1.494 1.494 0 0 1 6 12.5v-.793L11.707 6ZM7.5 14c-.232 0-.45-.053-.647-.146l7-7c.095.195.147.414.147.646v.794L8.293 14H7.5ZM1 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z"
      />
    </svg>
  );
}
export default PositionToBack;
