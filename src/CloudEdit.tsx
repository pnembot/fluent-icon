import type { SVGProps } from "react";

export function CloudEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h3.193c.11-.361.283-.7.51-1H5.282C4.028 14 3 12.942 3 11.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9C6.551 6.315 7.886 5 10 5c2.108 0 3.45 1.325 3.652 3.346c.025.25.14.471.313.632l.137-.137c.252-.253.54-.448.847-.587a3.242 3.242 0 0 0-.231-.008h-.071Zm.162 1.302l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default CloudEdit;
