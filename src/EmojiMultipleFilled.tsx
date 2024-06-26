import type { SVGProps } from "react";

export function EmojiMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 7a5.002 5.002 0 0 0 4.027 4.905a6.475 6.475 0 0 1 1.666-3.78A2 2 0 0 0 5.48 8.7a.5.5 0 1 1-.76-.65a3 3 0 0 1 3.76-.659a6.468 6.468 0 0 1 3.425-1.364A5.002 5.002 0 0 0 2 7Zm4.25-1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm8.75 7a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-6.75-1a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm3.855 2.57a.5.5 0 0 0-.705.055a2.501 2.501 0 0 1-3.797.003a.5.5 0 1 0-.759.652a3.499 3.499 0 0 0 5.316-.005a.5.5 0 0 0-.055-.705Zm-.605-1.82a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default EmojiMultipleFilled;
