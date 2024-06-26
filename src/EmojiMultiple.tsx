import type { SVGProps } from "react";

export function EmojiMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2a5.002 5.002 0 0 1 4.905 4.027a6.48 6.48 0 0 0-.986.167a4.001 4.001 0 1 0-4.725 4.725c-.08.32-.137.65-.167.986A5.002 5.002 0 0 1 7 2Zm.693 6.124c.242-.265.506-.51.788-.733a2.999 2.999 0 0 0-3.761.66a.5.5 0 1 0 .76.65a2 2 0 0 1 2.213-.577ZM6.25 5.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm1.25 6.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm4.605 1.82a.5.5 0 0 1 .055.705a3.5 3.5 0 0 1-5.316.005a.5.5 0 1 1 .759-.652a2.501 2.501 0 0 0 3.797-.003a.5.5 0 0 1 .705-.055Zm-.605-1.82a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-2 5.75a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Zm0-1a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Z"
      />
    </svg>
  );
}
export default EmojiMultiple;
