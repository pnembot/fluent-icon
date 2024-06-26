import type { SVGProps } from "react";

export function ArrowSyncDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.414 2.928a.5.5 0 0 1 0 .707l-.016.016a6.62 6.62 0 0 0-1.332-.152a6.5 6.5 0 0 0-3.959 11.706a.5.5 0 1 1-.6.8A7.5 7.5 0 0 1 9.583 2.51l-.996-.996a.5.5 0 0 1 .707-.707l2.121 2.12Zm-2.812 13.42l-.016.015a.5.5 0 0 0 0 .707l2.121 2.121a.5.5 0 0 0 .707-.707l-.997-.997a7.5 7.5 0 0 0 4.075-13.495a.5.5 0 1 0-.6.8a6.5 6.5 0 0 1-5.291 11.555Zm3.252-8.203a.5.5 0 0 1 0 .708l-1.147 1.146l1.147 1.146a.5.5 0 0 1-.708.708L10 10.706l-1.146 1.147a.5.5 0 0 1-.708-.707l1.147-1.147l-1.147-1.146a.5.5 0 1 1 .708-.708L10 9.292l1.146-1.147a.5.5 0 0 1 .708 0ZM5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
}
export default ArrowSyncDismiss;
