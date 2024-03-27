import type { SVGProps } from "react";

export function DatabasePlugConnectedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3Zm4.69.016c.47-.235.927-.534 1.31-.896v2.989a2.968 2.968 0 0 0-1.873.866l-.6.6a1.981 1.981 0 0 0-.576 1.517a1.98 1.98 0 0 0-1.519.576l-.6.6a2.987 2.987 0 0 0-.772 2.893l-.76.764a1.534 1.534 0 0 0-.05.052C6.29 17.792 4 16.53 4 15V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9c1.778 0 3.438-.358 4.69-.984Zm4.508 2.838a.5.5 0 1 0-.707-.708l-1.186 1.186a.638.638 0 0 0-.035.053a2 2 0 0 0-2.436.3l-.6.6a.981.981 0 0 0 0 1.386l1.442 1.439a.981.981 0 0 0 1.387 0l.6-.6a2 2 0 0 0 .3-2.437a.36.36 0 0 0 .053-.035l1.182-1.184Zm-5.671 3.521a.98.98 0 0 0-1.386 0l-.6.6a2 2 0 0 0-.3 2.437a.422.422 0 0 0-.053.035l-1.182 1.185a.5.5 0 0 0 .707.707l1.185-1.186a.499.499 0 0 0 .036-.053a2 2 0 0 0 2.436-.3l.6-.6a.98.98 0 0 0 0-1.387l-1.443-1.438Z"
      />
    </svg>
  );
}
export default DatabasePlugConnectedFilled;
