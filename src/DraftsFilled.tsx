import type { SVGProps } from "react";

export function DraftsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.613 8.32l-3.936-3.936l-8.038 8.039l-.117.128a2 2 0 0 0-.398.76l-1.106 4.055l-.015.08a.5.5 0 0 0 .63.534l4.054-1.106l.165-.053c.271-.1.518-.257.723-.462l8.038-8.04Zm1.568-5.503a2.783 2.783 0 0 0-3.936 0l-.861.86l3.936 3.936l.86-.86l.131-.14a2.783 2.783 0 0 0-.13-3.796ZM11.648 3H2.5a.5.5 0 0 0 0 1h8.148l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.148l1-1Zm-3 3l-1 1H2.5a.5.5 0 1 1 0-1h3.148Z"
      />
    </svg>
  );
}
export default DraftsFilled;
