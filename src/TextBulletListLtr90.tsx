import type { SVGProps } from "react";

export function TextBulletListLtr90(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1 3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5Zm-5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5ZM6 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM5.5 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default TextBulletListLtr90;
