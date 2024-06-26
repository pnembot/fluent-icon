import type { SVGProps } from "react";

export function BotSparkleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.479 8c.179 0 .356.034.521.099V4.5A1.5 1.5 0 0 0 13.5 3h-3v-.5A.48.48 0 0 0 10 2c-.276 0-.5.23-.5.5V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.338-1.039l.004-.012A1.423 1.423 0 0 1 14.48 8ZM7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0ZM10 18c1.743 0 3.042-.226 4.005-.612a1.3 1.3 0 0 1 .117-.44a1.424 1.424 0 0 1-.964-.897l-.004-.012l-.351-1.08l-.035-.09a1.207 1.207 0 0 0-.257-.383l-.064-.06a1.207 1.207 0 0 0-.406-.232l-1.08-.35l-.011-.005a1.423 1.423 0 0 1-.545-2.336H5.309a1.81 1.81 0 0 0-1.809 1.81v.689h.005c.034.78.248 1.757 1.123 2.555C5.584 17.43 7.234 18 10 18Zm5.226-7.647l-.348-1.07a.423.423 0 0 0-.799 0l-.348 1.07a2.206 2.206 0 0 1-1.377 1.397l-1.071.348a.423.423 0 0 0 0 .798l1.071.348a2.208 2.208 0 0 1 1.399 1.403l.348 1.07a.423.423 0 0 0 .798 0l.349-1.07a2.205 2.205 0 0 1 1.398-1.397l1.072-.348a.424.424 0 0 0 0-.798l-.022-.005l-1.072-.349a2.207 2.207 0 0 1-1.398-1.397Zm3.791 6.612l.766.248l.015.004a.303.303 0 0 1 .147.46a.302.302 0 0 1-.147.11l-.765.248a1.578 1.578 0 0 0-1 .998l-.248.765a.302.302 0 0 1-.57 0l-.249-.764a1.575 1.575 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.146-.46a.303.303 0 0 1 .146-.11l.765-.248a1.577 1.577 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.575 1.575 0 0 0 .998.999Z"
      />
    </svg>
  );
}
export default BotSparkleFilled;
