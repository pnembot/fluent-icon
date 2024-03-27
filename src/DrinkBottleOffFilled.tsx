import type { SVGProps } from "react";

export function DrinkBottleOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.992 15.7l2.154 2.154a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L6.282 6.99C5.492 7.78 5 8.833 5 10c0 .094.003.188.01.28c-.007.073-.01.146-.01.22v5a2.5 2.5 0 0 0 3.75 2.165A2.49 2.49 0 0 0 10 18a2.49 2.49 0 0 0 1.25-.335a2.5 2.5 0 0 0 3.742-1.966ZM6 15h8v.5a1.5 1.5 0 0 1-2.437 1.171a.5.5 0 0 0-.626 0A1.491 1.491 0 0 1 10 17c-.355 0-.68-.123-.937-.329a.5.5 0 0 0-.626 0A1.5 1.5 0 0 1 6 15.5V15Zm9-4.5v2.379L9.121 7h3.244l-.042-.041C11.79 6.434 11.211 5.864 11.046 5h-2.09c-.09.5-.31.9-.581 1.254l-.716-.716a1.77 1.77 0 0 0 .298-.64A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 .547 2.897c.121.487.477.856 1.022 1.393l.01.01c.384.378.839.826 1.237 1.423a4.144 4.144 0 0 1 .674 2.558c.007.072.01.145.01.219ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default DrinkBottleOffFilled;
