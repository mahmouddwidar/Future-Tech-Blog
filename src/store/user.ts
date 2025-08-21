import { PayLoad } from '@/utils/type';
import { create } from 'zustand';

type UserStore = {
    user: PayLoad | null;
    setUser: (user: PayLoad | null) => void;
    clearUser: () => void;
};

export const userStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}));