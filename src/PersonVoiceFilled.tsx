import type { SVGProps } from "react";

export function PersonVoiceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.854 1.146a.5.5 0 0 0-.708.708c1.136 1.135 1.729 2.87 1.729 4.646c0 1.776-.593 3.511-1.729 4.646a.5.5 0 0 0 .708.708c1.364-1.365 2.021-3.38 2.021-5.354c0-1.974-.657-3.989-2.021-5.354Zm-2 2a.5.5 0 0 0-.708.708c.635.635.979 1.62.979 2.646c0 1.026-.344 2.011-.979 2.646a.5.5 0 0 0 .708.708c.865-.865 1.271-2.13 1.271-3.354c0-1.224-.406-2.489-1.271-3.354ZM4 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-3 7c0-1.113.903-2 2.009-2H13a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C11.583 18.614 9.855 19 8 19c-1.855 0-3.583-.386-4.865-1.203C1.833 16.967 1 15.69 1 14Z"
      />
    </svg>
  );
}
export default PersonVoiceFilled;
