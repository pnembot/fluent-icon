import type { SVGProps } from "react";

export function Recycle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.323 2.92c-.566-1.055-2.078-1.055-2.643 0L6.826 6.37a.5.5 0 1 1-.88-.473l1.853-3.452c.943-1.756 3.462-1.756 4.405 0l2.008 3.742l.295-1.77a.5.5 0 0 1 .986.164l-.5 3a.5.5 0 0 1-.651.392l-3-1a.5.5 0 0 1 .316-.948l1.622.54l-1.957-3.647Zm4.023 6.407a.5.5 0 0 0-.217.684l2.03 3.78a1.5 1.5 0 0 1-1.322 2.21h-4.13l1.147-1.147a.5.5 0 0 0-.707-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .707-.708l-1.146-1.145h4.13c1.89 0 3.096-2.017 2.202-3.683l-2.03-3.78a.5.5 0 0 0-.664-.211ZM4.164 16H7.5a.5.5 0 0 1 0 1H4.164c-1.89 0-3.097-2.017-2.203-3.683l2.144-3.993l-1.947.65a.5.5 0 1 1-.316-.95l3-1a.5.5 0 0 1 .632.316l1 3a.5.5 0 0 1-.948.317l-.59-1.768l-2.094 3.901A1.5 1.5 0 0 0 4.164 16Z"
      />
    </svg>
  );
}
export default Recycle;
