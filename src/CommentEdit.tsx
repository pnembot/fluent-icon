import type { SVGProps } from "react";

export function CommentEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 8.134V5.566C17 4.713 16.296 4 15.4 4H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001l2.167-1.6l-.314 1.254c-.021.086-.037.17-.046.255l-1.213.895a1.009 1.009 0 0 1-1.4-.199a.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h10.8C16.836 3 18 4.149 18 5.566V8.69a2.853 2.853 0 0 0-1-.556Zm-2.193 1.412l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.185 2.185 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 1 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default CommentEdit;
