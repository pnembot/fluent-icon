import type { SVGProps } from "react";

export function BoxMultipleCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.577 2.378a3 3 0 0 0-2.154 0L7.962 3.709A1.5 1.5 0 0 0 7 5.109v1.1a4 4 0 0 1 1.936.235l3.46 1.332c.617.236 1.099.7 1.367 1.272A5.477 5.477 0 0 1 18 10.256V5.109a1.5 1.5 0 0 0-.961-1.4l-3.461-1.331Zm1.868 2.154a.5.5 0 1 1 .359.934l-2.766 1.063a1.5 1.5 0 0 1-1.077 0L9.195 5.466a.5.5 0 0 1 .36-.934l2.765 1.064a.5.5 0 0 0 .36 0l2.765-1.064ZM12.038 8.71a1.5 1.5 0 0 1 .713.574a5.49 5.49 0 0 0-1.699.93a.5.5 0 0 0-.607-.207L7.5 11.139l-2.946-1.133a.5.5 0 1 0-.359.933L7 12.018v2.49a.5.5 0 0 0 1 0v-2.49l2.088-.803A5.475 5.475 0 0 0 9 14.499c0 .977.255 1.894.7 2.689l-1.123.432a3 3 0 0 1-2.154 0l-3.461-1.33A1.5 1.5 0 0 1 2 14.89v-4.78a1.5 1.5 0 0 1 .962-1.4l3.46-1.331a3 3 0 0 1 2.155 0l3.461 1.331ZM19 14.499a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.646a.5.5 0 0 0-.708.707l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.707Z"
      />
    </svg>
  );
}
export default BoxMultipleCheckmarkFilled;
