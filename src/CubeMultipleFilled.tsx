import type { SVGProps } from "react";

export function CubeMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.205 2.513a5 5 0 0 1 3.59 0l4.243 1.632c.58.223.962.78.962 1.4v.142a2.498 2.498 0 0 0-.603-.334l-4.961-1.908a4 4 0 0 0-2.872 0L3.603 5.353A2.498 2.498 0 0 0 3 5.687v-.142a1.5 1.5 0 0 1 .962-1.4l4.243-1.632Zm2.872 1.865a3 3 0 0 0-2.154 0L3.962 6.287A1.5 1.5 0 0 0 3 7.687v6.626a1.5 1.5 0 0 0 .962 1.4l4.961 1.909a3 3 0 0 0 2.154 0l4.961-1.909a1.5 1.5 0 0 0 .962-1.4V7.687a1.5 1.5 0 0 0-.962-1.4l-4.961-1.909ZM6.04 8.303a.5.5 0 0 1 .657-.263L10 9.456l3.303-1.416a.5.5 0 0 1 .394.92L10.5 10.33v3.17a.5.5 0 1 1-1 0v-3.17L6.303 8.96a.5.5 0 0 1-.263-.657Z"
      />
    </svg>
  );
}
export default CubeMultipleFilled;
