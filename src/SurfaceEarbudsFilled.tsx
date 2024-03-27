import type { SVGProps } from "react";

export function SurfaceEarbudsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.552 14.028a5.754 5.754 0 0 0 2.898 4.246l-1.401.571a2 2 0 0 1-2.365-.663l-.27-.368a2 2 0 0 1 .054-2.447l1.084-1.339ZM14.25 8.5a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5ZM5.75 1c.195 0 .387.012.576.035l.279.042l-.139.044a3.7 3.7 0 0 0-.787.384c-1.711 1.101-2.222 3.382-1.14 5.097a3.647 3.647 0 0 0 5.067 1.113c.248-.16.477-.347.683-.559A4.752 4.752 0 0 1 1 5.75A4.75 4.75 0 0 1 5.75 1Zm5.367.457l.09.101l.091.122l.442.65a1.5 1.5 0 0 1-.026 1.724l-.092.116L9.74 6.35c-.165.192-.349.36-.552.501a2.647 2.647 0 0 1-3.707-.676a2.716 2.716 0 0 1 1.43-4.106l2.614-.968a1.5 1.5 0 0 1 1.592.355Zm-1.135.687a.5.5 0 0 0-.208.606l.04.081l.258.428l.054.073a.5.5 0 0 0 .841-.51l-.04-.08l-.258-.429l-.053-.072a.5.5 0 0 0-.634-.097Z"
      />
    </svg>
  );
}
export default SurfaceEarbudsFilled;
