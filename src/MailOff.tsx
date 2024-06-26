import type { SVGProps } from "react";

export function MailOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11c.241 0 .474-.034.695-.098l.951.952a.5.5 0 0 0 .708-.708l-15-15ZM15.293 16H4.5A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968l.082.038a.5.5 0 0 0 .426-.038l.61-.36L15.293 16Zm-5.159-5.159L10 10.92L3 6.802V6.5a1.5 1.5 0 0 1 1.305-1.487l5.829 5.828ZM17 6.801l-5.085 2.992l.73.73L17 7.962V14.5c0 .117-.013.23-.039.34l.777.776A2.49 2.49 0 0 0 18 14.5v-8A2.5 2.5 0 0 0 15.5 4H6.121l1 1H15.5A1.5 1.5 0 0 1 17 6.5v.301Z"
      />
    </svg>
  );
}
export default MailOff;
