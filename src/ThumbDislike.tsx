import type { SVGProps } from "react";

export function ThumbDislike(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.052 17.706c.34.977 1.632 1.427 2.43.59c.164-.17.326-.355.436-.519c.32-.48.455-1.113.504-1.73c.05-.628.016-1.302-.048-1.912a18.348 18.348 0 0 0-.241-1.583l-.01-.052h.883a3 3 0 0 0 2.952-3.537l-.684-3.762a4.5 4.5 0 0 0-5.612-3.536l-5.6 1.527A2.5 2.5 0 0 0 3.27 5.114l-.353 1.765c-.278 1.389.784 2.558 1.913 3.005c.323.127.614.289.84.49c1.707 1.513 2.325 2.723 3.385 4.849c.354.71.718 1.676.998 2.482Zm1.965-5.585v.002l.002.007l.007.031a14.204 14.204 0 0 1 .126.583c.076.39.167.92.227 1.496c.061.577.09 1.184.046 1.728c-.044.555-.16.985-.34 1.254c-.059.09-.171.222-.326.383c-.199.209-.628.16-.762-.227c-.283-.814-.664-1.83-1.048-2.601c-1.067-2.14-1.756-3.501-3.616-5.151a3.83 3.83 0 0 0-1.136-.672c-.88-.348-1.447-1.149-1.3-1.879l.352-1.765a1.5 1.5 0 0 1 1.077-1.153l5.6-1.527a3.5 3.5 0 0 1 4.364 2.75l.684 3.762a2 2 0 0 1-1.968 2.358h-1.505a.5.5 0 0 0-.484.621Z"
      />
    </svg>
  );
}
export default ThumbDislike;
