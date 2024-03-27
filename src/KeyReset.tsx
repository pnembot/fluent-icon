import type { SVGProps } from "react";

export function KeyReset(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-7 .5C7 4.424 9.424 2 12.5 2S18 4.424 18 7.5a5.543 5.543 0 0 1-.71 2.736a4.99 4.99 0 0 0-.82-.583c.339-.636.53-1.368.53-2.153C17 4.976 15.024 3 12.5 3S8 4.976 8 7.5c0 .331.034.66.1.964c.11.512.02 1.124-.413 1.556l-4.54 4.54a.5.5 0 0 0-.147.354V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V16a1 1 0 0 1 1-1h1v-1a1 1 0 0 1 1-1h.382A1.494 1.494 0 0 0 9 14v1a1 1 0 0 1-1 1H7v.5A1.5 1.5 0 0 1 5.5 18h-2A1.5 1.5 0 0 1 2 16.5v-1.586c0-.398.158-.78.44-1.06l4.54-4.541c.134-.134.2-.368.142-.638A5.618 5.618 0 0 1 7 7.5Zm4.854 1.354a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 11H14a3 3 0 1 1-3 3a.5.5 0 1 0-1 0a4 4 0 1 0 4-4h-3.293l1.147-1.146Z"
      />
    </svg>
  );
}
export default KeyReset;
