import type { SVGProps } from "react";

export function TextGrammarArrowRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 10a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Zm-2.353 4.854l-.003-.003A.498.498 0 0 1 3 14.503v-.006a.498.498 0 0 1 .146-.35l2-2a.5.5 0 0 1 .708.707L4.707 14H7.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2ZM2 5.75A.75.75 0 0 1 2.75 5h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 3A.75.75 0 0 1 2.75 8h14.5a.75.75 0 0 1 0 1.5H7.794A5.48 5.48 0 0 0 5.5 9a5.48 5.48 0 0 0-2.294.5H2.75A.75.75 0 0 1 2 8.75Zm8.91 6.75h6.34a.75.75 0 0 0 0-1.5h-6.272a5.586 5.586 0 0 1-.069 1.5Zm-.285-3h6.625a.75.75 0 0 0 0-1.5H9.743c.368.446.668.952.882 1.5Z"
      />
    </svg>
  );
}
export default TextGrammarArrowRightFilled;
