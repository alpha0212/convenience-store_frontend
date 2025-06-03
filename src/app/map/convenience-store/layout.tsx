import { Metadata } from "next";

export const metadata: Metadata = {
  title: '편의점 할인 상품 찾아보기',
  description: '편의점 할인 상품을 찾아보세요. 다양한 편의점에서 제공하는 할인 상품 정보를 확인할 수 있습니다.',
}

export default function ConvenienceStoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-slate-500">
      <nav className="flex w-full text-center bg-slate-400">지도가 보여집니다. 상단 선택 네브바입니다</nav>
      {children}
    </div>
  );
}