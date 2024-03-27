import type { SVGProps } from "react";

export function PuzzlePieceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 2a2 2 0 0 1 2 2l-.001.056H16a1 1 0 0 1 1 1L16.999 8H16a2 2 0 0 0-1.995 1.85L14 10a2 2 0 0 0 1.85 1.995L16 12l.999-.001l.001 3.057a1 1 0 0 1-1 1h-3.003l-.002.093A2 2 0 0 1 9 16.057H6a1 1 0 0 1-1-1V12a2 2 0 1 1 0-4V5.056a1 1 0 0 1 1-1h2.999L9 4a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default PuzzlePieceFilled;
