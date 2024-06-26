import type { SVGProps } from "react";

export function DocumentTableCubeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.859 12a2 2 0 0 0-.86-.996V10h3.5a.5.5 0 0 1 .5.5V12h-3.14Zm3.14 1v1.5a.5.5 0 0 1-.5.5h-2.5v-2h3ZM6.272 9.637l-.379-.19a2 2 0 0 0-1.788 0l-.106.053v-6a1.5 1.5 0 0 1 1.5-1.5h4.5v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5v8.5a1.5 1.5 0 0 1-1.5 1.5H9.322A2 2 0 0 0 10 16.5V16h2.5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 9h-5a1.5 1.5 0 0 0-1.227.637ZM11 2.25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM1.031 16.507v-3.764a1 1 0 0 1 .553-.894l3-1.5a1 1 0 0 1 .894 0l3 1.5a1 1 0 0 1 .553.894v3.764a1 1 0 0 1-.553.894l-3 1.5a1 1 0 0 1-.894 0l-3-1.5a1 1 0 0 1-.553-.894Zm1.04-3.576a.5.5 0 0 0 .266.655l2.194.926v2.613a.5.5 0 1 0 1 0v-2.613l2.195-.926a.5.5 0 1 0-.39-.921l-2.305.973l-2.305-.973a.5.5 0 0 0-.655.266Z"
      />
    </svg>
  );
}
export default DocumentTableCubeFilled;
