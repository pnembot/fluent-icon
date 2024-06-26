import type { SVGProps } from "react";

export function PipelineArrowCurveDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.98 6a5.48 5.48 0 0 1-.185 1h4.203v6H4.993v-2.023a5.485 5.485 0 0 1-1-.186V14.5a.5.5 0 0 1-1 0v-4.103a5.512 5.512 0 0 1-1.001-.659V14.5a1.5 1.5 0 0 0 3.001 0V14h10.005v.5a1.5 1.5 0 0 0 3.002 0v-9a1.5 1.5 0 0 0-3.002 0V6H10.98Zm5.52-1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1.001 0v-9a.5.5 0 0 1 .5-.5ZM5.501 1a4.501 4.501 0 1 0 0 9a4.501 4.501 0 1 0 0-9Zm2.605 5.396a.5.5 0 0 1 0 .708l-1.75 1.75a.499.499 0 0 1-.706.002L3.898 7.104a.5.5 0 1 1 .707-.708l.897.897V5.75A1.75 1.75 0 0 0 3.752 4h-.25a.5.5 0 1 1 0-1h.25a2.75 2.75 0 0 1 2.75 2.75v1.543l.898-.897a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default PipelineArrowCurveDown;
