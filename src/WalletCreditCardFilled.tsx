import type { SVGProps } from "react";

export function WalletCreditCardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.177 1.335a1.5 1.5 0 0 0-2.175.307L6.96 5.999h1.22l2.64-3.785a.5.5 0 0 1 .726-.102l.808.656l-2.234 3.231h1.216l1.796-2.6l1.684 1.367a.5.5 0 0 1 .094.675l-.39.558h1.22a1.5 1.5 0 0 0-.294-2.01l-3.27-2.654ZM4.5 5A1.5 1.5 0 0 0 3 6.5v8A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4.5a.5.5 0 0 1 0-1h1.469l.7-1H4.5Zm9 7h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default WalletCreditCardFilled;
