"use client";

import BasicButton from "@/components/BasicButton";

const ClientPage = () => {
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-2 gap-4 mx-auto w-fit">
        <BasicButton data-testid="primary-btn" variant="primary">
          Basic
        </BasicButton>
        <BasicButton data-testid="secondary-btn" variant="secondary">
          Basic
        </BasicButton>
        <BasicButton data-testid="destructive-btn" variant="destructive">
          Basic
        </BasicButton>
        <BasicButton data-testid="disabled-btn" variant="primary" disabled>
          Basic
        </BasicButton>
      </div>
    </div>
  );
};

export default ClientPage;
