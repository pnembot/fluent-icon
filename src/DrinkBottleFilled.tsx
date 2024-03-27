import type { SVGProps } from "react";

export function DrinkBottleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3.5a1.5 1.5 0 0 0 .957 1.399c-.116.507-.464.882-.997 1.432h-.001v.002c-.105.107-.216.221-.329.341C5.64 7.488 5 8.671 5 10c0 .094.003.188.01.28c-.007.073-.01.146-.01.22v5a2.5 2.5 0 0 0 3.75 2.165A2.49 2.49 0 0 0 10 18a2.49 2.49 0 0 0 1.25-.335A2.5 2.5 0 0 0 15 15.5v-5c0-.074-.003-.147-.01-.22a4.144 4.144 0 0 0-.674-2.558c-.398-.596-.853-1.044-1.236-1.422l-.01-.01c-.546-.537-.902-.906-1.023-1.393A1.5 1.5 0 0 0 11.5 2h-3A1.5 1.5 0 0 0 7 3.5Zm-1 12V15h8v.5a1.5 1.5 0 0 1-2.437 1.171a.5.5 0 0 0-.626 0A1.491 1.491 0 0 1 10 17c-.355 0-.68-.123-.937-.329a.5.5 0 0 0-.626 0A1.5 1.5 0 0 1 6 15.5ZM8.956 5h2.09c.165.864.744 1.434 1.277 1.959l.042.041H7.704l.013-.013C8.242 6.446 8.799 5.872 8.957 5ZM11.5 4h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default DrinkBottleFilled;
