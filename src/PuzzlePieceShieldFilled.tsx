import type { SVGProps } from "react";

export function PuzzlePieceShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 15.056v-2.342c.177.075.359.144.545.21c.295.102.615.102.91 0c1.432-.498 2.588-1.284 3.38-2.387C10.63 9.434 11 8.092 11 6.584V4.035l-.018-.18l-.009-.048A1.404 1.404 0 0 0 9.6 2.667c-.03 0-.06 0-.09-.002A2 2 0 0 1 13 4l-.001.056H16a1 1 0 0 1 1 1L16.999 8H16a2 2 0 0 0-1.995 1.85L14 10a2 2 0 0 0 1.85 1.995L16 12l.999-.001l.001 3.057a1 1 0 0 1-1 1h-3.003l-.002.093A2 2 0 0 1 9 16.057H6a1 1 0 0 1-1-1ZM8 3.348a4.056 4.056 0 0 0 1.6.32c.193 0 .355.142.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.874 5.395a.385.385 0 0 1-.252 0a6.683 6.683 0 0 1-1.875-.979a4.962 4.962 0 0 1-.989-1c-.626-.85-.964-1.903-1.006-3.15L2 6.584v-2.5c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0c.54.563 1.11.97 1.716 1.225Z"
      />
    </svg>
  );
}
export default PuzzlePieceShieldFilled;
