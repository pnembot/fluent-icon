import type { SVGProps } from "react";

export function LearningAppFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.257a5.503 5.503 0 0 1-.657-1H6a1 1 0 0 1-1-1h4.207A5.5 5.5 0 0 1 16 9.207V4a2 2 0 0 0-2-2H6Zm.75 2.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.98-1.966a.452.452 0 0 0-.447-.037a.49.49 0 0 0-.155.108a.51.51 0 0 0-.145.357v3.075a.503.503 0 0 0 .145.358a.562.562 0 0 0 .157.11a.45.45 0 0 0 .323.02a.522.522 0 0 0 .13-.064l2.296-1.567a.469.469 0 0 0 .163-.185a.536.536 0 0 0-.003-.487a.487.487 0 0 0-.167-.182l-2.297-1.506Z"
      />
    </svg>
  );
}
export default LearningAppFilled;
