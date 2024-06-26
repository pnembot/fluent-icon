import type { SVGProps } from "react";

export function LiveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.453 4.167a.726.726 0 0 0-1.027-.01A8.225 8.225 0 0 0 2 10a8.228 8.228 0 0 0 2.604 6.015a.725.725 0 0 0 1.01-.025c.316-.316.277-.819-.027-1.11A6.73 6.73 0 0 1 3.5 10c0-1.846.741-3.52 1.943-4.738c.29-.295.32-.785.01-1.095ZM7.214 5.93a.714.714 0 0 0-1.008-.016A5.733 5.733 0 0 0 4.5 10a5.73 5.73 0 0 0 1.893 4.264a.713.713 0 0 0 .983-.037c.328-.328.267-.844-.041-1.134A4.237 4.237 0 0 1 6 10c0-1.15.457-2.194 1.2-2.96c.286-.294.333-.793.014-1.111Zm5.572 0a.714.714 0 0 1 1.008-.016A5.733 5.733 0 0 1 15.5 10a5.73 5.73 0 0 1-1.893 4.264a.713.713 0 0 1-.983-.037c-.328-.328-.267-.844.041-1.134A4.237 4.237 0 0 0 14 10c0-1.15-.457-2.194-1.2-2.96c-.286-.294-.333-.793-.014-1.111Zm1.761-1.762a.726.726 0 0 1 1.027-.01A8.225 8.225 0 0 1 18 10a8.228 8.228 0 0 1-2.604 6.015a.725.725 0 0 1-1.01-.025c-.316-.316-.277-.819.028-1.11A6.73 6.73 0 0 0 16.5 10c0-1.846-.741-3.52-1.943-4.738c-.29-.295-.32-.785-.01-1.095ZM10 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default LiveFilled;
