import type { SVGProps } from "react";

export function MailOpenPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.743 2.071a.5.5 0 0 1 .514 0l6.772 4.063a2 2 0 0 1 .7.709L10 10.934L2.272 6.843c.167-.287.405-.532.699-.709l6.772-4.063Zm3.134 8.472l-2.643 1.399a.5.5 0 0 1-.468 0L2 7.83v5.67A2.5 2.5 0 0 0 4.5 16h6.55a2.502 2.502 0 0 1 2.223-1.99A2.99 2.99 0 0 1 12.5 12c0-.529.137-1.026.377-1.457ZM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default MailOpenPersonFilled;
