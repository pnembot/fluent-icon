import type { SVGProps } from "react";

export function BoxDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m17.421 4.992l-3.046 1.219l-7.5-3L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303a1.5 1.5 0 0 1 .364.208Zm-7.42 2.969l3.028-1.212l-7.5-3l-2.586 1.035a1.499 1.499 0 0 0-.364.208L10 7.961ZM2.034 5.852A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.26.104.528.175.8.214v-.937A5.48 5.48 0 0 1 9 14.5c0-.82.18-1.596.5-2.295V8.838L2.035 5.852ZM18 6.176v4.081A5.477 5.477 0 0 0 14.5 9a5.485 5.485 0 0 0-4 1.725V8.838l7.465-2.986c.023.105.035.214.035.324Zm1 8.324a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default BoxDismissFilled;
