import type { SVGProps } from "react";

export function EyeLinesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6H3.922a8.57 8.57 0 0 1 .917-1H10V4H6.182C7.207 3.4 8.469 3 10 3c2.943 0 4.889 1.48 6.081 3.004a9.733 9.733 0 0 1 1.27 2.151c.132.31.228.584.293.802c.057.195.106.4.106.543c0 .143-.049.348-.106.543a7.515 7.515 0 0 1-.293.802a9.735 9.735 0 0 1-1.27 2.15C14.89 14.52 12.943 16 10 16c-1.531 0-2.793-.4-3.818-1H10v-1H4.84a8.587 8.587 0 0 1-.918-1H10v-.5a3 3 0 1 0 0-6V6ZM8.341 7H3.238a9.71 9.71 0 0 0-.52 1H7.4c.233-.401.555-.744.94-1Zm-1.3 2H2.344a2.04 2.04 0 0 0-.094.5c0 .133.042.318.094.5H7.04a3.02 3.02 0 0 1 0-1Zm.36 2H2.717a9.8 9.8 0 0 0 .52 1h5.104a3.015 3.015 0 0 1-.94-1Z"
      />
    </svg>
  );
}
export default EyeLinesFilled;
