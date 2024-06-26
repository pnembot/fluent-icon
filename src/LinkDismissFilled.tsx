import type { SVGProps } from "react";

export function LinkDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 4a4 4 0 0 1 3.52 5.902a5.479 5.479 0 0 0-1.358-.646a2.5 2.5 0 0 0-1.998-3.75L14 5.5h-2a.75.75 0 0 1-.102-1.493L12 4h2ZM8 4a.75.75 0 0 1 .102 1.493L8 5.5H6a2.5 2.5 0 0 0-.164 4.995L6 10.5h2a.75.75 0 0 1 .102 1.493L8 12H6a4 4 0 0 1-.2-7.995L6 4h2ZM6.25 7.25h7.5a.75.75 0 0 1 .102 1.493l-.102.007h-7.5a.75.75 0 0 1-.102-1.493l.102-.007ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.732-1.06a.5.5 0 0 0-.707-.708l-1.061 1.06l-1.06-1.06a.5.5 0 0 0-.708.707l1.06 1.061l-1.06 1.06a.5.5 0 0 0 .707.708l1.061-1.06l1.06 1.06a.5.5 0 0 0 .708-.707l-1.06-1.061l1.06-1.06Z"
      />
    </svg>
  );
}
export default LinkDismissFilled;
