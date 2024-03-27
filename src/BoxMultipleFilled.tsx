import type { SVGProps } from "react";

export function BoxMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.577 2.378a3 3 0 0 0-2.154 0L7.962 3.709A1.5 1.5 0 0 0 7 5.109v1.1a4 4 0 0 1 1.936.235l3.46 1.332A2.5 2.5 0 0 1 14 10.109v4.78a2.5 2.5 0 0 1-.072.596l3.111-1.196a1.5 1.5 0 0 0 .962-1.4v-7.78a1.5 1.5 0 0 0-.962-1.4l-3.461-1.331Zm1.868 2.154a.5.5 0 1 1 .359.934l-2.766 1.063a1.5 1.5 0 0 1-1.077 0L9.195 5.466a.5.5 0 0 1 .36-.934l2.765 1.064a.5.5 0 0 0 .36 0l2.765-1.064ZM6.423 7.378a3 3 0 0 1 2.154 0l3.461 1.331c.58.223.961.78.961 1.4v4.78a1.5 1.5 0 0 1-.961 1.4L8.577 17.62a3 3 0 0 1-2.154 0l-3.461-1.33A1.5 1.5 0 0 1 2 14.89v-4.78a1.5 1.5 0 0 1 .962-1.4l3.46-1.331Zm4.668 2.915a.5.5 0 0 0-.646-.287L7.5 11.139l-2.946-1.133a.5.5 0 1 0-.359.933L7 12.018v2.49a.5.5 0 0 0 1 0v-2.49l2.804-1.079a.5.5 0 0 0 .287-.646Z"
      />
    </svg>
  );
}
export default BoxMultipleFilled;
