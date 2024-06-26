import type { SVGProps } from "react";

export function FolderSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1a5.465 5.465 0 0 1-.393-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.071a1.5 1.5 0 0 0 1.087-.466L9.619 5.5H15.5A1.5 1.5 0 0 1 17 7v2.6c.358.183.693.404 1 .657V7a2.5 2.5 0 0 0-2.5-2.5H9.667l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5A1.5 1.5 0 0 1 4.5 4h2.667a.5.5 0 0 1 .3.1l1.227.92l-1.26 1.325a.5.5 0 0 1-.363.155H3v-1ZM14.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm1.5-7v.152a3.011 3.011 0 0 0-1.448-.401a2.999 2.999 0 0 0-2.173.878a.5.5 0 0 0 .707.707A2 2 0 0 1 15.468 13H15a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-1 0Zm-1.552 5.25a2.999 2.999 0 0 0 2.173-.879a.5.5 0 0 0-.707-.707a2 2 0 0 1-2.382.336H14a.5.5 0 0 0 0-1h-1.5a.5.5 0 0 0-.5.5V17a.5.5 0 0 0 1 0v-.152a3.011 3.011 0 0 0 1.448.402Z"
      />
    </svg>
  );
}
export default FolderSync;
