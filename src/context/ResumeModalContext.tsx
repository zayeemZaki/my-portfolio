import { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | null>(null);

export const ResumeModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResumeModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ResumeModalContext.Provider>
  );
};

export const useResumeModal = () => {
  const ctx = useContext(ResumeModalContext);
  if (!ctx) throw new Error('useResumeModal must be used within ResumeModalProvider');
  return ctx;
};
