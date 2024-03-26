import React, { SVGProps } from "react";

export function ChatVideo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Zm6 1l1.146-1.146a.5.5 0 0 1 .854.353v3.586a.5.5 0 0 1-.854.353L12 11V9Zm-2-7a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.106 10.425a.5.5 0 0 1 .063.272l-.014.094l-.756 3.021l3.024-.754a.502.502 0 0 1 .188-.01l.091.021l.087.039A7 7 0 1 0 10 3Z"
      />
    </svg>
  );
}
export default ChatVideo;
