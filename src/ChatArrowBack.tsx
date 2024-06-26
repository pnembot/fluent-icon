import type { SVGProps } from "react";

export function ChatArrowBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 0 1 7.996 8.254a5.506 5.506 0 0 0-1.008-.66a7 7 0 1 0-13.094 3.83a.5.5 0 0 1 .063.273l-.014.094l-.756 3.021l3.024-.754a.502.502 0 0 1 .188-.01l.091.021l.087.039c.92.517 1.947.82 3.017.88c.183.361.405.699.66 1.008a7.968 7.968 0 0 1-3.867-.857l-.121-.064l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8Zm4.5 17a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default ChatArrowBack;
