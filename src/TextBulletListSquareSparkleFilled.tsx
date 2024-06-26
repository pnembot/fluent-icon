import type { SVGProps } from "react";

export function TextBulletListSquareSparkleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.23 2.23 0 0 0-.532-.867a2.224 2.224 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931l-.766-.248a1.577 1.577 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.576 1.576 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57l-.015-.004Zm-3.027 3.557c-.22-.16-.38-.371-.48-.621l-.26-.802a.52.52 0 0 0-.14-.22a.636.636 0 0 0-.22-.14l-.762-.25c-.27-.1-.49-.261-.65-.481A1.31 1.31 0 0 1 13.104 8H9.499a.5.5 0 0 1 0-1h2.636l-.343-1.04c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532A1.419 1.419 0 0 1 9.088 3H5.749A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17h8.5A2.75 2.75 0 0 0 17 14.25v-2.329a1.453 1.453 0 0 1-.498.079a1.328 1.328 0 0 1-.746-.23ZM7.5 7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6.75 9.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM9 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Z"
      />
    </svg>
  );
}
export default TextBulletListSquareSparkleFilled;
