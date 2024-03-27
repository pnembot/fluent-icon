import type { SVGProps } from "react";

export function CallWarningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.603 1.554L9.107 8.552A1 1 0 0 0 10.002 10h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0V3.495a.5.5 0 1 1 1 0ZM13.498 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1ZM6.535 2.117c-1.04-.264-2.13-.152-2.984.326c-.87.486-1.48 1.347-1.51 2.501c-.046 1.802.371 4.22 2.027 7.058c1.635 2.803 3.44 4.482 4.938 5.481c.946.631 1.991.648 2.884.236c.88-.405 1.594-1.213 1.965-2.216a1.838 1.838 0 0 0-.12-1.536l-.954-1.703a2.5 2.5 0 0 0-3.074-1.113l-.666.254c-.323.124-.62.067-.788-.099c-.565-.555-.969-1.309-1.152-2.12c-.058-.256.06-.558.342-.771l.601-.454a2.5 2.5 0 0 0 .663-3.239l-.972-1.695a1.929 1.929 0 0 0-1.2-.91Z"
      />
    </svg>
  );
}
export default CallWarningFilled;
