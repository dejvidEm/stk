'use client';

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[50px]">
      {children}
    </div>
  );
}





