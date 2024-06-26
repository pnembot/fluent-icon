import type { SVGProps } from "react";

export function CloudSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623c0 .095-.004.19-.011.283A5.75 5.75 0 0 0 7.772 13h-2.49C3.469 13 2 11.488 2 9.623c0-1.865 1.47-3.377 3.282-3.377h.071C5.587 3.908 7.183 2 10 2ZM9 13.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1 0-1h.468a1.999 1.999 0 0 0-2.383.336a.5.5 0 0 1-.706-.707A3.001 3.001 0 0 1 15 11.152V11a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 12 15.848V16a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1h-.468a1.999 1.999 0 0 0 2.383-.336a.5.5 0 0 1 .706.707c-.285.285-.624.51-.997.66Z"
      />
    </svg>
  );
}
export default CloudSyncFilled;
