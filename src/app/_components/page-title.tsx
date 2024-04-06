type Props = {
  children: any;
};

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">
      {children}
    </h1>
  );
}
