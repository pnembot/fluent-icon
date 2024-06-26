import type { SVGProps } from "react";

export function PeopleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Zm5.687 5.145c.53.217 1.204.355 2.062.355c4 0 4-3 4-3A1.5 1.5 0 0 0 17 11h-4.628c.393.476.629 1.085.629 1.75v.356a2.936 2.936 0 0 1-.017.252a4.974 4.974 0 0 1-.546 1.787ZM17 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM1.5 13a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 4-5.25 4s-5.25-4-5.25-4Zm11.5.106l-.003.064Z"
      />
    </svg>
  );
}
export default PeopleFilled;
