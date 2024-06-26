import type { SVGProps } from "react";

export function FolderBriefcaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.067 3.3l1.319.99l-1.953 2.054a.5.5 0 0 1-.362.156H2v-1A2.5 2.5 0 0 1 4.5 3h2.667c.324 0 .64.105.9.3Zm.091 3.733L10.565 4.5H15.5a2.5 2.5 0 0 1 2.495 2.336L18 7v4.17c-.313-.11-.65-.17-1-.17v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a3 3 0 0 0-3 3v3H4.5A2.5 2.5 0 0 1 2 14.5v-7h5.07a1.5 1.5 0 0 0 1.088-.467ZM11 12a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v-1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12h-1Zm2 0v-1h2v1h-2Z"
      />
    </svg>
  );
}
export default FolderBriefcaseFilled;
