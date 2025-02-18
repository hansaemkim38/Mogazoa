import Image from 'next/image';

interface CategoryFilterProps {
  currentCategory: string;
}

export default function CategoryFilter({
  currentCategory,
}: CategoryFilterProps) {
  return (
    <button className="flex gap-[5px] rounded-[100px] border border-var-black3 bg-var-black2 px-[12px] py-[6px] text-[14px] text-var-gray1 hover:text-var-gray2">
      <Image src="/category.svg" alt="카테고리" width={18} height={18} />
      <span>{currentCategory}</span>
    </button>
  );
}
