import type { SVGProps } from "react";

export function VideoBackgroundEffectHorizontal(
  props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>
) {
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
        d="M4 4a2 2 0 0 0-1.732 1h15.464A2 2 0 0 0 16 4H4ZM2 7h4.837c-.148.31-.251.647-.302 1H2V7Zm6 0a2.488 2.488 0 0 0-.5 1.5a2.492 2.492 0 0 0 1 2c.418.314.937.5 1.5.5s1.082-.186 1.5-.5a2.492 2.492 0 0 0 .95-2.5A2.496 2.496 0 0 0 10 6c-.818 0-1.544.393-2 1Zm2 0a1.5 1.5 0 1 1 0 3.001A1.5 1.5 0 0 1 10 7ZM2 9.5h4.645c.107.361.272.698.482 1H2v-1ZM6.085 13A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5c0-.175.03-.344.085-.5Zm8.415-1c.219.29.375.63.45 1H18v-1h-3.5Zm.5 3v1h1a2 2 0 0 0 1.732-1H15ZM5 16v-1H2.268A2 2 0 0 0 4 16h1Zm.5-4c-.219.29-.375.63-.45 1H2v-1h3.5Zm7.855-2.5a3.487 3.487 0 0 1-.482 1H18v-1h-4.645ZM18 8h-4.535a3.474 3.474 0 0 0-.302-1H18v1Z"
      />
    </svg>
  );
}
export default VideoBackgroundEffectHorizontal;
