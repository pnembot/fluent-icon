import type { SVGProps } from "react";

export function CloudEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246h-.07C3.468 8.246 2 9.758 2 11.623C2 13.488 3.47 15 5.282 15h3.193c.152-.501.426-.958.798-1.33l4.829-4.83a2.87 2.87 0 0 1 .847-.586a3.242 3.242 0 0 0-.231-.008h-.071Zm.162 1.302l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default CloudEditFilled;
