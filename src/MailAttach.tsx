import type { SVGProps } from "react";

export function MailAttach(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m10.766 10.47l-.766.45l-7-4.118V6.5A1.5 1.5 0 0 1 4.5 5h7.376l.998-1H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9.123l-1 .996V14.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968l.082.039a.5.5 0 0 0 .426-.039l.828-.487a2.551 2.551 0 0 1-.316-.975Zm4.46-5.994a1.625 1.625 0 0 1 2.298 2.298l-.01.01l-3.858 3.844l-.01.01a.56.56 0 1 1-.78-.804l3.487-3.48a.5.5 0 1 0-.707-.708l-3.5 3.493a1.56 1.56 0 0 0 2.194 2.218l.012-.01l3.879-3.865a2.625 2.625 0 1 0-3.712-3.713L10.95 7.342a.5.5 0 0 0 .707.707l3.568-3.573Z"
      />
    </svg>
  );
}
export default MailAttach;
