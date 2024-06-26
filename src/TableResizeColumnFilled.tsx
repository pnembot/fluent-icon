import type { SVGProps } from "react";

export function TableResizeColumnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v-4.382l.06-.057l1.5-1.5a1.5 1.5 0 0 0 0-2.122l-1.5-1.5a1.6 1.6 0 0 0-.06-.057V3Zm-1 0v4c-.384 0-.768.146-1.06.44c-.294.292-.44.676-.44 1.06h-3c0-.384-.146-.768-.44-1.06A1.495 1.495 0 0 0 7 7V3h6Zm-4.94 9.56c-.292.294-.676.44-1.06.44v4h6v-4c-.384 0-.768-.146-1.06-.44a1.496 1.496 0 0 1-.44-1.06h-3c0 .384-.146.768-.44 1.06ZM6 17v-4.382a1.55 1.55 0 0 1-.06-.057l-1.5-1.5a1.5 1.5 0 0 1 0-2.122l1.5-1.5l.06-.057V3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm1.354-8.854a.5.5 0 0 1 0 .708l-.647.646h6.586l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H6.707l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default TableResizeColumnFilled;
