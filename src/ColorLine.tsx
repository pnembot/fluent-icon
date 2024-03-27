import type { SVGProps } from "react";

export function ColorLine(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.098 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.304l-.57.573a2.5 2.5 0 0 1-.568.426H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.08a1.483 1.483 0 0 1-.067-.587l.004-.042l.028-.165l.053-.206Zm8.076-9.38a2.263 2.263 0 0 1 3.07-.125l.13.12l.126.136a2.276 2.276 0 0 1 0 2.952l-.12.13l-5.963 5.99a1.5 1.5 0 0 1-.547.35l-.157.047l-3.086.76a.5.5 0 0 1-.618-.526l.015-.084l.792-3.07a1.5 1.5 0 0 1 .283-.566l.106-.118l5.969-5.995Zm2.494.703a1.263 1.263 0 0 0-1.683-.089l-.103.093L6.914 9.32a.5.5 0 0 0-.1.145l-.03.083l-.583 2.26l2.273-.56a.501.501 0 0 0 .113-.043l.052-.03l.07-.06l5.962-5.988a1.277 1.277 0 0 0-.003-1.805Z"
      />
    </svg>
  );
}
export default ColorLine;
