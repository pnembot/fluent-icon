import type { SVGProps } from "react";

export function StarArrowRightStart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.103 2.555a1.002 1.002 0 0 1 1.794 0l1.93 3.894l4.316.625a.995.995 0 0 1 .554 1.698l-3.123 3.031l.737 4.28c.14.814-.717 1.434-1.45 1.05l-2.967-1.552c.069-.346.105-.704.106-1.07l3.326 1.741l-.738-4.28a.993.993 0 0 1 .288-.881l3.123-3.032l-4.316-.624a1 1 0 0 1-.753-.545L10 2.996L8.07 6.89a1 1 0 0 1-.753.545l-4.316.624l1.143 1.11a5.46 5.46 0 0 0-1.041.38l-.8-.777a.995.995 0 0 1 .554-1.698l4.316-.625l1.93-3.894ZM5.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003A.498.498 0 0 0 8 14.503v-.006a.498.498 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L6.293 14H3.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default StarArrowRightStart;
