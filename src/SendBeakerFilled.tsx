import type { SVGProps } from "react";

export function SendBeakerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.724 1.553a.5.5 0 0 0-.707.576l1.498 5.618a.5.5 0 0 0 .4.364l6.855 1.142c.279.047.279.447 0 .494l-6.854 1.142a.5.5 0 0 0-.401.364l-1.498 5.618a.5.5 0 0 0 .707.576l9.734-4.867A1.5 1.5 0 0 1 13.5 10h4c.038 0 .075.001.111.004l.114-.057a.5.5 0 0 0 0-.894l-15-7.5Zm14.273 12.852a2 2 0 0 0 .224.92l.35.675H13.43l.347-.67a2 2 0 0 0 .224-.92V12h-.498a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1h-.505v2.405ZM12.911 17l-.798 1.54a1 1 0 0 0 .888 1.46H18a1 1 0 0 0 .888-1.46L18.089 17h-5.178Z"
      />
    </svg>
  );
}
export default SendBeakerFilled;
