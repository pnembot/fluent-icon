import type { SVGProps } from "react";

export function MailInbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 7h-3.5a.5.5 0 0 0-.5.5v.011l-.004.06a2.57 2.57 0 0 1-.256.955a1.694 1.694 0 0 1-.572.667c-.26.174-.63.307-1.168.307c-.538 0-.907-.133-1.168-.307a1.694 1.694 0 0 1-.572-.667A2.572 2.572 0 0 1 8 10.511V10.5a.5.5 0 0 0-.5-.5H4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4ZM4 11h3.05c.047.264.137.616.315.974c.186.371.473.758.912 1.051c.443.295 1.01.475 1.723.475c.713 0 1.28-.18 1.723-.475c.44-.293.726-.68.912-1.051c.178-.358.268-.71.315-.974H16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z"
      />
    </svg>
  );
}
export default MailInbox;
