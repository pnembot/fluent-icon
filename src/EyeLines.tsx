import type { SVGProps } from "react";

export function EyeLines(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3c-1.531 0-2.793.4-3.818 1H10c2.557 0 4.236 1.27 5.294 2.62c.53.679.9 1.374 1.137 1.928c.118.276.2.514.254.692c.042.143.057.224.062.251l.002.009l-.002.009c-.005.027-.02.108-.062.25a6.506 6.506 0 0 1-.254.693a8.731 8.731 0 0 1-1.137 1.927C14.236 13.73 12.557 15 10 15H6.182c1.025.6 2.287 1 3.818 1c1.531 0 2.793-.4 3.818-1a8.048 8.048 0 0 0 2.263-2.004a9.735 9.735 0 0 0 1.27-2.151c.132-.31.228-.584.293-.802c.057-.195.106-.4.106-.543c0-.143-.049-.348-.106-.543a7.51 7.51 0 0 0-.293-.802a9.733 9.733 0 0 0-1.27-2.15A8.048 8.048 0 0 0 13.818 4C12.793 3.4 11.531 3 10 3Zm0 3H3.922a8.57 8.57 0 0 1 .917-1H10v1Zm0 7a3.5 3.5 0 1 0 0-7v1H3.238a9.71 9.71 0 0 0-.52 1H8a2.5 2.5 0 1 1 0 3H2.717a9.8 9.8 0 0 0 .52 1H10v1Zm0 0H3.922c.267.341.572.68.917 1H10v-1ZM7.55 9H2.344a2.04 2.04 0 0 0-.094.5c0 .133.042.318.094.5H7.55a2.512 2.512 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default EyeLines;
