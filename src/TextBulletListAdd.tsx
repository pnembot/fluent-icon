import type { SVGProps } from "react";

export function TextBulletListAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.022 5.5a5.5 5.5 0 0 1 .185-1H6.5a.5.5 0 0 0 0 1h3.522ZM4 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm17 5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z"
      />
    </svg>
  );
}
export default TextBulletListAdd;
