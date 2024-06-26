import type { SVGProps } from "react";

export function AlignSpaceBetweenVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3ZM2 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Zm14-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z"
      />
    </svg>
  );
}
export default AlignSpaceBetweenVertical;
