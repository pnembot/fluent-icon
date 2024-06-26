import type { SVGProps } from "react";

export function WindowDevEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h4.975c.11-.361.283-.7.51-1H4.5A1.5 1.5 0 0 1 3 13.5V5.999h12v3.944l.102-.102c.266-.267.572-.47.898-.61V4.5A2.5 2.5 0 0 0 13.5 2h-9ZM2.999 4.499a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v.5h-12v-.5Zm5.353 2.646a.5.5 0 0 1 0 .707L6.206 10l2.146 2.146a.5.5 0 0 1-.707.707l-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .707 0Zm1.794 5a.5.5 0 0 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 0 0-.708.707L12.293 10l-2.147 2.146Zm5.663-1.597l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default WindowDevEdit;
