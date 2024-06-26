import type { SVGProps } from "react";

export function FolderSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.386 4.29l-1.32-.99a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .363-.156L9.386 4.29Zm1.179.21L8.158 7.033a1.5 1.5 0 0 1-1.087.467H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.743V7l-.005-.164A2.5 2.5 0 0 0 15.5 4.5h-4.935ZM14.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm1.5-7v.152a3.011 3.011 0 0 0-1.448-.401a2.999 2.999 0 0 0-2.173.878a.5.5 0 0 0 .707.707A2 2 0 0 1 15.468 13H15a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-1 0Zm-1.552 5.25a2.999 2.999 0 0 0 2.173-.879a.5.5 0 0 0-.707-.707a2 2 0 0 1-2.382.336H14a.5.5 0 0 0 0-1h-1.5a.5.5 0 0 0-.5.5V17a.5.5 0 0 0 1 0v-.152a3.011 3.011 0 0 0 1.448.402Z"
      />
    </svg>
  );
}
export default FolderSyncFilled;
