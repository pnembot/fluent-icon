import type { SVGProps } from "react";

export function Presenter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.999 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-1.5 3a.5.5 0 0 0-.5.5V9h-1v-.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V9h-1v-.5a.5.5 0 0 0-.5-.5h-3Zm-1.5 6.784V16.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.716a.5.5 0 0 1 .153-.36l3.703-3.564a.5.5 0 0 0-.347-.86H3.49a.5.5 0 0 0-.346.86l3.702 3.564a.5.5 0 0 1 .154.36Zm1 1.716v-1.716a1.5 1.5 0 0 0-.46-1.08L4.729 11h10.538l-2.808 2.703a1.5 1.5 0 0 0-.46 1.081V16.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default Presenter;
