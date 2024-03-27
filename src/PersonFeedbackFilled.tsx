import type { SVGProps } from "react";

export function PersonFeedbackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 12a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 12h7ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 1.994 1.85L18 4v2a2 2 0 0 1-1.85 1.995L16 8h-1.501l-1.198 1.6c-.53.706-1.604.42-1.777-.376l-.017-.111L11.5 9V7.935l-.078-.02a2.003 2.003 0 0 1-1.397-1.6l-.02-.166L10 6V4a2 2 0 0 1 1.85-1.995L12 2h4Z"
      />
    </svg>
  );
}
export default PersonFeedbackFilled;
