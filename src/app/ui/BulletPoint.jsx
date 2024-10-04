export default function BulletPoint({ point }) {
  return (
    <li className="list-none relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:transform before:-translate-y-1/2 text-white">
      {point}
    </li>
  );
}
